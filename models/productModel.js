"use server";
import mongoose, { Schema, models } from "mongoose";

let ProductModel;

if (mongoose.models.productAlls) {
  ProductModel = models.productAlls;
} else {
  const ratingSchema = new Schema({
    userId: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
  });
  const productAllSchema = new Schema(
    {
      image: String,
      titre: { type: String, unique: true },
      url: String,
      prix: Number,
      genre: [String],
      description: [String],
      taille: [String],
      couleur: [String],
      ratings: [ratingSchema],
      numRatings: { type: Number, default: 0 },
      typeContenu: String,
      quantite: Number,
      commentaires: [String],
      articleRecommander: [
        {
          image: String,
          titre: { type: String, unique: true },
          url: String,
          prix: Number,
          genre: [String],
          description: [String],
          taille: [String],
          couleur: [String],
          typeContenu: String,
          quantite: Number,
          commentaires: [String],
        },
      ],
    },
    { timestamps: true }
  );

  productAllSchema.methods.calculateAverageRating = function () {
    if (this.ratings.length > 0) {
      const sum = this.ratings.reduce(
        (total, rating) => total + rating.rating,
        0
      );
      this.numRatings = sum / this.ratings.length;
    } else {
      this.numRatings = 0;
    }
  };
  ProductModel = mongoose.model("productAlls", productAllSchema);
}

export default ProductModel;
