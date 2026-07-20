/**
 * Récuperer les données de tous les mangas disponible pour la boutique par odre alphabétique
 */
import { Hono } from "hono";
import connectDB from "../lib/mongo.js";
import CollectionModel from "../models/collectionModel.js";

const collectionRoute = new Hono();

collectionRoute.get("/", async (c) => {
  try {
    await connectDB();
    const mangaName = await CollectionModel.find().sort({ name: "asc" });
    if (!mangaName) {
      return c.json(
        { message: "Aucune collection trouvé" },
        { status: 404 },
      );
    }
    return c.json({ mangaName }, { status: 200 });
  } catch (error) {
    console.error("Impossible de récupérer la collection:", error);
    return c.json(
      { message: "Impossible de récupérer la collection" },
      { status: 500 },
    );
  }
});

collectionRoute.get("/:slug", async (c) => {
  const { slug } = c.req.param();
  try {
    await connectDB();
    const mangaName = await CollectionModel.findOne({ url: slug });
    if (!mangaName) {
      return c.json(
        { message: "Aucune collection trouvé" },
        { status: 404 },
      );
    }
    return c.json({ mangaName }, { status: 200 });
  } catch (error) {
    console.error("Impossible de récupérer la collection:", error);
    return c.json(
      { message: "Impossible de récupérer la collection" },
      { status: 500 },
    );
  }
});

export default collectionRoute;
