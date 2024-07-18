import { Inter, Roboto } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Tous nos Mangas | Anime ONE",
  description: "Regarder tous vos mangas en streaming avec toujours plus de manga",
};

export default function MoviesLayout({ children }) {
  return (
    <div className={roboto.className}>
      {children}
    </div>
  );
}