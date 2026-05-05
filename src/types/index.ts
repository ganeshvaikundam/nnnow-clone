// ─── Product ──────────────────────────────────────────────────────────────────
export interface Product {
  id: number;
  name: string;
  price: number;
  mrp: number;
  discount: number;
  brand: string;
  category: 'men' | 'women' | 'kids' | 'footwear';
  subCategory: string[];
  tag: 'SALE' | 'NEW' | 'BESTSELLER' | '';
  rating: number;
  reviews: number;
  images: [string, string];   // [front, hover]
  color: string;
}

// ─── Cart ─────────────────────────────────────────────────────────────────────
export interface CartItem extends Product {
  qty: number;
  selectedSize: string;
}

// ─── Wishlist ─────────────────────────────────────────────────────────────────
export interface WishlistContextType {
  wishlist: number[];
  toggleWishlist: (id: number) => void;
  isWishlisted: (id: number) => boolean;
}

// ─── Cart Context ─────────────────────────────────────────────────────────────
export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (id: number) => void;
  updateQty: (id: number, qty: number) => void;
  total: number;
  count: number;
}

// ─── Nav ──────────────────────────────────────────────────────────────────────
export interface NavSubItem {
  label: string;
  href: string;
}

export interface NavColumn {
  heading: string;
  items: NavSubItem[];
}

export interface NavItem {
  id: string;
  label: string;
  columns?: NavColumn[];
  navImage?: string;
}

// ─── Carousel ─────────────────────────────────────────────────────────────────
export interface HeroSlide {
  image: string;
  link: string;
  alt: string;
}

export interface HomepageSection {
  id: string;
  heading: string;
  subHeading?: string;
  headerImage?: string;
  tiles: SectionTile[];
}

export interface SectionTile {
  image: string;
  link: string;
  alt: string;
}
