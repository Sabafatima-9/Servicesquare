import { Phone, MessageSquare, Clock, X, ChevronDown, ChevronUp, Check } from 'lucide-react';
import { useState } from 'react';

const WhatsAppContact = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isQuickHelpExpanded, setIsQuickHelpExpanded] = useState(false);

  const quickHelpItems = [
    'Service inquiries',
    'Emergency repairs',
    'Appointment scheduling',
    'General questions',
    'Price estimates',
    'Technical support',
    'Product information',
    'Order status'
  ];

  const toggleItem = (item: string) => {
    setSelectedItems(prev => 
      prev.includes(item) 
        ? prev.filter(i => i !== item)
        : [...prev, item]
    );
  };

  const getWhatsAppMessage = () => {
    const greeting = "Hello! I need help with:";
    const selected = selectedItems.map(item => `• ${item}`).join('\n');
    return encodeURIComponent(`${greeting}\n\n${selected}`);
  };

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 w-16 h-16 flex items-center justify-center cursor-pointer"
             onClick={() => setIsMinimized(false)}>
          <div className="relative">
            <div className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
              {selectedItems.length > 0 ? selectedItems.length : ''}
            </div>
            <MessageSquare className="w-8 h-8 text-green-600" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[400px] max-w-[calc(100vw-48px)]">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 transition-all duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-semibold">Chat with us</h2>
              <p className="text-green-100 text-xs">We're online and ready to help</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
              aria-label={isExpanded ? 'Minimize' : 'Expand'}
            >
              {isExpanded ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
            </button>
            <button 
              onClick={() => setIsMinimized(true)}
              className="p-1 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Minimize"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {isExpanded && (
          <div className="bg-gray-50 p-4 border-b border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-sm text-gray-700">How can we help you?</h3>
              <button 
                onClick={() => setIsQuickHelpExpanded(!isQuickHelpExpanded)}
                className="text-xs text-green-700 hover:underline flex items-center gap-1"
              >
                {isQuickHelpExpanded ? 'Show less' : 'Quick help'}
                {isQuickHelpExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              </button>
            </div>
            
            {isQuickHelpExpanded && (
              <div className="space-y-2 mb-4">
                <div className="grid grid-cols-2 gap-2">
                  {quickHelpItems.map((item, index) => (
                    <div 
                      key={index}
                      onClick={() => toggleItem(item)}
                      className={`p-2 rounded-lg text-sm cursor-pointer transition-all ${selectedItems.includes(item) 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : 'bg-white hover:bg-gray-50 border border-gray-200'}`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{item}</span>
                        {selectedItems.includes(item) && (
                          <Check className="w-4 h-4 text-green-600" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-4">
              <a
                href={`https://wa.me/917842595947?text=${getWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-2.5 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare size={18} />
                {selectedItems.length > 0 ? 'Send Message' : 'Start Chat'}
              </a>
              
              <div className="mt-2 flex items-center justify-center gap-4">
                <a 
                  href="tel:7842595947"
                  className="text-xs text-gray-600 hover:text-green-700 flex items-center gap-1"
                >
                  <Phone size={14} />
                  Call us
                </a>
                <span className="text-gray-300">|</span>
                <span className="flex items-center gap-1 text-xs text-gray-500">
                  <Clock size={14} />
                  Available 24/7
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Compact View */}
        {!isExpanded && (
          <div className="p-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-green-100 p-2 rounded-lg">
                <MessageSquare className="w-5 h-5 text-green-700" />
              </div>
              <div>
                <p className="text-sm font-medium">Need help?</p>
                <p className="text-xs text-gray-500">Chat with our support team</p>
              </div>
            </div>
            <a
              href="https://wa.me/917842595947"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-2.5 px-4 rounded-lg font-medium transition-colors"
            >
              Start Chat
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default WhatsAppContact;
