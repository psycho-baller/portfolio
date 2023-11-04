import { Suspense, type HTMLAttributes } from "react";
import Canvas from "../../react/threejs/Canvas";
import Areas from "../../react/threejs/Areas";
import SecondScene from "../../react/threejs/SecondScene";
import SUSpense from "../../react/threejs/Suspense";
interface HeroSceneProps extends HTMLAttributes<HTMLDivElement> {
  hideCallback?: boolean;
  hideTitle?: boolean;
}
export default function HeroScene(props: HeroSceneProps) {
  const { children, hideCallback = false, hideTitle = false, ...rest } = props;
  return (
    <Canvas>
      <Suspense fallback={!hideCallback && <SUSpense />}>
        {!hideTitle && <SecondScene />}
        <Areas />
      </Suspense>
    </Canvas>
  );
}
