import { Link } from 'react-router-dom';
import type { HomepageSection } from '../types';

interface SectionGridProps { section: HomepageSection; }

export default function SectionGrid({ section }: SectionGridProps) {
  const count = section.tiles.length;
  const colClass = count >= 6 ? 'grid-cols-3 md:grid-cols-6'
    : count === 4 ? 'grid-cols-2 md:grid-cols-4'
    : 'grid-cols-2 md:grid-cols-3';

  return (
    <section className="mb-8">
      {/* Section header banner */}
      {section.headerImage && (
        <div className="mb-1">
          <img src={section.headerImage} alt={section.heading} className="w-full block" />
        </div>
      )}
      {/* Tiles */}
      <div className={`grid ${colClass} gap-1`}>
        {section.tiles.map((tile) => (
          <Link key={tile.image} to={tile.link} className="block overflow-hidden group">
            <img src={tile.image} alt={tile.alt}
              className="w-full block transition-transform duration-500 group-hover:scale-105" />
          </Link>
        ))}
      </div>
    </section>
  );
}
