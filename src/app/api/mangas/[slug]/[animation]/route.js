/**
 * Récuperer les données d'un manga en fonction de son nom (ID) et sont type d'animation
 * @param {string} slug - Le nom du manga en minuscule
 * @param {string} animation - Le type d'animation a sélectionner
 * @returns {object} - Les données du manga sélectionnés
 */
import { NextResponse } from "next/server";
import connectDB from "../../../../../../config/database";
import MangaModel from "../../../../../../models/mangaModel";

export async function GET(request, { params }) {
  const { slug, animation } = params;
  await connectDB();
  const mangaName = await MangaModel.findOne({
    slug: slug,
    animation: { $elemMatch: { animeId: animation } },
  });
  return NextResponse.json({ mangaName }, { status: 200 });
}
