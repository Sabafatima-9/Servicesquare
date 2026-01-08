import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, MessageCircle } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1e3f7a] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">ServiceSquare</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Your trusted partner for all appliance repair and maintenance needs in Narsingi and
              surrounding areas.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#2E5AAC] transition-colors duration-300"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#2E5AAC] transition-colors duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="bg-white/10 p-2 rounded-lg hover:bg-[#2E5AAC] transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://wa.me/917842595947"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-lg hover:bg-green-600 transition-colors duration-300"
                title="Chat on WhatsApp"
              >
                <MessageCircle size={20} className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Hyderabad</li>
              <li>Secunderabad</li>
              <li>Cyberabad</li>
              <li>Financial District</li>
              <li>Rachakonda</li>
              <li>And Many More Areas</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-white mt-1 flex-shrink-0" />
<<<<<<< HEAD
                <p className="text-gray-300 text-sm">                </p>
=======
                <p className="text-gray-300 text-sm">
                    Narsingi, Hyderabad, Telangana – 500075
  </p>
>>>>>>> ede5f61d67259012c67ef0655a73c406269c8ffb
              </div>
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-white flex-shrink-0" />
                <div>
                  <a
                    href="tel:7842595947"
                    className="text-gray-300 hover:text-white transition-colors block"
                  >
                    7842595947
                  </a>
<<<<<<< HEAD
=======
<<<<<<< HEAD
                  <a>
                    className="text-gray-300 hover:text-white transition-colors block"
                           </a>
=======
>>>>>>> ede5f61d67259012c67ef0655a73c406269c8ffb
>>>>>>> 04358c20916f89ced1f0c26381d55c6813632d2e
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-white flex-shrink-0" />
                <a
                  href="mailto:Servicesquare09@gmail.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  Servicesquare09@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#2E5AAC] p-4 rounded-lg mb-8 text-center">
          <p className="text-white text-sm font-medium">
            A nominal fee will be charged for the initial service visit.
            <br />
            Additional charges, if any, will be discussed before proceeding.
          </p>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 ServiceSquare. All rights reserved.
             Designed by Saba Fatima.
          </p>
          <p className="text-gray-400 mt-2 text-sm">
            Owner: Shaik Azeez | Contact: 
            <a href="tel:7842595947" className="text-white hover:underline">7842595947 (MD Noorullah)</a>, 
            <a href="tel:7842595945" className="text-white hover:underline">7842595945 (Shaik Azeez)</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
