import React from "react";
import E_Navbar from "./ui/E_Navbar";
import E_Header from "./ui/E_Header";
import Slider from "./ui/Slider";
import Features from "./ui/Features";
import Products from "./ui/Products";
import Banner from "./ui/Banner";
import Widgets from "./ui/Widgets";
import Newslater from "./ui/Newslater";
import Footer from "./ui/E_Footer";

export default function PageStores() {
  return (
    <div className="bg-gray-100">
      <E_Header />
      <E_Navbar />
      <Slider />
      <Features />
      <Products />
      <Banner />
      <Widgets />
      <Newslater />
      <Footer />
    </div>
  );
}
