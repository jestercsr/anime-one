import React, { useState } from "react";

export default function DeleteAll() {
  const [slug, setSlug] = useState("");

  const handleDelete = async (event) => {
    event.preventDefault();
    const response = await fetch(`/api/mangas/${slug}`, {
      method: "DELETE",
    });
    if (response.ok) {
      console.log("Manga supprimé avec succès");
    } else {
      console.error("Erreur lors de la suppression du manga");
    }
  };

  return (
    <form onSubmit={handleDelete}>
      <input
        type="text"
        value={slug}
        onChange={(e) => setSlug(e.target.value)}
        placeholder="Nom du manga (slug)"
        required className="text-sky-900 text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-red-600 focus:border-2 outline-none px-[5px]"
      />
      <button type="submit" className="bg-red-600 text-slate-50 p-[5px] m-3 rounded-lg hover:bg-red-900">Supprimer le Manga</button>
    </form>
  );
}
