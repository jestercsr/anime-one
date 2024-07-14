import { Inter } from "next/font/google";
import "../globals.css";
import Navbar from "../accueil/ui/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin | Anime ONE",
  description:
    "Regarder tous vos animés en streaming avec toujours plus de manga",
};

export default function AdminLayout({ children }) {
  return (
    <div className={inter.className}>
      <Navbar className="bg-red-600 text-slate-50" />
      {children}
    </div>
  );
}
