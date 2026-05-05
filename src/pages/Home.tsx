import { useNavigate } from 'react-router-dom';

const CATEGORIES: string[] = ['Women', 'Men', 'Accessories', 'Footwear'];

export default function Home() {
  const nav = useNavigate();

  return (
    <main className="mt-16">
      {/* HERO */}
      <section className="h-[70vh] bg-[url('https://picsum.photos/1400/900?fashion')] bg-cover bg-center flex items-center">
        <div className="container text-white">
          <p className="badge text-white/80">New Season</p>
          <h1 className="text-5xl md:text-6xl font-semibold mt-2">
            Effortless Style
          </h1>
          <button
            onClick={() => nav('/products')}
            className="btn-primary mt-6"
          >
            Shop Now
          </button>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-4">
        {CATEGORIES.map((c) => (
          <div
            key={c}
            onClick={() => nav('/products')}
            className="h-40 bg-neutral-100 rounded-lg flex items-center justify-center cursor-pointer hover:shadow"
          >
            <span className="font-medium">{c}</span>
          </div>
        ))}
      </section>
    </main>
  );
}
