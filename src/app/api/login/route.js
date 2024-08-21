'use server'
import { query } from "@lib/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { email, password } = await req.json();

  try {
    const result = await query("SELECT * FROM user WHERE email = $1", [email]);

    if (result.rows.length === 0) {
      return new NextResponse(
        JSON.stringify({ message: `L'email incorrect` }),
        { status: 401 }
      );
    }

    const user = result.rows[0];
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return new NextResponse(
        JSON.stringify({ message: "Mot de passe incorrect" }),
        { status: 401 }
      );
    }

    return new NextResponse(JSON.stringify({ message: "Connexion réussie" }), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ error: "Erreur lors de la connexion" }),
      { status: 500 }
    );
  }
}
