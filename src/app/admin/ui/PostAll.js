"use client";
import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";

export default function PostAll() {
  const { register, handleSubmit, control, reset } = useForm();
  const [animationField, setAnimationFields] = useState([]);

  const {
    fields: animationFields,
    append: appendAnimation,
    remove: removeAnimation,
  } = useFieldArray({
    control,
    name: "animation",
  });

  const {
    fields: imageCarouselFields,
    append: appendImageCarousel,
    remove: removeImageCarousel,
  } = useFieldArray({
    control,
    name: "imageCarousel",
  });

  const {
    fields: imageShowFields,
    append: appendImageShow,
    remove: removeImageShow,
  } = useFieldArray({
    control,
    name: "imageShow",
  });

  const onSubmit = async (data) => {
    console.log("Données envoyés:", data);

    const response = await fetch("/api/mangas", {
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

    reset({
      animation: [
        {
          animeId: "",
          anime_imageTop: "",
          anime_titre: "",
          anime_imageCarousel: [
            { anime_image: "", anime_name: "", anime_href: "" },
          ],
          backNav: "",
          classNav: "",
          imageSee: [{ images: "", href: "" }],
        },
      ],
      back: "",
      imageCarousel: [{ image: "", name: "", url: "" }],
      imageShow: [{ img: "", url: "" }],
      imageTop: "",
      navClass: "",
      slug: "",
      titre: "",
    });
  };

  const appendImageSee = (animationIndex) => {
    const newImageSee = { images: "", href: "" };
    const updatedAnimationFields = [...animationFields];
    updatedAnimationFields[animationIndex].imageSee.push(newImageSee);
    setAnimationFields(updatedAnimationFields);
  };

  const appendAnimeImageCarousel = (animationIndex) => {
    const newAnimeImageCarousel = {
      anime_image: "",
      anime_name: "",
      anime_href: "",
    };
    const updatedAnimationFields = [...animationFields];
    updatedAnimationFields[animationIndex].anime_imageCarousel.push(
      newAnimeImageCarousel
    );
    setAnimationFields(updatedAnimationFields);
  };

  const removeImageSee = (animationIndex, imageSeeIndex) => {
    const updatedAnimationFields = [...animationFields];
    updatedAnimationFields[animationIndex].imageSee = updatedAnimationFields[
      animationIndex
    ].imageSee.filter((_, index) => index !== imageSeeIndex);
    setAnimationFields(updatedAnimationFields);
  };

  const removeAnimeImageCarousel = (animationIndex, animeImageIndex) => {
    const updatedAnimationFields = [...animationFields];
    updatedAnimationFields[animationIndex].anime_imageCarousel =
      updatedAnimationFields[animationIndex].anime_imageCarousel.filter(
        (_, index) => index !== animeImageIndex
      );
    setAnimationFields(updatedAnimationFields);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="p-8 bg-gray-100 w-[35%] m-auto text-lg rounded-xl text-sky-950"
      >
        <input
          {...register("slug")}
          placeholder="Identifiant (slug)"
          className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
        />
        <input
          {...register("imageTop")}
          placeholder="Image Top"
          className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
        />
        <input
          {...register("navClass")}
          placeholder="Navbar CSS (bg - text)"
          className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
        />
        <input
          {...register("back")}
          placeholder="Background CSS (bg)"
          className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
        />

        {imageShowFields.map((imageShow, index) => (
          <div key={imageShow.id} className="mt-2">
            <h5 className="text-md md:text-lg lg:text-xl xl:text-2xl text-indigo-400">
              Info Manga (Episodes, Films, Scans, API) :
            </h5>
            <input
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
              {...register(`imageShow.${index}.img`)}
              placeholder="Image"
            />
            <input
              {...register(`imageShow.${index}.url`)}
              placeholder="Lien"
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
            />
            <button
              type="button"
              onClick={() => removeImageShow(index)}
              className="bg-red-600 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-red-900"
            >
              Supprimer Info Manga
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendImageShow({ img: "", url: "" })}
          className="bg-green-500 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-green-700"
        >
          Ajouter Info Manga
        </button>
        <br />

        <input
          {...register("titre")}
          placeholder="Titre CSS (text)"
          className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
        />
        <br />

        {imageCarouselFields.map((imageCarousel, index) => (
          <div key={imageCarousel.id}>
            <h5 className="text-md md:text-lg lg:text-xl xl:text-2xl text-indigo-400">
              Info Manga Recommander (Max 8) :
            </h5>
            <input
              {...register(`imageCarousel.${index}.image`)}
              placeholder="Image Manga Recommander"
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
            />
            <input
              {...register(`imageCarousel.${index}.name`)}
              placeholder="Nom Manga Recommander"
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
            />
            <input
              {...register(`imageCarousel.${index}.url`)}
              placeholder="Lien Manga Recommander"
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
            />
            <br />
            <button
              type="button"
              onClick={() => removeImageCarousel(index)}
              className="bg-red-600 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-red-900"
            >
              Supprimer Manga Recommander
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendImageCarousel({ image: "", name: "", url: "" })}
          className="bg-green-500 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-green-700"
        >
          Ajouter Manga Recommander
        </button>
        <br />

        {animationFields.map((animation, animationIndex) => (
          <div key={animation.id}>
            <h5 className="text-md md:text-lg lg:text-xl xl:text-2xl text-indigo-400">
              Contenu Animation :
            </h5>
            <input
              {...register(`animation.${animationIndex}.animeId`)}
              placeholder="Anime ID"
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
            />
            <input
              {...register(`animation.${animationIndex}.anime_imageTop`)}
              placeholder="Anime-Image Top"
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
            />
            <input
              {...register(`animation.${animationIndex}.classNav`)}
              placeholder="Navbar CSS (bg - text)"
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
            />
            <input
              {...register(`animation.${animationIndex}.backNav`)}
              placeholder="Background CSS (bg)"
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
            />

            <div className="m-3">
              {animation.imageSee?.map((imageSee, imageSeeIndex) => (
                <div key={imageSeeIndex}>
                  <h5 className="text-md md:text-lg lg:text-xl xl:text-2xl text-indigo-400">
                    Info Animation-Manga (Episodes, Films, Scans) :
                  </h5>
                  <input
                    {...register(
                      `animation.${animationIndex}.imageSee.${imageSeeIndex}.images`
                    )}
                    placeholder="Image See"
                    className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
                  />
                  <input
                    {...register(
                      `animation.${animationIndex}.imageSee.${imageSeeIndex}.href`
                    )}
                    placeholder="Href"
                    className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      removeImageSee(animationIndex, imageSeeIndex)
                    }
                    className="bg-red-600 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-red-900"
                  >
                    Supprimer Image See
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={() => appendImageSee(animationIndex)}
                className="bg-green-500 text-slate-50 p-[5px] rounded-lg hover:bg-green-700"
              >
                Ajouter Info Animation-Manga
              </button>
            </div>

            <input
              {...register(`animation.${animationIndex}.anime_titre`)}
              placeholder="Anime-Titre CSS (text)"
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
            />

            <div>
              {animation.anime_imageCarousel?.map(
                (animeImage, animeImageIndex) => (
                  <div key={animeImageIndex}>
                    <h5 className="text-md md:text-lg lg:text-xl xl:text-2xl text-indigo-400">
                      Info Contenu Manga Recommander (Max 8) :
                    </h5>
                    <input
                      {...register(
                        `animation.${animationIndex}.anime_imageCarousel.${animeImageIndex}.anime_image`
                      )}
                      placeholder="Anime Image"
                      className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
                    />
                    <input
                      {...register(
                        `animation.${animationIndex}.anime_imageCarousel.${animeImageIndex}.anime_name`
                      )}
                      placeholder="Anime Name"
                      className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
                    />
                    <input
                      {...register(
                        `animation.${animationIndex}.anime_imageCarousel.${animeImageIndex}.anime_href`
                      )}
                      placeholder="Anime Href"
                      className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
                    />
                    <br />
                    <button
                      type="button"
                      onClick={() =>
                        removeAnimeImageCarousel(
                          animationIndex,
                          animeImageIndex
                        )
                      }
                      className="bg-red-600 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-red-900"
                    >
                      Supprimer Animation-Manga Recommander
                    </button>
                  </div>
                )
              )}
              <button
                type="button"
                onClick={() => appendAnimeImageCarousel(animationIndex)}
                className="bg-green-500 text-slate-50 p-[5px] mb-10 rounded-lg hover:bg-green-700"
              >
                Ajouter Animation-Manga Recommander
              </button>
            </div>

            <button
              type="button"
              onClick={() => removeAnimation(animationIndex)}
              className="bg-red-600 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-red-900"
            >
              Supprimer Categorie Animation
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            appendAnimation({
              animeId: "",
              anime_imageTop: "",
              anime_titre: "",
              anime_imageCarousel: [],
              backNav: "",
              classNav: "",
              imageSee: [],
            })
          }
          className="bg-green-700 text-slate-50 p-[5px] mb-8 rounded-lg hover:bg-green-700"
        >
          {" "}
          Ajouter Categorie Animation
        </button>
        <br />

        <button
          type="submit"
          className="bg-emeralder-300 p-[5px] w-[90%] hover:bg-emeralder-900 hover:text-slate-50"
        >
          Ajouter un Manga
        </button>
      </form>
    </div>
  );
}
