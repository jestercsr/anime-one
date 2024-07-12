"use client";

import React from "react";

export function EmailHomeComponent() {
  return (
    <div className="bg-white">
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition animate-fade">
          <img
            src="/assets/LogoAnimeONE/logoAnimeOne.webp"
            alt="logoAnimeOne"
            className="w-[100%]"
          />
        </div>
        <div className="w-full">
          <img
            src="/assets/homeBackground.webp"
            alt="imgHome"
            className="w-[100%] h-[300px] md:h-[500px] lg:h-[600px] xl:h-[800px]"
          />
        </div>
      </div>

      <div className="pt-14 bg-gradient-to-b from-neutraler-50 to-cyaner-50 text-center">
        <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">
          Films et séries animés en illimité, et plus...
        </h1>
        <h2 className="text-lg md:text-2xl lg:text-4xl">
          Où que vous soyez. Sans engagement.*
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl">
          Entrez votre adresse e-mail pour commencer où réactiver votre
          abonnement.
        </p>
        <input
          type="email"
          placeholder="Adresse e-mail"
          className="w-1/2 p-[5px] rounded-lg bg-slate-200 md:p-2"
        />
        <button className="bg-red-600 text-slate-50 p-[5px] md:p-2 rounded-xl">
          Commencer
        </button>
      </div>
    </div>
  );
}
