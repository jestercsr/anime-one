import { Inter, Roboto } from "next/font/google";
import "../globals.css";
import Navbar from "../accueil/ui/NavBar";
import Footer from "../ui/Footer";

const inter = Inter({ subsets: ["latin"] });
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Admin | Anime ONE",
  description:
    "Regarder tous vos animés en streaming avec toujours plus de manga",
};

export default function AdminLayout({ children }) {
  return (
    <div className={roboto.className}>
      <Navbar className="bg-red-600 text-slate-50" />
      {children}
      <footer><Footer /></footer>
    </div>
  );
}
