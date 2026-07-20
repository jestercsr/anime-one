import mongoose from "mongoose";

const { Schema } = mongoose;

const serieAllSchema = new Schema(
  {
    image: String,
    name: { type: String, unique: true },
    url: String,
    genre: [String],
    description: [String],
    auteur: [String],
    production: [String],
    studio: [String],
  },
  { timestamps: true },
);
const SerieModel = mongoose.model("seriesAll", serieAllSchema);

export default SerieModel;
