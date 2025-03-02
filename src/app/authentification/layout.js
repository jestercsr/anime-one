import { Inter, Roboto } from "next/font/google";
import "../globals.css";
import { ProfileProvider } from "../../../providers/ProfileContext";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Authentification | Anime ONE",
  description: "Connectez-vous ou Inscrivez-vous pour regardez des animes à succès, lire des scans et plus",
};

export default function AuthLayout({ children }) {
  return (
    <div className={roboto.className}>
      <ProfileProvider>{children}</ProfileProvider>
    </div>
  );
}
