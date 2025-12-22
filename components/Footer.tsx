import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-paper text-center relative z-10 pb-12 pt-12">
      <div className="max-w-2xl mx-auto px-4 font-sans text-charcoal/70 text-sm space-y-3">
        <p>1065 Budapest, Nagymező u. 30, 1. em. 1 aj.</p>
        <p>+36-1-3122730</p>
        <p className="hover:text-earth transition-colors cursor-pointer">huneuritmia@gmail.com</p>
        <div className="pt-8 text-xs text-charcoal/40">
          © 2025 Magyar Euritmia – Mozgásművészeti Társaság
        </div>
      </div>
    </footer>
  );
};

export default Footer;