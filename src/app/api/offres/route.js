"use server";
import { sql } from "@vercel/postgres";

export async function POST(req) {
  const { userId, offreId } = req.body;

  try {
    await sql`UPDATE "User" SET offreId = ${offreId} WHERE id = ${userId}`;

    res.status(200).json({ message: "Offre sélectionnée avec succès" });
  } catch (error) {
    res.status(500).json({ error: `Erreur lors de la sélection de l'offre` });
  }
}
