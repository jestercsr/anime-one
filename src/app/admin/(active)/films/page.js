'use client'
import React, { useEffect, useState } from "react";
import { getFilmsAll } from "../../../../../_actions/postAction";
import ReactLoading from "react-loading";
import Link from "next/link";

export default function PageFilmAdmin() {
  const [dataFilm, setDataFilm] = useState([])
  const [loading, setLoading] = useState(true);
  const [showFullText, setShowFullText] = useState(false);
  const limitMot = 15;

  useEffect(()=> {
    const fetchData = async () => {
      try{
        const moviesData = await getFilmsAll()
        setDataFilm(moviesData)
        setLoading(false)
      }catch (error) {
        console.error(
          "Erreur pour recuperer la liste des films:",
          error
        );
        setLoading(false);
      }
    }
    fetchData()
  }, [])

  if (loading) {
    return <div><ReactLoading type="bubbles" color="#4f46e5" height={'3%'} width={'3%'} /></div>;
  }

  return (
    <div className="bg-slate-50 text-center min-h-screen">
      <h1 className="text-4xl text-indigo-600 mb-10">Films</h1>
      <div>
        <h2 className="text-[26px] text-indigo-600">Liste de films : </h2>
        <div className="w-4/5 lg:w-full grid grid-cols-2 gap-1 m-auto items-center xs:grid-cols-1 xs:m-auto md:grid-cols-4 md:gap-4 md:m-auto md:items-center">
        {dataFilm.map((films)=> {
          return(
            <div key={films.id} className=" bg-slate-50 rounded-lg shadow-lg overflow-hidden">
              <div className="w-full">
              <Link href={`/manga/`+films.manga+`/`+films.type+`/`+films.url}>
                <img src={films.image} className="object-cover"/>
                </Link>
              </div>
              <div className="p-6 justify-center">
                <h2 className="text-xl font-bold text-gray-900">{films.name}</h2>
                <h3 className="text-lg text-gray-600">{films.auteur}</h3>
                <p className="text-sm">{showFullText? films.description : truncateText(films.description, limitMot)}</p>
                <button className="mt-4 text-blue-500 hover:underline" onClick={() => setShowFullText(!showFullText)}>
                  {showFullText ? 'Lire moins' : 'Lire plus'}
                </button>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  );
}

const truncateText = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...';
  }
  return text;
};