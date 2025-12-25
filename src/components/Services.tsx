import { Snowflake, Refrigerator, WashingMachine, Wind, Microwave, Box, Utensils, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ServiceAreas from './ServiceAreas';
import About from './About';
import Testimonials from './Testimonials';
import '../styles/animations.css';

const services = [
  {
    icon: Box,
    title: 'Commercial Fridge Repair',
    description:
      'Specialized repair services for commercial refrigeration units used in restaurants, hotels, and stores.',
    image: '/commercialfridge.png',
    features: ['24/7 Emergency Service', 'All Major Brands', 'Certified Technicians'],
  },
  {
    icon: Refrigerator,
    title: 'Refrigerator Repair',
    description:
      'Professional repair services for all refrigerator brands and models, including frost-free and direct cool.',
    image: '/fridgerepair.png',
    features: ['Same-Day Service', 'Warranty on Repairs', 'No Hidden Fees'],
  },
  {
    icon: WashingMachine,
    title: 'Washing Machine Repair',
    description:
      'Comprehensive repair services for top-load, front-load, and semi-automatic washing machines.',
    image: '/washingmachinerepair.png',
    features: ['In-Home Service', 'Genuine Parts', '90-Day Warranty'],
  },
  {
    icon: Snowflake,
    title: 'Deep Freezer Repair',
    description:
      'Professional repair and maintenance for deep freezers to ensure optimal performance and longevity.',
    image: '/deepfreezer.png',
    features: ['Commercial & Residential', 'Temperature Issues', 'Fast Response'],
  },
  {
    icon: Wind,
    title: 'Air Conditioner Repair',
    description:
      'Expert repair and maintenance services for all types of AC units - split, window, and central AC systems.',
    image: '/acrepair.png',
    features: ['Cooling Issues', 'Gas Leak Detection', 'Regular Maintenance'],
  },
  {
    icon: Microwave,
    title: 'Microwave Oven Repair',
    description:
      'Expert diagnosis and repair for all microwave oven issues, including heating problems and electrical faults.',
    image: '/microwave.png',
    features: ['Turntable Issues', 'Button Repair', 'Magnetron Replacement'],
  },
  {
    icon: Utensils,
    title: 'Dishwasher Repair',
    description:
      'Professional dishwasher repair services for all brands, including water drainage, heating, and spray arm issues.',
    image: '/dishwasher.png',
    features: ['Leak Repairs', 'Drainage Issues', 'Full Diagnostics'],
  },
  {
    icon: Wrench,
    title: 'General Appliance Repair',
    description:
      'Comprehensive repair services for all types of electrical appliances, with expert troubleshooting and maintenance.',
    image: '/generalappliancesrepair.png',
    features: ['All Major Brands', 'In-Home Service', 'Same-Day Repairs'],
  },
];

export default function Services() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div 
          ref={titleRef}
          className={`text-center mb-12 sm:mb-16 max-w-4xl mx-auto ${titleVisible ? 'scroll-animate-visible' : 'scroll-animate-up'}`}
        >
          <span className="inline-block bg-blue-50 text-[#2E5AAC] text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 leading-tight">
            Expert Appliance Repair Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Professional, reliable, and affordable repair services for all major home appliances. 
            Same-day service available for most repairs.
          </p>
        </div>

        {/* Services Grid */}
        <div 
          ref={servicesRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-6 lg:gap-8 ${
            servicesVisible ? 'scroll-animate-visible' : 'scroll-animate-up'
          }`}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const delay = Math.min(index * 0.05, 0.3);
            return (
              <div
                key={index}
                className={`group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 ease-in-out
                  transform hover:-translate-y-1 hover:border-[#2E5AAC]/30 will-change-transform
                  ${servicesVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}
                style={{
                  transitionDelay: `${delay}s`,
                  transitionProperty: 'transform, box-shadow, border-color, opacity',
                  animation: servicesVisible ? `fadeInUp 0.5s ease-out ${delay}s forwards` : 'none',
                }}
              >
                <div className="relative h-48 sm:h-44 md:h-48 lg:h-52 xl:h-48 bg-gray-50 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out transform-gpu"
                    loading={index > 2 ? 'lazy' : 'eager'}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <div className="flex flex-wrap gap-1.5">
                      {service.features.map((feature, i) => (
                        <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/10 backdrop-blur-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="p-5 sm:p-4 md:p-5">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-[#2E5AAC]/10 p-2 sm:p-2.5 rounded-lg group-hover:bg-[#2E5AAC] transition-colors duration-300 flex-shrink-0 mt-0.5">
                      <Icon
                        size={20}
                        className="text-[#2E5AAC] group-hover:text-white transition-colors duration-300"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 leading-tight mb-1.5 line-clamp-2">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                        {service.description}
                      </p>
                      <button 
                        className="mt-3 text-sm font-medium text-[#2E5AAC] hover:text-[#1e3f7a] transition-colors inline-flex items-center group/button"
                        onClick={() => {
                          // Smooth scroll to service areas section
                          const element = document.getElementById('service-areas');
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        Check availability
                        <svg 
                          className="ml-1 w-4 h-4 transition-transform group-hover/button:translate-x-0.5" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-[#2E5AAC] to-[#1e3f7a] rounded-2xl p-8 sm:p-10 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">Can't Find Your Appliance?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              We repair all major home appliances. Contact us to check if we service your specific make and model.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <a
                href="tel:7842595947"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-[#2E5AAC] bg-white hover:bg-gray-100 transition-colors shadow-sm"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 7842595947
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-white/20 text-base font-medium rounded-lg text-white hover:bg-white/10 transition-colors"
              >
                Send a Message
              </a>
            </div>
          </div>
        </div>

        {/* Additional Sections */}
        <div className="mt-20">
          <About />
        </div>
        
        <div className="mt-20">
          <Testimonials />
        </div>

        <div className="mt-20">
          <ServiceAreas />
        </div>
      </div>
    </section>
  );
}
