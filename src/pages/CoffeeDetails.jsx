import { useParams } from "react-router";
import { useCart } from "../context/CartContext";


const coffees = [
  { id: 1, name: "Espresso", description: "Strong and bold", price: 149 },
  { id: 2, name: "Cappuccino", description: "Rich and foamy", price: 199 },
  { id: 3, name: "Latte", description: "Smooth and creamy", price: 179 },
];

export default function CoffeeDetail() {

  const { id } = useParams();
  const { addToCart } = useCart();

  const coffee = coffees.find(
    (c) => c.id === Number(id)
  );

  if (!coffee) {
    return <p className="p-6">Coffee not found</p>;
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold">{coffee.name}</h2>
      <p className="text-gray-600 mt-2">{coffee.description}</p>
      <p className="font-semibold mt-4">Rs.{coffee.price}</p>

      <button
        onClick={() => addToCart(coffee)}
        className="mt-4 bg-[#6f4e37] text-white px-4 py-2 rounded"
      >
        Add to cart
      </button>
    </div>
  );
}
