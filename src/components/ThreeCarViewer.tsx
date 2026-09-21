import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import type { Car } from '../data/carsData';
import { createTurntablePlatform } from './ThreeTurntable';
import { createRealistic3DCar } from './ThreeCarModel';
import { useLanguage } from '../context/LanguageContext';
import { MoveHorizontal, RotateCw, Compass } from 'lucide-react';

interface ThreeCarViewerProps {
  car: Car;
  className?: string;
  autoRotateSpeed?: number;
}

export const ThreeCarViewer: React.FC<ThreeCarViewerProps> = ({
  car,
  className = '',
  autoRotateSpeed = 0.005,
}) => {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [currentAngleDegrees, setCurrentAngleDegrees] = useState(45);

  const isDraggingRef = useRef(false);
  const previousPointerXRef = useRef(0);
  const velocityRef = useRef(0);
  const turntableGroupRef = useRef<THREE.Group | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const width = container.clientWidth || 400;
    const height = container.clientHeight || 320;

    // SCENE
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0b0d);

    // CAMERA
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(7.2, 3.8, 7.2);
    camera.lookAt(0, 0.7, 0);

    // RENDERER
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, preserveDrawingBuffer: true });
    } catch {
      return;
    }

    renderer.setClearColor(0x0a0b0d, 1);
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const domElement = renderer.domElement;
    domElement.style.width = '100%';
    domElement.style.height = '100%';
    domElement.style.display = 'block';

    container.appendChild(domElement);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(8, 12, 6);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x38bdf8, 1.5);
    rimLight.position.set(-8, 8, -8);
    scene.add(rimLight);

    // TURNTABLE & CAR
    const turntable = createTurntablePlatform();
    turntableGroupRef.current = turntable;

    const carMesh = createRealistic3DCar(car);
    turntable.add(carMesh);

    scene.add(turntable);

    turntable.rotation.y = Math.PI / 4;

    let animationFrameId: number;

    const animate = () => {
      if (turntableGroupRef.current) {
        if (!isDraggingRef.current) {
          if (Math.abs(velocityRef.current) > 0.0001) {
            turntableGroupRef.current.rotation.y += velocityRef.current;
            velocityRef.current *= 0.94;
          } else if (isAutoRotating) {
            turntableGroupRef.current.rotation.y += autoRotateSpeed;
          }
        }

        const deg = (turntableGroupRef.current.rotation.y * (180 / Math.PI)) % 360;
        setCurrentAngleDegrees(Math.round((deg + 360) % 360));
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 400;
      const h = container.clientHeight || 320;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (container && domElement && container.contains(domElement)) {
        container.removeChild(domElement);
      }
      renderer.dispose();
    };
  }, [car, autoRotateSpeed, isAutoRotating]);

  const handlePointerDown = (e: React.PointerEvent) => {
    isDraggingRef.current = true;
    setIsAutoRotating(false);
    previousPointerXRef.current = e.clientX;
    velocityRef.current = 0;
    (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || !turntableGroupRef.current) return;

    const deltaX = e.clientX - previousPointerXRef.current;
    previousPointerXRef.current = e.clientX;

    const sensitivity = 0.008;
    const deltaRot = deltaX * sensitivity;

    turntableGroupRef.current.rotation.y += deltaRot;
    velocityRef.current = deltaRot;
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    try {
      (e.currentTarget as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignore
    }

    setTimeout(() => {
      setIsAutoRotating(true);
    }, 3500);
  };

  return (
    <div className={`relative flex flex-col items-center justify-center ${className}`}>
      {/* Top Controls Overlay */}
      <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 bg-zinc-900/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-zinc-800 text-xs font-mono text-zinc-300 shadow-xl">
          <Compass className="w-3.5 h-3.5 text-sky-400 animate-spin" style={{ animationDuration: '12s' }} />
          <span>{currentAngleDegrees}° 3D TURNTABLE</span>
        </div>

        <button
          onClick={() => setIsAutoRotating(!isAutoRotating)}
          className="pointer-events-auto flex items-center gap-1.5 bg-zinc-900/90 hover:bg-zinc-800 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-zinc-700 text-xs text-white transition-all cursor-pointer min-h-[44px]"
        >
          <RotateCw className={`w-3.5 h-3.5 ${isAutoRotating ? 'text-emerald-400 animate-spin' : 'text-zinc-400'}`} style={{ animationDuration: '6s' }} />
          <span className="hidden sm:inline">{isAutoRotating ? t.autoRotate : 'Manual Mode'}</span>
        </button>
      </div>

      {/* Main WebGL Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-[320px] sm:h-[400px] cursor-grab active:cursor-grabbing touch-none select-none relative rounded-2xl overflow-hidden group bg-zinc-950"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        {/* Drag Guidance Prompt Overlay */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs text-zinc-300 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity">
          <MoveHorizontal className="w-4 h-4 text-sky-400 animate-pulse" />
          <span>{t.dragToRotate}</span>
        </div>
      </div>
    </div>
  );
};
