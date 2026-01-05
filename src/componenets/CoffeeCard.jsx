export default function CoffeeCard({ name, description, price, onAddToCart }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-gray-600">{description} and foamy coffee</p>
      <p className="front-semibold mt-2">Rs.{price}</p>
      <button onClick={onAddToCart} className="mt-3 bg-[#6f4e37] text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}
