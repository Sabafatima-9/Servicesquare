import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppContact from './components/WhatsAppContact';

function App() {
  // Handle viewport height for mobile browsers
  useEffect(() => {
    // Set the app height to window height
    const setAppHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${window.innerHeight}px`);
    };

    // Initial set
    setAppHeight();

    // Update on resize and orientation change
    window.addEventListener('resize', setAppHeight);
    window.addEventListener('orientationchange', setAppHeight);

    // Cleanup
    return () => {
      window.removeEventListener('resize', setAppHeight);
      window.removeEventListener('orientationchange', setAppHeight);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
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
