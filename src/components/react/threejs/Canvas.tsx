import type * as THREE from "three";
import { Children, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { sRGBEncoding } from "three";
export default function MyCanvas({ children }: { children: JSX.Element[] | JSX.Element }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 15] }}
      style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
        // zIndex: -1,
        // overflow: "hidden",
      }}
    >
      <ambientLight intensity={0.15} />
      <pointLight
        position={[0, 0, 10]}
        intensity={1}
      />
      {children}
    </Canvas>
  );
}
