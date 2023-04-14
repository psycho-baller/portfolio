import { useFrame, useThree } from "@react-three/fiber";
import { Center, Text3D, Text, useTexture, useMatcapTexture } from "@react-three/drei";
import mondayFont from "../../utils/blueNight_font.json";
import { useRef } from "react";
import { Vector3 } from "three";

export default function TopText(props: any) {
  const { viewport } = useThree();
  const { width, height } = viewport;
  const ref = useRef<THREE.Mesh>(null!);

  const [matcap] = useMatcapTexture("346088_6ABED7_56A0C5_4E91B8", 256);

  var target = new Vector3();
  var mouseX = 0,
    mouseY = 0;

  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  });

  const reactivity = 0.02;
  const effectOnX = 0.0075;
  const effectOnY = 0.0075;
  useFrame(({ camera }) => {
    target.x += (mouseX * effectOnX - target.x) * reactivity;
    target.y += (mouseY * effectOnY - target.y) * reactivity;

    target.z = camera.position.z;

    ref.current.lookAt(target);
    ref.current.rotation.y += Math.PI;
    // look down
    ref.current.rotation.x -= Math.PI / 4;
  });

  // a list of all the characters in the text
  // const chars = "EXPLORE MY THREE AREAS OF THE INTERNET".split("");

  return (
    <group>
      {width > 25 ? (
        <Center
          // @ts-ignore
          ref={ref}
          // ref={textRef}
          position={[0, 15, 0]}
          // look at the camera
          rotation={[0, Math.PI, 0]}
        >
          {/* {chars.map((char, i) => (
            <Curvy3DText key={i} char={char} i={i} charsLen={chars.length} />
          ))} */}
          <Text3D
            // @ts-ignore
            font={mondayFont}
            size={1}
            height={0.3}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.4}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            lineHeight={1}
          >
            EXPLORE MY THREE AREAS OF THE INTERNET
            <meshMatcapMaterial matcap={matcap} />
          </Text3D>
        </Center>
      ) : (
        // @ts-ignore
        <Center position={[0, 15, 0]} rotation={[0, Math.PI, 0]}>
          <Center>
            <Text3D
              // @ts-ignore
              font={mondayFont}
              size={width < 10 ? 0.7 : width < 15 ? 0.9 : 1}
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
              size={width < 10 ? 0.7 : width < 15 ? 0.9 : 1}
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
