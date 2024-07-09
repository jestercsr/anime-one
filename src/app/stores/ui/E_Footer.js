import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <Link href="/stores">
          <img src="/assets/boutiques/LogoFooter.webp" className=" w-1/12" />
      </Link>
      <div className="grid grid-cols-3"> 
        <div>
        <h4>Contact</h4>  
        </div>
        <div></div>
      </div>
    </div>
  );
}
