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
      image: "/assets/TopScreen/bleach.webp",
      name: "Bleach Thousand-Year Blood War - Nouvelles Saisons Disponibles",
      url: "/manga/bleach",
    },
    {
      image: "/assets/TopScreen/dandadan.webp",
      name: "Dandadan - Nouveaux Episodes Disponibles",
      url: "/manga/dandadan",
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
      image: "/assets/TopScreen/dbdaima.webp",
      name: "Dragon Ball Daima - Nouveaux Episodes Bientôt Disponibles",
      url: "/manga/dragon-ball-daima",
    },
    {
      image: "/assets/TopScreen/danmachi.webp",
      name: "DanMachi: La Légende des Familias - Nouvelles Saisons Disponibles",
      url: "/manga/danmachi",
    },
    {
      image: "/assets/TopScreen/bluelock.webp",
      name: "Blue Lock - Nouvelles Saisons Disponibles",
      url: "/manga/blue-lock",
    },
    {
      image: "/assets/TopScreen/rezero.webp",
      name: "Re-Zero - Nouvelles Saisons Disponibles",
      url: "/manga/re-zero",
    },
    {
      image: "/assets/TopScreen/ranma.webp",
      name: "Ranma 1/2 - Nouvelles Versions Disponibles",
      url: "/manga/ranma-1-2",
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
