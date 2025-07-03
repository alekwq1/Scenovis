import React, { useEffect, useState } from "react";

// Podmień id sekcji na te, których używasz w <section id="...">
const SECTIONS = [
  { id: "hero" }, // HeroSection
  { id: "about" }, // AboutSection
  { id: "services" }, // ServicesSection
  { id: "resources" }, // VideoResourcesSection
  { id: "contact" }, // CTASection
];

const SectionProgressBar = () => {
  const [active, setActive] = useState(0);

  // Ustaw wysokość navbara tutaj:
  const NAVBAR_HEIGHT = 0; // <-- DOPASUJ do rzeczywistej wysokości navbara!

  // Funkcja do pobierania pozycji sekcji (lepsza niż offsetTop)
  const getSectionPositions = () => {
    return SECTIONS.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return 0;
      return el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
    });
  };

  useEffect(() => {
    const onScroll = () => {
      const positions = getSectionPositions();
      const scrollPos = window.scrollY + NAVBAR_HEIGHT + window.innerHeight / 2;
      let current = 0;
      for (let i = 0; i < positions.length; i++) {
        if (scrollPos >= positions[i]) current = i;
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (idx) => {
    const el = document.getElementById(SECTIONS[idx].id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "2vw",
        top: "20vh",
        height: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: 101,
      }}
    >
      {SECTIONS.map((s, idx) => (
        <div
          key={s.id}
          title={s.id.charAt(0).toUpperCase() + s.id.slice(1)}
          onClick={() => handleClick(idx)}
          style={{
            width: "16px",
            height: "38px",
            borderRadius: "8px",
            margin: "4px 0",
            background:
              active === idx
                ? "linear-gradient(180deg, #00e6ff, #ffffff)"
                : "rgba(255,255,255,0.07)",
            border:
              active === idx
                ? "2px solid #00e6ff"
                : "2px solid rgba(0,230,255,0.17)",
            boxShadow: active === idx ? "0 0 8px #00e6ff77" : "none",
            cursor: "pointer",
            transition: "all 0.18s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
          }}
        >
          <span
            style={{
              color: active === idx ? "#00e6ff" : "#b3eaff",
              fontSize: "1.2rem",
              userSelect: "none",
            }}
          >
            ●
          </span>
        </div>
      ))}
    </div>
  );
};

export default SectionProgressBar;
