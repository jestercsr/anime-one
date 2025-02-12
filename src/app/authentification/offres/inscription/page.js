"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useProfile } from "../../../../../providers/ProfileContext";
import { useAvatar } from "../../../../../providers/AvatarContext";

export default function PageInscritComplet() {
  const [formData, setFormData] = useState({
    id: "",
    prenom: "",
    nom: "",
    phone: "",
    date_naissance: "",
    numero_rue: "",
    voie: "",
    code_postal: "",
    ville: "",
    pays: "",
    nom_carte: "",
    numero_carte: "",
    expiration: "",
    cvc: "",
    offreUtilisateur: "",
  });
  const { userProfile, saveSignupData } = useProfile();
  const { offreUser } = useAvatar()
  const router = useRouter();

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch("/api/signup/complete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, id: userProfile, offreUtilisateur: offreUser }),
      
    });

    if (res.ok) {
      saveSignupData(formData);
      router.push("/authentification");
    } else {
      const errorData = await res.json();
      console.error(`Erreur pendant l'inscription:`, errorData);
      alert("Données incorrect.");
      return;
    }
  };

  const handleChangeOffre = () => {
    router.push("/authentification/offres");
  };

  return (
    <div style={{ backgroundImage: "url('/assets/bgAuth.webp')" }} className="bg-cover bg-center h-screen flex justify-center items-center min-h-screen">
      <div className="bg-gradient-to-b from-sky-600 to-cyan-900 p-8 rounded-lg shadow-lg max-w-4xl w-full">
        <p className="text-red-600 text-2xl text-center">! Veuillez ne pas indiquez vos réelles informations personnelles, se site est un projet scolaire !</p>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Mes infos</h2>
                <input
                  type="text"
                  name="prenom"
                  placeholder="Prénom"
                  className="w-full p-2 mb-4 border rounded"
                  value={formData.prenom}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="nom"
                  placeholder="Nom"
                  className="w-full p-2 mb-4 border rounded"
                  value={formData.nom}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="date"
                  name="date_naissance"
                  placeholder="Date de naissance"
                  className="w-full p-2 mb-4 border rounded"
                  value={formData.date_naissance}
                  onChange={handleInputChange}
                  required
                />
                <h2>Adresse: </h2>
                <input
                  type="number"
                  name="numero_rue"
                  placeholder="Numéro de Rue"
                  className="w-full p-2 mb-4 border rounded"
                  value={formData.numero_rue}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="voie"
                  placeholder="Voie"
                  className="w-full p-2 mb-4 border rounded"
                  value={formData.voie}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="code_postal"
                  placeholder="Code Postal"
                  className="w-full p-2 mb-4 border rounded"
                  value={formData.code_postal}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="ville"
                  placeholder="Ville"
                  className="w-full p-2 mb-4 border rounded"
                  value={formData.ville}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="pays"
                  placeholder="Pays"
                  className="w-full p-2 mb-4 border rounded"
                  value={formData.pays}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Telephone"
                  className="w-full p-2 mb-4 border rounded"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Paiement</h2>
                <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                  <div className="bg-gradient-to-b from-greener-950 to-emeralder-900 text-slate-50 p-2 rounded-md flex justify-between items-center mb-4">
                    <div>
                      <h3 className="text-lg font-bold">{offreUser.nom}</h3>
                      <p>{offreUser.prix}€</p>
                    </div>
                    <button className="font-semibold" onClick={handleChangeOffre}>
                      Changer
                    </button>
                  </div>
                  <div className="border-t pt-4">
                    <label className="block mb-2 font-semibold">
                      Carte bancaire
                    </label>
                    <input
                      type="text"
                      name="nom_carte"
                      placeholder="Nom sur la carte"
                      value={formData.nom_carte}
                      onChange={handleInputChange}
                      className="uppercase w-full p-2 mb-4 border rounded"
                      required
                    />
                    <input
                      type="text"
                      name="numero_carte"
                      placeholder="Numéro sur la carte"
                      className="w-full p-2 mb-4 border rounded"
                      value={formData.numero_carte}
                      onChange={handleInputChange}
                      required
                    />
                    <input
                      type="date"
                      name="expiration"
                      placeholder="Expiration"
                      value={formData.expiration}
                      onChange={handleInputChange}
                      className="w-full p-2 mb-4 border rounded"
                      required
                    />
                    <input
                      type="text"
                      name="cvc"
                      placeholder="Code sécurité"
                      value={formData.cvc}
                      onChange={handleInputChange}
                      className="w-full p-2 mb-4 border rounded"
                      required
                    />
                  </div>
                </div>
                <button
                  className="w-full bg-red-600 text-white font-semibold p-2 rounded-lg"
                  type="submit"
                >
                  D'accord & S'inscrire
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
