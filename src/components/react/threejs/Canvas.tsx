import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { NoToneMapping } from "three";
import SphereLight from "./SphereLight";
export default function MyCanvas({ children }: { children: JSX.Element[] | JSX.Element }) {
  return (
    <Canvas
      // gl={{ antialias: true, toneMapping: NoToneMapping }}
      linear
      camera={{ position: [0, 0, 15], fov: 75, near: 0.1, far: 1000 }}
      // Change the camera type to PerspectiveCamera
      // camera={PerspectiveCamera}
      style={{
        height: "100%",
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        // zIndex: -1,
        // overflow: "hidden",
      }}
    >
      <OrbitControls
        enableZoom={false}
        enableRotate={false}
        // enablePan={false}
      />
      {/* <ambientLight intensity={0.15} /> */}
      <pointLight
        position={[0, 0, 10]}
        intensity={0.25}
      />
      <SphereLight />
      {children}
    </Canvas>
  );
}
