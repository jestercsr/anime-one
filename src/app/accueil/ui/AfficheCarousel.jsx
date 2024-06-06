"use client";

import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  trendings,
  recommanded,
  currently,
  movieRec,
} from "./ComponentAnimeHome";
import Link from "next/link";

export default function AfficheCarousel() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  return (
    <div>
      <div className="mt-5 text-white pb-5 text-xl">
        <h2 className="ml-1 ">Recommander pour Vous</h2>
        <Carousel responsive={responsive} infinite>
          {recommanded.map((recommander) => {
            return (
              <div className="xs:text-[2px] md:text-md lg:text-lg mx-2 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8 relative" key={recommander.id}>
                <Link href={`/${recommander.url}`}>
                  <img src={recommander.image} className="rounded-2xl w-full"/>
                  <p className="absolute bottom-2 sm:bottom-5 lg:bottom-8 bg-black bg-opacity-50 transition ease-in duration-500 opacity-0 w-full p-5 text-center hover:opacity-100 rounded-2xl">{recommander.name}</p>
                </Link>
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className="mt-5 text-white pb-5 text-xl">
        <h2 className="ml-1 ">En ce Moment Anime</h2>
        <Carousel responsive={responsive} infinite>
          {trendings.map((trends) => {
            return (
              <div className="xs:text-[2px] md:text-md lg:text-lg mx-2 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8 relative" key={trends.id}>
                <Link href={`/${trends.url}`}>
                  <img src={trends.image} className="rounded-2xl w-full"/>
                  <p className="absolute bottom-2 sm:bottom-5 lg:bottom-8 bg-black bg-opacity-50 transition ease-in duration-500 opacity-0 w-full p-5 text-center hover:opacity-100 rounded-2xl">{trends.name}</p>
                </Link>
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className="mt-5 text-white pb-5 text-xl">
        <h2 className="ml-1 ">En ce Moment Scans</h2>
        <Carousel responsive={responsive} infinite>
          {currently.map((current) => {
            return (
              <div className="xs:text-[2px] md:text-md lg:text-lg mx-2 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8 relative" key={current.id}>
                <Link href={`/${current.url}`}>
                  <img src={current.image} className="rounded-2xl w-full"/>
                  <p className="absolute bottom-2 sm:bottom-5 lg:bottom-8 bg-black bg-opacity-50 transition ease-in duration-500 opacity-0 w-full p-5 text-center hover:opacity-100 rounded-2xl">{current.name}</p>
                </Link>
              </div>
            );
          })}
        </Carousel>
      </div>

      <div className="mt-5 text-white pb-5">
        <h2 className="ml-1 text-xl">Films Recommander pour Vous</h2>
        <Carousel responsive={responsive} infinite>
          {movieRec.map((movReco) => {
            return (
              <div className="xs:text-[2px] md:text-md lg:text-lg mx-2 py-2 md:mx-2.5 md:py-5 lg:mx-5 lg:py-8 relative" key={movReco.id}>
                <Link href={`/${movReco.url}`}>
                  <img src={movReco.image} className="rounded-2xl w-full"/>
                  <p className="absolute bottom-2 sm:bottom-5 lg:bottom-8 bg-black bg-opacity-50 transition ease-in duration-500 opacity-0 w-full p-5 text-center hover:opacity-100 rounded-2xl">{movReco.name}</p>
                </Link>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}