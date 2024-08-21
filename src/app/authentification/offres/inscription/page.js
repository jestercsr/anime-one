"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function PageInscritComplet() {
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [phone, setPhone] = useState("");
  const [carte_bancaire, setCarteBancaire] = useState("");
  const [date_naissance, setDateNaissance] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userId = localStorage.getItem("userId");

    const res = await fetch("/api/signup/complet", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        prenom,
        nom,
        phone,
        carte_bancaire,
        date_naissance,
      }),
    });

    if (res.ok) {
      router.push("/authentification/profile-selector");
    } else {
      alert(`Erreur lors de l'inscription`);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <input
          type="text"
          placeholder="Téléphone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Carte Bancaire"
          value={carte_bancaire}
          onChange={(e) => setCarteBancaire(e.target.value)}
        />
        <input
          type="date"
          value={date_naissance}
          onChange={(e) => setDateNaissance(e.target.value)}
        />
        <button type="submit">Finaliser</button>
      </form>
    </div>
  );
}
