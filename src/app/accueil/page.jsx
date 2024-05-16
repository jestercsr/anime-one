"use client";

import React from "react";
import { ButtonConnect } from "./ui/ButtonConnect";
import { CarrouselForm } from "./ui/CarrouselForm";
import Navbar from "./ui/NavBar";
import Footer from "../ui/Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { trendings } from "./ui/CarouselAnime";

export default function page() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 5,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <div className="bg-gradient-to-b from-bleu-clair to-blue-marine">
      <Navbar className="bg-teal-900 text-white" />
      <CarrouselForm />
      <ButtonConnect />

      <div>
        <p>kbebdbfvukubebefk</p>
      </div>


      <Footer />
    </div>
  );
}
