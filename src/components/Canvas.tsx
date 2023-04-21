import type * as THREE from "three";
import { Children, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";
import { sRGBEncoding } from "three";
export default function About({ children }: { children: JSX.Element[] | JSX.Element }) {
  return (
    <Canvas
      id="canvas"
      camera={{ position: [0, 0, 15] }}
      style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: -10,
        overflow: "hidden",
      }}
    >
      <OrbitControls />
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {children}
    </Canvas>
  );
}
