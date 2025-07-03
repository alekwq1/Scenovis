import React, { useEffect, useRef, useState } from "react";

const HeroPreloader = ({ progress, fadeOut }) => (
  <div
    style={{
      position: "absolute",
      inset: 0,
      background: "rgba(10,15,30,0.96)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 99,
      opacity: fadeOut ? 0 : 1,
      pointerEvents: fadeOut ? "none" : "all",
      transition: "opacity 0.5s cubic-bezier(.4,1,.3,1)",
    }}
  >
    <div style={{ textAlign: "center" }}>
      <div
        style={{
          width: 54,
          height: 54,
          margin: "0 auto 16px auto",
          border: "6px solid #1a3e53",
          borderTop: "6px solid #08ffe6",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <div
        style={{
          fontSize: "1.3rem",
          color: "#08ffe6",
          fontWeight: 700,
          marginBottom: 10,
          marginTop: 10,
          letterSpacing: "1px",
        }}
      >
        Ładowanie wideo...
      </div>
      <div
        style={{
          width: 220,
          height: 10,
          background: "#2c3d4a",
          borderRadius: 8,
          margin: "0 auto",
          overflow: "hidden",
          marginBottom: 12,
        }}
      >
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            background: "linear-gradient(90deg, #08ffe6 40%, #2c9cfa 100%)",
            borderRadius: 8,
            transition: "width 0.3s cubic-bezier(.39,1.77,.71,.86)",
          }}
        />
      </div>
      <div style={{ color: "#08ffe6", fontWeight: 600, fontSize: 16 }}>
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
);

const VIDEO_URL =
  "https://ipdz3z5kzmmwbq5p.public.blob.vercel-storage.com/Video-uCRcJm1Zqjvs0EGNQQ428Hnmj2anGH.mp4";

const HeroSection = ({ isMobile, lang, t }) => {
  const headerRef = useRef();
  const subRef = useRef();
  const videoRef = useRef(null);

  const [showPreloader, setShowPreloader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  // Płynny fake-progress (do 85%)
  useEffect(() => {
    if (!showPreloader) return;
    let val = 0;
    const interval = setInterval(() => {
      val += Math.random() * 7 + 3;
      if (val < 85) setProgress(Math.floor(val));
      else clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [showPreloader]);

  // Znikaj loadera na onCanPlay lub onPlaying
  const handleVideoReady = () => {
    setProgress(100);
    setFadeOut(true);
    setTimeout(() => setShowPreloader(false), 400);
  };

  // Fallback timeout (7s max)
  useEffect(() => {
    const timeout = setTimeout(() => {
      setProgress(100);
      setFadeOut(true);
      setTimeout(() => setShowPreloader(false), 400);
    }, 7000);
    return () => clearTimeout(timeout);
  }, []);

  // Animacja nagłówków
  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.opacity = 0;
      headerRef.current.style.transform = "translateY(40px)";
      setTimeout(() => {
        headerRef.current.style.transition = "all 1s cubic-bezier(.5,.2,.4,1)";
        headerRef.current.style.opacity = 1;
        headerRef.current.style.transform = "translateY(0)";
      }, 100);
    }
    if (subRef.current) {
      subRef.current.style.opacity = 0;
      setTimeout(() => {
        subRef.current.style.transition =
          "opacity 1.1s cubic-bezier(.5,.2,.4,1)";
        subRef.current.style.opacity = 1;
      }, 500);
    }
  }, []);

  return (
    <section
      id="hero"
      style={{
        width: "100vw",
        minWidth: "100vw",
        maxWidth: "100vw",
        height: "100vh",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
        position: "relative",
        overflow: "hidden",
        background: "transparent",
      }}
    >
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
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
        src={VIDEO_URL}
        onCanPlay={handleVideoReady}
        onPlaying={handleVideoReady}
      />

      {showPreloader && <HeroPreloader progress={progress} fadeOut={fadeOut} />}

      {/* Tekst w dolnej części hero */}
      <div
        style={{
          position: "absolute",
          left: isMobile ? "5vw" : "7vw",
          bottom: isMobile ? "10vw" : "7vw",
          zIndex: 2,
          maxWidth: isMobile ? "95vw" : "900px",
          color: "#fff",
          textAlign: "left",
          padding: 0,
        }}
      >
        <h1
          ref={headerRef}
          style={{
            fontSize: isMobile ? "2.3rem" : "4rem",
            fontWeight: 900,
            background: "linear-gradient(to right, #fff, #00e6ff 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: 0,
            lineHeight: 1.08,
            textShadow: "0 2px 16px #0009",
            letterSpacing: "-2px",
          }}
        >
          {t.heroTitle.split("\n").map((line, i) => (
            <React.Fragment key={i}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h1>
        <h2
          ref={subRef}
          style={{
            fontSize: isMobile ? "1.1rem" : "1.7rem",
            fontWeight: 400,
            margin: "1.2rem 0 0 0",
            color: "#fff",
            textShadow: "0 2px 16px #000c",
            maxWidth: "550px",
            lineHeight: 1.2,
          }}
        >
          {t.heroSub}
        </h2>
        <div style={{ marginTop: "2rem" }}>
          <button
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                const navbarOffset = 0; // dopasuj do własnego navbara!
                const top =
                  aboutSection.getBoundingClientRect().top +
                  window.scrollY -
                  navbarOffset;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            style={{
              fontSize: isMobile ? "1.05rem" : "1.2rem",
              fontWeight: 700,
              background: "linear-gradient(to right, #00e6ff, #0072ff)",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              padding: isMobile ? "0.7rem 2rem" : "1.1rem 2.7rem",
              cursor: "pointer",
              boxShadow: "0 4px 30px #0072ff55",
              transition: "transform 0.1s",
            }}
          >
            {t.exploreBtn}
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
