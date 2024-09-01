"use client";
import React, { useEffect, useState } from "react";
import { useProfile } from "../../../../providers/ProfileContext";
import { useRouter } from "next/navigation";
import { useAvatar } from "../../../../providers/AvatarContext";
import ReactLoading from "react-loading";

export default function PageEditProfil() {
  const { userProfile, selectProfile } = useProfile();
  const { profileName, avatarUrl, saveAvatarData } = useAvatar();
  const [profiles, setProfiles] = useState([]);
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showWindows, setShowWindows] = useState(false);
  const [currentProfileName, setCurrentProfileName] = useState(profileName || "");
  const router = useRouter();

  useEffect(() => {
    const fetchProfiles = async () => {
      if (!userProfile) return;

      try {
        const response = await fetch(`/api/profiles/${userProfile}`);
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des profils:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfiles();
  }, [userProfile]);

  useEffect(() => {
    async function fetchAvatars() {
      try {
        const response = await fetch("/api/profiles");
        const data = await response.json();
        setAvatars(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des avatars:", error);
      }
    }

    fetchAvatars();
  }, []);

  const handleDeleteProfile = async () => {
    try {
      const response = await fetch(`/api/profiles/${selectProfile}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Profil supprimé avec succès");
      } else {
        console.error("Erreur lors de la suppression du profil");
      }
    } catch (error) {
      console.error("Erreur lors de la suppression du profil:", error);
    }
  };

  const handleEditProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/profiles/${userProfile}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: currentProfileName,
          avatarId: selectedAvatar,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setProfiles(data);
        const avatarUrl = avatars[data.avatarId]?.images;
        saveAvatarData(data.avatarId, avatarUrl, data.nom);
        alert("Profil modifié avec succès");
      } else {
        console.error("Erreur lors de la modification du profil");
      }
    } catch (error) {
      console.error("Erreur lors de la modification du profil:", error);
    }
  };

  const handleCreateProfile = () => {
    router.push("/profile/create");
  };

  const handleExitProfile = () => {
    router.push("/profile");
  };

  const handleAvatarSelection = (avatarUrl) => {
    setSelectedAvatar(avatarUrl);
    setShowWindows(false);
  };

  const selectedAvatarImage =
    avatarUrl || avatars.find((avatar) => avatar.id === selectedAvatar)?.images;

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
    <div className="bg-gradient-to-b from-emeralder-900 to-sky-500 text-slate-50">
      <button onClick={handleExitProfile} className="text-right text-xl mr-5">
        Fini
      </button>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl mb-8">Modifier un Profile</h1>

        <div className="flex flex-wrap justify-center space-x-4">
          {profiles.length > 0 ? (
            profiles.map((profile) => {
              return (
                <div key={profile.id} className="text-center">
                  <div className="relative w-32 h-32">
                    <img
                      src={profile.images}
                      alt={profile.nom}
                      className="rounded-full"
                    />
                    <p>{profile.nom}</p>
                    <button
                      onClick={() => {
                        setSelectedAvatar(profile.avatarId);
                        setCurrentProfileName(profile.name);
                        setShowModal(true);
                      }}
                      className="absolute bottom-0 right-0 p-1 rounded-full"
                    >
                      <img
                        src="/assets/avatar/FaPen.png"
                        alt="faPen"
                        className="rounded-full w-10"
                      />
                    </button>
                    <button
                      onClick={() => handleDeleteProfile(profile.id)}
                      className="absolute bottom-0 left-0 bg-red-600 p-1 rounded-full"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Aucun profil trouvé</p>
          )}
        </div>
        <div onClick={handleCreateProfile} className="text-center">
          <button className="mt-8 px-4 py-2 bg-gray-800/50 rounded-full text-2xl">
            +
          </button>
          <p>Ajouter Profile</p>
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-gray-800 p-8 rounded-lg max-w-lg w-full">
            <form
              onSubmit={handleEditProfile}
              className="grid grid-cols-2 space-y-4 max-w-md w-full"
            >
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  placeholder="Nom du profil"
                  value={currentProfileName}
                  onChange={(e) => setCurrentProfileName(e.target.value)}
                  required
                  className="p-2 bg-gray-700 rounded w-full"
                />
              </div>
              <div className="relative flex flex-col items-center">
                <img
                  src={selectedAvatarImage}
                  alt="Avatar sélectionné"
                  className="w-60 h-60 object-cover rounded-full mb-4"
                />
                <button
                  type="button"
                  onClick={() => setShowWindows(true)}
                  className="absolute bottom-0 left-14 ml-20 px-4 py-2"
                >
                  <img
                    src="/assets/avatar/FaPen.png"
                    alt="faPen"
                    className="rounded-full w-12"
                  />
                </button>
              </div>

              <div className="flex justify-between">
                <button
                  type="submit"
                  className="uppercase px-4 py-2 bg-blue-600 rounded mt-4 w-full"
                >
                  Enregistrer
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="ml-5 uppercase px-4 py-2 bg-red-600 rounded mt-4 w-full"
                >
                  Fermer
                </button>
              </div>
            </form>
          </div>

          {showWindows && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
              <div className="bg-gray-800 p-8 rounded-lg max-w-lg w-full">
                <h2 className="text-2xl mb-4">Sélectionnez un Avatar</h2>
                <div className="grid grid-cols-4 gap-4">
                  {avatars.map((avatar) => (
                    <div
                      key={avatar.id}
                      className="cursor-pointer"
                      onClick={() => handleAvatarSelection(avatar.id)}
                    >
                      <img
                        src={avatar.images}
                        alt={`Avatar ${avatar.id}`}
                        className="w-24 h-24 object-cover rounded-full"
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setShowWindows(false)}
                  className="mt-4 px-4 py-2 bg-red-600 rounded w-full"
                >
                  Fermer
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
