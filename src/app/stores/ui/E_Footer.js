import Link from "next/link";
import React from "react";

export default function E_Footer() {
  return (
    <div className="bg-gradient-to-b from-skyer-950 to-emeralder-900">
      <Link href="/stores">
            <img
              src="/assets/LogoAnimeONE/LogoFooter.webp"
              className="w-[40%] md:w-[20%] lg:w-[10%]"
            />
          </Link>
      <div className="grid grid-cols-3 text-slate-50 justify-items-center text-xs md:text-md lg:text-lg">
        <div>
          <h4>Contact</h4>
          <h4>Contact</h4>
          <h4>Contact</h4>
          <h4>Contact</h4>
        </div>
        <div>
          <h4>Test</h4>
          <h4>Test</h4>
          <h4>Test</h4>
          <h4>Test</h4>
          <h4>Test</h4>
        </div>
        <div>
          <h4>Test 2</h4>
          <h4>Test 2</h4>
          <h4>Test 2</h4>
          <h4>Test 2</h4>
          <h4>Test 2</h4>
        </div>
      </div>
      <div className="grid grid-rows-2 text-center text-xs text-slate-50 md:text-md lg:text-lg">
        <p className="mx-2 mt-2">
          Le contenu et les plateformes disponibles peuvent varier selon la zone
          géographique.
        </p>
        <p className=" mr-2 ml-2">
          © 2024 Anime ONE Store byJester. Tous droits réservés.
        </p>
      </div>
    </div>
  );
}
