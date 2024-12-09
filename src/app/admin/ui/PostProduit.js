import React, { useState } from "react";
import ReactLoading from "react-loading";

export default function PostProduit() {
  const [formData, setFormData] = useState({
    image: [""],
    titre: "",
    url: "",
    prix: 0,
    sale: 0,
    genre: [""],
    manga: "",
    type: "",
    description: "",
    taille: [""],
    couleur: [""],
    averageRating: 0,
    typeContenu: "",
    quantite: 1,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddField = (field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: [...prevData[field], ""],
    }));
  };

  const handleRemoveField = (field, index) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: prevData[field].filter((_, i) => i !== index),
    }));
  };

  const handleArrayChange = (e, field, index) => {
    const newArray = [...formData[field]];
    newArray[index] = e.target.value;
    setFormData({ ...formData, [field]: newArray });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true)
    const res = await fetch(`/api/produits`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      const data = await res.json();
      setIsLoading(false);
      setFormData({
        image: [""],
    titre: "",
    url: "",
    prix: 0,
    sale: 0,
    genre: [""],
    manga: "",
    type: "",
    description: "",
    taille: [""],
    couleur: [""],
    averageRating: 0,
    typeContenu: "",
    quantite: 1,
      })
      console.log("Success:", res);
    } else {
      console.error("Error:", res.statusText);
    }
  };
  if (isLoading) {
    return (
      <div>
        <ReactLoading
          type="bubbles"
          color="#4f46e5"
          height={"3%"}
          width={"3%"}
        />
      </div>
    );
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="text-sm md:text-base lg:text-md xl:text-lg p-8 mb-2 bg-gray-100 w-[90%] md:w-[50%] lg:w-[80%] m-auto rounded-xl text-sky-950"
      >
        {formData.image.map((img, index) => (
          <div key={index} className="mt-2">
            <input
              type="text"
              value={img}
              onChange={(e) => handleArrayChange(e, "image", index)}
              placeholder={`Image URL ${index + 1}`}
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-green-600 focus:border-2 outline-none px-[5px]"
            />
            <button
              type="button"
              onClick={() => handleRemoveField("image", index)}
              className="ml-2 bg-red-600 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-red-900"
            >
              Supprimer
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddField("image")}
          className="mb-4 bg-green-500 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-green-700"
        >
          Ajouter Image
        </button>
        <br />
        <input
          type="text"
          name="titre"
          value={formData.titre}
          onChange={handleInputChange}
          placeholder="Titre"
          className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-green-600 focus:border-2 outline-none px-[5px]"
        />
        <input
          type="text"
          name="url"
          value={formData.url}
          onChange={handleInputChange}
          placeholder="URL"
          className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-green-600 focus:border-2 outline-none px-[5px]"
        />
        <h3 className="font-semibold text-md md:text-lg lg:text-xl xl:text-2xl text-indigo-400">Prix</h3>
        <input
          type="number"
          name="prix"
          value={formData.prix}
          onChange={handleInputChange}
          placeholder="Prix"
          className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-green-600 focus:border-2 outline-none px-[5px]"
        />
        <h3 className="font-semibold text-md md:text-lg lg:text-xl xl:text-2xl text-indigo-400">Promotion</h3>
        <input
          type="number"
          name="sale"
          value={formData.sale}
          onChange={handleInputChange}
          placeholder="Promotions"
          className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-green-600 focus:border-2 outline-none px-[5px]"
        />
        <br />
        {formData.genre.map((gen, index) => (
          <div key={index} className="mt-2">
            <input
              type="text"
              value={gen}
              onChange={(e) => handleArrayChange(e, "genre", index)}
              placeholder={`Genre ${index + 1}`}
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-green-600 focus:border-2 outline-none px-[5px]"
            />
            <button
              type="button"
              onClick={() => handleRemoveField("genre", index)}
              className="ml-2 bg-red-600 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-red-900"
            >
              Supprimer
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddField("genre")}
          className="mb-4 bg-green-500 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-green-700"
        >
          Ajouter Genre
        </button>
        <br />
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleInputChange}
          placeholder="Type (Ex: Casquette...)"
          className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-green-600 focus:border-2 outline-none px-[5px]"
        />
        <input
          type="text"
          name="manga"
          value={formData.manga}
          onChange={handleInputChange}
          placeholder="Manga"
          className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-green-600 focus:border-2 outline-none px-[5px]"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Description"
          className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-green-600 focus:border-2 outline-none px-[5px]"
        />
        <br />
        {formData.taille.map((taille, index) => (
          <div key={index} className="mt-2">
            <input
              type="text"
              value={taille}
              onChange={(e) => handleArrayChange(e, "taille", index)}
              placeholder={`Taille ${index + 1}`}
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-green-600 focus:border-2 outline-none px-[5px]"
            />
            <button
              type="button"
              onClick={() => handleRemoveField("taille", index)}
              className="ml-2 bg-red-600 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-red-900"
            >
              Supprimer
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddField("taille")}
          className="mb-4 bg-green-500 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-green-700"
        >
          Ajouter Taille
        </button>
        {formData.couleur.map((couleur, index) => (
          <div key={index} className="mt-2">
            <input
              type="text"
              value={couleur}
              onChange={(e) => handleArrayChange(e, "couleur", index)}
              placeholder={`Couleur ${index + 1}`}
              className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-green-600 focus:border-2 outline-none px-[5px]"
            />
            <button
              type="button"
              onClick={() => handleRemoveField("couleur", index)}
              className="bg-red-600 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-red-900"
            >
              Supprimer
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() => handleAddField("couleur")}
          className="mb-4 bg-green-500 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-green-700"
        >
          Ajouter Couleur
        </button>
        <br />
        <h3 className="font-semibold text-md md:text-lg lg:text-xl xl:text-2xl text-indigo-400">Note</h3>
        <input
          type="number"
          name="averageRating"
          value={formData.averageRating}
          onChange={handleInputChange}
          className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-green-600 focus:border-2 outline-none px-[5px]"
        />
        <h3 className="font-semibold text-md md:text-lg lg:text-xl xl:text-2xl text-indigo-400">Quantité</h3>
        <input
          type="number"
          name="quantite"
          value={formData.quantite}
          onChange={handleInputChange}
          className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-green-600 focus:border-2 outline-none px-[5px]"
        />
        <input
          type="text"
          name="typeContenu"
          value={formData.typeContenu}
          onChange={handleInputChange}
          placeholder="Type de contenu"
          className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-green-600 focus:border-2 outline-none px-[5px]"
        />

        <button
          type="submit"
          className="bg-emeralder-300 p-[5px] w-[90%] hover:bg-lime-500 hover:text-slate-50"
        >
          Ajouter un Produit
        </button>
      </form>
    </div>
  );
}
