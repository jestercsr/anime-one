"use client";
import React, {useState} from "react";
import PostAll from "./ui/PostAll";
import DeleteAll from "./ui/DeleteAll";
import AddListeAll from "./ui/AddListeAll";
import UpdateForm from "./ui/UpdateForm";
import UpdateAll from "./ui/UpdateAll";
import { getManga } from "../../../_actions/postAction";

export default function PageAdmin() {
  const [showDeleteForm, setShowDeleteForm] = useState(false);
  const handleShowDelete = () => {
    setShowDeleteForm(!showDeleteForm);
  };
  const [manga, setManga] = useState(null);

  const handleSearch = async (searchTerm) => {
    console.log('Searching for manga:', searchTerm); // Log pour debug
    try {
      const data = await getManga(searchTerm);
      if (!data || data.message) {
        alert(data.message || 'Manga not found');
        return;
      }
      setManga(data);
    } catch (error) {
      console.error('Failed to fetch manga:', error);
      alert('Failed to fetch manga. Please try again later.');
    }
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

      <h3 className="text-2xl text-slate-100 underline mb-2">Ajouter un manga à la Liste</h3>
      <AddListeAll />

      <h3 className="text-2xl text-slate-100 underline mb-2 hover:text-red-400" onClick={handleShowDelete}>Supprimer un manga</h3>
      {showDeleteForm && <DeleteAll/>}

      <h3 className="text-2xl text-slate-100 underline mb-2">Modifier un manga</h3>
      <UpdateForm onSearch={handleSearch}/>
      {manga && <UpdateAll manga={manga} />}
    </div>
  );
}
