// import { Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, type ComponentPropsWithoutRef, type FC } from "react";

interface Props extends ComponentPropsWithoutRef<"div"> {}

const SphereLight: FC<Props> = (props) => {
  const {} = props;
  const ref = useRef<THREE.PointLight>(null!);

  useFrame(({ mouse, viewport }) => {
    if (!ref.current) return;
    // cursor position
    ref.current.position.x = (mouse.x * viewport.width) / 2.3;
    ref.current.position.y = (mouse.y * viewport.height) / 2.3;
    // handle z position depending on the camera rotation
  });

  return (
    <pointLight
      ref={ref}
      position={[0, 0, 2]}
      intensity={2}
    >
      {/* <Sphere args={[0.1, 16, 8]} /> */}
    </pointLight>
  );
};

export default SphereLight;
