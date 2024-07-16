"use server";
import mongoose, { Schema, models } from "mongoose";

let ListeModel;

if (mongoose.models.listeAll) {
  ListeModel = models.listeAll;
} else {
  const listeAllSchema = new Schema({
    image: String,
    name: { type: String, unique: true },
    url: String,
    categorie: [String],
    anime: [String],
    typeCategorie: [String],
  },{ timestamps: true });
  ListeModel = mongoose.model("listeAll", listeAllSchema);
}

export default ListeModel;
