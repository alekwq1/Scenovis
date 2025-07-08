import React, { useEffect, useRef } from "react";

const VIDEO_URL = "/Video.mp4";

const HeroSection = ({ isMobile, lang, t }) => {
  const headerRef = useRef();
  const subRef = useRef();

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
      {/* --- RESPONSYWNE WIDEO TŁA --- */}
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          left: 0,
          top: isMobile ? "5cm" : 0,
          width: "100%",
          height: "100%",
          minWidth: "100vw",
          minHeight: "100vh",
          objectFit: isMobile ? "contain" : "cover",
          objectPosition: isMobile ? "center top" : "center",
          zIndex: 0,
          opacity: 1,
          filter: "brightness(0.85)",
          pointerEvents: "none",
          background: "#050e17",
          transition: "top 0.3s",
        }}
        src={VIDEO_URL}
      />

      {/* --- TEKST HERO --- */}
      <div
        style={{
          position: "absolute",
          left: isMobile ? "4vw" : "7vw",
          bottom: isMobile ? "12vw" : "7vw",
          zIndex: 2,
          maxWidth: isMobile ? "92vw" : "900px",
          color: "#fff",
          textAlign: "left",
          padding: isMobile ? "0 2vw" : 0,
        }}
      >
        <h1
          ref={headerRef}
          style={{
            fontSize: isMobile ? "1.7rem" : "4rem",
            fontWeight: 900,
            background: "linear-gradient(to right, #fff, #00e6ff 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: 0,
            lineHeight: isMobile ? 1.14 : 1.08,
            textShadow: "0 2px 16px #0009",
            letterSpacing: isMobile ? "-1.1px" : "-2px",
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
            fontSize: isMobile ? "1.06rem" : "1.7rem",
            fontWeight: 400,
            margin: isMobile ? "0.95rem 0 0 0" : "1.2rem 0 0 0",
            color: "#fff",
            textShadow: "0 2px 16px #000c",
            maxWidth: isMobile ? "92vw" : "550px",
            lineHeight: 1.22,
          }}
        >
          {t.heroSub}
        </h2>
        <div style={{ marginTop: isMobile ? "1.2rem" : "2rem" }}>
          <button
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                const navbarOffset = 0; // Dopasuj do własnego navbara!
                const top =
                  aboutSection.getBoundingClientRect().top +
                  window.scrollY -
                  navbarOffset;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            style={{
              fontSize: isMobile ? "1.01rem" : "1.2rem",
              fontWeight: 700,
              background: "linear-gradient(to right, #00e6ff, #0072ff)",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              padding: isMobile ? "0.68rem 1.5rem" : "1.1rem 2.7rem",
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
