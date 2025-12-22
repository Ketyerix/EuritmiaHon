import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X, Home } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Kezdőlap');

  useEffect(() => {
    // Scroll handler only for transparency effect
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Hash handler only for Active Tab state
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#programok') {
        setActiveTab('Programok');
      } else if (hash === '#kepzesek') {
        setActiveTab('Képzések');
      } else if (hash === '#supporters') {
        setActiveTab('1%');
      } else {
        // Default to Kezdőlap for empty hash or other hashes (like #gallery)
        setActiveTab('Kezdőlap');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    // Initial checks
    handleScroll();
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof NAV_LINKS[0]) => {
    e.preventDefault();
    setIsOpen(false);

    const isSeparatePage = link.href === '#programok' || link.href === '#kepzesek' || link.href === '#supporters';
    const targetHash = link.href.replace('#', '');

    if (isSeparatePage) {
      window.location.hash = targetHash;
    } else {
      const isCurrentlyOnHomePage = window.location.hash !== '#programok' && window.location.hash !== '#kepzesek' && window.location.hash !== '#supporters';

      if (!isCurrentlyOnHomePage) {
        window.location.hash = '';
      } else {
        if (!targetHash) {
          // If clicking Kezdőlap (empty target), scroll to top
          window.scrollTo({ top: 0, behavior: 'smooth' });
          // Ensure hash is cleared without reloading
          if (window.location.hash) {
             history.pushState(null, '', window.location.pathname);
             // Manually trigger hash change logic since pushState doesn't trigger hashchange event
             setActiveTab('Kezdőlap');
          }
        } else {
          // Internal home links (if any)
          const element = document.getElementById(targetHash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', link.href);
          }
        }
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    
    if (window.location.hash !== '') {
         window.location.hash = ''; 
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 flex justify-between md:justify-center items-center py-4 px-6 transition-all duration-300 ${
          isOpen 
            ? 'bg-transparent' 
            : isScrolled 
              ? 'bg-paper/95 backdrop-blur-md shadow-sm border-b border-charcoal/10' 
              : 'bg-transparent'
        }`}
      >
        {/* Mobile Logo Placeholder - Left Side */}
        <a 
            href="#" 
            onClick={handleLogoClick}
            className="md:hidden text-charcoal z-50 hover:text-earth transition-colors relative p-1"
            aria-label="Back to top"
        >
            <Home size={28} strokeWidth={1.5} />
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-12">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`relative text-sm md:text-base font-medium transition-colors duration-300 group font-sans cursor-pointer ${
                  activeTab === link.name 
                    ? 'text-earth' 
                    : 'text-charcoal/80 hover:text-earth'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1.5 left-0 h-[3px] bg-earth rounded-full transition-all duration-300 ${
                  activeTab === link.name ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
                }`} />
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button - Right Side */}
        <button 
          className="md:hidden text-charcoal z-50 relative p-1 hover:bg-black/5 rounded-full transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay - Rolls down from top */}
      <div 
        className={`fixed inset-0 z-40 bg-paper flex flex-col items-center justify-center transition-transform duration-700 ease-in-out md:hidden ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ul className="space-y-8 text-center">
          {NAV_LINKS.map((link, index) => (
            <li 
              key={link.name}
              className={`transition-all duration-500 delay-100 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: `${250 + index * 50}ms` }}
            >
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link)}
                className={`block text-3xl font-serif transition-colors ${
                  activeTab === link.name ? 'text-earth' : 'text-charcoal/90 hover:text-earth'
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;