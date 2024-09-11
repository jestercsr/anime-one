"use client";

import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
    <>
      <div>
        <Carousel swipeable={true} responsive={responsive} removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]} ssr={true} infinite={true} autoPlay={true} autoPlaySpeed={7000}>
          {dataImage.map((imgScreen, index) => {
            return (
              <div key={index}>
                <Link href={imgScreen.url}>
                <img src={imgScreen.image} alt={imgScreen.name} className="w-full object-cover lg:h-[750px] relative"/>

                <p className="text-slate-50 z-10 absolute bottom-2 md:bottom-5 lg:bottom-8 bg-neutral-950/50 transition ease-in duration-500 opacity-50 w-full p-2 lg:p-5 text-center hover:opacity-100 rounded-2xl">
                  {imgScreen.name}
                </p>
                </Link>
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}
