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

  // --- MOBILE: tekst na ciemnym, centralnie w pionie
  if (isMobile) {
    return (
      <section
        id="hero"
        style={{
          width: "100vw",
          minWidth: "100vw",
          maxWidth: "100vw",
          minHeight: "100vh",
          background: "#0a1621",
          margin: 0,
          padding: 0,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Tekst hero */}
        <div
          style={{
            width: "100vw",
            background: "rgba(10, 22, 33, 0.98)",
            zIndex: 2,
            padding: "36px 6vw 26px 6vw",
            color: "#fff",
            textAlign: "left",
            boxSizing: "border-box",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start", // left align, but block is centered
            justifyContent: "center",
          }}
        >
          <h1
            ref={headerRef}
            style={{
              fontSize: "1.45rem",
              fontWeight: 900,
              background: "linear-gradient(to right, #f5f8fa, #37ecff 85%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
              lineHeight: 1.13,
              textShadow: "0 1px 10px #0098bb33",
              letterSpacing: "-0.7px",
              marginBottom: "10px",
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
              fontSize: "1.01rem",
              fontWeight: 400,
              margin: "0 0 0.98em 0",
              color: "#c7f6ff",
              textShadow: "0 1px 8px #003e4a33",
              maxWidth: "97vw",
              lineHeight: 1.23,
            }}
          >
            {t.heroSub}
          </h2>
          <div
            style={{
              marginTop: "0.8em",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
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
                fontSize: "1.01rem",
                fontWeight: 700,
                background: "linear-gradient(to right, #00e6ff, #0072ff)",
                color: "#fff",
                border: "none",
                borderRadius: "999px",
                padding: "0.7rem 1.7rem",
                cursor: "pointer",
                boxShadow: "0 4px 30px #0072ff55",
                transition: "transform 0.1s",
              }}
            >
              {t.exploreBtn}
            </button>
          </div>
        </div>
        {/* Wideo pod tekstem */}
        <div
          style={{
            width: "100vw",
            height: "46vw",
            minHeight: 200,
            maxHeight: 360,
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
              boxShadow: "0 8px 28px #111c",
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
