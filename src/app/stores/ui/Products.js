import { ShoppingCart } from "lucide-react";
import React from "react";

export default function Products() {
  const produits = [
    {
      image:
        "/assets/boutiques/4535123716454_one-piece-luffy-ace-portraitofpirates-neo-maximum-figure-set-bond-between-brothers-20th-limited-ver_1.jpg",
      titre: "One Piece - Luffy & Ace 20th Limited Version",
      add: "Ajouter au Panier",
      prix: 200.99,
    },
    {
      image:
        "/assets/boutiques/4535123716454_one-piece-luffy-ace-portraitofpirates-neo-maximum-figure-set-bond-between-brothers-20th-limited-ver_1.jpg",
      titre: "One Piece - Luffy & Ace 20th Limited Version",
      add: "Ajouter au Panier",
      prix: 200.99,
    },
    {
      image:
        "/assets/boutiques/4535123716454_one-piece-luffy-ace-portraitofpirates-neo-maximum-figure-set-bond-between-brothers-20th-limited-ver_1.jpg",
      titre: "One Piece - Luffy & Ace 20th Limited Version",
      add: "Ajouter au Panier",
      prix: 200.99,
    },
    {
      image:
        "/assets/boutiques/4535123716454_one-piece-luffy-ace-portraitofpirates-neo-maximum-figure-set-bond-between-brothers-20th-limited-ver_1.jpg",
      titre: "One Piece - Luffy & Ace 20th Limited Version",
      add: "Ajouter au Panier",
      prix: 200.99,
    },
    {
      image:
        "/assets/boutiques/4535123716454_one-piece-luffy-ace-portraitofpirates-neo-maximum-figure-set-bond-between-brothers-20th-limited-ver_1.jpg",
      titre: "One Piece - Luffy & Ace 20th Limited Version",
      add: "Ajouter au Panier",
      prix: 200.99,
    },
    {
      image:
        "/assets/boutiques/4535123716454_one-piece-luffy-ace-portraitofpirates-neo-maximum-figure-set-bond-between-brothers-20th-limited-ver_1.jpg",
      titre: "One Piece - Luffy & Ace 20th Limited Version",
      add: "Ajouter au Panier",
      prix: 200.99,
    },
    {
      image:
        "/assets/boutiques/4535123716454_one-piece-luffy-ace-portraitofpirates-neo-maximum-figure-set-bond-between-brothers-20th-limited-ver_1.jpg",
      titre: "One Piece - Luffy & Ace 20th Limited Version",
      add: "Ajouter au Panier",
      prix: 200.99,
    },
    {
      image:
        "/assets/boutiques/4535123716454_one-piece-luffy-ace-portraitofpirates-neo-maximum-figure-set-bond-between-brothers-20th-limited-ver_1.jpg",
      titre: "One Piece - Luffy & Ace 20th Limited Version",
      add: "Ajouter au Panier",
      prix: 200.99,
    },
    {
      image:
        "/assets/boutiques/4535123716454_one-piece-luffy-ace-portraitofpirates-neo-maximum-figure-set-bond-between-brothers-20th-limited-ver_1.jpg",
      titre: "One Piece - Luffy & Ace 20th Limited Version",
      add: "Ajouter au Panier",
      prix: 200.99,
    },
    {
      image:
        "/assets/boutiques/4535123716454_one-piece-luffy-ace-portraitofpirates-neo-maximum-figure-set-bond-between-brothers-20th-limited-ver_1.jpg",
      titre: "One Piece - Luffy & Ace 20th Limited Version",
      add: "Ajouter au Panier",
      prix: 200.99,
    },
  ];
  return (
    <div className="text-center p-5">
      <h2 className="text-[50px] my-10 text-slate-50 font-extrabold">
        Nouveaux Arrivages
      </h2>
      <div className="flex grid grid-cols-5">
        {produits.map((item, i) => {
          return (
            <div
              key={i}
              className="w-[23%] bg-white min-w-[250px] px-[10px] py-[12px] border border-2 cursor-pointer shadow-xl hover:shadow-2xl rounded-2xl mb-5"
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
                    className="p-4 text-[20%] rounded-[100%] bg-slate-50 text-skyer-600 hover:bg-skyer-600 hover:text-slate-50 bottom-5"
                    title={item.add}
                  >
                    <ShoppingCart />
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