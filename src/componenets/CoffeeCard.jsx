export default function CoffeeCard() {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-bold">Cappuccino</h2>
      <p className="text-gray-600">Rich and foamy coffee</p>
      <p className="front-semibold mt-2">Rs.199</p>
      <button className="mt-3 bg-[#6f4e37] text-white px-4 py-2 rounded">
        Add to Cart
      </button>
    </div>
  );
}
