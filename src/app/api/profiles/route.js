"use server";
import { NextResponse } from "next/server";
import { prisma } from "../../../../config/database";

export async function POST(req) {
  const { userId, nom, avatarId } = await req.json();
  const numericUserId = parseInt(userId, 10);
  const numericAvatar = parseInt(avatarId, 10);

  if (!numericUserId || !nom || !avatarId) {
    return NextResponse.json(
      { error: "Toutes les données sont demandés" },
      { status: 400 }
    );
  }

  await prisma.$queryRawUnsafe(`
    INSERT INTO "Profile" ("userId", "nom", "avatarId")
    VALUES ($1, $2, $3)`,numericUserId, nom, numericAvatar)
  ;

  return NextResponse.json({ success: true });
}

export async function GET() {
  try {
    const data = await prisma.$queryRawUnsafe(`SELECT * FROM "Avatar"`)
    return NextResponse.json(data, {success: true})
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Erreur lors de la récupération des offres" }, { status: 500 });
  }
}
