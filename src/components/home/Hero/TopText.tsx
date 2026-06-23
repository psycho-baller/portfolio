import { useFrame, useThree } from '@react-three/fiber';
import { Center, Text3D, useTexture } from '@react-three/drei';
import mondayFont from '/fonts/blueNight_font.json?url';
import { useRef, useEffect, useState } from 'react';
import { Vector3, type Texture } from 'three';

const MATCAP_URL = '/matcaps/hero-matcap-128.png';

function brightenMatcapTexture(texture: Texture, baseLift = 0.14, leftExtraLift = 0.12) {
  const source = texture.image as HTMLImageElement | HTMLCanvasElement;
  if (!source?.width || !source?.height) return texture;

  const canvas = document.createElement('canvas');
  canvas.width = source.width;
  canvas.height = source.height;
  const ctx = canvas.getContext('2d');
  if (!ctx) return texture;

  ctx.drawImage(source, 0, 0);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const { width, data } = imageData;
  const midpoint = width / 2;

  for (let px = 0; px < width; px++) {
    const isLeftHalf = px < midpoint;
    const boost = (baseLift + (isLeftHalf ? leftExtraLift : 0)) * 255;

    for (let py = 0; py < canvas.height; py++) {
      const i = (py * width + px) * 4;
      data[i] = Math.min(255, data[i] + boost);
      data[i + 1] = Math.min(255, data[i + 1] + boost);
      data[i + 2] = Math.min(255, data[i + 2] + boost);
    }
  }

  ctx.putImageData(imageData, 0, 0);

  const brightened = texture.clone();
  brightened.image = canvas;
  brightened.needsUpdate = true;
  return brightened;
}

export default function TopText(props: any) {
  const TEXT_Y_POS = -19;
  const { viewport } = useThree();
  const { width, height } = viewport;
  const ref = useRef<THREE.Mesh>(null!);

  const [matcap] = useTexture([MATCAP_URL]);
  const [brightMatcap, setBrightMatcap] = useState<Texture | null>(null);

  useEffect(() => {
    if (!matcap || brightMatcap) return;
    setBrightMatcap(brightenMatcapTexture(matcap));
  }, [matcap, brightMatcap]);

  const [isCursorActive, setIsCursorActive] = useState(false);

  useEffect(() => {
    const handleMouseMove = () => {
      setIsCursorActive(true);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  let target = new Vector3(0, TEXT_Y_POS, 0);
  let mouseX = 0,
    mouseY = 0;

  // useEffect(() => {
  const windowHalfX = window.innerWidth / 2; // coz the text is in the middle
  const windowHalfY = window.innerHeight / 2; // coz the text is at the top
  function onDocumentMouseMove(event: MouseEvent) {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  }

  window.addEventListener('mousemove', onDocumentMouseMove);
  //   return () => {
  //     window.removeEventListener("mousemove", onDocumentMouseMove);
  //   };
  // }, []);

  const reactivity = 0.02;
  const effectOnX = 0.0075;
  const effectOnY = 0.0075;
  useFrame(({ camera }) => {
    target.x += (mouseX * effectOnX - target.x) * reactivity;
    if (!isCursorActive) {
      target.y = TEXT_Y_POS;
    } else {
      // if mouse is above the text
      if (mouseY < 0) {
        // increase the effect on the y axis (when the mouse is above the text)
        target.y += (mouseY * 10 * effectOnY - target.y) * reactivity;
      } else {
        target.y += (mouseY * effectOnY - target.y) * reactivity;
      }
    }

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
          position={[0, 10, 0]}
          // look at the camera
          rotation={[0, Math.PI, 0]}
        >
          {/* {chars.map((char, i) => (
            <Curvy3DText key={i} char={char} i={i} charsLen={chars.length} />
          ))} */}
          <Text3D
            // @ts-ignore
            font={mondayFont}
            size={width < 10 ? 0.7 : width < 15 ? 1 : 1.4}
            height={0.3}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.4}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
            lineHeight={1}
            // if text is overflown, put the text on a new line
            // @ts-ignore
            onSync={(mesh) => {
              if (mesh.geometry.layout.lines.length > 1) {
                mesh.position.y = 0.5;
              }
            }}
          >
            EXPLORE MY THREE AREAS OF THE INTERNET
            <meshMatcapMaterial matcap={brightMatcap ?? matcap} />
          </Text3D>
        </Center>
      ) : (
        // @ts-ignore
        <Center
          position={[0, 14, 0]}
          rotation={[0, Math.PI, 0]}
          // @ts-ignore
          ref={ref}
        >
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
              <meshMatcapMaterial matcap={brightMatcap ?? matcap} />
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
              <meshMatcapMaterial matcap={brightMatcap ?? matcap} />
            </Text3D>
          </Center>
        </Center>
      )}
    </group>
  );
}
