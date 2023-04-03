import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import Ball from "./Ball";

export default function Balls(props: any) {
  const ballGroup = useRef<THREE.Group>(null!);

  return (
    <group {...props} ref={ballGroup}>
      {/* hover only one ball at a time */}
      <Ball tiltAxis={[Math.PI / 15, 0, 0]} initialAngle={-Math.PI / 2} />
      <Ball tiltAxis={[Math.PI / 15, 0, -Math.PI / 4]} initialAngle={Math.PI / 2} />
      <Ball tiltAxis={[Math.PI / 15, 0, (5 * Math.PI) / 4]} initialAngle={Math.PI / 2} />
    </group>
  );
}
