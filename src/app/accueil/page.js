"use client";

import React from "react";
import { ButtonConnect } from "./ui/ButtonConnect";
import { CarrouselForm } from "./ui/CarrouselForm";
import Navbar from "./ui/NavBar";
import Footer from "../ui/Footer";
import SelectionWidget from "./ui/SelectionWidget";
import Reco from "./ui/Reco";
import AnimeTrending from "./ui/AnimeTrending";
import ScanTrending from "./ui/ScanTrending";
import MovieReco from "./ui/MovieReco";
import Classique from "./ui/Classique";

export default function PageAccueil() {
  return (
    <div className="bg-gradient-to-b from-sky-500 to-emeralder-900">
      <Navbar className="bg-cyan-900 text-white" liste="bg-cyan-900 text-white absolute left-0 w-full divide-y-2 divide-slate-50 border-gray-300 mt-1 z-10 list-none" listing="cursor-pointer p-2 hover:bg-gray-200 hover:text-cyan-900 border-t-0"/>
      <CarrouselForm />
      <ButtonConnect />

      <Reco />
      <AnimeTrending />
      <ScanTrending />
      <MovieReco />

      <SelectionWidget />
      <Classique />
      <Footer />
    </div>
  );
}
