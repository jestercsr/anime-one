"use client";
import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider() {
  const top = [
    {
      image: "/assets/TopScreen/Boutiques/onePiece.webp",
      titre: "Découvrer tous les produits de One Piece",
      select: "ACHETER MAINTENANT",
      href: "/stores/collections/one-piece",
    },
    {
      image: "/assets/TopScreen/Boutiques/naruto.webp",
      titre: "Découvrer tous les produits de Naruto",
      select: "ACHETER MAINTENANT",
      href: "/stores/collections/naruto",
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
            <div key={i} className=" py-4">
              <div className="bg-sky-500 py-6 mr-2 flex h-[550px]">
                <img src={item.image} className="w-20 py-5" />
                <div className="flex flex-col items-center justify-around ">
                  <h2 className="text-center relative text-3xl font-semibold text-slate-50">
                    {item.titre}
                  </h2>
                  <Link href={item.href}>
                    <button className="p-4 bg-red-500 text-slate-50 hover:bg-red-800">
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
