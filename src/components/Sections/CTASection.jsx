import React, { useState } from "react";
import { createPortal } from "react-dom";

// Zamień na swoją ścieżkę do zdjęcia!
const MY_PHOTO = "/aleks.png";

const CTASection = ({ isMobile }) => {
  const [modal, setModal] = useState(null); // null | 'demo' | 'photo'
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    // NIE dawaj e.preventDefault()!
    setSent(true);
    setTimeout(() => {
      setModal(null);
      setSent(false);
    }, 1800);
  };

  return (
    <section
      id="contact"
      style={{
        textAlign: "center",
        marginBottom: "3.5rem",
        marginTop: "2.5rem",
        position: "relative",
        zIndex: 1,
      }}
    >
      <h1
        style={{
          fontSize: isMobile ? "2.3rem" : "3.2rem",
          marginBottom: "1.1rem",
          background: "linear-gradient(90deg, #ffffff, #00e6ff 95%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          textShadow: "0 2px 32px #00e6ff55",
        }}
      >
        Ready to Transform Your Business?
      </h1>
      <p
        style={{
          fontSize: "1.17rem",
          marginBottom: "2.0rem",
          opacity: 0.88,
          maxWidth: "610px",
          marginLeft: "auto",
          marginRight: "auto",
          color: "#8eeeff",
        }}
      >
        Let's discuss how I can help you implement digital twin solutions.
      </p>

      {/* FOTO + PODPIS */}
      <div
        style={{
          width: isMobile ? 150 : 200,
          margin: "0 auto",
          marginTop: "1.1rem",
          position: "relative",
          borderRadius: "50%",
          animation:
            "appearPhoto 1.05s cubic-bezier(.41,1.38,.45,.98) 0.25s forwards",
        }}
        className="cta-photo-simple"
      >
        <img
          src={MY_PHOTO}
          alt="Aleks from Scenovis"
          className="cta-photo-img"
          loading="lazy"
          style={{
            width: "100%",
            display: "block",
            borderRadius: "50%",
            background: "#011b29",
            objectFit: "cover",
            boxShadow: "0 2px 18px #00e6ff55",
            zIndex: 2,
            position: "relative",
            transition:
              "transform .35s cubic-bezier(.53,1.4,.44,1.1), box-shadow .44s cubic-bezier(.54,1.2,.45,1.09), filter .32s",
            cursor: "pointer",
          }}
          onClick={() => setModal("photo")}
          title="Click for Aleks's unique angle"
        />
        <div
          style={{
            marginTop: 19,
            textAlign: "center",
            color: "#8eeeff",
            fontWeight: 600,
            fontSize: 18,
            letterSpacing: ".02em",
            textShadow: "0 2px 16px #00e6ff77",
          }}
        >
          Aliaksei Malyshka
          <div
            style={{
              color: "#00ffba",
              fontSize: 14,
              marginTop: 2,
              fontWeight: 500,
              opacity: 0.98,
              letterSpacing: ".01em",
            }}
          >
            Digital Twin Leader
          </div>
        </div>
        <style>{`
          @keyframes appearPhoto {
            0% { opacity: 0; transform: translateY(80px) scale(.85);}
            80% { opacity: 1; transform: translateY(-7px) scale(1.03);}
            100% { opacity: 1; transform: translateY(0) scale(1);}
          }
          .cta-photo-simple:hover .cta-photo-img {
            transform: scale(1.07) rotate(-1deg);
            filter: brightness(1.09) contrast(1.11) saturate(1.12);
            box-shadow:
              0 0 33px 9px #00e6ff99,
              0 0 66px 15px #00ffd855;
            animation: neonPulse 1.1s infinite cubic-bezier(.57,1.2,.56,1.09);
          }
          @keyframes neonPulse {
            0%,100% { box-shadow: 0 0 33px 9px #00e6ff99, 0 0 66px 15px #00ffd855; }
            50%     { box-shadow: 0 0 45px 15px #00fff999, 0 0 90px 24px #00ffd888; }
          }
        `}</style>
      </div>

      {/* Schedule a Demo tylko na środku */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2.2rem",
        }}
      >
        <button
          style={{
            background: "#00e6ff",
            color: "#050e17",
            border: "none",
            padding: "1.1rem 2.5rem",
            fontSize: "1.16rem",
            fontWeight: 700,
            cursor: "pointer",
            borderRadius: "60px",
            transition: "all 0.2s cubic-bezier(.55,1.3,.44,.9)",
            boxShadow: "0 2px 18px #00e6ff33",
            letterSpacing: "0.11em",
            outline: "none",
          }}
          onClick={() => setModal("demo")}
        >
          Contact Me
        </button>
      </div>

      {/* --- MODAL: My Unique Angle --- */}
      {modal === "photo" &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(10,20,34,0.87)",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: "fadeIn .25s",
            }}
            onClick={() => setModal(null)}
          >
            <div
              style={{
                background: "#0b1c27",
                borderRadius: 24,
                boxShadow: "0 6px 48px #00e6ff42",
                minWidth: 300,
                maxWidth: 500,
                width: "90vw",
                padding: "2.1rem 1.3rem 2.1rem",
                position: "relative",
                color: "#fff",
                textAlign: "left",
                border: "2px solid #00e6ff",
                animation: "slideInModal .5s cubic-bezier(.85,-0.05,.22,1.04)",
                fontSize: 18,
                lineHeight: 1.67,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={{
                  position: "absolute",
                  top: 13,
                  right: 16,
                  background: "#00e6ff",
                  color: "#0b1c27",
                  border: "none",
                  borderRadius: "50%",
                  width: 35,
                  height: 35,
                  fontSize: 21,
                  fontWeight: 800,
                  cursor: "pointer",
                  boxShadow: "0 1px 8px #00e6ff88",
                }}
                onClick={() => setModal(null)}
                aria-label="Close"
              >
                ×
              </button>
              <div
                style={{
                  color: "#00e6ff",
                  fontWeight: 800,
                  fontSize: 22,
                  marginBottom: "1.1rem",
                  textShadow: "0 2px 16px #00e6ff77",
                  textAlign: "center",
                  width: "100%",
                }}
              >
                My Unique Angle{" "}
                <span style={{ fontSize: 15, color: "#00ffd8" }}></span>
              </div>
              <div
                style={{
                  background: "rgba(15,29,40,0.88)",
                  borderRadius: 16,
                  padding: "1.1rem 1.3rem",
                  maxWidth: 410,
                  boxShadow: "0 4px 28px #00e6ff19",
                  margin: "0 auto",
                }}
              >
                <SectionBlock
                  title="Kim jestem?"
                  desc="Entuzjasta nowych technologii, z pasją do wdrażania cyfrowych rozwiązań, które mają realny wpływ na firmy i ludzi."
                />
                <SectionBlock
                  title="Dlaczego warto mi zaufać?"
                  desc="Pracowałem z największymi zespołami i korporacjami w Polsce i Europie, ale zawsze najważniejsze były dla mnie relacje i konkretne efekty dla użytkowników."
                />
                <SectionBlock
                  title="Co mnie napędza?"
                  desc="Lubię, gdy technologia naprawdę służy ludziom i biznesowi. Fascynuje mnie, jak Digital Twin usprawnia życie, pracę i bezpieczeństwo — nie tylko jest „fajny”, ale rozwiązuje prawdziwe problemy."
                />
                <SectionBlock
                  title="Co zrobię dla Ciebie?"
                  desc="Pomogę wdrożyć cyfrowego bliźniaka w Twojej firmie, uproszczę procesy, pokażę potencjał technologii i przełożę cyfrowe pomysły na wymierne korzyści."
                />
              </div>
            </div>
            <style>{`
              @keyframes fadeIn { 0% { opacity:0 } 100% { opacity:1 } }
              @keyframes slideInModal {
                0% { opacity:0; transform:scale(.9) translateY(70px);}
                80% { opacity:1; transform:scale(1.02) translateY(-6px);}
                100% { opacity:1; transform:scale(1) translateY(0);}
              }
            `}</style>
          </div>,
          document.body
        )}

      {/* --- MODAL SCHEDULE A DEMO --- */}
      {modal === "demo" &&
        createPortal(
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              background: "rgba(10,20,34,0.88)",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: "fadeIn .27s",
            }}
            onClick={() => setModal(null)}
          >
            <div
              style={{
                background: "#0b1c27",
                borderRadius: 22,
                boxShadow: "0 6px 48px #00e6ff42",
                minWidth: 300,
                maxWidth: 420,
                width: "92vw",
                padding: "2.2rem 1.2rem 1.6rem",
                position: "relative",
                color: "#fff",
                textAlign: "left",
                border: "2px solid #00e6ff",
                animation: "slideInModal .5s cubic-bezier(.85,-0.05,.22,1.04)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "#00e6ff",
                  color: "#0b1c27",
                  border: "none",
                  borderRadius: "50%",
                  width: 35,
                  height: 35,
                  fontSize: 21,
                  fontWeight: 800,
                  cursor: "pointer",
                  boxShadow: "0 1px 8px #00e6ff88",
                }}
                onClick={() => setModal(null)}
                aria-label="Close"
              >
                ×
              </button>
              <h2
                style={{
                  color: "#00e6ff",
                  fontSize: "1.26rem",
                  marginBottom: "1.2rem",
                  textAlign: "center",
                  fontWeight: 800,
                }}
              >
                Schedule a Demo
              </h2>
              {sent ? (
                <div
                  style={{
                    color: "#00ffba",
                    textAlign: "center",
                    fontSize: 17,
                    padding: "1.2rem 0",
                  }}
                >
                  Thank you! <br />
                  We’ll get back to you soon.
                </div>
              ) : (
                <form
                  name="demo"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  style={{ margin: 0 }}
                >
                  {/* HIDDEN FIELD - required for Netlify */}
                  <input type="hidden" name="form-name" value="demo" />
                  <div style={{ marginBottom: 16 }}>
                    <label htmlFor="name" style={{ fontWeight: 600 }}>
                      Your Name:
                    </label>
                    <input
                      required
                      id="name"
                      name="name"
                      style={inputStyle}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label htmlFor="email" style={{ fontWeight: 600 }}>
                      Your Email:
                    </label>
                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      style={inputStyle}
                      placeholder="Enter your email"
                    />
                  </div>
                  <div style={{ marginBottom: 18 }}>
                    <label htmlFor="msg" style={{ fontWeight: 600 }}>
                      Describe your needs:
                    </label>
                    <textarea
                      required
                      id="msg"
                      name="msg"
                      rows={4}
                      style={{
                        ...inputStyle,
                        minHeight: 70,
                        resize: "vertical",
                      }}
                      placeholder="How can I help you?"
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "0.93rem 0",
                      borderRadius: 28,
                      fontWeight: 700,
                      fontSize: "1.08rem",
                      background: "#00e6ff",
                      color: "#032d3f",
                      border: "none",
                      boxShadow: "0 1px 8px #00e6ff55",
                      cursor: "pointer",
                      marginTop: 10,
                    }}
                  >
                    Send Request
                  </button>
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: 8,
                      color: "#8eeeff",
                      fontSize: 14,
                    }}
                  >
                    <span style={{ opacity: 0.7 }}>
                      Your message will go to Scenovis team!
                    </span>
                  </div>
                </form>
              )}
            </div>
            <style>{`
              @keyframes fadeIn { 0% { opacity:0 } 100% { opacity:1 } }
              @keyframes slideInModal {
                0% { opacity:0; transform:scale(.9) translateY(70px);}
                80% { opacity:1; transform:scale(1.02) translateY(-6px);}
                100% { opacity:1; transform:scale(1) translateY(0);}
              }
            `}</style>
          </div>,
          document.body
        )}
    </section>
  );
};

// Czytelna sekcja tekstowa
function SectionBlock({ title, desc }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div
        style={{
          color: "#00e6ff",
          fontWeight: 700,
          fontSize: 17.5,
          marginBottom: 4,
          letterSpacing: 0.01,
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: "#e7fdff",
          fontSize: 16,
          lineHeight: 1.63,
          opacity: 0.97,
          fontWeight: 500,
        }}
      >
        {desc}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  marginTop: 6,
  borderRadius: 12,
  padding: "0.8rem 1.1rem",
  fontSize: 15.5,
  border: "1.8px solid #00e6ff",
  background: "#172735",
  color: "#fff",
  marginBottom: 0,
  outline: "none",
  boxSizing: "border-box",
  fontWeight: 500,
};

export default CTASection;
