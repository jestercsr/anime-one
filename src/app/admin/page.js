"use client";
import React, {useState} from "react";
import PostAll from "./ui/PostAll";
import DeleteAll from "./ui/DeleteAll";
import UpdateAll from "./ui/UpdateAll";

export default function PageAdmin() {
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const handleShowDelete = () => {
    setShowDeleteForm(!showDeleteForm);
  };
  return (
    <div className="text-center bg-gradient-to-t from-neutral-950 to-red-600">
      <h1 className="text-4xl text-slate-50 mb-10">
        myAdmin 
      </h1>
      <h2 className="text-3xl text-slate-50">Gestion des Contenus Manga</h2>

      <h3 className="text-2xl text-slate-100 underline mb-2">
        Ajouter un manga
      </h3>
      <PostAll />

      <h3 className="text-2xl text-slate-100 underline mb-2 hover:text-red-400" onClick={handleShowDelete}>Supprimer un manga</h3>
      {showDeleteForm && <DeleteAll/>}

      <h3 className="text-2xl text-slate-100 underline mb-2">Modifier un manga</h3>
      <UpdateAll />
    </div>
  );
}
