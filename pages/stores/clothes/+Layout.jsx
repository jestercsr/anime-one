import "../../globals.css";
import { CartProvider } from "../../../providers/CartContext";

export default function ClothesLayout({ children }) {
  return (
    <div>
      <CartProvider>{children}</CartProvider>
    </div>
  );
}
