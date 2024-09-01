"use client";
import React, { useEffect, useState } from "react";
import { useProfile } from "../../../../providers/ProfileContext";
import { useRouter } from "next/navigation";

export default function PageCreateProfil() {
  const { userProfile } = useProfile();
  const router = useRouter();
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [nom, setNom] = useState("");
  const [showModal, setShowModal] = useState(false);

  const defaultAvatar = "/assets/avatar/narutoShippudenAvatar.png";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/profiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userProfile,
          nom,
          avatarId: selectedAvatar,
        }),
      });

      if (response.ok) {
        router.push("/profile");
      } else {
        alert("Erreur lors de la création du profil.");
      }
    } catch (error) {
      console.error("Erreur lors de la création du profil:", error);
    }
  };

  const handleAvatarSelection = (avatarUrl) => {
    setSelectedAvatar(avatarUrl);
    setShowModal(false);
  };

  const handleClose = () => {
    router.push("/profile/edit-profiles");
  };

  const selectedAvatarImage =
    avatars.find((avatar) => avatar.id === selectedAvatar)?.images ||
    defaultAvatar;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-slate-50">
      <h1 className="text-4xl mb-8">Créer un nouveau profil</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 space-y-4 max-w-md w-full"
      >
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="Nom du profil"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
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
            onClick={() => setShowModal(true)}
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
            onClick={handleClose}
            className="ml-5 uppercase px-4 py-2 bg-red-600 rounded mt-4 w-full"
          >
            Fermer
          </button>
        </div>
      </form>

      {showModal && (
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
              onClick={() => setShowModal(false)}
              className="mt-4 px-4 py-2 bg-red-600 rounded w-full"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
