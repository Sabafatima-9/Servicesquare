import { useState, useMemo, useCallback } from 'react';
import { Phone } from 'lucide-react';
import ServiceSelection from './ServiceSelection';
import ServiceHeader from './ServiceHeader';

const PHONE = '7842595947';

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
  };

  const handleLocationSelect = useCallback((location: string) => {
    setCurrentLocation(location);
    // You can add additional location handling logic here
  }, []);

  const handleSearch = useCallback((query: string) => {
    setSearchQuery(query);
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Swiggy-style Header */}
      <ServiceHeader
        onLocationSelect={handleLocationSelect}
        onSearch={handleSearch}
        currentLocation={currentLocation}
        isLoadingLocation={isLoadingLocation}
      />

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Appliance Services in {currentLocation}
          </h1>
          <p className="text-gray-600">
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
      </main>
    </div>
  );
}
