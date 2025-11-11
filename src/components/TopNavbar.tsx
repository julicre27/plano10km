import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import type { ProgramSection } from '../types';
import { DumbbellIcon, HistoryIcon, TargetIcon, TrendingUpIcon, RunIcon, BoltIcon } from './icons';

interface TopNavbarProps {
  programContent: ProgramSection[];
  activeSectionId: string;
  onSelectSection: (id: string) => void;
}

const TopNavbar: React.FC<TopNavbarProps> = ({
  programContent,
  activeSectionId,
  onSelectSection,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { sectionId } = useParams<{ sectionId: string }>();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Main Title / Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <RunIcon className="w-8 h-8 text-brand-blue mr-2" />
          <NavLink to="/plan/plano-10km" className="text-2xl font-bold text-gray-800 hover:text-brand-blue transition-colors">
            Plano 10km
          </NavLink>
        </div>

        {/* "MAIS" Dropdown Menu */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center px-4 py-2 rounded-md text-sm font-medium text-white bg-brand-blue hover:bg-brand-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-colors"
          >
            MAIS
            <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
              <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <NavLink
                  to="/history"
                  onClick={() => setIsDropdownOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isActive ? 'bg-gray-100 font-semibold' : ''}`
                  }
                  role="menuitem"
                >
                  <HistoryIcon className="inline-block w-4 h-4 mr-2" /> Histórico
                </NavLink>
                <NavLink
                  to="/goals"
                  onClick={() => setIsDropdownOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isActive ? 'bg-gray-100 font-semibold' : ''}`
                  }
                  role="menuitem"
                >
                  <TargetIcon className="inline-block w-4 h-4 mr-2" /> Metas
                </NavLink>
                <NavLink
                  to="/progress"
                  onClick={() => setIsDropdownOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isActive ? 'bg-gray-100 font-semibold' : ''}`
                  }
                  role="menuitem"
                >
                  <TrendingUpIcon className="inline-block w-4 h-4 mr-2" /> Progresso
                </NavLink>
                <NavLink
                  to="/plan/controle-intensidade"
                  onClick={() => {
                    onSelectSection('controle-intensidade');
                    setIsDropdownOpen(false);
                  }}
                  className={({ isActive }) =>
                    `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isActive || activeSectionId === 'controle-intensidade' ? 'bg-gray-100 font-semibold' : ''}`
                  }
                  role="menuitem"
                >
                  <BoltIcon className="inline-block w-4 h-4 mr-2" /> Controle de Intensidade
                </NavLink>
                <div className="border-t border-gray-100 my-1"></div>
                {programContent.filter(s => s.type === 'week' || s.id === 'plano-10km').map((section) => (
                  <NavLink
                    key={section.id}
                    to={`/plan/${section.id}`}
                    onClick={() => {
                      onSelectSection(section.id);
                      setIsDropdownOpen(false);
                    }}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${isActive || activeSectionId === section.id ? 'bg-gray-100 font-semibold' : ''}`
                    }
                    role="menuitem"
                  >
                    <DumbbellIcon className="inline-block w-4 h-4 mr-2" /> {section.title}
                  </NavLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;