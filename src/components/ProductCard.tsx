import { useNavigate } from 'react-router-dom';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const nav = useNavigate();

  return (
    <div
      onClick={() => nav(`/product/${product.id}`)}
      className="cursor-pointer group"
    >
      <div className="overflow-hidden rounded-lg bg-neutral-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition"
        />
      </div>
      <p className="mt-2 text-xs text-neutral-500">{product.brand}</p>
      <p className="font-medium">{product.name}</p>
      <p className="font-semibold">₹{product.price}</p>
    </div>
  );
}
