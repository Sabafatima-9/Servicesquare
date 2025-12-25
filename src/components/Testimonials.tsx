import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    name: 'Abdul Nabi',
    location: 'Karkhana',
    rating: 5,
    text: 'Excellent service! My AC was fixed within an hour of calling. The technician was professional and knowledgeable. Highly recommended!',
  },
  {
    name: 'Mohd Shoaib',
    location: 'Hyderabad',
    rating: 5,
    text: 'Our restaurant fridge stopped working, and they came immediately to fix it. Saved us thousands in potential food loss. Great emergency service!',
  },
  {
    name: 'Suresh Reddy',
    location: 'Financial District',
    rating: 5,
    text: 'Honest pricing and quality work. Fixed my washing machine issue that others couldn\'t diagnose properly. Will definitely call them again.',
  },
];

export default function Testimonials() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? 'scroll-animate-visible' : 'scroll-animate-up'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Real feedback from our satisfied customers
          </p>
        </div>

        <div 
          ref={cardsRef}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ${cardsVisible ? 'scroll-animate-visible' : 'scroll-animate-up'}`}
        >
          {testimonials.map((testimonial, index) => {
            const delay = index * 0.15;
            return (
            <div
              key={index}
              className={`bg-[#F5F7FA] p-8 rounded-xl shadow-md transition-all duration-300 transform-gpu hover:scale-105 hover:-translate-y-2 hover:shadow-2xl relative ${
                cardsVisible ? 'scroll-animate-visible' : index % 2 === 0 ? 'scroll-animate-left' : 'scroll-animate-right'
              }`}
              style={{ transformStyle: 'preserve-3d', transitionDelay: `${delay}s` }}
            >
              <Quote className="absolute top-6 right-6 text-[#2E5AAC]/10" size={48} />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-[#2E5AAC] text-[#2E5AAC]" />
                ))}
              </div>

              <p className="text-[#333333] text-lg leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="border-t border-gray-300 pt-4">
                <p className="font-bold text-[#333333]">{testimonial.name}</p>
                <p className="text-[#6B7280] text-sm">{testimonial.location}</p>
              </div>
            </div>
          );
          })}
        </div>
      </div>
    </section>
  );
}
