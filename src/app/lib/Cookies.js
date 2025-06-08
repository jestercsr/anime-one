"use client";

import React, { useState } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

/**
 * Affiche un message de consentement pour les cookies si l'utilisateur n'a pas encore consenti.
 * Si l'utilisateur a déjà consenti, le composant ne rend rien.
 *
 * Le composant utilise le hook `useCookie` pour stocker le consentement de l'utilisateur.
 * Il utilise également l'hook `useEffect` pour afficher le message de consentement
 * si l'utilisateur n'a pas encore consenti.
 *
 * @returns {JSX.Element} Un composant JSX qui affiche le message de consentement
 * si l'utilisateur n'a pas encore consenti, ou `null` si l'utilisateur a déjà consenti.
 */
export default function CookiesPage() {
  const [showPreferences, setShowPreferences] = useState(false);

  const handlePreferences = () => {
    setShowPreferences(true);
  };

  const handleSavePreferences = () => {
    setShowPreferences(false);
    Cookies.set('user-consent', 'customized');
  };

  return (
    <>
      {!showPreferences && (
        <CookieConsent
          cookieName="user-consent"
          location="bottom"
          buttonText="Ok pour moi"
          declineButtonText="Non, merci"
          style={{
            background: "white",
            color: "#3b82f6",
            padding: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 9999,
          }}
          buttonStyle={{
            background: "#22c55e", // vert
            color: "white",
            padding: "10px 20px",
            borderRadius: "6px",
            marginRight: "10px"
          }}
          declineButtonStyle={{
            background: "#ef4444", // rouge
            color: "white",
            padding: "10px 20px",
            borderRadius: "6px"
          }}
          enableDeclineButton
          onAccept={() => {
            console.log("Cookies acceptés");
          }}
          onDecline={() => {
            console.log("Cookies refusés");
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <h1 className="text-2xl">Salut c'est nous... <span className="font-extrabold">les Cookies !</span></h1>
            <img
              src="/assets/LogoAnimeONE/logoCookie.webp"
              alt="logo"
              style={{ height: "50px", marginLeft: "12px" }}
            />
            
          </div>
          <span className="text-sm">
            Nous utilisons des cookies pour améliorer votre expérience, analyser
            l'usage de notre site et optimiser nos services. Grâce à ces
            informations, nous adaptons nos contenus pour mieux répondre à vos
            besoins et vous offrir une navigation fluide et sécurisée. C'est OK
            pour toi ?
          </span>
          <br />
          <span className="text-xs">Pour modifier vos préférences, cliquez sur le bouton ci-dessous.</span>
          <button
            onClick={handlePreferences}
            style={{
              color: "#3b82f6",
              padding: "8px",
              marginLeft: "15px",
              fontWeight: "bold",
            }}
            className="hover:underline"
          >
            Personnaliser
          </button>
        </CookieConsent>
      )}

      {/* Fenêtre des préférences */}
      {showPreferences && (
        <div
          className="fixed bottom-0 w-full bg-white text-black p-6 z-50 shadow-xl border-t border-gray-300"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <div>
            <h2 className="text-lg font-semibold mb-2">Préférences des cookies</h2>
            <p className="text-sm mb-4">
              Choisissez les types de cookies que vous souhaitez autoriser.
            </p>
            <label className="block">
              <input type="checkbox" disabled checked /> Cookies essentiels (obligatoires)
            </label>
            <label className="block mt-2">
              <input type="checkbox" /> Statistiques (Google Analytics, etc.)
            </label>
            <label className="block mt-2">
              <input type="checkbox" /> Publicité personnalisée
            </label>
          </div>
          <div className="flex items-end gap-4">
            <button
              onClick={() => setShowPreferences(false)}
              className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
            >
              Annuler
            </button>
            <button
              onClick={handleSavePreferences}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Enregistrer
            </button>
          </div>
        </div>
      )}
    </>
  );
}
