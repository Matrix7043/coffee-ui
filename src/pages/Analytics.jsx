import { Link } from "react-router";

export default function Analytics() {
  return (
    <div className="p-6 grid gap-3">
      <h1 className="text-2xl font-bold">Analytics</h1>
      <p>Predictions will show up here later</p>
      <Link to="/">← Back</Link>
    </div>
  );
}
