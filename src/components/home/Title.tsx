import { useThree } from "@react-three/fiber";
import TopText from "./TopText";
import { Hud, OrbitControls, OrthographicCamera, PerspectiveCamera } from "@react-three/drei";

export default function Title(props: any) {
  const { viewport } = useThree();

  return (
    <Hud renderPriority={1}>
      <OrthographicCamera
        makeDefault
        zoom={1}
        top={20}
        bottom={-20}
        left={20 * viewport.aspect}
        right={-20 * viewport.aspect}
        near={1}
        far={100}
        position={[0, 0, 20]}
      />

      <TopText />
    </Hud>
  );
}
