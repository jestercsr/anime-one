import React, { useState, useEffect } from "react";
import Footer from "../../../ui/Footer";
import { useProfile } from "../../../../providers/ProfileContext";

export default function ListeAllManga() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { userProfile } = useProfile();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listeData = await fetch(`${import.meta.env.VITE_API_URL}/posts/listes`).then((res) => res.json());
        setData(listeData);
        console.log(listeData);
        setLoading(false);
      } catch (error) {
        console.error("Erreur pour recuperer la liste des mangas:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-emeralder-900 to-sky-500 text-slate-50">
        <div className="w-10 h-10 border-4 border-white border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <section className="w-4/5 lg:w-full grid grid-cols-2 gap-1 m-auto items-center xs:grid xs:grid-cols-1 xs:m-auto md:grid md:grid-cols-4 md:gap-4 md:m-auto md:items-center xl:grid xl:grid-cols-5">
        {data.map((select, i) => {
          return (
            <div
              className="mx-1 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8"
              key={i}
            >
              {userProfile ? (
                <div>
                  <a href={`/manga/${select.url}`}>
                    <img
                      src={select.image}
                      alt={select.name}
                      className="w-full rounded-2xl hover:opacity-100"
                    />
                  </a>
                </div>
              ) : (
                <div>
                  <a href={`/authentification`}>
                    <img
                      src={select.image}
                      alt={select.name}
                      className="w-full rounded-2xl hover:opacity-100"
                    />
                  </a>
                </div>
              )}
            </div>
          );
        })}
      </section>

      <Footer />
    </div>
  );
}
