import { Suspense, type HTMLAttributes } from "react";
import Canvas from "@components/shared/threejs/Canvas";
import Areas from "./Areas";
import SecondScene from "./SecondScene";
import SUSpense from "./Suspense";
import SphereLight from "./SphereLight";
interface HeroSceneProps extends HTMLAttributes<HTMLDivElement> {
  hideCallback?: boolean;
  hideTitle?: boolean;
}
export default function HeroScene(props: HeroSceneProps) {
  const { children, hideCallback = false, hideTitle = false, ...rest } = props;
  return (
    <Canvas>
      <Suspense fallback={!hideCallback && <SUSpense />}>
        {/* <OrbitControls
          enableZoom={false}
          enableRotate={false}
          // enablePan={false}
        /> */}
        {/* <ambientLight intensity={0.15} /> */}
        <pointLight
          position={[0, 0, 10]}
          intensity={0.25}
        />
        {!hideTitle && <SecondScene />}
        <Areas />
        <SphereLight />
      </Suspense>
    </Canvas>
  );
}
