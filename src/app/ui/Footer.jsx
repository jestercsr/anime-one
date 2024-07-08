"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gradient-to-b from-emeralder-900 to-blacker-950 text-white">
      <Link href="/">
        <img
          src="/assets/LogoFooter.webp"
          alt="logoFooter"
          className="w-[30%] m-auto lg:w-1/12"
        />
      </Link>
      <div className="grid grid-cols-3  mb-5 mr-2 ml-2 text-xs md:text-md lg:text-lg">
        <button>Conditions générales d’abonnement</button>
        <button>Régles de Respect de la Vie Privée</button>
        <button>Droits Données dans l’UE et au R-U</button>
      </div>
      <div className="grid grid-cols-5 md:mb-5 md:mr-2 md:ml-2 text-xs md:text-md lg:text-lg">
        <button>Politique de cookies</button>
        <button>Appareils compatibles</button>
        <button>Aide</button>
        <button>A propos de Anime+</button>
        <Link href="/manga">
          <button>Tous nos Mangas</button>
        </Link>
      </div>
      <div className="flex flex-row justify-center mb-5 mr-2 ml-2 text-xs md:text-md lg:text-lg">
        <img src="/assets/world.svg" alt="iconeWorld" className="w-1/10" />
        <button>Français</button>
        <ChevronDown />
      </div>
      <div className="grid grid-rows-2 text-center text-xs md:text-md lg:text-lg">
      <p className="mr-2 ml-2">
        Le contenu et les plateformes disponibles peuvent varier selon la zone
        géographique.
      </p>
      <p className=" mr-2 ml-2">
        © 2024 Anime+ byJester. Tous droits réservés.
      </p>
      </div>
    </div>
  );
}
