import React from 'react';
import {
  Flag,
  Bolt,
  Info,
  Dumbbell,
  History,
  Target,
  TrendingUp,
  Calendar,
  PlusCircle,
  Edit,
  Trash2,
  X,
  Footprints, // Adicionado Footprints
} from 'lucide-react';

// Custom SVG for RunIcon
const RunIconSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 8c0-1.105-.9-2-2-2s-2 .895-2 2a2 2 0 1 0 0-4h-3l-4 9v10h2v-7l4-3 2 3v7h2z" />
    <path d="M6 15v-3l2-1" />
  </svg>
);

export const FlagIcon = Flag;
export const BoltIcon = Bolt;
export const InfoIcon = Info;
export const DumbbellIcon = Dumbbell;
export const HistoryIcon = History;
export const TargetIcon = Target;
export const TrendingUpIcon = TrendingUp;
export const RunIcon = RunIconSVG; // Using the custom SVG
export const CalendarIcon = Calendar;
export const PlusCircleIcon = PlusCircle;
export const EditIcon = Edit;
export const TrashIcon = Trash2;
export const XIcon = X;
export const FootprintsIcon = Footprints; // Exportando Footprints