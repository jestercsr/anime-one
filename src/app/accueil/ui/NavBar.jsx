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

        <ul className="flex justify-between space-x-32 list-none m-auto">
          <li className="flex justify-center">
            <Link href="/accueil" className="inline-flex items-center">
              <Home className="mr-1" />
              Accueil
            </Link>
          </li>
          <li className="inline-flex">
            <Link href="/search" className="inline-flex items-center">
              <Search className="mr-1" />
              Rechercher
            </Link>
          </li>
          <li className="inline-flex">
            <Link href="/films" className="inline-flex items-center">
              <Film className="mr-1" />
              Films
            </Link>
          </li>
          <li className="inline-flex">
            <Link href="/series" className="inline-flex items-center">
              <Clapperboard className="mr-1" />
              Séries
            </Link>
          </li>
          <li className="inline-flex">
            <Link href="/scans" className="inline-flex items-center">
              <BookOpenText className="mr-1" />
              Scans
            </Link>
          </li>
          <li className="inline-flex">
            <Link href="/stores" className="inline-flex items-center">
              <ShoppingCart className="mr-1" />
              Boutique
            </Link>
          </li>
          <li className="inline-flex">
            <Link href="/post_edit" className="inline-flex items-center">
              <Newspaper className="mr-1" />
              Feeds
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
