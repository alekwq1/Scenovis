import React, { useEffect, useRef } from "react";

const VIDEO_URL = "/Video.mp4";

const HeroSection = ({ isMobile, lang, t }) => {
  const headerRef = useRef();
  const subRef = useRef();

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.style.opacity = 0;
      headerRef.current.style.transform = "translateY(34px)";
      setTimeout(() => {
        headerRef.current.style.transition = "all 1s cubic-bezier(.5,.2,.4,1)";
        headerRef.current.style.opacity = 1;
        headerRef.current.style.transform = "translateY(0)";
      }, 120);
    }
    if (subRef.current) {
      subRef.current.style.opacity = 0;
      setTimeout(() => {
        subRef.current.style.transition =
          "opacity 1.1s cubic-bezier(.5,.2,.4,1)";
        subRef.current.style.opacity = 1;
      }, 420);
    }
  }, []);

  // --- MOBILE UX: blok tekstu lżejszy i zwarty, lepsza kompozycja
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
          background: "#091725",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Tekst hero – wyśrodkowany pionowo */}
        <div
          style={{
            width: "100vw",
            background:
              "linear-gradient(180deg, #101d29ee 85%, #162837cc 100%)",
            zIndex: 2,
            color: "#fff",
            textAlign: "left",
            boxSizing: "border-box",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            padding: "32px 7vw 18px 7vw",
            boxShadow: "0 6px 32px #0a1422bb",
            minHeight: 220,
          }}
        >
          <h1
            ref={headerRef}
            style={{
              fontSize: "1.65rem",
              fontWeight: 800,
              background: "linear-gradient(to right, #eaffff, #37ecff 85%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
              lineHeight: 1.11,
              textShadow: "0 1px 7px #0098bb33",
              letterSpacing: "-0.3px",
              marginBottom: "10px",
              maxWidth: "90vw",
              wordBreak: "break-word",
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
              fontSize: "1.08rem",
              fontWeight: 400,
              margin: "0 0 1.1em 0",
              color: "#d7f7ff",
              textShadow: "0 1px 8px #003e4a33",
              lineHeight: 1.22,
              maxWidth: "93vw",
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
              fontSize: "1.07rem",
              fontWeight: 700,
              background: "linear-gradient(to right, #00e6ff, #0072ff)",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              padding: "0.68rem 1.5rem",
              cursor: "pointer",
              boxShadow: "0 4px 22px #0072ff44",
              transition: "transform 0.1s",
              margin: "0.1em 0 0.2em 0",
              alignSelf: "flex-start",
            }}
          >
            {t.exploreBtn}
          </button>
        </div>
        {/* Wideo pod tekstem */}
        <div
          style={{
            width: "100vw",
            height: "48vw",
            minHeight: 190,
            maxHeight: 320,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#111",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100vw",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              zIndex: 1,
              filter: "brightness(0.88)",
              background: "#111",
              borderRadius: 16,
              boxShadow: "0 8px 24px #111a",
            }}
            src={VIDEO_URL}
          />
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
