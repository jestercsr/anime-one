"use server";
import { NextResponse } from "next/server";
import prisma from "@prisma/client";

export async function POST(req) {
  const { userId, nom, avatar } = req.body;

  if (!userId || !nom || !avatar) {
    return NextResponse.json(
      { error: "Toutes les données sont demandés" },
      { status: 400 }
    );
  }

  await prisma.$queryRaw`
    INSERT INTO Profile (user_id, nom, avatar)
    VALUES (${userId}, ${nom}, ${avatar})
  `;

  return NextResponse.json({ success: true });
}

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");
  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }
  const profiles = await prisma.$queryRaw`
  SELECT * FROM Profile WHERE userId = ${userId}
`;

  return NextResponse.json(profiles);
}
