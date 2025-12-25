import { MapPin, Phone, Search, ChevronDown, X, Check, XCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

type ServiceType = {
  id: string;
  name: string;
};

type AreaType = {
  id: string;
  name: string;
  selected: boolean;
};

const PHONE = '7842595947';

const allAreas = [
  'Banjara Hills', 'Jubilee Hills', 'Masab Tank', 'Ameerpet', 'Suncity',
  'Attapur', 'Lingamaplly', 'Tellapur', 'Gopanpally', 'Shamshabad',
  'Moinabad', 'Chandanagar', 'BHEL', 'Kukatpally', 'Nizampet',
  'Ramachanrapuram', 'Nallagandla', 'Film Nagar', 'Rajendar Nagar',
  'Kismatpur', 'Kali Mandir', 'Katedhan', 'Borabanda', 'Yousufguda',
  'Lakdi Ka Pul', 'Mallepally', 'Somajiguda', 'Begumpet', 'Khairatabad',
  'Balkampet', 'Gachibowli', 'Panjagutta', 'Hitech City', 'Kondapur',
  'Bachupally', 'Manikonda', 'Miyapur', 'Narsingi', 'Kokapet',
  'Bandlaguda Jagir', 'Shaikpet', 'Tolichowki', 'Rai Durg', 'Near me'
];

const serviceOptions: ServiceType[] = [
  { id: 'fridge', name: 'Fridge Repair & Service' },
  { id: 'commercial-fridge', name: 'Commercial Fridge Repair & Service' },
  { id: 'freezer', name: 'Deep Freezer Repair & Service' },
  { id: 'washing-machine', name: 'Washing Machine Repair & Service' },
  { id: 'ac', name: 'AC Repair & Service' },
  { id: 'oven', name: 'Oven Repair & Service' },
];

export default function ServiceAreas() {
  const [selectedServices, setSelectedServices] = useState<ServiceType[]>([]);
  const [areas, setAreas] = useState<AreaType[]>(
    allAreas.map(area => ({
      id: area.toLowerCase().replace(/\s+/g, '-'),
      name: area,
      selected: false
    }))
  );
  const [searchTerm, setSearchTerm] = useState('');
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isAreaDropdownOpen, setIsAreaDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter areas based on search term
  const filteredAreas = areas.filter(area =>
    area.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Toggle area selection
  const toggleAreaSelection = (id: string) => {
    setAreas(areas.map(area => 
      area.id === id ? { ...area, selected: !area.selected } : area
    ));
  };

  // Toggle service selection
  const toggleServiceSelection = (service: ServiceType) => {
    setSelectedServices(prev => 
      prev.some(s => s.id === service.id)
        ? prev.filter(s => s.id !== service.id)
        : [...prev, service]
    );
  };

  // Remove selected service
  const removeService = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedServices(prev => prev.filter(service => service.id !== id));
  };

  // Handle click outside dropdowns
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsServiceDropdownOpen(false);
      setIsAreaDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <section className="py-12 bg-white" id="service-areas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-800 mb-3">Our Service Areas</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide professional appliance repair services across Hyderabad
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b">
            <div className="space-y-4">
              {/* Services Multi-Select Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <label htmlFor="service-select" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Services
                </label>
                <div 
                  className="relative w-full cursor-pointer"
                  onClick={() => {
                    setIsServiceDropdownOpen(!isServiceDropdownOpen);
                    setIsAreaDropdownOpen(false);
                  }}
                >
                  <div className="min-h-[44px] flex items-center flex-wrap gap-2 p-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[#2E5AAC] focus:border-transparent">
                    {selectedServices.length === 0 ? (
                      <span className="text-gray-400 ml-1">Select services...</span>
                    ) : (
                      selectedServices.map(service => (
                        <span 
                          key={service.id}
                          className="inline-flex items-center bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full"
                        >
                          {service.name}
                          <button 
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              removeService(service.id, e);
                            }}
                            className="ml-1.5 text-blue-400 hover:text-blue-600"
                          >
                            <X size={14} />
                          </button>
                        </span>
                      ))
                    )}
                    <ChevronDown 
                      className={`ml-auto h-5 w-5 text-gray-400 transition-transform ${isServiceDropdownOpen ? 'transform rotate-180' : ''}`} 
                    />
                  </div>
                  
                  {isServiceDropdownOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      {serviceOptions.map((service) => (
                        <div
                          key={service.id}
                          className={`flex items-center justify-between px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 ${selectedServices.some(s => s.id === service.id) ? 'bg-blue-50' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleServiceSelection(service);
                          }}
                        >
                          <span className="block truncate">{service.name}</span>
                          {selectedServices.some(s => s.id === service.id) && (
                            <Check className="h-4 w-4 text-blue-600" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Areas Multi-Select Dropdown */}
              <div className="relative">
                <label htmlFor="area-search" className="block text-sm font-medium text-gray-700 mb-1">
                  Select Areas
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="area-search"
                    className="block w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[#2E5AAC] focus:border-transparent"
                    placeholder="Search areas..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onFocus={() => setIsAreaDropdownOpen(true)}
                  />
                  {searchTerm && (
                    <button
                      type="button"
                      onClick={() => setSearchTerm('')}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                      <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                    </button>
                  )}
                </div>

                {/* Selected Areas Chips */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {areas
                    .filter(area => area.selected)
                    .map(area => (
                      <span 
                        key={area.id}
                        className="inline-flex items-center bg-blue-50 text-blue-700 text-sm px-3 py-1 rounded-full"
                      >
                        {area.name}
                        <button 
                          type="button"
                          onClick={() => toggleAreaSelection(area.id)}
                          className="ml-1.5 text-blue-400 hover:text-blue-600"
                        >
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                </div>

                {/* Areas Dropdown */}
                {isAreaDropdownOpen && filteredAreas.length > 0 && (
                  <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {filteredAreas.map((area) => (
                      <div
                        key={area.id}
                        className={`flex items-center justify-between px-4 py-2 text-sm cursor-pointer hover:bg-gray-50 ${area.selected ? 'bg-blue-50' : ''}`}
                        onClick={() => toggleAreaSelection(area.id)}
                      >
                        <span className="block truncate">{area.name}</span>
                        {area.selected && <Check className="h-4 w-4 text-blue-600" />}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Call to Action */}
              <div className="pt-2">
                <a
                  href={`tel:${PHONE}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#2E5AAC] hover:bg-[#1e3f7a] text-white px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-colors duration-200 shadow-sm"
                >
                  <Phone size={18} />
                  Call {PHONE}
                </a>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="p-6 bg-gray-50">
            {selectedServices.length > 0 || searchTerm ? (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-slate-800">
                  {selectedServices.length > 0 
                    ? `${selectedServices.map(s => s.name).join(', ')} ${searchTerm ? 'in' : 'available in'}`
                    : 'Searching in'}
                  {searchTerm && ` "${searchTerm}"`}
                </h3>
                
                {areas.some(a => a.selected) && (
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium text-gray-700">Selected Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {areas
                        .filter(area => area.selected)
                        .map(area => (
                          <span 
                            key={area.id}
                            className="inline-flex items-center bg-white px-3 py-1.5 rounded-full text-sm shadow-sm border border-gray-200"
                          >
                            <MapPin className="h-4 w-4 text-[#2E5AAC] mr-1.5" />
                            {area.name}
                          </span>
                        ))}
                    </div>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {filteredAreas.length > 0 ? (
                    filteredAreas.map((area) => (
                      <div
                        key={area.id}
                        className={`flex items-center gap-3 bg-white p-3 rounded-lg border transition-all duration-150 ${area.selected ? 'border-[#2E5AAC] ring-1 ring-[#2E5AAC]/20' : 'border-gray-200 hover:border-gray-300'}`}
                        onClick={() => toggleAreaSelection(area.id)}
                      >
                        <div className={`flex-shrink-0 h-2 w-2 rounded-full ${area.selected ? 'bg-[#2E5AAC]' : 'bg-gray-300'}`} />
                        <span className="text-sm font-medium text-gray-900">{area.name}</span>
                        {area.selected && (
                          <Check className="ml-auto h-4 w-4 text-[#2E5AAC]" />
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-6 text-gray-500">
                      <XCircle className="mx-auto h-10 w-10 text-gray-300 mb-2" />
                      <p>No areas found matching "{searchTerm}"</p>
                      <p className="text-sm text-gray-400 mt-1">Try a different search term</p>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-50 mb-4">
                  <Search className="h-7 w-7 text-[#2E5AAC]" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">Find Services in Your Area</h3>
                <p className="text-gray-500">
                  Select services and search for your location to check availability
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500">
            Don't see your area listed? Call us to check availability
          </p>
          <a 
            href={`tel:${PHONE}`} 
            className="mt-2 inline-flex items-center text-[#2E5AAC] hover:text-[#1e3f7a] font-medium transition-colors"
          >
            <Phone size={16} className="mr-1" /> {PHONE}
          </a>
        </div>
      </div>
    </section>
  );
}
