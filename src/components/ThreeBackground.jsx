import { useRef, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Constellation() {
  const pointsRef = useRef();
  const linesRef = useRef();
  const mousePos = useRef({ x: -100, y: -100 }); // Out of frame initially
  
  const particleCount = 120;
  const maxDistance = 3.8;

  // Track global mouse correctly since container pointer-events are disabled
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mousePos.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < particleCount; i++) {
      temp.push({
        position: new THREE.Vector3(
          (Math.random() - 0.5) * 22,
          (Math.random() - 0.5) * 22,
          (Math.random() - 0.5) * 10
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02,
          (Math.random() - 0.5) * 0.02
        ),
      });
    }
    return temp;
  }, []);

  // Pre-allocate large arrays for performance
  const linePositions = useMemo(() => new Float32Array(particleCount * particleCount * 3), []);
  const lineColors = useMemo(() => new Float32Array(particleCount * particleCount * 3), []);

  const pointGeo = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(particleCount * 3), 3));
    return geo;
  }, []);

  useFrame((state) => {
    const mouse3D = new THREE.Vector3(
      (mousePos.current.x * state.viewport.width) / 2,
      (mousePos.current.y * state.viewport.height) / 2,
      2 // Slight z-offset for mouse
    );

    let lineIndex = 0;
    const baseColor = new THREE.Color('#f4a261'); 
    const pointPositions = pointsRef.current.geometry.attributes.position.array;

    particles.forEach((particle, i) => {
      // Apply velocity
      particle.position.add(particle.velocity);

      // Boundaries (wrap around or bounce)
      if (particle.position.x < -12 || particle.position.x > 12) particle.velocity.x *= -1;
      if (particle.position.y < -12 || particle.position.y > 12) particle.velocity.y *= -1;
      if (particle.position.z < -8 || particle.position.z > 4) particle.velocity.z *= -1;

      // Mouse repulsion
      const distToMouse = particle.position.distanceTo(mouse3D);
      if (distToMouse < 4) {
        const force = mouse3D.clone().sub(particle.position).normalize().multiplyScalar(-0.015);
        particle.velocity.add(force);
      }
      
      // Limit speed so they don't go too fast indefinitely
      particle.velocity.clampLength(0, 0.04);

      // Update point arrays
      pointPositions[i * 3] = particle.position.x;
      pointPositions[i * 3 + 1] = particle.position.y;
      pointPositions[i * 3 + 2] = particle.position.z;

      // Check distances for lines
      for (let j = i + 1; j < particleCount; j++) {
        const p2 = particles[j];
        const dist = particle.position.distanceTo(p2.position);
        
        if (dist < maxDistance) {
          const alpha = Math.max(0, 1.0 - (dist / maxDistance));
          
          linePositions[lineIndex * 3] = particle.position.x;
          linePositions[lineIndex * 3 + 1] = particle.position.y;
          linePositions[lineIndex * 3 + 2] = particle.position.z;
          
          linePositions[(lineIndex + 1) * 3] = p2.position.x;
          linePositions[(lineIndex + 1) * 3 + 1] = p2.position.y;
          linePositions[(lineIndex + 1) * 3 + 2] = p2.position.z;

          // Fade out based on distance
          const intensity = alpha * 0.8;
          lineColors[lineIndex * 3] = baseColor.r * intensity;
          lineColors[lineIndex * 3 + 1] = baseColor.g * intensity;
          lineColors[lineIndex * 3 + 2] = baseColor.b * intensity;
          
          lineColors[(lineIndex + 1) * 3] = baseColor.r * intensity;
          lineColors[(lineIndex + 1) * 3 + 1] = baseColor.g * intensity;
          lineColors[(lineIndex + 1) * 3 + 2] = baseColor.b * intensity;

          lineIndex += 2;
        }
      }
    });

    pointsRef.current.geometry.attributes.position.needsUpdate = true;

    if (linesRef.current) {
      linesRef.current.geometry.setDrawRange(0, lineIndex);
      linesRef.current.geometry.attributes.position.needsUpdate = true;
      linesRef.current.geometry.attributes.color.needsUpdate = true;
    }
  });

  return (
    <>
      <points ref={pointsRef} geometry={pointGeo}>
        <pointsMaterial size={0.08} color="#e9c46a" transparent opacity={0.9} sizeAttenuation={true} />
      </points>
      <lineSegments ref={linesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
            usage={THREE.DynamicDrawUsage}
          />
          <bufferAttribute
            attach="attributes-color"
            count={lineColors.length / 3}
            array={lineColors}
            itemSize={3}
            usage={THREE.DynamicDrawUsage}
          />
        </bufferGeometry>
        <lineBasicMaterial vertexColors transparent opacity={1} depthWrite={false} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </>
  );
}

const ThreeBackground = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -10,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Constellation />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeBackground;
