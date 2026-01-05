import Navbar from "./componenets/Navbar";
import CoffeeList from "./componenets/CoffeeList";
import { useState } from "react";

export default function App() {
  const [cartCount, setCartCount] = useState(0);

  function addToCart() {
    setCartCount((prev) => prev + 1);
  }
  function clearCart() {
    setCartCount(0);
  }
  return (
    <div className="min-h-screen bg-[#f5f5f5] p-6">
      <Navbar cartCount={cartCount} clearCart={clearCart} />
      <CoffeeList onAddToCart={addToCart} />
    </div>
  );
}
