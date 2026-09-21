import * as THREE from 'three';

/**
 * Creates an architectural mechanical 3D turntable platform
 * Multi-tiered, metallic PBR materials, concentric grooves, recessed channels,
 * bevels, outer mechanical gear rim, and LED perimeter lighting ring.
 */
export function createTurntablePlatform(): THREE.Group {
  const group = new THREE.Group();

  // Materials
  const darkBrushedMetal = new THREE.MeshStandardMaterial({
    color: 0x111318,
    roughness: 0.3,
    metalness: 0.85,
  });

  const chromeRimMaterial = new THREE.MeshStandardMaterial({
    color: 0x64748b,
    roughness: 0.15,
    metalness: 0.95,
  });

  const innerGridMaterial = new THREE.MeshStandardMaterial({
    color: 0x1a1d24,
    roughness: 0.5,
    metalness: 0.6,
  });

  const ledRingMaterial = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
  });

  // Tier 1: Ground Base Recessed Pit Ring
  const basePitGeo = new THREE.CylinderGeometry(4.8, 5.0, 0.1, 64);
  const basePit = new THREE.Mesh(basePitGeo, darkBrushedMetal);
  basePit.position.y = -0.15;
  basePit.receiveShadow = true;
  group.add(basePit);

  // Tier 2: Outer Metallic Mechanical Rim with Bevel
  const outerRimGeo = new THREE.CylinderGeometry(4.5, 4.7, 0.12, 64);
  const outerRim = new THREE.Mesh(outerRimGeo, chromeRimMaterial);
  outerRim.position.y = -0.09;
  outerRim.receiveShadow = true;
  group.add(outerRim);

  // Tier 3: LED Ring Light Strip
  const ledRingGeo = new THREE.TorusGeometry(4.25, 0.02, 16, 100);
  const ledRing = new THREE.Mesh(ledRingGeo, ledRingMaterial);
  ledRing.rotation.x = Math.PI / 2;
  ledRing.position.y = -0.03;
  group.add(ledRing);

  // Tier 4: Main Rotating Mechanical Deck
  const deckGeo = new THREE.CylinderGeometry(4.2, 4.25, 0.08, 64);
  const mainDeck = new THREE.Mesh(deckGeo, innerGridMaterial);
  mainDeck.position.y = -0.04;
  mainDeck.receiveShadow = true;
  group.add(mainDeck);

  // Tier 5: Concentric Inner Grooves & Radial Panels
  const innerDiscGeo = new THREE.CylinderGeometry(3.2, 3.2, 0.09, 64);
  const innerDisc = new THREE.Mesh(innerDiscGeo, darkBrushedMetal);
  innerDisc.position.y = -0.035;
  innerDisc.receiveShadow = true;
  group.add(innerDisc);

  // Radial Mechanical Segments (12 notches around the platform edge)
  const notchGeo = new THREE.BoxGeometry(0.08, 0.1, 0.4);
  for (let i = 0; i < 12; i++) {
    const angle = (i * Math.PI) / 6;
    const notch = new THREE.Mesh(notchGeo, chromeRimMaterial);
    notch.position.x = Math.cos(angle) * 3.9;
    notch.position.z = Math.sin(angle) * 3.9;
    notch.position.y = -0.03;
    notch.rotation.y = -angle;
    group.add(notch);
  }

  // Center Target Spot Light Disc
  const centerDiscGeo = new THREE.CylinderGeometry(1.8, 1.8, 0.095, 32);
  const centerDisc = new THREE.Mesh(
    centerDiscGeo,
    new THREE.MeshStandardMaterial({
      color: 0x0f1117,
      roughness: 0.2,
      metalness: 0.9,
    })
  );
  centerDisc.position.y = -0.032;
  centerDisc.receiveShadow = true;
  group.add(centerDisc);

  return group;
}
