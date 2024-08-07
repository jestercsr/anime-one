import { NextResponse } from "next/server";
import { connection } from "../../../../config/database";

export async function GET(req, res) {
  try {
    const db = await connection()
    const [rows] = await db.execute("SELECT * FROM user");
    return NextResponse.json([rows], { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Une erreur est survenue", error: error.message },
      { status: 500 }
    );
  }
}
