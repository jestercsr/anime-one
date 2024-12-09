'use client'
import React from "react";
import ListeAllManga from "./ui/ListeAllManga";
import Link from "next/link";
import { useProfile } from "../../../providers/ProfileContext";
import Navbar from "../accueil/ui/NavBar";

/**
 * Page qui affiche la liste des mangas.
 * Si l'utilisateur est connecter , il affichera le menu de navigation.
 * Sinon, il affichera un bouton pour s'identifier.
 * @returns {JSX.Element}
 */
export default function PageListe() {
  const { userProfile } = useProfile();
  return (
    <div className="bg-gradient-to-b from-sky-600 to-emeralder-900">
      {userProfile ?
      (<Navbar className="bg-green-400 text-blue-900" liste="bg-green-300 text-blue-900 absolute left-0 w-full divide-y-2 divide-slate-50 border-gray-300 mt-1 z-10 list-none" listing="cursor-pointer p-2 hover:bg-gray-200 hover:text-green-700 border-t-0"/>):
      (<nav className="flex justify-end p-1 bg-neutraler-50">
        <Link href="/authentification">
        <button aria-label="clik-me-auth" className="bg-red-600 text-slate-50 p-2 rounded-xl">S'identifier</button></Link>
      </nav>)}
      <ListeAllManga/>
    </div>
  );
}
