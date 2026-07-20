import mongoose from "mongoose";

const { Schema } = mongoose;

const collectionAllSchema = new Schema(
  {
    header: String,
    name: { type: String, unique: true },
    url: String,
  },
  { timestamps: true }
);

const CollectionModel = mongoose.models.collectionAll || mongoose.model("collectionAll", collectionAllSchema);

export default CollectionModel;