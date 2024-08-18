import React from "react";

export default function PageInfoUtilisateur() {
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/assets/bgAuth.webp')" }}
    >
      <div className="min-h-screen  flex justify-center items-center p-4 text-sm md:text-md">
        <div className="w-full max-w-4xl bg-gradient-to-b from-sky-700 to-sky-950 rounded-lg shadow-lg p-6">
          <h1 className="text-slate-50 text-xl md:text-2xl font-bold mb-8">
            Sélectionnez l'offre qui vous convient
          </h1>
          <div className="flex overflow-x-auto space-x-4 scrollbar-hide">
          <div className="flex justify-around items-stretch space-x-4">
            <div className="bg-gray-100 p-6 rounded-lg flex-1">
              <div className="bg-gradient-to-b from-greener-950 to-emeralder-900 w-full text-slate-50 pl-2">
                <h2 className="text-lg md:text-xl font-semibold">Standard</h2>
                <p className="mb-4">1080p</p>
              </div>
              <p className="mb-2">
                Abonnement mensuel <br />
                <strong>1,99 €</strong>
              </p>
              <p className="mb-2">
                Qualité vidéo jusqu'à <br />
                <strong>1080p Full HD</strong>
              </p>
              <p className="mb-2">
                Lectures simultanées <br />
                <strong>1</strong>
              </p>
              <p className="mb-2">
                Appareils pris en charge <br />
                <strong>TV, ordinateur, smartphone, tablette</strong>
              </p>
              <p className="mb-2">
                Téléchargements <br />
                <strong>Non</strong>
              </p>
              <p className="mb-2">
                Pubs <br />
                <strong>Avec Pub</strong>
              </p>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg flex-1">
              <div className="bg-gradient-to-b from-greener-950 to-emeralder-900 w-full text-slate-50 pl-2">
                <h2 className="text-lg md:text-xl font-semibold">Family</h2>
                <p className="mb-4">1080p</p>
              </div>
              <p className="mb-2">
                Abonnement mensuel <br />
                <strong>4,99 €</strong>
              </p>
              <p className="mb-2">
                Qualité vidéo jusqu'à <br />
                <strong>1080p Full HD</strong>
              </p>
              <p className="mb-2">
                Lectures simultanées <br />
                <strong>3</strong>
              </p>
              <p className="mb-2">
                Appareils pris en charge <br />
                <strong>TV, ordinateur, smartphone, tablette</strong>
              </p>
              <p className="mb-2">
                Téléchargements <br />
                <strong>Oui</strong>
              </p>
              <p className="mb-2">
                Pubs <br />
                <strong>Sans Pub</strong>
              </p>
              <p className="mb-2">
                Livraison <br />
                <strong>50% de réduction</strong>
              </p>
            </div>

            <div className="bg-gray-200 p-6 rounded-lg flex-1">
              <div className="bg-gradient-to-b from-greener-950 to-emeralder-900 w-full text-slate-50 pl-2">
                <h2 className="text-lg md:text-xl font-semibold">Premium</h2>
                <p className="mb-4">4K + HDR</p>
              </div>
              <p className="mb-2">
                Abonnement mensuel <br />
                <strong>8,99 €</strong>
              </p>
              <p className="mb-2">
                Qualité vidéo jusqu'à <br />
                <strong>4K (Ultra HD) + HDR</strong>
              </p>
              <p className="mb-2">
                Lectures simultanées <br />
                <strong>5</strong>
              </p>
              <p className="mb-2">
                Appareils pris en charge <br />
                <strong>TV, ordinateur, smartphone, tablette</strong>
              </p>
              <p className="mb-2">
                Téléchargements <br />
                <strong>Oui</strong>
              </p>
              <p className="mb-2">
                Pubs <br />
                <strong>Sans Pub</strong>
              </p>
              <p className="mb-2">
                Audio spatial (son immersif) <br />
                <strong>Oui</strong>
              </p>
              <p className="mb-2">
                Livraison <br />
                <strong>Gratuite</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
