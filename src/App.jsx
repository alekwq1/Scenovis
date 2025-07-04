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

const VIDEO_URL = "/Video.mp4";

const App = () => {
  const [lang, setLang] = useState("pl");
  const [isMobile, setIsMobile] = useState(false);
  const [showFixedNav, setShowFixedNav] = useState(true);

  // Prosty loader z logo – znika po ok. 2 sekundach (możesz wydłużyć/skracać)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader minimum 1.3s, max 3s (zależnie jak szybko zrenderuje się strona)
    const minTimeout = setTimeout(() => setLoading(false), 1800);
    // Jakby coś się stało – fallback na 5s
    const maxTimeout = setTimeout(() => setLoading(false), 5000);

    return () => {
      clearTimeout(minTimeout);
      clearTimeout(maxTimeout);
    };
  }, []);

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
            transition: "opacity 0.7s",
            opacity: loading ? 1 : 0,
          }}
        >
          {/* Logo ze świecącą animacją */}
          <div style={{ position: "relative" }}>
            <img
              src="/scenovis-logo.png"
              alt="Scenovis Logo"
              style={{
                width: 220,
                height: "auto",
                filter: "drop-shadow(0 0 16px #08ffe666)",
                animation: "logo-pulse 1.6s infinite alternate",
                zIndex: 2,
                position: "relative",
              }}
            />
            {/* Glow za logiem */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: 320,
                height: 120,
                background: "rgba(0,198,255,0.26)",
                borderRadius: 50,
                filter: "blur(38px)",
                zIndex: 1,
                animation: "glow-pulse 2.1s infinite alternate",
                pointerEvents: "none",
              }}
            ></div>
          </div>
          <div
            style={{
              marginTop: 44,
              fontSize: "1.6rem",
              fontWeight: 700,
              color: "#08ffe6",
              textShadow: "0 0 10px #08ffe633",
              letterSpacing: "1.5px",
              fontFamily: "inherit",
            }}
          >
            Loading...
          </div>
          {/* Fancy spinner na dole */}
          <div
            style={{
              marginTop: 36,
              width: 56,
              height: 56,
              border: "6px solid #1a3e53",
              borderTop: "6px solid #08ffe6",
              borderRadius: "50%",
              animation: "spin 1.2s linear infinite",
            }}
          ></div>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg);}
              100% { transform: rotate(360deg);}
            }
            @keyframes logo-pulse {
              0% { filter: drop-shadow(0 0 6px #08ffe622);}
              100% { filter: drop-shadow(0 0 36px #08ffe699);}
            }
            @keyframes glow-pulse {
              0% { opacity: 0.25;}
              100% { opacity: 0.6;}
            }
          `}</style>
        </div>
      )}

      <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.8s" }}>
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
