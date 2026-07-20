import "@/globals.css";
import { CartProvider } from "../../../providers/CartContext";

export default function MangaLivreLayout({ children }) {
  return (
    <div>
      <CartProvider>{children}</CartProvider>
    </div>
  );
}
