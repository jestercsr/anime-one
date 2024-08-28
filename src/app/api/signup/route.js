"use server";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { prisma } from "../../../../config/database";

export async function POST(req) {
  const body = await req.json();
  console.log('Request body:', body);
  const { username, email, password, recaptchaToken } = body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
      {
        method: "POST",
      }
    );

    const recaptchaData = await recaptchaResponse.json();
    console.log('reCAPTCHA result:', recaptchaData);

    const data = await prisma.$queryRawUnsafe(`
      INSERT INTO "User" (username, password, email)
      VALUES ($1, $2, $3)`,username, hashedPassword, email)
    ;
    return NextResponse.json(data,{ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const username = searchParams.get("username");

  try {
    const data = await prisma.$queryRawUnsafe(`SELECT * FROM "User" WHERE username=$1`, username);
    
    return NextResponse.json(data,{ success: true })
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur lors de la récupération des utilisateurs" }, { status: 500 });
  }
}
