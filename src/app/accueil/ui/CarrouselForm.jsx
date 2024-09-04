"use client";

import Link from "next/link";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export function CarrouselForm() {
  const dataImage = [
    {
      image: "/assets/TopScreen/one_piece2.webp",
      name: "One Piece - Arc Egghead Disponible",
      url: "/manga/one-piece",
    },
    {
      image: "/assets/TopScreen/fairy_tail.webp",
      name: "Fairy Tail 100 Years Quest - Nouveaux Episodes Disponibles",
      url: "/manga/fairy-tail-100-years-quest",
    },
    {
      image: "/assets/TopScreen/mha2.webp",
      name: "My Hero Academia - Nouvelles Saisons Disponibles",
      url: "/manga/my-hero-academia",
    },
    {
      image: "/assets/TopScreen/jjk.webp",
      name: "Jujustu Kaisen - Nouveaux Chapitres Disponibles",
      url: "/manga/jujustu-kaisen",
    },
    {
      image: "/assets/TopScreen/slime.webp",
      name: "Moi, Quand je me Réincarne en Slime - Nouvelles Saisons Disponibles",
      url: "/manga/moi-quand-je-me-reincarne-en-slime",
    },
    {
      image: "/assets/TopScreen/crusade.webp",
      name: "Our Last Crusade or the Rise of a New World - Nouvelles Saisons Disponibles",
      url: "/manga/our-last-crusade-or-the-rise-of-a-new-world",
    },
    {
      image: "/assets/TopScreen/magician_demon_army.webp",
      name: "The Strongest Magician in the Demon's Lord Army was a Human - Nouveaux Episodes Disponibles",
      url: "/manga/the-strongest-magician-in-the-demon-lord-army-was-a-human",
    },
    {
      image: "/assets/TopScreen/suicide_isekai.webp",
      name: "Suicide Squad ISEKAI - Tous les Episodes Disponibles",
      url: "/manga/suicide-squad-isekai",
    },
    {
      image: "/assets/TopScreen/oshi_no_ko.webp",
      name: "Oshi no ko - Nouvelles Saisons Disponibles",
      url: "/manga/oshi-no-ko",
    },
    {
      image: "/assets/TopScreen/sakamoto_days.webp",
      name: "Sakamoto Days - Nouveaux Chapitres Disponibles",
      url: "/manga/sakamoto-days",
    },
    {
      image: "/assets/TopScreen/yozakura.webp",
      name: "Mission: Yozakura Family - Nouveaux Episodes Disponibles",
      url: "/manga/mission-yozakura-family",
    },
    {
      image: "/assets/TopScreen/naruto.webp",
      name: "Naruto - Tous les Episodes Disponibles",
      url: "/manga/naruto",
    },
  ];

  return (
    <>
      <div>
        <Carousel
          autoPlay
          infiniteLoop
          interval={6000}
          showThumbs={false}
          showStatus={false}
          centerMode  
          centerSlidePercentage={70}
        >
          {dataImage.map((imgScreen, index) => {
            return (
              <div key={index}>
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
