import React from "react";

export default function Info() {
  return (
    <div>
      <div className="bg-gradient-to-b from-cyaner-100 to-emeralder-950 pt-14">
        <div className="bg-skyer-500 grid grid-cols-2 items-center">
          <div className="ml-1 text-white ">
            <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">Seulement sur Anime+</h1>
            <p className="text-md md:text-xl lg:text-3xl">
              Des films et séries animés exclusives que vous ne trouverez sur
              aucun autre service de streaming.
            </p>
          </div>
          <img src="assets/big3.webp" alt="Big3" className="w-[100%] h-[90%] lg:w-[100%]" />
        </div>
      </div>
      <div className="bg-gradient-to-b from-emeralder-950 to-greener-400 pt-14">
        <div className="bg-skyer-500 grid grid-cols-2 items-center justify-between">
          <img src="assets/gokussjscan.webp" alt="GokuScan" className="w-[70%] h-[90%] lg:w-[50%] lg:items-center" />
          <div className="text-white flex flex-col ml-1.5">
            <h1 className="text-2xl font-bold md:text-4xl lg:text-6xl">
              Regardez vos scans où que vous soyez
            </h1>
            <p className="text-md md:text-xl lg:text-3xl">
              Des lectures en lignes de chapitres ou volumes en illimité avec
              des sorties chaques semaines en même temps qu’au Japon en VF ou
              VA.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
