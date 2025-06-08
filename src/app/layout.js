import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import { ProfileProvider } from "../../providers/ProfileContext";
import { Analytics } from "@vercel/analytics/react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "./error";
import { AvatarProvider } from "../../providers/AvatarContext";
import CookiesPage from "./lib/Cookies";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Anime ONE | Bienvenue",
  description:
    "Projet final. Regardez des animes à succès, lire des scans et plus",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={roboto.className}>
        <ErrorBoundary fallback={<Error />}>
          <ProfileProvider>
            <AvatarProvider>
              {children}
              <CookiesPage />
              <Analytics />
            </AvatarProvider>
          </ProfileProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
