import Box from "../about/Box";
import Canvas from "../Canvas";

export default function HeroScene(props: any) {
  return (
    <Canvas>
      <Box position={[0, 0, 0]} />
    </Canvas>
  );
}
