<<<<<<< HEAD
import { Phone } from 'lucide-react';

const WhatsAppContact = () => {
  const phoneNumber = '919000000000'; // Replace with your WhatsApp number
  const message = 'Hello! I would like to inquire about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
=======
import { MessageCircle } from 'lucide-react';

const WhatsAppContact = () => {
  const phoneNumber = '917842595947';
  const message = 'Hello! I would like to inquire about your services.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed top-6 right-6 z-50">
>>>>>>> ede5f61d67259012c67ef0655a73c406269c8ffb
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
<<<<<<< HEAD
        className="flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:bg-green-600 transition-colors duration-200"
        aria-label="Chat on WhatsApp"
      >
        <Phone className="w-6 h-6" />
=======
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
        onClick={handleClick}
      >
        <MessageCircle className="w-8 h-8" />
>>>>>>> ede5f61d67259012c67ef0655a73c406269c8ffb
      </a>
    </div>
  );
};

export default WhatsAppContact;
<<<<<<< HEAD
=======

>>>>>>> ede5f61d67259012c67ef0655a73c406269c8ffb
