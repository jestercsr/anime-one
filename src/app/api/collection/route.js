'use server'
/**
 * Récuperer les données de tous les mangas disponible pour la boutique par odre alphabétique
 */
import { NextResponse } from "next/server";
import connectDB from "../../../../config/database";
import CollectionModel from "../../../../models/collectionModel";

export async function GET() {
  try {
    await connectDB();
    const mangaName = await CollectionModel.find().sort({name: "asc"});
    if (!mangaName) {
      return NextResponse.json(
        { message: "Aucune collection trouvé" },
        { status: 404 }
      );
    }
    return NextResponse.json({ mangaName }, { status: 200 });
  } catch (error) {
    console.error("Impossible de récupérer la collection:", error);
    return NextResponse.json(
      { message: "Impossible de récupérer la collection" },
      { status: 500 }
    );
  }
}
