"use client";

import Link from "next/link";
import { GrUserAdmin } from "react-icons/gr";
import React, { useState, useEffect } from "react";
import { Twirl as Hamburger } from "hamburger-react";
import { getListeAll } from "../../../../_actions/postAction";
import ReactLoading from "react-loading";
import { usePathname } from "next/navigation";
import { useAvatar } from "../../../../providers/AvatarContext";
import { PiBookOpenText } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoShareSocial } from "react-icons/io5";
import { TbSearch } from "react-icons/tb";
import { RiMovieLine, RiShoppingBasketLine } from "react-icons/ri";
import { TfiUser } from "react-icons/tfi";

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);
  const { roleProfile } = useAvatar()
  const { avatarUrl, profileName } = useAvatar();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const darkColors = [
    "bg-bluer-950", "bg-bluer-800", "bg-bluer-700", "bg-bluer-600",
    "bg-blacker-950", "bg-blacker-300", "bg-blacker-200", "bg-blacker-10",
    "bg-blacker-8", "bg-neutraler-900", "bg-neutraler-800", "bg-neutraler-100",
    "bg-slate-950", "bg-slate-900", "bg-slate-800", "bg-gray-950",
    "bg-gray-900", "bg-gray-800", "bg-zinc-950", "bg-zinc-900","bg-indigo-800", "bg-indigo-900",
    "bg-zinc-800", "bg-neutral-950", "bg-neutral-900", "bg-neutral-800","bg-red-900", "bg-stone-950", "bg-stone-900", "bg-black"
  ];

  const lightColors = [
    "bg-skyer-950", "bg-skyer-600", "bg-skyer-500", "bg-blue-950",
    "bg-blue-900", "bg-blue-800", "bg-blue-700", "bg-blue-600",
    "bg-blue-500", "bg-blue-400", "bg-sky-400", "bg-sky-500",
    "bg-sky-600", "bg-sky-700", "bg-sky-800", "bg-sky-900", "bg-teal-800",
    "bg-sky-950", "bg-cyan-950", "bg-cyan-800", "bg-teal-950", "bg-teal-900",
    "bg-cyan-700", "bg-cyan-600", "bg-cyan-500", "bg-cyan-400","bg-greener-500"
  ];

  const getLogo = () => {
    const classes = props.className.split(' ');
    const bgColor = classes.find(cls => darkColors.includes(cls) || lightColors.includes(cls));

    if (darkColors.includes(bgColor)) {
      return "/assets/LogoAnimeONE/logoAnimeOneDefault3.webp";
    } else if (lightColors.includes(bgColor)) {
      return "/assets/LogoAnimeONE/logoAnimeOneDefault2.webp";
    } else {
      return "/assets/LogoAnimeONE/logoAnimeOneDefault.webp";
    }
  };

  const getLogoResponsive= () => {
    const classes = props.className.split(' ');
    const bgColor = classes.find(cls => darkColors.includes(cls) || lightColors.includes(cls));

    if (darkColors.includes(bgColor)) {
      return "/assets/LogoAnimeONE/logoAnimeOneAlt2.webp";
    } else if (lightColors.includes(bgColor)) {
      return "/assets/LogoAnimeONE/logoAnimeOneAlt.webp";
    } else {
      return "/assets/LogoAnimeONE/logoAnimeOne.webp";
    }
  }

  const currentPath = usePathname()
  const isActive = (path) => {
    return currentPath === path
  }

  const navlinks = [
    {
      label: "Films",
      lien: "/films",
      icon: <RiMovieLine className="text-3xl"/>,
    },
    {
      label: "Séries",
      lien: "/series",
      icon: <BiSolidMoviePlay className="text-3xl"/>,
    },
    {
      label: "Scans",
      lien: "/scans",
      icon: <PiBookOpenText className="text-3xl"/>,
    },
    {
      label: "Boutiques",
      lien: "/stores",
      icon: <RiShoppingBasketLine className="text-3xl"/>,
    },
    {
      label: "Socials",
      lien: "/socials",
      icon: <IoShareSocial className="text-3xl"/>,
    },
  ];
  if (roleProfile && roleProfile === 'admin') {
    navlinks.push({ label: "Admin", lien: "/admin", icon: <GrUserAdmin className="text-2xl"/> });
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
            ? "flex justify-between items-start"
            : "flex justify-between lg:px-8 items-center lg:py-[4px] py-0"
        }`}
      >
        <section
          className={`${isOpen ? "flex gap-4" : "flex items-center gap-4"}`}
        >
          <div>
            <Link href={"/accueil"}>
              <div className="hidden md:flex w-36">
                <img src={getLogo()} alt="logo" />
              </div>
              <div className="flex w-20 md:hidden">
                <img
                  src={getLogoResponsive()}
                  alt="logoOne"
                />
              </div>
            </Link>
          </div>
        </section>

        <section
          className={` ${
            isOpen ? "flex-col" : "hidden lg:flex relative"
          } lg:min-h-fit items-center min-h-[60vh] lg:w-auto w-full flex`}
        >
          <div
            className={`${
              isOpen ? "mt-10 " : "block"
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
                <TbSearch className="text-xl absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
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
          <ul className={`${isOpen ? " " : "flex"} gap-5 list-none items-center`}>
            {navlinks.map((link) => {
              return (
                <li
                  key={link.label}
                  className="hover:underline hover:underline-offset-4 transition ease-in duration-300"
                >
                  <Link
                    href={link.lien}
                    className={`${isActive(link.lien)?'underline underline-offset-8 inline-flex items-center mr-5':'inline-flex items-center mr-5'}`}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </Link>
                </li>
              );
            })}
            <section className="items-center gap-6">
              {avatarUrl && profileName ? (
                <div className="relative">
                  <Link href="/profile">
                  <img
                    src={avatarUrl || "/assets/avatar/narutoShippudenAvatar.webp"}
                    alt={profileName}
                    className="w-10 h-10 rounded-full cursor-pointer"
                  /></Link>
                </div>
              ) : (
                <Link href='/authentification'>
                <TfiUser className="text-3xl" /></Link>
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
