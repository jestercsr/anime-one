import React, { useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { updateManga } from "../../../../_actions/postAction";

export default function UpdateAll({ manga }) {
  const { register, control, setValue } = useForm();
  const {
    fields: imageShowFields,
    append: appendImageShow,
    remove: removeImageShow,
  } = useFieldArray({ control, name: "imageShow" });
  const {
    fields: imageCarouselFields,
    append: appendImageCarousel,
    remove: removeImageCarousel,
  } = useFieldArray({ control, name: "imageCarousel" });
  const {
    fields: animationFields,
    append: appendAnimation,
    remove: removeAnimation,
  } = useFieldArray({ control, name: "animation" });

  const [formData, setFormData] = useState(manga);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedManga = await updateManga(manga.slug, formData);
      if (updatedManga.message) {
        alert(updatedManga.message);
        return;
      }
      alert('Manga mis à jour avec succès');
      // Vous pouvez mettre à jour l'état avec les nouvelles données si nécessaire
    } catch (error) {
      console.error('Failed to update manga:', error);
      alert('Failed to update manga. Please try again later.');
    }
  };

  if (!manga) return <p>Loading...</p>;

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="text-sm md:text-base lg:text-md xl:text-lg p-8 bg-gray-100 w-[90%] md:w-[50%] lg:w-[80%] m-auto rounded-xl text-sky-950"
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
        <input
          {...register("search")}
          placeholder="Barre de recherche CSS"
          className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
        />
        <input
          {...register("listeSearch")}
          placeholder="Liste Barre de recherche CSS"
          className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
        /><br />

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
          onClick={() => appendImageShow({})}
          className="bg-orange-500 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-orange-700"
        >
          Modifier Info Manga
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
          onClick={() => appendImageCarousel({})}
          className="bg-orange-500 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-orange-700"
        >
          Modifier Manga Recommander
        </button>
        <br />

        {animationFields.map((animation, animationIndex) => (
          <div key={animation.id}>
            <h5 className="text-md md:text-lg lg:text-xl xl:text-2xl text-indigo-400">
              Info Animation-Manga :
            </h5>
            <input
              {...register(`animation.${animationIndex}.animeId`)}
              placeholder="Anime ID"
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
            />
            <input
              {...register(`animation.${animationIndex}.anime_imageTop`)}
              placeholder="Image Top"
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
            <input
              {...register(`animation.${animationIndex}.searchNav`)}
              placeholder="Barre de recherche CSS Anime"
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
            />
            <input
              {...register(`animation.${animationIndex}.listeSearchNav`)}
              placeholder="Liste Barre de recherche Anime CSS"
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
            />

            <div className="m-3">
              {animation.imageSee &&
                animation.imageSee.map((imageSee, imageSeeIndex) => (
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
                      onClick={() => removeAnimation(index)}
                      className="bg-red-600 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-red-900"
                    >
                      Supprimer Image See
                    </button>
                  </div>
                ))}
              <button
                type="button"
                onClick={() => removeAnimation(index)}
                className="bg-orange-500 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-orange-700"
              >
                Modifier Info Animation-Manga
              </button>
            </div>

            <input
              {...register(`animation.${animationIndex}.anime_titre`)}
              placeholder="Anime-Titre CSS (text)"
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
            />

            <div>
              {animation.imageCarousel &&
                animation.anime_imageCarousel.map(
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
                        onClick={() => removeAnimation(index)}
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
              onClick={() => removeAnimation(animationIndex)}
              className="bg-red-600 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-red-900"
            >
              Supprimer Categorie Animation
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => appendAnimation({})}
          className="bg-orange-700 text-slate-50 p-[5px] m-3 rounded-lg "
        >
          Modifier Categorie Animation
        </button>
        <br />

        <button
          type="submit"
          className="bg-emeralder-300 p-[5px] w-[90%] hover:bg-orange-900 hover:text-slate-50"
        >
          Mettre à jour un Manga
        </button>
      </form>
    </div>
  );
}
