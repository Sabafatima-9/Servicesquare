import { Phone, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function Hero() {
  const [showCallModal, setShowCallModal] = useState(false);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [quoteForm, setQuoteForm] = useState({ name: '', phone: '', service: '' });
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Ensure video plays and loops
    const video = videoRef.current;
    if (video) {
      video.play().catch(error => {
        console.log('Auto-play failed, attempting with muted:', error);
        video.muted = true;
        video.play().catch(e => console.error('Video play failed:', e));
      });
    }
  }, []);

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Quote request:', quoteForm);
    setShowQuoteModal(false);
    setQuoteForm({ name: '', phone: '', service: '' });
  };

  return (
    <>
      <section id="home" className="relative h-screen w-full overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            loop
            muted
            autoPlay
            preload="auto"
            style={{
              filter: 'contrast(1.1) brightness(0.8) saturate(1.2)'
            }}
          >
            <source src="/assets/backgimg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/50 to-blue-900/70"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-4">
          <div className="w-full max-w-6xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 md:mb-8 px-2">
              <span className="text-white drop-shadow-lg">Electronic Devices Repair & Services in</span>
              <span className="block bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent mt-2 md:mt-4">
                Hyderabad
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-50 font-medium mb-8 md:mb-10 max-w-2xl mx-auto drop-shadow-md px-4">
              24/7 Professional Repair Services for all your home and commercial appliances.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 px-4">
              <button
                onClick={() => setShowCallModal(true)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-900/30 text-sm sm:text-base"
              >
                <Phone size={20} className="flex-shrink-0" />
                <span>Call Now</span>
              </button>
              <button
                onClick={() => setShowQuoteModal(true)}
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-all duration-300 transform hover:scale-105 backdrop-blur-sm text-sm sm:text-base"
              >
                <span>Get a Quote</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call Modal */}
      {showCallModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 relative animate-in fade-in mx-4">
            <button
              onClick={() => setShowCallModal(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Call Now</h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">Our team is ready to help you!</p>
              <div className="space-y-4">
                <a
                  href="tel:7842595947"
                  className="block w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-900/30 text-base sm:text-lg"
                >
                  <Phone size={20} className="flex-shrink-0" />
                  <span>Call: 7842595947 (MD Noorullah)</span>
                </a>
                <a
                  href="tel:7842595945"
                  className="block w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-900/30 text-base sm:text-lg"
                >
                  <Phone size={20} className="flex-shrink-0" />
                  <span>Call: 7842595945 (Shaik Azeez)</span>
                </a>
              </div>
              <p className="mt-4 text-gray-500 text-xs sm:text-sm">Available 24/7 for emergency repairs</p>
            </div>
          </div>
        </div>
      )}

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 relative animate-in fade-in mx-4 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowQuoteModal(false)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">Get a Quote</h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">Request a free estimate for your repair</p>
            <form onSubmit={handleQuoteSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name"
                  required
                  value={quoteForm.name}
                  onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  required
                  value={quoteForm.phone}
                  onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                />
              </div>
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service Needed</label>
                <select
                  id="service"
                  required
                  value={quoteForm.service}
                  onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none bg-white text-sm sm:text-base"
                >
                  <option value="">Select a service</option>
                  <option value="refrigerator">Refrigerator Repair</option>
                  <option value="washing-machine">Washing Machine Repair</option>
                  <option value="ac">AC Repair</option>
                  <option value="dishwasher">Dishwasher Repair</option>
                  <option value="microwave">Microwave Repair</option>
                  <option value="other">Other Appliance</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-blue-900/30 text-sm sm:text-base"
              >
                Request Free Quote
              </button>
            </form>
            <div className="mt-4 text-center">
              <p className="text-gray-500 text-xs sm:text-sm">
                Or call us directly at{' '}
                <a href="tel:7842595947" className="text-blue-600 hover:underline">7842595947</a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}