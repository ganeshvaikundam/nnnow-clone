import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import type { Product } from '../types';

interface ProductCardProps { product: Product; }

export default function ProductCard({ product }: ProductCardProps) {
  const nav = useNavigate();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const [hovered, setHovered] = useState<boolean>(false);

  const wishlisted = isWishlisted(product.id);

  return (
    <div className="group cursor-pointer" onClick={() => nav(`/product/${product.id}`)}>
      {/* Image */}
      <div className="relative overflow-hidden bg-neutral-100 rounded aspect-[3/4]"
           onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
        <img
          src={hovered ? product.images[1] : product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Tag */}
        {product.tag && (
          <span className={`absolute top-2 left-2 text-[10px] font-bold tracking-widest px-2 py-0.5 text-white
            ${product.tag === 'SALE' ? 'bg-[#ff3399]' : product.tag === 'NEW' ? 'bg-black' : 'bg-orange-500'}`}>
            {product.tag}
          </span>
        )}
        {/* Wishlist */}
        <button
          onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id); }}
          aria-label="Toggle Wishlist"
          className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <span className={wishlisted ? 'text-[#ff3399]' : 'text-neutral-400'}>♥</span>
        </button>
      </div>
      {/* Info */}
      <div className="pt-2.5 px-0.5">
        <p className="text-[10px] text-neutral-400 tracking-widest uppercase mb-0.5">{product.brand}</p>
        <p className="text-sm font-medium leading-snug line-clamp-2 mb-1.5">{product.name}</p>
        <div className="flex gap-2 items-baseline flex-wrap">
          <span className="font-bold text-[15px]">₹{product.price.toLocaleString('en-IN')}</span>
          <span className="text-xs text-neutral-400 line-through">₹{product.mrp.toLocaleString('en-IN')}</span>
          <span className="text-xs text-green-700 font-semibold">({product.discount}% off)</span>
        </div>
        <div className="flex items-center gap-1 mt-1">
          <span className="text-amber-400 text-xs">{'★'.repeat(Math.round(product.rating))}</span>
          <span className="text-[10px] text-neutral-400">({product.reviews})</span>
        </div>
      </div>
    </div>
  );
}
