import { useRef } from "react";
import Ball from "./Ball";

export default function Balls(props: any) {
  const ballGroup = useRef<THREE.Group>(null!);

  return (
    <group{...props} ref={ballGroup}>
      <Ball
        tiltAxis={[Math.PI / 15, 0, 0]}
        initialAngle={-Math.PI / 2}
        area="building"
        url={"https://github.com/psycho-baller"}
      />
      <Ball tiltAxis={[Math.PI / 15, 0, -Math.PI / 4]} initialAngle={Math.PI / 2} area="consuming" url={"https://"} />
      <Ball
        tiltAxis={[Math.PI / 15, 0, (5 * Math.PI) / 4]}
        initialAngle={Math.PI / 2}
        area="creating"
        url={"https://youtube.com/@ramimaalouf"}
      />
    </group>
  );
}
