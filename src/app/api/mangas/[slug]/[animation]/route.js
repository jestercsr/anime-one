import { NextResponse } from "next/server";
import connectDB from "../../../../../../config/database";
import MangaModel from "../../../../../../models/testModel";

export async function GET(request, { params }) {
  const { slug, animation } = params;
  await connectDB();
  const mangaName = await MangaModel.findOne({
    slug: slug,
    animation: { $elemMatch: { animeId: animation } },
  });
  return NextResponse.json({ mangaName }, { status: 200 });
}
