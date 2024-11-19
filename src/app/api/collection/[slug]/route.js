'use server'
/**
 * Récuperer les données d'un manga en fonction de son url disponible pour la boutique
 * @param {string} slug - L'url du manga pour la boutique
 * @returns {object} - Les données du manga sélectionné
 */
import { NextResponse } from "next/server";
import connectDB from "../../../../../config/database";
import CollectionModel from "../../../../../models/collectionModel";

export async function GET(request, { params }) {
  const { slug } = params;
  try {
    await connectDB();
    const mangaName = await CollectionModel.findOne({ url: slug });
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
