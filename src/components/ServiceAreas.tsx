import { useState, useMemo } from 'react';
import { Phone, X, MapPin } from 'lucide-react';
import { MultiSelectDropdown } from './ui/MultiSelectDropdown';

const PHONE = '7842595947';

const areas = [
  'Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Hitech City', 'Kondapur',
  'Madhapur', 'Gachibowli', 'Financial District', 'Nanakramguda', 'Manikonda',
  'Kukatpally', 'Miyapur', 'Nizampet', 'Bachupally', 'Kompally', 'Alwal',
  'Secunderabad', 'Begumpet', 'Ameerpet', 'Punjagutta', 'Somajiguda', 'Khairatabad',
  'Lakdikapul', 'Abids', 'Koti', 'Malakpet', 'Dilsukhnagar', 'Kukatpally Housing Board',
  'Miyapur', 'Chandanagar', 'Lingampally', 'Moula Ali', 'Tarnaka', 'Uppal', 'Nagole',
  'LB Nagar', 'Hayathnagar', 'Vanastalipuram', 'KPHB', 'JNTU', 'Kukatpally', 'Balanagar',
  'Moosapet', 'Bharat Nagar', 'Erragadda', 'SR Nagar', 'Ameerpet', 'Punjagutta', 'Begumpet',
  'Paradise', 'Secunderabad', 'Tarnaka', 'Mettuguda', 'Habsiguda', 'Tarnaka', 'Uppal',
  'Nagole', 'LB Nagar', 'Dilsukhnagar', 'Malakpet', 'Charminar', 'Mehdipatnam',
  'Jubilee Hills', 'Banjara Hills', 'Road No. 1-12', 'Jubilee Hills', 'Banjara Hills',
  'Road No. 36', 'Jubilee Hills', 'Banjara Hills', 'Road No. 45', 'Jubilee Hills',
  'Banjara Hills', 'Road No. 78', 'Jubilee Hills', 'Banjara Hills', 'Road No. 92',
  'Near me'
].sort((a, b) => a.localeCompare(b));

const serviceData = [
  {
    id: 'fridge',
    name: 'Fridge Repair & Service',
    areas: [...areas],
    icon: '🧊',
    description: 'Expert repair for all refrigerator brands and models',
  },
  {
    id: 'commercial-fridge',
    name: 'Commercial Fridge Repair',
    areas: [...areas],
    icon: '🏪',
    description: 'Specialized service for commercial refrigeration units',
  },
  {
    id: 'deep-freezer',
    name: 'Deep Freezer Repair',
    areas: [...areas],
    icon: '❄️',
    description: 'Professional maintenance for optimal performance',
  },
  {
    id: 'washing-machine',
    name: 'Washing Machine Repair',
    areas: [...areas],
    icon: '🧺',
    description: 'Comprehensive service for all types of washers',
  },
  {
    id: 'ac',
    name: 'AC Repair & Service',
    areas: [...areas],
    icon: '🌬️',
    description: 'Expert service for all AC types and brands',
  },
  {
    id: 'microwave',
    name: 'Microwave Oven Repair',
    areas: [...areas],
    icon: '🍕',
    description: 'Fast and reliable microwave repair services',
  },
  {
    id: 'dishwasher',
    name: 'Dishwasher Repair',
    areas: [...areas],
    icon: '🍽️',
    description: 'Professional dishwasher maintenance and repair',
  },
  {
    id: 'water-purifier',
    name: 'Water Purifier Service',
    areas: [...areas],
    icon: '💧',
    description: 'Complete water purifier maintenance',
  },
];

export default function ServiceAreas() {
  const [selectedServices, setSelectedServices] = useState<Record<string, string[]>>(
    serviceData.reduce((acc, service) => ({ ...acc, [service.id]: [] }), {})
  );
  const [activeTab, setActiveTab] = useState<string>('all');

  const handleAreaSelect = (serviceId: string, selectedAreas: string[]) => {
    setSelectedServices(prev => ({
      ...prev,
      [serviceId]: selectedAreas
    }));
  };

  const selectedCount = useMemo(() => {
    return Object.values(selectedServices).reduce((sum, areas) => sum + areas.length, 0);
  }, [selectedServices]);

  const filteredServices = useMemo(() => {
    if (activeTab === 'all') return serviceData;
    if (activeTab === 'selected') {
      return serviceData.filter(service => selectedServices[service.id]?.length > 0);
    }
    return serviceData;
  }, [activeTab, selectedServices]);

  return (
    <section id="service-areas" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Our Service Areas in Hyderabad
          </h2>
          <p className="text-base sm:text-lg text-gray-600">
            We provide expert appliance repair services across all major areas in Hyderabad.
            Select your location and service to check availability.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="p-4 sm:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Select Your Area</h3>
                <p className="text-sm text-gray-500">
                  {selectedCount > 0 
                    ? `${selectedCount} area${selectedCount !== 1 ? 's' : ''} selected` 
                    : 'Search and select your location'}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('all')}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === 'all' 
                      ? 'bg-blue-600 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  All Areas
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('selected')}
                  disabled={selectedCount === 0}
                  className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                    activeTab === 'selected'
                      ? 'bg-blue-600 text-white'
                      : `text-gray-600 ${selectedCount > 0 ? 'hover:bg-gray-100' : 'opacity-50 cursor-not-allowed'}`
                  }`}
                >
                  Selected ({selectedCount})
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {filteredServices.map((service) => (
                <div 
                  key={service.id}
                  className={`bg-white rounded-lg border transition-all ${
                    selectedServices[service.id]?.length > 0 
                      ? 'border-blue-200 bg-blue-50' 
                      : 'border-gray-100 hover:border-gray-200'
                  }`}
                >
                  <div className="p-4 sm:p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl">
                          {service.icon}
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                            {service.name}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {service.description}
                          </p>
                        </div>
                      </div>
                      <a
                        href={`tel:${PHONE}`}
                        className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg whitespace-nowrap transition-colors shadow-sm hover:shadow-md"
                      >
                        <Phone size={16} />
                        Call Now
                      </a>
                    </div>

                    <div className="mt-4">
                      <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Select areas for {service.name.split(' ')[0]}
                        </label>
                        {selectedServices[service.id]?.length > 0 && (
                          <button
                            type="button"
                            onClick={() => handleAreaSelect(service.id, [])}
                            className="text-xs text-blue-600 hover:text-blue-800 hover:underline"
                          >
                            Clear all
                          </button>
                        )}
                      </div>
                      <MultiSelectDropdown
                        options={service.areas}
                        selected={selectedServices[service.id] || []}
                        onSelect={(selected) => handleAreaSelect(service.id, selected)}
                        placeholder={`Select areas for ${service.name.split(' ')[0]}`}
                        searchable={true}
                        maxSelections={10}
                      />
                    </div>

                    {selectedServices[service.id]?.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                          <MapPin size={16} className="text-blue-500" />
                          <span>Selected areas ({selectedServices[service.id].length}):</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selectedServices[service.id].slice(0, 3).map((area) => (
                            <span
                              key={area}
                              className="inline-flex items-center gap-1 px-2.5 py-1 text-xs bg-blue-50 text-blue-800 rounded-full border border-blue-100"
                            >
                              {area}
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleAreaSelect(
                                    service.id,
                                    selectedServices[service.id].filter((a) => a !== area)
                                  );
                                }}
                                className="text-blue-400 hover:text-blue-600 focus:outline-none ml-0.5"
                                aria-label={`Remove ${area}`}
                              >
                                <X size={14} />
                              </button>
                            </span>
                          ))}
                          {selectedServices[service.id].length > 3 && (
                            <span className="inline-flex items-center px-2.5 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                              +{selectedServices[service.id].length - 3} more
                            </span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedCount > 0 && (
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 sm:p-8 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">Ready to book your service?</h3>
                <p className="text-blue-100">
                  You've selected {selectedCount} area{selectedCount !== 1 ? 's' : ''} across{' '}
                  {Object.values(selectedServices).filter(areas => areas.length > 0).length} service
                  {Object.values(selectedServices).filter(areas => areas.length > 0).length !== 1 ? 's' : ''}.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`tel:${PHONE}`}
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-blue-50 font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all whitespace-nowrap"
                >
                  <Phone size={18} />
                  Call Now: {PHONE}
                </a>
                <a
                  href="https://wa.me/917842595947"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all whitespace-nowrap"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.5 14.4l-2.1.9-1-1c1.5-1.5 2.3-3.2 2.3-5.1 0-4.6-4.9-8.2-10-8.2S-2.3 4.5 1.8 9.5c4.1 5 11.1 10.4 15.2 6.4l.4-.4-1.6-2.8 1.7-1.7zm-13.2-10c-3.2 4-2.7 8.9 1.1 12.7l-1.1 1.9 2-.9c1.3.4 2.7.7 4.1.7 5.1 0 9.2-3.5 9.2-7.8 0-4.3-4.1-7.8-9.2-7.8-1.4 0-2.8.3-4.1.8z"/>
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
