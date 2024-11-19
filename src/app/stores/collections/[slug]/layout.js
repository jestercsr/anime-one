import { Inter, Roboto } from "next/font/google";
import "../../../globals.css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "../../error";
import { CartProvider } from "../../../../../providers/CartContext";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({ params }) {
  const capitalizeFirstLetter = (string) => {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  const { id } = params.slug;
  const capitalizedId = capitalizeFirstLetter(id);
  return {
    title: `${capitalizedId} | Anime ONE Store`,
    description: `Bienvenue sur la page de collection du manga ${capitalizedId} dans la boutique en ligne`,
  };
}

export default function CollectionsLayout({ children }) {
  return (
    <div className={roboto.className}>
      <ErrorBoundary fallback={<Error />}><CartProvider>{children}</CartProvider></ErrorBoundary>
    </div>
  );
}
