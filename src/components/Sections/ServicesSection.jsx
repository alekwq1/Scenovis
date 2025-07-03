import React, { useState } from "react";

const services = [
  {
    title: "3D Modeling & Interactive Visualization",
    desc: (
      <>
        Tworzenie modeli 3D na podstawie dokumentacji, skanów i zdjęć. <br />
        Interaktywne spacery 3D (Expo, VR/AR, makiety cyfrowe). <br />
        Prezentacje na targach, na stronie lub w metaversum.
      </>
    ),
    img: "/services/visualization.png",
    tiers: [
      {
        name: "Basic",
        price: "od 3500 zł",
        features: ["1 model", "Spacer 3D online"],
      },
      {
        name: "Medium",
        price: "od 6900 zł",
        features: ["2-3 modele", "Expo/VR/AR", "Personalizacja"],
      },
      {
        name: "Pro",
        price: "od 13 000 zł",
        features: [
          "Dowolna liczba modeli",
          "Integracja na stronie",
          "Custom funkcje",
        ],
      },
    ],
  },
  {
    title: "Facility Management & Lean Digital Twin",
    desc: (
      <>
        Cyfrowy bliźniak istniejącego obiektu z analizą Lean. <br />
        Monitoring postępów, awarii, alarmów – integracja z Power BI. <br />
        Wirtualne zarządzanie obiektem, raporty i powiadomienia.
      </>
    ),
    img: "/services/fm_dtw.png",
    tiers: [
      {
        name: "Basic",
        price: "od 3900 zł",
        features: ["Digital Twin", "Dashboard podglądowy"],
      },
      {
        name: "Medium",
        price: "od 7900 zł",
        features: ["Lean Analytics", "Raporty Power BI", "Alerty"],
      },
      {
        name: "Pro",
        price: "od 16 000 zł",
        features: [
          "Pełna integracja FM",
          "Custom analizy",
          "Automatyczne raportowanie",
        ],
      },
    ],
  },
  {
    title: "Szkolenia 3D & Platforma CDE (ISO 19650)",
    desc: (
      <>
        Szkolenia z modelowania, zarządzania CDE/BIM, standardy ISO 19650.{" "}
        <br />
        Wdrożenie platformy do zarządzania dokumentacją. <br />
        Personalizowane szkolenia dla zespołów.
      </>
    ),
    img: "/services/training.png",
    tiers: [
      {
        name: "Basic",
        price: "od 990 zł",
        features: ["Szkolenie online", "Materiały PDF"],
      },
      {
        name: "Medium",
        price: "od 2800 zł",
        features: ["Szkolenie live", "Platforma CDE", "Konsultacje 1:1"],
      },
      {
        name: "Pro",
        price: "od 5200 zł",
        features: [
          "Audyt ISO 19650",
          "Personalizowane wdrożenie",
          "Certyfikaty",
        ],
      },
    ],
  },
  {
    title: "Cyfrowy Bliźniak Budowy + Analiza Power BI",
    desc: (
      <>
        Tworzenie digital twin inwestycji w trakcie budowy. <br />
        Analiza postępu prac, integracja z Power BI, analiza kosztów Lean.{" "}
        <br />
        Interaktywny raport i widok 3D postępu na żywo.
      </>
    ),
    img: "/services/construction_twin.png",
    tiers: [
      {
        name: "Basic",
        price: "od 3900 zł",
        features: ["Podstawowy digital twin", "Widok postępu"],
      },
      {
        name: "Medium",
        price: "od 8300 zł",
        features: ["Power BI dashboard", "Raporty postępu", "Analiza kosztów"],
      },
      {
        name: "Pro",
        price: "od 17 000 zł",
        features: [
          "Pełna integracja harmonogramu",
          "Live update",
          "Custom integracje",
        ],
      },
    ],
  },
  {
    title: "Prezentacja BIM 4D/5D & Standardy EIR/BEP",
    desc: (
      <>
        Interaktywne prezentacje BIM 4D (czas) i 5D (koszty). <br />
        Opracowanie standardów EIR, BEP, implementacja procesów. <br />
        Wsparcie kosztorysowania i harmonogramowania w środowisku BIM.
      </>
    ),
    img: "/services/bim_4d5d.png",
    tiers: [
      {
        name: "Basic",
        price: "od 2900 zł",
        features: ["BIM 4D Viewer", "Wstępne EIR/BEP"],
      },
      {
        name: "Medium",
        price: "od 7300 zł",
        features: ["Analiza 5D", "Dokumentacja EIR/BEP", "Kosztorysowanie"],
      },
      {
        name: "Pro",
        price: "od 15 000 zł",
        features: [
          "Custom prezentacje 4D/5D",
          "Zarządzanie projektem BIM",
          "Integracje API",
        ],
      },
    ],
  },
];

const NEON = "#00e6ff";
const BG_CARD = "rgba(10, 22, 30, 0.99)";

const ServicesSection = ({ isMobile }) => {
  const [active, setActive] = useState(0);
  const [activeTier, setActiveTier] = useState(null);

  return (
    <section
      id="services"
      style={{
        marginBottom: "3.5rem",
        maxWidth: 1200,
        margin: "0 auto 4rem auto",
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "450px 1fr",
        gap: isMobile ? "2.2rem" : "3.2rem",
        alignItems: "flex-start",
        minHeight: isMobile ? 360 : 470,
        position: "relative",
      }}
    >
      {/* LEWA KOLUMNA - ZDJĘCIE sticky */}
      <div
        style={{
          position: isMobile ? "relative" : "sticky",
          top: isMobile ? "auto" : "7.5rem",
          height: isMobile ? 240 : 420,
          minHeight: isMobile ? 0 : 340,
          width: "100%",
          background: "#101925",
          borderRadius: 24,
          boxShadow: `0 6px 36px 0 ${NEON}17`,
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {services.map((srv, idx) => (
          <img
            key={srv.img}
            src={srv.img}
            alt={srv.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              opacity: idx === active ? 1 : 0,
              transition: "opacity 0.45s cubic-bezier(.5,1.5,.5,1.05)",
              zIndex: idx === active ? 2 : 0,
              filter:
                idx === active ? "drop-shadow(0 0 24px #00e6ff55)" : "none",
              borderRadius: 24,
            }}
            draggable={false}
          />
        ))}
      </div>
      {/* PRAWA KOLUMNA - LISTA USŁUG */}
      <div style={{ width: "100%", minWidth: 0 }}>
        <h1
          style={{
            fontSize: isMobile ? "2.1rem" : "2.6rem",
            marginBottom: "2rem",
            color: NEON,
            textShadow: "0 0 12px #00e6ff44",
            letterSpacing: 1.5,
            fontWeight: 800,
          }}
        >
          Nasze Usługi Digital Twin & BIM
        </h1>
        <div>
          {services.map((srv, idx) => {
            const expanded = idx === active;
            return (
              <div
                key={srv.title}
                style={{
                  marginBottom: "1.6rem",
                  borderRadius: 17,
                  background: BG_CARD,
                  border: expanded
                    ? `2.5px solid ${NEON}`
                    : `2.5px solid rgba(0,230,255,0.07)`,
                  boxShadow: expanded
                    ? `0 3px 22px 0 #00e6ff33`
                    : "0 1px 7px #00e6ff10",
                  transition: "box-shadow .16s, border .18s, background .18s",
                  overflow: "hidden",
                  cursor: "pointer",
                  position: "relative",
                }}
                onMouseEnter={() => setActive(idx)}
                onClick={() => setActive(idx)}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: isMobile ? "1.2rem 1.2rem" : "1.4rem 2.1rem",
                    background: expanded
                      ? "linear-gradient(90deg,#101925 75%,#00e6ff08 100%)"
                      : "transparent",
                  }}
                >
                  <h3
                    style={{
                      fontSize: isMobile ? "1.14rem" : "1.26rem",
                      color: expanded ? NEON : "#fff",
                      fontWeight: expanded ? 800 : 600,
                      letterSpacing: ".2px",
                      margin: 0,
                      transition: "color .18s",
                      filter: expanded
                        ? "drop-shadow(0 1px 9px #00e6ff33)"
                        : "none",
                    }}
                  >
                    {srv.title}
                  </h3>
                  <button
                    style={{
                      width: 36,
                      height: 36,
                      border: "none",
                      background: expanded
                        ? "radial-gradient(circle,#00e6ff 60%,#11ffff 100%)"
                        : "radial-gradient(circle,#263e4d 70%,#101925 100%)",
                      borderRadius: "50%",
                      color: expanded ? "#101925" : "#00e6ff",
                      fontSize: 22,
                      fontWeight: 800,
                      boxShadow: expanded
                        ? "0 1px 12px #00e6ff66"
                        : "0 1px 7px #00e6ff10",
                      cursor: "pointer",
                      outline: "none",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "background .2s, color .18s, box-shadow .15s",
                      marginLeft: 8,
                    }}
                    aria-label={expanded ? "Hide details" : "Show details"}
                  >
                    {expanded ? "−" : "+"}
                  </button>
                </div>
                <div
                  style={{
                    maxHeight: expanded ? 290 : 0,
                    opacity: expanded ? 1 : 0,
                    padding: expanded
                      ? isMobile
                        ? "0.6rem 1.2rem 1.1rem 1.5rem"
                        : "0.7rem 2.6rem 1.3rem 2.9rem"
                      : "0 2rem",
                    transition:
                      "all .32s cubic-bezier(.64,1.3,.58,1.02), opacity .28s",
                    color: "#8eeeff",
                    fontSize: isMobile ? 15 : 16.5,
                    lineHeight: 1.65,
                    background: expanded
                      ? "linear-gradient(90deg,#101925 60%,#00e6ff08 100%)"
                      : "none",
                    borderTop: expanded
                      ? "1px solid #00e6ff33"
                      : "1px solid transparent",
                  }}
                >
                  {expanded && (
                    <>
                      <span style={{ display: "block", marginBottom: 10 }}>
                        {srv.desc}
                      </span>
                      {/* Pakiety */}
                      <div
                        style={{
                          display: "flex",
                          gap: 14,
                          flexWrap: "wrap",
                          marginTop: 8,
                        }}
                      >
                        {srv.tiers.map((tier, tierIdx) => (
                          <div
                            key={tier.name}
                            style={{
                              flex: "1 1 120px",
                              minWidth: 115,
                              background:
                                "linear-gradient(135deg,#1a2633 90%,#00e6ff19 100%)",
                              borderRadius: 12,
                              border:
                                activeTier === `${idx}-${tierIdx}`
                                  ? `2px solid ${NEON}`
                                  : `1.3px solid #00e6ff33`,
                              padding: "1.1rem 1rem 1rem",
                              boxShadow:
                                activeTier === `${idx}-${tierIdx}`
                                  ? "0 1px 10px #00e6ff44"
                                  : "none",
                              cursor: "pointer",
                              transition: "border .18s, box-shadow .17s",
                            }}
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveTier(`${idx}-${tierIdx}`);
                            }}
                          >
                            <div
                              style={{
                                fontWeight: 900,
                                fontSize: 16.2,
                                color: NEON,
                                letterSpacing: 0.7,
                                marginBottom: 5,
                              }}
                            >
                              {tier.name}
                            </div>
                            <div
                              style={{
                                fontWeight: 700,
                                fontSize: 17.5,
                                color: "#eafffa",
                                marginBottom: 6,
                              }}
                            >
                              {tier.price}
                            </div>
                            <ul style={{ margin: 0, padding: "0 0 0 18px" }}>
                              {tier.features.map((f, fIdx) => (
                                <li
                                  key={fIdx}
                                  style={{
                                    fontSize: 14.6,
                                    color: "#b2f6fa",
                                    marginBottom: 3,
                                  }}
                                >
                                  {f}
                                </li>
                              ))}
                            </ul>
                            <button
                              style={{
                                width: "100%",
                                background: NEON,
                                color: "#05121a",
                                border: "none",
                                borderRadius: 8,
                                padding: "7px 0",
                                marginTop: 10,
                                fontWeight: 800,
                                fontSize: 15,
                                cursor: "pointer",
                                boxShadow: "0 2px 8px #00e6ff38",
                                transition: "background .16s",
                              }}
                              onClick={(e) => {
                                e.stopPropagation();
                                alert(
                                  `Wybrano pakiet: ${srv.title} – ${tier.name}\nSkontaktujemy się z wyceną!`
                                );
                              }}
                            >
                              Zamów
                            </button>
                          </div>
                        ))}
                      </div>
                    </>
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
