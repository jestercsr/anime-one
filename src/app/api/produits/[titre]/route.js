"use server";
import { NextResponse } from "next/server";
import connectDB, { prisma } from "../../../../../config/database";
import ProductModel from "../../../../../models/productModel";

export async function POST(req) {
  try {
    await connectDB();
    const { userId, productId, rating } = await req.json();

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });
    if (!user) {
      return (
        new NextResponse.json({ message: "Utilisateur non trouvé" }),
        { status: 404 }
      );
    }

    const product = await ProductModel.findOne({ titre: productId });

    if (!product) {
      return (
        new NextResponse.json({ message: "Produit non trouvé" }),
        { status: 404 }
      );
    }

  } catch (error) {
    console.error("Erreur lors de l'ajout de la note:", error);
    return NextResponse.json(
      { message: "Erreur lors de l'ajout de la note" },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  const { titre } = params;
  try {
    await connectDB();
    const produitOne = await ProductModel.findOne({ titre: titre });
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
