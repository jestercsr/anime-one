"";
import mongoose from "mongoose";

const { Schema } = mongoose;

const listeAllSchema = new Schema(
  {
    image: String,
    name: { type: String, unique: true },
    url: String,
    categorie: [String],
    anime: [String],
    typeCategorie: [String],
  },
  { timestamps: true },
);
const ListeModel =
  mongoose.models.listeAll || mongoose.model("listeAll", listeAllSchema);

export default ListeModel;
