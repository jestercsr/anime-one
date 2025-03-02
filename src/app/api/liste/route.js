/**
 * Récuperer les données de tous les mangas disponible aux visionnages
 * Envoyer les données d'un manga pour la création dans le catalogue
 * @param {string} req - Les données à envoyer écrit par l'admin
 * @returns {message} - Les données du manga ont été envoyées avec succès
 */
import { NextResponse } from "next/server";
import connectDB from "../../../../config/database";
import ListeModel from "../../../../models/listeModel";

export async function GET() {
  await connectDB();
  const listeManga = await ListeModel.find();
  return NextResponse.json({ listeManga });
}

export async function POST(req, res) {
  await connectDB();

  try {
    const data = await req.json();
    const newManga = new ListeModel(data);
    await newManga.save();

    return NextResponse.json({ message: "Ajout réussi!" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Echec de l'ajout", details: error.message }, { status: 500 });
  }
}
