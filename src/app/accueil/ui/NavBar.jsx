"use client";

import Link from "next/link";
import {
  Newspaper,
  BookOpenText,
  Clapperboard,
  Film,
  Search,
  Home,
  ShoppingCart,
  CircleUserRound,
} from "lucide-react";

export default function Navbar(props) {
  return (
    <div className={props.className}>
      <nav className=" flex w-screen justify-between items-center w-full md:max-w-screen-md text-md lg:max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl ">
        <div>
          <Link href={"/accueil"}>
            <div className="hidden tablet:block w-20">
              <img src="assets/logoAnimeplus.png" className=" block" />
            </div>
            <div className="block w-20 tablet:hidden">
              <img src="assets/logoAnimeplusHome.png" className="block" />
            </div>
          </Link>
        </div>

        <div className="hidden sm:block flex-shrink flex-grow-0 justify-start px-2">
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

        <div className="flex">
          <div className="flex justify-end items-center relative">
            <div className="flex mr-4 items-center">
              <ul className="flex items-center justify-between space-x-16 list-none m-auto laptop:flex items-center justify-between space-x-40 list-none m-auto">
                <li className="inline-flex ">
                  <Link href="/films" className="inline-flex items-center">
                    <Film className="mr-1" />
                    Films
                  </Link>
                </li>
                <li>
                  <Link
                    href="/series"
                    className="inline-flex items-center"
                  >
                    <Clapperboard className="mr-1" />
                    Séries
                  </Link>
                </li>
                <li>
                  <Link href="/scans" className="inline-flex items-center">
                    <BookOpenText className="mr-1" />
                    Scans
                  </Link>
                </li>
                <li>
                  <Link
                    href="/stores"
                    className="inline-flex items-center"
                  >
                    <ShoppingCart className="mr-1" />
                    Boutique
                  </Link>
                </li>
                <li>
                  <Link
                    href="/post_edit"
                    className="inline-flex items-center m-5"
                  >
                    <Newspaper className="mr-1" />
                    Feeds
                  </Link>
                </li>
                <div className="flex">
                  <div className="relative">
                    <button className="inline-flex items-end space-x-16">
                      <CircleUserRound />
                    </button>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}