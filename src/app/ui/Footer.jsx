"use client";

import React from "react";
import Link from "next/link";
import { TfiWorld } from "react-icons/tfi";

export default function Footer() {
  return (
    <div className="bg-gradient-to-b from-emeralder-900 to-blacker-950 text-white">
      <Link href="/">
        <img
          src="/assets/LogoAnimeONE/logoAnimeOneFooter.webp"
          alt="logoFooter"
          className="w-[20%] lg:w-[10%] m-auto md:w-[15%]"
        />
      </Link>
      <div className="grid grid-cols-3  mb-5 mr-2 ml-2 text-xs md:text-md lg:text-lg">
        <button className="hover:text-sky-500 transition ease-in duration-300">Conditions générales d’abonnement</button>
        <button className="hover:text-sky-500 transition ease-in duration-300">Régles de Respect de la Vie Privée</button>
        <button className="hover:text-sky-500 transition ease-in duration-300"><Link href={'/mentions-legales'}>Mentions Légales</Link></button>
      </div>
      <div className="grid grid-cols-5 md:mb-5 md:mr-2 md:ml-2 text-xs md:text-md lg:text-lg">
        <button className="hover:text-sky-500 transition ease-in duration-300">Politique de cookies</button>
        <button className="hover:text-sky-500 transition ease-in duration-300">Appareils compatibles</button>
        <button className="hover:text-sky-500 transition ease-in duration-300">Aide</button>
        <button className="hover:text-sky-500 transition ease-in duration-300">A propos de Anime ONE</button>
        <Link href="/manga">
          <button aria-label="click-me-manga" className="hover:text-sky-500 transition ease-in duration-300">Tous nos Mangas</button>
        </Link>
      </div>
      <div className="flex flex-row justify-center mb-5 mr-2 ml-2 text-xs md:text-md lg:text-lg">
        <TfiWorld className="w-1/10" />
        <select className="bg-blacker-950">
          <option value="Français" defaultValue="Français">Français</option>
          <option value="Anglais">English</option>
        </select>
      </div>
      <div className="grid grid-rows-2 text-center text-xs md:text-md lg:text-lg">
        <p className="mr-2 ml-2">
          Le contenu et les plateformes disponibles peuvent varier selon la zone
          géographique.
        </p>
        <p className=" mr-2 ml-2">
          &copy; 2024-{new Date().getFullYear()} Anime ONE byJester. Tous droits réservés.
        </p>
      </div>
    </div>
  );
}
