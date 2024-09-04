"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useProfile } from "../../../providers/ProfileContext";
import { useAvatar } from "../../../providers/AvatarContext";

export default function PageAuth() {
  const [isConnect, setIsConnect] = useState(false);
  const [randomText, setRandomText] = useState("");
  const { saveSignupData, saveLoginData, saveUserId, selectAccount } =
    useProfile();
  const { saveRoleId, saveActiveCompte } = useAvatar();
  const router = useRouter();

  const generateRandomText = () => {
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
      "la fille qui à pas de Chance",
    ];
    const randomIndex = Math.floor(Math.random() * texte.length);
    return texte[randomIndex];
  };

  useEffect(() => {
    setRandomText(generateRandomText());
  }, []);

  const [formSign, setFormSign] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let [recaptchaToken, setRecaptchaToken] = useState(null);

  const handleRecaptchaChange = (token) => {
    setRecaptchaToken(token);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleInputSign = (e) => {
    setFormSign({ ...formSign, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Veuillez vérifier le captcha.");
      return;
    }

    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, recaptchaToken }),
    });

    if (res.ok) {
      const profile = await res.json();
      saveLoginData(formData);
      saveRoleId(profile.role);
      saveActiveCompte(profile.active);
      saveUserId(profile.id);
      selectAccount(profile);
      if (profile.active === true) {
        router.push("/authentification/profile-selector");
      } else {
        alert("Votre compte n'existe plus créé un nouveau");
      }
    } else {
      const errorData = await res.json();
      console.error("Erreur pendant le login:", errorData);
      alert("Nom d'utilisateur ou mot de passe incorrect.");
      return;
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!recaptchaToken) {
      alert("Veuillez vérifier le captcha.");
      return;
    }

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formSign, recaptchaToken }),
    });

    if (res.ok) {
      saveSignupData(formSign);
    } else {
      alert("Inscription impossible");
    }
    const response = await fetch(`/api/signup?username=${formSign.username}`);
    if (response.ok) {
      const userAll = await response.json();
      saveUserId(userAll[0].id);
      router.push("/authentification/offres");
    } else {
      const errorData = await res.json();
      console.error(`Erreur pendant l'inscription:`, errorData);
      alert("Nom d'utilisateur ou mot de passe incorrect.");
      return;
    }
  };

  const handleClickConnect = () => {
    setRandomText(generateRandomText());
    setIsConnect(false);
  };

  const handleClickSignUp = () => {
    setRandomText(generateRandomText());
    setIsConnect(true);
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
            className="bg-slate-50 flex flex-col items-center justify-center p-8 md:p-12 h-full text-center text-xs md:text-md"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Connexion</h2>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-gray-200 border-none p-1 md:p-3 my-2 w-full "
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              className="bg-gray-200 border-none p-1 md:p-3 my-2 w-full "
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <Link href="#" className="text-gray-600 text-xs md:text-sm mt-2">
              Mot de passe oublié ?
            </Link>
            <div className="w-full max-w-xs mr-24 md:mx-auto transform scale-50 md:scale-100 lg:scale-105">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={handleRecaptchaChange}
              />
            </div>
            <button
              type="submit"
              className="mt-4 rounded-2xl border border-blue-900 bg-blue-900 text-slate-50 font-bold py-3 px-2 lg:px-10 uppercase transition-transform duration-80 ease-in hover:scale-95 focus:outline-none"
            >
              Connexion
            </button>
          </form>
        </div>

        <div className="absolute top-0 w-1/2 h-full transition-all duration-600 ease-in-out transform z-2">
          <form
            onSubmit={handleSignIn}
            className="bg-slate-50 flex flex-col items-center justify-center p-8 md:p-12 h-full text-center text-xs md:text-md"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Créer un compte
            </h2>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="bg-gray-200 border-none p-1 md:p-3 my-2 w-full max-w-md"
              value={formSign.username}
              onChange={handleInputSign}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="bg-gray-200 border-none p-1 md:p-3 my-2 w-full max-w-md"
              value={formSign.email}
              onChange={handleInputSign}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              className="bg-gray-200 border-none p-1 md:p-3 my-2 w-full max-w-md"
              value={formSign.password}
              onChange={handleInputSign}
              required
            />
            <div className="w-full max-w-xs mr-24 md:mx-auto transform scale-50 md:scale-100 lg:scale-105">
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={handleRecaptchaChange}
              />
            </div>
            <button
              type="submit"
              className="mt-4 rounded-2xl border border-rose-800 bg-rose-800 text-slate-50 font-bold py-3 px-2 lg:px-10 uppercase transition-transform duration-80 ease-in hover:scale-95 focus:outline-none"
            >
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
              <h2 className="md:ml-1 text-lg lg:text-2xl">
                Bon retour parmi nous {randomText} !
              </h2>
              <p className="my-2 text-xs lg:text-md">
                Pour reprendre tes lectures ou visionnages connecte-toi vite
              </p>
              <button
                className="bg-transparent border border-slate-50 text-slate-50 font-bold md:py-3 px-2 md:px-10 uppercase transition-transform duration-80 ease-in focus:outline-none"
                onClick={handleClickConnect}
              >
                Se connecter
              </button>
            </div>
            <div
              className={`flex absolute flex-col items-center justify-center px-10 text-center top-0 h-full w-1/2 right-0 transform transition-transform duration-600 ease-in-out ${
                isConnect ? "translate-x-[20%]" : "translate-x-0"
              }`}
            >
              <h2 className="md:ml-1 text-lg lg:text-2xl">
                Bienvenue {randomText} !
              </h2>
              <p className="my-2 text-xs lg:text-md">
                Enregistre toutes tes infos et rejoinds l'équipage vite
              </p>
              <button
                className="bg-transparent border border-slate-50 text-slate-50 font-bold py-3 px-2 lg:px-10 uppercase transition-transform duration-80 ease-in focus:outline-none"
                onClick={handleClickSignUp}
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
