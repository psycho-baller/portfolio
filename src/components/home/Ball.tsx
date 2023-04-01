import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Quaternion, Vector3, Euler, Group, Mesh, MathUtils } from "three";

export default function Ball({
  ballGroup,
  ballRef,
  position = [0, 0, 0],
  tiltAxis = [0, 0, 0],
  initialAngle = [0, 0, 0],
  ...props
}: {
  ballGroup: React.MutableRefObject<Group>;
  ballRef: React.MutableRefObject<Mesh>;
  position?: [number, number, number];
  tiltAxis?: [number, number, number];
  initialAngle?: [number, number, number];
  [x: string]: any;
}) {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const sunPosition = new Vector3(0, 0, 0); // center
  const distanceFromRadius = 5;
  // const angle = Math.PI / 8;
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    // ballGroup.current.rotation.y += 0.01; // rotate the group around the Y-axis
    // ballRef.current.rotation.y += 0.01; // rotate the earth mesh around its own axis
    // ballRef.current.rotation.z = angle + elapsedTime; // rotate the earth mesh at an angle relative to its own axis
    ballRef.current.position.set(
      distanceFromRadius * Math.cos(elapsedTime) + position[0],
      position[1],
      distanceFromRadius * Math.sin(elapsedTime) + position[2]
    );
  });
  return (
    <mesh rotation={tiltAxis}>
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
    </mesh>
  );
}
