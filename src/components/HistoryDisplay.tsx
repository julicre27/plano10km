import React from 'react';
import type { WorkoutLog, ProgramSection } from '../types';
import { HistoryIcon } from './icons';

interface HistoryDisplayProps {
  workoutLogs: Record<string, WorkoutLog[]>;
  programSections: ProgramSection[];
}

const HistoryDisplay: React.FC<HistoryDisplayProps> = ({ workoutLogs, programSections }) => {
  const allLogs: (WorkoutLog & { sectionTitle: string })[] = [];

  programSections.forEach(section => {
    if (workoutLogs[section.id]) {
      workoutLogs[section.id].forEach(log => {
        allLogs.push({ ...log, sectionTitle: section.title });
      });
    }
  });

  // Sort logs by workout date, most recent first
  allLogs.sort((a, b) => new Date(b.workoutDate).getTime() - new Date(a.workoutDate).getTime());

  return (
    <div className="container mx-auto p-6 animate-fade-in-up">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <HistoryIcon className="w-8 h-8 text-brand-blue" />
          Histórico de Treinos
        </h2>

        {allLogs.length === 0 ? (
          <p className="text-gray-600">Nenhum treino registrado ainda. Comece a registrar seus treinos para ver seu histórico aqui!</p>
        ) : (
          <div className="space-y-6">
            {allLogs.map((log, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-md border border-gray-200 shadow-sm">
                <p className="text-sm text-gray-500 mb-1">Registrado em: {log.logDate}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{log.sectionTitle} - Treino em {log.workoutDate}</h3>
                <ul className="text-gray-700 space-y-1">
                  <li><strong className="font-medium">Duração:</strong> {log.time}</li>
                  <li><strong className="font-medium">Distância:</strong> {log.distance}</li>
                  <li><strong className="font-medium">Esforço:</strong> {log.effort}</li>
                  {log.comments && <li><strong className="font-medium">Comentários:</strong> {log.comments}</li>}
                  {log.stravaLink && (
                    <li>
                      <a href={log.stravaLink} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline text-sm mt-1 block">
                        Ver no Strava
                      </a>
                    </li>
                  )}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryDisplay;