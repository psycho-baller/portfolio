import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import Ball from "./Ball";
import { OrbitControls } from "@react-three/drei";

export default function Balls(props: any) {
  const ballGroup = useRef<THREE.Group>(null!);

  return (
    <group {...props} ref={ballGroup}>
      <Ball tiltAxis={[Math.PI / 15, 0, 0]} initialAngle={-Math.PI / 2} area="building" />
      <Ball tiltAxis={[Math.PI / 15, 0, -Math.PI / 4]} initialAngle={Math.PI / 2} area="consuming" />
      <Ball tiltAxis={[Math.PI / 15, 0, (5 * Math.PI) / 4]} initialAngle={Math.PI / 2} area="creating" />
    </group>
  );
}
