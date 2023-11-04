import { useRef } from "react";
import { Vector3, Euler } from "three";
import Area from "../../react/threejs/Areahome/Hero/Area";
import { useThree } from "@react-three/fiber";
import { externalLinks } from "@utils/constants";

export default function Areas(props: any) {
  const { size } = useThree();
  const { width } = size;
  console.log(width);
  let distanceXFromCenter: number;
  let distanceYFromCenter: number = 0;
  let scale: number = 1;
  switch (true) {
    case width > 1500:
      distanceXFromCenter = 11;
      scale = 1.1;
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
        area="learning"
        url={externalLinks.goodreads}
      />
      <Area
        // rotation={new Euler(0, Math.PI / 2, 0)}
        // position={new Vector3(0, 0, 0)}
        area="developing"
        url={"https://github.com/psycho-baller"}
      />
      <Area
        position={new Vector3(distanceXFromCenter, distanceYFromCenter, 0)}
        area="writing" // sharing
        url={"https://youtube.com/@ramimaalouf"}
      />
    </group>
  );
}
