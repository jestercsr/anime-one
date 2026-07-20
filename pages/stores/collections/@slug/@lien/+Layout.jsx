import "@/globals.css";
import { CartProvider } from "../../../../../providers/CartContext";

export default function SlugAccessoiresLayout({ children }) {
  return (
    <div>
      <CartProvider>{children}</CartProvider>
    </div>
  );
}
