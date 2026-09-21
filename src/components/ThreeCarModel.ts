import * as THREE from 'three';
import type { Car } from '../data/carsData';

/**
 * Builds realistic 3D PBR vehicle mesh geometries with accurate automotive body panels,
 * clearcoat metallic paint, tinted glass canopy, wheels with metallic rims & rubber tires,
 * LED headlights and taillights.
 */
export function createRealistic3DCar(car: Car): THREE.Group {
  const carGroup = new THREE.Group();
  const { shapeType, bodyColor, wheelColor } = car.silhouetteStyle;

  // Converts color hex to THREE.Color
  const parseColor = (col: string) => new THREE.Color(col);
  const primaryBodyColor = parseColor(bodyColor);
  const primaryWheelColor = parseColor(wheelColor);

  // 1. PBR AUTOMOTIVE MATERIALS
  const carPaintMaterial = new THREE.MeshPhysicalMaterial({
    color: primaryBodyColor,
    metalness: 0.8,
    roughness: 0.15,
    clearcoat: 1.0,
    clearcoatRoughness: 0.05,
    reflectivity: 0.9,
  });

  const chromeTrimMaterial = new THREE.MeshStandardMaterial({
    color: 0xcbd5e1,
    metalness: 0.95,
    roughness: 0.1,
  });

  const tintedGlassMaterial = new THREE.MeshPhysicalMaterial({
    color: 0x090a0f,
    metalness: 0.1,
    roughness: 0.1,
    transmission: 0.6,
    transparent: true,
    opacity: 0.85,
  });

  const rubberTireMaterial = new THREE.MeshStandardMaterial({
    color: 0x18181b,
    roughness: 0.85,
    metalness: 0.1,
  });

  const alloyWheelMaterial = new THREE.MeshStandardMaterial({
    color: primaryWheelColor,
    metalness: 0.9,
    roughness: 0.2,
  });

  const headlightMaterial = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
  });

  const taillightMaterial = new THREE.MeshBasicMaterial({
    color: 0xef4444,
  });

  // 2. BODY GEOMETRIES ACCORDING TO VEHICLE TYPE
  const isSuv = shapeType === 'suv';
  const isHypercar = shapeType === 'hypercar';

  const bodyLength = isSuv ? 3.8 : isHypercar ? 4.0 : 3.6;
  const bodyWidth = isSuv ? 1.8 : 1.7;
  const bodyHeight = isSuv ? 0.9 : isHypercar ? 0.55 : 0.65;

  // Main Chasis / Lower Body Mesh
  const mainBodyGeo = new THREE.BoxGeometry(bodyLength, bodyHeight, bodyWidth);
  const mainBodyMesh = new THREE.Mesh(mainBodyGeo, carPaintMaterial);
  mainBodyMesh.position.y = bodyHeight / 2 + 0.3;
  mainBodyMesh.castShadow = true;
  mainBodyMesh.receiveShadow = true;
  carGroup.add(mainBodyMesh);

  // Aerodynamic Hood / Nose Slope
  const hoodLength = 1.2;
  const hoodGeo = new THREE.BoxGeometry(hoodLength, bodyHeight * 0.45, bodyWidth * 0.96);
  const hoodMesh = new THREE.Mesh(hoodGeo, carPaintMaterial);
  hoodMesh.position.set(bodyLength / 2 - hoodLength / 2, bodyHeight * 0.35 + 0.3, 0);
  hoodMesh.rotation.z = -0.08;
  hoodMesh.castShadow = true;
  carGroup.add(hoodMesh);

  // Glass Canopy / Roof
  const cabinLength = isSuv ? 2.2 : 1.6;
  const cabinHeight = isSuv ? 0.8 : 0.55;
  const cabinGeo = new THREE.BoxGeometry(cabinLength, cabinHeight, bodyWidth * 0.88);
  const cabinMesh = new THREE.Mesh(cabinGeo, tintedGlassMaterial);
  cabinMesh.position.set(-0.2, bodyHeight + cabinHeight / 2 + 0.25, 0);
  cabinMesh.castShadow = true;
  carGroup.add(cabinMesh);

  // Roof Shell
  const roofGeo = new THREE.BoxGeometry(cabinLength * 0.8, 0.05, bodyWidth * 0.85);
  const roofMesh = new THREE.Mesh(roofGeo, carPaintMaterial);
  roofMesh.position.set(-0.2, bodyHeight + cabinHeight + 0.26, 0);
  roofMesh.castShadow = true;
  carGroup.add(roofMesh);

  // Front Headlight Strips
  const headlightGeo = new THREE.BoxGeometry(0.1, 0.12, 0.4);
  const frontRightHeadlight = new THREE.Mesh(headlightGeo, headlightMaterial);
  frontRightHeadlight.position.set(bodyLength / 2 + 0.01, bodyHeight * 0.6 + 0.25, bodyWidth * 0.36);
  carGroup.add(frontRightHeadlight);

  const frontLeftHeadlight = new THREE.Mesh(headlightGeo, headlightMaterial);
  frontLeftHeadlight.position.set(bodyLength / 2 + 0.01, bodyHeight * 0.6 + 0.25, -bodyWidth * 0.36);
  carGroup.add(frontLeftHeadlight);

  // Rear LED Taillight Bar
  const taillightGeo = new THREE.BoxGeometry(0.08, 0.1, bodyWidth * 0.92);
  const rearTaillight = new THREE.Mesh(taillightGeo, taillightMaterial);
  rearTaillight.position.set(-bodyLength / 2 - 0.01, bodyHeight * 0.7 + 0.25, 0);
  carGroup.add(rearTaillight);

  // Side Mirrors
  const mirrorGeo = new THREE.BoxGeometry(0.2, 0.12, 0.25);
  const rightMirror = new THREE.Mesh(mirrorGeo, carPaintMaterial);
  rightMirror.position.set(0.6, bodyHeight + 0.3, bodyWidth / 2 + 0.12);
  carGroup.add(rightMirror);

  const leftMirror = new THREE.Mesh(mirrorGeo, carPaintMaterial);
  leftMirror.position.set(0.6, bodyHeight + 0.3, -bodyWidth / 2 - 0.12);
  carGroup.add(leftMirror);

  // 3. 3D WHEELS WITH METALLIC RIMS & RUBBER TIRES (4 Wheels)
  const wheelRadius = isSuv ? 0.42 : 0.36;
  const wheelThickness = 0.25;

  const tireGeo = new THREE.CylinderGeometry(wheelRadius, wheelRadius, wheelThickness, 32);
  const rimGeo = new THREE.CylinderGeometry(wheelRadius * 0.65, wheelRadius * 0.65, wheelThickness + 0.02, 16);

  const wheelPositions = [
    { x: bodyLength * 0.3, z: bodyWidth / 2 + 0.05 },
    { x: bodyLength * 0.3, z: -bodyWidth / 2 - 0.05 },
    { x: -bodyLength * 0.3, z: bodyWidth / 2 + 0.05 },
    { x: -bodyLength * 0.3, z: -bodyWidth / 2 - 0.05 },
  ];

  wheelPositions.forEach((pos) => {
    const wheelGroup = new THREE.Group();

    const tireMesh = new THREE.Mesh(tireGeo, rubberTireMaterial);
    tireMesh.rotation.x = Math.PI / 2;
    tireMesh.castShadow = true;
    wheelGroup.add(tireMesh);

    const rimMesh = new THREE.Mesh(rimGeo, alloyWheelMaterial);
    rimMesh.rotation.x = Math.PI / 2;
    wheelGroup.add(rimMesh);

    // Chrome Center Cap
    const capGeo = new THREE.CylinderGeometry(0.08, 0.08, wheelThickness + 0.04, 16);
    const capMesh = new THREE.Mesh(capGeo, chromeTrimMaterial);
    capMesh.rotation.x = Math.PI / 2;
    wheelGroup.add(capMesh);

    wheelGroup.position.set(pos.x, wheelRadius, pos.z);
    carGroup.add(wheelGroup);
  });

  return carGroup;
}
