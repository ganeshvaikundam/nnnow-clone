import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

const SIZES: string[] = ['XS','S','M','L','XL','XXL'];

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [activeImg, setActiveImg] = useState<0 | 1>(0);
  const [added, setAdded] = useState<boolean>(false);

  const product = getProductById(Number(id));
  if (!product) return <p className="mt-32 container text-center text-neutral-400">Product not found.</p>;

  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = (): void => {
    if (!selectedSize) { alert('Please select a size'); return; }
    addToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <main className="max-w-[1230px] mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <p className="text-[10px] text-neutral-400 mb-6">
        <Link to="/" className="hover:text-[#ff3399]">Home</Link>
        <span className="mx-1.5">›</span>
        <Link to={`/products?cat=${product.category}`} className="hover:text-[#ff3399] capitalize">{product.category}</Link>
        <span className="mx-1.5">›</span>
        <span>{product.name}</span>
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Images */}
        <div className="space-y-2">
          <div className="bg-neutral-50 rounded overflow-hidden aspect-[3/4]">
            <img src={product.images[activeImg]} alt={product.name}
              className="w-full h-full object-cover" />
          </div>
          <div className="flex gap-2">
            {product.images.map((img, i) => (
              <button key={i} onClick={() => setActiveImg(i as 0 | 1)}
                className={`w-16 h-20 border-2 overflow-hidden rounded transition-colors ${activeImg === i ? 'border-[#ff3399]' : 'border-transparent'}`}>
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div>
          <p className="text-[10px] tracking-[2px] text-neutral-400 uppercase mb-1">{product.brand}</p>
          <h1 className="text-xl font-semibold leading-snug mb-3">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <span className="text-amber-400">{'★'.repeat(Math.round(product.rating))}</span>
            <span className="text-xs text-neutral-400">({product.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-6">
            <span className="text-2xl font-bold">₹{product.price.toLocaleString('en-IN')}</span>
            <span className="text-base text-neutral-400 line-through">₹{product.mrp.toLocaleString('en-IN')}</span>
            <span className="text-sm text-green-700 font-semibold">({product.discount}% off)</span>
          </div>

          {/* Size selector */}
          <div className="mb-6">
            <p className="text-xs font-bold tracking-widest uppercase mb-3">Select Size</p>
            <div className="flex gap-2 flex-wrap">
              {SIZES.map((size) => (
                <button key={size} onClick={() => setSelectedSize(size)}
                  className={`w-12 h-12 border text-xs font-semibold transition-all
                    ${selectedSize === size
                      ? 'border-[#ff3399] bg-[#ff3399] text-white'
                      : 'border-neutral-300 hover:border-neutral-500'}`}>
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mb-6">
            <button onClick={handleAddToCart}
              className={`flex-1 py-4 font-bold text-sm tracking-[2px] uppercase transition-all
                ${added ? 'bg-green-600 text-white' : 'bg-black text-white hover:bg-[#ff3399]'}`}>
              {added ? '✓ ADDED TO BAG' : 'ADD TO BAG'}
            </button>
            <button onClick={() => toggleWishlist(product.id)}
              className={`w-14 h-14 border text-xl transition-all
                ${wishlisted ? 'border-[#ff3399] text-[#ff3399]' : 'border-neutral-300 hover:border-[#ff3399]'}`}>
              ♥
            </button>
          </div>

          {/* Details */}
          <div className="border-t pt-4 space-y-2 text-xs text-neutral-500">
            <p>✓ &nbsp;15-day easy returns</p>
            <p>✓ &nbsp;Free shipping on orders above ₹999</p>
            <p>✓ &nbsp;Genuine products, 100% authentic</p>
          </div>
        </div>
      </div>
    </main>
  );
}
