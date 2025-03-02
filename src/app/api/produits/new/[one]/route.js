"use server";
import { NextResponse } from "next/server";
import connectDB from "../../../../../../config/database";
import ProductModel from "../../../../../../models/productModel";

export async function GET(request, { params }) {
  const { one } = params;
  try {
    await connectDB();
    const produitOne = await ProductModel.find({ manga: one, genre: {$in: "New"} });
    if (!produitOne) {
      return NextResponse.json(
        { message: "Aucun produit trouvé" },
        { status: 404 }
      );
    }
    return NextResponse.json({ produitOne }, { status: 200 });
  } catch (error) {
    console.error("Impossible de récupérer le produit:", error);
    return NextResponse.json(
      { message: "Impossible de récupérer le produit" },
      { status: 500 }
    );
  }
}
