import React, { useEffect, useState } from "react";
import NavigationBar from "./components/NavigationBar";
import SectionProgressBar from "./components/SectionProgressBar";
import HeroSection from "./components/Sections/HeroSection";
import AboutSection3D from "./components/AboutSection3D";
import ServicesSection from "./components/Sections/ServicesSection";
import VideoResourcesSection from "./components/Sections/VideoResourcesSection";
import CTASection from "./components/Sections/CTASection";
import FooterSection from "./components/Sections/FooterSection";
import translations from "./translations";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

// HERO IMAGES (koniecznie public/images/)
const HERO_IMAGES = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
  "/images/hero5.jpg",
];

const getBrowserLang = () => {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language || navigator.userLanguage || "en";
  return lang.startsWith("pl") ? "pl" : "en";
};

const App = () => {
  const [lang, setLang] = useState(getBrowserLang());
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader tylko do hero image
    const img = new window.Image();
    img.onload = img.onerror = () => setLoading(false);
    img.src = HERO_IMAGES[0];
    const to = setTimeout(() => setLoading(false), 1200); // fallback
    return () => clearTimeout(to);
  }, []);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <>
      {loading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "linear-gradient(135deg, #050e17 0%, #0a1a2a 100%)",
            zIndex: 99999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            transition: "opacity 0.7s",
            opacity: loading ? 1 : 0,
            fontFamily: "Roboto, Arial, sans-serif",
          }}
        >
          {/* Loader z logo */}
          <img
            src="/scenovis-logo.png"
            alt="Scenovis Logo"
            style={{
              width: 160,
              marginBottom: 24,
              filter: "drop-shadow(0 0 12px #08ffe655)",
              animation: "logo-pulse 1.2s infinite alternate",
            }}
          />
          <span
            style={{
              color: "#08ffe6",
              fontSize: 20,
              fontWeight: 600,
              textShadow: "0 0 12px #08ffe622",
            }}
          >
            Ładowanie...
          </span>
          <div
            style={{
              marginTop: 36,
              width: 44,
              height: 44,
              border: "6px solid #1a3e53",
              borderTop: "6px solid #08ffe6",
              borderRadius: "50%",
              animation: "spin 1.2s linear infinite",
            }}
          />
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg);}
              100% { transform: rotate(360deg);}
            }
            @keyframes logo-pulse {
              0% { filter: drop-shadow(0 0 6px #08ffe622);}
              100% { filter: drop-shadow(0 0 24px #08ffe699);}
            }
          `}</style>
        </div>
      )}

      <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.6s" }}>
        <NavigationBar
          lang={lang}
          setLang={setLang}
          t={translations[lang]}
          isMobile={isMobile}
        />
        <SectionProgressBar />

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
            zIndex: 1,
            pointerEvents: "none",
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
        </Canvas>

        <main
          style={{
            position: "relative",
            zIndex: 2,
            minHeight: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <HeroSection isMobile={isMobile} lang={lang} t={translations[lang]} />
          {/* --- UWAGA! --- */}
          {/* Model ładuje się asynchronicznie, a komponent AboutSection3D powinien sam pokazywać swój loader. */}
          <AboutSection3D lang={lang} t={translations[lang]} />
          <ServicesSection
            isMobile={isMobile}
            lang={lang}
            t={translations[lang]}
          />
          <VideoResourcesSection
            isMobile={isMobile}
            lang={lang}
            t={translations[lang]}
          />
          <CTASection isMobile={isMobile} lang={lang} t={translations[lang]} />
          <FooterSection lang={lang} t={translations[lang]} />
        </main>
      </div>
    </>
  );
};

export default App;
