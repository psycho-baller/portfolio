import Canvas from "../Canvas";
import Balls from "./Balls";
import SecondScene from "./SecondScene";
export default function HeroScene(props: any) {
  return (
    <Canvas>
      <SecondScene />
      <Balls />
    </Canvas>
  );
}
