"use client";
import React from "react";
import Link from "next/link";

export function Categories() {
  return (
    <>
      <div className="mt-3 text-white">
        <h2 className="text-xl ml-1">Catégories</h2>
        <ul className="grid grid-cols-2 md:grid-rows-4 md:grid-cols-1">
          <div className="grid tablet:grid-rows-4 md:grid-cols-4 justify-around my-5 md:mr-2.5 md:justify-items-center">
            <li>
              <Link href="/categories/action">
                <button className="px-5 py-[5px] md:px-8 md:py-2.5 bg-gradient-to-b from-emeralder-100 to-emeralder-900">
                  Action
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/adventure">
                <button className="px-5 py-[5px] md:px-8 md:py-2.5 bg-gradient-to-b from-emeralder-100 to-emeralder-900">
                  Adventure
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/combats">
                <button className="px-5 py-[5px] md:px-8 md:py-2.5 bg-gradient-to-b from-emeralder-100 to-emeralder-900">
                  Combats
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/isekai">
                <button className="px-5 py-[5px] md:px-8 md:py-2.5 bg-gradient-to-b from-emeralder-100 to-emeralder-900">
                  Isekai
                </button>
              </Link>
            </li>
          </div>
          <div className="grid tablet:grid-rows-5 md:grid-cols-5 justify-around my-5 md:mr-2.5 md:justify-items-center">
            <li>
              <Link href="/categories/comedies">
                <button className="px-5 py-[5px] md:px-8 md:py-2.5 bg-gradient-to-b from-emeralder-100 to-emeralder-900 mb-2">
                  Comédies
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/drame">
                <button className="px-5 py-[5px] md:px-8 md:py-2.5 bg-gradient-to-b from-emeralder-100 to-emeralder-900 mb-2">
                  Drame
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/fantaisie">
                <button className="px-5 py-[5px] md:px-8 md:py-2.5 bg-gradient-to-b from-emeralder-100 to-emeralder-900 mb-2">
                  Fantaisie
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/sports">
                <button className="px-5 py-[5px] md:px-8 md:py-2.5 bg-gradient-to-b from-emeralder-100 to-emeralder-900 mb-2">
                  Sports
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/romance">
                <button className="px-5 py-[5px] md:px-8 md:py-2.5 bg-gradient-to-b from-emeralder-100 to-emeralder-900">
                  Romance
                </button>
              </Link>
            </li>
          </div>
          <div className="grid tablet:grid-rows-4 md:grid-cols-4 justify-around my-5 md:mr-2.5 md:justify-items-center">
            <li>
              <Link href="/categories/ecole">
                <button className="px-5 py-[5px] md:px-8 md:py-2.5 bg-gradient-to-b from-emeralder-100 to-emeralder-900 mb-2">
                  Ecole
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/horreur">
                <button className="px-5 py-[5px] md:px-8 md:py-2.5 bg-gradient-to-b from-emeralder-100 to-emeralder-900 mb-2">
                  Horreur
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/ecchi">
                <button className="px-5 py-[5px] md:px-8 md:py-2.5 bg-gradient-to-b from-emeralder-100 to-emeralder-900 mb-2">
                  Ecchi
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/mystere">
                <button className="px-5 py-[5px] md:px-8 md:py-2.5 bg-gradient-to-b from-emeralder-100 to-emeralder-900">
                  Mystère
                </button>
              </Link>
            </li>
          </div>
          <div className="grid tablet:grid-rows-3 md:grid-cols-3 justify-around my-5 md:mr-2.5 md:justify-items-center">
            <li>
              <Link href="/categories/seinen">
                <button className="px-5 py-[5px] md:px-8 md:py-2.5 bg-gradient-to-b from-emeralder-100 to-emeralder-900">
                  Seinen
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/shonen">
                <button className="px-5 py-[5px] md:px-8 md:py-2.5 bg-gradient-to-b from-emeralder-100 to-emeralder-900">
                  Shônen
                </button>
              </Link>
            </li>
            <li>
              <Link href="/categories/shojo">
                <button className="px-5 py-[5px] md:px-8 md:py-2.5 bg-gradient-to-b from-emeralder-100 to-emeralder-900">
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
