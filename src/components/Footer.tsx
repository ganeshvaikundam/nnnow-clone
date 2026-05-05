import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#999] mt-16">
      <div className="max-w-[1230px] mx-auto px-4 pt-12 pb-8 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1">
          <img src="/assets/images/logo.png" alt="NNNOW" className="h-7 mb-4 brightness-0 invert" />
          <p className="text-xs leading-relaxed">India's Leading Online Store for Top International Brands.</p>
          <p className="text-xs mt-3">📞 +91-814-749-3085</p>
          <p className="text-xs">✉ care@nnnow.com</p>
        </div>
        {[
          { title: 'Shop', links: [['Men','/products?cat=men'],['Women','/products?cat=women'],['Kids','/products?cat=kids'],['Footwear','/products?cat=footwear'],['Sale','/products?tag=SALE'],['New Arrivals','/products?tag=NEW']] },
          { title: 'Top Brands', links: [['U.S. Polo Assn.','/products?brand=us-polo'],['Calvin Klein','/products?brand=ck'],['Tommy Hilfiger','/products?brand=tommy'],['Flying Machine','/products?brand=fm'],['Arrow','/products?brand=arrow']] },
          { title: 'Help', links: [['Track Order','https://www.nnnow.com/myorders'],['Store Locator','/store-locator'],['Download App','https://www.nnnow.com/apps'],['My Account','/login'],['Contact Us','https://www.nnnow.com/contactus']] },
          { title: 'Company', links: [['About NNNOW','https://www.nnnow.com/'],['Privacy Policy','https://www.nnnow.com/'],['Terms of Use','https://www.nnnow.com/']] },
        ].map(({ title, links }) => (
          <div key={title}>
            <h3 className="text-white text-[11px] font-bold tracking-[2px] uppercase mb-4">{title}</h3>
            {links.map(([label, href]) => (
              href.startsWith('http')
                ? <a key={label} href={href} target="_blank" rel="noreferrer" className="block text-[11px] leading-[2.4] hover:text-[#ff3399] transition-colors">{label}</a>
                : <Link key={label} to={href} className="block text-[11px] leading-[2.4] hover:text-[#ff3399] transition-colors">{label}</Link>
            ))}
          </div>
        ))}
      </div>
      <div className="border-t border-[#2e2e2e] py-5 text-center text-[10px] text-[#555]">
        © 2025 Arvind Lifestyle Brands Limited. All rights reserved. &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; Terms of Use
      </div>
    </footer>
  );
}
