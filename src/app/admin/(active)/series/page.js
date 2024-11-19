'use client'
import React, { useEffect, useState } from "react";
import { getSeriesAll } from "../../../../../_actions/postAction";
import ReactLoading from "react-loading";
import Link from "next/link";

export default function PageSeriesAdmin() {
  const [dataSerie, setDataSerie] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(()=> {
    const fetchData = async () => {
      try{
        const serieData = await getSeriesAll()
        setDataSerie(serieData)
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
      <h1 className="text-4xl text-indigo-600 mb-10">Séries</h1>
      <div>
        <h2 className="text-[26px] text-indigo-600">Liste des séries : </h2>
        <div className="w-4/5 lg:w-full grid grid-cols-2 gap-1 m-auto items-center xs:grid-cols-1 xs:m-auto md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:gap-4 md:m-auto md:items-center">
        {dataSerie.map((serie)=> {
          return(
            <div key={serie.id} className=" bg-slate-50 rounded-lg shadow-lg overflow-hidden">
              <div className="w-full">
              <Link href={`/manga/`+serie.manga+`/`+serie.type+`/`+serie.url}>
                <img src={serie.image} className="object-cover"/>
                </Link>
              </div>
              <div className="p-6 justify-center">
                <h2 className="text-lg font-bold text-gray-900 line-clamp-2 lg:h-[60px]">{serie.name}</h2>
                <h3 className="text-md text-gray-600 line-clamp-1">{serie.auteur}</h3>
                <h3 className="text-md text-gray-600 line-clamp-1">Studio: {serie.studio}</h3>
              </div>
            </div>
          )
        })}
        </div>
      </div>
    </div>
  );
}
