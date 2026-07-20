import React, { useEffect, useState } from "react";
import { useProfile } from "../../../providers/ProfileContext";
import Navbar from "../../accueil/ui/NavBar";

/**
 * Page de la liste de visionnage
 *
 * Rend la liste de visionnage du profil connect .
 * Si la liste est vide, affiche un message indiquant qu'il n'y a pas de manga dans la liste de visionnage.
 *
 * @returns {JSX.Element} La page de la liste de visionnage
 */
export default function WatchlistPage() {
  const [watchlist, setWatchlist] = useState([]);
  const { userProfile } = useProfile();
  const [loading, setLoading] = useState(true);
  const idUser = parseInt(userProfile, 10);

  useEffect(() => {
    const fetchWatchlist = async () => {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/watchlist?userProfile=${idUser}`);
      const data = await res.json();
      setWatchlist(data);
      console.log(data);

      setLoading(false);
    };

    fetchWatchlist();
  }, [idUser]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-emeralder-900 to-sky-500 text-slate-50">
        <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="bg-orange-50 min-h-screen">
      <Navbar
        className="bg-yellow-400 text-red-700"
        liste="bg-yellow-400 text-red-700 absolute left-0 w-full divide-y-2 divide-slate-50 border-gray-300 mt-1 z-10 list-none"
        listing="cursor-pointer p-2 hover:bg-gray-200 hover:text-cyan-900 border-t-0"
      />
      <h1 className="text-2xl text-center text-orange-600 mb-10">
        Liste de visionnage
      </h1>
      {watchlist ? (
        <div className="w-4/5 lg:w-full grid grid-cols-2 gap-1 m-auto items-center xs:grid xs:grid-cols-1 xs:m-auto md:grid md:grid-cols-4 md:gap-4 md:m-auto md:items-center xl:grid xl:grid-cols-5">
          {watchlist.map((anime) => (
            <div
              key={anime._id}
              className="mx-1 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8"
            >
              <a href={`/manga/${anime.url}`}>
                <img
                  src={anime.image}
                  alt={anime.name}
                  className="w-full rounded-2xl hover:opacity-100"
                />
                <p className="text-sm text-center text-cyan-900">
                  {anime.name}
                </p>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-screen-2xl m-auto">
          Aucun manga dans la liste de visionnage
        </div>
      )}
    </div>
  );
}
