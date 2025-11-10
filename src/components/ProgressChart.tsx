import React from 'react';
import type { WorkoutLog } from '../types';
import { TrendingUpIcon } from './icons';

interface ProgressChartProps {
  workoutLogs: Record<string, WorkoutLog[]>;
}

const ProgressChart: React.FC<ProgressChartProps> = ({ workoutLogs }) => {
  const allLogs = Object.values(workoutLogs).flat();

  // Basic data processing for a hypothetical chart
  const data = allLogs.map(log => {
    const distance = parseFloat(log.distance);
    const [minutes, seconds] = log.time.split(':').map(Number);
    const timeInMinutes = minutes + (seconds / 60);
    return {
      date: log.workoutDate,
      distance: isNaN(distance) ? 0 : distance,
      time: isNaN(timeInMinutes) ? 0 : timeInMinutes,
    };
  }).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div className="container mx-auto p-6 animate-fade-in-up">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <TrendingUpIcon className="w-8 h-8 text-brand-blue" />
          Meu Progresso
        </h2>

        {allLogs.length === 0 ? (
          <p className="text-gray-600">Registre alguns treinos para ver seu progresso aqui!</p>
        ) : (
          <div className="mt-8">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Visão Geral dos Treinos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-md border border-gray-200 shadow-sm">
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Distância Total</h4>
                <p className="text-brand-blue text-3xl font-bold">
                  {data.reduce((sum, log) => sum + log.distance, 0).toFixed(2)} km
                </p>
              </div>
              <div className="bg-gray-50 p-5 rounded-md border border-gray-200 shadow-sm">
                <h4 className="font-semibold text-lg text-gray-800 mb-2">Número de Treinos</h4>
                <p className="text-brand-blue text-3xl font-bold">
                  {data.length}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Progresso ao Longo do Tempo (Exemplo)</h3>
              <div className="bg-gray-50 p-5 rounded-md border border-gray-200 shadow-sm h-64 flex items-center justify-center text-gray-500">
                {/* Placeholder for a chart. A real chart would use a library like Recharts or Chart.js */}
                <p>Gráfico de progresso virá aqui (distância vs. tempo)</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProgressChart;