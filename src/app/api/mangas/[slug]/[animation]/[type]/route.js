/**
 * Récuperer les données d'un manga en fonction de son nom (ID), animation et le type (contenu)
 * @param {string} slug - Le nom du manga
 * @param {string} animation - Le type d'animation à selectionné
 * @param {string} type - L'url de la série, films ou scans
 * @returns {object} - Les données du manga sélectionné ont été récuperés
 */
import connectDB from "../../../../../../../config/database";
import MovieModel from "../../../../../../../models/moviesModel";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { slug, animation, type } = params;
  await connectDB();
  const typeName = await MovieModel.findOne({
    manga: slug,
    type: animation,
    url: type,
  });
  return NextResponse.json({ typeName }, { status: 200 });
}
