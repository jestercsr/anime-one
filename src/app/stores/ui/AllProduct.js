"use client";
import { MdAddShoppingCart, MdRemoveShoppingCart } from "react-icons/md";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Rating from "./Rating";
import Link from "next/link";
import { TbHexagonPlusFilled } from "react-icons/tb";
import { useCart } from "../../../../providers/CartContext";

export default function AllProduct() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { cart, dispatch } = useCart();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`/api/produits`);
        if (!res.ok) {
          throw new Error("Erreur lors de la recupération des données");
        }
        const produitData = await res.json();
        setData(produitData.produit);
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
      breakpoint: { max: 4000, min: 1200 },
      items: 5,
      slidesToSlide: 2,
    },
    desktop: {
      breakpoint: { max: 1200, min: 800 },
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
      items: 2,
      slidesToSlide: 1,
    },
  };

  if (loading) {
    return (
      <div>
        <ReactLoading
          type="bubbles"
          color="#0c4a6e"
          height={"3%"}
          width={"3%"}
        />
      </div>
    );
  }
  const changeBg = (e) => {
    if (e == "En stock") {
      return "bg-green-400 text-sky-950";
    } else if (e == "Précommande") {
      return "bg-amber-300 text-sky-950";
    } else {
      return "bg-red-500 text-slate-50";
    }
  };

  const isInCart = (id) => cart.some((item) => item.id === id);

  const toggleCart = (product) => {
    if (isInCart(product.id)) {
      dispatch({ type: "REMOVE_ITEM", payload: product.id });
    } else {
      dispatch({ type: "ADD_ITEM", payload: { ...product, quantity: 1 } });
    }
  };

  return (
    <div className="text-center p-5">
      <Carousel swipeable={true} responsive={responsive}>
        {data.map((product) => {
          return (
            <div
              key={product.id}
              className="w-[140px] md:w-[180px] justify-items-center m-auto  px-[5px] py-[6px] cursor-pointer hover:shadow-2xl rounded-2xl mb-5 lg:w-[23%] lg:min-w-[250px] lg:py-[12px] lg:min-h-[400px] flex flex-col"
            >
              <Link
                href={`/stores/collections/${product.manga}/${product.url}`}
              >
                <img
                  src={product.image[0]}
                  className="w-full h-[200px] md:h-[250px] lg:h-[300px] rounded-2xl"
                />
              </Link>
              <div className="text-start flex-grow flex flex-col justify-between">
                <p className="pt-4 text-xs md:text-md lg:text-lg line-clamp-2 lg:h-[70px]">
                  {product.titre}
                </p>
                <Rating rating={product.averageRating} />
                <p
                  className={`p-1 w-3/5 text-xs md:text-md ${
                    product.typeContenu
                      ? changeBg(product.typeContenu)
                      : "bg-current"
                  }`}
                >
                  {product.typeContenu}
                </p>
                <div className="flex justify-between">
                  {product.sale ? (
                    <div className="flex">
                      <p className="pt-4 line-through mr-1 decoration-red-600 text-xs md:text-sm lg:text-md text-skyer-600 font-semibold">
                        {product.prix} €
                      </p>
                      <p className="pt-4 text-sm md:text-md lg:text-lg text-skyer-600 font-semibold">
                        {product.sale} €
                      </p>
                    </div>
                  ) : (
                    <p className="pt-4 text-xs md:text-md lg:text-lg text-skyer-600 font-semibold">
                      {product.prix} €
                    </p>
                  )}
                  <button
                    onClick={toggleCart}
                    className={`p-2 lg:p-4 rounded-full ${
                      isInCart(product.id)
                        ? "bg-red-500 text-white"
                        : "bg-skyer-600 text-white hover:bg-sky-500"
                    }`}
                    title={isInCart(product.id) ? "Retirer du Panier" : "Ajouter au Panier"}
                  >
                    {isInCart(product.id) ? (
                      <MdRemoveShoppingCart className="text-2xl" />
                    ) : (
                      <MdAddShoppingCart className="text-2xl" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <div className="h-[300px] md:h-[400px] flex justify-center items-center">
          <Link href="/stores/collections">
            <TbHexagonPlusFilled
              className="md:text-[140px] text-[90px] text-sky-700"
              title="Voir plus"
            />
          </Link>
        </div>
      </Carousel>
    </div>
  );
}
