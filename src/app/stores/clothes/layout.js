import { Inter, Roboto } from "next/font/google";
import "../../globals.css";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Error from "../error";
import { CartProvider } from "../../../../providers/CartContext";
 
const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vêtements | Anime ONE Store",
  description: "Explorer tous nos vêtements de la boutique en ligne avec toujours plus de manga",
};

export default function ClothesLayout({ children }) {
  return (
    <div className={roboto.className}>
      <ErrorBoundary fallback={<Error/>}>
      <CartProvider>{children}</CartProvider>
      </ErrorBoundary>
    </div>
  );
}