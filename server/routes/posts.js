import { Hono } from "hono";
import connectDB from "../lib/mongo.js";
import MangaModel from "../models/mangaModel.js";
import ListeModel from "../models/listeModel.js";
import MovieModel from "../models/moviesModel.js";

const postRoute = new Hono();

// Récupérer un manga par slug
postRoute.get("/manga/:slug", async (c) => {
  try {
    await connectDB();

    const { slug } = c.req.param();

    const data = await MangaModel.findOne({ slug });

    if (!data) {
      return c.json(
        { message: "Manga introuvable" },
        404
      );
    }

    return c.json(data, 200);
  } catch (error) {
    console.error(error);

    return c.json(
      { message: error.message },
      500
    );
  }
});

// Modifier un manga
postRoute.put("/manga/:slug", async (c) => {
  try {
    await connectDB();

    const { slug } = c.req.param();

    const body = await c.req.json();

    const updatedManga =
      await MangaModel.findOneAndUpdate(
        { slug },
        body,
        { new: true }
      );

    if (!updatedManga) {
      return c.json(
        { message: "Manga introuvable" },
        404
      );
    }

    return c.json(updatedManga, 200);
  } catch (error) {
    console.error(error);

    return c.json(
      { message: error.message },
      500
    );
  }
});

// Recommander
postRoute.get("/listes/recommander", async (c) => {
  try {
    await connectDB();

    const data = await ListeModel.find({
      typeCategorie: { $in: "Recommander" },
    }).sort({ name: "desc" });

    return c.json(data, 200);
  } catch (error) {
    return c.json(
      { message: error.message },
      500
    );
  }
});

// Classique
postRoute.get("/listes/classiques", async (c) => {
  try {
    await connectDB();

    const data = await ListeModel.find({
      typeCategorie: { $in: "Classique" },
    }).sort({ name: "asc" });

    return c.json(data, 200);
  } catch (error) {
    return c.json(
      { message: error.message },
      500
    );
  }
});

// Anime Trending
postRoute.get("/listes/anime-trending", async (c) => {
  try {
    await connectDB();

    const data = await ListeModel.find({
      typeCategorie: { $in: "AnimeTrending" },
    }).sort({ name: "asc" });

    return c.json(data, 200);
  } catch (error) {
    return c.json(
      { message: error.message },
      500
    );
  }
});

// Scan Trending
postRoute.get("/listes/scan-trending", async (c) => {
  try {
    await connectDB();

    const data = await ListeModel.find({
      typeCategorie: { $in: "ScanTrending" },
    }).sort({ name: "asc" });

    return c.json(data, 200);
  } catch (error) {
    return c.json(
      { message: error.message },
      500
    );
  }
});

// Movie Recommander
postRoute.get("/listes/movie-recommander", async (c) => {
  try {
    await connectDB();

    const data = await ListeModel.find({
      typeCategorie: { $in: "MovieRecommander" },
    }).sort({ name: "asc" });

    return c.json(data, 200);
  } catch (error) {
    return c.json(
      { message: error.message },
      500
    );
  }
});

// Toutes les listes
postRoute.get("/listes", async (c) => {
  try {
    await connectDB();

    const data = await ListeModel.find()
      .sort({ name: "asc" });

    return c.json(data, 200);
  } catch (error) {
    return c.json(
      { message: error.message },
      500
    );
  }
});

// Séries
postRoute.get("/listes/series", async (c) => {
  try {
    await connectDB();

    const data = await ListeModel.find({
      anime: { $in: "Series" },
    }).sort({ name: "asc" });

    return c.json(data, 200);
  } catch (error) {
    return c.json(
      { message: error.message },
      500
    );
  }
});

// Films
postRoute.get("/listes/films", async (c) => {
  try {
    await connectDB();

    const data = await ListeModel.find({
      anime: { $in: "Films" },
    }).sort({ name: "asc" });

    return c.json(data, 200);
  } catch (error) {
    return c.json(
      { message: error.message },
      500
    );
  }
});

// Scans
postRoute.get("/listes/scans", async (c) => {
  try {
    await connectDB();

    const data = await ListeModel.find({
      anime: { $in: "Scans" },
    }).sort({ name: "asc" });

    return c.json(data, 200);
  } catch (error) {
    return c.json(
      { message: error.message },
      500
    );
  }
});

// Tous les films
postRoute.get("/movies/films", async (c) => {
  try {
    await connectDB();

    const data = await MovieModel.find({
      type: { $in: "films" },
    }).sort({ name: "asc" });

    return c.json(data, 200);
  } catch (error) {
    return c.json(
      { message: error.message },
      500
    );
  }
});

// Films + séries
postRoute.get("/movies/all", async (c) => {
  try {
    await connectDB();

    const data = await MovieModel.find({
      type: {
        $in: ["films", "series"],
      },
    }).sort({ name: "asc" });

    return c.json(data, 200);
  } catch (error) {
    return c.json(
      { message: error.message },
      500
    );
  }
});

// Toutes les séries
postRoute.get("/movies/series", async (c) => {
  try {
    await connectDB();

    const data = await MovieModel.find({
      type: { $in: "series" },
    }).sort({ name: "asc" });

    return c.json(data, 200);
  } catch (error) {
    return c.json(
      { message: error.message },
      500
    );
  }
});

export default postRoute;