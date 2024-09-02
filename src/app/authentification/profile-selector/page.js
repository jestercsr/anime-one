"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useProfile } from "../../../../providers/ProfileContext";
import { useRouter } from "next/navigation";
import ReactLoading from "react-loading";
import { useAvatar } from "../../../../providers/AvatarContext";

export default function PageChoixProfil() {
  const { saveProfile, selectedAccount, userProfile } = useProfile();
  const [profiles, setProfiles] = useState([]);
  const { saveAvatarData } = useAvatar();
  const [avatars, setAvatars] = useState({});
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProfiles = async () => {
      if (!userProfile) return;

      try {
        const response = await fetch(`/api/profiles/${userProfile}`);
        const data = await response.json();
        setProfiles(data);

        const avatarsResponse = await fetch(`/api/profiles`);
        const avatarsData = await avatarsResponse.json();

        const avatarMap = avatarsData.reduce((acc, avatar) => {
          acc[avatar.id] = avatar;
          return acc;
        }, {});

        setAvatars(avatarMap);
      } catch (error) {
        console.error("Erreur lors de la récupération des profils:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, [userProfile]);

  const handleSelectProfile = (profile) => {
    return () => {
      const avatarUrl = avatars[profile.avatarId]?.images;
      console.log(profile);
      saveProfile(profile.id);
      saveAvatarData(profile.avatarId, avatarUrl, profile.nom);
    };
  };

  const handleAddProfile = () => {
    router.push("/authentification/profile-selector/create");
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-emeralder-900 to-sky-500 text-slate-50">
      <h1 className="text-4xl mb-8">
        Bon retour parmis nous {selectedAccount.username}
      </h1>

      <h3 className="text-2xl mb-8">Choisit un profil : </h3>
      <div className="flex space-x-4">
        {profiles.length > 0 ? (
          profiles.map((profile) => {
            const avatar = avatars[profile.avatarId];
            return (
              <div key={profile.id} className="text-center">
                <div className="relative w-24 h-24">
                  <Link href={"/accueil"}>
                    <img
                      src={avatar?.images}
                      alt={profile.nom}
                      className="rounded-full"
                      onClick={handleSelectProfile(profile)}
                    />
                  </Link>
                </div>
                <p className="mt-2">{profile.nom}</p>
              </div>
            );
          })
        ) : (
          <p>Aucun profil trouvé</p>
        )}
      </div>
      <div onClick={handleAddProfile} className="text-center">
        <button className="mt-8 px-4 py-2 bg-gray-800/50 rounded-full text-2xl">
          +
        </button>
        <p>Ajouter Profile</p>
      </div>
    </div>
  );
}
