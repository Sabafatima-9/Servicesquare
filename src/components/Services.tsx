import { Snowflake, Refrigerator, WashingMachine, Wind, Microwave, Box, Utensils, Wrench } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import ServiceAreas from './ServiceAreas';
import About from './About';
import Testimonials from './Testimonials';

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
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? 'scroll-animate-visible' : 'scroll-animate-up'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
            Our Services
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Professional repair and maintenance for all your appliances
          </p>
        </div>

        <div 
          ref={servicesRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${servicesVisible ? 'scroll-animate-visible' : 'scroll-animate-up'}`}
        >
          {services.map((service, index) => {
            const delay = index * 0.1;
            return (
            <div
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transform-gpu transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-xl hover:border-[#2E5AAC]/20 group will-change-transform ${
                servicesVisible ? 'scroll-animate-visible' : index % 2 === 0 ? 'scroll-animate-left' : 'scroll-animate-right'
              }`}
              style={{ perspective: 1000, transitionDelay: `${delay}s` }}
            >
              <div className="relative h-56 bg-gray-50 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 transform-gpu"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-[#2E5AAC]/10 p-3 rounded-lg group-hover:bg-[#2E5AAC] transition-colors duration-300">
                    <service.icon
                      size={28}
                      className="text-[#2E5AAC] group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#333333]">{service.title}</h3>
                </div>
                <p className="text-[#6B7280] leading-relaxed">{service.description}</p>
              </div>
            </div>
          );
          })}
        </div>

        <About />
        <Testimonials />

        <ServiceAreas />
      </div>
    </section>
  );
}
