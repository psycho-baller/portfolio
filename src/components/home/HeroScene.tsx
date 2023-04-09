import Canvas from "../Canvas";
import Balls from "./Balls";
import TopText from "./TopText";
import { Hud, OrbitControls, PerspectiveCamera } from "@react-three/drei";
export default function HeroScene(props: any) {
  return (
    <Canvas>
      <Hud renderPriority={1}>
        <PerspectiveCamera makeDefault position={[0, 0, 30]} />

        <TopText />
      </Hud>
      <Balls />
    </Canvas>
  );
}
