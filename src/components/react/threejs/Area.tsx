import { Text3D, Center } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { type Vector3, type Group, type Euler } from "three";
import { useControls } from "leva";
import Mac from "@components/react/threejs/models/Mac";
import Book from "@components/react/threejs/models/Book";
import Pencil from "@components/react/threejs/models/Pencil";
import mondayFont from "@utils/blueNight_font.json";
import { animated, useSpring } from "@react-spring/three";
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
  const { scale } = useSpring({
    scale: hovered ? 1.08 : 1,
  });

  // useEffect(() => {
  //   document.body.style.cursor = hovered ? "pointer" : "auto";
  //   return () => {
  //     document.body.style.cursor = "auto";
  //   };
  // }, [hovered]);

  // check if page is in debug mode
  // const debug = window.location.href.includes("debug");
  // const { speed } = (debug && useControls({ speed: { value: 10, min: 0, max: 1000 } })) || { speed: 10 };

  const baseSpeed = 5;
  const timeToReachBaseSpeed = 0.5;
  // Set the initial extra rotation speed to a high value
  const initialExtraRotationSpeed = 1800;
  let extraRotationSpeed = initialExtraRotationSpeed;
  let rotationSpeed: number;
  useFrame(({ clock, camera }) => {
    const elapsedTime = clock.getElapsedTime();

    if (textRef.current) {
      textRef.current.lookAt(camera.position);
      // textRef.current.rotation.y += Math.PI;
      // // look down
      // textRef.current.rotation.x -= Math.PI / 4;
    }

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
        <animated.group
          {...props}
          ref={areaRef}
          scale={scale}
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
        </animated.group>
      </group>
      {hovered && (
        // @ts-ignore
        <Center
          position={[areaRef.current.position.x * 0.75, size.width > 600 ? -3 : -8, 0]}
          // rotation={[-Math.PI / 12, 0, 0]}

          ref={textRef}
        >
          {/* @ts-ignore */}
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
