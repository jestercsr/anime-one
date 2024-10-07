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
