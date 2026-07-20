import "../../globals.css";
import { CartProvider } from "../../../providers/CartContext";

export default function PromotionLayout({ children }) {
  return (
    <div>
      <CartProvider>{children}</CartProvider>
    </div>
  );
}
