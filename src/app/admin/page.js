"use client";
import React from "react";
import PostAll from "./ui/PostAll";

export default function PageAdmin() {
  return (
    <div className="text-center bg-gradient-to-t from-neutral-950 to-red-600">
      <h1 className="text-4xl text-slate-50">
        Admin - Gestion des Contenus Manga
      </h1>

      <h3 className="text-2xl text-slate-100 underline mb-2">
        Ajouter un manga
      </h3>
      <PostAll />

      <h3 className="text-2xl text-slate-100 underline mb-2">Supprimer un manga</h3>
    </div>
  );
}
