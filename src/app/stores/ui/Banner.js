import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <div className="py-10">
      <div className="justify-center items-center relative">
      <Link href="/stores/promotions">
        <img
          src="/assets/TopScreen/Boutiques/Promotion.webp"
          alt="Banner" className="hidden md:block w-full cursor-pointer"
        />
        <img src="/assets/TopScreen/Boutiques/Promo.webp" alt="BannerMobile" className="md:hidden w-full cursor-pointer" />
        </Link>
      </div>
    </div>
  );
}
