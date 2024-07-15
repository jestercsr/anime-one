import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../config/database";
import ListeModel from "../../../../models/listeModel";

export async function GET(req) {
  await connectDB();

  try {
    const request = NextRequest.from(req);
    const { query } = request.query
    const searchQuery = query && query['query'];

    if (!searchQuery) {
      return NextResponse.json({ error: 'Missing query parameter' }, { status: 400 });
    }
    const mangas = await ListeModel.find({
      name: { $regex: searchQuery, $options: "i" },
    });

    return NextResponse.json({ mangas });
  } catch (error) {
    console.error("Erreur de récupération des données:", error);
    return NextResponse.json(
      { error: "Failed to fetch data" },
      { status: 400 }
    );
  }
}
