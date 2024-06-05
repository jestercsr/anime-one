"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Navbar from "@/app/accueil/ui/NavBar";
import Footer from "@/app/ui/Footer";
import MainComposent from "../ui/MainComposent";
import { Suspense, useEffect, useState } from "react";
import { useParams } from "next/navigation";

function PageFilms() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const props = useParams();
  const { id, anime } = props;
  console.log(id);

  useEffect(() => {
    fetch(`http://localhost:4000/mangaName/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.animation);
        setIsLoading(false);
        let {
          animeId,
          anime_imageTop,
          classNav,
          backNav,
          imageSee: {images, href},
          anime_titre,
          anime_imageCarousel: {anime_image, anime_name, anime_href},
        } = data;
        console.log(data.animation);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>Aucun manga dans la base de donées</p>;

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
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1,
    },
  };

  if (anime === data.animeId) {
    return (
      <div>
        <Navbar className={classNav} />
        <MainComposent className={backNav}>
          <div className="h-4/5 justify-center m-auto flex">
            <img src={anime_imageTop} className="w-9/12 h-svh" />
          </div>
          <section className="w-4/5 lg:w-full grid grid-cols-2 gap-1 m-auto items-center xs:grid xs:grid-cols-1 xs:m-auto md:grid md:grid-cols-3 md:gap-4 md:m-auto md:items-center xl:grid xl:grid-cols-4">
            {imageSee.map((select, i) => {
              return (
                <div
                  className="mx-1 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8"
                  key={i}
                >
                  <Link href={select.href}>
                    <img src={select.images} className="w-full rounded-2xl" />
                  </Link>
                </div>
              );
            })}
          </section>

          <div className="my-px">
            <h2 className={anime_titre}>A voir également</h2>
            <Carousel responsive={responsive}>
              {anime_imageCarousel.map((select, indice) => {
                return (
                  <div
                    className="mx-2 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8 relative"
                    key={indice}
                  >
                    <Link href={`/${select.anime_href}`}>
                      <img
                        src={select.anime_image}
                        className="w-full rounded-2xl hover:opacity-100"
                      />
                      <p className="absolute bottom-2 text-sm sm:bottom-5 lg:bottom-8 bg-black text-white bg-opacity-50 transition ease-in duration-500 opacity-0 w-full p-5 text-center hover:opacity-100 rounded-2xl">
                        {select.anime_name}
                      </p>
                    </Link>
                  </div>
                );
              })}
            </Carousel>
          </div>

          <Footer />
        </MainComposent>
      </div>
    );
  }
  return (
    <>
      <div>
        <p>Erreur</p>
      </div>
    </>
  );
}
export default function PageManga({ params }) {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <PageFilms id={params.id} />
      </Suspense>
    </>
  );
}
