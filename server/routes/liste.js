/**
 * Récuperer les données de tous les mangas disponible aux visionnages
 * Envoyer les données d'un manga pour la création dans le catalogue
 * @param {string} req - Les données à envoyer écrit par l'admin
 * @returns {message} - Les données du manga ont été envoyées avec succès
 */
import { Hono } from "hono";
import connectDB from "../lib/mongo.js";
import ListeModel from "../models/listeModel.js";

const listeRoute = new Hono();

listeRoute.get("/", async (c) => {
  await connectDB();
  const listeManga = await ListeModel.find();
  return c.json({ listeManga });
});

listeRoute.post("/", async (c) => {
  await connectDB();

  try {
    const data = await c.req.json();
    const newManga = new ListeModel(data);
    await newManga.save();

    return c.json({ message: "Ajout réussi!" }, { status: 201 });
  } catch (error) {
    return c.json(
      { error: "Echec de l'ajout", details: error.message },
      { status: 500 },
    );
  }
});

export default listeRoute;
