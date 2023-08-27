import { useRef } from "react";
import Ball from "./Ball";

export default function Balls(props: any) {
  const ballGroup = useRef<THREE.Group>(null!);

  return (
    <group
      {...props}
      ref={ballGroup}
    >
      <Ball
        tiltAxis={[Math.PI / 15, 0, 0]}
        position={[5, 0, 0]}
        area="building"
        url={"https://github.com/psycho-baller"}
      />
      <Ball
        tiltAxis={[Math.PI / 15, 0, -Math.PI / 4]}
        position={[0, 0, 0]}
        area="consuming"
        url={"https://www.goodreads.com/user/show/161793210-rami"}
      />
      <Ball
        tiltAxis={[Math.PI / 15, 0, (5 * Math.PI) / 4]}
        position={[-5, 0, 0]}
        area="creating"
        url={"https://youtube.com/@ramimaalouf"}
      />
    </group>
  );
}
