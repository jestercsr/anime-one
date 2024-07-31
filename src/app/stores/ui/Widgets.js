import Link from "next/link";
import React from "react";

export default function Widgets() {
  const widget = [
    {
      image:
        "/assets/boutiques/clothes.webp",
      name: "Shop Clothes",
      url: "/stores/clothes",
    },
    {
      image:
        "/assets/boutiques/figurines/dbz/4573102652423_figure-frieza-2nd-form-ball-battle-on-planet-namek-ver-dbz-ichiban-primary.jpg",
      name: "Shop Manga",
      url: "/stores/manga-livres",
    },
    {
      image:
        "/assets/boutiques/accessoire.webp",
      name: "Shop Accessories",
      url: "/stores/accessoires",
    },
  ];

  const widget2 = [
    {
      image:
        "/assets/boutiques/figurines.webp",
      name: "Shop Figurines",
      url: "/stores/collections",
    },
    {
      image:
        "/assets/boutiques/figurines/kaijun8/4537807070722_kaiju-no-8-kaiju-no-8-vs-kaiju-no-9-118-scale-figure-set_1.jpg",
      name: "Shop DVD's",
      url: "/stores/collections",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-y-4 justify-items-center p-4">
        {widget.map((item, i) => {
          return (
            <div key={i} className="w-full mb-2 md:mb-0 md:w-[70%]">
              <Link href={item.url}>
                <img src={item.image} alt={item.name} className="w-full "/>
                <p className="text-slate-50 p-5 text-center text-xs md:text-md lg:text-lg bg-neutral-950 hover:text-sky-500">{item.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-4 justify-items-center">
        {widget2.map((select, i) => {
          return (
            <div key={i} className="w-full mb-2 md:mb-0 md:w-[80%]">
              <Link href={select.url}>
                <img src={select.image} alt={select.name} className="w-full"/>
                <p className="text-slate-50 p-5 text-center text-xs md:text-md lg:text-lg bg-neutral-950 hover:text-sky-500">{select.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
