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

export default function PageAccueil() {
  return (
    <div className="bg-gradient-to-b from-skyer-500 to-skyer-950">
      <Navbar className="bg-cyan-900 text-white" />
      <CarrouselForm />
      <ButtonConnect />

      <Reco />
      <AnimeTrending />
      <ScanTrending />
      <MovieReco />

      <SelectionWidget />

      <Footer />
    </div>
  );
}
