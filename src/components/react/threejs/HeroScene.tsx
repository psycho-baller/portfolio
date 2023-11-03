import { Suspense, type HTMLAttributes } from "react";
import Canvas from "./Canvas";
import Areas from "./Areas";
import SecondScene from "./SecondScene";
import SUSpense from "./Suspense";
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
