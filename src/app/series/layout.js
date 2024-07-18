import { Inter, Roboto } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Séries | Anime ONE",
  description: "Regarder toutes vos séries animés en streaming avec toujours plus de manga",
};

export default function SeriesLayout({ children }) {
  return (
    <div className={roboto.className}>
      {children}
    </div>
  );
}