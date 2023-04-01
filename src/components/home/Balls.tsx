import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import Ball from "./Ball";
import { Quaternion, Vector3 } from "three";

export default function Balls(props: any) {
  const ball1 = useRef<THREE.Mesh>(null!);
  const ball2 = useRef<THREE.Mesh>(null!);
  const ball3 = useRef<THREE.Mesh>(null!);
  const ballGroup = useRef<THREE.Group>(null!);

  return (
    <group {...props} ref={ballGroup}>
      {/* hover only one ball at a time */}
      <Ball ref={ball1} position={[-2, 0, 0]} />
      <Ball ref={ball2} position={[0, 2, 0]} />
      <Ball ref={ball3} position={[0, 0, 4]} />
    </group>
  );
}
