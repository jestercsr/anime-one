import "@/globals.css";
import { CartProvider } from "../../../providers/CartContext";

export default function CollectionsLayout({ children }) {
  return (
    <div>
      <CartProvider>{children}</CartProvider>
    </div>
  );
}
