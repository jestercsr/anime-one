"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "@/app/ui/Footer";
import { getListeSeries } from "../../../../_actions/postAction";
import Navbar from "@/app/accueil/ui/NavBar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ListeSeries() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listeData = await getListeSeries();
        setData(listeData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching manga data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const dataImage = [
    {
      image: "/assets/TopScreen/Episodes/one_piece.webp",
      name: "One Piece",
      url: "/manga/one-piece",
    },
    {
      image: "/assets/TopScreen/Episodes/naruto.webp",
      name: "Naruto",
      url: "/manga/naruto",
    },
    {
      image: "/assets/TopScreen/Episodes/bleach.webp",
      name: "Bleach",
      url: "/manga/bleach",
    },
    {
      image: "/assets/TopScreen/Episodes/mha.webp",
      name: "My Hero Academia",
      url: "/manga/my-hero-academia",
    },
    {
      image: "/assets/TopScreen/Episodes/db.webp",
      name: "Dragon Ball Z",
      url: "/manga/dragon-ball-z",
    },
    {
      image: "/assets/TopScreen/Episodes/jjk.webp",
      name: "Jujustu Kaisen",
      url: "/manga/jujustu-kaisen",
    },
    {
      image: "/assets/TopScreen/Episodes/hunter.webp",
      name: "Hunter x Hunter",
      url: "/manga/hunter-x-hunter",
    },
    {
      image: "/assets/TopScreen/Episodes/deathnote.webp",
      name: "Death Note",
      url: "/manga/death-note",
    },
    {
      image: "/assets/TopScreen/Episodes/snk.webp",
      name: "L'Attaque des Titans",
      url: "/manga/shingeki-no-kyojin",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-skyer-500 to-skyer-950">
      <Navbar className="bg-teal-900 text-white" liste="bg-teal-900 text-white absolute left-0 w-full divide-y-2 divide-slate-50 border-gray-300 mt-1 z-10 list-none" listing="cursor-pointer p-2 hover:bg-gray-200 hover:text-teal-900 border-t-0" />

      <div>
        <Carousel
          autoPlay
          infiniteLoop
          interval={5000}
          showThumbs={false}
          showStatus={false}
          centerMode
          centerSlidePercentage={70}
        >
          {dataImage.map((imgScreen, index) => {
            return (
              <div key={index}>
                <img src={imgScreen.image} alt={imgScreen.name} />

                <p className="legend">
                  <Link href={imgScreen.url}>{imgScreen.name}</Link>
                </p>
              </div>
            );
          })}
        </Carousel>
      </div>

      <section className="w-4/5 lg:w-full grid grid-cols-2 gap-1 m-auto items-center xs:grid xs:grid-cols-1 xs:m-auto md:grid md:grid-cols-3 md:gap-4 md:m-auto md:items-center xl:grid xl:grid-cols-5">
        {data.map((select, i) => {
          return (
            <div
              className="mx-1 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8"
              key={i}
            >
              <Link href={`/manga/${select.url}`}>
                <img
                  src={select.image}
                  className="w-full rounded-2xl hover:opacity-100"
                />
              </Link>
            </div>
          );
        })}
      </section>

      <Footer />
    </div>
  );
}

export default ListeSeries;
