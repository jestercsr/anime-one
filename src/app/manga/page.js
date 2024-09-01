'use client'
import React from "react";
import ListeAllManga from "./ui/ListeAllManga";
import Link from "next/link";
import { useProfile } from "../../../providers/ProfileContext";
import Navbar from "../accueil/ui/NavBar";

export default function PageListe() {
  const { selectedAccount } = useProfile();
  return (
    <div className="bg-gradient-to-b from-gray-200 to-emeralder-900">
      {selectedAccount ?<Navbar className="bg-green-400 text-blue-900" liste="bg-green-300 text-blue-900 absolute left-0 w-full divide-y-2 divide-slate-50 border-gray-300 mt-1 z-10 list-none" listing="cursor-pointer p-2 hover:bg-gray-200 hover:text-green-700 border-t-0"/> :
      <nav className="flex justify-end p-1 bg-neutraler-50">
        <Link href="/authentification">
        <button className="bg-red-600 text-slate-50 p-2 rounded-xl">S'identifier</button></Link>
      </nav>}
      <ListeAllManga/>
    </div>
  );
}
