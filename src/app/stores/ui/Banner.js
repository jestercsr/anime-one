import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <div className="py-10">
      <div className="flex flex-col justify-center items-center relative">
        <img
          src="/assets/TopScreen/Boutiques/Promotion.webp"
          alt="Banner" className="w-full h-[200px] md:h-[400px] lg:h-[600px]"
        />
        <Link href="/stores/collections/promotions">
          <button className="absolute bottom-[2px] p-[4px] text-xs left-[45%] bg-[#fd4607] hover:bg-[#BB3406] text-slate-50 rounded-full md:bottom-2 md:p-2 md:left-[50%] md:text-base lg:p-3 lg:bottom-10">
            Shop Now
          </button>
        </Link>
      </div>
    </div>
  );
}
