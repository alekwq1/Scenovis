import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Html, useGLTF } from "@react-three/drei";

// PULSE – minimalistyczny (możesz wyłączyć jeśli chcesz)
const PULSE_ANIMATION = `
@keyframes pulse-interact-btn {
  0% { box-shadow: 0 0 0 0 var(--accent); transform: scale(1);}
  60% { box-shadow: 0 0 4px 2px var(--accent); transform: scale(1.02);}
  100% { box-shadow: 0 0 0 0 var(--accent); transform: scale(1);}
}
`;

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

const AboutSection3D = ({ lang, t }) => {
  const DIGITAL_TWIN_INFO = t.digitalTwinInfo;
  const HOTSPOTS = t.hotspots;

  const [selectedHotspot, setSelectedHotspot] = useState(DIGITAL_TWIN_INFO);
  const [infoPanelOpen, setInfoPanelOpen] = useState(true);
  const [controlsEnabled, setControlsEnabled] = useState(false);

  const orbitRef = useRef();
  const wrapperRef = useRef();

  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  useEffect(() => {
    setSelectedHotspot(t.digitalTwinInfo);
    setInfoPanelOpen(true);
  }, [t, lang]);

  const modelHeight = isMobile
    ? controlsEnabled
      ? 330
      : 420
    : controlsEnabled
    ? 600
    : 480;

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

  // --- Main Render ---
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
      <style>{PULSE_ANIMATION}</style>
      <div
        className="about-content"
        style={{
          width: "100%",
          maxWidth: 1125,
          minHeight: isMobile ? 460 : 640,
          background: "var(--bg)",
          borderRadius: 28,
          boxShadow: "0 8px 46px rgba(92,198,236,0.08)",
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
            color: "var(--accent)",
            fontWeight: 900,
            textAlign: "center",
            marginBottom: isMobile ? "0.7rem" : "1.1rem",
            marginTop: isMobile ? "0.1rem" : "0.2rem",
            letterSpacing: 2,
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
          {/* Box z 3D */}
          <div
            style={{
              flex: infoPanelOpen ? 1.5 : 2,
              minWidth: isMobile ? 280 : 462,
              maxWidth: isMobile ? 375 : 602,
              height: `${modelHeight}px`,
              background: "#19212a",
              borderRadius: 20,
              boxShadow: "0 0 24px rgba(92,198,236,0.08)",
              overflow: "hidden",
              position: "relative",
              marginBottom: isMobile ? 10 : 0,
              transition: "height 0.32s cubic-bezier(.65,.09,.54,.99)",
              pointerEvents: "auto",
              display: "block",
            }}
          >
            {/* Overlay disables interaction */}
            {!controlsEnabled && (
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  zIndex: 10,
                  background: "transparent",
                  pointerEvents: "auto",
                  touchAction: "auto",
                }}
              />
            )}
            {/* Przycisk interakcji */}
            <button
              className="interact-btn"
              style={{
                position: "absolute",
                right: 10,
                bottom: 10,
                background: "#1a2531",
                color: "var(--accent)",
                border: "1.5px solid var(--accent)",
                borderRadius: 9,
                padding: "0.32em 1em",
                fontWeight: 600,
                fontSize: "0.98rem",
                letterSpacing: ".01em",
                boxShadow: "0 1px 5px rgba(92,198,236,0.07)",
                cursor: "pointer",
                zIndex: 10,
                opacity: 0.93,
                transition:
                  "background 0.13s, box-shadow 0.19s, color 0.14s, border 0.13s",
                outline: "none",
                animation: !controlsEnabled
                  ? "pulse-interact-btn 1.4s infinite"
                  : "none",
              }}
              onClick={(e) => {
                e.stopPropagation();
                setControlsEnabled((v) => !v);
              }}
              aria-label={
                controlsEnabled
                  ? lang === "pl"
                    ? "Zablokuj model"
                    : "Lock model"
                  : lang === "pl"
                  ? "Interakcja z modelem"
                  : "Interact with model"
              }
            >
              {controlsEnabled
                ? lang === "pl"
                  ? "Zablokuj model"
                  : "Lock model"
                : lang === "pl"
                ? "Interakcja z modelem"
                : "Interact with model"}
            </button>
            <Canvas
              camera={{
                position: isMobile ? [28, 20, 18] : [50, 30, 25],
                fov: isMobile ? 40 : 29,
              }}
              style={{
                width: "100%",
                height: "100%",
                background: "transparent",
                touchAction: "none",
                display: "block",
              }}
            >
              <ambientLight intensity={0.9} />
              <directionalLight position={[2, 3, 4]} intensity={1.2} />
              <group scale={isMobile ? 1.65 : 1.5}>
                <AboutModelWithHotspots
                  hotspots={HOTSPOTS}
                  onHotspotClick={onHotspotClick}
                  selectedHotspot={infoPanelOpen ? selectedHotspot : null}
                  controlsEnabled={controlsEnabled}
                />
              </group>
              <OrbitControls
                ref={orbitRef}
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
          </div>
          {/* Panel informacyjny */}
          {infoPanelOpen && (
            <HotspotInfoPanel
              open={!!selectedHotspot}
              hotspot={selectedHotspot}
              onClose={handleCloseInfo}
              isMobile={isMobile}
              lang={lang}
              t={t}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutSection3D;

// --- Model 3D z hotspotami ---
function AboutModelWithHotspots({
  hotspots,
  onHotspotClick,
  selectedHotspot,
  controlsEnabled,
}) {
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
          controlsEnabled={controlsEnabled}
        />
      ))}
    </group>
  );
}

// --- HOTSPOT BUTTON ---
function Hotspot({ data, onClick, isActive, controlsEnabled }) {
  return (
    <mesh position={data.position}>
      <sphereGeometry args={[0.04, 18, 18]} />
      <meshBasicMaterial transparent opacity={0} />
      <Html center zIndexRange={[100, 200]}>
        <button
          className="hotspot-btn"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: isActive ? "#233142" : "#1a2531",
            border: isActive
              ? "2.2px solid var(--accent)"
              : "1.5px solid var(--accent)",
            boxShadow: isActive
              ? "0 2px 12px rgba(92,198,236,0.17)"
              : "0 1px 6px rgba(92,198,236,0.10)",
            color: isActive ? "var(--text)" : "var(--accent)",
            fontWeight: 700,
            fontSize: 24,
            cursor: controlsEnabled ? "pointer" : "default",
            opacity: controlsEnabled ? 0.96 : 0.55,
            pointerEvents: controlsEnabled ? "auto" : "none",
            transition:
              "background 0.14s, box-shadow 0.18s, border 0.13s, color 0.13s",
            outline: "none",
          }}
          onClick={(e) => {
            if (!controlsEnabled) return;
            e.stopPropagation();
            onClick();
          }}
          disabled={!controlsEnabled}
          title={data.label}
        >
          +
        </button>
      </Html>
    </mesh>
  );
}

// ...reszta AboutSection3D bez zmian

// --- Panel informacyjny ---
function HotspotInfoPanel({ open, hotspot, onClose, isMobile, lang, t }) {
  if (!open || !hotspot) return null;

  const translateStatus = (status) =>
    (t.statuses && t.statuses[status]) || status;

  return (
    <div
      className="hotspot-info-panel"
      style={{
        position: "relative",
        maxWidth: isMobile ? 320 : 380,
        minWidth: isMobile ? 165 : 320,
        boxShadow: "0 2px 14px 0 rgba(92,198,236,0.09)", // subtelny cień pastelowy
        borderRadius: 18,
        zIndex: 1000,
        marginLeft: isMobile ? 0 : 24,
        marginTop: isMobile ? 10 : 0,
        background: "var(--bg, #212834)",
        border: "1.3px solid var(--accent, #5cc6ec)",
        padding: isMobile ? "11px" : "20px",
        fontSize: isMobile ? "0.97rem" : "1.08rem",
        color: "var(--text, #e2e8ef)",
        fontFamily: "Roboto, Arial, sans-serif",
        transition: "box-shadow .18s, border .13s, background .13s",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          background: "transparent",
          border: "none",
          color: "var(--accent, #5cc6ec)",
          fontSize: "1.2rem",
          cursor: "pointer",
          zIndex: 10,
          fontFamily: "Roboto, Arial, sans-serif",
        }}
        title={lang === "pl" ? "Zamknij panel" : "Close panel"}
      >
        ×
      </button>

      <h3
        style={{
          color: "var(--accent, #5cc6ec)",
          marginTop: 0,
          marginBottom: "13px",
          fontSize: isMobile ? "1.08rem" : "1.5rem",
          textAlign: "center",
          fontWeight: 700,
          fontFamily: "Roboto, Arial, sans-serif",
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
          <img
            src={hotspot.image}
            alt={hotspot.label}
            style={{
              maxWidth: "86%",
              maxHeight: isMobile ? 112 : 200,
              width: "auto",
              height: "auto",
              objectFit: "contain",
              background: "#19212a",
              borderRadius: 12,
              boxShadow: "0 2px 10px 0 rgba(92,198,236,0.07)", // bardzo delikatny cień!
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
          color: "var(--text, #e2e8ef)",
          lineHeight: 1.56,
          fontSize: isMobile ? "0.93rem" : "1.05rem",
          fontFamily: "Roboto, Arial, sans-serif",
          marginBottom: "0.8rem",
        }}
      />

      {hotspot.extra && (
        <div
          style={{
            marginTop: "10px",
            padding: "8px",
            background: "rgba(92,198,236,0.05)", // jasny, pastelowy, bardzo dyskretny
            borderRadius: "7px",
            fontSize: isMobile ? "0.91rem" : "0.97rem",
            fontFamily: "Roboto, Arial, sans-serif",
          }}
        >
          <div>
            <strong
              style={{ color: "var(--accent, #5cc6ec)", fontWeight: 600 }}
            >
              {t.statusLabel}:
            </strong>{" "}
            {translateStatus(hotspot.extra.status)}
          </div>
          <div>
            <strong
              style={{ color: "var(--accent, #5cc6ec)", fontWeight: 600 }}
            >
              {t.lastInspectionLabel}:
            </strong>{" "}
            {hotspot.extra.lastInspection}
          </div>
          <div>
            <strong
              style={{ color: "var(--accent, #5cc6ec)", fontWeight: 600 }}
            >
              {t.parametersLabel}:
            </strong>{" "}
            {hotspot.extra.kpi}
          </div>
        </div>
      )}
    </div>
  );
}
