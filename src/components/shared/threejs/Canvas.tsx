import { Canvas } from "@react-three/fiber";
import { NoToneMapping } from "three";
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
      {children}
    </Canvas>
  );
}
