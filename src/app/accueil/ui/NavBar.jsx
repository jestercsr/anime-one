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
      <nav className="flex justify-between px-8 items-center py-2">
        <section className="flex items-center gap-4">
          <div>
            <Link href={"/accueil"}>
              <div className="hidden tablet:block w-20">
                <img src="/assets/logoAnimeplus.webp" className=" block" />
              </div>
              <div className="block w-20 tablet:hidden">
                <img src="/assets/logoAnimeplusHome.webp" className="block" />
              </div>
            </Link>
          </div>
        </section>
        <Menu className="text-3xl items-end cursor-pointer md:hidden" />
        <section className="md:static md:min-h-fit absolute min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex">
          <div className="hidden md:block flex-shrink flex-grow-0 justify-start px-2">
            <div className="inline-block">
              <div className="inline-flex items-center max-w-full">
                <button className="flex items-center flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1">
                  <Search className="mr-1" />
                  <span className="block flex-grow flex-shrink overflow-hidden">
                    Rechercher
                  </span>
                </button>
              </div>
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
                <li key={link.label}>
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
