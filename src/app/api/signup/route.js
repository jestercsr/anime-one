"use server";
import { sql } from "@vercel/postgres";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { username, password, email } = await req.json();

  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await sql`
      INSERT INTO "User" (username, password, email)
      VALUES (${username}, ${hashedPassword}, ${email})
    `;

    const userId = result.rows[0].id;
    return new Response(JSON.stringify({ userId }), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: `Erreur lors de l'inscription` }),
      { status: 500 }
    );
  }
}
