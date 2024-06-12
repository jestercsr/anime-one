'use client'
import React from "react";
import Navbar from "../accueil/ui/NavBar";
import ListeAllManga from "./ui/ListeAllManga";

export default function PageListe() {
  return (
    <div className="bg-gradient-to-b from-skyer-500 to-skyer-950">
      <Navbar className="bg-teal-900 text-white" />
      <ListeAllManga/>
    </div>
  );
}
