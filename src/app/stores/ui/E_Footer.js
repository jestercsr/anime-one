import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      
      <div className="grid grid-cols-3 text-slate-50 justify-items-center"> 
        <div>
        <Link href="/stores">
          <img src="/assets/LogoAnimeONE/LogoFooter.webp" className="w-[30%]" />
      </Link>
        <h4>Contact</h4>  
        </div>
        <div>
          <h4>Test</h4>
        </div>
        <div>
          <h4>Test 2</h4>
        </div>
      </div>
    </div>
  );
}
