import { Line } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Quaternion, Vector3, Euler, Group, Mesh, MathUtils, BufferGeometry, Float32BufferAttribute } from "three";

export default function Ball({
  ballGroup,
  ballRef,
  tiltAxis = [0, 0, 0],
  initialAngle = [0, 0, 0],
  ...props
}: {
  ballGroup: React.MutableRefObject<Group>;
  ballRef: React.MutableRefObject<Mesh>;
  tiltAxis?: [number, number, number];
  initialAngle?: [number, number, number];
  [x: string]: any;
}) {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const [speed, setSpeed] = useState(500);

  const sunPosition = new Vector3(0, 0, 0); // center
  const distanceFromRadius = 5;
  const path = new BufferGeometry();
  const positions = [] as number[];
  // const angle = Math.PI / 8;
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    // ballGroup.current.rotation.y += 0.01; // rotate the group around the Y-axis
    // ballRef.current.rotation.y += 0.01; // rotate the earth mesh around its own axis
    // ballRef.current.rotation.z = angle + elapsedTime; // rotate the earth mesh at an angle relative to its own axis
    ballRef.current.position.x = distanceFromRadius * Math.cos(elapsedTime * speed);
    ballRef.current.position.z = distanceFromRadius * Math.sin(elapsedTime * speed);

    positions.push(ballRef.current.position.x, ballRef.current.position.y, ballRef.current.position.z);
    path.setAttribute("position", new Float32BufferAttribute(positions, 3));
  });
  return (
    <group rotation={tiltAxis}>
      {/* plane rotated 90 degrees to the x-axis */}
      {/* <boxGeometry args={[10, 0, 10]} /> */}
      {/* <meshBasicMaterial color="red" /> */}
      <mesh
        {...props}
        ref={ballRef}
        scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={hovered ? "hotpink" : "orange"} />
      </mesh>
      <line>
        <bufferGeometry attach="geometry" {...path} />
        <lineBasicMaterial attach="material" color="#61FFFB" />
      </line>
    </group>
  );
}
