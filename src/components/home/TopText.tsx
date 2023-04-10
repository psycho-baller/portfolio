import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Center, Text3D } from "@react-three/drei";
import mondayFont from "../../utils/blueNight_font.json";

export default function TopText(props: any) {
  const textRef = useRef<THREE.Mesh>(null!);

  const { viewport } = useThree();

  const { width, height } = viewport;
  console.log("width", width);

  useFrame(({ clock, camera }) => {
    // look at the camera
    textRef.current.lookAt(camera.position); // TODO: could alternatively replace this with manually rotating it's x-axis
  });

  return (
    <group>
      {width > 27.5 ? (
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
            lineHeight={1}
            // make text phone friendly
          >
            EXPLORE MY THREE AREAS OF THE INTERNET
            <meshNormalMaterial />
          </Text3D>
        </Center>
      ) : (
        // @ts-ignore
        <Center ref={textRef} position={[0, 10, 0]}>
          <Center>
            <Text3D
              // @ts-ignore
              font={mondayFont}
              ref={textRef}
              size={0.6}
              height={0.3}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.4}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
              lineHeight={1}
              // make text phone friendly
            >
              EXPLORE MY THREE AREAS
              <meshNormalMaterial />
            </Text3D>
          </Center>
          <Center position={[0, -2, 0]}>
            <Text3D
              // @ts-ignore
              font={mondayFont}
              ref={textRef}
              size={0.6}
              height={0.3}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.4}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
              lineHeight={1}
              // make text phone friendly
            >
              OF THE INTERNET
              <meshNormalMaterial />
            </Text3D>
          </Center>
        </Center>
      )}
    </group>
  );
}
