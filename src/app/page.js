"use client";

import React from "react";
import Footer from "./ui/Footer";
import { AvailableComponent } from "./ui/AvailableComponent";
import { EmailHomeComponent } from "./ui/EmailHomeComponent";
import Info from "./ui/Info";


export default function Home() {
  return (
    <main>
      <nav className="flex justify-end p-1 bg-neutraler-50">
        <button className="bg-red-600 text-slate-50 p-2 rounded-xl">S'identifier</button>
      </nav>
      <EmailHomeComponent />
      <Info />
      <AvailableComponent />
      <Footer />
    </main>
  );
}
