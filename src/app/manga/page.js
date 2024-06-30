'use client'
import React from "react";
import ListeAllManga from "./ui/ListeAllManga";
import Link from "next/link";

export default function PageListe() {
  return (
    <div className="bg-gradient-to-b from-skyer-500 to-skyer-950">
      <nav className="flex justify-end p-1 bg-neutraler-50">
        <Link href="/accueil">
        <button className="bg-red-600 text-slate-50 p-2 rounded-xl">S'identifier</button></Link>
      </nav>
      <ListeAllManga/>
    </div>
  );
}
