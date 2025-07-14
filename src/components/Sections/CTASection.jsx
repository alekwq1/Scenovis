import React, { useState } from "react";
import { createPortal } from "react-dom";

// Sekcja CTA – minimalistyczny styl, większe zdjęcie i delikatny efekt hover
const CTASection = ({ isMobile, lang, t }) => {
  const [modal, setModal] = useState(null); // null | 'demo' | 'photo'
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString(),
    })
      .then(() => setSent(true))
      .catch((error) => alert(error));
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
        fontFamily: "Roboto, Arial, sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: isMobile ? "2.1rem" : "2.7rem",
          marginBottom: "1.05rem",
          color: "var(--accent, #5cc6ec)",
          fontWeight: 700,
          letterSpacing: "0.01em",
          fontFamily: "Roboto, Arial, sans-serif",
        }}
      >
        {t.ctaTitle}
      </h1>
      <p
        style={{
          fontSize: "1.12rem",
          marginBottom: "2.0rem",
          opacity: 0.91,
          maxWidth: "610px",
          marginLeft: "auto",
          marginRight: "auto",
          color: "var(--text, #e2e8ef)",
          fontFamily: "Roboto, Arial, sans-serif",
        }}
      >
        {t.ctaDesc}
      </p>

      {/* FOTO + PODPIS */}
      <div
        className="cta-photo-simple"
        style={{
          width: isMobile ? 190 : 250, // WIĘKSZY rozmiar
          margin: "0 auto",
          marginTop: "1.4rem",
          position: "relative",
          borderRadius: "50%",
          transition: "box-shadow 0.26s cubic-bezier(.41,1.38,.45,.98)",
        }}
      >
        <img
          src={t.ctaPhoto || "/aleks.png"}
          alt={t.ctaPhotoAlt || "Aleks from Scenovis"}
          className="cta-photo-img"
          loading="lazy"
          style={{
            width: "100%",
            display: "block",
            borderRadius: "50%",
            background: "#101925",
            objectFit: "cover",
            boxShadow: "0 2px 16px #5cc6ec33",
            zIndex: 2,
            position: "relative",
            cursor: "pointer",
            transition:
              "transform .31s cubic-bezier(.53,1.3,.44,1.1), box-shadow .35s cubic-bezier(.54,1.2,.45,1.09), filter .33s",
          }}
          onClick={() => setModal("photo")}
          title={t.ctaPhotoTitle || "Kliknij by powiększyć"}
        />
        <div
          style={{
            marginTop: 21,
            textAlign: "center",
            color: "#bfeeff",
            fontWeight: 600,
            fontSize: 19,
            letterSpacing: ".01em",
            fontFamily: "Roboto, Arial, sans-serif",
          }}
        >
          Aliaksei Malyshka
          <div
            style={{
              color: "var(--accent, #5cc6ec)",
              fontSize: 15,
              marginTop: 2,
              fontWeight: 500,
              opacity: 0.98,
              letterSpacing: ".01em",
              fontFamily: "Roboto, Arial, sans-serif",
            }}
          >
            {t.ctaRole || "Digital Twin Leader"}
          </div>
        </div>
        <style>{`
          .cta-photo-simple:hover .cta-photo-img {
            transform: scale(1.042) rotate(-1.5deg);
            filter: brightness(1.05) contrast(1.07) saturate(1.04);
            box-shadow: 0 0 0 0 #5cc6ec00, 0 0 40px 0 #5cc6ec33;
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
            background: "var(--accent, #5cc6ec)",
            color: "#0b1c27",
            border: "none",
            padding: "1.08rem 2.2rem",
            fontSize: "1.12rem",
            fontWeight: 700,
            cursor: "pointer",
            borderRadius: "60px",
            transition: "background 0.15s, color 0.13s",
            letterSpacing: "0.07em",
            outline: "none",
            fontFamily: "Roboto, Arial, sans-serif",
          }}
          onClick={() => setModal("demo")}
        >
          {t.ctaButton}
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
              background: "rgba(16,22,36,0.87)",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: "fadeIn .21s",
              fontFamily: "Roboto, Arial, sans-serif",
            }}
            onClick={() => setModal(null)}
          >
            <div
              style={{
                background: "#151b23",
                borderRadius: 20,
                boxShadow: "0 6px 30px #5cc6ec33",
                minWidth: 240,
                maxWidth: 470,
                width: "90vw",
                padding: "1.7rem 1.2rem 1.7rem",
                position: "relative",
                color: "#e2e8ef",
                textAlign: "left",
                border: "2px solid var(--accent, #5cc6ec)",
                animation: "slideInModal .36s",
                fontSize: 17,
                lineHeight: 1.6,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                maxHeight: "90vh",
                overflowY: "auto",
                fontFamily: "Roboto, Arial, sans-serif",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={{
                  position: "absolute",
                  top: 10,
                  right: 14,
                  background: "var(--accent, #5cc6ec)",
                  color: "#151b23",
                  border: "none",
                  borderRadius: "50%",
                  width: 33,
                  height: 33,
                  fontSize: 18,
                  fontWeight: 800,
                  cursor: "pointer",
                  boxShadow: "0 1px 8px #5cc6ec22",
                }}
                onClick={() => setModal(null)}
                aria-label="Close"
              >
                ×
              </button>
              <div
                style={{
                  color: "var(--accent, #5cc6ec)",
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: "0.8rem",
                  textAlign: "center",
                  width: "100%",
                  fontFamily: "Roboto, Arial, sans-serif",
                }}
              >
                {t.ctaModalTitle}
              </div>
              <div
                style={{
                  background: "#19212a",
                  borderRadius: 14,
                  padding: "0.9rem 1.1rem",
                  maxWidth: 410,
                  boxShadow: "0 4px 20px #5cc6ec0c",
                  margin: "0 auto",
                }}
              >
                <SectionBlock
                  title={t.ctaModal1.title}
                  desc={t.ctaModal1.desc}
                />
                <SectionBlock
                  title={t.ctaModal2.title}
                  desc={t.ctaModal2.desc}
                />
                <SectionBlock
                  title={t.ctaModal3.title}
                  desc={t.ctaModal3.desc}
                />
                <SectionBlock
                  title={t.ctaModal4.title}
                  desc={t.ctaModal4.desc}
                />
              </div>
            </div>
            <style>{`
              @keyframes fadeIn { 0% { opacity:0 } 100% { opacity:1 } }
              @keyframes slideInModal {
                0% { opacity:0; transform:scale(.93) translateY(60px);}
                80% { opacity:1; transform:scale(1.01) translateY(-5px);}
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
              background: "rgba(16,22,36,0.90)",
              zIndex: 9999,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation: "fadeIn .23s",
              fontFamily: "Roboto, Arial, sans-serif",
            }}
            onClick={() => setModal(null)}
          >
            <div
              style={{
                background: "#151b23",
                borderRadius: 18,
                boxShadow: "0 6px 32px #5cc6ec23",
                minWidth: 260,
                maxWidth: 410,
                width: "92vw",
                padding: "1.7rem 1.1rem 1.2rem",
                position: "relative",
                color: "#e2e8ef",
                textAlign: "left",
                border: "2px solid var(--accent, #5cc6ec)",
                animation: "slideInModal .36s",
                fontFamily: "Roboto, Arial, sans-serif",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                style={{
                  position: "absolute",
                  top: 12,
                  right: 14,
                  background: "var(--accent, #5cc6ec)",
                  color: "#151b23",
                  border: "none",
                  borderRadius: "50%",
                  width: 33,
                  height: 33,
                  fontSize: 18,
                  fontWeight: 800,
                  cursor: "pointer",
                  boxShadow: "0 1px 8px #5cc6ec22",
                }}
                onClick={() => setModal(null)}
                aria-label="Close"
              >
                ×
              </button>
              <h2
                style={{
                  color: "var(--accent, #5cc6ec)",
                  fontSize: "1.12rem",
                  marginBottom: "1.05rem",
                  textAlign: "center",
                  fontWeight: 700,
                  fontFamily: "Roboto, Arial, sans-serif",
                }}
              >
                {t.ctaDemoTitle}
              </h2>
              {sent ? (
                <div
                  style={{
                    color: "#00ffba",
                    textAlign: "center",
                    fontSize: 16,
                    padding: "1.1rem 0",
                  }}
                >
                  {t.ctaDemoThanks}
                </div>
              ) : (
                <form
                  name="demo"
                  method="POST"
                  data-netlify="true"
                  onSubmit={handleSubmit}
                  style={{ margin: 0 }}
                >
                  <input type="hidden" name="form-name" value="demo" />
                  <div style={{ marginBottom: 14 }}>
                    <label htmlFor="name" style={{ fontWeight: 600 }}>
                      {t.ctaFormName}
                    </label>
                    <input
                      required
                      id="name"
                      name="name"
                      style={inputStyle}
                      placeholder={t.ctaFormNamePh}
                    />
                  </div>
                  <div style={{ marginBottom: 14 }}>
                    <label htmlFor="email" style={{ fontWeight: 600 }}>
                      {t.ctaFormEmail}
                    </label>
                    <input
                      required
                      id="email"
                      name="email"
                      type="email"
                      style={inputStyle}
                      placeholder={t.ctaFormEmailPh}
                    />
                  </div>
                  <div style={{ marginBottom: 16 }}>
                    <label htmlFor="msg" style={{ fontWeight: 600 }}>
                      {t.ctaFormMsg}
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
                      placeholder={t.ctaFormMsgPh}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      width: "100%",
                      padding: "0.92rem 0",
                      borderRadius: 22,
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      background: "var(--accent, #5cc6ec)",
                      color: "#032d3f",
                      border: "none",
                      boxShadow: "0 1px 8px #5cc6ec15",
                      cursor: "pointer",
                      marginTop: 10,
                      fontFamily: "Roboto, Arial, sans-serif",
                    }}
                  >
                    {t.ctaSendBtn}
                  </button>
                  <div
                    style={{
                      textAlign: "center",
                      marginTop: 7,
                      color: "#bfeeff",
                      fontSize: 13,
                      opacity: 0.75,
                      fontFamily: "Roboto, Arial, sans-serif",
                    }}
                  >
                    {t.ctaFormNote}
                  </div>
                </form>
              )}
            </div>
            <style>{`
              @keyframes fadeIn { 0% { opacity:0 } 100% { opacity:1 } }
              @keyframes slideInModal {
                0% { opacity:0; transform:scale(.92) translateY(60px);}
                80% { opacity:1; transform:scale(1.01) translateY(-5px);}
                100% { opacity:1; transform:scale(1) translateY(0);}
              }
            `}</style>
          </div>,
          document.body
        )}
    </section>
  );
};

// Blok sekcji modalowej
function SectionBlock({ title, desc }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div
        style={{
          color: "var(--accent, #5cc6ec)",
          fontWeight: 700,
          fontSize: 16.5,
          marginBottom: 4,
          letterSpacing: 0.01,
          fontFamily: "Roboto, Arial, sans-serif",
        }}
      >
        {title}
      </div>
      <div
        style={{
          color: "#e2e8ef",
          fontSize: 15,
          lineHeight: 1.6,
          opacity: 0.97,
          fontWeight: 500,
          fontFamily: "Roboto, Arial, sans-serif",
        }}
      >
        {desc}
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  marginTop: 5,
  borderRadius: 10,
  padding: "0.77rem 1.06rem",
  fontSize: 15,
  border: "1.5px solid var(--accent, #5cc6ec)",
  background: "#172735",
  color: "#e2e8ef",
  marginBottom: 0,
  outline: "none",
  boxSizing: "border-box",
  fontWeight: 500,
  fontFamily: "Roboto, Arial, sans-serif",
};

export default CTASection;
