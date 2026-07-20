import mongoose from "mongoose";

const { Schema } = mongoose;

const movieAllSchema = new Schema(
  {
    image: String,
    name: { type: String, unique: true },
    url: String,
    auteur: [String],
    genre: [String],
    description: String,
    production: [String],
    studio: [String],
    videos: String,
    manga: String,
    type: String,
    classNav: String,
    backNav: String,
    searchNav: String,
    listeSearchNav: String,
    titre: String,
    rating: Number,
    saison: Number,
  },
  { timestamps: true },
);
const MovieModel =
  mongoose.models.moviesAll || mongoose.model("moviesAll", movieAllSchema);

export default MovieModel;
