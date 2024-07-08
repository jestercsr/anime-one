"use client";

import React from "react";
import Footer from "./ui/Footer";
import { AvailableComponent } from "./ui/AvailableComponent";
import { EmailHomeComponent } from "./ui/EmailHomeComponent";
import Info from "./ui/Info";
import Faq from "./ui/Faq";
import Link from "next/link";


export default function Home() {
  return (
    <main>
      <nav className="flex justify-end p-1 bg-neutraler-50">
        <Link href="/accueil">
        <button className="bg-red-600 text-slate-50 p-[5px] md:p-2 rounded-xl">S'identifier</button></Link>
      </nav>
      <EmailHomeComponent />
      <Info />
      <AvailableComponent />
      <Faq />
      <Footer />
    </main>
  );
}
