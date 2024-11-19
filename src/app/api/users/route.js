"use serveur";
import { NextResponse } from "next/server";
import { prisma } from "../../../../config/database";

export async function GET() {
  try {
    const data = await prisma.$queryRawUnsafe(`SELECT id, username, prenom, nom, email, phone, date_naissance, role, active FROM "User"`);
    return NextResponse.json(data, { success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erreur lors de la récupération des utilisateurs" },
      { status: 500 }
    );
  }
}
