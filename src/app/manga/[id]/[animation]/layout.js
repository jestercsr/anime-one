import React from "react";
import { Inter } from "next/font/google";
import "../../../../../src/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

const formatTitle = (string) => {
  if (!string) return "";
  return string
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export async function generateMetadata({ params }) {
  const { id, animation } = params;
  const formattedTitle = formatTitle(id);
  const formattedAnimation = formatTitle(animation);
  return {
    title: `${formattedTitle} ${formattedAnimation} | Anime ONE`,
    description: `Tous les ${formattedAnimation} de ${formattedTitle} disponibles sur Anime ONE`,
  };
}

export default function AnimationLayout({ children }) {
  return <div className={inter.className}>{children}</div>;
}
