import { MapPin, Phone, Search, ChevronDown, X } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const PHONE = '7842595947';

const areas = [
  'Banjara Hills',
  'Jubilee Hills',
  'Masab Tank',
  'Ameerpet',
  'Suncity',
  'Attapur',
  'Lingamaplly',
  'Tellapur',
  'Gopanpally',
  'Shamshabad',
  'Moinabad',
  'Chandanagar',
  'BHEL',
  'Kukatpally',
  'Nizampet',
  'Ramachanrapuram',
  'Nallagandla',
  'Film Nagar',
  'Rajendar Nagar',
  'Kismatpur',
  'Kali Mandir',
  'Katedhan',
  'Borabanda',
  'Yousufguda',
  'Lakdi Ka Pul',
  'Mallepally',
  'Somajiguda',
  'Begumpet',
  'Khairatabad',
  'Balkampet',
  'Gachibowli',
  'Panjagutta',
  'Hitech City',
  'Kondapur',
  'Bachupally',
  'Manikonda',
  'Miyapur',
  'Narsingi',
  'Kokapet',
  'Bandlaguda Jagir',
  'Shaikpet',
  'Tolichowki',
  'Rai Durg',
  'Near me',
];

const serviceOptions = [
  'Fridge Repair & Service',
  'Commercial Fridge Repair & Service',
  'Deep Freezer Repair & Service',
  'Washing Machine Repair & Service',
  'AC Repair & Service',
  'Oven Repair & Service',
];

export default function ServiceAreas() {
  const [selectedService, setSelectedService] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredAreas = areas.filter(area =>
    area.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
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

        <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MapPin className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-[#2E5AAC] focus:border-transparent transition-all duration-200"
                  placeholder="Search your area..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onClick={() => setIsDropdownOpen(true)}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>
              
              <div className="relative w-full sm:w-64" ref={dropdownRef}>
                <button
                  type="button"
                  className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-lg shadow-sm text-left focus:outline-none focus:ring-2 focus:ring-[#2E5AAC] focus:border-transparent"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className="truncate">
                    {selectedService || 'Select a service'}
                  </span>
                  <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${isDropdownOpen ? 'transform rotate-180' : ''}`} />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    {serviceOptions.map((service) => (
                      <div
                        key={service}
                        className={`cursor-pointer select-none relative py-2 pl-3 pr-9 hover:bg-gray-100 ${selectedService === service ? 'bg-gray-100' : ''}`}
                        onClick={() => {
                          setSelectedService(service);
                          setIsDropdownOpen(false);
                        }}
                      >
                        <div className="flex items-center">
                          <span className="font-normal block truncate">
                            {service}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <a
                href={`tel:${PHONE}`}
                className="inline-flex items-center justify-center gap-2 bg-[#2E5AAC] hover:bg-[#1e3f7a] text-white px-6 py-3 rounded-lg font-medium whitespace-nowrap transition-colors duration-200 shadow-sm"
              >
                <Phone size={18} />
                Call {PHONE}
              </a>
            </div>
          </div>

          <div className="p-6">
            {searchTerm || selectedService ? (
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-slate-800">
                  {selectedService ? `${selectedService} in` : 'Available in'}
                  {searchTerm && ` "${searchTerm}"`}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {filteredAreas.length > 0 ? (
                    filteredAreas.map((area) => (
                      <div
                        key={area}
                        className="flex items-center gap-3 bg-gray-50 hover:bg-gray-100 rounded-lg px-4 py-3 transition-colors duration-150"
                      >
                        <span className="w-2 h-2 bg-[#2E5AAC] rounded-full flex-shrink-0" />
                        <span className="text-sm text-slate-700">{area}</span>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-6 text-gray-500">
                      No areas found matching "{searchTerm}"
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 mb-4">
                  <Search className="h-6 w-6 text-[#2E5AAC]" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-1">Search for your area</h3>
                <p className="text-gray-500">
                  {selectedService 
                    ? `Find out if we service your area for ${selectedService}`
                    : 'Select a service and enter your location to check availability'}
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
