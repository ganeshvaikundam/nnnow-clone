import { Link } from 'react-router-dom';
import HeroCarousel from '../components/HeroCarousel';
import SectionGrid from '../components/SectionGrid';
import ProductCard from '../components/ProductCard';
import { heroSlides, homepageSections } from '../data/navigation';
import { products } from '../data/products';

export default function Home() {
  const featured = products.slice(0, 6);

  return (
    <main>
      {/* Hero */}
      <HeroCarousel slides={heroSlides} />

      {/* New User Strip */}
      <Link to="/products">
        <img src="/assets/banners/new-user-strip.jpg" alt="New user offer" className="w-full block" />
      </Link>

      {/* HP Strip */}
      <Link to="/products">
        <img src="/assets/banners/hp-strip.jpg" alt="Offer Strip" className="w-full block my-1" />
      </Link>

      {/* Mothers Day */}
      <Link to="/products?cat=women">
        <img src="/assets/banners/mothers-day.jpg" alt="Mother's Day" className="w-full block mb-1" />
      </Link>

      {/* Tommy / CK */}
      <Link to="/products?brand=tommy">
        <img src="/assets/banners/th-ck.jpg" alt="Tommy Hilfiger Calvin Klein" className="w-full block mb-1" />
      </Link>

      {/* New Arrivals strip */}
      <Link to="/products?tag=NEW">
        <img src="/assets/banners/new-arrival.jpg" alt="New Arrivals" className="w-full block mb-1" />
      </Link>

      {/* Suits strip */}
      <Link to="/products?cat=men&sub=suits-blazers">
        <img src="/assets/banners/suits.jpg" alt="Suits & Blazers" className="w-full block mb-4" />
      </Link>

      {/* Dynamic Homepage Sections (Topline, Denim, Brands, Innercomfort, MoreToWin) */}
      <div className="px-0">
        {homepageSections.map((section) => (
          <SectionGrid key={section.id} section={section} />
        ))}
      </div>

      {/* Select Coupons */}
      <div className="mb-4">
        <img src="/assets/banners/coupons-h.jpg" alt="Select Coupons" className="w-full block mb-1" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 px-0">
          {[1,2,3,4].map((n) => (
            <Link key={n} to="/products">
              <img src={`/assets/banners/coupon-${n}.jpg`} alt={`Coupon ${n}`} className="w-full block" />
            </Link>
          ))}
        </div>
      </div>

      {/* CT + ShopAll + On Repeat */}
      <Link to="/products"><img src="/assets/banners/ct-h.jpg" alt="CT" className="w-full block mb-1" /></Link>
      <Link to="/products"><img src="/assets/banners/shopall-h.jpg" alt="Shop All" className="w-full block mb-1" /></Link>
      <Link to="/products"><img src="/assets/banners/on-repeat-h.jpg" alt="On Repeat" className="w-full block mb-4" /></Link>

      {/* Featured Products */}
      <section className="max-w-[1230px] mx-auto px-4 mb-12">
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <p className="text-[10px] tracking-[3px] text-neutral-400 uppercase mb-1">Handpicked</p>
            <h2 className="font-bold text-xl tracking-[2px] uppercase">Trending Now</h2>
          </div>
          <Link to="/products" className="text-xs border-b border-black pb-0.5 tracking-wider hover:text-[#ff3399] hover:border-[#ff3399] transition-colors">
            VIEW ALL
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1230px] mx-auto px-4 mb-12">
        <h2 className="font-bold text-lg tracking-[2px] uppercase text-center mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[1,2,3,4].map((n) => (
            <img key={n} src={`/assets/banners/testimonial-${n}.jpg`} alt={`Testimonial ${n}`} className="w-full block rounded" />
          ))}
        </div>
      </section>

      {/* Download App */}
      <Link to="https://www.nnnow.com/apps" target="_blank">
        <img src="/assets/banners/download-app.jpg" alt="Download App" className="w-full block mb-4" />
      </Link>
    </main>
  );
}
