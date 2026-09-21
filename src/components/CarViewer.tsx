import React from 'react';
import type { Car } from '../data/carsData';
import { ThreeCarViewer } from './ThreeCarViewer';

interface CarViewerProps {
  car: Car;
  className?: string;
}

export const CarViewer: React.FC<CarViewerProps> = ({
  car,
  className = '',
}) => {
  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      <ThreeCarViewer car={car} className="w-full" />
    </div>
  );
};
