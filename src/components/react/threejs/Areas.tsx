import { useRef } from "react";
import { Vector3, Euler } from "three";
import Area from "./Area";
import { useThree } from "@react-three/fiber";

export default function Areas(props: any) {
  const { size } = useThree();
  const { width } = size;
  console.log(width);
  let distanceXFromCenter: number;
  let distanceYFromCenter: number = 0;
  let scale: number = 1;
  switch (true) {
    case width > 1400:
      distanceXFromCenter = 12;
      scale = 1.2;
      break;
    case width > 600:
      distanceXFromCenter = 8 * (width / 1000);
      // scale = width / 600;
      break;
    default:
      distanceXFromCenter = 0;
      distanceYFromCenter = 5;
      break;
  }

  return (
    <group
      {...props}
      scale={scale}
    >
      <Area
        // rotation={new Euler(Math.PI / 2, 0, Math.PI / 2)}
        position={new Vector3(-distanceXFromCenter, -distanceYFromCenter, 0)}
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
        position={new Vector3(distanceXFromCenter, distanceYFromCenter, 0)}
        area="creating"
        url={"https://youtube.com/@ramimaalouf"}
      />
    </group>
  );
}