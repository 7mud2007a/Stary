import React from 'react';
import type { Car } from '../data/carsData';

interface StandardCarCanvasProps {
  car: Car;
  rotationAngle?: number; // degrees 0-360
  className?: string;
}

export const StandardCarCanvas: React.FC<StandardCarCanvasProps> = ({
  car,
  rotationAngle = 0,
  className = '',
}) => {
  const { shapeType, bodyColor, accentColor, wheelColor, windowTint } = car.silhouetteStyle;

  // Render SVG Isometric 3/4 Perspective Vehicle standing on architectural circular platform
  const radians = (rotationAngle * Math.PI) / 180;

  // Platform rotation skew/perspective effect
  const scaleY = 0.38; // Iso perspective tilt
  const cosRad = Math.cos(radians);
  const sinRad = Math.sin(radians);

  const isSuv = shapeType === 'suv';
  const isHypercar = shapeType === 'hypercar';

  return (
    <div className={`relative flex items-center justify-center select-none overflow-hidden ${className}`}>
      <svg
        viewBox="0 0 500 320"
        className="w-full h-auto drop-shadow-2xl"
        style={{ transformOrigin: 'center' }}
        aria-label={`${car.name.en} presentation platform`}
      >
        <defs>
          {/* Architectural Circular Platform Gradients */}
          <radialGradient id={`platformGrad-${car.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#2e3440" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#1a1d24" stopOpacity="0.95" />
            <stop offset="90%" stopColor="#121418" stopOpacity="1" />
            <stop offset="100%" stopColor="#0a0b0d" stopOpacity="1" />
          </radialGradient>

          {/* Architectural Outer Metallic Rim */}
          <linearGradient id={`platformRim-${car.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#64748b" />
            <stop offset="50%" stopColor="#334155" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>

          {/* Platform Light Beam Ring */}
          <radialGradient id={`lightRing-${car.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="70%" stopColor="transparent" />
            <stop offset="88%" stopColor="#ffffff" stopOpacity="0.2" />
            <stop offset="95%" stopColor="#38bdf8" stopOpacity="0.3" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>

          {/* Vehicle Body Gradient */}
          <linearGradient id={`bodyGrad-${car.id}`} x1="0%" y1="0%" x2="100%" y2="80%">
            <stop offset="0%" stopColor={accentColor} stopOpacity="0.9" />
            <stop offset="40%" stopColor={bodyColor} />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>

          {/* Vehicle Ground Contact Shadow */}
          <radialGradient id={`carShadow-${car.id}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#000000" stopOpacity="0.85" />
            <stop offset="70%" stopColor="#000000" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. ARCHITECTURAL CIRCULAR PLATFORM (Base) */}
        <g transform="translate(250, 220)">
          {/* Base Shadow underneath platform */}
          <ellipse cx="0" cy="20" rx="210" ry={210 * scaleY} fill="#000000" opacity="0.7" />

          {/* Platform Outer Ring */}
          <ellipse
            cx="0"
            cy="0"
            rx="195"
            ry={195 * scaleY}
            fill={`url(#platformRim-${car.id})`}
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1.5"
          />

          {/* Platform Inner Surface */}
          <ellipse
            cx="0"
            cy="0"
            rx="188"
            ry={188 * scaleY}
            fill={`url(#platformGrad-${car.id})`}
          />

          {/* Rotating Platform Radial Grid Markings */}
          <g style={{ transform: `rotate(${rotationAngle}deg)`, transformOrigin: '0 0' }}>
            <ellipse
              cx="0"
              cy="0"
              rx="188"
              ry={188 * scaleY}
              fill="none"
              stroke={`url(#lightRing-${car.id})`}
              strokeWidth="3"
            />
            {/* Geometric Platform Accent Notches */}
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, idx) => {
              const aRad = (angle * Math.PI) / 180;
              const x1 = Math.cos(aRad) * 160;
              const y1 = Math.sin(aRad) * 160 * scaleY;
              const x2 = Math.cos(aRad) * 185;
              const y2 = Math.sin(aRad) * 185 * scaleY;
              return (
                <line
                  key={idx}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke={idx % 2 === 0 ? '#ffffff' : '#94a3b8'}
                  strokeOpacity={idx % 2 === 0 ? '0.4' : '0.2'}
                  strokeWidth={idx % 2 === 0 ? '2' : '1'}
                />
              );
            })}
          </g>

          {/* Interactive Spot Light Focus Area */}
          <ellipse
            cx={sinRad * 30}
            cy={cosRad * 10}
            rx="140"
            ry={140 * scaleY}
            fill="#ffffff"
            opacity="0.04"
          />

          {/* Ground Contact Shadow for the car */}
          <ellipse cx="0" cy="-10" rx="130" ry={130 * scaleY} fill={`url(#carShadow-${car.id})`} />
        </g>

        {/* 2. AUTOMOTIVE 3/4 ISOMETRIC PRESENTATION (ROTATING GROUP) */}
        {/* Front faces approximately 5 o'clock (Target angle presentation) */}
        <g transform={`translate(250, 205)`}>
          <g style={{ transform: `rotate(${rotationAngle * 0.15}deg)`, transformOrigin: '0 0' }}>
            {/* Main Vehicle Shadow */}
            <ellipse cx="0" cy="5" rx="115" ry="32" fill="#020617" opacity="0.8" />

            {/* WHEELS (4 Wheels positioned in 3/4 perspective) */}
            {/* Front Right Wheel (Facing viewer 5 o'clock) */}
            <g transform="translate(65, 12)">
              <ellipse cx="0" cy="0" rx="14" ry="24" fill="#0f172a" stroke="#334155" strokeWidth="2" />
              <ellipse cx="0" cy="0" rx="9" ry="16" fill={wheelColor} />
              <line x1="0" y1="-12" x2="0" y2="12" stroke="#ffffff" strokeWidth="1.5" opacity="0.6" />
              <line x1="-7" y1="0" x2="7" y2="0" stroke="#ffffff" strokeWidth="1.5" opacity="0.6" />
            </g>

            {/* Rear Right Wheel */}
            <g transform="translate(-72, -15)">
              <ellipse cx="0" cy="0" rx="13" ry="22" fill="#0f172a" stroke="#334155" strokeWidth="2" />
              <ellipse cx="0" cy="0" rx="8" ry="14" fill={wheelColor} />
            </g>

            {/* Front Left Wheel */}
            <g transform="translate(45, -28)">
              <ellipse cx="0" cy="0" rx="10" ry="18" fill="#090a0f" />
            </g>

            {/* VEHICLE BODY 3/4 ISOMETRIC COUPE / SEDAN / SUV / HYPERCAR */}
            {/* Lower Body Base */}
            <path
              d={
                isSuv
                  ? 'M -110 -25 L -95 -55 L -40 -65 L 20 -60 L 75 -40 L 105 -15 L 115 5 L 80 20 L -60 15 L -110 -10 Z'
                  : isHypercar
                  ? 'M -115 -15 L -85 -40 L -20 -48 L 45 -42 L 85 -25 L 120 -5 L 110 12 L 65 18 L -75 10 L -115 -15 Z'
                  : 'M -110 -18 L -85 -45 L -25 -52 L 35 -46 L 80 -28 L 115 -8 L 108 14 L 60 18 L -70 12 L -110 -18 Z'
              }
              fill={`url(#bodyGrad-${car.id})`}
              stroke="#475569"
              strokeWidth="1.5"
            />

            {/* Roof / Glass Canopy (Window Tint) */}
            <path
              d={
                isSuv
                  ? 'M -80 -52 L -35 -62 L 15 -58 L 55 -38 L 25 -38 L -35 -48 Z'
                  : isHypercar
                  ? 'M -65 -38 L -15 -46 L 30 -40 L 55 -25 L 25 -25 L -25 -35 Z'
                  : 'M -70 -42 L -20 -50 L 25 -44 L 60 -26 L 30 -26 L -25 -38 Z'
              }
              fill={windowTint}
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="1"
            />

            {/* Front Windshield Highlight */}
            <path
              d="M 25 -44 L 58 -26 L 30 -26 Z"
              fill="#ffffff"
              opacity="0.15"
            />

            {/* Distinctive Front Light / Headlights (Target 5 o'clock orientation) */}
            <g transform="translate(102, -2)">
              {/* Aggressive LED Headlight Bar */}
              <polygon points="0,-8 10,-2 6,4 -4,-2" fill="#38bdf8" />
              <polygon points="0,-8 10,-2 6,4 -4,-2" fill="#ffffff" opacity="0.8" />
              {/* Headlight Flare */}
              <circle cx="8" cy="-1" r="3" fill="#ffffff" />
              <circle cx="8" cy="-1" r="8" fill="#38bdf8" opacity="0.3" />
            </g>

            {/* Rear Tail Light Glow (Target 10 o'clock rear orientation) */}
            <g transform="translate(-106, -14)">
              <polygon points="-4,-4 2,-8 6,-2 -2,4" fill="#ef4444" />
              <circle cx="-2" cy="-2" r="4" fill="#ef4444" opacity="0.6" />
            </g>

            {/* Architectural Body Character Line */}
            <path
              d="M -90 -22 C -30 -35 30 -25 90 -6"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1.5"
              opacity="0.5"
            />

            {/* Side Mirror */}
            <path
              d="M 28 -32 L 36 -34 L 34 -28 Z"
              fill={bodyColor}
              stroke="#cbd5e1"
              strokeWidth="1"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};
