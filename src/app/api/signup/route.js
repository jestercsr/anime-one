"use server";
import { query } from "@lib/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { username, password, email } = await req.json();

  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await query(
      "INSERT INTO users (username, password, email) VALUES ($1, $2, $3) RETURNING id",
      [username, hashedPassword, email]
    );

    const userId = result.rows[0].id;
    return new NextResponse(JSON.stringify({ userId }), { status: 200 });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: `Erreur lors de l'inscription` }),
      { status: 500 }
    );
  }
}
