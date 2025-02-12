'use client'
import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Navbar from "@/app/accueil/ui/NavBar";
import Footer from "@/app/ui/Footer";
import ReactLoading from 'react-loading';

function MangaListe({ props }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/mangas/${props}`);
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const mangaData = await res.json();
        setData(mangaData.mangaName);
        setLoading(false);
      } catch (error) {
        console.error("Erreur d'import de la base:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1,
    },
  };

  if (loading) {
    return <div><ReactLoading type="bubbles" color="#ffffff" height={'3%'} width={'3%'} /></div>;
  }

  return (
    <>
      {data? (
        <div className={data.back}>
          <Navbar className={data?.navClass} liste={data?.search} listing={data?.listeSearch}/>
        <div className="h-4/5 justify-center m-auto flex">
          <img src={data?.imageTop} className="w-full md:w-9/12 h-5/6" />
        </div>
        <section className="w-4/5 lg:w-full grid grid-cols-2 gap-1 m-auto items-center xs:grid xs:grid-cols-1 xs:m-auto md:grid md:grid-cols-3 md:gap-4 md:m-auto md:items-center xl:grid xl:grid-cols-4">
          {data?.imageShow?.map((select, i) => (
            <div
              className="mx-1 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8"
              key={i}
            >
              <Link href={select.url}>
                <img src={select.img} alt={select.url} className="w-full rounded-2xl" />
              </Link>
            </div>
          ))}
        </section>

        <div className="my-px">
          <h2 className={data?.titre}>A voir également</h2>
          <Carousel swipeable={true} responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}>
            {data?.imageCarousel?.map((select, indice) => (
              <div
                className="text-[9px] md:text-xs lg:text-md mx-2 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8 relative"
                key={indice}
              >
                <Link href={select.url}>
                  <img
                    src={select.image} alt={select.name}
                    className="w-full rounded-2xl hover:opacity-100"
                  />
                  <p className="text-slate-50 absolute bottom-2 md:bottom-5 lg:bottom-8 bg-black bg-opacity-50 transition ease-in duration-500 opacity-0 w-full p-2 lg:p-5 text-center hover:opacity-100 rounded-2xl">
                    {select.name}
                  </p>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>

        <Footer />
        </div>
      ): (
        <div>
          <Navbar className="bg-gradient-to-t from-yellow-500 to-orange-500 text-sky-900" liste="bg-gradient-to-t from-orange-500 to-yellow-500 text-sky-900 absolute left-0 w-full divide-y-2 divide-slate-50 border-gray-300 mt-1 z-10 list-none" listing="cursor-pointer p-2 hover:bg-gray-200 hover:text-orange-500 border-t-0"/>
          <div className="justify-center m-auto flex mb-20">
            <img src="/assets/Soon.webp" className="w-full md:w-[50%]" />
          </div>
        </div>
      )} 
    </>
  );
}

export default MangaListe;