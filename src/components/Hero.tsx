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
          
          {/* WhatsApp Floating Button */}
          <a 
            href="https://wa.me/917842595947" 
            target="_blank" 
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full p-3 shadow-xl flex items-center justify-center z-50 transition-all duration-300 group"
            aria-label="Chat on WhatsApp"
            title="Chat with us on WhatsApp"
          >
            <div className="relative flex items-center">
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.498 14.382c-.3-.15-1.767-.867-2.04-.966-.274-.1-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.17-.29-.015-.45.13-.59.137-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.076-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.516-.172-.008-.371-.01-.571-.01-.2 0-.523.074-.797.36-.274.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.09 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.36m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a11.7 11.7 0 01-1.83-6.25 11.7 11.7 0 012.6-7.32A11.7 11.7 0 0111.98.75c3.1 0 6.055 1.2 8.29 3.39a11.7 11.7 0 013.43 8.29 11.7 11.7 0 01-3.43 8.29 11.7 11.7 0 01-8.29 3.39z" />
              </svg>
              <div className="absolute -right-1 -bottom-1 w-5 h-5 bg-white rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-[#25D366]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </div>
              <span className="absolute left-full ml-3 px-3 py-1.5 bg-white text-gray-800 text-sm font-medium rounded-md shadow-lg opacity-0 group-hover:opacity-100 whitespace-nowrap transition-opacity duration-200">
                Chat with us!
              </span>
            </div>
          </a>
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

            <div className="w-full max-w-2xl mx-auto px-4">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                {/* Call Now Button */}
                <button
                  onClick={() => setShowCallModal(true)}
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-semibold py-3 px-4 sm:py-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 hover:shadow-lg hover:shadow-blue-900/30 text-sm sm:text-base whitespace-nowrap"
                >
                  <Phone size={18} className="flex-shrink-0" />
                  <span>Call Now</span>
                </button>

                {/* WhatsApp Button */}
                <a
                  href="https://wa.me/917842595947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7d5f] text-white font-semibold py-3 px-4 sm:py-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 hover:shadow-lg hover:shadow-[#25D366]/30 text-sm sm:text-base whitespace-nowrap"
                  aria-label="Chat on WhatsApp"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.498 14.382c-.3-.15-1.767-.867-2.04-.966-.274-.1-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.17-.29-.015-.45.13-.59.137-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.076-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.516-.172-.008-.371-.01-.571-.01-.2 0-.523.074-.797.36-.274.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.09 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.36m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a11.7 11.7 0 01-1.83-6.25 11.7 11.7 0 012.6-7.32A11.7 11.7 0 0111.98.75c3.1 0 6.055 1.2 8.29 3.39a11.7 11.7 0 013.43 8.29 11.7 11.7 0 01-3.43 8.29 11.7 11.7 0 01-8.29 3.39z" />
                  </svg>
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://wa.me/917842595947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-[#25D366] to-[#128C7E] hover:from-[#20bd5a] hover:to-[#0f7d5f] text-white font-semibold py-3 px-4 sm:py-4 sm:px-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-[#25D366]/40 text-sm sm:text-base whitespace-nowrap border-2 border-white/20 hover:border-white/30 group"
                  aria-label="Chat on WhatsApp"
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <svg 
                      className="w-5 h-5 flex-shrink-0 relative z-10" 
                      fill="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.498 14.382c-.3-.15-1.767-.867-2.04-.966-.274-.1-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.17-.29-.015-.45.13-.59.137-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.076-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.516-.172-.008-.371-.01-.571-.01-.2 0-.523.074-.797.36-.274.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.09 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.36m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a11.7 11.7 0 01-1.83-6.25 11.7 11.7 0 012.6-7.32A11.7 11.7 0 0111.98.75c3.1 0 6.055 1.2 8.29 3.39a11.7 11.7 0 013.43 8.29 11.7 11.7 0 01-3.43 8.29 11.7 11.7 0 01-8.29 3.39z" />
                    </svg>
                  </div>
                  <span className="font-medium">+91 78425 95947</span>
                </a>
              </div>

              <div className="mt-3 sm:mt-4 w-full flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => setShowQuoteModal(true)}
                  className="flex-1 flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 text-white font-semibold py-3 px-4 sm:py-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 hover:bg-white/20 text-sm sm:text-base whitespace-nowrap"
                >
                  <span>Get a Free Quote</span>
                </button>
                
                <a
                  href="https://wa.me/917842595947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold py-3 px-4 sm:py-4 sm:px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] active:scale-95 shadow-lg hover:shadow-[#25D366]/40 text-sm sm:text-base whitespace-nowrap border-2 border-white/20 hover:border-white/30 group"
                  aria-label="Chat on WhatsApp"
                >
                  <svg 
                    className="w-5 h-5 flex-shrink-0" 
                    fill="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.498 14.382c-.3-.15-1.767-.867-2.04-.966-.274-.1-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.17-.29-.015-.45.13-.59.137-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.076-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.516-.172-.008-.371-.01-.571-.01-.2 0-.523.074-.797.36-.274.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.09 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.36m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a11.7 11.7 0 01-1.83-6.25 11.7 11.7 0 012.6-7.32A11.7 11.7 0 0111.98.75c3.1 0 6.055 1.2 8.29 3.39a11.7 11.7 0 013.43 8.29 11.7 11.7 0 01-3.43 8.29 11.7 11.7 0 01-8.29 3.39z" />
                  </svg>
                  <span className="font-medium">Chat Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* WhatsApp Floating Button */}
          <a 
            href="https://wa.me/917842595947" 
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white shadow-lg hover:shadow-xl hover:shadow-[#25D366]/40 transition-all duration-300 transform hover:scale-110"
            aria-label="Chat with us on WhatsApp"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.498 14.382c-.3-.15-1.767-.867-2.04-.966-.274-.1-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.17-.29-.015-.45.13-.59.137-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.076-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.516-.172-.008-.371-.01-.571-.01-.2 0-.523.074-.797.36-.274.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.09 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.36m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a11.7 11.7 0 01-1.83-6.25 11.7 11.7 0 012.6-7.32A11.7 11.7 0 0111.98.75c3.1 0 6.055 1.2 8.29 3.39a11.7 11.7 0 013.43 8.29 11.7 11.7 0 01-3.43 8.29 11.7 11.7 0 01-8.29 3.39z" />
            </svg>
          </a>
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
                  <span>Call: 7842595947</span>
                </a>
                <a
                  href="tel:7842595945"
                  className="block w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-900/30 text-base sm:text-lg"
                >
                  <Phone size={20} className="flex-shrink-0" />
                  <span>Call: 7842595945</span>
                </a>
                <a
                  href="https://wa.me/917842595947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-3 sm:px-6 sm:py-4 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 text-center flex items-center justify-center gap-2 shadow-lg hover:shadow-green-900/30 text-base sm:text-lg"
                >
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.498 14.382c-.3-.15-1.767-.867-2.04-.966-.274-.1-.473-.15-.673.15-.197.295-.771.964-.944 1.162-.175.195-.349.21-.646.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.17-.29-.015-.45.13-.59.137-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.076-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.516-.172-.008-.371-.01-.571-.01-.2 0-.523.074-.797.36-.274.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.195 2.105 3.195 5.1 4.485.714.3 1.27.48 1.704.629.714.227 1.365.195 1.88.121.574-.09 1.767-.721 2.016-1.426.255-.705.255-1.29.18-1.425-.074-.135-.27-.21-.57-.36m-5.446 7.443h-.016c-1.77 0-3.524-.48-5.055-1.38l-.36-.214-3.75.975 1.005-3.645-.239-.375a11.7 11.7 0 01-1.83-6.25 11.7 11.7 0 012.6-7.32A11.7 11.7 0 0111.98.75c3.1 0 6.055 1.2 8.29 3.39a11.7 11.7 0 013.43 8.29 11.7 11.7 0 01-3.43 8.29 11.7 11.7 0 01-8.29 3.39z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
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