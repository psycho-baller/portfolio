import Canvas from "../Canvas";
import Balls from "./Balls";
import Title from "./Title";
export default function HeroScene(props: any) {
  return (
    <Canvas>
      <Title />
      <Balls />
    </Canvas>
  );
}
