import Navbar from "./componenets/Navbar";
import CoffeeList from "./componenets/CoffeeList";
import { useState } from "react";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(coffee) {
    setCart((prevCart) => {
      const existing = prevCart.find(item => item.id === coffee.id);

      if (existing) {
        return prevCart.map(item =>
          item.id === coffee.id ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prevCart, { ...coffee, qty: 1 }];
    });
  }
  function clearCart() {
    setCart([]);
  }
  return (
    <div className="min-h-screen bg-[#f5f5f5] p-6">
      <Navbar cart={cart} clearCart={clearCart} />
      <CoffeeList onAddToCart={addToCart} />
    </div>
  );
}
