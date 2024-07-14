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
  Menu,
} from "lucide-react";
import { useState } from "react";

export default function Navbar(props) {
  const [isMenu, setIsMenu] = useState(false);

  function toogleNavbar() {
    setIsMenu(!isMenu);
  }

  const [bgColor] = useState('bg-teal-900')

  const getLogo = () =>{
    switch (bgColor){
      case 'bg-neutraler-900' || 'bg-neutraler-800' || 'bg-neutraler-100':
        return '/assets/LogoAnimeONE/logoAnimeOneDefault3.webp'
      case 'bg-bluer-950' || 'bg-bluer-800' || 'bg-bluer-700' ||'bg-bluer-600':
        return '/assets/LogoAnimeONE/logoAnimeOneDefault3.webp'
      case 'bg-blacker-950' || 'bg-blacker-300' || 'bg-blacker-200' || 'bg-blacker-10' || 'bg-blacker-8' ||'bg-neutral-800':
        return '/assets/LogoAnimeONE/logoAnimeOneDefault3.webp'
      case 'bg-skyer-950' || 'bg-skyer-600' || 'bg-skyer-500':
        return '/assets/LogoAnimeONE/logoAnimeOneDefault2.webp'
      default:
        return '/assets/LogoAnimeONE/logoAnimeOneDefault.webp'
    }
  }

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
      lien: "/post_edit",
      icon: <Newspaper />,
    },
  ];

  return (
    <div className={props.className}>
      <nav className="flex justify-between px-8 items-center py-[4px] md:py-2">
        <section className="flex items-center gap-4">
          <div>
            <Link href={"/accueil"}>
              <div className="hidden md:block w-20">
                <img
                  src={getLogo()}
                  alt="logo"
                  className=" block"
                />
              </div>
              <div className="block w-14 md:hidden">
                <img
                  src="/assets/LogoAnimeONE/logoAnimeOne.webp"
                  alt="logoOne"
                  className="block"
                />
              </div>
            </Link>
          </div>
        </section>
        <Menu className="text-3xl items-end cursor-pointer md:hidden" />
        <section className="md:static md:min-h-fit absolute min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex">
          <div className="hidden md:block flex-shrink flex-grow-0 justify-start px-2">
            <div className="relative group hidden md:block">
              <input
                type="text"
                placeholder="Rechercher..."
                className="search-bar text-neutral-900"
              />
              <Search className="absolute top-1/2 -translate-y-1/2 right-3 duration-200" />
            </div>
          </div>
          <ul
            style={{
              display: "flex",
              gap: "20px",
              listStyle: "none",
              right: isMenu ? "0" : "-100%",
              marginRight: "10px",
            }}
          >
            {navlinks.map((link) => {
              return (
                <li key={link.label} className="hover:text-sky-500 transition ease-in duration-300">
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
          </ul>
          <section className="items-center gap-6">
            <CircleUserRound />
          </section>
        </section>
      </nav>
    </div>
  );
}
