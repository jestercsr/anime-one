import React from "react";
import Link from "next/link";
import { Search, ShoppingBag } from "lucide-react";

export default function E_Navbar() {
  const menuL = [
    {
      name: "News",
      href: "/stores/news",
    },
    {
      name: "Collections",
      href: "/stores/collections",
    },
    {
      name: "Vêtements",
      href: "/stores/clothes",
    },
    {
      name: "Manga & Livres",
      href: "/stores/manga-livres",
    },
    {
      name: "Accessoires",
      href: "/stores/accessoires",
    },
    {
      name: "Series",
      href: "/stores/shop-by-series",
    },
    {
      name: "Shop All",
      href: "/stores/collections/all",
    },
    {
      name: "Promotions",
      href: "/stores/collections/promotions",
    },
  ];
  return (
    <div className="duration-200 relative z-40 bg-teal-900 text-slate-50 sticky">
      <nav className="flex justify-between items-center px-8 items-center py-2 top-0 left-0">
        <div className="">
          <Link href={"/stores"}>
            <div className="hidden tablet:block w-20">
              <img src="/assets/logoAnimeplus.webp" className=" block" />
            </div>
            <div className="block w-20 tablet:hidden">
              <img src="/assets/logoAnimeplusHome.webp" className="block" />
            </div>
          </Link>
        </div>

        <div className="hidden md:block">
          <ul className="flex items-center gap-4">
            {menuL.map((data, i) => {
              return (
                <li key={i}>
                  <Link
                    href={data.href}
                    className="text-xs md:text-md lg:text-lg hover:text-sky-500 transition ease-in duration-300"
                  >
                    {data.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="flex justify-between items-center gap-4">
          <div className="relative group hidden md:block text-neutral-950">
            <input
              type="text"
              placeholder="Rechercher..."
              className="search-bar"
            />
            <Search className="absolute top-1/2 -translate-y-1/2 right-3 duration-200 text-slate-50 group-hover:text-neutral-950" />
          </div>
          <div className="relative">
            <ShoppingBag />
            <div className="bg-red-600 rounded-full absolute top-0 right-0 grid place-items-center translate-x-1 -translate-y-1">
              0
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
