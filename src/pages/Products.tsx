import { useState, type ChangeEvent } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Products() {
  const [query, setQuery] = useState<string>('');

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  return (
    <main className="container mt-20 py-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">All Products</h2>
        <input
          placeholder="Search"
          value={query}
          onChange={handleSearch}
          className="border rounded px-3 py-1"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}
