"use client";
import Link from "next/link";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Slider() {
  const top = [
    {
      image: "/assets/boutiques/collection/collection_banner.webp",
      href: "#"
    },
    {
      image: "/assets/boutiques/onePiece.webp",
      href: "/stores/collections/one-piece",
    },
    {
      image: "/assets/boutiques/naruto.webp",
      href: "/stores/collections/naruto",
    },
    {
      image: "/assets/boutiques/dragonBall.webp",
      href: "/stores/collections/dragon-ball",
    },
    {
      image: "/assets/boutiques/bleach.webp",
      href: "/stores/collections/bleach",
    },
    {
      image: "/assets/boutiques/jjk.webp",
      href: "/stores/collections/jujutsu-kaisen",
    },
    {
      image: "/assets/boutiques/ds.webp",
      href: "/stores/collections/demon-slayer-kimetsu-no-yaiba",
    },,
    {
      image: "/assets/boutiques/sxf.webp",
      href: "/stores/collections/spy-x-family",
    }
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
    <div>
      <Carousel swipeable={true} responsive={responsive} removeArrowOnDeviceType={["superLargeDesktop","desktop","tablet", "mobile"]} ssr={true} infinite={true} autoPlay={true} autoPlaySpeed={9000}
      >
        {top.map((item, i) => {
          return (
            <div key={i} className="mb-5 md:mb-auto md:h-auto pb-4">
                <Link href={item.href}>
                <img
                  src={item.image}
                  className="md:object-cover w-full lg:h-auto"
                />      
                </Link>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
