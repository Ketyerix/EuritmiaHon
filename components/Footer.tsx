import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-paper text-center relative z-10 pb-12 pt-12">
      <div className="max-w-2xl mx-auto px-4 font-sans text-charcoal/70 text-sm space-y-3">
        <a
          href="https://maps.app.goo.gl/WHZmazv6TJ6UAhqd9"
          target="_blank"
          rel="noopener noreferrer"
          className="block hover:text-earth transition-colors"
        >
          1065 Budapest, Nagymező u. 30, 1. em. 1 aj.
        </a>
        <a
          href="tel:+3613122730"
          className="block hover:text-earth transition-colors cursor-pointer"
        >
          +36-1-3122730
        </a>
        <a
          href="mailto:huneuritmia@gmail.com"
          className="block hover:text-earth transition-colors cursor-pointer"
        >
          huneuritmia@gmail.com
        </a>
        <div className="pt-8 text-xs text-charcoal/40">
          © 2025 Magyar Euritmia – Mozgásművészeti Társaság
        </div>
      </div>
    </footer>
  );
};

export default Footer;