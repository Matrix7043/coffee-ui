import CoffeeCard from "./CoffeeCard";

export default function CoffeeList() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
    </div>
  );
}
