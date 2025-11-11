import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TopNavbar from './src/components/TopNavbar';
import ContentDisplay from './src/components/ContentDisplay';
import HistoryDisplay from './src/components/HistoryDisplay';
import GoalsDisplay from './src/components/GoalsDisplay';
import ProgressChart from './src/components/ProgressChart';
import LogWorkoutModal from './src/components/LogWorkoutModal';
import { PROGRAM_CONTENT } from './constants'; // Corrected path
import type { WorkoutLog, Goal } from './types';
import { GoalType } from './types';

const App: React.FC = () => {
  const [activeSectionId, setActiveSectionId] = useState<string>(() => {
    return localStorage.getItem('activeSectionId') || PROGRAM_CONTENT[0].id;
  });
  const [workoutLogs, setWorkoutLogs] = useState<Record<string, WorkoutLog[]>>(() => {
    const saved = localStorage.getItem('workoutLogs');
    return saved ? JSON.parse(saved) : {};
  });
  const [goals, setGoals] = useState<Goal[]>(() => {
    const saved = localStorage.getItem('goals');
    return saved ? JSON.parse(saved) : [
        { id: '1', type: GoalType.Frequency, description: 'Correr 3x na semana', targetValue: 3 },
        { id: '2', type: GoalType.DistanceInTime, description: 'Correr 5km em menos de 30 minutos', targetDistance: 5, targetTime: '30:00' },
    ];
  });
  const [isLogModalOpen, setLogModalOpen] = useState(false);
  const [logToEdit, setLogToEdit] = useState<WorkoutLog | null>(null);
  const [logIndexToEdit, setLogIndexToEdit] = useState<number | null>(null);

  useEffect(() => {
    localStorage.setItem('activeSectionId', activeSectionId);
  }, [activeSectionId]);

  useEffect(() => {
    localStorage.setItem('workoutLogs', JSON.stringify(workoutLogs));
  }, [workoutLogs]);

  useEffect(() => {
    localStorage.setItem('goals', JSON.stringify(goals));
  }, [goals]);

  const handleSelectSection = (id: string) => {
    setActiveSectionId(id);
  };
  
  const handleSaveLog = (log: WorkoutLog, logIndex?: number) => {
    setWorkoutLogs(prev => {
        const currentLogs = prev[activeSectionId] ? [...prev[activeSectionId]] : [];
        if (logIndex !== undefined && logIndex !== null && currentLogs[logIndex]) {
            // Update existing log
            currentLogs[logIndex] = { ...log, logDate: new Date().toLocaleDateString('pt-BR') };
        } else {
            // Add new log
            currentLogs.push({ ...log, logDate: new Date().toLocaleDateString('pt-BR') });
        }
        return { ...prev, [activeSectionId]: currentLogs };
    });
    setLogToEdit(null);
    setLogIndexToEdit(null);
  };

  const handleAddGoal = (goal: Omit<Goal, 'id'>) => {
    setGoals(prev => [...prev, { ...goal, id: new Date().toISOString() }]);
  };

  const handleDeleteGoal = (id: string) => {
    setGoals(prev => prev.filter(goal => goal.id !== id));
  };

  const handleOpenLogModal = (log?: WorkoutLog, index?: number) => {
    setLogToEdit(log || null);
    setLogIndexToEdit(index !== undefined ? index : null);
    setLogModalOpen(true);
  };
  
  const activeSection = PROGRAM_CONTENT.find(s => s.id === activeSectionId);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
        <TopNavbar
          programContent={PROGRAM_CONTENT}
          activeSectionId={activeSectionId}
          onSelectSection={handleSelectSection}
        />
        <main className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Navigate to={`/plan/${activeSectionId}`} replace />} />
            <Route 
              path="/plan/:sectionId" 
              element={
                <ContentDisplay
                  section={activeSection}
                  workoutLogs={workoutLogs[activeSectionId] || []}
                  onOpenLogModal={handleOpenLogModal}
                />
              } 
            />
            <Route path="/history" element={<HistoryDisplay workoutLogs={workoutLogs} programSections={PROGRAM_CONTENT} />} />
            <Route path="/goals" element={<GoalsDisplay goals={goals} workoutLogs={workoutLogs} onAddGoal={handleAddGoal} onDeleteGoal={handleDeleteGoal} />} />
            <Route path="/progress" element={<ProgressChart workoutLogs={workoutLogs} />} />
          </Routes>
        </main>
        {activeSection && <LogWorkoutModal
          isOpen={isLogModalOpen}
          onClose={() => { setLogModalOpen(false); setLogToEdit(null); setLogIndexToEdit(null); }}
          onSave={handleSaveLog}
          weekTitle={activeSection.title}
          existingLog={logToEdit}
          logIndexToUpdate={logIndexToEdit}
        />}
      </div>
    </Router>
  );
};

export default App;