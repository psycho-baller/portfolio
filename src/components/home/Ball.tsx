import { useEffect } from "react";
import { Text3D, Center, Trail } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Vector3, Group, Mesh } from "three";
import { useControls } from "leva";
import Mac from "./models/Mac";
import Book from "./models/Book";
import Pencil from "./models/Pencil";
import mondayFont from "../../utils/blueNight_font.json";

export default function Ball({
  // ballGroup,
  // ballRef,
  area,
  tiltAxis = [0, 0, 0],
  initialAngle = 0,
  ...props
}: {
  // ballGroup: React.MutableRefObject<Group>;
  // ballRef: React.MutableRefObject<Mesh>;
  area: string;
  tiltAxis?: [number, number, number];
  initialAngle?: number;
  [x: string]: any;
}) {
  const [hovered, setHover] = useState(false);
  // const [active, setActive] = useState(false);
  const ballGroup = useRef<Group>(null!);
  const ballRef = useRef<Group>(null!);
  const textRef = useRef<Mesh>(null!);

  const { size } = useThree();

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
    return () => {
      document.body.style.cursor = "auto";
    };
  }, [hovered]);

  // check if page is in debug mode
  const debug = window.location.href.includes("debug");
  const { speed } = (debug && useControls({ speed: { value: 10, min: 0, max: 1000 } })) || { speed: 10 };

  // if smaller screen, reduce the size of the ball
  const distanceFromRadius = size.width > 800 ? 8 : (size.width * 8) / 800
  let initialSlowness = 0.001;
  let initialFastness = 0.007;
  // const speed = 5;
  // const angle = Math.PI / 8;
  useFrame(({ clock, camera }) => {
    const elapsedTime = clock.getElapsedTime();


    // if user hovers on a ball, rotate the ball group the opposite direction of the ball (slows it down)
    if (hovered) {
      ballGroup.current.rotateOnAxis(new Vector3(0, 1, 0), initialSlowness);
      // gradually increase the speed
      if (initialSlowness < initialFastness) {
        initialSlowness += 0.00008; // gradually increase the opposing speed
      }
    } else {
      // if user is not hovering on a ball, slowly reduce the speed of the ball group (speed up the ball)
      // had to introduce the initialFastness variable coz when we hover, state is changed and the initialSlowness is reset to 0
      if (initialFastness > initialSlowness) {
        ballGroup.current.rotateOnAxis(new Vector3(0, 1, 0), initialFastness);
        initialFastness -= 0.00008; // gradually decrease the opposing speed
      }
    }

    // rotate the ball all the time
    ballRef.current.position.x = Math.cos(elapsedTime + initialAngle) * distanceFromRadius;
    ballRef.current.position.z = Math.sin(elapsedTime + initialAngle) * distanceFromRadius;

    // make the text look at the camera
    textRef?.current?.lookAt(camera.position);
    // place the text right above the ball
    // if (textRef?.current) {
    //   textRef.current.position.y = ballRef.current.position.y + 2;
    // }
  });

  // useEffect(() => {
  //
  //   ballRef.current.material.transparent = true;
  // }, [ballRef?.current]);
  return (
    <group>
      <group rotation={tiltAxis} ref={ballGroup}>
        <group
          {...props}
          ref={ballRef}
          scale={size.width > 800 ? [1, 1, 1] : [(size.width * 1) / 800, (size.width * 1) / 800, (size.width * 1) / 800]}
          onClick={(_event) => {
            // TODO: route to the corresponding section of the page
            if (props.url) window.open(props.url, "_blank");
            // setActive(!active);
          }}
          onPointerOver={(_event) => {
            setHover(true);
            // setSpeed(1);
          }}
          onPointerOut={(_event) => {
            setHover(false);
            // setSpeed(5);
          }}
        >
          <Trail
            width={0.2} // Width of the line
            color={"cyan"} // Color of the line
            length={35} // Length of the line
            decay={0.5} // How fast the line fades away
            stride={0} // Min distance between previous and current point
            interval={1} // Number of frames to wait before next calculation
            target={undefined} // Optional target. This object will produce the trail.
            attenuation={(width) => width} // A function to define the width in each point along it.
          >
            {area === "building" && <Mac />}
            {area === "consuming" && <Book />}
            {area === "creating" && <mesh />}
            {/* Hacky fix: Since Pencil has weird positioning, we need to replace it w an invisible mesh here */}
          </Trail>
          {area === "creating" && <Pencil />} {/* And put the Pencil outside of the Trail */}
        </group>
      </group>
      {hovered && (
        // @ts-ignore
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
            {area.toUpperCase()}
            <meshNormalMaterial />
          </Text3D>
        </Center>
      )}
    </group>
  );
}
