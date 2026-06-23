import { useGLTF } from "@react-three/drei";

// Self-hosted Draco decoder — avoids slow cross-origin fetch from gstatic on mobile networks.
useGLTF.setDecoderPath("/draco/");
