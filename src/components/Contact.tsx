import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch('https://formspree.io/f/your-formspree-id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
          _subject: `New Service Request: ${formData.service}`,
          _cc: 'Servicesquare09@gmail.com, Shaikazeez@servicesquare.com',
        }),
      });

      if (response.ok) {
        alert('Thank you! We will contact you soon.');
        setFormData({ name: '', phone: '', email: '', service: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch {
      // Fallback to mailto if form submission fails
      const subject = `Service Request: ${formData.service}`;
      const body = `Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
      window.location.href = `mailto:Servicesquare09@gmail.com,Shaikazeez@servicesquare.com?subject=${encodeURIComponent(subject)}&body=${body}`;
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 ${titleVisible ? 'scroll-animate-visible' : 'scroll-animate-up'}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#333333] mb-4">Get in Touch</h2>
          <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
            Contact us for fast and reliable appliance repair services
          </p>
        </div>

        <div 
          ref={contentRef}
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 ${contentVisible ? 'scroll-animate-visible' : 'scroll-animate-up'}`}
        >
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#2E5AAC]/10 p-3 rounded-lg">
                  <MapPin size={24} className="text-[#2E5AAC]" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#2E5AAC]/10 p-3 rounded-lg">
                  <MapPin size={24} className="text-[#2E5AAC]" />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#2E5AAC]/10 p-3 rounded-lg">
                  <Phone size={24} className="text-[#2E5AAC]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#333333] mb-2">Phone Numbers</h3>
                  <p className="text-[#6B7280]">
                    <div className="space-y-2">
                      <a 
                        href="https://wa.me/917842595947" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-[#2E5AAC] transition-colors flex items-center gap-2"
                      >
                        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-5 h-5" />
                        7842595947 (WhatsApp)
                      </a>
                      <a 
                        href="tel:7842595947" 
                        className="hover:text-[#2E5AAC] transition-colors flex items-center gap-2"
                      >
                        <Phone size={16} className="text-[#2E5AAC]" />
                        7842595947 (Call)
                      </a>
                    </div>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#2E5AAC]/10 p-3 rounded-lg">
                  <Mail size={24} className="text-[#2E5AAC]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#333333] mb-2">Email</h3>
                  <a
                    href="mailto:Servicesquare09@gmail.com"
                    className="text-[#6B7280] hover:text-[#2E5AAC] transition-colors"
                  >
                    Servicesquare09@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#2E5AAC]/10 p-3 rounded-lg">
                  <Clock size={24} className="text-[#2E5AAC]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#333333] mb-2">Working Hours</h3>
                  <p className="text-[#6B7280] font-semibold text-lg">24/7 Service Available</p>
                  <p className="text-[#1e3f7a] font-semibold mt-2">
                    Emergency Service Available
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-2xl font-bold text-[#333333] mb-6">Request a Service</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#333333] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E5AAC] focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#333333] mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E5AAC] focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="Your Phone Number"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#333333] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E5AAC] focus:border-transparent transition-all duration-300 outline-none"
                  placeholder="Your Email"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-[#333333] mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E5AAC] focus:border-transparent transition-all duration-300 outline-none"
                >
                  <option value="">Select Service</option>
                  <option value="commercial-fridge">Commercial Fridge Repair</option>
                  <option value="refrigerator">Refrigerator Repair</option>
                  <option value="washing-machine">Washing Machine Repair</option>
                  <option value="deep-freezer">Deep Freezer Repair</option>
                  <option value="ac">Air Conditioner Repair</option>
                  <option value="microwave">Microwave Oven Repair</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#333333] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2E5AAC] focus:border-transparent transition-all duration-300 outline-none resize-none"
                  placeholder="Describe your issue..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#1e3f7a] text-white px-6 py-4 rounded-lg font-semibold hover:bg-[#2E5AAC] transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
