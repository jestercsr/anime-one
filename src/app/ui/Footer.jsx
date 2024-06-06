"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-gradient-to-b from-emeralder-900 to-blacker-950 text-white">
      <Link href="/">
        <img src="assets/LogoFooter.png" className="m-auto w-1/12" />
      </Link>
      <div className="flex flex-row justify-between mb-5 mr-2 ml-2">
        <button>Conditions générales d’abonnement</button>
        <button>Régles de Respect de la Vie Privée</button>
        <button>Droits Données dans l’UE et au R-U</button>
      </div>
      <div className="flex flex-row justify-between mb-5 mr-2 ml-2">
        <button>Politique de cookies</button>
        <button>Appareils compatibles</button>
        <button>Aide</button>
        <button>A propos de Anime+</button>
        <button>Gérer les préférences de confidentialité</button>
      </div>
      <div className="flex flex-row justify-center mb-5 mr-2 ml-2">
        <img src="assets/world.svg" className="w-1/10" />
        <button>Français</button>
        <ChevronDown></ChevronDown>
      </div>
      <p className="flex flex-row justify-center mr-2 ml-2">
        Le contenu et les plateformes disponibles peuvent varier selon la zone
        géographique.
      </p>
      <p className="flex flex-row justify-center mr-2 ml-2">
        © 2024 Anime+ byJester. Tous droits réservés.
      </p>
    </div>
  );
}
