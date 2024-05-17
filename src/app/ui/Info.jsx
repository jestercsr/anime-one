import React from "react";

export default function Info() {
  return (
    <div>
      <div className="bg-gradient-to-b from-cyan-blanc to-turquoise-darker pt-14">
        <div className="bg-sky-bleu flex items-center justify-between">
          <div className="ml-1 text-white ">
            <h1 className="text-6xl font-bold">Seulement sur Anime+</h1>
            <p className="text-3xl">
              Des films et séries animés exclusives que vous ne trouverez sur
              aucun autre service de streaming.
            </p>
          </div>
          <img src="assets/big3.jpg" className="w-2/3" />
        </div>
      </div>
      <div className="bg-gradient-to-b from-turquoise-darker to-green-bleu pt-14">
        <div className="bg-sky-bleu flex items-center justify-between">
          <img src="assets/gokussjscan.jpg" className="w-1/4" />
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
