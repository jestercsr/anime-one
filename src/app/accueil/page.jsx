"use client";

import React from "react";
import { ButtonConnect } from "./ui/ButtonConnect";
import { CarrouselForm } from "./ui/CarrouselForm";
import Navbar from "./ui/NavBar";
import Footer from "../ui/Footer";
import AfficheCarousel from "./ui/AfficheCarousel";
import { Categories } from "./ui/Categories";


export default function page() {

  return (
    <div className="bg-gradient-to-b from-sky-bleu to-sky-marine">
      <Navbar className="bg-teal-900 text-white flex w-screen items-center text-2xl" />
      <CarrouselForm />
      <ButtonConnect />

      <AfficheCarousel />

      <Categories />

      <Footer />
    </div>
  );
}
