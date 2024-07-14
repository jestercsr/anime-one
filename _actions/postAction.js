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

export async function getMangaAnimeID(_actions, anime) {
  try {
    await connectDB();
    const data = JSON.parse(
      JSON.stringify(
        await MangaModel.findOne({
          slug: _actions,
          animation: { $elemMatch: { animeId: anime } },
        })
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
