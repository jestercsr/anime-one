"use client";

import React from "react";

export function AvailableComponent() {
  return (
    <div className="pt-14 bg-gradient-to-b from-greener-400 to-greener-950 text-white">
      <div className="bg-skyer-500 md:grid md:grid-cols-3 text-center">
        <div className="">
          <img src="assets/iconoir--cinema-old.svg" alt="iconeCinema" className="w-[10%] md:[15%] lg:w-1/5 m-auto" />
          <h1 className="text-xl md:text-2xl lg:text-3xl">Regardez selon vos envies</h1>
          <p className="text-md md:text-lg lg:text-xl">
            Découvrez des milliers d’heures d’animes et scans.
          </p>
        </div>
        <div className="ml-2.5">
          <img src="assets/devices-solid.svg" alt="iconeDevices" className="w-[10%] md:[15%] lg:w-1/5 m-auto" />
          <h1 className="text-xl md:text-2xl lg:text-3xl">
            Disponible sur vos appareils préférés
          </h1>
          <p className="text-md md:text-lg lg:text-xl">
            Utilisez jusqu’à 5 appareils compatibles en simultané.
          </p>
        </div>
        <div className="ml-2.5">
          <img src="assets/users-solid.svg" alt="iconeUsers" className="w-[10%] md:[15%] lg:w-1/6 m-auto" />
          <h1 className="text-xl md:text-2xl lg:text-3xl">Contrôle parental</h1>
          <p className="text-md md:text-lg lg:text-xl">
            Les enfants découvrent de nouvelles aventures avec un espace pour
            eux.
          </p>
        </div>
      </div>
    </div>
  );
}
