import React, { useState } from "react";

// Usługi: przekazuj w t.services z polem icon (emoji lub JSX/SVG)
const ServicesSection = ({ isMobile, t }) => {
  const [active, setActive] = useState(0);

  return (
    <section
      id="services"
      style={{
        marginBottom: "4.2rem",
        maxWidth: 1200,
        margin: "0 auto 1rem auto",
        display: isMobile ? "block" : "grid",
        gridTemplateColumns: isMobile ? undefined : "420px 1fr",
        gap: isMobile ? undefined : "3.5rem",
        alignItems: "flex-start",
        minHeight: isMobile ? 340 : 470,
        position: "relative",
        fontFamily: "Roboto, Arial, sans-serif",
        color: "var(--text, #e2e8ef)",
      }}
    >
      {/* LEWA KOLUMNA: OBRAZ/WIDEO (desktop) */}
      {!isMobile && (
        <div
          style={{
            position: "sticky",
            top: "7.5rem",
            height: 550,
            minHeight: 270,
            width: "100%",
            background: "var(--bg, #151b23)",
            borderRadius: 20,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {t.services.map((srv, idx) => {
            if (idx !== active) return null;
            if (srv.video) {
              return (
                <video
                  key={srv.video}
                  src={srv.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    borderRadius: 20,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 2,
                    background: "var(--bg, #151b23)",
                    pointerEvents: "none",
                    userSelect: "none",
                  }}
                  draggable={false}
                />
              );
            }
            return (
              <img
                key={srv.img}
                src={srv.img}
                alt={srv.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  opacity: 1,
                  zIndex: 2,
                  borderRadius: 20,
                  pointerEvents: "none",
                  userSelect: "none",
                  background: "var(--bg, #151b23)",
                }}
                draggable={false}
              />
            );
          })}
        </div>
      )}
      {/* PRAWA KOLUMNA: LISTA USŁUG */}
      <div style={{ width: "100%", minWidth: 0 }}>
        <h1
          style={{
            fontSize: isMobile ? "1.45rem" : "2.15rem",
            marginBottom: "2.8rem",
            color: "var(--accent, #5cc6ec)",
            letterSpacing: 1.2,
            fontWeight: 700,
            fontFamily: "Roboto, Arial, sans-serif",
          }}
        >
          {t.servicesSectionTitle}
        </h1>
        <div>
          {t.services.map((srv, idx) => {
            const expanded = idx === active;
            return (
              <div
                key={srv.title}
                style={{
                  marginBottom: isMobile ? "2.2rem" : "2.5rem",
                  borderRadius: 15,
                  background: "var(--bg, #151b23)",
                  border: expanded
                    ? "2px solid var(--accent, #5cc6ec)"
                    : "2px solid rgba(92,198,236,0.08)",
                  transition: "border .18s, background .18s",
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                  minHeight: expanded ? (isMobile ? 140 : 140) : 64,
                  display: "flex",
                  flexDirection: "column",
                  fontFamily: "Roboto, Arial, sans-serif",
                }}
                onMouseEnter={() => setActive(idx)}
                onClick={() => setActive(idx)}
              >
                {/* Title + Icon + Button */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: isMobile ? "1rem 1.1rem" : "1.2rem 2rem",
                    background: expanded ? "var(--bg, #151b23)" : "transparent",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.87rem",
                      minWidth: 0,
                    }}
                  >
                    {/* Ikona */}
                    <span
                      style={{
                        fontSize: isMobile ? 25 : 28,
                        minWidth: 28,
                        minHeight: 28,
                        opacity: expanded ? 1 : 0.8,
                        transition: "opacity 0.19s",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {srv.icon}
                    </span>
                    {/* Tytuł */}
                    <h3
                      style={{
                        fontSize: isMobile ? "1rem" : "1.17rem",
                        color: expanded
                          ? "var(--accent, #5cc6ec)"
                          : "var(--text, #e2e8ef)",
                        fontWeight: expanded ? 700 : 500,
                        letterSpacing: ".1px",
                        margin: 0,
                        transition: "color .18s",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        maxWidth: isMobile ? "55vw" : "29vw",
                        fontFamily: "Roboto, Arial, sans-serif",
                        display: "inline-block",
                      }}
                    >
                      {srv.title}
                    </h3>
                  </div>
                  <button
                    style={{
                      width: 34,
                      height: 34,
                      border: "none",
                      background: expanded
                        ? "var(--accent, #5cc6ec)"
                        : "var(--bg, #151b23)",
                      borderRadius: "50%",
                      color: expanded
                        ? "var(--bg, #151b23)"
                        : "var(--accent, #5cc6ec)",
                      fontSize: 20,
                      fontWeight: 700,
                      cursor: "pointer",
                      outline: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "background .2s, color .18s",
                      marginLeft: 8,
                      fontFamily: "Roboto, Arial, sans-serif",
                    }}
                    aria-label={
                      expanded ? "Ukryj szczegóły" : "Pokaż szczegóły"
                    }
                  >
                    {expanded ? "−" : "+"}
                  </button>
                </div>
                {/* Desc + Order Button */}
                <div
                  style={{
                    maxHeight: expanded ? 2000 : 0,
                    opacity: expanded ? 1 : 0,
                    padding: expanded
                      ? isMobile
                        ? "0.7rem 1.1rem 1.4rem 1.1rem"
                        : "0.9rem 2rem 1.6rem 2.3rem"
                      : "0 2rem",
                    transition:
                      "max-height .45s cubic-bezier(.64,1.3,.58,1.02), opacity .33s",
                    color: "var(--text, #e2e8ef)",
                    fontSize: isMobile ? 14.7 : 15.6,
                    lineHeight: 1.65,
                    background: expanded ? "var(--bg, #151b23)" : "none",
                    borderTop: expanded
                      ? "1px solid var(--accent, #5cc6ec18)"
                      : "1px solid transparent",
                    overflow: "hidden",
                    minHeight: expanded ? 70 : 0,
                    fontFamily: "Roboto, Arial, sans-serif",
                  }}
                >
                  <div style={{ marginBottom: 16 }}>
                    {/* Możesz tu dodać bardziej szczegółowy opis lub listę cech */}
                    {srv.desc && (
                      <div
                        dangerouslySetInnerHTML={{ __html: srv.desc }}
                        style={{
                          display: "block",
                        }}
                      />
                    )}
                  </div>
                  <a
                    href={srv.link}
                    style={{
                      background: "var(--accent, #5cc6ec)",
                      color: "var(--bg, #151b23)",
                      borderRadius: 8,
                      fontWeight: 700,
                      padding: isMobile ? "0.7rem 1.2rem" : "0.9rem 1.8rem",
                      fontSize: isMobile ? 15 : 16.7,
                      textDecoration: "none",
                      transition: "background .16s",
                      display: "inline-block",
                      letterSpacing: 0.3,
                      border: "none",
                      outline: "none",
                      cursor: "pointer",
                      fontFamily: "Roboto, Arial, sans-serif",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {srv.cta}
                  </a>
                  {/* --- MEDIA NA MOBILE POD TĄ KARTĄ --- */}
                  {isMobile && expanded && (
                    <div
                      style={{
                        width: "100%",
                        margin: "1.2rem 0 0 0",
                        background: "var(--bg, #151b23)",
                        borderRadius: 16,
                        minHeight: 140,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        overflow: "hidden",
                      }}
                    >
                      {srv.video ? (
                        <video
                          src={srv.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            borderRadius: 16,
                            background: "#000",
                            maxHeight: 210,
                            pointerEvents: "none",
                            userSelect: "none",
                          }}
                          draggable={false}
                        />
                      ) : (
                        <img
                          src={srv.img}
                          alt={srv.title}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                            borderRadius: 16,
                            background: "#000",
                            maxHeight: 210,
                            pointerEvents: "none",
                            userSelect: "none",
                          }}
                          draggable={false}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
