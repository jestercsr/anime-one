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
} from "lucide-react";

export default function Navbar(props) {
  return (
    <div>
      <nav className={props.className}>
        <img src="assets/logoAnimeplus.png" className="w-20"/>

        <ul className="flex justify between gap-5 list-none w-10/12">
          <li className="inlline-flex">
            <Link href="/accueil">
              <Home className="inline-flex items-center mr-1" />
              Accueil
            </Link>
          </li>
          <li className="inlline-flex">
            <Link href="/search">
              <Search className="inline-flex items-center mr-1" />
              Rechercher
            </Link>
          </li>
          <li className="inlline-flex">
            <Link href="/films">
              <Film className="inline-flex items-center mr-1" />
              Films
            </Link>
          </li>
          <li className="inlline-flex">
            <Link href="/series">
              <Clapperboard className="inline-flex items-center mr-1" />
              Séries
            </Link>
          </li>
          <li className="inlline-flex">
            <Link href="/scans">
              <BookOpenText className="inline-flex items-center mr-1" />
              Scans
            </Link>
          </li>
          <li className="inlline-flex">
            <Link href="/stores">
              <ShoppingCart className="inline-flex items-center mr-1" />
              Boutique
            </Link>
          </li>
          <li className="inlline-flex">
            <Link href="/post_edit">
              <Newspaper className="inline-flex items-center mr-1" />
              Feeds
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
