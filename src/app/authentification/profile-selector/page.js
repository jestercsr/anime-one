"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useProfile } from "../../../../providers/ProfileContext";
import { useRouter } from "next/navigation";
import ReactLoading from "react-loading";

export default function PageChoixProfil() {
  const { userId, selectProfile } = useProfile();
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProfiles = async () => {
      if (!userId) return;

      try {
        const response = await fetch(`/api/profiles?userId=${userId}`);
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des profils:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, [userId]);
  
  const handleAddProfile = () => {
    router.push("/profile-selector/create");
  };

  if (loading) {
    return (
      <div>
        <ReactLoading
          type="bubbles"
          color="#ffffff"
          height={"30px"}
          width={"30px"}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-slate-50">
      <h1 className="text-4xl mb-8">Bon retour parmis nous {selectedProfile.username}</h1>

      <h3 className="text-2xl mb-8">Choisit un profil : </h3>
      <div className="flex space-x-4">
      {profiles.length > 0 ? (
        profiles.map((profil, index) => {
          return (
            <div key={index} className="text-center">
              <div className="relative w-24 h-24">
                <Link href={profil.lien}>
                  <img
                    src={profil.avatar}
                    alt={profil.nom}
                    className="rounded-full"
                    onClick={() => selectProfile(profil)}
                  />
                </Link>
              </div>
              <p className="mt-2">{profil.nom}</p>
            </div>
          );
        })): (<p>Aucun profil trouvé</p>)}
      </div>
      <button className="mt-8 px-4 py-2 bg-blue-600 rounded" onClick={handleAddProfile}>
        Ajoutez un profil
      </button>
    </div>
  );
}
