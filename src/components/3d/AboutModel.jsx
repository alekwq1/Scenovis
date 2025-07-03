import React from "react";
import { useGLTF } from "@react-three/drei";

// Model powinien mieć osobne meshe z nazwami: "MachineA", "ZoneB", itd.
const MODEL_PATH = "/models/about.glb"; // <--- ścieżka do Twojego modelu

const AboutModel = ({ onSelect }) => {
  const { nodes } = useGLTF(MODEL_PATH);

  // Wersja dynamiczna – wykrywa wszystkie mesh z modelu:
  return (
    <group>
      {Object.entries(nodes).map(([name, node]) =>
        node.isMesh ? (
          <mesh
            key={name}
            geometry={node.geometry}
            material={node.material}
            onPointerDown={(e) => {
              e.stopPropagation();
              onSelect(name);
            }}
            onPointerOver={(e) => {
              e.stopPropagation();
              document.body.style.cursor = "pointer";
            }}
            onPointerOut={() => {
              document.body.style.cursor = "default";
            }}
          />
        ) : null
      )}
    </group>
  );
};

export default AboutModel;
