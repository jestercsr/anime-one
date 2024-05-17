"use client";

import React from "react";
import { Button } from "../components/ui/button";
import Footer from "./ui/Footer";
import { AvailableComponent } from "./ui/AvailableComponent";
import { EmailHomeComponent } from "./ui/EmailHomeComponent";
import Info from "./ui/Info";
import Faq from "./ui/Faq";

export default function Home() {
  return (
    <main>
      <nav className="flex justify-end p-1 bg-white-claire">
        <Button variant="destructive">S'identifier</Button>
      </nav>
      <EmailHomeComponent />
      <Info />
      <AvailableComponent />
      <Faq />
      <Footer />
    </main>
  );
}
