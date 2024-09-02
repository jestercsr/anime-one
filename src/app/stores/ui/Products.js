'use client'
import { MdAddShoppingCart } from "react-icons/md";
import React from "react";

export default function Products() {
  const produits = [
    {
      image:
        "/assets/boutiques/figurines/onepiece/4535123716454_one-piece-luffy-ace-portraitofpirates-neo-maximum-figure-set-bond-between-brothers-20th-limited-ver_1.jpg",
      titre: "One Piece - Luffy & Ace 20th Limited Version",
      add: "Ajouter au Panier",
      prix: 200.99,
    },
    {
      image:
        "/assets/boutiques/figurines/onepiece/4535123716454_one-piece-luffy-ace-portraitofpirates-neo-maximum-figure-set-bond-between-brothers-20th-limited-ver_1.jpg",
      titre: "One Piece - Luffy & Ace 20th Limited Version",
      add: "Ajouter au Panier",
      prix: 200.99,
    },
    {
      image:
        "/assets/boutiques/figurines/onepiece/4535123716454_one-piece-luffy-ace-portraitofpirates-neo-maximum-figure-set-bond-between-brothers-20th-limited-ver_1.jpg",
      titre: "One Piece - Luffy & Ace 20th Limited Version",
      add: "Ajouter au Panier",
      prix: 200.99,
    },
    {
      image:
        "/assets/boutiques/figurines/onepiece/4535123716454_one-piece-luffy-ace-portraitofpirates-neo-maximum-figure-set-bond-between-brothers-20th-limited-ver_1.jpg",
      titre: "One Piece - Luffy & Ace 20th Limited Version",
      add: "Ajouter au Panier",
      prix: 200.99,
    },
    {
      image:
        "/assets/boutiques/figurines/onepiece/4535123716454_one-piece-luffy-ace-portraitofpirates-neo-maximum-figure-set-bond-between-brothers-20th-limited-ver_1.jpg",
      titre: "One Piece - Luffy & Ace 20th Limited Version",
      add: "Ajouter au Panier",
      prix: 200.99,
    },
    {
      image:
        "/assets/boutiques/figurines/onepiece/4535123716454_one-piece-luffy-ace-portraitofpirates-neo-maximum-figure-set-bond-between-brothers-20th-limited-ver_1.jpg",
      titre: "One Piece - Luffy & Ace 20th Limited Version",
      add: "Ajouter au Panier",
      prix: 200.99,
    },
    {
      image:
        "/assets/boutiques/figurines/onepiece/4535123716454_one-piece-luffy-ace-portraitofpirates-neo-maximum-figure-set-bond-between-brothers-20th-limited-ver_1.jpg",
      titre: "One Piece - Luffy & Ace 20th Limited Version",
      add: "Ajouter au Panier",
      prix: 200.99,
    },
    {
      image:
        "/assets/boutiques/figurines/onepiece/4535123716454_one-piece-luffy-ace-portraitofpirates-neo-maximum-figure-set-bond-between-brothers-20th-limited-ver_1.jpg",
      titre: "One Piece - Luffy & Ace 20th Limited Version",
      add: "Ajouter au Panier",
      prix: 200.99,
    },
    {
      image:
        "/assets/boutiques/figurines/onepiece/4535123716454_one-piece-luffy-ace-portraitofpirates-neo-maximum-figure-set-bond-between-brothers-20th-limited-ver_1.jpg",
      titre: "One Piece - Luffy & Ace 20th Limited Version",
      add: "Ajouter au Panier",
      prix: 200.99,
    },
    {
      image:
        "/assets/boutiques/figurines/onepiece/4535123716454_one-piece-luffy-ace-portraitofpirates-neo-maximum-figure-set-bond-between-brothers-20th-limited-ver_1.jpg",
      titre: "One Piece - Luffy & Ace 20th Limited Version",
      add: "Ajouter au Panier",
      prix: 200.99,
    },
  ];
  return (
    <div className="text-center p-5">
      <h2 className="text-[30px] lg:text-[50px] my-10 text-slate-50 font-extrabold">
        Nouveaux Arrivages
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 laptop:grid-cols-5">
        {produits.map((item, i) => {
          return (
            <div
              key={i}
              className="w-[140px] md:w-[160px] justify-items-center m-auto bg-white px-[5px] py-[6px] border-2 cursor-pointer shadow-xl hover:shadow-2xl rounded-2xl mb-5 lg:w-[23%] lg:min-w-[250px] lg:px-[10px] lg:py-[12px]"
            >
              <img src={item.image} className="w-full rounded-2xl" />
              <div className="text-start">
                <p className="pt-4 text-xs md:text-md lg:text-lg">
                  {item.titre}
                </p>
                <div className="flex justify-between">
                  <p className="pt-4 text-xs md:text-md lg:text-lg text-skyer-600 font-semibold">
                    {item.prix} €
                  </p>
                  <button
                    className="p-2 lg:p-4 lg:text-[20%] rounded-[100%] bg-slate-50 text-skyer-600 hover:bg-skyer-600 hover:text-slate-50 bottom-5"
                    title={item.add}
                  >
                    <MdAddShoppingCart className="text-2xl"/>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}