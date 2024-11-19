import Link from "next/link";
import React from "react";

export default function Features() {
  const feat = [
    {
      logo: "/assets/boutiques/logo/logo_dandadan.webp",
      href: "dandadan",
      title: "DanDaDan"
    },
    {
      logo: "/assets/boutiques/logo/logo_chainsaw.webp",
      href: "chainsaw-man",
      title: "Chainsaw Man"
    },
    {
      logo: "/assets/boutiques/logo/logo_ds.webp",
      href: "demon-slayer-kimetsu-no-yaiba",
      title: "Demon Slayer"
    },
    {
      logo: "/assets/boutiques/logo/logo_op.webp",
      href: "one-piece",
      title: "One Piece"
    },
    {
      logo: "/assets/boutiques/logo/logo_spyfamily.webp",
      href: "spy-x-family",
      title: "Spy x Family"
    },
    {
      logo: "/assets/boutiques/logo/logo_jojo.webp",
      href: "jojo-bizarre-adventure",
      title: "Jojo's Bizarre Adventure"
    },
    {
      logo: "/assets/boutiques/logo/logo_jjk.webp",
      href: "jujutsu-kaisen",
      title: "Jujustu Kaisen"
    },
    {
      logo: "/assets/boutiques/logo/logo_4knights.webp",
      href: "four-knights-of-the-apocalypse",
      title: "Four Knights of the Apocalypse"
    },
    {
      logo: "/assets/boutiques/logo/logo_naruto.webp",
      href: "naruto",
      title: "Naruto"
    },
    {
      logo: "/assets/boutiques/logo/logo_sao.webp",
      href: "sword-art-online",
      title: "Sword Art Online"
    },
    {
      logo: "/assets/boutiques/logo/logo_inazuma.webp",
      href: "inazuma-eleven",
      title: "Inzauma Eleven"
    },
    {
      logo: "/assets/boutiques/logo/logo_mushoku.webp",
      href: "mushoku-tensei",
      title: "Mushoku Tensei: Jobless Reincarnation"
    },
  ];
  return (
    <div className="hidden md:flex max-w-screen-xl items-center justify-items-center md:justify-between m-auto">
      {feat.map((feature, i) => {
        return (
          <div key={i}>
            <Link href={`/stores/collections/${feature.href}`}>
              <img src={feature.logo} alt={feature.href} className="w-[60%] hover:border border-sky-950" title={feature.title} />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
