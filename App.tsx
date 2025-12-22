import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeArticles from './components/HomeArticles';
import Articles from './components/Articles';
import Sponsors from './components/Sponsors';
import Education from './components/Education';
import Supporters from './components/Supporters';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import CursorEffect from './components/ui/CursorEffect';

const App: React.FC = () => {
  // Initialize view based on current hash
  // Determine initial view based on hash
  const getInitialView = (): 'home' | 'program' | 'education' | 'supporters' => {
    // Only route to specific pages if the hash strictly matches. 
    // Otherwise default to home to ensure "Kezdőlap" is the starting page.
    if (window.location.hash === '#programok') return 'program';
    if (window.location.hash === '#kepzesek') return 'education';
    if (window.location.hash === '#supporters') return 'supporters';
    return 'home';
  };

  const [view, setView] = useState<'home' | 'program' | 'education' | 'supporters'>(getInitialView());

  // Handle routing based on hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      if (hash === '#programok') {
        setView('program');
        window.scrollTo(0, 0); 
      } else if (hash === '#kepzesek') {
        setView('education');
        window.scrollTo(0, 0);
      } else if (hash === '#supporters') {
        setView('supporters');
        window.scrollTo(0, 0);
      } else {
        // If switching back to home, we set view to home
        setView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Handle scrolling when view switches to home
  useEffect(() => {
    if (view === 'home') {
      const hash = window.location.hash;
      const isSeparatePage = hash === '#programok' || hash === '#kepzesek' || hash === '#supporters';
      
      // If we are on home view, check if we need to scroll to a section (like #articles)
      if (hash && !isSeparatePage) {
        // Small delay to ensure DOM is ready for internal linking
        setTimeout(() => {
          const targetElement = document.querySelector(hash);
          if (targetElement) {
             targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100); 
      } else if (!hash) {
         window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [view]);

  return (
    <div className="relative min-h-screen bg-paper text-charcoal overflow-x-hidden selection:bg-earth/20">
      {/* Global Noise Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] bg-noise mix-blend-multiply opacity-70" />
      
      {/* Background Cursor Effect */}
      <CursorEffect />

      <Navbar />
      
      <main className="relative z-10">
        {view === 'home' && (
          <div className="animate-fade-in-up">
            <Hero />
            <HomeArticles />
            <Gallery />
            <Sponsors />
          </div>
        )}
        
        {view === 'program' && (
          <div className="animate-fade-in-up">
            <Articles />
          </div>
        )}

        {view === 'education' && (
          <div className="animate-fade-in-up">
            <Education />
          </div>
        )}

        {view === 'supporters' && (
          <div className="animate-fade-in-up">
            <Supporters />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;