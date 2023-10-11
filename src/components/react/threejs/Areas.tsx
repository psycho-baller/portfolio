import { useRef } from "react";
import { Vector3, Euler } from "three";
import Area from "./Area";

export default function Areas(props: any) {
  const areaGroup = useRef<THREE.Group>(null!);

  return (
    <group
      {...props}
      ref={areaGroup}
    >
      <Area
        // rotation={new Euler(Math.PI / 2, 0, Math.PI / 2)}
        position={new Vector3(-8, 0, 0)}
        area="consuming"
        url={"https://www.goodreads.com/user/show/161793210-rami"}
      />
      <Area
        // rotation={new Euler(0, Math.PI / 2, 0)}
        // position={new Vector3(0, 0, 0)}
        area="building"
        url={"https://github.com/psycho-Areaer"}
      />
      <Area
        position={new Vector3(8, 0, 0)}
        area="creating"
        url={"https://youtube.com/@ramimaalouf"}
      />
    </group>
  );
}
