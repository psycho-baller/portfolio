import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Billboard, Center, Text3D } from "@react-three/drei";
import mondayFont from "../../utils/monday_font.json";
import { Vector3 } from "three";

export default function TopText(props: any) {
  const groupRef = useRef<THREE.Group>(null!);
  const textRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock, camera }) => {
    // look at the camera
    // groupRef.current.lookAt(camera.position);
  });

  return (
    <Billboard {...props} ref={groupRef}>
      {/* @ts-ignore */}
      <Center ref={textRef}>
        <Text3D
          // @ts-ignore
          font={mondayFont}
          ref={textRef}
          // size={1}
          height={0.3}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.4}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          Explore my three areas of the internet
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </Billboard>
  );
}
