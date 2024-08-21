"use server";
import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { userId, prenom, nom, phone, carte_bancaire, date_naissance } =
    await req.json();

  try {
    await sql`
      UPDATE "User"
      SET prenom = ${prenom}, nom = ${nom}, phone = ${phone}, carte_bancaire = ${carte_bancaire}, date_naissance = ${date_naissance}
      WHERE id = ${userId}
    `;

    return new Response(
      JSON.stringify({ message: "Inscription terminée avec succès" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: `Erreur lors de la finalisation de l'inscription`,
      }),
      { status: 500 }
    );
  }
}
