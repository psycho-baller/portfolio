import { Suspense } from "react";
import Canvas from "../Canvas";
import Balls from "./Balls";
import SecondScene from "./SecondScene";
import SUSpense from "./Suspense";
export default function HeroScene(props: any) {
  return (
    <Canvas>
      <Suspense fallback={<SUSpense />}>
        <SecondScene />
        <Balls />
      </Suspense>
    </Canvas>
  );
}
