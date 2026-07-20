import "../globals.css";
import { CartProvider } from "../../providers/CartContext";

export default function StoresLayout({ children }) {
  return (
    <div>
      <CartProvider>{children}</CartProvider>
    </div>
  );
}
