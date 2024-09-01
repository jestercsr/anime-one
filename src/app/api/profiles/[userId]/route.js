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

export async function PUT(req, { params }) {
  const { profileId } = params;
  const body = await req.json();
  const { nom, avatarId, selectProfile } = body;
  const numProfile = parseInt(profileId, 10)

  if (!profileId) {
    return NextResponse.json({ error: "Profile ID is required" }, { status: 400 });
  }

  try {
    await prisma.$queryRawUnsafe(`
      UPDATE "Profile"
      SET "nom" = $1, "avatarId" = $2
      WHERE "userId" = $3 AND "id" = $4;
    `, nom, avatarId, numProfile, selectProfile);

    return NextResponse.json({ message: "Profile updated successfully" });
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