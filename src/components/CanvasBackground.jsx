import React from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import FloatingParticles from "./FloatingParticles";
import Items from "./Items";

const CanvasBackground = ({ isMobile }) => (
  <Canvas
    orthographic
    camera={{ zoom: isMobile ? 60 : 80 }}
    gl={{
      alpha: false,
      antialias: true,
      powerPreference: "high-performance",
    }}
    dpr={Math.min(window.devicePixelRatio, 2)}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      zIndex: 0,
      pointerEvents: "none", // bardzo ważne!
    }}
  >
    <color attach="background" args={["#050e17"]} />
    <ambientLight intensity={0.2} />
    <spotLight
      position={[10, 10, 10]}
      angle={0.15}
      penumbra={1}
      intensity={1}
      castShadow
    />
    <Environment preset="city" />
    <FloatingParticles count={200} />
    <Items />
  </Canvas>
);

export default CanvasBackground;
