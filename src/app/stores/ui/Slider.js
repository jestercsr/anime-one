'use client'
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Slider() {
  const top = [
    {
      image: "/assets/TopScreen/Boutiques/onePiece.png",
      titre: "Découvrer tous les produits de One Piece",
      select: "ACHETER MAINTENANT",
    },
    {
        image: "/assets/TopScreen/Boutiques/onePiece.png",
        titre: "Découvrer tous les produits de One Piece",
        select: "ACHETER MAINTENANT",
      },
  ];
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        interval={4000}
        showThumbs={false}
        showStatus={false}
      >
        {top.map((item, i) => {
          return (
            <div key={i} className="py-8">
              <div className="border border-2 border-red-600 flex ">
                <img src={item.image} className="w-20 h-96"/>
                <h2 className="text-center">{item.titre}</h2>
                <button>{item.select}</button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
