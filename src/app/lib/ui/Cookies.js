'use client';

import React, { useEffect } from 'react';
import { useCookie } from '../useCookie';

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
export default function CookieConsent() {
  const [consent, setConsent] = useCookie('user-consent', null);

  useEffect(() => {
    if (!consent) {
      console.log('Aucun consentement trouvé, afficher le message.');
    }
  }, [consent]);

  if (consent) return null;

  return (
    <div className="fixed bottom-0 left-0 lg:w-1/3 bg-white p-6 shadow-lg border-t z-50">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center text-blue-600">
        <div className='flex justify-between m-auto w-full items-center'>
        <h2 className="text-lg mb-2">Salut c'est nous... <strong className='font-bold items-center'>les Cookies !</strong></h2>
        <img
          src="/assets/LogoAnimeONE/logoCookie.webp"
          alt="Logo"
          className="w-[30%] mb-4"
        />
        </div>
        <p className="text-sm mb-4">
        Nous utilisons des cookies pour améliorer votre expérience, analyser l'usage de notre site et optimiser nos services. 
        Grâce à ces informations, nous adaptons nos contenus pour mieux répondre à vos besoins et vous offrir une navigation fluide et sécurisée.
          C'est OK pour toi ?
        </p>
        <p className="text-xs mt-2">
          Pour modifier vos préférences plus tard, cliquez sur le lien "Préférences de
          cookies" situé dans le pied de page.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => setConsent('accepted')}
            className="hover:text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            OK pour moi
          </button>
          <button
            onClick={() => setConsent('declined')}
            className="hover:text-white px-4 py-2 rounded-md hover:bg-red-600"
          >
            Continuer sans accepter
          </button>
        </div>
      </div>
    </div>
  );
}
