import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata = {
  title: "Anime ONE | Bienvenue",
  description: "Regardez des animes à succès, lire des scans et plus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}