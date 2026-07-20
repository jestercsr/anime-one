import React from "react";
import E_Navbar from "./ui/E_Navbar";
import Slider from "./ui/Slider";
import Features from "./ui/Features";
import Products from "./ui/Products";
import Banner from "./ui/Banner";
import Widgets from "./ui/Widgets";
import Newslater from "./ui/Newslater";
import Footer from "./ui/E_Footer";
import AllProduct from "./ui/AllProduct";

export default function PageStores() {
  return (
    <div>
      <E_Navbar />
      <Slider />
      <Features />
      <h2 className="text-[30px] text-center lg:text-[50px] my-10 text-sky-700 font-extrabold">
        Nouveaux Arrivages
      </h2>
      <Products />
      <Banner />
      <Widgets />
      <AllProduct />
      <Newslater />
      <Footer />
    </div>
  );
}
