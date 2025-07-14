import React, { useRef, useEffect, useState } from "react";

// Zdjęcia (podmień na własne URL-e!)
const IMAGES = [
  "/images/hero1.jpg",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
  "/images/hero4.jpg",
  "/images/hero5.jpg",
];
const HERO_IMAGES = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
  "/hero4.jpg",
  "/hero5.jpg",
];

const SLIDE_TIME = 5400;

const HeroSection = ({ isMobile, lang, t }) => {
  const [slide, setSlide] = useState(0);
  const [anim, setAnim] = useState(true);
  const [textIn, setTextIn] = useState(false);

  // Fade + slide-up tekstu (profesjonalnie)
  useEffect(() => {
    setTextIn(false);
    const timeout = setTimeout(() => setTextIn(true), 400);
    return () => clearTimeout(timeout);
  }, [slide]);

  // Slider automatyczny
  useEffect(() => {
    setAnim(true);
    const timeout = setTimeout(() => {
      setAnim(false);
      setTimeout(() => {
        setSlide((s) => (s + 1) % IMAGES.length);
        setAnim(true);
      }, 120);
    }, SLIDE_TIME);
    return () => clearTimeout(timeout);
  }, [slide]);

  // Kropki manualne
  const goToSlide = (i) => {
    setSlide(i);
    setAnim(true);
  };

  // Mobile wersja
  if (isMobile) {
    return (
      <section
        id="hero"
        style={{
          width: "100vw",
          minHeight: "100vh",
          background: "#0b141c",
          margin: 0,
          padding: 0,
          position: "relative",
          overflow: "hidden",
          fontFamily: "Roboto, Arial, sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Zdjęcie + overlay */}
        <div
          style={{
            width: "100vw",
            height: "52vw",
            minHeight: 180,
            maxHeight: 360,
            position: "relative",
            overflow: "hidden",
            background: "#101920",
            boxShadow: "0 8px 38px #0e172185",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {IMAGES.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Hero Slide ${i + 1}`}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100%",
                objectFit: "cover",
                opacity: slide === i && anim ? 1 : 0,
                transition:
                  "opacity 1.08s cubic-bezier(.6,.2,.3,1), transform 1.18s cubic-bezier(.56,.02,.31,.98)",
                transform:
                  slide === i && anim
                    ? "scale(1)"
                    : "scale(1.037) translateY(12px)",
                zIndex: slide === i ? 2 : 1,
                filter: slide === i ? "brightness(0.86)" : "blur(1.2px)",
                fontFamily: "Roboto, Arial, sans-serif",
              }}
              draggable={false}
            />
          ))}
          {/* Overlay */}
          <div
            style={{
              position: "absolute",
              left: 0,
              top: 0,
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(180deg,rgba(10,18,26,0.29) 0%,rgba(9,18,28,0.64) 80%,#111b23 98%)",
              pointerEvents: "none",
              zIndex: 5,
            }}
          />
          {/* Kropki */}
          <div
            style={{
              position: "absolute",
              bottom: 15,
              left: "50%",
              transform: "translateX(-50%)",
              display: "flex",
              gap: 11,
              zIndex: 12,
            }}
          >
            {IMAGES.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                aria-label={`Pokaż zdjęcie ${i + 1}`}
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  border: "none",
                  background:
                    slide === i
                      ? "linear-gradient(90deg,#1ec4e6 60%,#3fa9fc 100%)"
                      : "#202f36",
                  boxShadow:
                    slide === i ? "0 2px 7px #1ec4e660" : "0 1px 2px #1117",
                  opacity: slide === i ? 0.93 : 0.55,
                  cursor: "pointer",
                  transition:
                    "background 0.14s, box-shadow 0.17s, opacity 0.16s",
                }}
              />
            ))}
          </div>
        </div>
        {/* Tekst hero */}
        <div
          style={{
            width: "100vw",
            background: "rgba(13, 22, 31, 0.96)",
            zIndex: 8,
            padding: "24px 7vw 54px 7vw",
            color: "#fff",
            textAlign: "left",
            boxSizing: "border-box",
            borderBottomLeftRadius: 17,
            borderBottomRightRadius: 17,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            minHeight: 150,
            marginTop: -42,
            fontFamily: "Roboto, Arial, sans-serif",
          }}
        >
          <h1
            style={{
              fontSize: "1.59rem",
              fontWeight: 900,
              background: "linear-gradient(90deg,#d3f2fa,#34c7e7 95%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              margin: 0,
              lineHeight: 1.14,
              marginBottom: "10px",
              letterSpacing: "-0.6px",
              fontFamily: "Roboto, Arial, sans-serif",
              textShadow: "0 2px 11px #009be215",
              opacity: textIn ? 1 : 0,
              transform: textIn ? "translateY(0)" : "translateY(30px)",
              transition:
                "opacity 1.07s cubic-bezier(.54,.11,.35,1), transform 1.05s cubic-bezier(.54,.11,.35,1)",
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
            style={{
              fontSize: "1.05rem",
              fontWeight: 400,
              margin: "0 0 1.1em 0",
              color: "#cbe6f6",
              maxWidth: "98vw",
              lineHeight: 1.22,
              fontFamily: "Roboto, Arial, sans-serif",
              opacity: textIn ? 1 : 0,
              transform: textIn ? "translateY(0)" : "translateY(22px)",
              transition:
                "opacity 1.2s cubic-bezier(.54,.11,.35,1) 0.11s, transform 1.09s cubic-bezier(.54,.11,.35,1) 0.06s",
            }}
          >
            {t.heroSub}
          </h2>
          <div
            style={{
              marginTop: "0.5em",
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <button
              onClick={() => {
                const aboutSection = document.getElementById("about");
                if (aboutSection) {
                  const top =
                    aboutSection.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top, behavior: "smooth" });
                }
              }}
              style={{
                fontSize: "1.05rem",
                fontWeight: 700,
                background: "linear-gradient(90deg,#1ec4e6,#3fa9fc 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "999px",
                padding: "0.72rem 1.65rem",
                cursor: "pointer",
                boxShadow: "0 4px 20px #1ec4e62a",
                fontFamily: "Roboto, Arial, sans-serif",
                opacity: textIn ? 1 : 0,
                transform: textIn ? "translateY(0)" : "translateY(18px)",
                transition:
                  "opacity 1.17s cubic-bezier(.54,.11,.35,1) 0.17s, transform 1.05s cubic-bezier(.54,.11,.35,1) 0.09s",
              }}
            >
              {t.exploreBtn}
            </button>
          </div>
        </div>
      </section>
    );
  }

  // --- DESKTOP
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
        background: "#0b141c",
        fontFamily: "Roboto, Arial, sans-serif",
      }}
    >
      {/* Zdjęcia slider + overlay */}
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          overflow: "hidden",
        }}
      >
        {IMAGES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Hero Slide ${i + 1}`}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              objectFit: "cover",
              opacity: slide === i && anim ? 1 : 0,
              transition:
                "opacity 1.13s cubic-bezier(.62,0,.34,1), transform 1.19s cubic-bezier(.62,.09,.44,1)",
              transform:
                slide === i && anim
                  ? "scale(1)"
                  : "scale(1.04) translateY(15px)",
              zIndex: slide === i ? 2 : 1,
              filter: slide === i ? "brightness(0.83)" : "blur(1.1px)",
              fontFamily: "Roboto, Arial, sans-serif",
            }}
            draggable={false}
          />
        ))}
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100vw",
            height: "100vh",
            pointerEvents: "none",
            zIndex: 5,
            background:
              "linear-gradient(180deg,rgba(14,24,34,0.27) 4%,rgba(13,20,31,0.63) 84%,#0e1721 99%)",
          }}
        />
        {/* Kropki */}
        <div
          style={{
            position: "absolute",
            bottom: "4vw",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            gap: 14,
            zIndex: 10,
          }}
        >
          {IMAGES.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Show slide ${i + 1}`}
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                border: "none",
                background:
                  slide === i
                    ? "linear-gradient(90deg,#1ec4e6 60%,#3fa9fc 100%)"
                    : "#202f36",
                boxShadow:
                  slide === i ? "0 2px 8px #1ec4e660" : "0 1px 3px #19232a88",
                opacity: slide === i ? 1 : 0.6,
                cursor: "pointer",
                transition: "background 0.13s, box-shadow 0.13s, opacity 0.13s",
              }}
            />
          ))}
        </div>
      </div>
      {/* Tekst hero */}
      <div
        style={{
          position: "absolute",
          left: "9vw",
          bottom: "10vw",
          zIndex: 12,
          maxWidth: "920px",
          color: "#fff",
          textAlign: "left",
          fontFamily: "Roboto, Arial, sans-serif",
        }}
      >
        <h1
          style={{
            fontSize: "4.1rem",
            fontWeight: 900,
            background: "linear-gradient(90deg,#e5f8fc,#1ec4e6 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            margin: 0,
            lineHeight: 1.07,
            letterSpacing: "-2px",
            fontFamily: "Roboto, Arial, sans-serif",
            textShadow: "0 2px 18px #009be215",
            opacity: textIn ? 1 : 0,
            transform: textIn ? "translateY(0)" : "translateY(36px)",
            transition:
              "opacity 1.09s cubic-bezier(.54,.11,.35,1), transform 1.09s cubic-bezier(.54,.11,.35,1)",
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
          style={{
            fontSize: "1.62rem",
            fontWeight: 400,
            margin: "1.22rem 0 0 0",
            color: "#bce0f0",
            textShadow: "0 2px 13px #009be218",
            maxWidth: "610px",
            lineHeight: 1.2,
            fontFamily: "Roboto, Arial, sans-serif",
            opacity: textIn ? 1 : 0,
            transform: textIn ? "translateY(0)" : "translateY(24px)",
            transition:
              "opacity 1.18s cubic-bezier(.54,.11,.35,1) 0.11s, transform 1.09s cubic-bezier(.54,.11,.35,1) 0.06s",
          }}
        >
          {t.heroSub}
        </h2>
        <div style={{ marginTop: "2.5rem" }}>
          <button
            onClick={() => {
              const aboutSection = document.getElementById("about");
              if (aboutSection) {
                const top =
                  aboutSection.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top, behavior: "smooth" });
              }
            }}
            style={{
              fontSize: "1.16rem",
              fontWeight: 700,
              background: "linear-gradient(90deg,#1ec4e6,#3fa9fc 100%)",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              padding: "1.08rem 2.6rem",
              cursor: "pointer",
              boxShadow: "0 4px 22px #1ec4e623",
              fontFamily: "Roboto, Arial, sans-serif",
              opacity: textIn ? 1 : 0,
              transform: textIn ? "translateY(0)" : "translateY(16px)",
              transition:
                "opacity 1.22s cubic-bezier(.54,.11,.35,1) 0.14s, transform 1.09s cubic-bezier(.54,.11,.35,1) 0.09s",
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
