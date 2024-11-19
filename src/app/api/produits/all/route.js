"use server";
import { NextResponse } from "next/server";
import connectDB from "../../../../../config/database";
import ProductModel from "../../../../../models/productModel";

export async function GET() {
  await connectDB();
  const produit = await ProductModel.find({ genre: { $in: "Figurine" } });
  return NextResponse.json({ produit }, { status: 200 });
}
