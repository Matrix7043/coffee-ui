import { Link } from "react-router";

export default function Success() {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold mb-4"> Order Placed</h2>
      <p className="text-gray-600 mb-6">
        Thank you for your purchase</p>

      <Link to="/"
        className="text-blue-600 underline">
        Back to Home</Link>
    </div>
  );
}
