'use server'
import mongoose, {Schema, models} from "mongoose";

let MangaModel;

if (mongoose.models.mangaName) {
  MangaModel = models.mangaName;
} else {
  const mangaSchema = new Schema({
    slug: {
      type: String,
      unique: true,
    }, 
    imageTop: String,
    navClass: String,
    back: String,
    search: String,
    listeSearch: String,   
    imageShow: [
      {
        img: String,
        url: String,
      },
    ],    
    titre: String,
    imageCarousel: [
      {
        image: String,
        name: String,
        url: String,
      },
    ],
    animation: [
      {
        animeId: String,
        anime_imageTop: String,
        classNav: String,
        backNav: String,
        searchNav: String,
        listeSearchNav: String,
        imageSee: [{ images: String, href: String }],
        anime_titre: String,
        anime_imageCarousel: [
          { anime_image: String, anime_name: String, anime_href: String },
        ],
      },
    ],
  },{ timestamps: true });
  MangaModel = mongoose.model("mangaName", mangaSchema);
}

export default MangaModel;
