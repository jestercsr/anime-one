'use client'
import React, { useEffect, useState } from "react";
import { getFilmsAll } from "../../../../../_actions/postAction";
import ReactLoading from "react-loading";
import Link from "next/link";

export default function PageFilmAdmin() {
  const [dataFilm, setDataFilm] = useState([])
  const [loading, setLoading] = useState(true);

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
        <div className="w-4/5 lg:w-full grid grid-cols-2 gap-1 m-auto items-center xs:grid-cols-1 xs:m-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4 md:m-auto md:items-center">
        {dataFilm.map((films)=> {
          return(
            <div key={films.id} className=" bg-slate-50 rounded-lg shadow-lg overflow-hidden">
              <div className="w-full">
              <Link href={`/manga/`+films.manga+`/`+films.type+`/`+films.url}>
                <img src={films.image} className="object-cover"/>
                </Link>
              </div>
              <div className="p-6 justify-center">
                <h2 className="text-lg line-clamp-2 lg:h-[60px] font-bold text-gray-900">{films.name}</h2>
                <h3 className="text-md text-gray-600 line-clamp-1">{films.auteur}</h3>
                <h3 className="text-md text-gray-600 line-clamp-1">Studio: {films.studio}</h3>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  );
}
