"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProfile({ userId }) {
  const [formData, setFormData] = useState({ nom: "", avatar: "" });
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/profiles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, user_id: userId }),
      });

      if (response.ok) {
        router.push("/profile-selection");
      } else {
        alert("Erreur lors de la création du profil.");
      }
    } catch (error) {
      console.error("Erreur lors de la création du profil:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-slate-50">
      <h1 className="text-4xl mb-8">Créer un nouveau profil</h1>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Nom du profil"
          value={formData.nom}
          onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
          required
          className="p-2 bg-gray-700 rounded"
        />
        <input
          type="text"
          placeholder="URL de l'avatar"
          value={formData.avatar}
          onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
          className="p-2 bg-gray-700 rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-600 rounded">
          Créer
        </button>
      </form>
    </div>
  );
}
