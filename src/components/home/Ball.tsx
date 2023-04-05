import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Vector3, Group, Mesh, BufferGeometry, Float32BufferAttribute } from "three";
import { useControls } from "leva";
import Mac from "./models/Mac";
import Book from "./models/Book";
import Pencil from "./models/Pencil";

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
  const [active, setActive] = useState(false);
  const ballGroup = useRef<Group>(null!);
  const ballRef = useRef<Group>(null!);

  // check if page is in debug mode
  const debug = window.location.href.includes("debug");
  const { speed } = (debug && useControls({ speed: { value: 10, min: 0, max: 1000 } })) || { speed: 10 };

  // const [speed, setSpeed] = useState(5);

  // var speed = 5;

  const sunPosition = new Vector3(0, 0, 0); // center
  const distanceFromRadius = 8;
  const path = new BufferGeometry();
  const positions = [] as number[];
  let initialSlowness = 0.001;
  let initialFastness = 0.007;
  // const speed = 5;
  // const angle = Math.PI / 8;
  useFrame(({ clock }) => {
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
    positions.push(ballRef.current.position.x, ballRef.current.position.y, ballRef.current.position.z);
    path.setAttribute("position", new Float32BufferAttribute(positions, 3));
  });
  return (
    <group rotation={tiltAxis} ref={ballGroup}>
      <group
        {...props}
        ref={ballRef}
        scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        onClick={(_event) => {
          setActive(!active);
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
        {area === "building" && <Mac />}
        {area === "consuming" && <Book />}
        {area === "creating" && <Pencil />}
      </group>

      <line>
        <bufferGeometry attach="geometry" {...path} />
        <lineBasicMaterial attach="material" color="#61FFFB" />
      </line>
    </group>
  );
}
