import { Link } from "react-router";

const products = [
  { id: 1, name: "Espresso", price: 120, stock: 15 },
  { id: 2, name: "Cappuccino", price: 150, stock: 12 },
  { id: 3, name: "Latte", price: 160, stock: 9 },
  { id: 4, name: "Mocha", price: 170, stock: 7 },
  { id: 5, name: "Cold Coffee", price: 140, stock: 10 },
  { id: 6, name: "Iced Latte", price: 165, stock: 5 },
  { id: 7, name: "Filter Coffee", price: 80, stock: 20 },
  { id: 8, name: "Brownie", price: 60, stock: 25 },
  { id: 9, name: "Banana Cake", price: 70, stock: 18 },
  { id: 10, name: "Croissant", price: 90, stock: 8 },
];

export default function Home() {
  const order = (id) => {
    console.log("Order product:", id);
  };

  return (
    <div className="p-6 grid gap-4">
      <nav className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Coffee Shop Menu</h1>
        <Link to="/analytics">Analytics</Link>
      </nav>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(p => (
          <div key={p.id} className="rounded-2xl shadow p-4 grid gap-2">
            <h2 className="text-xl font-semibold">{p.name}</h2>
            <p>₹{p.price}</p>
            <p className="text-sm">Stock: {p.stock}</p>
            <button
              onClick={() => order(p.id)}
              disabled={p.stock === 0}
              className="rounded-2xl shadow-sm p-2"
            >
              {p.stock === 0 ? "Out of stock" : "Order"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
