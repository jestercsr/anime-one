"use server";
import mongoose, { Schema, models } from "mongoose";

let ProductModel;

if (mongoose.models.produitsAll) {
  ProductModel = models.produitsAll;
} else {
  const ratingSchema = new Schema({
    userId: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    commentaires: [String],
  });
  const productAllSchema = new Schema(
    {
      image: [String],
      titre: { type: String, unique: true },
      url: String,
      prix: Number,
      sale: Number,
      genre: [String],
      manga: String,
      description: String,
      type: String,
      taille: [String],
      couleur: [String],
      ratings: [ratingSchema],
      averageRating: { type: Number, default: 0 },
      typeContenu: String,
      quantite: Number,
      commentaires: [ratingSchema],
    },
    { timestamps: true }
  );

  productAllSchema.methods.calculateAverageRating = function () {
    if (this.ratings.length > 0) {
      const sum = this.ratings.reduce(
        (total, rating) => total + rating.rating,
        0
      );
      this.averageRating = sum / this.ratings.length;
    } else {
      this.averageRating = 0;
    }
  };
  ProductModel = mongoose.model("produitsAll", productAllSchema);
}

export default ProductModel;
