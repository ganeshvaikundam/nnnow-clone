import type { NavItem, HeroSlide, HomepageSection } from '../types';

export const navItems: NavItem[] = [
  {
    id: 'men', label: 'MEN',
    navImage: '/assets/images/nav-men.jpg',
    columns: [
      { heading: 'TOP WEAR', items: [
        { label:'Polo Shirts', href:'/products?cat=men&sub=polo-shirts' },
        { label:'T-Shirts',    href:'/products?cat=men&sub=t-shirts' },
        { label:'Casual Shirts',href:'/products?cat=men&sub=casual-shirts' },
        { label:'Formal Shirts',href:'/products?cat=men&sub=formal-shirts' },
        { label:'Sweatshirts', href:'/products?cat=men&sub=sweatshirts' },
        { label:'Jackets',     href:'/products?cat=men&sub=jackets' },
      ]},
      { heading: 'BOTTOMWEAR', items: [
        { label:'Jeans',       href:'/products?cat=men&sub=jeans' },
        { label:'Cargos',      href:'/products?cat=men&sub=cargos' },
        { label:'Chinos',      href:'/products?cat=men&sub=chinos' },
        { label:'Shorts',      href:'/products?cat=men&sub=shorts' },
        { label:'Track Pants', href:'/products?cat=men&sub=track-pants' },
        { label:'Joggers',     href:'/products?cat=men&sub=joggers' },
      ]},
      { heading: 'FOOTWEAR', items: [
        { label:'Sneakers',    href:'/products?cat=footwear&sub=sneakers' },
        { label:'Formal Shoes',href:'/products?cat=footwear&sub=formal' },
        { label:'Loafers',     href:'/products?cat=footwear&sub=loafers' },
        { label:'Sandals',     href:'/products?cat=footwear&sub=sandals' },
      ]},
      { heading: 'TOP BRANDS', items: [
        { label:'U.S. Polo Assn.', href:'/products?brand=us-polo' },
        { label:'Tommy Hilfiger',  href:'/products?brand=tommy' },
        { label:'Calvin Klein',    href:'/products?brand=ck' },
        { label:'Arrow',           href:'/products?brand=arrow' },
        { label:'Flying Machine',  href:'/products?brand=fm' },
      ]},
    ],
  },
  {
    id: 'women', label: 'WOMEN',
    navImage: '/assets/images/nav-women.jpg',
    columns: [
      { heading: 'TOP WEAR', items: [
        { label:'Tops & T-Shirts', href:'/products?cat=women&sub=tops' },
        { label:'Shirts',          href:'/products?cat=women&sub=shirts' },
        { label:'Dresses',         href:'/products?cat=women&sub=dresses' },
        { label:'Blazers',         href:'/products?cat=women&sub=blazers' },
        { label:'Sweatshirts',     href:'/products?cat=women&sub=sweatshirts' },
      ]},
      { heading: 'BOTTOMWEAR', items: [
        { label:'Jeans',     href:'/products?cat=women&sub=jeans' },
        { label:'Trousers',  href:'/products?cat=women&sub=trousers' },
        { label:'Leggings',  href:'/products?cat=women&sub=leggings' },
        { label:'Skirts',    href:'/products?cat=women&sub=skirts' },
      ]},
      { heading: 'TOP BRANDS', items: [
        { label:'Calvin Klein',   href:'/products?brand=ck' },
        { label:'Tommy Hilfiger', href:'/products?brand=tommy' },
        { label:'U.S. Polo Assn.',href:'/products?brand=us-polo' },
      ]},
    ],
  },
  {
    id: 'kids', label: 'KIDS',
    navImage: '/assets/images/nav-kids.jpg',
    columns: [
      { heading: 'BOYS', items: [
        { label:'Polos & T-Shirts', href:'/products?cat=kids&sub=boys-tshirts' },
        { label:'Jeans',            href:'/products?cat=kids&sub=boys-jeans' },
        { label:'Shorts',           href:'/products?cat=kids&sub=boys-shorts' },
      ]},
      { heading: 'GIRLS', items: [
        { label:'Tops',    href:'/products?cat=kids&sub=girls-tops' },
        { label:'Dresses', href:'/products?cat=kids&sub=girls-dresses' },
        { label:'Leggings',href:'/products?cat=kids&sub=girls-leggings' },
      ]},
    ],
  },
  {
    id: 'footwear', label: 'FOOTWEAR',
    columns: [
      { heading: 'MEN', items: [
        { label:'Sneakers',    href:'/products?cat=footwear&sub=sneakers' },
        { label:'Formal Shoes',href:'/products?cat=footwear&sub=formal' },
        { label:'Loafers',     href:'/products?cat=footwear&sub=loafers' },
        { label:'Sandals',     href:'/products?cat=footwear&sub=sandals' },
      ]},
      { heading: 'WOMEN', items: [
        { label:'Sandals',    href:'/products?cat=footwear&sub=sandals' },
        { label:'Sneakers',   href:'/products?cat=footwear&sub=sneakers' },
        { label:'Belly Shoes',href:'/products?cat=footwear&sub=belly' },
      ]},
    ],
  },
  {
    id: 'brands', label: 'BRANDS',
    columns: [
      { heading: 'TOP APPAREL', items: [
        { label:'U.S. Polo Assn.', href:'/products?brand=us-polo' },
        { label:'Calvin Klein',    href:'/products?brand=ck' },
        { label:'Tommy Hilfiger',  href:'/products?brand=tommy' },
        { label:'Arrow',           href:'/products?brand=arrow' },
        { label:'Flying Machine',  href:'/products?brand=fm' },
        { label:'AD by Arvind',    href:'/products?brand=ad' },
      ]},
    ],
  },
];

export const heroSlides: HeroSlide[] = [
  { image:'/assets/banners/hero1.jpg', link:'/products', alt:'May Sale' },
  { image:'/assets/banners/hero2.jpg', link:'/products?brand=tommy', alt:'Tommy Hilfiger Calvin Klein' },
  { image:'/assets/banners/hero3.jpg', link:'/products', alt:'Deal of the Day' },
];

export const homepageSections: HomepageSection[] = [
  {
    id:'topline',
    heading:'TOP LINE',
    subHeading:'Shop the finest picks',
    headerImage:'/assets/banners/topline-h.jpg',
    tiles:[
      { image:'/assets/banners/topline-1.jpg', link:'/products?cat=men', alt:'Topline 1' },
      { image:'/assets/banners/topline-2.jpg', link:'/products?cat=men', alt:'Topline 2' },
      { image:'/assets/banners/topline-3.jpg', link:'/products?cat=men', alt:'Topline 3' },
      { image:'/assets/banners/topline-4.jpg', link:'/products?cat=men', alt:'Topline 4' },
    ],
  },
  {
    id:'denim',
    heading:'DENIM DELIGHT',
    subHeading:'Up to 50% off on denim',
    headerImage:'/assets/banners/denim-h.jpg',
    tiles:[
      { image:'/assets/banners/denim-1.jpg', link:'/products?cat=men&sub=jeans', alt:'Denim 1' },
      { image:'/assets/banners/denim-2.jpg', link:'/products?cat=men&sub=jeans', alt:'Denim 2' },
      { image:'/assets/banners/denim-3.jpg', link:'/products?cat=women&sub=jeans', alt:'Denim 3' },
      { image:'/assets/banners/denim-4.jpg', link:'/products?cat=women&sub=jeans', alt:'Denim 4' },
    ],
  },
  {
    id:'brands',
    heading:'BRAND BESTS',
    subHeading:'Top picks from leading brands',
    headerImage:'/assets/banners/brands-h.jpg',
    tiles:[
      { image:'/assets/banners/brand-1.jpg', link:'/products?brand=us-polo', alt:'Brand 1' },
      { image:'/assets/banners/brand-2.jpg', link:'/products?brand=tommy',   alt:'Brand 2' },
      { image:'/assets/banners/brand-3.jpg', link:'/products?brand=ck',      alt:'Brand 3' },
      { image:'/assets/banners/brand-4.jpg', link:'/products?brand=arrow',   alt:'Brand 4' },
      { image:'/assets/banners/brand-5.jpg', link:'/products?brand=fm',      alt:'Brand 5' },
      { image:'/assets/banners/brand-6.jpg', link:'/products?brand=ad',      alt:'Brand 6' },
    ],
  },
  {
    id:'innercomfort',
    heading:'INNER COMFORT',
    subHeading:'Premium innerwear collection',
    headerImage:'/assets/banners/inner-h.jpg',
    tiles:[
      { image:'/assets/banners/inner-1.jpg', link:'/products', alt:'Inner 1' },
      { image:'/assets/banners/inner-2.jpg', link:'/products', alt:'Inner 2' },
      { image:'/assets/banners/inner-3.jpg', link:'/products', alt:'Inner 3' },
    ],
  },
  {
    id:'moretowin',
    heading:'MORE TO WIN',
    subHeading:'Explore more winning styles',
    headerImage:'/assets/banners/more-h.jpg',
    tiles:[
      { image:'/assets/banners/more-1.jpg', link:'/products', alt:'More 1' },
      { image:'/assets/banners/more-2.jpg', link:'/products', alt:'More 2' },
      { image:'/assets/banners/more-3.jpg', link:'/products', alt:'More 3' },
    ],
  },
];
