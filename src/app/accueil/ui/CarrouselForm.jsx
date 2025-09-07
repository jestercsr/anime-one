"use client";

import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function CarrouselForm() {
  const dataImage = [
    {
      image: "/assets/TopScreen/onePiece3.webp",
      name: "One Piece - Arc Egghead Partie 2 Disponible",
      url: "/manga/one-piece",
    },
    {
      image: "/assets/TopScreen/dandadan4.webp",
      name: "DanDaDan - Nouvelles Saisons Disponibles",
      url: "/manga/dandadan",
    },
    {
      image: "/assets/TopScreen/kaiju.webp",
      name: "Kaiju no 8 - Nouvelles Saisons Disponibles",
      url: "/manga/kaiju-no-8",
    },
    {
      image: "/assets/TopScreen/gachiakuta.webp",
      name: "Gachiakuta - Nouveaux Episodes Disponibles",
      url: "/manga/gachiakuta",
    },
    {
      image: "/assets/TopScreen/clevatess.webp",
      name: "Clevatess - Nouveaux Episodes Disponibles",
      url: "/manga/clevatess",
    },
    {
      image: "/assets/TopScreen/sakamoto3.webp",
      name: "Sakamoto Days - Nouvelles Saisons Disponibles",
      url: "/manga/sakamoto-days",
    },
    {
      image: "/assets/TopScreen/stone3.webp",
      name: "Dr. Stone - Dernière Saison Disponible",
      url: "/manga/dr-stone",
    },
    {
      image: "/assets/TopScreen/shieldhero.webp",
      name: "The Rising Of The Shield Hero - Nouvelles Saisons Disponibles",
      url: "/manga/the-rising-of-the-shield-hero",
    },
    {
      image: "/assets/TopScreen/callNight.webp",
      name: "Call of the Night - Nouvelles Saisons Disponibles",
      url: "/manga/call-of-the-night",
    },
    {
      image: "/assets/TopScreen/7prince.webp",
      name: "I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability - Nouvelles Saisons Disponibles",
      url: "/manga/le-7-eme-prince",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 1,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 1,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 1,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30
    },
  };
  const dataMobile = [
    {
      image: "/assets/TopScreen/onePiece4.webp",
      name: "One Piece - Arc Egghead Partie 2 Disponible",
      url: "/manga/one-piece",
    },
    {
      image: "/assets/TopScreen/dandadan3.webp",
      name: "DanDaDan - Nouvelles Saisons Disponibles",
      url: "/manga/dandadan",
    },
    {
      image: "/assets/TopScreen/kaiju2.webp",
      name: "Kaiju no 8 - Nouvelles Saisons Disponibles",
      url: "/manga/kaiju-no-8",
    },
    {
      image: "/assets/TopScreen/gachiakuta2.webp",
      name: "Gachiakuta - Nouveaux Episodes Disponibles",
      url: "/manga/gachiakuta",
    },
    {
      image: "/assets/TopScreen/clevatess2.webp",
      name: "Clevatess - Nouveaux Episodes Disponibles",
      url: "/manga/clevatess",
    },
    {
      image: "/assets/TopScreen/sakamoto4.webp",
      name: "Sakamoto Days - Nouvelles Saisons Disponibles",
      url: "/manga/sakamoto-days",
    },
    {
      image: "/assets/TopScreen/stone2.webp",
      name: "Dr. Stone - Dernière Saison Disponible",
      url: "/manga/dr-stone",
    },
    {
      image: "/assets/TopScreen/shieldhero2.webp",
      name: "The Rising Of The Shield Hero - Nouvelles Saisons Disponibles",
      url: "/manga/the-rising-of-the-shield-hero",
    },
    {
      image: "/assets/TopScreen/callNight2.webp",
      name: "Call of the Night - Nouvelles Saisons Disponibles",
      url: "/manga/call-of-the-night",
    },
    {
      image: "/assets/TopScreen/7prince2.webp",
      name: "I Was Reincarnated as the 7th Prince so I Can Take My Time Perfecting My Magical Ability - Nouvelles Saisons Disponibles",
      url: "/manga/le-7-eme-prince",
    },
  ]
  return (
    <>
      <div>
        <Carousel swipeable={true} responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]} ssr={true} infinite={true} autoPlay={true} autoPlaySpeed={7000}>
          {dataImage.map((imgScreen, index) => {
            return (
              <div key={index} className="hidden md:block">
                <Link href={imgScreen.url}>
                <img src={imgScreen.image} alt={imgScreen.name} className="w-full object-cover lg:h-[750px] relative"/>

                <p className="text-slate-50 z-10 absolute bottom-2 md:bottom-5 lg:bottom-8 bg-neutral-950/50 transition ease-in duration-500 opacity-50 w-full p-2 lg:p-5 text-center hover:opacity-100 rounded-2xl">
                  {imgScreen.name}
                </p>
                </Link>
              </div>
            );
          })}</Carousel><Carousel swipeable={true} centerMode={true} responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]} ssr={true} infinite={true} autoPlay={true} autoPlaySpeed={7000}>
          {dataMobile.map((imaScreen, i) => {
            return (
              <div key={i} className="md:hidden">
                <Link href={imaScreen.url}>
                <img src={imaScreen.image} alt={imaScreen.name} className="w-[350px] h-[300px] p-3 relative"/>

                <p className="text-slate-50 text-sm z-10 absolute bottom-2 bg-neutral-950/50 transition ease-in duration-500 opacity-50 w-full p-1 text-center hover:opacity-100 rounded-2xl">
                  {imaScreen.name}
                </p>
                </Link>
              </div>
            )
          })}
        </Carousel>
      </div>
    </>
  );
}
