import React from "react";

export default function Info() {
  return (
    <div>
      <div className="bg-gradient-to-b from-cyaner-100 to-emeralder-950 pt-14">
        <div className="bg-skyer-500 flex items-center justify-between">
          <div className="ml-1 text-white ">
            <h1 className="text-6xl font-bold">Seulement sur Anime+</h1>
            <p className="text-3xl">
              Des films et séries animés exclusives que vous ne trouverez sur
              aucun autre service de streaming.
            </p>
          </div>
          <img src="assets/big3.webp" className="w-2/3" />
        </div>
      </div>
      <div className="bg-gradient-to-b from-emeralder-950 to-greener-400 pt-14">
        <div className="bg-skyer-500 flex items-center justify-between">
          <img src="assets/gokussjscan.webp" className="w-1/4" />
          <div className="text-white flex flex-col ml-1.5">
            <h1 className="text-6xl font-bold">
              Regardez vos scans où que vous soyez
            </h1>
            <p className="text-3xl">
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
