import { NextResponse } from "next/server";
import connectDB from "../../../../../config/database";
import MangaModel from "../../../../../models/mangaModel";

export async function PUT(request, { params }) {
  const { slug } = params;
  try {
    const data = await request.json();
    await connectDB();
    const update = await MangaModel.findOneAndUpdate({ slug: slug }, data, {
      new: true,
    });
    if (!update) {
      return NextResponse.json({ message: "Aucun manga trouvé" }, { status: 404 });
    }
    return NextResponse.json({ message: "Manga mis à jour" }, { status: 200 });
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
