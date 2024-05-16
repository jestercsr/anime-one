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
        <img src="assets/logoAnimeplus.png" />

        <ul className="">
          <li>
            <Link href="/accueil">
              <Home className="inline-flex align-middle mr-1" />
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/search">
              <Search className="inline-flex align-middle mr-1" />
              Rechercher
            </Link>
          </li>
          <li>
            <Link href="/films">
              <Film className="inline-flex align-middle mr-1" />
              Films
            </Link>
          </li>
          <li>
            <Link href="/series">
              <Clapperboard className="inline-flex align-middle mr-1" />
              Séries
            </Link>
          </li>
          <li>
            <Link href="/scans">
              <BookOpenText className="inline-flex align-middle mr-1" />
              Scans
            </Link>
          </li>
          <li>
            <Link href="/stores">
              <ShoppingCart className="inline-flex align-middle mr-1" />
              Boutique
            </Link>
          </li>
          <li>
            <Link href="/post_edit">
              <Newspaper className="inline-flex align-middle mr-1" />
              Feeds
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
