/**
 * Modifier les données d'n manga
 * @param {string} slug - Les données modifier a envoyer à la BDD
 * @returns {message} - Les données ont bien été modifier
 * Récuperer les données d'un manga en fonction de son nom (ID)
 * @param {string} slug - Le nom du manga en minuscule
 * @returns {object} - Les données du manga sélectionné
 * Supprimer un manga par son nom (ID)
 * @param {string} slug - Le nom du manga en minuscule
 * @returns {message} Les données du manga qui a se nom là ont été supprimer définitivement
 */
import { NextResponse } from "next/server";
import connectDB from "../../../../../config/database";
import MangaModel from "../../../../../models/mangaModel";

export async function PUT(request, { params }) {
  const { slug } = params;
  try {
    const data = await request.json();
    await connectDB();
    const update = await MangaModel.findOneAndUpdate({ slug }, data, {
      new: true, runValidators: true
    });
    if (!update) {
      return NextResponse.json({ message: "Aucun manga trouvé" }, { status: 404 });
    }
    return NextResponse.json({ update}, { status: 200 });
  } catch (error) {
    console.error("Impossible de mettre à jour le manga:", error);
    return NextResponse.json(
      { message: "Impossible de mettre à jour le manga" },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  const { slug } = params;
  try {
    await connectDB();
    const mangaName = await MangaModel.findOne({ slug: slug });
    if (!mangaName) {
      return NextResponse.json({ message: "Aucun manga trouvé" }, { status: 404 });
    }
    return NextResponse.json({ mangaName }, { status: 200 });
  } catch (error) {
    console.error("Impossible de récupérer le manga:", error);
    return NextResponse.json(
      { message: "Impossible de récupérer le manga" },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  const { slug } = params;
  await connectDB();
  const deletedManga = await MangaModel.findOneAndDelete({ slug });
  if (deletedManga) {
    return NextResponse.json({ message: "Manga supprimé" }, { status: 200 });
  } else {
    return NextResponse.json({ message: "Manga non trouvé" }, { status: 404 });
  }
}
