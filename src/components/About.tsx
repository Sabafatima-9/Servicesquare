// Features moved to separate Features.tsx component
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function About() {
  const { ref: imagesRef, isVisible: imagesVisible } = useScrollAnimation();
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div 
              ref={imagesRef}
              className={`relative ${imagesVisible ? 'scroll-animate-visible' : 'scroll-animate-left'}`}
            >
                <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg transform-gpu transition-transform duration-300 hover:scale-105 hover:shadow-2xl" style={{ transformStyle: 'preserve-3d' }}>
                  <img
                    src="https://images.pexels.com/photos/4792285/pexels-photo-4792285.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Technician at work"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg transform-gpu transition-transform duration-300 hover:scale-105 hover:shadow-2xl mt-8" style={{ transformStyle: 'preserve-3d' }}>
                  <img
                    src="https://images.pexels.com/photos/5691608/pexels-photo-5691608.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Repair service"
                    className="w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>

            <div 
              ref={textRef}
              className={`space-y-6 ${textVisible ? 'scroll-animate-visible' : 'scroll-animate-right'}`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">
                About Us
              </h2>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                ServiceSquare is a trusted name in appliance repair services in Narsingi and
                surrounding areas.
              </p>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                With over 15 years of experience in the industry, we have built a reputation for
                quality service, honest pricing, and customer satisfaction. Our team of certified
                technicians is equipped to handle all types of appliance repairs with precision and
                care.
              </p>
              <p className="text-lg text-[#6B7280] leading-relaxed">
                We understand how important your appliances are to your daily life, which is why we
                offer prompt and reliable service to get them back in working order as quickly as
                possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
