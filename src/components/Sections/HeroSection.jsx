import React, { useEffect, useRef } from "react";

const VIDEO_URL = "/Video.mp4";

const HeroSection = ({ isMobile, lang, t }) => {
  const headerRef = useRef();
  const subRef = useRef();

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.opacity = 0;
      headerRef.current.style.transform = "translateY(30px)";
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

  // --- MOBILE: tekst NA wideo, centralnie, pełne tło
  if (isMobile) {
    return (
      <section
        id="hero"
        style={{
          width: "100vw",
          minWidth: "100vw",
          maxWidth: "100vw",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <video
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
            opacity: 0.89,
            filter: "brightness(0.82)",
            pointerEvents: "none",
            background: "#0a1621",
          }}
          src={VIDEO_URL}
        />
        {/* Tekst hero na środku wideo */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            background:
              "linear-gradient(180deg, #05131ecc 55%, #05131ee3 100%)",
            // mocniejsze, bardziej czytelne dla tekstu
            padding: "0 5vw",
          }}
        >
          <h1
            ref={headerRef}
            style={{
              fontSize: "1.3rem",
              fontWeight: 900,
              background: "linear-gradient(to right, #e9fcff, #33ecff 90%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
              lineHeight: 1.14,
              textShadow: "0 1px 10px #0098bb33",
              letterSpacing: "-0.4px",
              marginBottom: "12px",
              textAlign: "center",
              maxWidth: "95vw",
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
              fontSize: "1.05rem",
              fontWeight: 400,
              margin: "0 0 1.2em 0",
              color: "#d5f7ff",
              textShadow: "0 1px 8px #003e4a22",
              lineHeight: 1.21,
              textAlign: "center",
              maxWidth: "92vw",
            }}
          >
            {t.heroSub}
          </h2>
          <button
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                const navbarOffset = 0;
                const top =
                  aboutSection.getBoundingClientRect().top +
                  window.scrollY -
                  navbarOffset;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            style={{
              fontSize: "1rem",
              fontWeight: 700,
              background: "linear-gradient(to right, #00e6ff, #0072ff)",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              padding: "0.85rem 2rem",
              cursor: "pointer",
              boxShadow: "0 4px 20px #0072ff55",
              transition: "transform 0.1s",
              marginTop: "0.5em",
              marginBottom: "0.5em",
              alignSelf: "center",
            }}
          >
            {t.exploreBtn}
          </button>
        </div>
      </section>
    );
  }

  // --- DESKTOP: klasyka
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
        background: "#050e17",
      }}
    >
      <video
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
          background: "#050e17",
        }}
        src={VIDEO_URL}
      />

      <div
        style={{
          position: "absolute",
          left: "7vw",
          bottom: "7vw",
          zIndex: 2,
          maxWidth: "900px",
          color: "#fff",
          textAlign: "left",
          padding: 0,
        }}
      >
        <h1
          ref={headerRef}
          style={{
            fontSize: "4rem",
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
            fontSize: "1.7rem",
            fontWeight: 400,
            margin: "1.2rem 0 0 0",
            color: "#fff",
            textShadow: "0 2px 16px #000c",
            maxWidth: "550px",
            lineHeight: 1.22,
          }}
        >
          {t.heroSub}
        </h2>
        <div style={{ marginTop: "2rem" }}>
          <button
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                const navbarOffset = 0;
                const top =
                  aboutSection.getBoundingClientRect().top +
                  window.scrollY -
                  navbarOffset;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            style={{
              fontSize: "1.2rem",
              fontWeight: 700,
              background: "linear-gradient(to right, #00e6ff, #0072ff)",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              padding: "1.1rem 2.7rem",
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
