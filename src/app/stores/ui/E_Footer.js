import Link from "next/link";
import React from "react";

export default function E_Footer() {
  return (
    <div className="bg-gradient-to-b from-skyer-950 to-emeralder-900">
      <Link href="/stores">
        <img
          src="/assets/LogoAnimeONE/LogoFooter.webp"
          className="lg:ml-24 w-[30%] md:w-[20%] lg:w-[10%]"
        />
      </Link>
      <div className="grid grid-cols-3 text-slate-50 justify-items-center text-xs md:text-sm lg:text-md">
        <div className="lg:mr-40">
          <h2 className="font-bold text-md lg:text-lg">Besoin d'aide ?</h2>
          <h4 className="hover:underline">Contactez-nous</h4>
          <h4 className="hover:underline">Questions fréquentes</h4>
          <h4 className="hover:underline">Suivre une commande</h4>
          <h4 className="hover:underline">Nos conditions de livraison</h4>
        </div>
        <div>
          <h2 className="font-bold text-md lg:text-lg">A propos de Anime ONE</h2>
          <h4 className="hover:underline">Qui sommes-nous ?</h4>
          <h4 className="hover:underline">Nos services</h4>
          <h4 className="hover:underline">SAV Anime ONE</h4>
          <h4 className="hover:underline">Accessibilité</h4>
          <h4 className="hover:underline">Nous rejoindre</h4>
        </div>
        <div>
          <h2 className="font-bold text-md lg:text-lg">Informations légales</h2>
          <h4 className="hover:underline">Nos conditions de Vente</h4>
          <h4 className="hover:underline">Les garanties</h4>
          <h4 className="hover:underline">Mentions légales</h4>
          <h4 className="hover:underline">Données personnelles</h4>
          <h4 className="hover:underline">Avis en ligne</h4>
        </div>
      </div>
      <div className="grid grid-rows-2 text-center text-xs text-slate-50 md:text-sm lg:text-md">
        <p className="mx-2 mt-2">
          Le contenu et les plateformes disponibles peuvent varier selon la zone
          géographique.
        </p>
        <p className="mr-2 ml-2">
          © 2024 Anime ONE Store byJester. Tous droits réservés.
        </p>
      </div>
    </div>
  );
}
