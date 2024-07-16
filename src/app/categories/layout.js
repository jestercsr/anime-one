import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../accueil/ui/NavBar";
import Footer from "../ui/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Catégorie | Anime ONE",
  description:
    "Regarder tous vos animés en streaming avec toujours plus de manga",
};

export default function AdminLayout({ children }) {
  return (
    <div className={inter.className}>
      <Navbar className="bg-cyan-900 text-slate-50" />
      {children}
      <footer><Footer /></footer>
    </div>
  );
}
