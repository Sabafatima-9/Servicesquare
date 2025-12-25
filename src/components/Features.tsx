import { CheckCircle, Award, Clock, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: Award,
    title: 'Experienced Technicians',
    description: 'Certified professionals with 15+ years of industry experience',
  },
  {
    icon: CheckCircle,
    title: 'Genuine Spare Parts',
    description: 'Only authentic parts used for all repairs and replacements',
  },
  {
    icon: Clock,
    title: 'Emergency Services Available',
    description: '24/7 availability for urgent repair needs',
  },
  {
    icon: Users,
    title: 'Customer Satisfaction',
    description: 'Committed to quality service and honest pricing',
  },
];

export default function Features() {
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={featuresRef}
          className={`grid grid-cols-1 sm:grid-cols-2 gap-6 ${featuresVisible ? 'scroll-animate-visible' : 'scroll-animate-up'}`}
        >
          {features.map((feature, index) => {
            const delay = index * 0.1;
            return (
            <div
              key={index}
              className={`flex items-start gap-4 p-6 bg-[#F5F7FA] rounded-lg hover:shadow-lg transition-all duration-300 ${
                featuresVisible ? 'scroll-animate-visible' : index % 2 === 0 ? 'scroll-animate-left' : 'scroll-animate-right'
              }`}
              style={{ transitionDelay: `${delay}s` }}
            >
              <div className="bg-[#2E5AAC]/10 p-3 rounded-lg flex-shrink-0">
                <feature.icon size={24} className="text-[#2E5AAC]" />
              </div>
              <div>
                <h3 className="font-semibold text-[#333333] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#6B7280]">{feature.description}</p>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
