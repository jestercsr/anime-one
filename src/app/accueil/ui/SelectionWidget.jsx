"use client";
import React from "react";
import Link from "next/link";

export default function SelectionWidget() {
  const selection = [
    {
      nom: "Voir toutes les Catégories",
      lien: "/categories",
      images: "/assets/OP_Top.webp",
    },
    {
      nom: "Visiter la Boutique",
      lien: "/stores",
      images: "/assets/DB_Top.webp",
    },
    {
      nom: "Visiter Anime ONE Feeds",
      lien: "/feeds",
      images: "/assets/20thCenturyBoys_Top.webp",
    },
  ];
  return (
    <>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-3 md:gap-y-4 justify-items-center p-4 text-slate-50">
        {selection.map((select, i) => {
          return (
            <div key={i} className="mt-5 md:mr-5">
              <Link href={select.lien}>
                <img src={select.images} alt={select.nom} />
                <p className="text-slate-50 p-5 text-center text-xs md:text-md lg:text-lg bg-neutral-950 hover:text-sky-500">
                  {select.nom}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
