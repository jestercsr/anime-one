import { Inter, Roboto } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Anime ONE | Accueil",
  description: "Le site de streaming avec toujours plus de manga",
};

export default function HomeLayout({ children }) {
  return (
    <div className={roboto.className}>
      {children}
    </div>
  );
}