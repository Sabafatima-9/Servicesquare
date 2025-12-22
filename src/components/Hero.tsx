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
          >
            <source src="/assets/backgimg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-8">
              <span className="text-white drop-shadow-lg">Electronic Devices Repair & Services in</span>
              <span className="block bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent mt-2">
                Hyderabad
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-50 font-medium mb-10 max-w-2xl mx-auto drop-shadow-md">
              24/7 Professional Repair Services for all your home and commercial appliances.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setShowCallModal(true)}
                className="flex items-center justify-center gap-2 bg-[#2E5AAC] hover:bg-[#1e3f7a] text-white font-medium py-3 px-8 rounded-md transition duration-300 transform hover:scale-105"
              >
                <Phone size={20} />
                Call Now
              </button>
              <button
                onClick={() => setShowQuoteModal(true)}
                className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-800 font-medium py-3 px-8 rounded-md transition duration-300 transform hover:scale-105"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Call Modal */}
      {showCallModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative animate-in fade-in">
            <button
              onClick={() => setShowCallModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h2 className="text-3xl font-bold text-[#333333] mb-2">Call Now</h2>
            <p className="text-[#6B7280] mb-6">Our team is ready to help you!</p>
            <a
              href="tel:7842595947"
              className="block w-full bg-[#1e3f7a] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#2E5AAC] transition-all duration-300 text-center mb-4 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              Call: 7842595947
            </a>
            <p className="text-center text-[#6B7280] text-sm">Available 24/7 for emergency repairs</p>
          </div>
        </div>
      )}

      {/* Quote Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative animate-in fade-in">
            <button
              onClick={() => setShowQuoteModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h2 className="text-3xl font-bold text-[#333333] mb-2">Get a Quote</h2>
            <p className="text-[#6B7280] mb-6">Request a free estimate for your repair</p>
            <form onSubmit={handleQuoteSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                value={quoteForm.name}
                onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E5AAC]"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                required
                value={quoteForm.phone}
                onChange={(e) => setQuoteForm({ ...quoteForm, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E5AAC]"
              />
              <select
                required
                value={quoteForm.service}
                onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E5AAC]"
              >
                <option value="">Select Service</option>
                <option value="refrigerator">Refrigerator Repair</option>
                <option value="washing-machine">Washing Machine Repair</option>
                <option value="ac">AC Repair</option>
                <option value="dishwasher">Dishwasher Repair</option>
                <option value="microwave">Microwave Repair</option>
                <option value="other">Other</option>
              </select>
              <button
                type="submit"
                className="w-full bg-[#2E5AAC] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1e3f7a] transition-all duration-300"
              >
                Request Quote
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}