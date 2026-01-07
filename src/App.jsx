import Navbar from "./components/Navbar";
import CoffeeList from "./components/CoffeeList";
import Cart from "./components/Cart.jsx"


export default function App() {

  return (
    <div className="min-h-screen bg-[#f5f5f5] p-6">
      <Navbar />
      <CoffeeList />
      <Cart />
    </div>
  );
}
