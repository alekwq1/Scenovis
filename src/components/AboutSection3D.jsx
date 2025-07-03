import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, useGLTF } from "@react-three/drei";

const NEON_BLUE = "#00e6ff";

// FUNKCJA: płynna animacja kamery OrbitControls
function animateCameraTo(orbitControls, position, target, duration = 1.0) {
  if (!orbitControls) return;
  const controls = orbitControls.object;
  const startPos = controls.position.clone();
  const startTarget = orbitControls.target.clone();
  let start = null;
  function animate(time) {
    if (!start) start = time;
    const t = Math.min((time - start) / (duration * 1000), 1);
    controls.position.lerpVectors(startPos, new THREE.Vector3(...position), t);
    orbitControls.target.lerpVectors(
      startTarget,
      new THREE.Vector3(...target),
      t
    );
    orbitControls.update();
    if (t < 1) requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
}

const DIGITAL_TWIN_INFO = {
  id: "twin-intro",
  label: "Cyfrowy Bliźniak",
  desc: `
    <b>Cyfrowy bliźniak</b> to zaawansowana, interaktywna wizualizacja rzeczywistego obiektu.<br><br>
    Pozwala śledzić parametry na żywo, przewidywać awarie i testować scenariusze w bezpiecznym środowisku.<br><br>
    <ul style="margin: 8px 0 0 18px; padding: 0; color: #b3fdff; font-size: 15px;">
      <li>Klikaj <span style="font-size:20px;">+</span> na modelu, by zobaczyć szczegóły.</li>
      <li>Obracaj i przybliżaj, by eksplorować każdy element.</li>
      <li>Analizuj statusy, odczyty i historię inspekcji.</li>
    </ul>
    <br><b style="color:#0ffcff">Odkryj możliwości cyfrowego bliźniaka!</b>
  `,
  image: "/digitaltwin_intro.png",
  extra: {},
};

const HOTSPOTS = [
  {
    id: "prod_center",
    label: "Linia produkcyjna",
    desc: "Główna linia montażowa – monitorowanie przebiegu procesu. <br>Status: <b style='color:#ffdf50'>W eksploatacji</b>.",
    image: "/hotspot_center.png",
    extra: {
      status: "W eksploatacji",
      lastInspection: "2025-07-03",
      kpi: "Liczba cykli: 1245",
    },
    position: [-1, 2.5, -3.2],
    camera: { position: [25, 20, 15], target: [-1, 2.5, -3.2] },
  },
  {
    id: "prod_right_top",
    label: "Kontrola jakości",
    desc: "Strefa końcowej kontroli jakości produktów. <br>Status: <b style='color:#00ffba'>Bez uwag</b>.",
    image: "/hotspot_right.png",
    extra: {
      status: "Bez uwag",
      lastInspection: "2025-07-02",
      kpi: "Błędy: 0 / 1000 szt.",
    },
    position: [4.5, 0.7, -2.5],
    camera: { position: [20, 20, 20], target: [4.5, 0.7, -2.5] },
  },
  {
    id: "prod_left",
    label: "Strefa załadunku surowców",
    desc: "Punkt załadunku komponentów do produkcji. <br>Status: <b style='color:#00ffba'>Aktywny</b>.",
    image: "/hotspot_left.png",
    extra: {
      status: "Aktywny",
      lastInspection: "2025-07-03",
      kpi: "Waga surowca: 350 kg",
    },
    position: [10, 4.6, -4],
    camera: { position: [50, 30, 5], target: [10, 4.6, -4] },
  },
];

const AboutSection3D = () => {
  const [selectedHotspot, setSelectedHotspot] = useState(DIGITAL_TWIN_INFO);
  const [infoPanelOpen, setInfoPanelOpen] = useState(true);
  const orbitRef = useRef();
  const wrapperRef = useRef();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Styl boxu 3D
  const modelBoxStyles = {
    flex: infoPanelOpen ? 1.5 : 2,
    minWidth: isMobile ? 364 : 462,
    maxWidth: isMobile ? 476 : 602,
    height: isMobile ? 364 : 448,
    background: "rgba(24,48,64,0.33)",
    borderRadius: 20,
    boxShadow: "0 0 24px #00e6ff22",
    overflow: "hidden",
    position: "relative",
    marginBottom: isMobile ? 10 : 0,
    transition:
      "flex 0.3s, width 0.3s, max-width 0.3s, min-width 0.3s, height 0.3s",
  };

  const infoPanelStyles = {
    position: "relative",
    right: "auto",
    left: "auto",
    top: "auto",
    transform: "none",
    maxWidth: isMobile ? 462 : 532,
    minWidth: isMobile ? 301 : 448,
    boxShadow: "0 0 38px #00e6ff66",
    borderRadius: 20,
    zIndex: 1000,
    marginLeft: isMobile ? 0 : 24,
    marginTop: isMobile ? 14 : 0,
    transition: "max-width 0.3s, min-width 0.3s",
  };

  // Klik w hotspot – animacja kamery!
  const onHotspotClick = (hotspot) => {
    setSelectedHotspot(hotspot);
    setInfoPanelOpen(true);
    if (orbitRef.current && hotspot.camera) {
      animateCameraTo(
        orbitRef.current,
        hotspot.camera.position,
        hotspot.camera.target
      );
    }
  };

  // Zamknij panel
  const handleCloseInfo = () => setInfoPanelOpen(false);

  // Smooth scroll do #about przez linki
  useEffect(() => {
    const handler = (e) => {
      if (e.target.getAttribute("href") === "#about" && wrapperRef.current) {
        e.preventDefault();
        const NAVBAR_HEIGHT = 92; // dostosuj do własnego navbara!
        const sectionTop =
          wrapperRef.current.getBoundingClientRect().top + window.scrollY;
        const targetY = sectionTop - NAVBAR_HEIGHT;
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    };
    document
      .querySelectorAll('a[href="#about"]')
      .forEach((a) => a.addEventListener("click", handler));
    return () =>
      document
        .querySelectorAll('a[href="#about"]')
        .forEach((a) => a.removeEventListener("click", handler));
  }, []);

  // ---- RENDER ----
  return (
    <section
      id="about"
      ref={wrapperRef}
      style={{
        minHeight: "100vh",
        width: "100vw",
        maxWidth: 1540,
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: "translateY(6vh)",
        paddingTop: isMobile ? 80 : 0,
        paddingBottom: isMobile ? 24 : 0,
        position: "relative",
        boxSizing: "border-box",
        zIndex: 2,
      }}
    >
      <div
        className="about-content"
        style={{
          width: "100%",
          maxWidth: 1125,
          minHeight: isMobile ? 560 : 640,
          background: "rgba(8,20,32,0.89)",
          borderRadius: 28,
          boxShadow: "0 8px 46px #00e6ff22",
          padding: isMobile ? "1.4rem 0.7rem" : "2.4rem 2.4rem 2.2rem 2.4rem",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: isMobile ? 12 : 18,
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "2.1rem" : "3.2rem",
            color: NEON_BLUE,
            fontWeight: 900,
            textAlign: "center",
            marginBottom: isMobile ? "0.9rem" : "1.1rem",
            marginTop: isMobile ? "0.2rem" : "0.2rem",
            letterSpacing: 2,
            textShadow: "0 0 32px #00e6ff77, 0 2px 6px #000b",
            lineHeight: 1.08,
          }}
        >
          INTERAKTYWNY DIGITAL TWIN 3D
        </h1>
        <div
          className="about-3d-model-box"
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 22 : 32,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            minHeight: isMobile ? 370 : 420,
          }}
        >
          {/* Box z 3D */}
          <div style={modelBoxStyles}>
            <Canvas
              camera={{
                position: [50, 30, 25],
                fov: isMobile ? 36 : 29,
              }}
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
              }}
            >
              <ambientLight intensity={0.9} />
              <directionalLight position={[2, 3, 4]} intensity={1.2} />
              <group scale={isMobile ? 1.2 : 1.5}>
                <AboutModelWithHotspots
                  hotspots={HOTSPOTS}
                  onHotspotClick={onHotspotClick}
                  selectedHotspot={infoPanelOpen ? selectedHotspot : null}
                />
              </group>
              <OrbitControls
                ref={orbitRef}
                enablePan={true}
                enableRotate={true}
                enableZoom={true}
                mouseButtons={{
                  LEFT: THREE.MOUSE.ROTATE,
                  MIDDLE: THREE.MOUSE.PAN,
                  RIGHT: THREE.MOUSE.PAN,
                }}
                maxPolarAngle={Math.PI * 0.6}
                minPolarAngle={0.12}
                target={[10, 8, -5]}
                enableDamping
                dampingFactor={0.15}
              />
            </Canvas>
          </div>
          {/* Panel informacyjny */}
          {infoPanelOpen && (
            <HotspotInfoPanel
              open={!!selectedHotspot}
              hotspot={selectedHotspot}
              onClose={handleCloseInfo}
              isMobile={isMobile}
              style={infoPanelStyles}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection3D;

// ===============================
// Model z hotspotami

function AboutModelWithHotspots({ hotspots, onHotspotClick, selectedHotspot }) {
  const { scene, animations } = useGLTF("/model.glb");
  const mixer = useRef();

  useEffect(() => {
    if (animations && animations.length > 0) {
      mixer.current = new THREE.AnimationMixer(scene);
      animations.forEach((clip) => {
        mixer.current.clipAction(clip).play();
      });
    }
    return () => mixer.current?.stopAllAction();
  }, [animations, scene]);

  useFrame((_, delta) => {
    mixer.current?.update(delta);
  });

  return (
    <group>
      <primitive object={scene} />
      {hotspots.map((h) => (
        <Hotspot
          key={h.id}
          data={h}
          isActive={selectedHotspot?.id === h.id}
          onClick={() => onHotspotClick(h)}
        />
      ))}
    </group>
  );
}

// Hotspot - plusik na modelu
function Hotspot({ data, onClick, isActive }) {
  return (
    <mesh position={data.position}>
      <sphereGeometry args={[0.04, 18, 18]} />
      <meshBasicMaterial transparent opacity={0} />
      <Html center zIndexRange={[100, 200]}>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: isActive
              ? "radial-gradient(circle, #0ffcff, #00e6ff)"
              : "radial-gradient(circle, #122a38, #00e6ff 70%)",
            border: isActive ? "3px solid #fff" : "2px solid #00e6ff",
            boxShadow: isActive ? "0 0 20px #00e6ff88" : "0 0 8px #00e6ff44",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 24,
            color: "#fff",
            fontWeight: 700,
            transition: "all .2s",
          }}
          title={data.label}
        >
          +
        </button>
      </Html>
    </mesh>
  );
}

// ===============================
// Panel informacyjny – wszystko lokalnie!

function HotspotInfoPanel({ open, hotspot, onClose, isMobile }) {
  if (!open || !hotspot) return null;

  return (
    <div
      style={{
        position: "relative",
        maxWidth: isMobile ? 330 : 380,
        minWidth: isMobile ? 215 : 320,
        boxShadow: "0 0 38px #00e6ff66",
        borderRadius: 20,
        zIndex: 1000,
        marginLeft: isMobile ? 0 : 24,
        marginTop: isMobile ? 14 : 0,
        background: "rgba(10, 25, 40, 0.95)",
        border: "1px solid #00e6ff55",
        padding: "20px",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "transparent",
          border: "none",
          color: "#00e6ff",
          fontSize: "1.2rem",
          cursor: "pointer",
          zIndex: 10,
        }}
        title="Zamknij panel"
      >
        ×
      </button>

      <h3
        style={{
          color: "#00e6ff",
          marginTop: 0,
          marginBottom: "15px",
          fontSize: isMobile ? "1.3rem" : "1.5rem",
          textAlign: "center",
        }}
      >
        {hotspot.label}
      </h3>

      {hotspot.image && (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "15px",
          }}
        >
          <img
            src={hotspot.image}
            alt={hotspot.label}
            style={{
              maxWidth: "88%",
              maxHeight: 188,
              width: "auto",
              height: "auto",
              objectFit: "contain",
              background: "none",
              borderRadius: 12,
              boxShadow: "0 0 16px #00e6ff22",
              pointerEvents: "none",
              userSelect: "none",
              display: "block",
            }}
          />
        </div>
      )}

      <div
        dangerouslySetInnerHTML={{ __html: hotspot.desc }}
        style={{
          color: "#c0e0ff",
          lineHeight: 1.6,
          fontSize: isMobile ? "0.93rem" : "1.08rem",
        }}
      />

      {hotspot.extra && (
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            background: "rgba(0, 50, 80, 0.3)",
            borderRadius: "8px",
            fontSize: "0.97rem",
          }}
        >
          <div>
            <strong>Status:</strong> {hotspot.extra.status}
          </div>
          <div>
            <strong>Ostatnia inspekcja:</strong> {hotspot.extra.lastInspection}
          </div>
          <div>
            <strong>Parametry:</strong> {hotspot.extra.kpi}
          </div>
        </div>
      )}
    </div>
  );
}
