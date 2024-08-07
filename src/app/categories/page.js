"use client";
import React, { useEffect, useState } from "react";
import categorie from "../../../data/categorie.json";
import { getListeAll } from "../../../_actions/postAction";
import Link from "next/link";

export default function PageCategories() {
  const [genre, setGenre] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const sortedCategories = categorie.sort((a, b) =>
    a.label.localeCompare(b.label)
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listeData = await getListeAll();
        setData(listeData);
        setLoading(false);
      } catch (error) {
        console.error("Erreur pour recuperer la liste des mangas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredData = data.filter((manga) => {
    const matchesGenre =
      genre === "" ||
      manga.categorie.some((val) => val.toLowerCase() === genre.toLowerCase());
    const matchesSearchTerm =
      searchTerm === "" ||
      manga.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesGenre && matchesSearchTerm;
  });

  return (
    <div className="bg-gradient-to-b from-cyan-900 to-emeralder-900">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Rechercher par nom"
        className="text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-cyan-950 focus:border-2 outline-none px-[5px] text-neutral-800 mx-5 my-2 p-2 w-[30%]"
      />
      <select
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        className="bg-cyan-900 text-slate-50 p-2 rounded-lg text-sm lg:text-lg"
      >
        {sortedCategories.map((option, i) => {
          return (
            <option value={option.nom} key={i}>
              {option.label}
            </option>
          );
        })}
      </select>
      <section className="w-4/5 lg:w-full grid grid-cols-2 gap-1 m-auto items-center xs:grid xs:grid-cols-1 xs:m-auto md:grid md:grid-cols-4 md:gap-4 md:m-auto md:items-center xl:grid xl:grid-cols-5">
        {filteredData.map((select, i) => {
          return (
            <div
              className="mx-1 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8"
              key={i}
            >
              <Link href={`/manga/${select.url}`}>
                <img
                  src={select.image}
                  alt={select.name}
                  className="w-full rounded-2xl hover:opacity-100"
                />
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
}
