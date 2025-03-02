import { NextResponse } from "next/server";
import { prisma } from "../../../../../config/database";

export async function GET(req, { params }) {
  const { userId } = params;
  const numericUserId = parseInt(userId, 10);

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }
  const profiles = await prisma.$queryRawUnsafe(
    `
    SELECT p."avatarId", a."images", p."nom", u."username", p."id"
        FROM "Profile" p
        LEFT JOIN "Avatar" a ON p."avatarId" = a."id"
        LEFT JOIN "User" u ON p."userId" = u."id"
        WHERE p."userId" = $1;`,
    numericUserId
  );
  return NextResponse.json(profiles);
}

export async function POST(req, {params}) {
  const { userId } = params;
  const { nom, avatarId } = await req.json();
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

export async function PUT(req, { params }) {
  const { userId } = params;
  const body = await req.json();
  const { nom, avatarId, profileId } = body;
  const numProfile = parseInt(userId, 10)
  const idProfile = parseInt(profileId, 10)
  const idAvatar = parseInt(avatarId, 10)
  console.log(nom);
  

  if (!userId) {
    return NextResponse.json({ error: "Profile ID is required" }, { status: 400 });
  }

  try {
    await prisma.$queryRawUnsafe(`
      UPDATE "Profile"
      SET "nom" = $1, "avatarId" = $2
      WHERE "userId" = $3 AND "id" = $4;
    `, nom, idAvatar, numProfile, idProfile);

    const updatedProfile = await prisma.$queryRawUnsafe(`
      SELECT * FROM "Profile"
      WHERE "userId" = $1 AND "id" = $2;
    `, numProfile, idProfile);

    if (updatedProfile.length === 0) {
      return NextResponse.json({ error: "Profile not found" }, { status: 404 });
    }

    return NextResponse.json(updatedProfile[0]);
  } catch (error) {
    return NextResponse.json({ error: "Error updating profile" }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const { profileId } = params;

  if (!profileId) {
    return NextResponse.json({ error: "Profile ID is required" }, { status: 400 });
  }

  try {
    await prisma.$queryRawUnsafe(`
      DELETE FROM "Profile"
      WHERE "id" = $1;
    `, parseInt(profileId, 10));

    return NextResponse.json({ message: "Profile deleted successfully" });
  } catch (error) {
    return NextResponse.json({ error: "Error deleting profile" }, { status: 500 });
  }
}