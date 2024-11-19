"use server";
import { NextResponse } from "next/server";
import connectDB from "../../../../../config/database";
import ProductModel from "../../../../../models/productModel";

export async function GET(request) {
  try {
    await connectDB();
    const limit = 4;
    const { searchParams } = new URL(request.url);
    const skip = parseInt(searchParams.get("skip") || "0", 10);
    const produitOne = await ProductModel.find();
    const shuffledProducts = produitOne.sort(() => 0.5 - Math.random());
    const produits = shuffledProducts.slice(skip, skip + limit);
    if (!produits) {
      return NextResponse.json(
        { message: "Aucun produit trouvé" },
        { status: 404 }
      );
    }
    return NextResponse.json({ produits }, { status: 200 });
  } catch (error) {
    console.error("Impossible de récupérer le produit:", error);
    return NextResponse.json(
      { message: "Impossible de récupérer le produit" },
      { status: 500 }
    );
  }
}
