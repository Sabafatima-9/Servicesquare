import { useEffect, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppContact from './components/WhatsAppContact';

// Debounce function to limit the rate at which a function can fire
const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

function App() {
  // Handle viewport height for mobile browsers
  const setAppHeight = useCallback(() => {
    // Get the viewport height and set it as a CSS variable
    const vh = window.innerHeight * 0.01;
    const doc = document.documentElement;
    
    // Set the value in the document's root element
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    doc.style.setProperty('--vh', `${vh}px`);
    
    // Force a reflow to ensure styles are applied
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  }, []);

  useEffect(() => {
    // Initial set
    setAppHeight();

    // Create debounced version of setAppHeight
    const debouncedResizeHandler = debounce(setAppHeight, 100);

    // Add event listeners
    window.addEventListener('resize', debouncedResizeHandler);
    window.addEventListener('orientationchange', debouncedResizeHandler);
    window.addEventListener('load', setAppHeight);
    
    // For iOS Safari's viewport height changes when address bar hides/shows
    window.visualViewport?.addEventListener('resize', debouncedResizeHandler);

    // Cleanup
    return () => {
      window.removeEventListener('resize', debouncedResizeHandler);
      window.removeEventListener('orientationchange', debouncedResizeHandler);
      window.removeEventListener('load', setAppHeight);
      window.visualViewport?.removeEventListener('resize', debouncedResizeHandler);
    };
  }, [setAppHeight]);

  return (
    <div className="flex flex-col min-h-[100dvh] w-full overflow-x-hidden relative">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <div id="services" className="scroll-mt-16">
          <Services />
        </div>
        <div id="features" className="scroll-mt-16">
          <Features />
        </div>
        <div id="contact" className="scroll-mt-16">
          <Contact />
        </div>
      </main>
      <Footer />
      <WhatsAppContact />
    </div>
  );
}

export default App;
