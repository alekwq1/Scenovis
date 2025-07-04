import React, { useState } from "react";

const NEON = "#00e6ff";
const BG_CARD = "rgba(10, 22, 30, 0.99)";

const ServicesSection = ({ isMobile, t }) => {
  const [active, setActive] = useState(0);

  return (
    <section
      id="services"
      style={{
        marginBottom: "4.2rem",
        maxWidth: 1200,
        margin: "0 auto 6rem auto",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "420px 1fr",
        gap: isMobile ? "2.5rem" : "3.5rem",
        alignItems: "flex-start",
        minHeight: isMobile ? 340 : 470,
        position: "relative",
      }}
    >
      {/* LEWA KOLUMNA: OBRAZ LUB VIDEO */}
      <div
        style={{
          position: isMobile ? "relative" : "sticky",
          top: isMobile ? "auto" : "7.5rem",
          height: isMobile ? 200 : 550,
          minHeight: isMobile ? 0 : 270,
          width: "100%",
          background: "#101925",
          borderRadius: 20,
          boxShadow: `0 6px 36px 0 ${NEON}14`,
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
                  transition: "opacity 0.44s cubic-bezier(.5,1.5,.5,1.05)",
                  boxShadow: "0 0 24px #00e6ff55",
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
                transition: "opacity 0.44s cubic-bezier(.5,1.5,.5,1.05)",
                zIndex: 2,
                filter: "drop-shadow(0 0 24px #00e6ff55)",
                borderRadius: 20,
                pointerEvents: "none",
                userSelect: "none",
              }}
              draggable={false}
            />
          );
        })}
      </div>
      {/* PRAWA KOLUMNA: LISTA USŁUG */}
      <div style={{ width: "100%", minWidth: 0 }}>
        <h1
          style={{
            fontSize: isMobile ? "1.45rem" : "2.15rem",
            marginBottom: "2.8rem",
            color: NEON,
            textShadow: "0 0 12px #00e6ff30",
            letterSpacing: 1.2,
            fontWeight: 800,
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
                  background: BG_CARD,
                  border: expanded
                    ? `2px solid ${NEON}`
                    : `2px solid rgba(0,230,255,0.09)`,
                  boxShadow: expanded
                    ? `0 3px 18px 0 #00e6ff22`
                    : "0 1px 7px #00e6ff0b",
                  transition: "box-shadow .16s, border .18s, background .18s",
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                  minHeight: expanded ? (isMobile ? 140 : 140) : 64,
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={() => setActive(idx)}
                onClick={() => setActive(idx)}
              >
                {/* Title + Button */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: isMobile ? "1rem 1.1rem" : "1.2rem 2rem",
                    background: expanded
                      ? "linear-gradient(90deg,#101925 75%,#00e6ff0a 100%)"
                      : "transparent",
                  }}
                >
                  <h3
                    style={{
                      fontSize: isMobile ? "1rem" : "1.17rem",
                      color: expanded ? NEON : "#fff",
                      fontWeight: expanded ? 800 : 600,
                      letterSpacing: ".1px",
                      margin: 0,
                      transition: "color .18s",
                      filter: expanded
                        ? "drop-shadow(0 1px 9px #00e6ff33)"
                        : "none",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      maxWidth: isMobile ? "70vw" : "34vw",
                    }}
                  >
                    {srv.title}
                  </h3>
                  <button
                    style={{
                      width: 34,
                      height: 34,
                      border: "none",
                      background: expanded
                        ? "radial-gradient(circle,#00e6ff 60%,#11ffff 100%)"
                        : "radial-gradient(circle,#263e4d 70%,#101925 100%)",
                      borderRadius: "50%",
                      color: expanded ? "#101925" : "#00e6ff",
                      fontSize: 20,
                      fontWeight: 800,
                      boxShadow: expanded
                        ? "0 1px 12px #00e6ff4b"
                        : "0 1px 7px #00e6ff08",
                      cursor: "pointer",
                      outline: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "background .2s, color .18s, box-shadow .15s",
                      marginLeft: 8,
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
                    maxHeight: expanded ? (isMobile ? 360 : 240) : 0,
                    opacity: expanded ? 1 : 0,
                    padding: expanded
                      ? isMobile
                        ? "0.7rem 1.1rem 1.4rem 1.1rem"
                        : "0.9rem 2rem 1.6rem 2.3rem"
                      : "0 2rem",
                    transition:
                      "all .33s cubic-bezier(.64,1.3,.58,1.02), opacity .28s",
                    color: "#b2f6fa",
                    fontSize: isMobile ? 14.7 : 15.6,
                    lineHeight: 1.65,
                    background: expanded
                      ? "linear-gradient(90deg,#101925 60%,#00e6ff0a 100%)"
                      : "none",
                    borderTop: expanded
                      ? "1px solid #00e6ff22"
                      : "1px solid transparent",
                    overflow: "auto",
                    minHeight: expanded ? 70 : 0,
                    display: expanded ? "block" : "none",
                  }}
                >
                  <div
                    style={{ marginBottom: 16 }}
                    dangerouslySetInnerHTML={{ __html: srv.desc }}
                  />
                  <a
                    href={srv.link}
                    style={{
                      background: NEON,
                      color: "#05121a",
                      borderRadius: 8,
                      fontWeight: 900,
                      padding: isMobile ? "0.7rem 1.2rem" : "0.9rem 1.8rem",
                      fontSize: isMobile ? 15 : 16.7,
                      textDecoration: "none",
                      boxShadow: "0 2px 16px #00e6ff1d",
                      transition: "background .16s",
                      display: "inline-block",
                      letterSpacing: 0.3,
                      border: "none",
                      outline: "none",
                      cursor: "pointer",
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {srv.cta}
                  </a>
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
