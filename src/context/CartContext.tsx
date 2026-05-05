import { createContext, useContext, useReducer, type ReactNode } from 'react';
import type { CartContextType, CartItem, Product } from '../types';

// ─── Actions ──────────────────────────────────────────────────────────────────
type CartAction =
  | { type: 'ADD'; product: Product; size: string }
  | { type: 'REMOVE'; id: number }
  | { type: 'UPDATE_QTY'; id: number; qty: number };

// ─── Reducer ──────────────────────────────────────────────────────────────────
function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'ADD': {
      const key = `${action.product.id}-${action.size}`;
      const exists = state.find((i) => `${i.id}-${i.selectedSize}` === key);
      if (exists) {
        return state.map((i) =>
          `${i.id}-${i.selectedSize}` === key ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...state, { ...action.product, qty: 1, selectedSize: action.size }];
    }
    case 'REMOVE':
      return state.filter((i) => i.id !== action.id);
    case 'UPDATE_QTY':
      return state
        .map((i) => (i.id === action.id ? { ...i, qty: action.qty } : i))
        .filter((i) => i.qty > 0);
    default:
      return state;
  }
}

// ─── Context ──────────────────────────────────────────────────────────────────
const CartContext = createContext<CartContextType | undefined>(undefined);

// ─── Provider ─────────────────────────────────────────────────────────────────
export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  const addToCart = (product: Product, size: string): void =>
    dispatch({ type: 'ADD', product, size });

  const removeFromCart = (id: number): void =>
    dispatch({ type: 'REMOVE', id });

  const updateQty = (id: number, qty: number): void =>
    dispatch({ type: 'UPDATE_QTY', id, qty });

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const count = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQty, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────
export function useCart(): CartContextType {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
