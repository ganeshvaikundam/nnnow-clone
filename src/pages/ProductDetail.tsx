import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <p className="mt-20 container">Product not found.</p>;
  }

  return (
    <main className="container mt-20 py-6 grid md:grid-cols-2 gap-8">
      <img src={product.image} alt={product.name} className="w-full rounded-lg" />

      <div>
        <p className="badge">{product.brand}</p>
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <p className="text-xl font-bold mt-2">₹{product.price}</p>

        <button
          onClick={() => addToCart(product)}
          className="btn-primary mt-6"
        >
          Add to Cart
        </button>
      </div>
    </main>
  );
}
