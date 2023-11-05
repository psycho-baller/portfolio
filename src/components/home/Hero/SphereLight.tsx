// import { Sphere } from "@react-three/drei";
import { animated, useSpring } from "@react-spring/three";
import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useStore } from "@store";
import { useRef, type ComponentPropsWithoutRef, type FC } from "react";

interface Props extends ComponentPropsWithoutRef<"div"> {}

const SphereLight: FC<Props> = (props) => {
  const {} = props;
  const ref = useRef<THREE.PointLight>(null!);
  const [heroSphereCursor, areaHovered] = useStore((state) => [state.heroSphereCursor, state.areaHovered]);
  const { scale } = useSpring({
    scale: areaHovered ? 0.7 : 1,
  });

  useFrame(({ pointer, viewport }) => {
    if (!ref.current || !pointer.x || !pointer.y) return;
    // cursor position
    ref.current.position.x = (pointer.x * viewport.width) / 2.3;
    ref.current.position.y = (pointer.y * viewport.height) / 2.3;
    // handle z position depending on the camera rotation
  });

  return (
    <pointLight
      ref={ref}
      position={[100, 100, 2]}
      intensity={8}
      color={"#00ffff"}
      // distance={20}
    >
      <animated.mesh scale={scale}>
        <Sphere
          args={[0.15, 16, 8]}
          ref={heroSphereCursor}
        >
          <meshBasicMaterial color={"#00ffff"} />
        </Sphere>
      </animated.mesh>
    </pointLight>
  );
};

export default SphereLight;
