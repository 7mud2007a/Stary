import React from 'react';
import type { Car } from '../data/carsData';
import { ThreeCarViewer } from './ThreeCarViewer';

interface StandardCarCanvasProps {
  car: Car;
  className?: string;
}

export const StandardCarCanvas: React.FC<StandardCarCanvasProps> = ({
  car,
  className = '',
}) => {
  return (
    <div className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}>
      <ThreeCarViewer car={car} className="w-full" />
    </div>
  );
};
