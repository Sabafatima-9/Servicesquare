import { useState, useMemo } from 'react';
<<<<<<< HEAD
import { Phone, MapPin, ChevronDown, X, Check } from 'lucide-react';

const PHONE = '7842595947';
=======
import { ChevronDown, X, Check, Search } from 'lucide-react';
>>>>>>> ede5f61d67259012c67ef0655a73c406269c8ffb

// Service data structure
const services = [
  {
    id: 'fridge',
    name: 'Fridge Repair & Service',
    icon: '🧊',
    description: 'Expert repair for all refrigerator brands and models',
  },
  {
    id: 'commercial-fridge',
    name: 'Commercial Fridge Repair',
    icon: '🏪',
    description: 'Specialized service for commercial refrigeration units',
  },
  {
    id: 'deep-freezer',
    name: 'Deep Freezer Repair',
    icon: '❄️',
    description: 'Professional maintenance for optimal performance',
  },
  {
    id: 'washing-machine',
    name: 'Washing Machine Repair',
    icon: '🧺',
    description: 'Comprehensive service for all types of washers',
  },
  {
    id: 'ac',
    name: 'AC Repair & Service',
    icon: '🌬️',
    description: 'Expert service for all AC types and brands',
  },
  {
    id: 'microwave',
    name: 'Microwave Oven Repair',
    icon: '🍕',
    description: 'Fast and reliable microwave repair services',
  },
  {
    id: 'dishwasher',
    name: 'Dishwasher Repair',
    icon: '🍽️',
    description: 'Professional dishwasher maintenance and repair',
  },
  {
    id: 'water-purifier',
    name: 'Water Purifier Service',
    icon: '💧',
    description: 'Complete water purifier maintenance',
  },
];

<<<<<<< HEAD
// Areas data
const areas = [
  'Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Hitech City', 'Kondapur',
  'Madhapur', 'Financial District', 'Nanakramguda', 'Manikonda',
  'Kukatpally', 'Miyapur', 'Nizampet', 'Bachupally', 'Kompally', 'Alwal',
  'Secunderabad', 'Begumpet', 'Ameerpet', 'Punjagutta', 'Somajiguda', 'Khairatabad',
  'Lakdikapul', 'Abids', 'Koti', 'Malakpet', 'Dilsukhnagar', 'KPHB', 'JNTU',
  'Balanagar', 'Moosapet', 'Bharat Nagar', 'Erragadda', 'SR Nagar', 'Paradise',
  'Mettuguda', 'Habsiguda', 'Charminar', 'Mehdipatnam', 'Near me'
].sort((a, b) => a.localeCompare(b));

interface ServiceSelectionProps {
  onServiceSelect: (serviceId: string, areas: string[]) => void;
=======
// Areas data - Empty array since we're removing the area selection
const areas: string[] = [];

interface ServiceSelectionProps {
  onServiceSelect: (serviceId: string, areas: string[]) => void
>>>>>>> ede5f61d67259012c67ef0655a73c406269c8ffb
  selectedServices: Record<string, string[]>;
}

export default function ServiceSelection({ onServiceSelect, selectedServices }: ServiceSelectionProps) {
  const [selectedServiceIds, setSelectedServiceIds] = useState<string[]>([]);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAreasOpen, setIsAreasOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [areaSearchTerm, setAreaSearchTerm] = useState('');

  const filteredServices = useMemo(() => {
    return services.filter(service => 
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const filteredAreas = useMemo(() => {
    return areas.filter(area => 
      area.toLowerCase().includes(areaSearchTerm.toLowerCase())
    );
  }, [areaSearchTerm]);

  const toggleService = (serviceId: string) => {
    const newSelected = selectedServiceIds.includes(serviceId)
      ? selectedServiceIds.filter(id => id !== serviceId)
      : [...selectedServiceIds, serviceId];
    setSelectedServiceIds(newSelected);
  };

  const toggleArea = (serviceId: string, area: string) => {
    const currentAreas = selectedServices[serviceId] || [];
    const newAreas = currentAreas.includes(area)
      ? currentAreas.filter(a => a !== area)
      : [...currentAreas, area];
    
    onServiceSelect(serviceId, newAreas);
  };

  const removeService = (serviceId: string) => {
    setSelectedServiceIds(selectedServiceIds.filter(id => id !== serviceId));
    onServiceSelect(serviceId, []);
  };

  const getServiceById = (id: string) => services.find(s => s.id === id);

  return (
    <div className="space-y-6">
      {/* Services Dropdown */}
      <div className="relative">
        <div 
          className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer bg-white"
          onClick={() => {
            setIsServicesOpen(!isServicesOpen);
            setIsAreasOpen(false);
          }}
        >
          <div>
            <h3 className="font-medium text-gray-700">Select Services</h3>
            {selectedServiceIds.length > 0 && (
              <p className="text-sm text-gray-500">
                {selectedServiceIds.length} service{selectedServiceIds.length !== 1 ? 's' : ''} selected
              </p>
            )}
          </div>
          <ChevronDown className={`transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
        </div>

        {isServicesOpen && (
          <div className="absolute z-20 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-auto">
            <div className="sticky top-0 p-3 bg-white border-b">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full p-2 pl-10 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              {filteredServices.map((service) => (
                <div 
                  key={service.id}
                  className={`p-4 hover:bg-gray-50 cursor-pointer flex items-start ${
                    selectedServiceIds.includes(service.id) ? 'bg-blue-50' : ''
                  }`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleService(service.id);
                  }}
                >
                  <div className="flex-shrink-0 h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3 mt-0.5">
                    {selectedServiceIds.includes(service.id) && <Check className="h-4 w-4" />}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{service.name}</div>
                    <p className="text-sm text-gray-500">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Selected Services with Areas */}
      <div className="space-y-4">
        {selectedServiceIds.map(serviceId => {
          const service = getServiceById(serviceId);
          if (!service) return null;
          
          const serviceAreas = selectedServices[serviceId] || [];
          
          return (
            <div key={serviceId} className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4 flex justify-between items-center">
                <div className="flex items-center">
                  <span className="text-xl mr-3">{service.icon}</span>
                  <h3 className="font-medium">{service.name}</h3>
                </div>
                <button
                  onClick={() => removeService(serviceId)}
                  className="text-gray-400 hover:text-gray-600"
                  aria-label={`Remove ${service.name}`}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="p-4">
                <div 
                  className="flex items-center justify-between p-3 border border-gray-200 rounded-lg cursor-pointer"
                  onClick={() => {
                    setIsAreasOpen(!isAreasOpen);
                    setIsServicesOpen(false);
                  }}
                >
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Service Areas</h4>
                    {serviceAreas.length > 0 ? (
                      <p className="text-sm text-gray-500">{serviceAreas.length} area{serviceAreas.length !== 1 ? 's' : ''} selected</p>
                    ) : (
                      <p className="text-sm text-gray-400">Select service areas</p>
                    )}
                  </div>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>

                {isAreasOpen && (
                  <div className="mt-2 border border-gray-200 rounded-lg max-h-60 overflow-auto">
                    <div className="sticky top-0 p-2 bg-white border-b">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search areas..."
                          className="w-full p-2 pl-9 text-sm border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          value={areaSearchTerm}
                          onChange={(e) => setAreaSearchTerm(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                        />
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                    <div className="p-2">
                      {filteredAreas.map(area => (
                        <div 
                          key={area}
                          className={`p-2 text-sm rounded-md cursor-pointer ${
                            serviceAreas.includes(area) ? 'bg-blue-50 text-blue-700' : 'hover:bg-gray-50'
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleArea(serviceId, area);
                          }}
                        >
                          <div className="flex items-center">
                            <div className={`w-5 h-5 border rounded mr-3 flex items-center justify-center ${
                              serviceAreas.includes(area) 
                                ? 'bg-blue-500 border-blue-500' 
                                : 'border-gray-300'
                            }`}>
                              {serviceAreas.includes(area) && <Check className="h-3 w-3 text-white" />}
                            </div>
                            {area}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {serviceAreas.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {serviceAreas.slice(0, 3).map(area => (
                      <span 
                        key={area}
                        className="inline-flex items-center px-2.5 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                      >
                        {area}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleArea(serviceId, area);
                          }}
                          className="ml-1.5 text-blue-400 hover:text-blue-600 focus:outline-none"
                          aria-label={`Remove ${area}`}
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </span>
                    ))}
                    {serviceAreas.length > 3 && (
                      <span className="inline-flex items-center px-2.5 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        +{serviceAreas.length - 3} more
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
