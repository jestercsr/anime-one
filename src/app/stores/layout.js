import { Inter, Roboto } from "next/font/google";
import "../globals.css";
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Boutiques | Anime ONE ",
  description: "Explorer la boutique en ligne avec toujours plus de manga",
};

export default function RootLayout({ children }) {
  return (
    <div className={roboto.className}>
      {children}
    </div>
  );
}