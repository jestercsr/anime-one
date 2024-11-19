"use client";
import React, { useState } from "react";
import PostAll from "./ui/PostAll";
import DeleteAll from "./ui/DeleteAll";
import AddListeAll from "./ui/AddListeAll";
import UpdateAll from "./ui/UpdateAll";
import { getManga } from "../../../_actions/postAction";
import PostProduit from "./ui/PostProduit";

export default function PageAdmin() {
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const handleShowDelete = () => {
    setShowDeleteForm(!showDeleteForm);
  };
  const [manga, setManga] = useState(null);

  const handleSearch = async (searchTerm) => {
    console.log("Recherche en cours du manga:", searchTerm);
    try {
      const data = await getManga(searchTerm);
      if (!data || data.message) {
        alert(data.message || "Aucun Manga de ce nom");
        return;
      }
      setManga(data);
    } catch (error) {
      console.error("Erreur dans la base de données:", error);
      alert("Erreur dans la base de données. Réessayer plus tard.");
    }
  };

  return (
    <div className="text-center bg-slate-50 min-h-screen">
      <h1 className="text-4xl text-indigo-600 mb-10">myAdmin</h1>
      <h2 className="text-[26px] text-indigo-600">Gestion des Contenus Manga</h2>
      <div className="grid lg:grid-cols-2">
        <div>
          <h3 className="text-2xl text-gray-700 underline mb-2 hover:text-green-600">
            Ajouter un manga
          </h3>
          <PostAll />
          <br />
          <h3 className="text-2xl text-gray-700 underline mb-2 hover:text-orange-500">
            Modifier un manga
          </h3>
          <UpdateAll />
        </div>
        <div>
          <h3 className="text-2xl text-gray-700 underline mb-2 hover:text-green-600">
            Ajouter un manga à la Liste
          </h3>
          <AddListeAll />

          <br />
          <h3
            className="text-2xl text-gray-700 underline mb-2 hover:text-red-600"
            onClick={handleShowDelete}
          >
            Supprimer un manga
          </h3>
          {showDeleteForm && <DeleteAll />}
        </div>
      </div>
      <h2 className="text-[26px] text-indigo-600">Gestion des Contenus Produits</h2>
      <div className="grid lg:grid-cols-2">
        <div>
          <h3 className="text-2xl text-gray-700 underline mb-2 hover:text-green-600">
            Ajouter un produit
          </h3>
          <PostProduit />
        </div>
        <div></div>
      </div>
    </div>
  );
}
