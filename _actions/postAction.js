"use server";

import MangaModel from "../models/testModel";
import connectDB from "../config/database";
import ListeModel from "../models/listeModel";

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
    console.log(data);
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

export async function getAction() {
  try {
    await connectDB();
    const data = JSON.parse(
      JSON.stringify(
        await ListeModel.find({ categorie: { $in: "Action " } }).sort({
          name: "asc",
        })
      )
    );
    return data;
  } catch (error) {
    return { message: error.message };
  }
}
