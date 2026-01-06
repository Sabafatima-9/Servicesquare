import { useState, useRef, useEffect } from 'react';
import { MapPin, Search, ChevronDown, X, Loader2 } from 'lucide-react';

// Extend the Window interface to include the geolocation property
declare global {
  interface Window {
    geolocation?: Geolocation;
  }
}

interface ServiceHeaderProps {
  onLocationSelect: (location: string) => void;
  onSearch: (query: string) => void;
  currentLocation: string;
  isLoadingLocation: boolean;
}

export default function ServiceHeader({ 
  onLocationSelect, 
  onSearch, 
  currentLocation,
  isLoadingLocation 
}: ServiceHeaderProps) {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationInput, setLocationInput] = useState(currentLocation || '');
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sample locations - replace with your actual locations data
  const locations = [
    'Banjara Hills', 'Jubilee Hills', 'Gachibowli', 'Hitech City', 'Kondapur',
    'Madhapur', 'Financial District', 'Nanakramguda', 'Manikonda', 'Kukatpally'
  ];

  const filteredLocations = locations.filter(loc => 
    loc.toLowerCase().includes(locationInput.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowLocationDropdown(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLocationSelect = (location: string) => {
    setLocationInput(location);
    onLocationSelect(location);
    setShowLocationDropdown(false);
  };

  const handleUseCurrentLocation = () => {
    if (navigator.geolocation) {
      // The loading state is handled by the parent component through the isLoadingLocation prop
      navigator.geolocation.getCurrentPosition(
        () => {
          // In a real app, you would reverse geocode these coordinates
          const location = 'Current Location';
          setLocationInput(location);
          onLocationSelect(location);
        },
        (error) => {
          console.error('Error getting location:', error);
          // Fallback to a default location
          const location = 'Hyderabad';
          setLocationInput(location);
          onLocationSelect(location);
        }
      );
    } else {
      // Browser doesn't support Geolocation
      const location = 'Hyderabad';
      setLocationInput(location);
      onLocationSelect(location);
    }
  };

  return (
    <div className="bg-blue-600 w-full py-4 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-3">
          {/* Location Input */}
          <div className="relative" ref={dropdownRef}>
            <div 
              className="flex items-center bg-white rounded-md p-3 shadow-sm cursor-pointer"
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
            >
              <MapPin className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
              <input
                type="text"
                className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
                placeholder="Enter your service area"
                value={locationInput}
                onChange={(e) => setLocationInput(e.target.value)}
                onClick={(e) => {
                  e.stopPropagation();
                  setShowLocationDropdown(true);
                }}
              />
              {isLoadingLocation ? (
                <Loader2 className="h-5 w-5 text-gray-400 animate-spin" />
              ) : (
                <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${showLocationDropdown ? 'rotate-180' : ''}`} />
              )}
            </div>

            {/* Location Dropdown */}
            {showLocationDropdown && (
              <div className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg max-h-60 overflow-auto">
                <div className="p-2 border-b">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Search for area"
                      value={locationInput}
                      onChange={(e) => setLocationInput(e.target.value)}
                      autoFocus
                    />
                  </div>
                </div>
                
                <div className="py-1">
                  {filteredLocations.length > 0 ? (
                    filteredLocations.map((location) => (
                      <div
                        key={location}
                        className="px-4 py-2.5 hover:bg-gray-50 cursor-pointer flex items-center"
                        onClick={() => handleLocationSelect(location)}
                      >
                        <MapPin className="h-4 w-4 text-gray-500 mr-3" />
                        <span className="text-gray-700">{location}</span>
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-3 text-sm text-gray-500">
                      No areas found. Try a different search.
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Search Input */}
          <div className="flex items-center bg-white rounded-md p-3 shadow-sm">
            <Search className="h-5 w-5 text-gray-500 mr-2" />
            <input
              type="text"
              className="flex-1 outline-none text-gray-700 placeholder-gray-400"
              placeholder="Search for service, category or more"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                onSearch(e.target.value);
              }}
            />
            {searchQuery && (
              <button 
                className="ml-2 text-gray-400 hover:text-gray-600"
                onClick={() => {
                  setSearchQuery('');
                  onSearch('');
                }}
              >
                <X className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Current Location Button */}
          <button
            className="flex items-center text-white text-sm font-medium py-2"
            onClick={handleUseCurrentLocation}
          >
            {isLoadingLocation ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Detecting location...
              </>
            ) : (
              <>
                <MapPin className="h-4 w-4 mr-2" />
                Use my current location
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
