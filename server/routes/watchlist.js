import { Hono } from "hono";
import connectDB from "../lib/mongo.js";
import ListeModel from "../models/listeModel.js";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const watchlistRoute = new Hono();

watchlistRoute.post("/", async (c) => {
  const { userId, animeId } = await c.req.json();
  console.log(userId);

  await connectDB();
  const animeExists = await ListeModel.findById(animeId);
  if (!animeExists) {
    return c.json({ error: "Aucun anime trouver" }, { status: 404 });
  }

  const user = await prisma.user.update({
    where: { id: parseInt(userId, 10) },
    data: {
      watchlist: { push: animeId },
    },
  });

  return c.json(user, { status: 200 });
});

watchlistRoute.delete("/", async (c) => {
  const { userId, animeId } = await c.req.json();
  console.log(userId);
  console.log("ID utilisateur :", userId);
  console.log("ID anime à supprimer :", animeId);
  const user = await prisma.user.findUnique({
    where: { id: parseInt(userId, 10) },
  });

  if (!user) {
    return c.json({ error: "Utilisateur introuvable." }, { status: 404 });
  }

  if (!user.watchlist || !Array.isArray(user.watchlist)) {
    return c.json(
      { error: "Watchlist introuvable ou invalide." },
      { status: 400 },
    );
  }
  const updatedWatchlist = user.watchlist.filter((id) => id !== animeId);
  const updatedUser = await prisma.user.update({
    where: { id: parseInt(userId, 10) },
    data: {
      watchlist: { set: updatedWatchlist },
    },
  });

  return c.json(updatedUser, { status: 200 });
});

watchlistRoute.get("/", async (c) => {
  const { searchParams } = new URL(c.req.url);
  const userId = searchParams.get("userProfile");
  console.log(userId);
  console.log("URL Request:", c.req.url);
  console.log("userId:", userId);
  if (!userId || isNaN(userId)) {
    return c.json({ error: "L'ID utilisateur est requis." }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { id: parseInt(userId) },
  });

  if (!user) {
    return c.json({ error: "Utilisateur introuvable." }, { status: 404 });
  }

  console.log("Utilisateur trouvé :", user);

  if (!user.watchlist || user.watchlist.length === 0) {
    return c.json(
      { error: "Aucune watchlist trouvée pour cet utilisateur." },
      { status: 404 },
    );
  }

  const watchlist = await ListeModel.find({ _id: { $in: user.watchlist } });
  console.log("Watchlist récupérée :", watchlist);

  return c.json(watchlist, { success: true });
});

export default watchlistRoute;
