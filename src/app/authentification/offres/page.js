"use client";
import React,{ useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useProfile } from "../../../../providers/ProfileContext";
import { sql } from "@vercel/postgres";

export default function OffreSelection() {
  const [offres, setOffres] = useState([]);
  const { saveSignupData } = useProfile();
  const router = useRouter();

  useEffect(() => {
    async function fetchOffers() {
      const { rows } = await sql`SELECT * FROM "Offre"`;
      setOffres(rows);
    }

    fetchOffers();
  }, []);

  const handleSubmit = (offreId) => {
    saveSignupData({ offreId });
    router.push("/authentification/offres/inscription");
  };

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/assets/bgAuth.webp')" }}
    >
      <div className="min-h-screen flex justify-center items-center p-4 text-sm md:text-md">
        <div className="w-full max-w-4xl bg-gradient-to-b from-sky-700 to-sky-950 rounded-lg shadow-lg p-6">
          <h1 className="text-slate-50 text-xl md:text-2xl font-bold mb-8">
            Sélectionnez l'offre qui vous convient
          </h1>
          <div className="grid grid-cols-3">
          {offres.map((offre) => {
            return (
              <div
                key={offre.id}
                className="flex m-2 space-x-4 scrollbar-hide"
              >
                <div className="flex justify-around items-stretch space-x-4">
                  <div className="bg-gray-100 p-6 rounded-lg flex-1">
                    <button
                      onClick={() => handleSubmit(offre.id)}
                      className="bg-gradient-to-b from-greener-950 to-emeralder-900 text-left w-full text-slate-50 pl-2"
                    >
                      <h2 className="text-lg md:text-xl font-semibold">
                        {offre.nom}
                      </h2>
                      <p className="mb-4">{offre.type}</p>
                    </button>
                    <p className="mb-2">
                      Abonnement mensuel <br />
                      <strong>{offre.prix} €</strong>
                    </p>
                    <p className="mb-2">
                      Qualité vidéo jusqu'à <br />
                      <strong>{offre.video}</strong>
                    </p>
                    <p className="mb-2">
                      Lectures simultanées <br />
                      <strong>{offre.lectureSimul}</strong>
                    </p>
                    <p className="mb-2">
                      Appareils pris en charge <br />
                      <strong>{offre.appareil}</strong>
                    </p>
                    <p className="mb-2">
                      Téléchargements <br />
                      <strong>{offre.telechargement}</strong>
                    </p>
                    <p className="mb-2">
                      Pubs <br />
                      <strong>{offre.pub}</strong>
                    </p>
                    <p className="mb-2">
                      Audio spatial (son immersif) <br />
                      <strong>{offre.audio}</strong>
                    </p>
                    <p className="mb-2">
                      Livraison <br />
                      <strong>{offre.livraison}</strong>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>
    </div>
  );
}

