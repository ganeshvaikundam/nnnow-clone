// ─── Product ──────────────────────────────────────────────────────────────────
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  brand: string;
}

// ─── Cart ─────────────────────────────────────────────────────────────────────
export interface CartItem extends Product {
  qty: number;
}

// ─── Cart Context ─────────────────────────────────────────────────────────────
export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  total: number;
}
