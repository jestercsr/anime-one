"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useProfile } from "../../../../providers/ProfileContext";

export default function PageChoixProfil() {
  const [data, setData] = useState("");
  const { selectProfile } = useProfile();

  useEffect(() => {
    const getNom = async () => {
      try {
        const listeNom = await fetch("/api/users");
        setData(listeNom);
      } catch (error) {
        console.error("Erreur de chargement", error);
      }
    };
    getNom();
  }, []);
  console.log(data);
  const profiles = [
    {
      name: "Jester",
      image: "/assets/avatar/narutoShippudenAvatar.png",
      lien: "/accueil",
    },
    {
      name: "2",
      image: "/assets/avatar/sasukeShippudenAvatar.png",
      lien: "/accueil",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-slate-50">
      <h1 className="text-4xl mb-8">Bon retour parmis nous {data.username}</h1>

      <h3 className="text-2xl mb-8">Choisit un profil : </h3>
      <div className="flex space-x-4">
        {profiles.map((profil, index) => {
          return (
            <div key={index} className="text-center">
              <div className="relative w-24 h-24">
                <Link href={profil.lien}>
                  <img
                    src={profil.image}
                    alt={profil.name}
                    className="rounded-full"
                    onClick={() => selectProfile(profil)}
                  />
                </Link>
              </div>
              <p className="mt-2">{profil.name}</p>
            </div>
          );
        })}
      </div>
      <button className="mt-8 px-4 py-2 bg-blue-600 rounded">
        Ajoutez un profil
      </button>
    </div>
  );
}
