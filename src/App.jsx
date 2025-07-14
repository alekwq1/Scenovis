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

// Funkcja wykrywania języka przeglądarki (domyślnie "en")
const getBrowserLang = () => {
  if (typeof navigator === "undefined") return "en";
  const lang = navigator.language || navigator.userLanguage || "en";
  return lang.startsWith("pl") ? "pl" : "en";
};

const App = () => {
  const [lang, setLang] = useState(getBrowserLang());
  const [isMobile, setIsMobile] = useState(false);
  const [showFixedNav, setShowFixedNav] = useState(true);

  // Loader z logo
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader min. 1.1s, max 4s
    const minTimeout = setTimeout(() => setLoading(false), 1300);
    const maxTimeout = setTimeout(() => setLoading(false), 4000);
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

  // Ustawienie czcionki globalnie dla body (jeśli nie masz w CSS)
  useEffect(() => {
    document.body.style.fontFamily = "Roboto, Arial, sans-serif";
    document.body.style.background = "#050e17";
    document.body.style.margin = 0;
    document.body.style.overflowX = "hidden";
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
            transition: "opacity 0.66s",
            opacity: loading ? 1 : 0,
            fontFamily: "Roboto, Arial, sans-serif",
          }}
        >
          {/* Logo ze świecącą animacją */}
          <div style={{ position: "relative" }}>
            <img
              src="/scenovis-logo.png"
              alt="Scenovis Logo"
              style={{
                width: isMobile ? 140 : 200,
                height: "auto",
                filter: "drop-shadow(0 0 18px #5cc6ec88)",
                animation: "logo-pulse 1.7s infinite alternate",
                zIndex: 2,
                position: "relative",
                transition: "width 0.2s",
              }}
            />
            {/* Glow */}
            <div
              style={{
                position: "absolute",
                top: "52%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                width: isMobile ? 150 : 260,
                height: isMobile ? 60 : 110,
                background: "rgba(92,198,236,0.17)",
                borderRadius: 40,
                filter: "blur(36px)",
                zIndex: 1,
                animation: "glow-pulse 2.3s infinite alternate",
                pointerEvents: "none",
              }}
            ></div>
          </div>
          <div
            style={{
              marginTop: 34,
              fontSize: isMobile ? "1.1rem" : "1.5rem",
              fontWeight: 600,
              color: "#5cc6ec",
              textShadow: "0 0 10px #5cc6ec33",
              letterSpacing: "1.1px",
              fontFamily: "Roboto, Arial, sans-serif",
              opacity: 0.96,
              userSelect: "none",
            }}
          >
            Ładowanie...
          </div>
          {/* Spinner */}
          <div
            style={{
              marginTop: 28,
              width: isMobile ? 38 : 52,
              height: isMobile ? 38 : 52,
              border: "4.5px solid #112a37",
              borderTop: "4.5px solid #5cc6ec",
              borderRadius: "50%",
              animation: "spin 1.1s linear infinite",
              boxShadow: "0 0 18px #5cc6ec22",
              opacity: 0.85,
            }}
          ></div>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg);}
              100% { transform: rotate(360deg);}
            }
            @keyframes logo-pulse {
              0% { filter: drop-shadow(0 0 8px #5cc6ec44);}
              100% { filter: drop-shadow(0 0 36px #5cc6ecdd);}
            }
            @keyframes glow-pulse {
              0% { opacity: 0.17;}
              100% { opacity: 0.38;}
            }
          `}</style>
        </div>
      )}

      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.72s cubic-bezier(.45,1.4,.49,1)",
          fontFamily: "Roboto, Arial, sans-serif",
          background: "#050e17",
        }}
      >
        <NavigationBar
          showFixedNav={showFixedNav}
          lang={lang}
          setLang={setLang}
          t={translations[lang]}
          isMobile={isMobile}
        />
        <SectionProgressBar />
        {/* Tło 3D */}
        <Canvas
          orthographic
          camera={{ zoom: isMobile ? 60 : 80 }}
          gl={{
            alpha: false,
            antialias: true,
            powerPreference: "high-performance",
          }}
          dpr={
            typeof window !== "undefined"
              ? Math.min(window.devicePixelRatio, 2)
              : 1
          }
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
          <ambientLight intensity={0.22} />
          <spotLight
            position={[12, 9, 8]}
            angle={0.22}
            penumbra={0.8}
            intensity={0.8}
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
            fontFamily: "Roboto, Arial, sans-serif",
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
