import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router";
import Home from "./pages/Home.jsx";
import CartPage from "./pages/CartPage.jsx";
import CoffeeDetail from "./pages/CoffeeDetails.jsx";
import Success from "./pages/Success.jsx"
import Checkout from "./pages/Checkout.jsx"


export default function App() {

  return (
    <div className="min-h-screen bg-[#f5f5f5] p-6">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/coffee/:id" element={<CoffeeDetail />} />
        <Route path="/success" element={<Success />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

    </div>
  );
}
