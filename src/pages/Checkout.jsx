import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router";

export default function Checkout() {

  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  function placeOrder() {
    if (cart.length === 0) return;

    clearCart();
    navigate("/success")
  }

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center">
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Checkout</h2>

      <ul className="space-y-3">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between">
            <span>
              {item.name} x {item.qty}
            </span>
            <span>Rs.{item.price * item.qty}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 font-bold text-right">
        Total: Rs.{total}
      </div>

      <button onClick={placeOrder}
        className="mt-6 w-full bg-green-600 text-white py-2 rounded">
        Place Order
      </button>
    </div>
  );

}
