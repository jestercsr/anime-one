"use client";

import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export function CarrouselForm() {
  const dataImage = [
    {
      image: "/assets/TopScreen/leveling.webp",
      name: "Solo Leveling - Nouvelles Saisons Disponibles",
      url: "/manga/solo-leveling",
    },
    {
      image: "/assets/TopScreen/stone.webp",
      name: "Dr Stone - Nouvelles Saisons Disponibles",
      url: "/manga/dr-stone",
    },
    {
      image: "/assets/TopScreen/apothicaire.webp",
      name: "Les Carnets de l'Apothicaire - Nouvelles Saisons Disponibles",
      url: "/manga/les-carnets-de-l-apothicaire",
    },
    {
      image: "/assets/TopScreen/dbdaima.webp",
      name: "Dragon Ball Daima - Nouveaux Episodes Disponibles",
      url: "/manga/dragon-ball-daima",
    },
    {
      image: "/assets/TopScreen/exorcist.webp",
      name: "Blue Exorcist - Nouvelles Saisons Disponibles",
      url: "/manga/blue-exorcist",
    },
    {
      image: "/assets/TopScreen/memory.webp",
      name: "Unnamed Memory - Nouvelles Saisons Disponibles",
      url: "/manga/unnamed-memory",
    },
    {
      image: "/assets/TopScreen/happymarriage.webp",
      name: "My Happy Marriage - Nouvelles Saisons Disponibles",
      url: "/manga/my-happy-marriage",
    },
    {
      image: "/assets/TopScreen/ishura.webp",
      name: "Ishura - Nouvelles Saisons Disponibles",
      url: "/manga/ishura",
    },
    {
      image: "/assets/TopScreen/shangri.webp",
      name: "Shangri-La Frontier - Nouvelles Saisons Disponibles",
      url: "/manga/shangri-la-frontier",
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
      image: "/assets/TopScreen/leveling2.webp",
      name: "Solo Leveling - Nouvelles Saisons Disponibles",
      url: "/manga/solo-leveling",
    },
    {
      image: "/assets/TopScreen/stone2.webp",
      name: "Dr Stone - Nouvelles Saisons Disponibles",
      url: "/manga/dr-stone",
    },
    {
      image: "/assets/TopScreen/apothicaire2.webp",
      name: "Les Carnets de l'Apothicaire - Nouvelles Saisons Disponibles",
      url: "/manga/les-carnets-de-l-apothicaire",
    },
    {
      image: "/assets/TopScreen/daima.webp",
      name: "Dragon Ball Daima - Nouveaux Episodes Disponibles",
      url: "/manga/dragon-ball-daima",
    },
    {
      image: "/assets/TopScreen/exorcist2.webp",
      name: "Blue Exorcist - Nouvelles Saisons Disponibles",
      url: "/manga/blue-exorcist",
    },
    {
      image: "/assets/TopScreen/memory2.webp",
      name: "Unnamed Memory - Nouvelles Saisons Disponibles",
      url: "/manga/unnamed-memory",
    },
    {
      image: "/assets/TopScreen/happymarriage2.webp",
      name: "My Happy Marriage - Nouvelles Saisons Disponibles",
      url: "/manga/my-happy-marriage",
    },
    {
      image: "/assets/TopScreen/ishura2.webp",
      name: "Ishura - Nouvelles Saisons Disponibles",
      url: "/manga/ishura",
    },
    {
      image: "/assets/TopScreen/shangriLaFrontier.webp",
      name: "Shangri-La Frontier - Nouvelles Saisons Disponibles",
      url: "/manga/shangri-la-frontier",
    },
    {
      image: "/assets/TopScreen/naruto2.webp",
      name: "Naruto - Tous les Episodes Disponibles",
      url: "/manga/naruto",
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
