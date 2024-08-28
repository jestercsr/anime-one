"use server";
import mongoose, { Schema, models } from "mongoose";

let MovieModel;

if (mongoose.models.moviesAll) {
  MovieModel = models.moviesAll;
} else {
  const movieAllSchema = new Schema(
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
  MovieModel = mongoose.model("moviesAll", movieAllSchema);
}

export default MovieModel;
