"use client";
import React, { useEffect, useState } from "react";
import { useProfile } from "../../../providers/ProfileContext";
import { useAvatar } from "../../../providers/AvatarContext";
import { useRouter } from "next/navigation";
import ReactLoading from "react-loading";
import Link from "next/link";

export default function PageProfile() {
  const lien = [
    {
      name: "Liste de visionnage",
      url: "/profile/watchlist",
    },
    {
      name: "Paramètres",
      url: "/settings",
    },
    {
      name: "Mentions Légales",
      url: "/mentions-legales",
    },
  ];
  const { selectProfile, userProfile, logout } = useProfile();
  const [profiles, setProfiles] = useState([]);
  const { saveAvatarData } = useAvatar();
  const [avatars, setAvatars] = useState({});
  const [loading, setLoading] = useState(true);
  const [previousPage, setPreviousPage] = useState("/accueil");
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
    const avatarUrl = avatars[profile.avatarId]?.images;
    saveAvatarData(profile.avatarId, avatarUrl, profile.nom);
  };

  useEffect(() => {
    const referrer = document.referrer;
    if (referrer && referrer !== window.location.href) {
      setPreviousPage(referrer);
    } else if (router.query.from) {
      setPreviousPage(router.query.from);
    }
  }, [router]);

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

  const handleEditProfiles = () => {
    router.push("/profile/edit-profiles");
  };

  const handleGoBack = () => {
    if (previousPage) {
      router.push(previousPage);
    } else {
      router.back();
    }
  };

  return (
    <div className="bg-gradient-to-b from-emeralder-900 to-sky-500 text-slate-50">
      <button onClick={handleGoBack} className="text-left text-xl mr-5">Retour</button>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-4">
          <div className="flex justify-center">
            {profiles.length > 0 ? (
              profiles.map((profile) => {
                const avatar = avatars[profile.avatarId];
                return (
                  <div key={profile.id} className="text-center">
                    <div className="relative w-24 h-24">
                      <img
                        src={avatar?.images}
                        alt={profile.nom}
                        className="rounded-full"
                        onClick={handleSelectProfile(profile)}
                      />
                    </div>
                    <p className="mt-2">{profile.nom}</p>
                  </div>
                );
              })
            ) : (
              <p>Aucun profil trouvé</p>
            )}
          </div>
          <button
            className="text-3xl items-center p-2 m-auto mt-4 bg-gray-400/40 text-slate-50"
            onClick={handleEditProfiles}
          >
            Modifier un profil
          </button>
          <ul>
            {lien.map((liens, index) => {
              return (
                <li key={index} className="p-3 border-b border-gray-700">
                  <Link href={liens.name}>{liens.name}</Link>
                </li>
              );
            })}
            <li className="p-3 border-b border-gray-700 hover:text-red-500">
              <button onClick={logout}>Déconnexion</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
