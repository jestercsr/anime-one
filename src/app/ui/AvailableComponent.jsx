"use client";

import React from "react";

export function AvailableComponent() {
  return (
    <div className="pt-14 bg-gradient-to-b from-greener-400 to-greener-950 text-white">
      <div className="bg-skyer-500 flex text-center justify-around">
        <div className="">
          <img src="assets/iconoir--cinema-old.svg" className="w-1/5 m-auto" />
          <h1 className="text-3xl font-bold">Regardez selon vos envies</h1>
          <p className="text-xl">
            Découvrez des milliers d’heures d’animes et scans.
          </p>
        </div>
        <div className="ml-2.5">
          <img src="assets/devices-solid.svg" className="w-1/5 m-auto" />
          <h1 className="text-3xl font-bold">
            Disponible sur vos appareils préférés
          </h1>
          <p className="text-xl">
            Utilisez jusqu’à 5 appareils compatibles en simultané.
          </p>
        </div>
        <div className="ml-2.5">
          <img src="assets/users-solid.svg" className="w-1/6 m-auto" />
          <h1 className="text-3xl font-bold">Contrôle parental</h1>
          <p className="text-xl">
            Les enfants découvrent de nouvelles aventures avec un espace pour
            eux.
          </p>
        </div>
      </div>
    </div>
  );
}
