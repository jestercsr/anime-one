"use server";
import bcrypt from "bcryptjs";
import { NextResponse } from 'next/server';
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
    return NextResponse.json(user[0])
    
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erreur de connexion' }, { status: 500 });
  }
}
