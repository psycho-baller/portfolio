import { Fragment, useEffect, type HTMLAttributes } from "react";
import Canvas from "@components/shared/threejs/Canvas";
import Areas from "./Areas";
import SecondScene from "./SecondScene";
import SphereLight from "./SphereLight";
interface HeroSceneProps extends HTMLAttributes<HTMLDivElement> {
  hideCallback?: boolean;
  hideTitle?: boolean;
}
export default function HeroScene(props: HeroSceneProps) {
  const { children, hideCallback = false, hideTitle = false, ...rest } = props;
  return (
    <Canvas {...rest}>
      <Fragment>
        {/* <OrbitControls
          enableZoom={false}
          enableRotate={false}
          // enablePan={false}
        /> */}
        <ambientLight intensity={2.5} />
        {/* <pointLight
          position={[0, 0, 10]}
          intensity={2.5}
        /> */}
        {!hideTitle && <SecondScene />}
        <Areas />
        <SphereLight />
      </Fragment>
    </Canvas>
  );
}
