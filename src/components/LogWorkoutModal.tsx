import React, { useState, useEffect } from 'react';
import type { WorkoutLog } from '../types';
import { EffortLevel } from '../types';
import { XIcon } from './icons'; // Assuming XIcon exists or will be created

interface LogWorkoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (log: WorkoutLog, logIndex?: number) => void;
  weekTitle: string;
  existingLog?: WorkoutLog | null;
  logIndexToUpdate?: number | null;
}

const LogWorkoutModal: React.FC<LogWorkoutModalProps> = ({
  isOpen,
  onClose,
  onSave,
  weekTitle,
  existingLog,
  logIndexToUpdate,
}) => {
  const [workoutDate, setWorkoutDate] = useState('');
  const [time, setTime] = useState('');
  const [distance, setDistance] = useState('');
  const [effort, setEffort] = useState<EffortLevel>(EffortLevel.Leve);
  const [comments, setComments] = useState('');
  const [stravaLink, setStravaLink] = useState('');

  useEffect(() => {
    if (isOpen && existingLog) {
      setWorkoutDate(existingLog.workoutDate);
      setTime(existingLog.time);
      setDistance(existingLog.distance);
      setEffort(existingLog.effort);
      setComments(existingLog.comments);
      setStravaLink(existingLog.stravaLink || '');
    } else if (isOpen) {
      // Reset form when opening for a new log
      setWorkoutDate(new Date().toISOString().split('T')[0]); // Default to today
      setTime('');
      setDistance('');
      setEffort(EffortLevel.Leve);
      setComments('');
      setStravaLink('');
    }
  }, [isOpen, existingLog]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!workoutDate || !time || !distance) {
      alert('Por favor, preencha a data, duração e distância do treino.');
      return;
    }

    const newLog: WorkoutLog = {
      workoutDate,
      time,
      distance,
      effort,
      comments,
      logDate: new Date().toLocaleDateString('pt-BR'), // This will be updated by App.tsx
      stravaLink: stravaLink || undefined,
    };
    onSave(newLog, logIndexToUpdate !== null ? logIndexToUpdate : undefined);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-6 relative animate-fade-in-up">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition-colors"
          title="Fechar"
        >
          <XIcon className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {existingLog ? 'Editar Registro de Treino' : 'Registrar Novo Treino'}
        </h2>
        <p className="text-gray-600 mb-6">Para: <span className="font-semibold">{weekTitle}</span></p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="workoutDate" className="block text-sm font-medium text-gray-700">
              Data do Treino
            </label>
            <input
              type="date"
              id="workoutDate"
              value={workoutDate}
              onChange={(e) => setWorkoutDate(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue"
              required
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Duração (mm:ss)
            </label>
            <input
              type="text"
              id="time"
              placeholder="Ex: 30:00"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue"
              required
            />
          </div>
          <div>
            <label htmlFor="distance" className="block text-sm font-medium text-gray-700">
              Distância (km)
            </label>
            <input
              type="text"
              id="distance"
              placeholder="Ex: 5.2"
              value={distance}
              onChange={(e) => setDistance(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue"
              required
            />
          </div>
          <div>
            <label htmlFor="effort" className="block text-sm font-medium text-gray-700">
              Nível de Esforço
            </label>
            <select
              id="effort"
              value={effort}
              onChange={(e) => setEffort(e.target.value as EffortLevel)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue bg-white"
            >
              {Object.values(EffortLevel).map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
              Comentários (opcional)
            </label>
            <textarea
              id="comments"
              rows={3}
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue"
            ></textarea>
          </div>
          <div>
            <label htmlFor="stravaLink" className="block text-sm font-medium text-gray-700">
              Link do Strava (opcional)
            </label>
            <input
              type="url"
              id="stravaLink"
              placeholder="https://www.strava.com/activities/..."
              value={stravaLink}
              onChange={(e) => setStravaLink(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-blue focus:border-brand-blue"
            />
          </div>
          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-colors"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brand-blue hover:bg-brand-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-colors"
            >
              {existingLog ? 'Salvar Alterações' : 'Registrar Treino'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogWorkoutModal;