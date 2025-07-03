import React from "react";

const navLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "resources", label: "Resources" },
];

const LOGO_SRC = "/logo-scenovis.png";
const NAVBAR_HEIGHT = 70; // Wysokość navbara

// Funkcja scrollująca sekcję do środka okna
function scrollSectionToCenter(id) {
  const el = document.getElementById(id);
  if (!el) return;

  // Odległość od górnej krawędzi dokumentu
  const rect = el.getBoundingClientRect();
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  // Wysokość sekcji i okna
  const elHeight = rect.height;
  const winHeight = window.innerHeight;
  // Pozycja sekcji względem okna
  let top = rect.top + scrollTop;

  // Wyliczamy tak, by środek sekcji był na środku ekranu,
  // ale bierzemy pod uwagę navbar wysokości NAVBAR_HEIGHT
  top = top - (winHeight / 2 - elHeight / 2) - NAVBAR_HEIGHT / 2;

  window.scrollTo({
    top: top,
    behavior: "smooth",
  });
}

const NavigationBar = ({ showFixedNav = true }) => {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollSectionToCenter(id);
  };

  const handleContactClick = (e) => {
    e.preventDefault();
    scrollSectionToCenter("contact");
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: NAVBAR_HEIGHT,
        boxSizing: "border-box",
        padding: "0 2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 200,
        fontFamily: "'Inter', sans-serif",
        pointerEvents: "none",
        background: "rgba(16, 21, 34, 0.88)",
        backdropFilter: "blur(7px)",
      }}
    >
      {/* Logo po lewej */}
      <div
        style={{
          position: "absolute",
          left: "2rem",
          display: "flex",
          alignItems: "center",
          gap: "0.9rem",
          pointerEvents: "auto",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "10px",
            background: "#00e6ff22",
            boxShadow: "0 0 20px #00e6ff25",
          }}
        >
          <img
            src={LOGO_SRC}
            alt="Scenovis logo"
            style={{
              width: "36px",
              height: "36px",
              objectFit: "contain",
              filter: "drop-shadow(0 0 8px #00e6ff77)",
              display: "block",
            }}
            draggable={false}
          />
        </div>
        <div
          style={{
            fontSize: "1.4rem",
            fontWeight: 700,
            color: "white",
            letterSpacing: "1px",
          }}
        >
          SCENOVIS
        </div>
      </div>
      {/* Menu pośrodku */}
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          background: "rgba(16, 21, 34, 0.82)",
          borderRadius: "16px",
          boxShadow: "0 2px 24px 0 rgba(0,230,255,0.06)",
          padding: "0.4rem 1.9rem",
          fontSize: "1.08rem",
          fontWeight: 500,
          alignItems: "center",
          pointerEvents: "auto",
          backdropFilter: "blur(6px)",
        }}
      >
        {navLinks.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            style={{
              color: "rgba(255,255,255,0.93)",
              textDecoration: "none",
              borderRadius: "7px",
              padding: "0.5rem 1rem",
              transition: "background 0.2s, color 0.2s",
              fontWeight: 500,
              letterSpacing: "0.02em",
            }}
            onClick={(e) => handleNavClick(e, link.id)}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#00e6ff33";
              e.currentTarget.style.color = "#00e6ff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "rgba(255,255,255,0.93)";
            }}
          >
            {link.label}
          </a>
        ))}
      </div>
      {/* Contact Us po prawej */}
      <div
        style={{
          position: "absolute",
          right: "2rem",
          display: "flex",
          gap: "1rem",
          pointerEvents: "auto",
        }}
      >
        <a
          href="#contact"
          style={{
            background: "#232a33",
            color: "#fff",
            border: "none",
            padding: "0.5rem 1.4rem",
            fontSize: "1rem",
            borderRadius: "32px",
            fontWeight: 600,
            boxShadow: "0 2px 12px 0 #00e6ff20",
            textDecoration: "none",
            marginRight: "0.2rem",
            transition: "background 0.2s, color 0.2s, box-shadow 0.2s",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}
          onClick={handleContactClick}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#00e6ff";
            e.currentTarget.style.color = "#050e17";
            e.currentTarget.style.boxShadow = "0 2px 20px 0 #00e6ff50";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#232a33";
            e.currentTarget.style.color = "#fff";
            e.currentTarget.style.boxShadow = "0 2px 12px 0 #00e6ff20";
          }}
        >
          Contact Us
          <span style={{ fontSize: "1.15em", marginLeft: "3px" }}>↗</span>
        </a>
      </div>
    </div>
  );
};

export default NavigationBar;
