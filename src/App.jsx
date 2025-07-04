import React, { useEffect, useState, useRef } from "react";
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

const VIDEO_URL = "/Video.mp4";

const App = () => {
  const [lang, setLang] = useState("pl");
  const [isMobile, setIsMobile] = useState(false);
  const [showFixedNav, setShowFixedNav] = useState(true);

  // Preloader
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoPreloadRef = useRef(null);

  // Ukryty preloader video do zliczania progresu
  useEffect(() => {
    if (!loading) return;
    const video = document.createElement("video");
    video.src = VIDEO_URL;
    video.preload = "auto";
    video.muted = true;

    // Progres
    const updateProgress = () => {
      if (video.buffered.length > 0 && video.duration > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        const percent = Math.min(
          100,
          Math.round((bufferedEnd / video.duration) * 100)
        );
        setProgress(percent);
      }
    };

    video.addEventListener("progress", updateProgress);
    video.addEventListener("canplaythrough", () => {
      setProgress(100);
      setTimeout(() => setLoading(false), 300);
    });

    // fallback - jakby video było bardzo krótkie i event się nie wywołał
    const fallbackTimeout = setTimeout(() => {
      setLoading(false);
    }, 5000);

    // Start ładowania
    video.load();

    // Clean up
    return () => {
      clearTimeout(fallbackTimeout);
      video.removeEventListener("progress", updateProgress);
      video.remove();
    };
  }, [loading]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowFixedNav(window.scrollY < 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
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
            transition: "opacity 0.5s",
            opacity: loading ? 1 : 0,
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                width: 64,
                height: 64,
                margin: "0 auto 18px auto",
                border: "6px solid #1a3e53",
                borderTop: "6px solid #08ffe6",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
            />
            <div
              style={{
                fontSize: "1.5rem",
                color: "#08ffe6",
                fontWeight: 700,
                marginBottom: 10,
                letterSpacing: "1px",
              }}
            >
              Ładowanie zasobów...
            </div>
            <div
              style={{
                width: 260,
                height: 12,
                background: "#2c3d4a",
                borderRadius: 8,
                margin: "0 auto 14px auto",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(33,255,230,0.08)",
              }}
            >
              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  background:
                    "linear-gradient(90deg, #08ffe6 40%, #2c9cfa 100%)",
                  borderRadius: 8,
                  transition: "width 0.4s cubic-bezier(.39,1.77,.71,.86)",
                }}
              />
            </div>
            <div style={{ color: "#08ffe6", fontWeight: 600, fontSize: 18 }}>
              {progress}% załadowano
            </div>
          </div>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg);}
              100% { transform: rotate(360deg);}
            }
          `}</style>
        </div>
      )}

      {/* Reszta strony widoczna po załadowaniu */}
      <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.6s" }}>
        <NavigationBar
          showFixedNav={showFixedNav}
          lang={lang}
          setLang={setLang}
          t={translations[lang]}
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
