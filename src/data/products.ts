import type { Product } from '../types';

export const products: Product[] = [
  // ── REAL product images from the zip ──────────────────────────
  { id:1,  brand:'U.S. Polo Assn.', name:'Classic Pique Polo Shirt',        price:1299, mrp:2199, discount:41, category:'men',      subCategory:['polo-shirts','topwear'], tag:'SALE',      rating:4.3, reviews:312, images:['/assets/products/p1-1.jpg','/assets/products/p1-2.jpg'], color:'#b5dce1' },
  { id:2,  brand:'Arrow',           name:'Formal Slim Fit Shirt',            price:1799, mrp:3499, discount:49, category:'men',      subCategory:['formal-shirts','topwear'], tag:'SALE',    rating:4.4, reviews:267, images:['/assets/products/p2-1.jpg','/assets/products/p2-2.jpg'], color:'#d7e0b1' },
  { id:3,  brand:'Flying Machine',  name:'Slim Fit Stretch Jeans',           price:1699, mrp:2999, discount:43, category:'men',      subCategory:['jeans','bottomwear'],    tag:'SALE',      rating:4.3, reviews:503, images:['/assets/products/p3-1.jpg','/assets/products/p3-2.jpg'], color:'#cfdaf0' },
  { id:4,  brand:'Tommy Hilfiger',  name:'Essential Logo Hoodie',            price:3499, mrp:5999, discount:42, category:'men',      subCategory:['sweatshirts','topwear'], tag:'NEW',       rating:4.6, reviews:93,  images:['/assets/products/p4-1.jpg','/assets/products/p4-2.jpg'], color:'#f4e3c9' },
  { id:5,  brand:'Calvin Klein',    name:'Stretch Chino Trousers',           price:2799, mrp:4999, discount:44, category:'men',      subCategory:['chinos','bottomwear'],   tag:'SALE',      rating:4.4, reviews:198, images:['/assets/products/p5-1.jpg','/assets/products/p5-2.jpg'], color:'#f4e3c9' },
  { id:6,  brand:'AD by Arvind',    name:'Linen Regular Fit Shirt',          price:1199, mrp:2199, discount:45, category:'men',      subCategory:['casual-shirts','topwear'],tag:'SALE',     rating:4.1, reviews:138, images:['/assets/products/p6-1.jpg','/assets/products/p6-2.jpg'], color:'#b5dce1' },
  { id:7,  brand:'Tommy Hilfiger',  name:'Logo Crew Neck T-Shirt',           price:1999, mrp:3499, discount:43, category:'women',    subCategory:['tops','topwear'],        tag:'NEW',       rating:4.4, reviews:267, images:['/assets/products/p1-2.jpg','/assets/products/p1-1.jpg'], color:'#f4e0e9' },
  { id:8,  brand:'Calvin Klein',    name:'Flared High-Rise Jeans',           price:2999, mrp:5499, discount:45, category:'women',    subCategory:['jeans','bottomwear'],    tag:'SALE',      rating:4.5, reviews:312, images:['/assets/products/p2-2.jpg','/assets/products/p2-1.jpg'], color:'#cfdaf0' },
  { id:9,  brand:'Flying Machine',  name:'Off-Shoulder Summer Dress',        price:2299, mrp:3999, discount:43, category:'women',    subCategory:['dresses','topwear'],     tag:'NEW',       rating:4.6, reviews:143, images:['/assets/products/p3-2.jpg','/assets/products/p3-1.jpg'], color:'#f4d9d0' },
  { id:10, brand:'Tommy Hilfiger',  name:'Girls Striped Dress',              price:1199, mrp:1999, discount:40, category:'kids',     subCategory:['girls','girls-dresses'], tag:'NEW',       rating:4.6, reviews:156, images:['/assets/products/p4-2.jpg','/assets/products/p4-1.jpg'], color:'#f4e0e9' },
  { id:11, brand:'Tommy Hilfiger',  name:'Men Canvas Cupsole Sneakers',      price:3999, mrp:6999, discount:43, category:'footwear', subCategory:['men','sneakers'],        tag:'SALE',      rating:4.5, reviews:234, images:['/assets/products/p5-2.jpg','/assets/products/p5-1.jpg'], color:'#f4e0e9' },
  { id:12, brand:'Calvin Klein',    name:'Women Platform Sandals',           price:2499, mrp:4299, discount:42, category:'footwear', subCategory:['women','sandals'],       tag:'NEW',       rating:4.5, reviews:134, images:['/assets/products/p6-2.jpg','/assets/products/p6-1.jpg'], color:'#f4d9d0' },
];

export const getProductById = (id: number): Product | undefined =>
  products.find((p) => p.id === id);

export const getProductsByCategory = (category: Product['category']): Product[] =>
  products.filter((p) => p.category === category);
