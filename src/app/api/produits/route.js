"use server";

import { NextResponse } from "next/server";
import connectDB from "../../../../config/database";
import ProductModel from "../../../../models/productModel";

export async function GET() {
  await connectDB();
  const produit = await ProductModel.aggregate([{ $sample: { size: 9 } }])
  return NextResponse.json({ produit }, {status: 200});
}

export async function POST(request) {
  await connectDB();

  const data = await request.json();

  const newProduct = new ProductModel(data);

  try {
    const savedProduct = await newProduct.save();
    console.log("Nouveau Produit Créé:", savedProduct);
    return NextResponse.json(
      { message: "Nouveau Produit Créé" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Erreur lors de l'ajout du document:", error);
    return NextResponse.json(
      { message: "Erreur lors de l'ajout du document" },
      { status: 500 }
    );
  }
}
