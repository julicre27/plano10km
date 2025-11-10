import type { ReactNode } from 'react';

export enum EffortLevel {
    Leve = '2-4 (Leve)',
    Moderado = '5-7 (Moderado)',
    Forte = '8-10 (Forte)',
}

export interface WorkoutLog {
    time: string;
    distance: string;
    effort: EffortLevel;
    comments: string;
    logDate: string; // Date when the log was created/updated
    workoutDate: string; // Date when the workout was actually performed
    stravaLink?: string; // Optional Strava link
}

export interface ProgramSection {
    id: string;
    title: string;
    type: 'info' | 'week';
    content: ReactNode;
    isLoggable?: boolean;
}

export enum GoalType {
    Frequency = 'FREQUENCY',
    DistanceInTime = 'DISTANCE_IN_TIME',
}

export interface Goal {
    id: string;
    type: GoalType;
    description: string;
    // For Frequency
    targetValue?: number;
    // For Distance in Time
    targetDistance?: number;
    targetTime?: string; // mm:ss
}