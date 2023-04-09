import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Center, Text3D } from "@react-three/drei";
import mondayFont from "../../utils/blueNight_font.json";

export default function TopText(props: any) {
  const textRef = useRef<THREE.Mesh>(null!);

  useFrame(({ clock, camera }) => {
    // look at the camera
    textRef.current.lookAt(camera.position); // TODO: could alternatively replace this with manually rotating it's x-axis
  });

  return (
    // @ts-ignore
    <Center ref={textRef} position={[0, 10, 0]}>
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
        maxWidth={0.05}
        lineHeight={1}
      >
        EXPLORE MY THREE AREAS OF THE INTERNET
        <meshNormalMaterial />
      </Text3D>
    </Center>
  );
}
