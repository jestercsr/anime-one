"use server";
import { query } from "@lib/db";

export async function POST(req) {
  const { userId, offreId } = req.body;

  try {
    await query("UPDATE users SET offer_id = $1 WHERE id = $2", [
      offreId,
      userId,
    ]);

    res.status(200).json({ message: "Offre sélectionnée avec succès" });
  } catch (error) {
    res.status(500).json({ error: `Erreur lors de la sélection de l'offre` });
  }
}
