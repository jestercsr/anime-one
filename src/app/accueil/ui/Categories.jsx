"use client";
import React from "react";
import Link from "next/link";

export function Categories() {
  return (
    <>
      <div className="mt-3 text-white">
        <h2 className="text-xl ml-1">Catégories</h2>
        <ul className="flex flex-col justify-between">
          <div className="flex flex-row justify-around my-5 mr-2.5">
            <li>
              <Link href="/categories/action">
                <button className="px-8 py-2.5 bg-gradient-to-b from-turquoise-claire to-turquoise-dark">
                  Action
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/adventure">
                <button className="px-8 py-2.5 bg-gradient-to-b from-turquoise-claire to-turquoise-dark">
                  Adventure
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/combats">
                <button className="px-8 py-2.5 bg-gradient-to-b from-turquoise-claire to-turquoise-dark">
                  Combats
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/isekai">
                <button className="px-8 py-2.5 bg-gradient-to-b from-turquoise-claire to-turquoise-dark">
                  Isekai
                </button>
              </Link>
            </li>
          </div>
          <div className="flex flex-row justify-around my-5 mr-2.5">
            <li>
              <Link href="/categories/comedies">
                <button className="px-8 py-2.5 bg-gradient-to-b from-turquoise-claire to-turquoise-dark">
                  Comédies
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/drame">
                <button className="px-8 py-2.5 bg-gradient-to-b from-turquoise-claire to-turquoise-dark">
                  Drame
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/fantaisie">
                <button className="px-8 py-2.5 bg-gradient-to-b from-turquoise-claire to-turquoise-dark">
                  Fantaisie
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/sports">
                <button className="px-8 py-2.5 bg-gradient-to-b from-turquoise-claire to-turquoise-dark">
                  Sports
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/romance">
                <button className="px-8 py-2.5 bg-gradient-to-b from-turquoise-claire to-turquoise-dark">
                  Romance
                </button>
              </Link>
            </li>
          </div>
          <div className="flex flex-row justify-around my-5 mr-2.5">
            <li>
              <Link href="/categories/ecole">
                <button className="px-8 py-2.5 bg-gradient-to-b from-turquoise-claire to-turquoise-dark">
                  Ecole
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/horreur">
                <button className="px-8 py-2.5 bg-gradient-to-b from-turquoise-claire to-turquoise-dark">
                  Horreur
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/ecchi">
                <button className="px-8 py-2.5 bg-gradient-to-b from-turquoise-claire to-turquoise-dark">
                  Ecchi
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/mystere">
                <button className="px-8 py-2.5 bg-gradient-to-b from-turquoise-claire to-turquoise-dark">
                  Mystère
                </button>
              </Link>
            </li>
          </div>
          <div className="flex flex-row justify-around my-5 mr-2.5">
            <li>
              <Link href="/categories/seinen">
                <button className="px-8 py-2.5 bg-gradient-to-b from-turquoise-claire to-turquoise-dark">
                  Seinen
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/shonen">
                <button className="px-8 py-2.5 bg-gradient-to-b from-turquoise-claire to-turquoise-dark">
                  Shônen
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/shojo">
                <button className="px-8 py-2.5 bg-gradient-to-b from-turquoise-claire to-turquoise-dark">
                  Shôjo
                </button>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}
