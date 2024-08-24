"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useProfile } from "../../../../../providers/ProfileContext";
import { sql } from "@vercel/postgres";

export default function PageInscritComplet() {
  const [formData, setFormData] = useState({ prenom: '', nom: '', phone: '', carte_bancaire: '', date_naissance: '' });
  const { signupData, saveSignupData } = useProfile();
  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    saveSignupData(formData);

    const { email } = signupData;
    const { prenom, nom, phone, carte_bancaire, date_naissance } = formData;

    await sql`
      UPDATE User SET prenom= ${prenom}, nom = ${nom}, phone = ${phone}, carte_bancaire = ${carte_bancaire}, date_naissance = ${date_naissance}
      WHER email = ${email}
    `;

    router.push('/authentification/profile-selector');

  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-sky-600 to-cyan-900">
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-semibold mb-4">Mes infos</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text" name="prenom"
                placeholder="Prénom"
                className="w-full p-2 mb-4 border rounded"
                value={formData.prenom} onChange={handleInputChange}
                required
              />
              <input
                type="text" name="nom"
                placeholder="Nom"
                className="w-full p-2 mb-4 border rounded"
                value={formData.nom} onChange={handleInputChange}
                required
              />
              <input
                type="date" name="date_naissance"
                placeholder="Date de naissance"
                className="w-full p-2 mb-4 border rounded"
                value={formData.date_naissance} onChange={handleInputChange}
                required
              />
              <input
                type="text" name="phone"
                placeholder="Telephone"
                className="w-full p-2 mb-4 border rounded"
                value={formData.phone} onChange={handleInputChange}
              />
            </form>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Paiement</h2>
            <div className="bg-white p-4 rounded-lg shadow-md mb-4">
              <div className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-bold">Family</h3>
                  <p>4,99€</p>
                </div>
                <button className="text-blue-600 font-semibold">Changer</button>
              </div>
              <div className="border-t pt-4">
                <label className="block mb-2 font-semibold">Carte bancaire</label>
                <input
                  type="text" name="carte_bancaire"
                  placeholder="Numéro sur la carte"
                  className="w-full p-2 mb-4 border rounded"
                  value={formData.carte_bancaire} onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <button
              className="w-full bg-red-600 text-white font-semibold p-2 rounded-lg" type="submit"
            >
              D'accord & S'inscrire
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
