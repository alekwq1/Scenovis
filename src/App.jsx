import React, { useState, useRef, useEffect } from "react";
import Preloader from "./components/Preloader";
import NavigationBar from "./components/NavigationBar";
import SectionProgressBar from "./components/SectionProgressBar";
import HeroSection from "./components/Sections/HeroSection";
import AboutSection3D from "./components/AboutSection3D";
import ServicesSection from "./components/Sections/ServicesSection";
import VideoResourcesSection from "./components/Sections/VideoResourcesSection";
import CTASection from "./components/Sections/CTASection";
import FooterSection from "./components/Sections/FooterSection";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

const App = () => {
  useEffect(() => {
    console.log("APP mounted");
    return () => console.log("APP UNmounted");
  }, []);

  const [showPreloader, setShowPreloader] = useState(true);
  const [preloaderFade, setPreloaderFade] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showFixedNav, setShowFixedNav] = useState(true);
  const preloaderEnded = useRef(false);

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

  const handlePreloaderDone = () => {
    if (preloaderEnded.current) return;
    preloaderEnded.current = true;
    setPreloaderFade(true);
  };

  const handleFadeOutEnd = () => setShowPreloader(false);

  return (
    <>
      {/* FULLSCREEN VIDEO background na spodzie */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
          opacity: 1,
          filter: "brightness(0.85)",
          pointerEvents: "none",
        }}
        src="/Video.mp4" // <-- NAZWA pliku video w public!
      />

      {/* Preloader */}
      {showPreloader && (
        <Preloader
          onComplete={handlePreloaderDone}
          fadeOut={preloaderFade}
          onFadeOutEnd={handleFadeOutEnd}
        />
      )}

      <NavigationBar showFixedNav={showFixedNav} />
      <SectionProgressBar />

      {/* Canvas 3D */}
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

      {/* Główna treść */}
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
        <HeroSection isMobile={isMobile} />
        <AboutSection3D />
        <ServicesSection isMobile={isMobile} />
        <VideoResourcesSection isMobile={isMobile} />
        <CTASection isMobile={isMobile} />
        <FooterSection />
      </main>
    </>
  );
};

export default App;
