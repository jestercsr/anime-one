import { Hono } from "hono";
import connectDB from "../lib/mongo.js";
import MangaModel from "../models/mangaModel.js";
import { adminMiddleware } from "../middleware/admin.js";

const mangaRoute = new Hono();

mangaRoute.post("/", adminMiddleware, async (c) => {
  await connectDB();

  const data = await c.req.json();
  const nouveauManga = new MangaModel(data);

  try {
    const savedManga = await nouveauManga.save();
    console.log("Nouveau Manga Créé:", savedManga);
    return c.json(
      {
        message: "Nouveau Manga Créé",
        manga: savedManga,
      },
      201
    );
  } catch (error) {
    console.error("Erreur lors de l'ajout du document:", error);
    return c.json(
      {
        message: "Erreur lors de l'ajout",
      },
      500
    );
  }
});

mangaRoute.get("/", async (c) => {
  await connectDB();
  const mangas = await MangaModel.find();
  return c.json({ mangas });
});

mangaRoute.delete("/", async (c) => {
  const id = c.req.query("id");
  await connectDB();
  await MangaModel.findByIdAndDelete(id);
  return c.json(
    { message: "Le Manga à été supprimé avec succès" },
    { status: 200 },
  );
});

mangaRoute.put("/:slug", adminMiddleware, async (c) => {
  const { slug } = c.req.param();
  await connectDB();
  const update = await MangaModel.findOneAndUpdate({ slug }, data, {
    new: true,
    runValidators: true,
  });
  if (!update) {
    return c.json({ message: "Aucun manga trouvé" }, { status: 404 });
  }
  return c.json({ update }, { status: 200 });
});

mangaRoute.get("/:slug", async (c) => {
  const { slug } = c.req.param();
  await connectDB();
  const mangaName = await MangaModel.findOne({ slug: slug });
  if (!mangaName) {
    return c.json({ message: "Aucun manga trouvé" }, { status: 404 });
  }
  return c.json({ mangaName }, { status: 200 });
});

mangaRoute.delete("/:slug", adminMiddleware, async (c) => {
  const { slug } = c.req.param();
  await connectDB();
  const deletedManga = await MangaModel.findOneAndDelete({ slug });
  if (deletedManga) {
    return c.json({ message: "Manga supprimé" }, { status: 200 });
  } else {
    return c.json({ message: "Manga non trouvé" }, { status: 404 });
  }
});

mangaRoute.get("/:slug/:animation", async (c) => {
  const { slug, animation } = c.req.param();
  await connectDB();
  const mangaName = await MangaModel.findOne({
    slug: slug,
    animation: { $elemMatch: { animeId: animation } },
  });
  if (!mangaName) {
    return c.json({ message: "Aucun manga trouvé" }, { status: 404 });
  }
  return c.json({ mangaName }, { status: 200 });
});

mangaRoute.get("/:slug/:animation/:type", async (c) => {
  const { slug, animation, type } = c.req.param();
  await connectDB();
  const typeName = await MangaModel.findOne({
    manga: slug,
    type: animation,
    url: type,
  });
  return c.json({ typeName }, { status: 200 });
});

export default mangaRoute;
