"use client";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div>
      <Carousel swipeable={true} responsive={responsive} removeArrowOnDeviceType={["superLargeDesktop","desktop","tablet", "mobile"]} ssr={true} infinite={true} autoPlay={true} autoPlaySpeed={6000}
      >
        {top.map((item, i) => {
          return (
            <div key={i} className="h-[400px] mb-5 md:mb-auto md:h-auto pb-4">
              <div className="bg-sky-700 py-6 h-[390px] md:flex md:h-[450px] lg:h-[600px] grid grid-rows-2 md:grid-rows-0 md:grid-cols-2">
                <img
                  src={item.image}
                  className="object-cover w-[100%] h-[300px] md:w-[70%] md:h-[400px] lg:w-[80%] lg:h-auto"
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
