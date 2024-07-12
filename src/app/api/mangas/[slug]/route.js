import { NextResponse } from "next/server";
import connectDB from "../../../../../config/database";
import MangaModel from "../../../../../models/testModel";

export async function PUT(request, { params }) {
  const { slug } = params;
  const data = await request.json();
  await connectDB();
  const update = await MangaModel.findOneAndUpdate({ slug: slug }, data, { new: true });
  return NextResponse.json({ message: "Manga mis à jour" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { slug } = params;
  await connectDB();
  const mangaName = await MangaModel.findOne({ slug: slug });
  return NextResponse.json({ mangaName }, { status: 200 });
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