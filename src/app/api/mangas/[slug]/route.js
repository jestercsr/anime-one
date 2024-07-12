import { NextResponse } from "next/server";
import connectDB from "../../../../../config/database";
import MangaModel from "../../../../../models/testModel";

export async function PUT(request, { params }) {
  const { slug } = params;
  const {} = await request.json();
  await connectDB();
  await MangaModel.findByIdAndUpdate(slug, {});
  return NextResponse.json({ message: "Manga mis à jour" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { slug } = params;
  await connectDB();
  const mangaName = await MangaModel.findOne({ slug: slug });
  return NextResponse.json({ mangaName }, { status: 200 });
}
