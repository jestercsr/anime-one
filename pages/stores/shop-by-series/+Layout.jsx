import "@/globals.css";
import { CartProvider } from "../../../providers/CartContext";

export default function ShopSeriesLayout({ children }) {
  return (
    <div>
      <CartProvider>{children}</CartProvider>
    </div>
  );
}
