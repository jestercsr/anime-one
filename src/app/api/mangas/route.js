"use server";
/**
 * Envoyer les données pour la création de la page d'un manga
 * @param {string} request - Toutes les données à envoyer
 * @returns {object} - Envoie vers la BDD
 * Récuperer les données des mangas
 * Supprimer un manga par ID
 * @param {string} request - L'ID du manga
 * @returns {object} - Les données du manga sélectionné ont été supprimés définitivement
 */
import { NextResponse } from "next/server";
import connectDB from "../../../../config/database";
import MangaModel from "../../../../models/mangaModel";

export async function POST(request) {
  await connectDB();

  const data = await request.json();

  const nouveauManga = new MangaModel(data);

  try {
    const savedManga = await nouveauManga.save();
    console.log("Nouveau Manga Créé:", savedManga);
    return NextResponse.json(
      { message: "Nouveau Manga Créé" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur lors de l'ajout du document:", error);
    return NextResponse.json(
      { message: "Erreur lors de l'ajout du document" },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectDB();
  const mangas = await MangaModel.find();
  return NextResponse.json({ mangas });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectDB();
  await MangaModel.findByIdAndDelete(id);
  return NextResponse.json(
    { message: "Le Manga à été supprimé avec succès" },
    { status: 200 }
  );
}
