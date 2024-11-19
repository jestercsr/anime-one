"use server";
import mongoose, { Schema, models } from "mongoose";

let CollectionModel;

if (mongoose.models.collectionAll) {
  CollectionModel = models.collectionAll;
} else {
  const collectionAllSchema = new Schema({
    header: String,
    name: { type: String, unique: true },
    url: String,
  },{ timestamps: true });
  CollectionModel = mongoose.model("collectionAll", collectionAllSchema);
}

export default CollectionModel;
