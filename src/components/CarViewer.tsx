import React, { useState, useEffect, useRef } from 'react';
import type { Car } from '../data/carsData';
import { StandardCarCanvas } from './StandardCarCanvas';
import { useLanguage } from '../context/LanguageContext';
import { RotateCw, MoveHorizontal, Compass } from 'lucide-react';

interface CarViewerProps {
  car: Car;
  className?: string;
  autoRotateSpeed?: number; // deg per frame
}

export const CarViewer: React.FC<CarViewerProps> = ({
  car,
  className = '',
  autoRotateSpeed = 0.25,
}) => {
  const { t } = useLanguage();
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const lastXRef = useRef<number | null>(null);
  const velocityRef = useRef<number>(0);
  const animFrameRef = useRef<number | null>(null);

  // Smooth automatic rotation and drag inertia update loop
  useEffect(() => {
    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = Math.min((time - lastTime) / 16.667, 2); // normalize frame time
      lastTime = time;

      if (!isDragging) {
        if (Math.abs(velocityRef.current) > 0.05) {
          // Inertia damping after drag release
          setRotation((prev) => (prev + velocityRef.current * dt) % 360);
          velocityRef.current *= 0.93; // friction decay
        } else if (isAutoRotating) {
          // Slow continuous automatic rotation
          setRotation((prev) => (prev + autoRotateSpeed * dt) % 360);
        }
      }

      animFrameRef.current = requestAnimationFrame(loop);
    };

    animFrameRef.current = requestAnimationFrame(loop);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isDragging, isAutoRotating, autoRotateSpeed]);

  // Handle Drag Start (Desktop & Touch)
  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    setIsAutoRotating(false);
    lastXRef.current = e.clientX;
    velocityRef.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  // Handle Drag Move (Responsive drag calculation)
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging || lastXRef.current === null) return;

    const deltaX = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;

    // Manual drag rotation multiplier (significantly faster than auto-rotation)
    const dragSensitivity = 0.75;
    const deltaRotation = deltaX * dragSensitivity;

    velocityRef.current = deltaRotation;
    setRotation((prev) => (prev + deltaRotation) % 360);
  };

  // Handle Drag End
  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    lastXRef.current = null;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignore if pointer capture release is unsupported
    }

    // Smoothly resume auto-rotation after 3.5 seconds idle
    setTimeout(() => {
      setIsAutoRotating(true);
    }, 3500);
  };

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Top Floating Control Badges */}
      <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 bg-zinc-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-zinc-800 text-xs font-mono text-zinc-300 shadow-xl">
          <Compass className="w-3.5 h-3.5 text-zinc-400 animate-spin" style={{ animationDuration: '12s' }} />
          <span>{Math.round((rotation + 360) % 360)}° PLATFORM</span>
        </div>

        <button
          onClick={() => setIsAutoRotating(!isAutoRotating)}
          className="pointer-events-auto flex items-center gap-1.5 bg-zinc-900/80 hover:bg-zinc-800 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-zinc-700 text-xs text-white transition-all duration-200 cursor-pointer"
          aria-label={isAutoRotating ? t.autoRotate : 'Enable auto rotate'}
        >
          <RotateCw className={`w-3.5 h-3.5 ${isAutoRotating ? 'text-emerald-400 animate-spin' : 'text-zinc-400'}`} style={{ animationDuration: '6s' }} />
          <span className="hidden sm:inline">{isAutoRotating ? t.autoRotate : 'Manual Mode'}</span>
        </button>
      </div>

      {/* Main Drag Surface Canvas Container */}
      <div
        className="w-full max-w-2xl cursor-grab active:cursor-grabbing touch-none select-none relative group"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <StandardCarCanvas car={car} rotationAngle={rotation} className="transition-transform duration-100" />

        {/* Drag Guidance Prompt Overlay */}
        <div
          className={`absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-zinc-300 pointer-events-none transition-opacity duration-300 ${
            isDragging ? 'opacity-0' : 'opacity-80 group-hover:opacity-100'
          }`}
        >
          <MoveHorizontal className="w-4 h-4 text-zinc-300 animate-pulse" />
          <span>{t.dragToRotate}</span>
        </div>
      </div>

      {/* Architectural Platform Lighting Accent Bar */}
      <div className="w-2/3 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-2" />
    </div>
  );
};
