"use client";

import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function CarrouselForm() {
  const dataImage = [
    {
      id: 1,
      image: "/assets/TopScreen/naruto.webp",
      name: "Naruto",
      url: "/manga/naruto",
    },
    {
      id: 2,
      image: "/assets/TopScreen/one_piece.webp",
      name: "One Piece",
      url: "/manga/one-piece",
    },
    {
      id: 3,
      image: "/assets/TopScreen/db.webp",
      name: "Dragon Ball",
      url: "/manga/dragon-ball",
    },
    {
      id: 4,
      image: "/assets/TopScreen/snk.webp",
      name: "Shingeki no Kyojin",
      url: "/manga/shingeki-no-kyojin",
    },
    {
      id: 5,
      image: "/assets/TopScreen/deathnote.webp",
      name: "Death Note",
      url: "/manga/death-note",
    },
    {
      id: 6,
      image: "/assets/TopScreen/jjk.webp",
      name: "Jujustu Kaisen",
      url: "/manga/jujustu-kaisen",
    },
    {
      id: 7,
      image: "/assets/TopScreen/mha.webp",
      name: "My Hero Academia",
      url: "/manga/my-hero-academia",
    },
    {
      id: 8,
      image: "/assets/TopScreen/bleach.webp",
      name: "Bleach",
      url: "/manga/bleach",
    },
    {
      id: 9,
      image: "/assets/TopScreen/shadow.webp",
      name: "The Eminence In Shadow",
      url: "/manga/the-eminence-in-shadow",
    },
    {
      id: 10,
      image: "/assets/TopScreen/hunter.webp",
      name: "Hunter x Hunter",
      url: "/manga/hunter-x-hunter",
    },
  ];

  return (
    <>
      <div>
        <Carousel
          autoPlay
          infiniteLoop
          interval={4000}
          showThumbs={false}
          showStatus={false}
          centerMode
          centerSlidePercentage={70}
        >
          {dataImage.map((imgScreen) => {
            return (
              <div key={imgScreen.id}>
                <img src={imgScreen.image} alt={imgScreen.name}/>

                <p className="legend">
                  <Link href={imgScreen.url}>{imgScreen.name}</Link>
                </p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
