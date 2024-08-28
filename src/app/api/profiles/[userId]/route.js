import { NextResponse } from "next/server";
import { prisma } from "../../../../../config/database";

export async function GET(req, {params}) {
    const { userId } = params;
    const numericUserId = parseInt(userId, 10);
    
    if (!userId) {
      return NextResponse.json({ error: "User ID is required" }, { status: 400 });
    }
    const profiles = await prisma.$queryRawUnsafe(`
    SELECT p."avatarId", a."images", p."nom", u."username"
        FROM "Profile" p
        LEFT JOIN "Avatar" a ON p."avatarId" = a."id"
        LEFT JOIN "User" u ON p."userId" = u."id"
        WHERE p."userId" = $1;`,numericUserId)
  ;
  
    return NextResponse.json(profiles);
  }