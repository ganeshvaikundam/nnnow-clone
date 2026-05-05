import { useState, useMemo, type ChangeEvent } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import type { Product } from '../types';

type SortKey = 'popular' | 'price-asc' | 'price-desc' | 'discount' | 'newest';

const PAGE_SIZE = 12;

export default function Products() {
  const [searchParams] = useSearchParams();
  const [sort, setSort] = useState<SortKey>('popular');
  const [shown, setShown] = useState<number>(PAGE_SIZE);

  const cat   = searchParams.get('cat') as Product['category'] | null;
  const tag   = searchParams.get('tag') as Product['tag'] | null;
  const query = searchParams.get('q') ?? '';
  const sub   = searchParams.get('sub') ?? '';

  const filtered = useMemo<Product[]>(() => {
    let list = [...products];
    if (cat)   list = list.filter((p) => p.category === cat);
    if (tag)   list = list.filter((p) => p.tag === tag);
    if (sub)   list = list.filter((p) => p.subCategory.includes(sub));
    if (query) {
      const q = query.toLowerCase();
      list = list.filter((p) =>
        p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q)
      );
    }
    if (sort === 'price-asc')  return list.sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') return list.sort((a, b) => b.price - a.price);
    if (sort === 'discount')   return list.sort((a, b) => b.discount - a.discount);
    if (sort === 'newest')     return list.sort((a, b) => (b.tag === 'NEW' ? 1 : 0) - (a.tag === 'NEW' ? 1 : 0));
    return list;
  }, [cat, tag, sub, query, sort]);

  const pageTitle = query ? `Results for "${query}"`
    : tag ? tag === 'SALE' ? 'SALE' : 'NEW ARRIVALS'
    : cat ? `${cat.toUpperCase()}'S WEAR`
    : 'ALL PRODUCTS';

  return (
    <main className="max-w-[1230px] mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <p className="text-[10px] text-neutral-400 mb-4">
        <Link to="/" className="hover:text-[#ff3399]">Home</Link>
        <span className="mx-1.5">›</span>
        <span>{pageTitle}</span>
      </p>

      {/* Header */}
      <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
        <div>
          <h1 className="font-bold text-xl tracking-[2px] uppercase">{pageTitle}</h1>
          <p className="text-xs text-neutral-400 mt-1">{filtered.length} products found</p>
        </div>
        <select
          value={sort}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setSort(e.target.value as SortKey);
            setShown(PAGE_SIZE);
          }}
          className="border border-neutral-200 px-3 py-2 text-xs outline-none rounded-sm bg-white">
          <option value="popular">Sort: Popularity</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="discount">Highest Discount</option>
          <option value="newest">New Arrivals First</option>
        </select>
      </div>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 text-neutral-400">
          <p className="text-4xl mb-4">🔍</p>
          <h3 className="font-bold tracking-widest uppercase mb-2">No products found</h3>
          <p className="text-sm">Try a different search or browse all products</p>
          <Link to="/products" className="mt-4 inline-block border border-black px-6 py-2 text-xs font-bold tracking-wider hover:bg-black hover:text-white transition">
            BROWSE ALL
          </Link>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {filtered.slice(0, shown).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
          {shown < filtered.length && (
            <div className="text-center mt-10">
              <button
                onClick={() => setShown((s) => s + PAGE_SIZE)}
                className="border-[1.5px] border-black px-10 py-3 text-xs font-bold tracking-[2px] uppercase hover:bg-black hover:text-white transition">
                LOAD MORE ({filtered.length - shown} remaining)
              </button>
            </div>
          )}
        </>
      )}
    </main>
  );
}
