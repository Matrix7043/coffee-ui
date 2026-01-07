import { useCart } from "../context/CartContext";
import { Link } from "react-router";

export default function Navbar() {
  const { cart, clearCart } = useCart();

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="bg-[#3e2723] text-white p-4 flex justify-between">
      <Link to="/" className="text-xl font-bold">☕ Coffee Store</Link>
      <div className="flex items-center gap-4">
        <Link to="/cart">Cart ({cartCount})</Link>
        <button onClick={clearCart}
          className="bg-red-500 px-3 py-1 rounded text-sm hover:bg-red-600"
          disabled={cartCount === 0}>
          Clear Cart
        </button>
      </div>
    </nav>
  );
}
