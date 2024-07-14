"use server";

import { NextResponse } from "next/server";
import connectDB from "../../../../config/database";
import ListeModel from "../../../../models/listeModel";

export async function GET() {
  await connectDB();
  const mangas = await ListeModel.find();
  return NextResponse.json({ mangas });
}
