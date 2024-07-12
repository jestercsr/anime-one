"use server";
import { NextResponse } from "next/server";
import connectDB from "../../../../config/database";
import MangaModel from "../../../../models/testModel";

export async function POST(request) {
  await connectDB();
  
  const data = await request.json();
  console.log("Received data:", data);

  const nouveauManga = new MangaModel(data);

  try {
    const savedManga = await nouveauManga.save();
    console.log("Document added successfully:", savedManga);
    return NextResponse.json({ message: "Nouveau Manga Créé" }, { status: 201 });
  } catch (error) {
    console.error("Error adding document:", error);
    return NextResponse.json({ message: "Erreur lors de l'ajout du document" }, { status: 500 });
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
