import React, { useState } from 'react';
import type { Goal, WorkoutLog } from '../../types';
import { GoalType } from '../../types';
import { TargetIcon, PlusCircleIcon, TrashIcon } from './icons';

interface GoalsDisplayProps {
  goals: Goal[];
  workoutLogs: Record<string, WorkoutLog[]>;
  onAddGoal: (goal: Omit<Goal, 'id'>) => void;
  onDeleteGoal: (id: string) => void;
}

const GoalsDisplay: React.FC<GoalsDisplayProps> = ({ goals, workoutLogs, onAddGoal, onDeleteGoal }) => {
  const [newGoalDescription, setNewGoalDescription] = useState('');
  const [newGoalType, setNewGoalType] = useState<GoalType>(GoalType.Frequency);
  const [newGoalTargetValue, setNewGoalTargetValue] = useState<number | ''>('');
  const [newGoalTargetDistance, setNewGoalTargetDistance] = useState<number | ''>('');
  const [newGoalTargetTime, setNewGoalTargetTime] = useState('');

  const handleAddGoal = () => {
    if (!newGoalDescription.trim()) return;

    let goal: Omit<Goal, 'id'>;
    if (newGoalType === GoalType.Frequency) {
      goal = {
        type: GoalType.Frequency,
        description: newGoalDescription,
        targetValue: typeof newGoalTargetValue === 'number' ? newGoalTargetValue : undefined,
      };
    } else { // GoalType.DistanceInTime
      goal = {
        type: GoalType.DistanceInTime,
        description: newGoalDescription,
        targetDistance: typeof newGoalTargetDistance === 'number' ? newGoalTargetDistance : undefined,
        targetTime: newGoalTargetTime || undefined,
      };
    }
    onAddGoal(goal);
    setNewGoalDescription('');
    setNewGoalTargetValue('');
    setNewGoalTargetDistance('');
    setNewGoalTargetTime('');
  };

  const calculateProgress = (goal: Goal): string => {
    const allLogs = Object.values(workoutLogs).flat();
    if (goal.type === GoalType.Frequency && goal.targetValue) {
      const logsThisWeek = allLogs.filter(log => {
        const logDate = new Date(log.workoutDate);
        const today = new Date();
        const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay())); // Sunday
        return logDate >= startOfWeek;
      }).length;
      return `${logsThisWeek} de ${goal.targetValue} treinos esta semana`;
    }
    if (goal.type === GoalType.DistanceInTime && goal.targetDistance && goal.targetTime) {
      // This is a simplified calculation. A real implementation would need more complex logic
      // to parse log distances and times and compare them.
      const bestAttempt = allLogs.reduce((best: { distance: number, timeInSeconds: number } | null, log) => {
        const distance = parseFloat(log.distance);
        const [minutes, seconds] = log.time.split(':').map(Number);
        const timeInSeconds = minutes * 60 + seconds;

        if (isNaN(distance) || isNaN(timeInSeconds)) return best;

        if (!best || (distance >= goal.targetDistance! && timeInSeconds < best.timeInSeconds)) {
          return { distance, timeInSeconds };
        }
        return best;
      }, null);

      if (bestAttempt && bestAttempt.distance >= goal.targetDistance) {
        const targetTimeParts = goal.targetTime.split(':').map(Number);
        const targetTimeInSeconds = targetTimeParts[0] * 60 + targetTimeParts[1];
        if (bestAttempt.timeInSeconds <= targetTimeInSeconds) {
          return `Concluído! Seu melhor: ${bestAttempt.distance}km em ${Math.floor(bestAttempt.timeInSeconds / 60).toString().padStart(2, '0')}:${(bestAttempt.timeInSeconds % 60).toString().padStart(2, '0')}`;
        } else {
          return `Ainda trabalhando. Seu melhor: ${bestAttempt.distance}km em ${Math.floor(bestAttempt.timeInSeconds / 60).toString().padStart(2, '0')}:${(bestAttempt.timeInSeconds % 60).toString().padStart(2, '0')}`;
        }
      }
      return `Nenhum registro que atinja ${goal.targetDistance}km ainda.`;
    }
    return 'Progresso não rastreado';
  };

  return (
    <div className="container mx-auto p-6 animate-fade-in-up">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <TargetIcon className="w-8 h-8 text-brand-blue" />
          Minhas Metas
        </h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Adicionar Nova Meta</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Descrição da meta (ex: Correr 5km)"
              value={newGoalDescription}
              onChange={(e) => setNewGoalDescription(e.target.value)}
              className="p-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
            />
            <select
              value={newGoalType}
              onChange={(e) => setNewGoalType(e.target.value as GoalType)}
              className="p-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue bg-white"
            >
              <option value={GoalType.Frequency}>Frequência de Treinos</option>
              <option value={GoalType.DistanceInTime}>Distância em Tempo</option>
            </select>
            {newGoalType === GoalType.Frequency && (
              <input
                type="number"
                placeholder="Treinos por semana (ex: 3)"
                value={newGoalTargetValue}
                onChange={(e) => setNewGoalTargetValue(e.target.value === '' ? '' : parseInt(e.target.value))}
                className="p-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
              />
            )}
            {newGoalType === GoalType.DistanceInTime && (
              <>
                <input
                  type="number"
                  placeholder="Distância alvo (km, ex: 5)"
                  value={newGoalTargetDistance}
                  onChange={(e) => setNewGoalTargetDistance(e.target.value === '' ? '' : parseFloat(e.target.value))}
                  className="p-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
                />
                <input
                  type="text"
                  placeholder="Tempo alvo (mm:ss, ex: 30:00)"
                  value={newGoalTargetTime}
                  onChange={(e) => setNewGoalTargetTime(e.target.value)}
                  className="p-3 border border-gray-300 rounded-md focus:ring-brand-blue focus:border-brand-blue"
                />
              </>
            )}
          </div>
          <button
            onClick={handleAddGoal}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-brand-blue hover:bg-brand-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue transition-colors"
          >
            <PlusCircleIcon className="-ml-1 mr-2 h-5 w-5" />
            Adicionar Meta
          </button>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mb-4">Metas Atuais</h3>
        {goals.length === 0 ? (
          <p className="text-gray-600">Nenhuma meta definida ainda. Adicione uma nova meta acima!</p>
        ) : (
          <div className="space-y-4">
            {goals.map((goal) => (
              <div key={goal.id} className="bg-gray-50 p-5 rounded-md border border-gray-200 shadow-sm flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold text-gray-800">{goal.description}</p>
                  <p className="text-gray-700 text-sm">Tipo: {goal.type === GoalType.Frequency ? 'Frequência' : 'Distância em Tempo'}</p>
                  <p className="text-brand-blue font-medium mt-1">{calculateProgress(goal)}</p>
                </div>
                <button
                  onClick={() => onDeleteGoal(goal.id)}
                  className="p-2 rounded-full text-red-600 hover:bg-red-600 hover:text-white transition-colors"
                  title="Excluir meta"
                >
                  <TrashIcon className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GoalsDisplay;