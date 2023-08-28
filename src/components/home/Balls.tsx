import { useEffect, useRef, useState } from "react";
import Ball from "./Ball";
import { useThree } from "@react-three/fiber";

export default function Balls(props: any) {
  const ballGroup = useRef<THREE.Group>(null!);
  const { size } = useThree();
  const [distanceFromRadiusX, setDistanceFromRadiusX] = useState(0);
  const [distanceFromRadiusY, setDistanceFromRadiusY] = useState(0);
  const [YOffsetInPhone, setYOffsetInPhone] = useState(0);

  useEffect(() => {
    // for efficiency, only run this once on mount, ideally it should be run on resize
    const maxDistanceFromRadius = 10;
    const distanceFromRadius = size.width > 1200 ? maxDistanceFromRadius : (size.width * maxDistanceFromRadius) / 1200;

    // if width is sm, switch to column layout
    const isSm = size.width < 640; // 640px is the sm breakpoint in tailwindcss
    if (isSm) {
      setDistanceFromRadiusY(distanceFromRadius);
      setYOffsetInPhone(-2);
    } else {
      setDistanceFromRadiusX(distanceFromRadius);
    }
  }, []);

  return (
    <group
      {...props}
      ref={ballGroup}
    >
      <Ball
        tiltAxis={[Math.PI / 15, 0, 0]}
        position={[distanceFromRadiusX, distanceFromRadiusY + YOffsetInPhone, 0]}
        area="building"
        url={"https://github.com/psycho-baller"}
      />
      <Ball
        tiltAxis={[Math.PI / 15, 0, -Math.PI / 4]}
        position={[0, YOffsetInPhone, 0]}
        area="consuming"
        url={"https://www.goodreads.com/user/show/161793210-rami"}
      />
      <Ball
        tiltAxis={[Math.PI / 15, 0, (5 * Math.PI) / 4]}
        position={[-distanceFromRadiusX, -distanceFromRadiusY + YOffsetInPhone, 0]}
        area="creating"
        url={"https://youtube.com/@ramimaalouf"}
      />
    </group>
  );
}
