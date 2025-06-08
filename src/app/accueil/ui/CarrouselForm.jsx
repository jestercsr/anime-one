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
      image: "/assets/TopScreen/fireForce.webp",
      name: "Fire Force - Nouvelles Saisons Disponibles",
      url: "/manga/fire-force",
    },
    {
      image: "/assets/TopScreen/windBreaker.webp",
      name: "Wind Breaker - Nouvelles Saisons Disponibles",
      url: "/manga/wind-breaker",
    },
    {
      image: "/assets/TopScreen/tbate.webp",
      name: "The Beginning After The End - Nouveaux Episodes Disponibles",
      url: "/manga/tbate",
    },
    {
      image: "/assets/TopScreen/vigilantes.webp",
      name: "My Hero Academia Vigilantes - Nouveaux Episodes Disponibles",
      url: "/manga/my-hero-academia-vigilantes",
    },
    {
      image: "/assets/TopScreen/apothicaire.webp",
      name: "Les Carnets de l'Apothicaire - Nouvelles Saisons Disponibles",
      url: "/manga/les-carnets-de-l-apothicaire",
    },
    {
      image: "/assets/TopScreen/oldCountry.webp",
      name: "From Old Country Bumpkin to Master Swordman - Nouveaux Episodes Disponibles",
      url: "/manga/from-old-country-bumpkin-to-master-swordman",
    },
    {
      image: "/assets/TopScreen/blackButler.webp",
      name: "Black Butler - Nouvelles Saisons Disponibles",
      url: "/manga/black-butler",
    },
    {
      image: "/assets/TopScreen/yaiba.webp",
      name: "Yaiba - Nouveaux Episodes Disponibles",
      url: "/manga/yaiba",
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
      image: "/assets/TopScreen/onePiece.webp",
      name: "One Piece - Arc Egghead Disponible",
      url: "/manga/one-piece",
    },
    {
      image: "/assets/TopScreen/fireForce2.webp",
      name: "Fire Force - Nouvelles Saisons Disponibles",
      url: "/manga/fire-force",
    },
    {
      image: "/assets/TopScreen/windBreaker2.webp",
      name: "Wind Breaker - Nouvelles Saisons Disponibles",
      url: "/manga/wind-breaker",
    },
    {
      image: "/assets/TopScreen/tbate2.webp",
      name: "The Beginning After The End - Nouveaux Episodes Disponibles",
      url: "/manga/tbate",
    },
    {
      image: "/assets/TopScreen/vigilantes2.webp",
      name: "My Hero Academia Vigilantes - Nouveaux Episodes Disponibles",
      url: "/manga/my-hero-academia-vigilantes",
    },
    {
      image: "/assets/TopScreen/apothicaire2.webp",
      name: "Les Carnets de l'Apothicaire - Nouvelles Saisons Disponibles",
      url: "/manga/les-carnets-de-l-apothicaire",
    },
    {
      image: "/assets/TopScreen/oldCountry2.webp",
      name: "From Old Country Bumpkin to Master Swordman - Nouveaux Episodes Disponibles",
      url: "/manga/from-old-country-bumpkin-to-master-swordman",
    },
    {
      image: "/assets/TopScreen/blackButler2.webp",
      name: "Black Butler - Nouvelles Saisons Disponibles",
      url: "/manga/black-butler",
    },
    {
      image: "/assets/TopScreen/yaiba2.webp",
      name: "Yaiba - Nouveaux Episodes Disponibles",
      url: "/manga/yaiba",
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
