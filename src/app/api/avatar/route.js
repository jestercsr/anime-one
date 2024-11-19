'use server'
/**
 * Récuperer toutes les infos de la table Avatar et l'organiser par odre alphabétique en fonction de images dans la BDD SQL
 */
import { NextResponse } from "next/server";
import { prisma } from "../../../../config/database";

export async function GET() {
  try {
    const data = await prisma.$queryRawUnsafe(`SELECT * FROM "Avatar" ORDER BY "images" ASC`);
    return NextResponse.json(data, { success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des offres" },
      { status: 500 }
    );
  }
}
