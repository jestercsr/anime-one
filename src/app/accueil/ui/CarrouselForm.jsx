"use client";

import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function CarrouselForm() {
  const dataImage = [
    {
      id: 1,
      image: "assets/TopScreen/naruto.png",
      name: "Naruto",
      url: "/naruto",
    },
    {
      id: 2,
      image: "assets/TopScreen/one_piece.png",
      name: "One Piece",
      url: "/one-piece",
    },
    {
      id: 3,
      image: "assets/TopScreen/db.png",
      name: "Dragon Ball",
      url: "/dragon-ball",
    },
    {
      id: 4,
      image: "assets/TopScreen/snk.png",
      name: "Shingeki no Kyojin",
      url: "/shingeki-no-kyojin",
    },
    {
      id: 5,
      image: "assets/TopScreen/deathnote.png",
      name: "Death Note",
      url: "/death-note",
    },
    {
      id: 6,
      image: "assets/TopScreen/jjk.png",
      name: "Jujustu Kaisen",
      url: "/jujustu-kaisen",
    },
    {
      id: 7,
      image: "assets/TopScreen/mha.png",
      name: "My Hero Academia",
      url: "/my-hero-academia",
    },
    {
      id: 8,
      image: "assets/TopScreen/bleach.png",
      name: "Bleach",
      url: "/bleach",
    },
    {
      id: 9,
      image: "assets/TopScreen/shadow.png",
      name: "The Eminence In Shadow",
      url: "/the-eminence-in-shadow",
    },
    {
      id: 10,
      image: "assets/TopScreen/hunter.png",
      name: "Hunter x Hunter",
      url: "/hunter-x-hunter",
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
                <img src={imgScreen.image} />

                <p className="legend">
                  <a href={imgScreen.url}>{imgScreen.name}</a>
                </p>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}