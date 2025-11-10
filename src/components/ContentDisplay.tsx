import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import type { ProgramSection, WorkoutLog } from '../types';
import { CalendarIcon, PlusCircleIcon, EditIcon, TrashIcon } from './icons'; // Assuming these icons exist or will be created

interface ContentDisplayProps {
  section?: ProgramSection;
  workoutLogs: WorkoutLog[];
  onOpenLogModal: (log?: WorkoutLog, index?: number) => void;
}

const ContentDisplay: React.FC<ContentDisplayProps> = ({ section, workoutLogs, onOpenLogModal }) => {
  const { sectionId } = useParams<{ sectionId: string }>();

  useEffect(() => {
    // This effect can be used to update activeSectionId in App.tsx if needed,
    // but for now, the select in TopNavbar handles it.
    // If the URL changes directly, App.tsx's activeSectionId might need to sync.
  }, [sectionId]);

  if (!section) {
    return (
      <div className="container mx-auto p-6 text-center text-gray-600">
        <p>Selecione uma seção do plano para visualizar o conteúdo.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 animate-fade-in-up">
      <div className="bg-white rounded-lg shadow-lg p-8">
        {section.content}

        {section.isLoggable && (
          <div className="mt-8 border-t pt-6 border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <CalendarIcon className="w-6 h-6 text-brand-blue" />
              Meus Registros de Treino
            </h3>
            {workoutLogs.length === 0 ? (
              <p className="text-gray-600 mb-4">Nenhum treino registrado para esta semana ainda.</p>
            ) : (
              <div className="space-y-4 mb-4">
                {workoutLogs.map((log, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-md border border-gray-200 flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-800">Data do Treino: {log.workoutDate}</p>
                      <p className="text-gray-700">Duração: {log.time}, Distância: {log.distance}</p>
                      <p className="text-gray-700">Esforço: {log.effort}</p>
                      {log.comments && <p className="text-gray-600 italic">"{log.comments}"</p>}
                      {log.stravaLink && (
                        <a href={log.stravaLink} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline text-sm mt-1 block">
                          Ver no Strava
                        </a>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => onOpenLogModal(log, index)}
                        className="p-2 rounded-full text-brand-blue hover:bg-brand-blue hover:text-white transition-colors"
                        title="Editar registro"
                      >
                        <EditIcon className="w-5 h-5" />
                      </button>
                      {/* Add delete functionality if needed */}
                      {/* <button
                        onClick={() => handleDeleteLog(index)}
                        className="p-2 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                        title="Excluir registro"
                      >
                        <TrashIcon className="w-5 h-5" />
                      </button> */}
                    </div>
                  </div>
                ))}
              </div>
            )}
            <button
              onClick={() => onOpenLogModal()}
              className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-blue hover:bg-brand-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-colors"
            >
              <PlusCircleIcon className="-ml-1 mr-2 h-5 w-5" />
              Registrar Novo Treino
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentDisplay;