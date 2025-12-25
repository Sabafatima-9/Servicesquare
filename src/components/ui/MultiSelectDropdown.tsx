import { useState, useRef, useEffect } from 'react';
import { X, ChevronDown, Check, Search } from 'lucide-react';

interface MultiSelectDropdownProps {
  options: string[];
  selected: string[];
  onSelect: (selected: string[]) => void;
  placeholder?: string;
  className?: string;
  searchable?: boolean;
  maxSelections?: number;
}

export function MultiSelectDropdown({
  options,
  selected,
  onSelect,
  placeholder = 'Select options',
  className = '',
  searchable = true,
  maxSelections = Infinity,
}: MultiSelectDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleOption = (option: string) => {
    const newSelected = selected.includes(option)
      ? selected.filter((item) => item !== option)
      : [...selected, option].slice(-maxSelections);
    onSelect(newSelected);
  };

  const removeOption = (option: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(selected.filter((item) => item !== option));
  };

  const clearAll = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect([]);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <div 
      className={`relative w-full ${className}`} 
      ref={dropdownRef}
    >
      <div
        className={`flex flex-wrap items-center gap-2 p-3 bg-white border rounded-lg cursor-pointer transition-all duration-200 ${
          isOpen 
            ? 'border-blue-500 ring-2 ring-blue-100 shadow-sm' 
            : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
        }`}
        onClick={() => {
          setIsOpen(!isOpen);
          setSearchTerm('');
        }}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls="dropdown-options"
      >
        {selected.length === 0 ? (
          <span className="text-gray-500 text-sm sm:text-base">{placeholder}</span>
        ) : (
          <div className="flex flex-wrap gap-2">
            {selected.slice(0, 3).map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-1 px-2.5 py-1 text-xs sm:text-sm bg-blue-50 text-blue-800 rounded-full border border-blue-100 hover:bg-blue-100 transition-colors"
              >
                {item}
                <button
                  type="button"
                  onClick={(e) => removeOption(item, e)}
                  className="text-blue-500 hover:text-blue-700 focus:outline-none ml-0.5"
                  aria-label={`Remove ${item}`}
                >
                  <X size={14} />
                </button>
              </span>
            ))}
            {selected.length > 3 && (
              <span className="inline-flex items-center px-2.5 py-1 text-xs bg-gray-100 text-gray-600 rounded-full">
                +{selected.length - 3} more
              </span>
            )}
          </div>
        )}
        <div className="ml-auto flex items-center space-x-2">
          {selected.length > 0 && (
            <button
              type="button"
              onClick={clearAll}
              className="text-gray-400 hover:text-gray-600 focus:outline-none"
              aria-label="Clear all"
            >
              <X size={16} />
            </button>
          )}
          <ChevronDown
            size={18}
            className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            aria-hidden="true"
          />
        </div>
      </div>

      {isOpen && (
        <div 
          className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
          style={{
            maxHeight: 'min(400px, 70vh)',
            boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
          }}
        >
          {searchable && (
            <div className="sticky top-0 bg-white p-2 border-b border-gray-100">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={16} className="text-gray-400" />
                </div>
                <input
                  ref={inputRef}
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Search areas..."
                  aria-label="Search areas"
                />
              </div>
            </div>
          )}
          
          <div 
            id="dropdown-options"
            className="overflow-y-auto"
            style={{ maxHeight: 'calc(min(400px, 70vh) - 50px)' }}
            role="listbox"
            aria-multiselectable="true"
          >
            {filteredOptions.length === 0 ? (
              <div className="px-4 py-3 text-sm text-gray-500 text-center">
                No matching areas found
              </div>
            ) : (
              <ul className="divide-y divide-gray-100">
                {filteredOptions.map((option) => {
                  const isSelected = selected.includes(option);
                  return (
                    <li 
                      key={option}
                      className={`px-4 py-2.5 hover:bg-gray-50 cursor-pointer transition-colors ${
                        isSelected ? 'bg-blue-50' : ''
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleOption(option);
                      }}
                      role="option"
                      aria-selected={isSelected}
                    >
                      <div className="flex items-center">
                        <div 
                          className={`flex-shrink-0 w-5 h-5 flex items-center justify-center border rounded mr-3 transition-colors ${
                            isSelected 
                              ? 'bg-blue-500 border-blue-500' 
                              : 'border-gray-300 group-hover:border-blue-400'
                          }`}
                        >
                          {isSelected && <Check size={14} className="text-white" />}
                        </div>
                        <span className="text-sm text-gray-800">{option}</span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
          
          {selected.length > 0 && (
            <div className="sticky bottom-0 bg-white border-t border-gray-100 p-2 flex justify-between items-center">
              <span className="text-xs text-gray-500">
                {selected.length} {selected.length === 1 ? 'area' : 'areas'} selected
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="text-sm font-medium text-blue-600 hover:text-blue-700 focus:outline-none"
              >
                Done
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
