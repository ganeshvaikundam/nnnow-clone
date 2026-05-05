import { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useScrolled } from '../hooks/useScrolled';
import { navItems } from '../data/navigation';
import type { NavItem } from '../types';

export default function Navbar() {
  const { count } = useCart();
  const scrolled = useScrolled(80);
  const nav = useNavigate();
  const [openDrop, setOpenDrop] = useState<string | null>(null);
  const [search, setSearch] = useState<string>('');
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = (id: string): void => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDrop(id);
  };

  const handleMouseLeave = (): void => {
    closeTimer.current = setTimeout(() => setOpenDrop(null), 120);
  };

  const handleSearch = (e: React.FormEvent): void => {
    e.preventDefault();
    if (search.trim()) {
      nav(`/products?q=${encodeURIComponent(search.trim())}`);
      setSearch('');
      setSearchOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      {/* ── Top Bar ────────────────────────────────────────── */}
      <div className="bg-[#f3f3f3] border-b border-[#e8e8e2]">
        <div className="max-w-[1230px] mx-auto px-4 flex items-center justify-between min-h-[42px]">
          <div className="flex items-center gap-0">
            <Link to="/store-locator" className="nw-toplink">
              <span className="nw-icon mr-1.5">&#xe90b;</span>Store Locator
            </Link>
            <span className="text-[#d0d0d0] mx-1">|</span>
            <a href="https://www.nnnow.com/apps" target="_blank" rel="noreferrer" className="nw-toplink">
              <span className="nw-icon mr-1.5">&#xe905;</span>Get App
            </a>
          </div>
          <div className="text-xs flex items-center gap-1">
            <span className="text-[#704280] text-[10px]">★</span>
            <span className="text-[#ffc001] text-[10px]">★</span>
            <span className="text-[#ec008c] text-[10px]">★</span>
            <span className="mx-2 text-[#333]">New Users: Get <strong>EXTRA 15% OFF</strong></span>
            <span className="text-[#ec008c] text-[10px]">★</span>
            <span className="text-[#ffc001] text-[10px]">★</span>
            <span className="text-[#704280] text-[10px]">★</span>
          </div>
          <div className="flex items-center">
            <a href="https://www.nnnow.com/myorders" target="_blank" rel="noreferrer" className="nw-toplink">
              <span className="nw-icon mr-1.5">&#xe901;</span>Track Order
            </a>
            <span className="text-[#d0d0d0] mx-1">|</span>
            <a href="https://www.nnnow.com/account#loyalty" target="_blank" rel="noreferrer" className="nw-toplink">
              <span className="nw-icon mr-1.5">&#xe900;</span>Loyalty
            </a>
          </div>
        </div>
      </div>

      {/* ── Main Bar ───────────────────────────────────────── */}
      <div className="border-b border-[#e8e8e2] px-4">
        <div className="max-w-[1230px] mx-auto grid grid-cols-3 items-center h-[88px]">
          {/* Search */}
          <div className="flex items-center">
            <form onSubmit={handleSearch}
              className={`flex items-center border-b-2 transition-colors w-full max-w-[360px] py-2 ${searchOpen ? 'border-[#ff3399]' : 'border-[#e0e0e0]'}`}>
              <button type="submit" className="text-[#ff3399] mr-2 flex-shrink-0" aria-label="Search">
                <span className="nw-icon">&#xe906;</span>
              </button>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setSearchOpen(true)}
                onBlur={() => setSearchOpen(false)}
                placeholder="Search NNNOW – brands, styles, products"
                className="flex-1 text-xs outline-none bg-transparent placeholder:text-neutral-400"
              />
              {search && (
                <button type="button" onClick={() => setSearch('')} className="text-neutral-400 text-xs ml-1">✕</button>
              )}
            </form>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <Link to="/">
              <img src="/assets/images/logo.png" alt="NNNOW" className="h-[52px]" />
            </Link>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-end gap-1">
            <Link to="/cart" className="nw-hdrBtn relative">
              <span className="nw-icon text-[#ff3399] text-xl">&#xe904;</span>
              <span className="text-[10px]">Bag</span>
              {count > 0 && (
                <span className="absolute top-1 right-1 bg-[#ff3399] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {count}
                </span>
              )}
            </Link>
            <span className="text-[#d8d8d8] text-lg">|</span>
            <Link to="/login" className="nw-hdrBtn">
              <span className="nw-icon text-[#ff3399] text-xl">&#xe909;</span>
              <span className="text-[10px]">Login</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ── Nav Bar ────────────────────────────────────────── */}
      <div className="border-b border-[#e8e8e2]">
        <div className="max-w-[1230px] mx-auto px-4 flex justify-evenly">
          {/* SALE */}
          <Link to="/products?tag=SALE"
            className="nw-navLink text-[#ff3399] after:bg-[#ff3399] after:scale-x-100">
            SALE
          </Link>
          <Link to="/products?tag=NEW" className="nw-navLink">NEW ARRIVALS</Link>

          {navItems.map((item: NavItem) => (
            <div key={item.id} className="relative"
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}>
              <Link to={`/products?cat=${item.id}`} className="nw-navLink">
                {item.label}
              </Link>

              {/* Mega dropdown */}
              {item.columns && openDrop === item.id && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 z-50 bg-white border-t-2 border-[#ff3399] shadow-xl min-w-[640px]"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}>
                  <div className="flex p-7 gap-0">
                    <div className="flex flex-1 flex-wrap gap-0">
                      {item.columns.map((col) => (
                        <div key={col.heading} className="min-w-[140px] pr-8 mb-4">
                          <p className="text-[11px] font-bold tracking-[2px] text-[#0182cb] uppercase mb-3 cursor-pointer hover:text-[#ff3399]">
                            {col.heading}
                          </p>
                          {col.items.map((sub) => (
                            <Link key={sub.label} to={sub.href}
                              onClick={() => setOpenDrop(null)}
                              className="block text-[11px] text-neutral-500 leading-[2.2] hover:text-[#ff3399] transition-colors">
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                    {item.navImage && (
                      <Link to={`/products?cat=${item.id}`} onClick={() => setOpenDrop(null)} className="flex-shrink-0">
                        <img src={item.navImage} alt={item.label} className="h-[200px] object-cover" />
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
