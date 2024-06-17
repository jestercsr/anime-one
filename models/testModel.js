'use server'
import mongoose, {Schema} from "mongoose";

let MangaName;

if (mongoose.models.mangaName) {
  MangaName = mongoose.model("mangaName");
} else {
  const mangaSchema = new Schema({
    id: {
      type: String,
      required: true,
    },
    animation: [
      {
        animeId: String,
        anime_imageCarousel: [
          { anime_href: String, anime_image: String, anime_name: String },
        ],
        anime_imageTop: String,
        anime_titre: String,
        backNav: String,
        classNav: String,
        imageSee: [{ href: String, images: String }],
      },
    ],
    back: String,
    imageCarousel: [
      {
        image: String,
        name: String,
        url: String,
      },
    ],
    imageShow: [
      {
        img: String,
        url: String,
      },
    ],
    imageTop: String,
    navClass: String,
    slug: {
      type: String,
      unique: true,
    },
    titre: String,
  });
  MangaName = mongoose.model("mangaName", mangaSchema);
}

export default MangaName;
