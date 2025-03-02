"use server";
/**
 * Récuperer les données d'un utilisateur en fonction de son email, mot de passe
 * @param {string} req - Données récuperer de l'utilisateur
 * @returns {object} - Les données de l'utilisateur sont envoyés a la page
 * Modifier les données d'un utilisateur en le marquant qu'il est supprimé
 * @param {number} userId - ID de l'utilisateur qui est connecté
 * @returns {message} - L'utilisateur a été modifier pour qu'il apparaisse comme supprimé
 */
import bcrypt from "bcryptjs";
import { NextResponse } from 'next/server';
import jwt from "jsonwebtoken"
import { cookies } from 'next/headers';
import { prisma } from "../../../../config/database";

export async function POST(req) {
  const body = await req.json();
  console.log('Request body:', body);

  const { email, password, recaptchaToken } = body;

  try {
    if (!email || !password || !recaptchaToken) {
      return NextResponse.json({ error: `Il manque l'email, le password ou le recaptcha token` }, { status: 400 });
    }
    const recaptchaRes = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`, {
      method: 'POST',
    });
    const recaptchaData = await recaptchaRes.json();
    console.log('reCAPTCHA result:', recaptchaData);

    const user = await prisma.$queryRawUnsafe(`SELECT * FROM "User" WHERE email = $1`, email);
    
    const isPasswordValid = await bcrypt.compare(password, user[0].password);
    if (!user || !isPasswordValid) {
      return NextResponse.json({ error: "Email ou mot de passe incorrect" }, { status: 401 });
    } 
    console.log('User found:', user[0]);
    const token = jwt.sign(
      { id: user[0].id, email: user[0].email, role: user[0].role, active: user[0].active, username: user[0].username },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const response = NextResponse.json({
      message: "Connexion réussie",
      profile: {
        id: user[0].id,
        email: user[0].email,
        role: user[0].role,
        active: user[0].active,
        username: user[0].username
      },
    });

    response.cookies.set('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 3600,
      path: '/',
      sameSite: 'strict',
    });

    response.cookies.set('cookieConsent', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 365 * 24 * 60 * 60,
      path: '/',
      sameSite: 'strict',
    });

    return response;
    
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erreur de connexion' }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  const { userId } = params
  const numUser = parseInt(userId, 10)
  const active = 'false'

  if (!userId) {
    return NextResponse.json({ error: "Profile ID is required" }, { status: 400 });
  }

  try {
    await prisma.$queryRawUnsafe(`
      UPDATE "User"
      SET "active" = $1
      WHERE "userId" = $2;
    `, active, numUser);

    return NextResponse.json({ message: "L'utilisateur à été supprimer avec succès" });
  } catch (error) {
    return NextResponse.json({ error: "Erreur lors de la suppression du compte" }, { status: 500 });
  }
}