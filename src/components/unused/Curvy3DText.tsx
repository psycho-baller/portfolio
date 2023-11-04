import { Text3D } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import mondayFont from "@utils/blueNight_font.json";

export default function Curvy3DText({ char, charsLen, i }: { char: string; charsLen: number; i: number }) {
  const textRef = useRef<THREE.Mesh>(null!);
  useFrame(({ clock, camera }) => {
    // look at the camera
    textRef.current.lookAt(camera.position); // TODO: could alternatively replace this with manually rotating it's x-axis
    // keep the text upright
    textRef.current.rotation.z = 0;
    textRef.current.rotation.x = 0;
  });
  return (
    <Text3D
      key={i}
      // curvy text
      position={[i * 0.9 - 10, 0, Math.abs(charsLen / 2 - i) * 0.6]}
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
      lineHeight={1}
    >
      {char}
      <meshNormalMaterial />
    </Text3D>
  );
}
