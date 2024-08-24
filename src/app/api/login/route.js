"use server";
import bcrypt from "bcryptjs";
import { NextResponse } from 'next/server';
import prisma from '@prisma/client';

export async function POST(req) {
  const { email, password, recaptchaToken } = req.body;

  try {
    const recaptchaRes = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}&response=${recaptchaToken}`, {
      method: 'POST',
    });
    const recaptchaData = await recaptchaRes.json();
    if (!recaptchaData.success) {
      return NextResponse.json({ error: 'Validation du reCAPTCHA à échoué' }, { status: 400 });
    }

    const user = await prisma.$queryRaw`SELECT id,username FROM User WHERE email = ${email} AND password = ${password}`;

    if (user.rows.length === 0 ) {
      return new NextResponse.json({ error: "Email ou mot de passe incorrect" }, { status: 401 });
    } 
    return new NextResponse.json(user[0])
    
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erreur de connexion' }, { status: 500 });
  }
}
