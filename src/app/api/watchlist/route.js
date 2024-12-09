"use serveur";
import { NextResponse } from "next/server";

import connectDB from "../../../../config/database";
import ListeModel from "../../../../models/listeModel";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
export async function POST(req) {
    const { userId, animeId } = await req.json();
    console.log(userId);
    
    await connectDB();
    const animeExists = await ListeModel.findById(animeId);
    if (!animeExists) {
      return new NextResponse.json({ error: "Aucun anime trouver" }, { status: 404 });
    }
  
    const user = await prisma.user.update({
      where: { id: parseInt(userId, 10) },
      data: {
        watchlist: { push: animeId },
      },
    });
  
    return NextResponse.json((user), { status: 200 });
  }

  export async function DELETE(req) {
    const { userId, animeId } = await req.json();
    console.log(userId);
    console.log("ID utilisateur :", userId);
    console.log("ID anime à supprimer :", animeId);
    const user = await prisma.user.findUnique({
      where: { id: parseInt(userId, 10) },
    });

    if (!user) {
      return new Response(
        JSON.stringify({ error: "Utilisateur introuvable." }),
        { status: 404 }
      );
    }

    if (!user.watchlist || !Array.isArray(user.watchlist)) {
      return new Response(
        JSON.stringify({ error: "Watchlist introuvable ou invalide." }),
        { status: 400 }
      );
    }
    const updatedWatchlist = user.watchlist.filter((id) => id !== animeId);
    const updatedUser = await prisma.user.update({
      where: { id: parseInt(userId, 10) },
      data: {
        watchlist: { set: updatedWatchlist },
      },
    });
  
    return NextResponse.json((updatedUser), { status: 200 });
  }

  export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userProfile");
    console.log(userId);
    console.log("URL Request:", req.url);
    console.log("userId:", userId);
    if (!userId || isNaN(userId)) {
      return new NextResponse.json({ error: "L'ID utilisateur est requis." },
        { status: 400 }
      );
    }
    
    const user = await prisma.user.findUnique({
      where: { id: parseInt(userId) },
    });

    if (!user) {
      return new NextResponse.json({ error: "Utilisateur introuvable." },
        { status: 404 }
      );
    }

    console.log("Utilisateur trouvé :", user);

    if (!user.watchlist || user.watchlist.length === 0) {
      return new Response(
        JSON.stringify({ error: "Aucune watchlist trouvée pour cet utilisateur." }),
        { status: 404 }
      );
    }
  
    const watchlist = await ListeModel.find({ _id: { $in: user.watchlist } });
    console.log("Watchlist récupérée :", watchlist);
  
    return NextResponse.json(watchlist,{ success: true });
  }
