<<<<<<< HEAD
import { useState, useMemo, useCallback } from 'react';
import { Phone } from 'lucide-react';
import ServiceSelection from './ServiceSelection';
=======
import { useState, useCallback } from 'react';
import { Phone, MapPin, ChevronDown, Check } from 'lucide-react';
>>>>>>> ede5f61d67259012c67ef0655a73c406269c8ffb
import ServiceHeader from './ServiceHeader';

const PHONE = '7842595947';

<<<<<<< HEAD
export default function ServiceAreas() {
  const [selectedServices, setSelectedServices] = useState<Record<string, string[]>>({});
  const [currentLocation, setCurrentLocation] = useState('Hyderabad');
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleServiceSelect = (serviceId: string, areas: string[]) => {
    setSelectedServices(prev => ({
      ...prev,
      [serviceId]: areas
    }));
=======
// Service data structure
const services = [
  {
    id: 'fridge',
    name: 'Fridge Repair & Service',
    description: 'Expert repair for all refrigerator brands and models',
    areas: [
      'Banjara Hills', 'Jubilee Hills', 'Masab Tank', 'Ameerpet', 'Suncity',
      'Attapur', 'Lingamaplly', 'Tellapur', 'Gopanpally', 'Shamshabad',
      'Moinabad', 'Chandanagar', 'BHEL', 'Kukatpally', 'Nizampet',
      'Ramachanrapuram', 'Nallagandla', 'Film Nagar', 'Rajendar Nagar',
      'Kismatpur', 'Kali Mandir', 'Katedhan', 'Borabanda', 'Yousufguda',
      'Lakdi Ka Pul', 'Mallepally', 'Somajiguda', 'Begumpet', 'Khairatabad',
      'Balkampet', 'Gachibowli', 'Panjagutta', 'Hitech City', 'Kondapur',
      'Bachupally', 'Manikonda', 'Miyapur', 'Narsingi', 'Kokapet',
      'Bandlaguda Jagir', 'Shaikpet', 'Tolichowki', 'Rai Durg'
    ]
  },
  {
    id: 'commercial-fridge',
    name: 'Commercial Fridge Repair',
    description: 'Specialized service for commercial refrigeration units',
    areas: [] // Will be populated with the same areas as fridge
  },
  {
    id: 'deep-freezer',
    name: 'Deep Freezer Repair',
    description: 'Professional maintenance for optimal performance',
    areas: []
  },
  {
    id: 'washing-machine',
    name: 'Washing Machine Repair',
    description: 'Comprehensive service for all types of washers',
    areas: []
  },
  {
    id: 'ac',
    name: 'AC Repair & Service',
    description: 'Expert service for all AC types and brands',
    areas: []
  },
  {
    id: 'microwave',
    name: 'Microwave Oven Repair',
    description: 'Fast and reliable microwave repair services',
    areas: []
  },
  {
    id: 'dishwasher',
    name: 'Dishwasher Repair',
    description: 'Professional dishwasher maintenance and repair',
    areas: []
  },
  {
    id: 'oven',
    name: 'Oven Repair & Service',
    description: 'Expert repair for all types of ovens',
    areas: []
  }
];

// Populate areas for all services
services.forEach(service => {
  if (service.areas.length === 0 && services[0]) {
    service.areas = [...services[0].areas];
  }
});

export default function ServiceAreas() {
  const [currentLocation, setCurrentLocation] = useState('Hyderabad');
  const [_, setSearchQuery] = useState('');
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [filteredServices, setFilteredServices] = useState(services);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setShowServiceDropdown(false);
>>>>>>> ede5f61d67259012c67ef0655a73c406269c8ffb
  };

  const handleLocationSelect = useCallback((location: string) => {
    setCurrentLocation(location);
<<<<<<< HEAD
    // You can add additional location handling logic here
=======
>>>>>>> ede5f61d67259012c67ef0655a73c406269c8ffb
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
<<<<<<< HEAD
    // Implement search functionality as needed
  }, []);

  const selectedCount = useMemo(() => {
    return Object.values(selectedServices).reduce((sum, areas) => sum + areas.length, 0);
  }, [selectedServices]);

  const selectedServicesCount = useMemo(() => {
    return Object.keys(selectedServices).filter(id => selectedServices[id].length > 0).length;
  }, [selectedServices]);

  // Filter services based on search query
  const filteredServices = useMemo(() => {
    if (!searchQuery) return selectedServices;
    
    const query = searchQuery.toLowerCase();
    return Object.entries(selectedServices).reduce((acc, [serviceId, areas]) => {
      const serviceName = serviceId.split('-').join(' ');
      if (serviceName.includes(query)) {
        acc[serviceId] = areas;
      }
      return acc;
    }, {} as Record<string, string[]>);
  }, [selectedServices, searchQuery]);
=======
    if (query.trim() === '') {
      setFilteredServices(services);
    } else {
      const filtered = services.filter(service =>
        service.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredServices(filtered);
    }
  }, []);

  const selectedServiceData = services.find(s => s.id === selectedService) || services[0];
>>>>>>> ede5f61d67259012c67ef0655a73c406269c8ffb

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Swiggy-style Header */}
      <ServiceHeader
        onLocationSelect={handleLocationSelect}
        onSearch={handleSearch}
        currentLocation={currentLocation}
<<<<<<< HEAD
        isLoadingLocation={isLoadingLocation}
=======
        isLoadingLocation={false}
>>>>>>> ede5f61d67259012c67ef0655a73c406269c8ffb
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Appliance Services in {currentLocation}
          </h1>
          <p className="text-gray-600">
<<<<<<< HEAD
            Select the services you need for your home or business
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-4 sm:p-6">
            <ServiceSelection 
              onServiceSelect={handleServiceSelect}
              selectedServices={filteredServices}
            />
          </div>
        </div>

        {selectedCount > 0 && (
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 sm:p-8 shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">Ready to book your service?</h3>
                <p className="text-blue-100">
                  You've selected {selectedCount} area{selectedCount !== 1 ? 's' : ''} across {selectedServicesCount} service{selectedServicesCount !== 1 ? 's' : ''}.
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
=======
            Select the service you need for your home or business
          </p>
        </div>

        {/* Service Selection Dropdown */}
        <div className="relative mb-6">
          <button
            type="button"
            className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-3 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            onClick={() => setShowServiceDropdown(!showServiceDropdown)}
          >
            <div className="flex items-center justify-between">
              <span className="block truncate">
                {selectedService ? 
                  services.find(s => s.id === selectedService)?.name || 'Select a service' 
                  : 'Select a service'}
              </span>
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </div>
          </button>

          {showServiceDropdown && (
            <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="cursor-default select-none relative py-2 pl-3 pr-9 hover:bg-blue-50"
                  onClick={() => handleServiceSelect(service.id)}
                >
                  <div className="flex items-center">
                    <span className="font-normal block truncate">
                      {service.name}
                    </span>
                  </div>
                  {selectedService === service.id && (
                    <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-blue-600">
                      <Check className="h-5 w-5" />
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Service Areas */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              {selectedServiceData.name} Areas in {currentLocation}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {selectedServiceData.areas.map((area) => (
                <div key={area} className="flex items-center p-3 hover:bg-gray-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                  <span className="text-gray-700">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 sm:p-8 shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="text-white">
              <h3 className="text-xl font-bold mb-2">Need service in your area?</h3>
              <p className="text-blue-100">
                Call us now to book a service appointment
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
>>>>>>> ede5f61d67259012c67ef0655a73c406269c8ffb
      </main>
    </div>
  );
}
