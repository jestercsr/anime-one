"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function PageAuth() {
  const [isConnect, setIsConnect] = useState(false);
  const [randomText, setRandomText] = useState("");
  const router = useRouter()

  useEffect(() => {
    const texte = [
      "Shinobi",
      "le futur roi des Pirates",
      "le Shinigami remplaçant",
      "Guerrier de la Team Z",
      "le Titan Originel",
      "le plus petit des Détectives",
      "celui qui veut sauver juste des filles dans les Dungeons",
      "membre de Shadow Garden",
      "Pourfendeur de Démons",
      "Exorciste",
      "Tueur à gage",
      "Assassin",
      "l'Alchimiste",
      "Chasseur",
      "Hero",
      "celui qui gagne en un Coup",
      "à mon prof qui sert la Mafia",
      "j'ai pas de Chance",
    ];
    const randomIndex = Math.floor(Math.random() * texte.length);
    const selectedText = texte[randomIndex];
    setRandomText(selectedText);
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
    };

    const response = await fetch("/api/users");

    if (response.ok) {
      router.push("/authentification/profile-selector");
    } else {
      console.log("Echec à la connexion");
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      email: formData.get("email"),
    };

    const response = await fetch("http://localhost:8080/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      router.push("/authentification/info-utilisateur");
    } else {
      alert("L'inscription n'a pas reussie");
    }
  };

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/assets/bgAuth.webp')" }}
    >
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
          isConnect ? "right-panel-active" : ""
        } relative w-[768px] max-w-full min-h-[480px] bg-transparent rounded-lg shadow-lg overflow-hidden transition-transform duration-600 ease-in-out`}
      >
        <div
          className={`absolute top-0 w-1/2 h-full transition-all duration-600 ease-in-out transform ${
            isConnect ? "opacity-0 z-0" : "opacity-100 z-20"
          }`}
        >
          <form
            onSubmit={handleLogin}
            className="bg-slate-50 flex flex-col items-center justify-center p-12 h-full text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Connexion</h2>
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-200 border-none p-3 my-2 w-full max-w-md"
            />
            <input
              type="password"
              placeholder="Mot de passe"
              className="bg-gray-200 border-none p-3 my-2 w-full max-w-md"
            />
            <Link href="#" className="text-gray-600 text-sm mt-2">
              Mot de passe oublié ?
            </Link>
            <button className="mt-4 rounded-2xl border border-blue-900 bg-blue-900 text-slate-50 font-bold py-3 px-10 uppercase transition-transform duration-80 ease-in hover:scale-95 focus:outline-none">
              Connexion
            </button>
          </form>
        </div>

        <div className="absolute top-0 w-1/2 h-full transition-all duration-600 ease-in-out transform z-2">
          <form
            onSubmit={handleSignIn}
            className="bg-slate-50 flex flex-col items-center justify-center p-8 md:p-12 h-full text-center"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Créer un compte
            </h2>
            <input
              type="text"
              placeholder="Username"
              className="bg-gray-200 border-none p-3 my-2 w-full max-w-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-gray-200 border-none p-3 my-2 w-full max-w-md"
            />
            <input
              type="password"
              placeholder="Mot de passe"
              className="bg-gray-200 border-none p-3 my-2 w-full max-w-md"
            />
            <button className="mt-4 rounded-2xl border border-rose-800 bg-rose-800 text-slate-50 font-bold py-3 px-10 uppercase transition-transform duration-80 ease-in hover:scale-95 focus:outline-none">
              S'inscrire
            </button>
          </form>
        </div>

        <div className="absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-600 ease-in-out z-100">
          <div
            className="bg-gradient-to-r from-rose-800 to-blue-900 bg-cover bg-center text-slate-50 absolute left-[-100%] h-full w-[200%] transform transition-transform duration-600 ease-in-out"
            style={{
              transform: isConnect ? "translateX(50%)" : "translateX(0)",
            }}
          >
            <div
              className={`absolute flex flex-col items-center justify-center px-10 text-center top-0 h-full w-1/2 transform transition-transform duration-600 ease-in-out ${
                isConnect ? "translate-x-0" : "translate-x-[-20%]"
              }`}
            >
              <h2 className="ml-1 text-xl lg:text-2xl">
                Bon retour parmi nous {randomText} !
              </h2>
              <p className="my-2 text-sm md:text-md">
                Pour reprendre tes lectures ou visionnages connecte-toi vite
              </p>
              <button
                className="bg-transparent border border-slate-50 text-slate-50 font-bold py-3 px-10 uppercase transition-transform duration-80 ease-in focus:outline-none"
                onClick={() => setIsConnect(false)}
              >
                Se connecter
              </button>
            </div>
            <div
              className={` md:flex absolute flex-col items-center justify-center px-10 text-center top-0 h-full w-1/2 right-0 transform transition-transform duration-600 ease-in-out ${
                isConnect ? "translate-x-[20%]" : "translate-x-0"
              }`}
            >
              <h2 className="ml-1 text-xl lg:text-2xl">
                Bienvenue {randomText} !
              </h2>
              <p className="my-2 text-sm md:text-md">
                Enregistre toutes tes infos et rejoinds l'équipage vite
              </p>
              <button
                className="bg-transparent border border-slate-50 text-slate-50 font-bold py-3 px-10 uppercase transition-transform duration-80 ease-in focus:outline-none"
                onClick={() => setIsConnect(true)}
              >
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
