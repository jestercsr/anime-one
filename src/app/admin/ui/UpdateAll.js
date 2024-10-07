"use client";
import React, { useState } from "react";
import ReactLoading from "react-loading";

export default function UpdateAll() {
  const [slug, setSlug] = useState("");
  const [manga, setManga] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await fetch(`/api/mangas/${slug}`);
    if (res.ok) {
      const data = await res.json();
      setManga(data.mangaName);
      console.log(data);
    } else {
      setManga(null);
    }

    setIsLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`/api/mangas/${manga.slug}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(manga),
    });

    if (res.ok) {
      alert("Manga updated successfully");
    } else {
      alert("Failed to update manga");
    }
  };

  const handleChange = (e) => {
    setManga({ ...manga, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (index, field, value, arrayName) => {
    const updatedArray = [...(manga[arrayName] || [])];
    updatedArray[index] = { ...updatedArray[index], [field]: value };
    setManga({ ...manga, [arrayName]: updatedArray });
  };

  const handleAddToArray = (arrayName) => {
    const updatedArray = [...(manga[arrayName] || []), {}];
    setManga({ ...manga, [arrayName]: updatedArray });
  };

  const handleRemoveFromArray = (index, arrayName) => {
    const updatedArray = [...(manga[arrayName] || [])];
    if (!updatedArray || index < 0 || index >= updatedArray.length) return;
    updatedArray.splice(index, 1);
    setManga({ ...manga, [arrayName]: updatedArray });
  };

  const handleArrayChangeNested = (
    parentIndex,
    arrayName,
    index,
    field,
    value
  ) => {
    const updatedParentArray = [...manga.animation];
    if (!updatedParentArray[parentIndex][arrayName]) {
      updatedParentArray[parentIndex][arrayName] = [];
    }
    const updatedNestedArray = [...updatedParentArray[parentIndex][arrayName]];
    updatedNestedArray[index] = {
      ...updatedNestedArray[index],
      [field]: value,
    };
    updatedParentArray[parentIndex][arrayName] = updatedNestedArray;
    setManga({ ...manga, animation: updatedParentArray });
  };

  const handleAddToArrayNested = (parentIndex, arrayName) => {
    const updatedParentArray = [...manga.animation];
    if (!updatedParentArray[parentIndex][arrayName]) {
      updatedParentArray[parentIndex][arrayName] = [];
    }
    updatedParentArray[parentIndex][arrayName].push({});
    setManga({ ...manga, animation: updatedParentArray });
  };

  const handleRemoveFromArrayNested = (parentIndex, arrayName, index) => {
    const updatedParentArray = [...manga.animation];
    if (!updatedParentArray[parentIndex][arrayName]) return;
    const nestedArray = updatedParentArray[parentIndex][arrayName];
    if (index < 0 || index >= nestedArray.length) return;
    nestedArray.splice(index, 1);
    updatedParentArray[parentIndex][arrayName] = nestedArray;
    setManga({ ...manga, animation: updatedParentArray });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
          placeholder="Entrer le nom du manga"
          className="text-sky-900 text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
        />
        <button
          type="submit"
          className="bg-emerald-400 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-emerald-900"
        >
          Rechercher
        </button>
      </form>

      {isLoading && (
        <p>
          <ReactLoading
            type="bubbles"
            color="#4f46e5"
            height={"3%"}
            width={"3%"}
          />
        </p>
      )}

      {manga && (
        <form
          onSubmit={handleSubmit}
          className="text-sm md:text-base lg:text-md xl:text-lg p-8 bg-gray-100 w-[90%] md:w-[50%] lg:w-[80%] m-auto rounded-xl text-sky-950"
        >
          <label>
            Identifiant (slug) :
            <input
              type="text"
              name="slug"
              value={manga.slug}
              onChange={handleChange}
              readOnly
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
            />
          </label>
          <br />
          <label>
            Image Top :
            <input
              type="text"
              name="imageTop"
              value={manga.imageTop}
              onChange={handleChange}
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
            />
          </label>
          <br />
          <label>
            Navbar CSS (bg - text) :
            <input
              type="text"
              name="navClass"
              value={manga.navClass}
              onChange={handleChange}
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
            />
          </label>
          <br />
          <label>
            Background CSS (bg) :
            <input
              type="text"
              name="back"
              value={manga.back}
              onChange={handleChange}
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
            />
          </label>
          <br />
          <label>
            Barre de recherche CSS :
            <input
              type="text"
              name="search"
              value={manga.search}
              onChange={handleChange}
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
            />
          </label>
          <br />
          <label>
            Liste Barre de recherche CSS :
            <input
              type="text"
              name="listeSearch"
              value={manga.listeSearch}
              onChange={handleChange}
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
            />
          </label>

          {manga.imageShow.map((imgObj, index) => (
            <div key={index} className="mt-2">
              <h5 className="text-md md:text-lg lg:text-xl xl:text-2xl text-indigo-400">
                Info Manga (Series, Films, Scans, API) :
              </h5>
              <label>
                Image :
                <input
                  className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
                  type="text"
                  value={imgObj.img}
                  onChange={(e) =>
                    handleArrayChange(index, "img", e.target.value, "imageShow")
                  }
                />
              </label>
              <br />
              <label>
                Lien :
                <input
                  type="text"
                  value={imgObj.url}
                  onChange={(e) =>
                    handleArrayChange(index, "url", e.target.value, "imageShow")
                  }
                  className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
                />
              </label>
              <br />
              <button
                type="button"
                onClick={() => handleRemoveFromArray(index, "imageShow")}
                className="bg-red-600 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-red-900"
              >
                Supprimer Info Manga
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddToArray("imageShow")}
            className="bg-green-500 text-slate-50 p-[5px] mb-10 rounded-lg hover:bg-green-700"
          >
            Ajouter Info Manga
          </button>
          <br />
          <label>
            Titre CSS (text) :
            <input
              type="text"
              name="titre"
              value={manga.titre}
              onChange={handleChange}
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
            />
          </label>

          {manga.imageCarousel.map((carouselObj, index) => (
            <div key={index}>
              <h5 className="text-md md:text-lg lg:text-xl xl:text-2xl text-indigo-400">
                Info Manga Recommander (Max 8) :
              </h5>
              <label>
                Image Manga Recommander :
                <input
                  type="text"
                  value={carouselObj.image}
                  onChange={(e) =>
                    handleArrayChange(
                      index,
                      "image",
                      e.target.value,
                      "imageCarousel"
                    )
                  }
                  className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
                />
              </label>
              <br />
              <label>
                Nom Manga Recommander :
                <input
                  type="text"
                  value={carouselObj.name}
                  onChange={(e) =>
                    handleArrayChange(
                      index,
                      "name",
                      e.target.value,
                      "imageCarousel"
                    )
                  }
                  className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
                />
              </label>
              <br />
              <label>
                Lien Manga Recommander :
                <input
                  type="text"
                  value={carouselObj.url}
                  onChange={(e) =>
                    handleArrayChange(
                      index,
                      "url",
                      e.target.value,
                      "imageCarousel"
                    )
                  }
                  className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
                />
              </label>
              <br />
              <button
                type="button"
                onClick={() => handleRemoveFromArray(index, "imageCarousel")}
                className="bg-red-600 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-red-900"
              >
                Supprimer Manga Recommander
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddToArray("imageCarousel")}
            className="bg-green-500 text-slate-50 p-[5px] mb-10 rounded-lg hover:bg-green-700"
          >
            Ajouter Manga Recommander
          </button>

          {manga.animation.map((animeObj, index) => (
            <div key={index}>
              <h5 className="text-md md:text-lg lg:text-xl xl:text-2xl text-indigo-400">
                Info Animation-Manga :
              </h5>
              <label>
                Anime ID :
                <input
                  type="text"
                  value={animeObj.animeId}
                  onChange={(e) =>
                    handleArrayChange(
                      index,
                      "animeId",
                      e.target.value,
                      "animation"
                    )
                  }
                  className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
                />
              </label>
              <br />
              <label>
                Image Top :
                <input
                  type="text"
                  value={animeObj.anime_imageTop}
                  onChange={(e) =>
                    handleArrayChange(
                      index,
                      "anime_imageTop",
                      e.target.value,
                      "animation"
                    )
                  }
                  className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
                />
              </label>
              <br />
              <label>
                Navbar CSS (bg - text) :
                <input
                  type="text"
                  value={animeObj.classNav}
                  onChange={(e) =>
                    handleArrayChange(
                      index,
                      "classNav",
                      e.target.value,
                      "animation"
                    )
                  }
                  className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
                />
              </label>
              <br />
              <label>
                Background CSS (bg) :
                <input
                  type="text"
                  value={animeObj.backNav}
                  onChange={(e) =>
                    handleArrayChange(
                      index,
                      "backNav",
                      e.target.value,
                      "animation"
                    )
                  }
                  className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
                />
              </label>
              <br />
              <label>
                Barre de recherche CSS Anime :
                <input
                  type="text"
                  value={animeObj.searchNav}
                  onChange={(e) =>
                    handleArrayChange(
                      index,
                      "searchNav",
                      e.target.value,
                      "animation"
                    )
                  }
                  className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
                />
              </label>
              <br />
              <label>
                Liste Barre de recherche Anime CSS :
                <input
                  type="text"
                  value={animeObj.listeSearchNav}
                  onChange={(e) =>
                    handleArrayChange(
                      index,
                      "listeSearchNav",
                      e.target.value,
                      "animation"
                    )
                  }
                  className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
                />
              </label>

              <div className="m-3">
                {animeObj.imageSee.map((imgSeeObj, imgIndex) => (
                  <div key={imgIndex}>
                    <h5 className="text-md md:text-lg lg:text-xl xl:text-2xl text-indigo-400">
                      Info Animation-Manga (Series, Films, Scans) :
                    </h5>
                    <label>
                      Image See :
                      <input
                        type="text"
                        value={imgSeeObj.images || ""}
                        onChange={(e) =>
                          handleArrayChangeNested(
                            index,
                            "imageSee",
                            imgIndex,
                            "images",
                            e.target.value
                          )
                        }
                        className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
                      />
                    </label>
                    <br />
                    <label>
                      Href :
                      <input
                        type="text"
                        value={imgSeeObj.href || ""}
                        onChange={(e) =>
                          handleArrayChangeNested(
                            index,
                            "imageSee",
                            imgIndex,
                            "href",
                            e.target.value
                          )
                        }
                        className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
                      />
                    </label>
                    <br />
                    <button
                      type="button"
                      onClick={() =>
                        handleRemoveFromArrayNested(index, "imageSee", imgIndex)
                      }
                      className="bg-red-600 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-red-900"
                    >
                      Supprimer Image See
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => handleAddToArrayNested(index, "imageSee")}
                  className="bg-green-500 text-slate-50 p-[5px] mb-10 rounded-lg hover:bg-green-700"
                >
                  Ajouter Info Animation-Manga
                </button>
              </div>
              <label>
                Anime-Titre CSS (text) :
                <input
                  type="text"
                  value={animeObj.anime_titre}
                  onChange={(e) =>
                    handleArrayChange(
                      index,
                      "anime_titre",
                      e.target.value,
                      "animation"
                    )
                  }
                  className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
                />
              </label>

              <div>
                {animeObj.anime_imageCarousel.map(
                  (animeCarouselObj, carouselIndex) => (
                    <div key={carouselIndex}>
                      <h5 className="text-md md:text-lg lg:text-xl xl:text-2xl text-indigo-400">
                        Info Contenu Manga Recommander (Max 8) :
                      </h5>
                      <label>
                        Anime Image :
                        <input
                          type="text"
                          vvalue={animeCarouselObj.anime_image || ""}
                          onChange={(e) =>
                            handleArrayChangeNested(
                              index,
                              "anime_imageCarousel",
                              carouselIndex,
                              "anime_image",
                              e.target.value
                            )
                          }
                          className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
                        />
                      </label>
                      <br />
                      <label>
                        Anime Name :
                        <input
                          type="text"
                          value={animeCarouselObj.anime_name || ""}
                          onChange={(e) =>
                            handleArrayChangeNested(
                              index,
                              "anime_imageCarousel",
                              carouselIndex,
                              "anime_name",
                              e.target.value
                            )
                          }
                          className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
                        />
                      </label>
                      <br />
                      <label>
                        Anime Href :
                        <input
                          type="text"
                          onChange={(e) =>
                            handleArrayChangeNested(
                              index,
                              "anime_imageCarousel",
                              carouselIndex,
                              "anime_href",
                              e.target.value
                            )
                          }
                          className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-orange-600 focus:border-2 outline-none px-[5px]"
                        />
                      </label>
                      <br />
                      <button
                        type="button"
                        onClick={() =>
                          handleRemoveFromArrayNested(
                            index,
                            "anime_imageCarousel",
                            carouselIndex
                          )
                        }
                        className="bg-red-600 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-red-900"
                      >
                        Supprimer Animation-Manga Recommander
                      </button>
                    </div>
                  )
                )}
              </div>
              <button
                type="button"
                onClick={() =>
                  handleAddToArrayNested(index, "anime_imageCarousel")
                }
                className="bg-green-500 text-slate-50 p-[5px] mb-10 rounded-lg hover:bg-green-700"
              >
                Add Animation-Manga Recommander
              </button>

              <button
                type="button"
                onClick={() => handleRemoveFromArray(index, "animation")}
                className="bg-red-600 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-red-900"
              >
                Supprimer Categorie Animation
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddToArray("animation")}
            className="bg-green-700 text-slate-50 p-[5px] mb-8 rounded-lg hover:bg-green-700"
          >
            Ajouter Categorie Animation
          </button>
          <br />

          <button
            type="submit"
            className="bg-emeralder-300 p-[5px] w-[90%] hover:bg-orange-600 hover:text-slate-50"
          >
            Mettre à jour <span className="capitalize ">{manga.slug}</span>
          </button>
        </form>
      )}

      {!isLoading && manga === null && slug && (
        <div className="text-red-600">
          Aucun manga de ce nom. Essayer un nouveau nom.
        </div>
      )}
    </div>
  );
}
