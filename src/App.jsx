import Navbar from "./componenets/Navbar"
import CoffeeList from "./componenets/CoffeeList"

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f5] p-6">
      <Navbar />
      <CoffeeList />
    </div>
  );
}
