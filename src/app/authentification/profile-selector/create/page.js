"use client";

import { useRouter } from "next/navigation";
import { useProfile } from "../../../../../providers/ProfileContext";
import { useEffect, useState } from "react";
import { FaPencilAlt } from "react-icons/fa";
import ReactLoading from "react-loading";

export default function CreateProfile() {
  const { userProfile } = useProfile();
  const router = useRouter();
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const [nom, setNom] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  const defaultAvatar = "/assets/avatar/narutoShippudenAvatar.webp";

  useEffect(() => {
    async function fetchAvatars() {
      try {
        const response = await fetch("/api/avatar");
        const data = await response.json();
        const groupedAvatars = data.reduce((acc, avatar) => {
          if (!acc[avatar.category]) {
            acc[avatar.category] = [];
          }
          acc[avatar.category].push(avatar);
          return acc;
        }, {});

        setAvatars(groupedAvatars);
        console.log(groupedAvatars);
        
      } catch (error) {
        console.error("Erreur lors de la récupération des avatars:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchAvatars();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/profiles/${userProfile}`, {
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
        router.push("/authentification/profile-selector");
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
    router.push("/authentification/profile-selector");
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

  const selectedAvatarImage =
  Object.values(avatars)
  .flat().find((avatar) => avatar.id === selectedAvatar)?.images ||
    defaultAvatar;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-emeralder-900 to-sky-500 text-slate-50">
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
            <FaPencilAlt className="text-2xl" />
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
            <div className="space-y-4 max-h-80 overflow-y-auto">
        {Object.keys(avatars).map((category) => (
          <div key={category}>
            <h3 className="text-lg font-semibold mb-2">{category}</h3>
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {avatars[category].map((avatar) => (
                <div
                  key={avatar.id}
                  className="cursor-pointer flex-shrink-0"
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
