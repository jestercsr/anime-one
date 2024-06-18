import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Films | Anime +",
  description: "Regarder tous vos films animés en streaming avec toujours plus de manga",
};

export default function RootLayout({ children }) {
  return (
    <div className={inter.className}>
      {children}
    </div>
  );
}