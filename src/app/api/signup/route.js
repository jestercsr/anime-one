"use server";
import { sql } from "@vercel/postgres";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import prisma from "@prisma/client";

export async function POST(req) {
  try {
    const { username, email, password, recaptchaToken } = req.body;

    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}&response=${recaptchaToken}`,
      {
        method: "POST",
      }
    );

    const recaptchaData = await recaptchaResponse.json();
    if (!recaptchaData.success) {
      return new NextResponse.json(
        { error: "Validation du reCAPTCHA à échouée" },
        { status: 400 }
      );
    }

    await prisma.$queryRaw`
      INSERT INTO User (username, password, email)
      VALUES (${username}, ${password}, ${email})
    `;

    return new NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return new NextResponse.json({ error: "Database error" }, { status: 500 });
  }
}
