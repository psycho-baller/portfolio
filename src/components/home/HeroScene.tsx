import { useTexture } from "@react-three/drei";
import { sRGBEncoding } from "three";
import Canvas from "../Canvas";
import Balls from "./Balls";
import SecondScene from "./SecondScene";
import { useThree } from "@react-three/fiber";
export default function HeroScene(props: any) {
  return (
    <Canvas>
      <SecondScene />
      <Balls />
    </Canvas>
  );
}
