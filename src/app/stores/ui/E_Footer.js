import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div>
      <div>
        <Link href="/stores">
          <img src="/assets/LogoFooter.webp" className=" w-1/12" />
        </Link>
        <h4>Contact</h4>
      </div>
    </div>
  );
}
