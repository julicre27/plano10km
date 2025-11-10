import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import type { ProgramSection, WorkoutLog } from '../types';
import { DumbbellIcon, HistoryIcon, TargetIcon, TrendingUpIcon, RunIcon } from './icons'; // Assuming these icons exist or will be created

interface TopNavbarProps {
  programContent: ProgramSection[];
  activeSectionId: string;
  onSelectSection: (id: string) => void;
  workoutLogs: Record<string, WorkoutLog[]>;
}

const TopNavbar: React.FC<TopNavbarProps> = ({
  programContent,
  activeSectionId,
  onSelectSection,
}) => {
  const { sectionId } = useParams<{ sectionId: string }>();

  return (
    <nav className="bg-white shadow-md p-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center mb-4 md:mb-0">
          <RunIcon className="w-8 h-8 text-brand-blue mr-2" />
          <h1 className="text-2xl font-bold text-gray-800">Plano de Corrida</h1>
        </div>

        {/* Main Navigation Links */}
        <div className="flex space-x-4 mb-4 md:mb-0">
          <NavLink
            to={`/plan/${activeSectionId}`}
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive || (sectionId && programContent.some(s => s.id === sectionId))
                  ? 'bg-brand-blue text-white'
                  : 'text-gray-700 hover:bg-gray-200'
              }`
            }
          >
            <DumbbellIcon className="w-5 h-5 mr-1" />
            Plano
          </NavLink>
          <NavLink
            to="/history"
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive ? 'bg-brand-blue text-white' : 'text-gray-700 hover:bg-gray-200'
              }`
            }
          >
            <HistoryIcon className="w-5 h-5 mr-1" />
            Histórico
          </NavLink>
          <NavLink
            to="/goals"
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive ? 'bg-brand-blue text-white' : 'text-gray-700 hover:bg-gray-200'
              }`
            }
          >
            <TargetIcon className="w-5 h-5 mr-1" />
            Metas
          </NavLink>
          <NavLink
            to="/progress"
            className={({ isActive }) =>
              `flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive ? 'bg-brand-blue text-white' : 'text-gray-700 hover:bg-gray-200'
              }`
            }
          >
            <TrendingUpIcon className="w-5 h-5 mr-1" />
            Progresso
          </NavLink>
        </div>

        {/* Section Selector (Dropdown or Scrollable) */}
        <div className="relative">
          <select
            value={activeSectionId}
            onChange={(e) => onSelectSection(e.target.value)}
            className="block w-full md:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-blue focus:border-brand-blue sm:text-sm rounded-md shadow-sm bg-white text-gray-800"
          >
            {programContent.map((section) => (
              <option key={section.id} value={section.id}>
                {section.title}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;