"use server";

import MangaModel from "../models/mangaModel";
import connectDB from "../config/database";
import ListeModel from "../models/listeModel";
import MovieModel from "../models/moviesModel";
import ProductModel from "../models/productModel";
import CollectionModel from "../models/collectionModel";

export async function getManga(_actions) {
  try {
    await connectDB();
    const data = JSON.parse(
      JSON.stringify(await MangaModel.findOne({ slug: _actions }))
    );
    return data;
  } catch (error) {
    return { message: error.message };
  }
}

export async function updateManga(slug, updatedData) {
  try {
    await connectDB();
    const updatedManga = await MangaModel.findOneAndUpdate(
      { slug },
      updatedData,
      { new: true }
    );
    return JSON.parse(JSON.stringify(updatedManga));
  } catch (error) {
    return { message: error.message };
  }
}

export async function getRecommander() {
  try {
    await connectDB();
    const data = JSON.parse(
      JSON.stringify(
        await ListeModel.find({
          typeCategorie: { $in: "Recommander" },
        }).sort({ name: "desc" })
      )
    );
    return data;
  } catch (error) {
    return { message: error.message };
  }
}

export async function getClassique() {
  try {
    await connectDB();
    const data = JSON.parse(
      JSON.stringify(
        await ListeModel.find({
          typeCategorie: { $in: "Classique" },
        }).sort({ name: "asc" })
      )
    );
    return data;
  } catch (error) {
    return { message: error.message };
  }
}

export async function getAnimeTrending() {
  try {
    await connectDB();
    const data = JSON.parse(
      JSON.stringify(
        await ListeModel.find({
          typeCategorie: { $in: "AnimeTrending" },
        }).sort({ name: "asc" })
      )
    );
    return data;
  } catch (error) {
    return { message: error.message };
  }
}

export async function getScanTrending() {
  try {
    await connectDB();
    const data = JSON.parse(
      JSON.stringify(
        await ListeModel.find({
          typeCategorie: { $in: "ScanTrending" },
        }).sort({ name: "asc" })
      )
    );
    return data;
  } catch (error) {
    return { message: error.message };
  }
}

export async function getMovieReco() {
  try {
    await connectDB();
    const data = JSON.parse(
      JSON.stringify(
        await ListeModel.find({
          typeCategorie: { $in: "MovieRecommander" },
        }).sort({ name: "asc" })
      )
    );
    return data;
  } catch (error) {
    return { message: error.message };
  }
}

export async function getListeAll() {
  try {
    await connectDB();
    const data = JSON.parse(
      JSON.stringify(await ListeModel.find().sort({ name: "asc" }))
    );
    return data;
  } catch (error) {
    return { message: error.message };
  }
}

export async function getListeSeries() {
  try {
    await connectDB();
    const data = JSON.parse(
      JSON.stringify(
        await ListeModel.find({ anime: { $in: "Series" } }).sort({
          name: "asc",
        })
      )
    );
    return data;
  } catch (error) {
    return { message: error.message };
  }
}

export async function getListeFilms() {
  try {
    await connectDB();
    const data = JSON.parse(
      JSON.stringify(
        await ListeModel.find({ anime: { $in: "Films" } }).sort({
          name: "asc",
        })
      )
    );
    return data;
  } catch (error) {
    return { message: error.message };
  }
}

export async function getListeScans() {
  try {
    await connectDB();
    const data = JSON.parse(
      JSON.stringify(
        await ListeModel.find({ anime: { $in: "Scans" } }).sort({
          name: "asc",
        })
      )
    );
    return data;
  } catch (error) {
    return { message: error.message };
  }
}

export async function getFilmsAll() {
  try {
    await connectDB()
    const data = JSON.parse(JSON.stringify(await MovieModel.find({ type: {$in: "films"}}).sort({name: "asc"})))
    return data
  } catch (error) {
    return { message: error.message };
  }
}

export async function getSeriesAll() {
  try {
    await connectDB()
    const data = JSON.parse(JSON.stringify(await MovieModel.find({ type: {$in: "series"}}).sort({name: "asc"})))
    return data
  } catch (error) {
    return { message: error.message };
  }
}
