import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { cart } = useCart();
  const count: number = cart.reduce((n, p) => n + p.qty, 0);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="container h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-semibold tracking-[0.2em]">
          NNNOW
        </Link>

        <nav className="hidden md:flex gap-8 text-sm">
          <Link to="/products" className="hover:opacity-70">Women</Link>
          <Link to="/products" className="hover:opacity-70">Men</Link>
          <Link to="/products" className="hover:opacity-70">Accessories</Link>
        </nav>

        <Link to="/cart" className="relative">
          🛍
          {count > 0 && (
            <span className="absolute -top-2 -right-3 text-xs bg-black text-white rounded-full px-1.5">
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
