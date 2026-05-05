import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, total } = useCart();

  return (
    <main className="container mt-20 py-6">
      <h1 className="text-2xl font-semibold mb-4">Your Cart</h1>

      {cart.length === 0 && <p>No items yet.</p>}

      {cart.map((p) => (
        <div key={p.id} className="flex justify-between border-b py-3">
          <div>
            <p>{p.name}</p>
            <p className="text-sm text-neutral-500">Qty: {p.qty}</p>
          </div>
          <div className="text-right">
            <p>₹{p.price * p.qty}</p>
            <button
              onClick={() => removeFromCart(p.id)}
              className="text-sm text-red-500"
            >
              Remove
            </button>
          </div>
        </div>
      ))}

      {cart.length > 0 && (
        <h2 className="text-xl font-bold mt-4">Total: ₹{total}</h2>
      )}
    </main>
  );
}