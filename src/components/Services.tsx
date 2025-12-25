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
  },
  {
    icon: Refrigerator,
    title: 'Refrigerator Repair',
    description:
      'Professional repair services for all refrigerator brands and models, including frost-free and direct cool.',
    image: '/fridgerepair.png',
  },
  {
    icon: WashingMachine,
    title: 'Washing Machine Repair',
    description:
      'Comprehensive repair services for top-load, front-load, and semi-automatic washing machines.',
    image: '/washingmachinerepair.png',
  },
  {
    icon: Snowflake,
    title: 'Deep Freezer Repair',
    description:
      'Professional repair and maintenance for deep freezers to ensure optimal performance and longevity.',
    image: '/deepfreezer.png',
  },
  {
    icon: Wind,
    title: 'Air Conditioner Repair',
    description:
      'Expert repair and maintenance services for all types of AC units - split, window, and central AC systems.',
    image: '/acrepair.png',
  },
  {
    icon: Microwave,
    title: 'Microwave Oven Repair',
    description:
      'Expert diagnosis and repair for all microwave oven issues, including heating problems and electrical faults.',
    image: '/microwave.png',
  },
  {
    icon: Utensils,
    title: 'Dishwasher Repair',
    description:
      'Professional dishwasher repair services for all brands, including water drainage, heating, and spray arm issues.',
    image: '/dishwasher.png',
  },
  {
    icon: Wrench,
    title: 'General Appliance Repair',
    description:
      'Comprehensive repair services for all types of electrical appliances, with expert troubleshooting and maintenance.',
    image: '/generalappliancesrepair.png',
  },
];

export default function Services() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-12 sm:mb-16 ${titleVisible ? 'scroll-animate-visible' : 'scroll-animate-up'}`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#1e3f7a] mb-3 sm:mb-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#4B5563] max-w-2xl mx-auto px-2">
            Professional repair and maintenance for all your appliances
          </p>
        </div>

        <div 
          ref={servicesRef}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${servicesVisible ? 'scroll-animate-visible' : 'scroll-animate-up'}`}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const delay = Math.min(index * 0.05, 0.3);
            return (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transform-gpu transition-all duration-300 
                  hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg hover:border-[#2E5AAC]/30 group will-change-transform active:scale-95
                  ${servicesVisible ? 'scroll-animate-visible' : 'opacity-0 translate-y-4'}`}
                style={{
                  transitionDelay: `${delay}s`,
                  transitionProperty: 'transform, box-shadow, border-color, opacity',
                  animation: servicesVisible ? `fadeInUp 0.5s ease-out ${delay}s forwards` : 'none'
                }}
              >
                <div className="relative h-48 sm:h-56 bg-gray-50 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out transform-gpu"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-4 mb-3 sm:mb-4">
                    <div className="bg-[#2E5AAC]/10 p-2.5 sm:p-3 rounded-lg group-hover:bg-[#2E5AAC] transition-colors duration-300 flex-shrink-0">
                      <Icon
                        size={24}
                        className="text-[#2E5AAC] group-hover:text-white transition-colors duration-300"
                      />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-[#1e3f7a] leading-tight mt-1">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 sm:mt-20">
          <About />
        </div>
        
        <div className="mt-16 sm:mt-20">
          <Testimonials />
        </div>

        <div className="mt-16 sm:mt-20">
          <ServiceAreas />
        </div>
      </div>

    </section>
  );
}
