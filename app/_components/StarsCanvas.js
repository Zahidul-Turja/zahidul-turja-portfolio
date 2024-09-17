"use client";

import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

import * as random from "maath/random/dist/maath-random.esm";

function StarBackground(props) {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 }),
  );

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 5]}>
      <Points ref={ref} positions={sphere} stride={4} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="$fff"
          size={0.003}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  );
}

export default function StarsCanvas() {
  return (
    <div className="fixed inset-0 -z-30 h-auto w-full">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
}
