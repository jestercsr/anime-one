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
      <Navbar className="bg-red-600 text-slate-50" liste="bg-red-600 text-slate-50 absolute left-0 w-full divide-y-2 divide-slate-50 border-gray-300 mt-1 z-10 list-none" listing="cursor-pointer p-2 hover:bg-gray-200 hover:text-red-600 border-t-0"/>
      {children}
      <footer><Footer /></footer>
    </div>
  );
}
