"use client";
import { MdAddShoppingCart } from "react-icons/md";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Rating from "@/app/manga/[id]/[animation]/[type]/ui/Rating";

export default function Products() {
  const produits = [
    {
      image:
        "/assets/boutiques/figurines/onepiece/4535123716454_one-piece-luffy-ace-portraitofpirates-neo-maximum-figure-set-bond-between-brothers-20th-limited-ver_1.jpg",
      titre: "One Piece - Luffy & Ace 20th Limited Version",
      add: "Ajouter au Panier",
      prix: 200.99,
    },
  ];

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/produits`);
        if (!res.ok) {
          throw new Error("Erreur lors de la recupération des données");
        }
        const produitData = await res.json();
        setData(produitData.produit);
        console.log(produitData.produit);
        setLoading(false);
      } catch (error) {
        console.error("Erreur d'import de la base:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 4,
      slidesToSlide: 2,
    },
    tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 3,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      slidesToSlide: 1,
    },
  };

  if (loading) {
    return (
      <div>
        <ReactLoading
          type="bubbles"
          color="#ffffff"
          height={"3%"}
          width={"3%"}
        />
      </div>
    );
  }

  return (
    <div className="text-center p-5">
      <h2 className="text-[30px] lg:text-[50px] my-10 text-sky-700 font-extrabold">
        Nouveaux Arrivages
      </h2>
      <Carousel
        swipeable={true}
        responsive={responsive}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {data.map((product, index) => {
          return (
            <div
              key={index}
              className="w-[140px] md:w-[160px] justify-items-center m-auto bg-slate-50 px-[5px] py-[6px] border-2 cursor-pointer shadow-xl hover:shadow-2xl rounded-2xl mb-5 lg:w-[23%] lg:min-w-[250px] lg:px-[10px] lg:py-[12px]"
            >
              <img src={product.image[0]} className="w-full rounded-2xl" />
              <div className="text-start">
                <p className="pt-4 text-xs md:text-md lg:text-lg">
                  {product.titre}
                </p>
                <Rating rating={product.averageRating} />
                <div className="flex justify-between">
                  <p className="pt-4 text-xs md:text-md lg:text-lg text-skyer-600 font-semibold">
                    {product.prix} €
                  </p>
                  <button
                    className="p-2 lg:p-4 lg:text-[20%] rounded-[100%] bg-slate-50 text-skyer-600 hover:bg-skyer-600 hover:text-slate-50 bottom-5"
                    title="Ajouter au Panier"
                  >
                    <MdAddShoppingCart className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
