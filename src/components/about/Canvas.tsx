import type * as THREE from "three";
import { Children, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
export default function About({ children }: { children: JSX.Element }) {
  return (
    <Canvas
      style={{
        height: "100vh",
        width: "100vw",
        background: "black",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {children}
    </Canvas>
  );
}
