import React, { useEffect, useRef, useState } from "react";
import Preloader from "../Preloader"; // Upewnij się, że ścieżka jest poprawna!

const VIDEO_URL =
  "https://ipdz3z5kzmmwbq5p.public.blob.vercel-storage.com/Video-uCRcJm1Zqjvs0EGNQQ428Hnmj2anGH.mp4";

const HeroSection = ({ isMobile, lang, t }) => {
  const headerRef = useRef();
  const subRef = useRef();
  const videoRef = useRef(null);

  // Loader/progres video
  const [showPreloader, setShowPreloader] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let wasReady = false;

    // Co 100ms sprawdzamy stan video – to jest najpewniejsze na localhost/blob
    const interval = setInterval(() => {
      try {
        const b = video.buffered;
        const d = video.duration;
        let percent = 0;
        if (d && b.length > 0) {
          let buffered = 0;
          for (let i = 0; i < b.length; i++) buffered = b.end(i);
          percent = Math.round((buffered / d) * 100);
          percent = Math.max(0, Math.min(100, percent));
        }
        setProgress(percent);

        // Sprawdzamy gotowość video (readyState === 4 = HAVE_ENOUGH_DATA)
        if (!wasReady && video.readyState >= 4) {
          wasReady = true;
          setProgress(100);
          setFadeOut(true);
          setTimeout(() => setShowPreloader(false), 350);
        }
      } catch (e) {
        setProgress(0);
      }
    }, 100);

    // Dodatkowe zabezpieczenie: backup timeout (10s)
    const backupTimeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setShowPreloader(false), 350);
    }, 10000);

    return () => {
      clearInterval(interval);
      clearTimeout(backupTimeout);
    };
  }, []);

  // Animacje wejścia nagłówków
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
      {/* Tło video */}
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
      />

      {showPreloader && (
        <Preloader
          progress={progress}
          fadeOut={fadeOut}
          onFadeOutEnd={() => setShowPreloader(false)}
        />
      )}

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
