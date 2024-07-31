"use client";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider() {
  const top = [
    {
      image: "/assets/boutiques/onePiece.webp",
      titre: "Découvrer tous les produits de One Piece",
      select: "ACHETER MAINTENANT",
      href: "/stores/collections/one-piece",
    },
    {
      image: "/assets/boutiques/naruto.webp",
      titre: "Découvrer tous les produits de Naruto",
      select: "ACHETER MAINTENANT",
      href: "/stores/collections/naruto",
    },
    {
      image: "/assets/boutiques/dragonBall.webp",
      titre: "Découvrer tous les produits de Dragon Ball",
      select: "ACHETER MAINTENANT",
      href: "/stores/collections/dragon-ball",
    },
  ];
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        interval={6000}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        {top.map((item, i) => {
          return (
            <div key={i} className="h-[400px] mb-5 md:mb-auto md:h-auto py-4">
              <div className="bg-sky-500 py-6 h-[390px] md:mr-2 md:flex md:h-[450px] lg:h-[600px] grid grid-rows-2 md:grid-rows-0">
                <img
                  src={item.image}
                  className="w-[30%] h-[300px] md:w-[50%] md:h-[400px] lg:w-20 lg:h-[550px] lg:py-5"
                />
                <div className="flex flex-col items-center mt-32 md:mt-5 md:justify-around ">
                  <h2 className="text-center relative text-sm md: lg:text-3xl font-semibold text-slate-50">
                    {item.titre}
                  </h2>
                  <Link href={item.href}>
                    <button className="p-[4px] text-xs md:p-2 lg:p-4 bg-red-500 text-slate-50 hover:bg-red-800">
                      {item.select}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
