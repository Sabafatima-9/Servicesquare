import { Phone } from 'lucide-react';

const WhatsAppContact = () => {
  const phoneNumber = '919000000000'; // Replace with your WhatsApp number
  const message = 'Hello! I would like to inquire about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors duration-200"
        aria-label="Chat on WhatsApp"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
};

export default WhatsAppContact;
