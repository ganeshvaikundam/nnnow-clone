import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { cart, removeFromCart, updateQty, total, count } = useCart();

  if (count === 0) {
    return (
      <main className="min-h-[70vh] flex flex-col items-center justify-center gap-4 px-4">
        <span className="text-5xl opacity-20">&#xe904;</span>
        <h2 className="font-bold text-lg tracking-[2px] uppercase">Your bag is empty</h2>
        <p className="text-sm text-neutral-400 text-center">Looks like you haven't added anything yet.</p>
        <Link to="/products" className="border-[1.5px] border-black px-8 py-3 text-xs font-bold tracking-[2px] uppercase hover:bg-black hover:text-white transition">
          CONTINUE SHOPPING
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-[1230px] mx-auto px-4 py-8">
      <h1 className="font-bold text-xl tracking-[2px] uppercase mb-8">My Bag ({count} items)</h1>
      <div className="grid md:grid-cols-[1fr_360px] gap-8">
        {/* Items */}
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={`${item.id}-${item.selectedSize}`} className="flex gap-4 border-b pb-4">
              <img src={item.images[0]} alt={item.name} className="w-24 h-32 object-cover bg-neutral-50 flex-shrink-0 rounded" />
              <div className="flex-1 min-w-0">
                <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-0.5">{item.brand}</p>
                <p className="text-sm font-medium leading-snug mb-1">{item.name}</p>
                <p className="text-xs text-neutral-400 mb-3">Size: <strong>{item.selectedSize}</strong></p>
                <div className="flex items-center gap-3">
                  {/* Qty */}
                  <div className="flex items-center border border-neutral-300">
                    <button onClick={() => updateQty(item.id, item.qty - 1)}
                      className="w-8 h-8 text-lg flex items-center justify-center hover:bg-neutral-100 transition">−</button>
                    <span className="w-8 text-center text-sm font-semibold">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, item.qty + 1)}
                      className="w-8 h-8 text-lg flex items-center justify-center hover:bg-neutral-100 transition">+</button>
                  </div>
                  <button onClick={() => removeFromCart(item.id)}
                    className="text-xs text-red-500 hover:text-red-700 transition">Remove</button>
                </div>
              </div>
              <div className="text-right flex-shrink-0">
                <p className="font-bold">₹{(item.price * item.qty).toLocaleString('en-IN')}</p>
                {item.qty > 1 && <p className="text-[10px] text-neutral-400">₹{item.price.toLocaleString('en-IN')} each</p>}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-neutral-50 p-6 h-fit rounded-sm">
          <h2 className="font-bold text-sm tracking-[2px] uppercase mb-5">Order Summary</h2>
          <div className="space-y-3 text-sm mb-5">
            <div className="flex justify-between"><span className="text-neutral-500">Subtotal</span><span>₹{total.toLocaleString('en-IN')}</span></div>
            <div className="flex justify-between"><span className="text-neutral-500">Shipping</span><span className="text-green-600 font-medium">FREE</span></div>
            <div className="flex justify-between text-base font-bold border-t pt-3"><span>Total</span><span>₹{total.toLocaleString('en-IN')}</span></div>
          </div>
          <button className="w-full bg-[#ff3399] text-white py-4 font-bold text-sm tracking-[2px] uppercase hover:bg-[#e6006e] transition">
            PROCEED TO CHECKOUT
          </button>
          <Link to="/products" className="block text-center text-xs text-neutral-400 mt-3 hover:text-[#ff3399] transition">
            Continue Shopping
          </Link>
        </div>
      </div>
    </main>
  );
}
