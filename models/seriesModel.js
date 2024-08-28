"use server";
import mongoose, { Schema, models } from "mongoose";

let SerieModel;

if (mongoose.models.seriesAll) {
  SerieModel = models.seriesAll;
} else {
  const serieAllSchema = new Schema(
    {
      image: String,
      name: { type: String, unique: true },
      url: String,
      genre: [String],
      description: [String],
      auteur: [String],
    },
    { timestamps: true }
  );
  SerieModel = mongoose.model("seriesAll", serieAllSchema);
}

export default SerieModel;
