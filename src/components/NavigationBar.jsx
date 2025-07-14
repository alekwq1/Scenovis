import React from "react";

const navLinks = [
  { id: "about", label: { pl: "Blog", en: "Blog" } },
  { id: "services", label: { pl: "Usługi", en: "Services" } },
  { id: "resources", label: { pl: "Materiały", en: "Resources" } },
];

const LOGO_SRC = "/logo-scenovis.png";
const NAVBAR_HEIGHT = 70;

// --- Scroll sekcji tuż pod navbar ---
function scrollSectionToTop(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const rect = el.getBoundingClientRect();
  const navbarOffset = NAVBAR_HEIGHT - 20; // +12px odstępu od navbaru
  const top = rect.top + scrollTop - navbarOffset;
  window.scrollTo({
    top,
    behavior: "smooth",
  });
}

const NavigationBar = ({ showFixedNav = true, lang, setLang, t, isMobile }) => {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    scrollSectionToTop(id);
  };
  const handleContactClick = (e) => {
    e.preventDefault();
    scrollSectionToTop("contact");
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
        padding: isMobile ? "0 1rem" : "0 2rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 200,
        fontFamily: "Roboto, Arial, sans-serif",
        pointerEvents: "none",
        background: "rgba(21, 27, 35, 0.94)",
        backdropFilter: "blur(7px)",
        borderBottom: "1px solid #5cc6ec12",
      }}
    >
      {/* Logo po lewej */}
      <div
        style={{
          position: "absolute",
          left: isMobile ? "1rem" : "2rem",
          display: "flex",
          alignItems: "center",
          gap: "0.7rem",
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
            background: "#5cc6ec13",
          }}
        >
          <img
            src={LOGO_SRC}
            alt="Scenovis logo"
            style={{
              width: "36px",
              height: "36px",
              objectFit: "contain",
              filter: "drop-shadow(0 0 6px #5cc6ec44)",
              display: "block",
            }}
            draggable={false}
          />
        </div>
        {!isMobile && (
          <div
            style={{
              fontSize: "1.27rem",
              fontWeight: 700,
              color: "#e2e8ef",
              letterSpacing: "1.3px",
              fontFamily: "Roboto, Arial, sans-serif",
            }}
          >
            SCENOVIS
          </div>
        )}
      </div>

      {/* Menu pośrodku – tylko na desktopie */}
      {!isMobile && (
        <div
          style={{
            display: "flex",
            gap: "1.45rem",
            background: "rgba(21, 27, 35, 0.91)",
            borderRadius: "14px",
            boxShadow: "0 1px 12px 0 #5cc6ec10",
            padding: "0.34rem 1.7rem",
            fontSize: "1.07rem",
            fontWeight: 500,
            alignItems: "center",
            pointerEvents: "auto",
            fontFamily: "Roboto, Arial, sans-serif",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              style={{
                color: "#e2e8ef",
                textDecoration: "none",
                borderRadius: "6px",
                padding: "0.44rem 1rem",
                transition: "background 0.16s, color 0.16s",
                fontWeight: 500,
                letterSpacing: "0.02em",
                fontFamily: "Roboto, Arial, sans-serif",
              }}
              onClick={(e) => handleNavClick(e, link.id)}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#5cc6ec19";
                e.currentTarget.style.color = "#5cc6ec";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#e2e8ef";
              }}
            >
              {link.label[lang]}
            </a>
          ))}
        </div>
      )}

      {/* Contact + język – po prawej */}
      <div
        style={{
          position: "absolute",
          right: isMobile ? "1rem" : "2rem",
          display: "flex",
          gap: isMobile ? "0.5rem" : "1rem",
          pointerEvents: "auto",
        }}
      >
        {/* Przełącznik języka */}
        <button
          onClick={() => setLang(lang === "pl" ? "en" : "pl")}
          style={{
            fontWeight: 700,
            background: "none",
            color: "#5cc6ec",
            border: "none",
            fontSize: 17,
            cursor: "pointer",
            padding: "0.3rem 0.85rem",
            borderRadius: 8,
            outline: "none",
            fontFamily: "Roboto, Arial, sans-serif",
            letterSpacing: ".05em",
            transition: "background 0.15s",
          }}
          title={lang === "pl" ? "English" : "Polski"}
        >
          {lang === "pl" ? "EN" : "PL"}
        </button>
        {/* Contact Us */}
        <a
          href="#contact"
          style={{
            background: "#26303d",
            color: "#e2e8ef",
            border: "none",
            padding: isMobile ? "0.43rem 1rem" : "0.5rem 1.4rem",
            fontSize: isMobile ? "0.97rem" : "1rem",
            borderRadius: "30px",
            fontWeight: 600,
            boxShadow: "0 2px 10px 0 #5cc6ec16",
            textDecoration: "none",
            transition: "background 0.15s, color 0.15s",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            fontFamily: "Roboto, Arial, sans-serif",
          }}
          onClick={handleContactClick}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#5cc6ec";
            e.currentTarget.style.color = "#222b34";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "#26303d";
            e.currentTarget.style.color = "#e2e8ef";
          }}
        >
          {t.contactUs || "Contact Us"}
          <span style={{ fontSize: "1.08em", marginLeft: "3px" }}>↗</span>
        </a>
      </div>
    </div>
  );
};

export default NavigationBar;
