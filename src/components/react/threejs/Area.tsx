import { useEffect } from "react";
import { Text3D, Center, Trail } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { type Vector3, type Group, type Mesh, type Euler } from "three";
import { useControls } from "leva";
import Mac from "@components/react/threejs/models/Mac";
import Book from "@components/react/threejs/models/Book";
import Pencil from "@components/react/threejs/models/Pencil";
import mondayFont from "@utils/blueNight_font.json";

export default function Ball({
  // areaGroup,
  // areaRef,
  area,
  ...props
}: {
  // areaGroup: React.MutableRefObject<Group>;
  // areaRef: React.MutableRefObject<Mesh>;
  rotation?: Euler;
  position?: Vector3;
  area: string;
  [x: string]: any;
}) {
  const [hovered, setHover] = useState(false);
  // const [active, setActive] = useState(false);
  const areaGroup = useRef<Group>(null!);
  const areaRef = useRef<Group>(null!);
  const textRef = useRef<Group>(null!);

  const { size } = useThree();

  // useEffect(() => {
  //   document.body.style.cursor = hovered ? "pointer" : "auto";
  //   return () => {
  //     document.body.style.cursor = "auto";
  //   };
  // }, [hovered]);

  // check if page is in debug mode
  // const debug = window.location.href.includes("debug");
  // const { speed } = (debug && useControls({ speed: { value: 10, min: 0, max: 1000 } })) || { speed: 10 };

  // if smaller screen, reduce the size of the ball
  const distanceFromRadius = size.width > 700 ? 8 : (size.width * 8) / 700;

  const baseSpeed = 10;
  const timeToReachBaseSpeed = 0.5;
  // Set the initial extra rotation speed to a high value
  const initialExtraRotationSpeed = 1800;
  let extraRotationSpeed = initialExtraRotationSpeed;
  let rotationSpeed: number;
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (!areaRef.current) return;

    // spin the ball about the y axis when first loaded, then slow down
    // dont update the rotation speed if it has already reached the base speed (optimization)
    if (rotationSpeed !== baseSpeed) {
      // Exponentially decrease the extra rotation speed over time until it reaches the base speed
      extraRotationSpeed = initialExtraRotationSpeed * Math.pow(0.5, elapsedTime / timeToReachBaseSpeed);
    }
    rotationSpeed = Math.max(baseSpeed, extraRotationSpeed);

    // Update the rotation of the areaRef mesh
    areaRef.current.rotation.y += rotationSpeed * 0.001;
  });

  return (
    <>
      <group ref={areaGroup}>
        <group
          {...props}
          ref={areaRef}
          scale={
            size.width > 700 ? [1, 1, 1] : [(size.width * 1) / 700, (size.width * 1) / 700, (size.width * 1) / 700]
          }
          onClick={(_event) => {
            // TODO: route to the corresponding section of the page
            if (props.url) window.open(props.url, "_blank");
            // setActive(!active);
          }}
          onPointerOver={(_event) => {
            setHover(true);
            document.body.style.cursor = "pointer";

            // setSpeed(1);
          }}
          onPointerOut={(_event) => {
            document.body.style.cursor = "auto";
            setHover(false);
            // setSpeed(5);
          }}
        >
          {area === "building" && <Mac />}
          {area === "consuming" && <Book />}
          {area === "creating" && <Pencil />}
        </group>
      </group>
      {hovered && (
        // @ts-ignore
        <Center
          position={[0, 6, 0]}
          ref={textRef}
        >
          <Text3D
            // @ts-ignore
            font={mondayFont}
            // children={area.toUpperCase()}
            // size={1}
            height={0.3}
            curveSegments={12}
            bevelEnabled
            bevelThickness={0.4}
            bevelSize={0.02}
            bevelOffset={0}
            bevelSegments={5}
          >
            {area.toUpperCase()}
            <meshNormalMaterial />
          </Text3D>
        </Center>
      )}
    </>
  );
}
