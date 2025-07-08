import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, useGLTF } from "@react-three/drei";

// --- Animacja kamery ---
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

const NEON_BLUE = "#00e6ff";

const AboutSection3D = ({ lang, t, setLang }) => {
  const DIGITAL_TWIN_INFO = t.digitalTwinInfo;
  const HOTSPOTS = t.hotspots;

  const [selectedHotspot, setSelectedHotspot] = useState(DIGITAL_TWIN_INFO);
  const [infoPanelOpen, setInfoPanelOpen] = useState(true);
  const [controlsEnabled, setControlsEnabled] = useState(false);
  const orbitRef = useRef();
  const wrapperRef = useRef();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // --- Zablokuj przewijanie strony na mobile podczas interakcji z modelem ---
  useEffect(() => {
    if (isMobile) {
      if (controlsEnabled) {
        document.body.style.overflow = "hidden";
        document.body.style.touchAction = "none";
      } else {
        document.body.style.overflow = "";
        document.body.style.touchAction = "";
      }
      return () => {
        document.body.style.overflow = "";
        document.body.style.touchAction = "";
      };
    }
  }, [controlsEnabled, isMobile]);

  useEffect(() => {
    setSelectedHotspot(t.digitalTwinInfo);
    setInfoPanelOpen(true);
    setControlsEnabled(false);
  }, [t, lang]);

  // Kamera bliżej na mobile
  const cameraPosition = isMobile ? [28, 20, 18] : [50, 30, 25];
  const cameraFov = isMobile ? 40 : 29;
  const modelScale = isMobile ? 1.65 : 1.5;

  // Kontener na model – rośnie na mobile po aktywacji
  const modelBoxStyles = {
    flex: infoPanelOpen ? 1.5 : 2,
    minWidth: isMobile ? 280 : 462,
    maxWidth: isMobile ? 550 : 602,
    width: isMobile ? "95vw" : undefined,
    height: isMobile ? (controlsEnabled ? "78vh" : "35vw") : 448,
    background: "rgba(24,48,64,0.33)",
    borderRadius: 20,
    boxShadow: "0 0 24px #00e6ff22",
    overflow: "hidden",
    position: "relative",
    marginBottom: isMobile ? 10 : 0,
    marginTop: isMobile ? 8 : 0,
    transition: "height 0.4s cubic-bezier(.7,.2,.2,1)",
    touchAction: controlsEnabled ? "none" : "auto",
    zIndex: controlsEnabled ? 200 : 2,
  };

  const infoPanelStyles = {
    position: "relative",
    right: "auto",
    left: "auto",
    top: "auto",
    transform: "none",
    maxWidth: isMobile ? 340 : 532,
    minWidth: isMobile ? 188 : 448,
    boxShadow: "0 0 38px #00e6ff66",
    borderRadius: 20,
    zIndex: 1000,
    marginLeft: isMobile ? 0 : 24,
    marginTop: isMobile ? 14 : 0,
    transition: "max-width 0.3s, min-width 0.3s",
  };

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

  const handleCloseInfo = () => setInfoPanelOpen(false);

  // Obsługa nawigacji do sekcji About
  useEffect(() => {
    const handler = (e) => {
      if (e.target.getAttribute("href") === "#about" && wrapperRef.current) {
        e.preventDefault();
        const NAVBAR_HEIGHT = 92;
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
          minHeight: isMobile ? 460 : 640,
          background: "rgba(8,20,32,0.89)",
          borderRadius: 28,
          boxShadow: "0 8px 46px #00e6ff22",
          padding: isMobile ? "1.1rem 0.3rem" : "2.4rem 2.4rem 2.2rem 2.4rem",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: isMobile ? 8 : 18,
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "1.25rem" : "3.2rem",
            color: NEON_BLUE,
            fontWeight: 900,
            textAlign: "center",
            marginBottom: isMobile ? "0.7rem" : "1.1rem",
            marginTop: isMobile ? "0.1rem" : "0.2rem",
            letterSpacing: 2,
            textShadow: "0 0 32px #00e6ff77, 0 2px 6px #000b",
            lineHeight: 1.08,
          }}
        >
          {t.about3dTitle}
        </h1>
        <div
          className="about-3d-model-box"
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? 10 : 32,
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            minHeight: isMobile ? 215 : 420,
          }}
        >
          {/* --- Box z 3D --- */}
          <div style={modelBoxStyles}>
            <Canvas
              camera={{
                position: cameraPosition,
                fov: cameraFov,
              }}
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                touchAction: controlsEnabled ? "none" : "auto",
              }}
              frameloop="demand"
            >
              <ambientLight intensity={0.9} />
              <directionalLight position={[2, 3, 4]} intensity={1.2} />
              <group scale={modelScale}>
                <AboutModelWithHotspots
                  hotspots={HOTSPOTS}
                  onHotspotClick={onHotspotClick}
                  selectedHotspot={infoPanelOpen ? selectedHotspot : null}
                />
              </group>
              <OrbitControls
                ref={orbitRef}
                enabled={controlsEnabled}
                enablePan={controlsEnabled}
                enableRotate={controlsEnabled}
                enableZoom={controlsEnabled}
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
            {/* Przycisk aktywacji kontroli 3D na mobile */}
            {isMobile && (
              <button
                style={{
                  position: "absolute",
                  right: 8,
                  bottom: 8,
                  background: controlsEnabled
                    ? "linear-gradient(90deg, #0072ff 0%, #00e6ff 100%)"
                    : "linear-gradient(90deg, #00e6ff 0%, #0072ff 100%)",
                  color: "#fff",
                  border: "none",
                  borderRadius: 14,
                  padding: "0.7em 1.25em",
                  fontWeight: 700,
                  fontSize: "0.96rem",
                  letterSpacing: ".03em",
                  boxShadow: controlsEnabled
                    ? "0 0 10px #00e6ff44"
                    : "0 1px 4px #0083a822",
                  cursor: "pointer",
                  zIndex: 22,
                  opacity: 0.92,
                  transition: "opacity 0.17s, box-shadow 0.2s",
                  outline: "none",
                  userSelect: "none",
                  touchAction: "none",
                }}
                onClick={() => setControlsEnabled((v) => !v)}
                onTouchStart={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                aria-label={
                  controlsEnabled
                    ? "Wyłącz interakcję"
                    : "Włącz interakcję z modelem"
                }
              >
                {controlsEnabled
                  ? lang === "pl"
                    ? "Wyłącz interakcję"
                    : "Disable interaction"
                  : lang === "pl"
                  ? "Interakcja z modelem"
                  : "Interact with model"}
              </button>
            )}
          </div>
          {/* --- Panel informacyjny --- */}
          {infoPanelOpen && (
            <HotspotInfoPanel
              open={!!selectedHotspot}
              hotspot={selectedHotspot}
              onClose={handleCloseInfo}
              isMobile={isMobile}
              style={infoPanelStyles}
              lang={lang}
              t={t}
            />
          )}
        </div>
        {/* Język przełącznik pod modelem na mobile */}
        {isMobile && setLang && (
          <div style={{ marginTop: 18, textAlign: "center" }}>
            <button
              style={{
                fontWeight: 700,
                background: "#00e6ff",
                color: "#1b2a32",
                border: "none",
                fontSize: 17,
                borderRadius: 8,
                padding: "0.35em 1.3em",
                cursor: "pointer",
                boxShadow: "0 2px 10px #00e6ff33",
                margin: "0 0.2em",
                letterSpacing: ".06em",
              }}
              onClick={() => setLang(lang === "pl" ? "en" : "pl")}
            >
              {lang === "pl" ? "EN" : "PL"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection3D;

// --- Model 3D z hotspotami ---
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

// --- Panel informacyjny ---
function HotspotInfoPanel({ open, hotspot, onClose, isMobile, lang, t }) {
  if (!open || !hotspot) return null;

  const translateStatus = (status) =>
    (t.statuses && t.statuses[status]) || status;

  // Powiększ obrazek na desktopie
  const imgStyles = {
    maxWidth: isMobile ? "88%" : "180%",
    maxHeight: isMobile ? 112 : 220,
    width: "auto",
    height: "auto",
    objectFit: "contain",
    background: "none",
    borderRadius: 12,
    boxShadow: "0 0 16px #00e6ff22",
    pointerEvents: "none",
    userSelect: "none",
    display: "block",
    margin: "0 auto",
  };

  return (
    <div
      style={{
        position: "relative",
        maxWidth: isMobile ? 320 : 380,
        minWidth: isMobile ? 165 : 320,
        boxShadow: "0 0 38px #00e6ff66",
        borderRadius: 20,
        zIndex: 1000,
        marginLeft: isMobile ? 0 : 24,
        marginTop: isMobile ? 10 : 0,
        background: "rgba(10, 25, 40, 0.95)",
        border: "1px solid #00e6ff55",
        padding: isMobile ? "11px" : "20px",
        fontSize: isMobile ? "0.97rem" : "1.08rem",
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
        title={lang === "pl" ? "Zamknij panel" : "Close panel"}
      >
        ×
      </button>

      <h3
        style={{
          color: "#00e6ff",
          marginTop: 0,
          marginBottom: "13px",
          fontSize: isMobile ? "1.08rem" : "1.5rem",
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
            marginBottom: "12px",
          }}
        >
          <img src={hotspot.image} alt={hotspot.label} style={imgStyles} />
        </div>
      )}

      <div
        dangerouslySetInnerHTML={{ __html: hotspot.desc }}
        style={{
          color: "#c0e0ff",
          lineHeight: 1.6,
          fontSize: isMobile ? "0.90rem" : "1.08rem",
        }}
      />

      {hotspot.extra && (
        <div
          style={{
            marginTop: "10px",
            padding: "8px",
            background: "rgba(0, 50, 80, 0.22)",
            borderRadius: "8px",
            fontSize: isMobile ? "0.91rem" : "0.97rem",
          }}
        >
          <div>
            <strong>{t.statusLabel}:</strong>{" "}
            {translateStatus(hotspot.extra.status)}
          </div>
          <div>
            <strong>{t.lastInspectionLabel}:</strong>{" "}
            {hotspot.extra.lastInspection}
          </div>
          <div>
            <strong>{t.parametersLabel}:</strong> {hotspot.extra.kpi}
          </div>
        </div>
      )}
    </div>
  );
}
