import "../../globals.css";
import { CartProvider } from "../../../providers/CartContext";

export default function NewsLayout({ children }) {
  return (
    <div>
      <CartProvider>{children}</CartProvider>
    </div>
  );
}
