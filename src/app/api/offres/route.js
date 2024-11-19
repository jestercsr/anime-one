"use server";
/**
 * Récuperer les données des offres pour l'inscription
 * Envoie des données pour modifier le choix de l'utilisateur
 * @param {string} req - L'ID de l'utilisateur et l'ID de l'offre
 * @returns {object} - Les données du manga sélectionné ont été envoyés
 */
import { NextResponse } from "next/server";
import { prisma } from "../../../../config/database";

export async function POST(req) {
  const { userId, offreId } = req.body;

  try {
    await prisma.$queryRawUnsafe(`UPDATE "User" SET offreId = $1 WHERE id = $2`, offreId, userId);

    return NextResponse.json({ message: "Offre sélectionnée avec succès" });
  } catch (error) {
    return NextResponse.json({ error: `Erreur lors de la sélection de l'offre` });
  }
}

export async function GET() {
  try {
    const data = await prisma.$queryRawUnsafe(`SELECT * FROM "Offre"`);
    
    return NextResponse.json(data,{ success: true })
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur lors de la récupération des offres" }, { status: 500 });
  }
}