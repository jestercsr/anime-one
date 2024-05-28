"use client";

import React from "react";
import Navbar from "@/app/accueil/ui/NavBar";
import { listeToSee } from "@/app/api/mangaList/listeToSee";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import MainComposent from "./MainComposent";
import Footer from "@/app/ui/Footer";

export default function ToSee({params}) {

  let foundSerie = listeToSee.find(function (element) {
    return element.id == params;
  });

  return (
    <div>
      {listeToSee[foundSerie]}
      <Navbar className="bg-teal-900 text-white" />
      <MainComposent className="bg-gradient-to-b from-sky-bleu to-sky-marine">
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
            {foundSerie.topListe.map((serie, indice) => {
              return (
                <div key={indice}>
                  <img src={serie.image} />
                  <p className="legend">
                    <Link href={serie.url}>{serie.name}</Link>
                  </p>
                </div>
              );
            })}
          </Carousel>
        </div>

        <section className="w-4/5 lg:w-full grid grid-cols-2 gap-1 m-auto items-center xs:grid xs:grid-cols-1 xs:m-auto md:grid md:grid-cols-3 md:gap-4 md:m-auto md:items-center xl:grid xl:grid-cols-4">
          <h2 className="text-white text-sm md:text-md lg:text-lg xl:text-xl pb-1.5 m-1.5">
            {foundSerie.titre}
          </h2>
          {foundSerie.Item.map((select, indice) => {
            return (
              <div
                className="mx-1 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8"
                key={indice}
              >
                <Link href={select.url}>
                  <img src={select.image} className="w-full rounded-2xl" />
                  <p className="absolute bottom-2 sm:bottom-5 lg:bottom-8 bg-black bg-opacity-50 transition ease-in duration-500 opacity-0 w-full p-5 text-center hover:opacity-100 rounded-2xl">
                    {select.name}
                  </p>
                </Link>
              </div>
            );
          })}
        </section>

        <Footer />
      </MainComposent>
    </div>
  );
}
