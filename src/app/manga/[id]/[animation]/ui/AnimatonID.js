"use client";
import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Navbar from "@/app/accueil/ui/NavBar";
import Footer from "@/app/ui/Footer";
import { getMangaAnimeID } from "../../../../../../_actions/postAction";

export default function PageAnimeID({ props, animation }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const mangaData = await getMangaAnimeID(props, animation);
        setData(mangaData);
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
    return <div>Loading...</div>;
  }

  if (animation === "episodes") {
    const {
      backNav,
      classNav,
      anime_imageTop,
      imageSee,
      anime_titre,
      anime_imageCarousel,
    } = data.animation[1];
    return (
      <div className={backNav}>
        <Navbar className={classNav} />
        <div className="h-4/5 justify-center m-auto flex">
          <img src={anime_imageTop} className="w-9/12 h-5/6" />
        </div>
        <h2 className={anime_titre}>Saisons disponibles</h2>
        <section className="w-4/5 lg:w-full grid grid-cols-2 gap-1 m-auto items-center xs:grid xs:grid-cols-1 md:grid md:grid-cols-3 md:gap-4 md:items-center xl:grid xl:grid-cols-4">
          {imageSee?.map((select, i) => (
            <div
              className="mx-1 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8"
              key={i}
            >
              <Link href={select.href}>
                <img src={select.images} alt={select.href} className="w-[70%] rounded-2xl" />
              </Link>
            </div>
          ))}
        </section>

        <div className="my-px">
          <h2 className={anime_titre}>A voir également</h2>
          <Carousel responsive={responsive}>
            {anime_imageCarousel?.map((select, indice) => (
              <div
                className="mx-2 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8 relative"
                key={indice}
              >
                <Link href={select.anime_href}>
                  <img
                    src={select.anime_image} alt={select.anime_name}
                    className="w-full rounded-2xl hover:opacity-100"
                  />
                  <p className="absolute bottom-2 text-sm sm:bottom-5 lg:bottom-8 bg-black text-white bg-opacity-50 transition ease-in duration-500 opacity-0 w-full p-5 text-center hover:opacity-100 rounded-2xl">
                    {select.anime_name}
                  </p>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>

        <Footer />
      </div>
    );
  }else if(animation === "scans"){
    const {
      backNav,
      classNav,
      anime_imageTop,
      imageSee,
      anime_titre,
      anime_imageCarousel,
    } = data.animation[2];

    console.log(imageSee);

    return (
      <div className={backNav}>
        <Navbar className={classNav} />
        <div className="h-4/5 justify-center m-auto flex">
          <img src={anime_imageTop} className="w-9/12 h-5/6" />
        </div>
        <h2 className={anime_titre}>Lecture en lignes</h2>
        <section className="w-4/5 lg:w-full grid grid-cols-2 gap-1 m-auto items-center xs:grid xs:grid-cols-1 md:grid md:grid-cols-3 md:gap-4 md:items-center xl:grid xl:grid-cols-4">
          {imageSee?.map((select, i) => (
            <div
              className="mx-1 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8"
              key={i}
            >
              <Link href={select.href}>
                <img src={select.images} alt={select.href} className="w-[70%] rounded-2xl" />
              </Link>
            </div>
          ))}
        </section>

        <div className="my-px">
          <h2 className={anime_titre}>A voir également</h2>
          <Carousel responsive={responsive}>
            {anime_imageCarousel?.map((select, indice) => (
              <div
                className="mx-2 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8 relative"
                key={indice}
              >
                <Link href={select.anime_href}>
                  <img
                    src={select.anime_image} alt={select.anime_name}
                    className="w-full rounded-2xl hover:opacity-100"
                  />
                  <p className="absolute bottom-2 text-sm sm:bottom-5 lg:bottom-8 bg-black text-white bg-opacity-50 transition ease-in duration-500 opacity-0 w-full p-5 text-center hover:opacity-100 rounded-2xl">
                    {select.anime_name}
                  </p>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>

        <Footer />
      </div>
    );
  }


  const {
    backNav,
    classNav,
    anime_imageTop,
    imageSee,
    anime_titre,
    anime_imageCarousel,
  } = data.animation[0];

  return (
    <div className={backNav}>
      <Navbar className={classNav} />
      <div className="h-4/5 justify-center m-auto flex">
        <img src={anime_imageTop} className="w-9/12 h-5/6" />
      </div>
      <h2 className={anime_titre}>Films disponibles</h2>
      <section className="w-4/5 lg:w-full grid grid-cols-2 gap-1 m-auto items-center xs:grid xs:grid-cols-1 md:grid md:grid-cols-3 md:gap-4 md:items-center xl:grid xl:grid-cols-4">
        {imageSee?.map((select, i) => (
          <div className="mx-1 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8" key={i}>
            <Link href={select.href}>
              <img src={select.images} alt={select.href} className="w-[70%] rounded-2xl" />
            </Link>
          </div>
        ))}
      </section>

      <div className="my-px">
        <h2 className={anime_titre}>A voir également</h2>
        <Carousel responsive={responsive}>
          {anime_imageCarousel?.map((select, indice) => (
            <div
              className="mx-2 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8 relative"
              key={indice}
            >
              <Link href={select.anime_href}>
                <img
                  src={select.anime_image} alt={select.anime_name}
                  className="w-full rounded-2xl hover:opacity-100"
                />
                <p className="absolute bottom-2 text-sm sm:bottom-5 lg:bottom-8 bg-black text-white bg-opacity-50 transition ease-in duration-500 opacity-0 w-full p-5 text-center hover:opacity-100 rounded-2xl">
                  {select.anime_name}
                </p>
              </Link>
            </div>
          ))}
        </Carousel>
      </div>

      <Footer />
    </div>
  );
}
