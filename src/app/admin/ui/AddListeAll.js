import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

export default function AddListeAll() {
  const { register, handleSubmit, reset, control } = useForm();
  const {
    fields: categorieFields,
    append: appendCategorie,
    remove: removeCategorie,
  } = useFieldArray({
    control,
    name: "categorie",
  });
  const {
    fields: animeFields,
    append: appendAnime,
    remove: removeAnime,
  } = useFieldArray({
    control,
    name: "anime",
  });
  const {
    fields: typeCategorieFields,
    append: appendTypeCategorie,
    remove: removeTypeCategorie,
  } = useFieldArray({
    control,
    name: "typeCategorie",
  });

  const onSubmit = async (data) => {
    const response = await fetch("/api/liste", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const result = await response.json();
      console.log("Success:", result);
      reset();
    } else {
      console.error("Error:", response.statusText);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="text-sm md:text-base lg:text-md xl:text-lg p-8 bg-gray-100 w-[90%] md:w-[60%] lg:w-[80%] m-auto rounded-xl text-sky-950">
        <div className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-green-600 focus:border-2 outline-none px-[5px]">
          <input className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-green-600 focus:border-2 outline-none px-[5px]"
            id="image"
            placeholder="Image d'Affiche"
            {...register("image")}
          />

          <input className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-green-600 focus:border-2 outline-none px-[5px]"
            id="name"
            placeholder="Nom"
            {...register("name", { required: true })}
          />

          <input id="url" placeholder="Lien (Url)" {...register("url")} className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-green-600 focus:border-2 outline-none px-[5px]" />
        </div>

        <div>
          <h5 className="text-md md:text-lg lg:text-xl xl:text-2xl text-indigo-400">Genre</h5>
          {categorieFields.map((item, index) => (
            <div key={item.id}>
              <input className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-green-600 focus:border-2 outline-none px-[5px]"
                {...register(`categorie.${index}`)}
                defaultValue={item.value}
              />
              <button type="button" onClick={() => removeCategorie(index)} className="bg-red-600 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-red-900">
                Supprimer un Genre
              </button>
            </div>
          ))}
          <button type="button" onClick={() => appendCategorie("")} className="bg-green-500 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-green-700">
            Ajouter un Genre
          </button>
        </div>

        <div>
          <h5 className="text-md md:text-lg lg:text-xl xl:text-2xl text-indigo-400">Anime Type</h5>
          {animeFields.map((item, index) => (
            <div key={item.id}>
              <input className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-green-600 focus:border-2 outline-none px-[5px]"
                {...register(`anime.${index}`)}
                defaultValue={item.value}
                placeholder="Films, Series ou Scans"
              />
              <button type="button" onClick={() => removeAnime(index)} className="bg-red-600 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-red-900">
                Supprimer un Type
              </button>
            </div>
          ))}
          <button type="button" onClick={() => appendAnime("")} className="bg-green-500 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-green-700">
            Ajouter un Type
          </button>
        </div>

        <div>
          <h5 className="text-md md:text-lg lg:text-xl xl:text-2xl text-indigo-400">Type Categories</h5>
          {typeCategorieFields.map((item, index) => (
            <div key={item.id}>
              <input className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-green-600 focus:border-2 outline-none px-[5px]"
                {...register(`typeCategorie.${index}`)}
                defaultValue={item.value}
                placeholder="Recommander, Anime et Scan Trending, Movie Recommander"
              />
              <button type="button" onClick={() => removeTypeCategorie(index)} className="bg-red-600 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-red-900">
                Supprimer une Categorie
              </button>
            </div>
          ))}
          <button type="button" onClick={() => appendTypeCategorie("")} className="bg-green-500 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-green-700">
            Ajouter une Categorie
          </button>
        </div>

        <button type="submit" className="bg-emeralder-300 p-[5px] w-[90%] hover:bg-emerald-600 hover:text-slate-50">Ajouter à la Liste</button>
      </form>
    </>
  );
}
