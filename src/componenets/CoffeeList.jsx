import CoffeeCard from "./CoffeeCard";

const coffees = [
  {
    id: 1,
    name: "Espresso",
    description: "Strong and bold coffee",
    price: 149,
  },
  {
    id: 2,
    name: "Cappuccino",
    description: "Rich and foamy coffee",
    price: 199,
  },
  {
    id: 3,
    name: "Latte",
    description: "Smooth and creamy coffee",
    price: 179,
  },
];

export default function CoffeeList({ onAddToCart }) {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {coffees.map((coffee) => (
        <CoffeeCard
          key={coffee.id}
          name={coffee.name}
          description={coffee.description}
          price={coffee.price}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
}
