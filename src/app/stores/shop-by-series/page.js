'use client'
import React, { useEffect, useState } from 'react'
import E_Navbar from '../ui/E_Navbar'
import { getListeAll } from '../../../../_actions/postAction';
import ReactLoading from 'react-loading';
import Link from 'next/link';
import E_Footer from '../ui/E_Footer';

export default function PageStoresSeries() {
  const [data, setData ] = useState([])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listeData = await fetch(`/api/collection`);
        const res = await listeData.json()
        const groupe = groupByFirstLetter(res.mangaName)
        setData(groupe);
        console.log(groupe);
        setLoading(false);
      } catch (error) {
        console.error("Erreur pour recuperer la liste des mangas:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const groupByFirstLetter = (data) => {
    return data.reduce((acc, manga) => {
      let firstLetter = manga.name[0].toUpperCase();
      if (!isNaN(firstLetter)) {
        firstLetter = '#';
      }
      
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push({ name: manga.name, url: manga.url });
      return acc;
    }, {});
  };

  if (loading) {
    return <div className="items-center"><ReactLoading type="bubbles" color="#0c4a6e" height={'3%'} width={'3%'} /></div>;
  }

  return (
    <>
      <E_Navbar />
      {Object.keys(data).map((letter) => (
          <div key={letter} className="px-8 mb-3">
            <h2 className="text-orange-500 font-bold text-center text-2xl mb-1">{letter}</h2>
            <div className='grid grid-cols-2 gap-1 m-auto justify-items-center items-center xs:grid xs:grid-cols-1 xs:m-auto md:grid-cols-4 md:gap-4 md:m-auto xl:grid-cols-5'>
            {data[letter].map((manga, i) => {
              return (
                <div key={i}>
                  <Link href={`/stores/collections/${manga.url}`}>
                    <button className='border border-sky-900 p-2 px-6 w-full h-[67px] bg-slate-100 text-sm hover:bg-sky-900 hover:text-slate-50'>{manga.name}</button>
                  </Link>
                </div>
              )
            })}
            </div>
          </div>
      ))}
      <E_Footer />
    </>
  )
}
