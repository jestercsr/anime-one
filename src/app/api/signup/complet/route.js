"use server";
import { query } from "@lib/db";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { userId, prenom, nom, phone, carte_bancaire, date_naissance } =
    await req.json();

  try {
    await query(
      "UPDATE users SET prenom = $1, nom = $2, phone = $3, carte_bancaire = $4, date_naissance = $5 WHERE id = $6",
      [prenom, nom, phone, carte_bancaire, date_naissance, userId]
    );

    return new NextResponse(
      JSON.stringify({ message: "Inscription terminée avec succès" }),
      { status: 200 }
    );
  } catch (error) {
    return new NextResponse(
      JSON.stringify({
        error: `Erreur lors de la finalisation de l'inscription`,
      }),
      { status: 500 }
    );
  }
}
