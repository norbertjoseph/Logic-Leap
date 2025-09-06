import React, { useState, useEffect, useRef } from 'react';
import { FaChevronDown, FaHistory, FaDotCircle } from 'react-icons/fa';
import { useRole } from '../context/RoleContext'; // 1. Import the useRole hook

const Header: React.FC = () => {
  const { currentRole, setCurrentRole } = useRole(); // 2. Get global role state
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleRoleChange = (role: 'CEO' | 'Plant Manager') => {
    setCurrentRole(role);
    setIsOpen(false);
  };

  // Logic to close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);


  return (
    <header className="flex items-center justify-between h-20 px-6 bg-white border-b border-border-color">
      {/* 3. Dropdown logic */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 p-2 border border-border-color rounded-md cursor-pointer text-sm font-medium"
        >
          <span>{currentRole}</span>
          <FaChevronDown size={12} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full mt-2 w-40 bg-white border border-border-color rounded-md shadow-lg z-10">
            <button
              onClick={() => handleRoleChange('CEO')}
              className="w-full text-left px-4 py-2 text-sm text-text-dark hover:bg-gray-100"
            >
              CEO
            </button>
            <button
              onClick={() => handleRoleChange('Plant Manager')}
              className="w-full text-left px-4 py-2 text-sm text-text-dark hover:bg-gray-100"
            >
              Plant Manager
            </button>
          </div>
        )}
      </div>

      <div className="flex items-center gap-5 text-sm text-text-light">
        <span className="flex items-center gap-2"><FaHistory /> Updated: 18:26:14</span>
        <span className="hidden md:block">Historical</span>
        <div className="flex items-center gap-2 text-text-dark font-medium">
          <FaDotCircle className="text-green-500" /> Real-time
        </div>
        <span className="font-medium text-text-dark hidden md:block">Sep 05, 2025</span>
      </div>
    </header>
  );
};
export default Header;