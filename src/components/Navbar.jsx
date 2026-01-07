import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart, clearCart } = useCart();

  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <nav className="bg-[#3e2723] text-white p-4 flex justify-between">
      <h1 className="text-xl font-bold">☕ Coffee Store</h1>
      <div className="flex items-center gap-4">
        <span>Cart ({cartCount})</span>
        <button onClick={clearCart}
          className="bg-red-500 px-3 py-1 rounded text-sm hover:bg-red-600"
          disabled={cartCount === 0}>
          Clear Cart
        </button>
      </div>
    </nav>
  );
}
