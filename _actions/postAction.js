"use server";

import MangaModel from "../models/testModel";
import connectDB from "../config/database";

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
