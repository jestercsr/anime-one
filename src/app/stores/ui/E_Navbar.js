"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Twirl as Hamburger } from "hamburger-react";
import { BsBag } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { usePathname } from "next/navigation";
import { useAvatar } from "../../../../providers/AvatarContext";
import { useCart } from "../../../../providers/CartContext";

export default function E_Navbar() {
  const menuL = [
    {
      name: "Nouveautés",
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
      name: "Promotions",
      href: "/stores/promotions",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const { avatarUrl, profileName } = useAvatar();
  const { cart } = useCart();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  const currentPath = usePathname()
  const isActive = (path) => {
    return currentPath === path
  }

  return (
    <div className="duration-200 z-40 bg-cyan-800 text-slate-50 fixed top-0 w-full">
      <div className="bg-sky-500 text-slate-50 ">
        <div className="container py-2">
          <div className="flex justify-between items-center text-sm">
            <Link href="/accueil" className="hover:text-orange-500">
              Retour sur Anime ONE
            </Link>
          </div>
        </div>
      </div>
      <nav
        className={`${
          isOpen
            ? "flex justify-between"
            : "flex justify-between lg:px-8 items-center lg:py-[4px] py-0"
        }`}
      >
        <div className={`${isOpen ? "flex gap-4" : "flex items-center gap-4"}`}>
          <Link href={"/stores"}>
            <div className="block w-36">
              <img
                src="/assets/LogoAnimeONE/LogoNavbar.webp"
                className="block w-full"
              />
            </div>
          </Link>
        </div>

        <section
          className={` ${isOpen ? "w-[50%] items-center flex-col" : "flex"}`}
        >
          <div
            className={` ${
              isOpen ? "mt-10 justify-between" : "hidden lg:flex"
            }`}
          >
            <ul
              className={`${
                isOpen ? "flex-col items-center" : "flex"
              } items-center gap-4`}
            >
              {menuL.map((data, i) => {
                return (
                  <li key={i}>
                    <Link
                      href={data.href}
                      className={`${isActive(data.href)?'underline underline-offset-8 inline-flex items-center mr-5':'inline-flex items-center mr-5 hover:text-sky-500 transition ease-in duration-300'}`}
                    >
                      {data.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={`${isOpen ? "" : "flex items-center gap-4"}`}>
            <div
              className={`${
                isOpen ? "relative mt-14" : "hidden"
              } lg:block lg:relative`}
            >
              <button
                onClick={toggleSearch}
                className="lg:flex items-center md:ml-3 gap-4 hover:text-sky-500 transition ease-in duration-300"
              >
                <IoSearch className="text-2xl" />
              </button>
            </div>
          </div>
        </section>

        <div className={`${isOpen ? "flex items-baseline" : "flex items-center"}`}>
          <div className="relative">
            <BsBag className="text-3xl" />
            <div className=" rounded-full absolute top-1 left-0 right-0 bottom-0 grid place-items-center translate-x-0 -translate-y-0">
            {cart.length}
            </div>
          </div>
          <section className={`${isOpen ? "flex w-8 h-8 items-baseline": "items-center ml-2 lg:gap-6"}`}>
            {avatarUrl && profileName ? (
              <div className="relative">
                <Link href="/stores/profile">
                  <img
                    src={avatarUrl || "/assets/avatar/narutoShippudenAvatar.webp"}
                    alt={profileName}
                    className="w-8 h-8 lg:w-10 lg:h-10 rounded-full cursor-pointer"
                /></Link>
              </div>
            ) : (
              <Link href='/authentification'>
                <TfiUser className="text-3xl" /></Link>
            )}
          </section>
          <button
            onClick={toggleMenu}
            className="focus:outline-none flex float-right lg:hidden"
          >
            <Hamburger />
          </button>
        </div>
      </nav>
      {showSearch && (
        <div className="w-full bg-slate-50">
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full max-h-60 text-sm md:text-base lg:text-md xl:text-lg rounded-md focus:border-cyan-800 focus:border-2 outline-none px-4 py-2 text-neutral-800"
          />
        </div>
      )}
    </div>
  );
}
