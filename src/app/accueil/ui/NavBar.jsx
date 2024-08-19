"use client";

import Link from "next/link";
import {
  Newspaper,
  BookOpenText,
  Clapperboard,
  Film,
  Search,
  ShoppingCart,
  CircleUserRound,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { getListeAll } from "../../../../_actions/postAction";
import ReactLoading from "react-loading";
import { useProfile } from "../../../../providers/ProfileContext";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedProfile, logout } = useProfile();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [bgColor] = useState("bg-teal-900");

  const getLogo = () => {
    switch (bgColor) {
      case "bg-neutraler-900" || "bg-neutraler-800" || "bg-neutraler-100":
        return "/assets/LogoAnimeONE/logoAnimeOneDefault3.webp";
      case "bg-bluer-950" || "bg-bluer-800" || "bg-bluer-700" || "bg-bluer-600":
        return "/assets/LogoAnimeONE/logoAnimeOneDefault3.webp";
      case "bg-blacker-950" ||
        "bg-blacker-300" ||
        "bg-blacker-200" ||
        "bg-blacker-10" ||
        "bg-blacker-8" ||
        "bg-neutral-800":
        return "/assets/LogoAnimeONE/logoAnimeOneDefault3.webp";
      case "bg-skyer-950" || "bg-skyer-600" || "bg-skyer-500":
        return "/assets/LogoAnimeONE/logoAnimeOneDefault2.webp";
      default:
        return "/assets/LogoAnimeONE/logoAnimeOneDefault.webp";
    }
  };

  const navlinks = [
    {
      label: "Films",
      lien: "/films",
      icon: <Film />,
    },
    {
      label: "Séries",
      lien: "/series",
      icon: <Clapperboard />,
    },
    {
      label: "Scans",
      lien: "/scans",
      icon: <BookOpenText />,
    },
    {
      label: "Boutiques",
      lien: "/stores",
      icon: <ShoppingCart />,
    },
    {
      label: "Feeds",
      lien: "/feeds",
      icon: <Newspaper />,
    },
  ];
  if (selectedProfile && selectedProfile.role === 'admin') {
    navlinks.push({ label: "Admin", lien: "/admin" });
  }

  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const listeData = await getListeAll();
        setData(listeData);
      } catch (error) {
        console.error("Erreur pour récupérer la liste des mangas:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData([]);
    } else {
      const filtered = data.filter((manga) =>
        manga.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchTerm, data]);

  if (loading) {
    return (
      <div>
        <ReactLoading
          type="bubbles"
          color="#ffffff"
          height={"30px"}
          width={"30px"}
        />
      </div>
    );
  }

  return (
    <div className={props.className}>
      <nav
        className={`${
          isOpen
            ? "flex justify-between"
            : "flex justify-between lg:px-8 items-center lg:py-[4px] py-0"
        }`}
      >
        <section
          className={`${isOpen ? "flex gap-4" : "flex items-center gap-4"}`}
        >
          <div>
            <Link href={"/accueil"}>
              <div className="hidden md:flex w-20">
                <img src={getLogo()} alt="logo" />
              </div>
              <div className="flex w-14 md:hidden">
                <img
                  src="/assets/LogoAnimeONE/logoAnimeOne.webp"
                  alt="logoOne"
                />
              </div>
            </Link>
          </div>
        </section>

        <section
          className={` ${
            isOpen ? "w-[50%] h-[300px] min-h-0 flex-col" : "hidden lg:flex"
          } relative lg:min-h-fit items-center min-h-[60vh] lg:w-auto w-full flex`}
        >
          <div
            className={`${
              isOpen ? "mt-14" : "block"
            } lg:flex-shrink lg:flex-grow-0 lg:justify-start lg:px-2`}
          >
            <div className="relative block">
              <input
                type="text"
                placeholder="Rechercher..."
                className="max-h-60 overflow-y-auto z-10 text-sm md:text-base lg:text-md xl:text-lg m-2 rounded-md focus:border-cyan-950 focus:border-2 outline-none px-[5px] text-neutral-800"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button>
                <Search className="absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
              </button>
              {searchTerm && filteredData.length > 0 && (
                <ul className={props.liste}>
                  {filteredData.map((manga, i) => (
                    <li key={i} className={props.listing}>
                      <Link href={`/manga/${manga.url}`}>{manga.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <ul className={`${isOpen ? "inline-block" : "flex"} gap-5 list-none`}>
            {navlinks.map((link) => {
              return (
                <li
                  key={link.label}
                  className="hover:text-sky-500 transition ease-in duration-300"
                >
                  <Link
                    href={link.lien}
                    className="inline-flex items-center mr-5"
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                </li>
              );
            })}
            <section className="items-center gap-6">
              {selectedProfile ? (
                <div
                  className="relative"
                  onClick={toggleDropdown}
                >
                  <img
                    src={selectedProfile.image}
                    alt={selectedProfile.name}
                    className="w-8 h-8 rounded-full cursor-pointer"
                  />
                  {isDropdownOpen && (
                    <div className={"bg-cyan-900 text-slate-50 absolute z-10 right-0 mt-2 w-48  border rounded shadow-lg"}>
                      <Link href="/profile">
                        <div className="px-4 py-2 hover:text-cyan-900 hover:bg-slate-50">
                          Profil
                        </div>
                      </Link>
                      <div className="px-4 py-2 hover:text-cyan-900 hover:bg-slate-50">
                        Liste de visionnage
                      </div>
                      <div
                        className="px-4 py-2 hover:text-slate-50 hover:bg-red-500 cursor-pointer"
                        onClick={logout}
                      >
                        Déconnexion
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link href='/authentification'>
                <CircleUserRound /></Link>
              )}
            </section>
          </ul>
        </section>
        <button
          onClick={toggleMenu}
          className="focus:outline-none flex float-right lg:hidden"
        >
          <Hamburger />
        </button>
      </nav>
    </div>
  );
}
