export default function Cart({ cart, onIncrement, onDecrement }) {

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        Your cart is empty
      </div>
    );
  }

  return (
    <div className="p-6 max-w-xl mx-auto bg-while rounded shadow">
      <h2 className="text-xl font-bold mb-4">Your Cart</h2>

      <ul className="space-y-4">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-gray-500">
                Rs.{item.price} x {item.qty}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onDecrement(item.id)}
                className="px-2 py-1 bg-gray-300 rounded">-</button>
              <span>{item.qty}</span>
              <button
                onClick={() => onIncrement(item.id)}
                className="px-2 py-1 bg-gray-300 rounded">+</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

}
