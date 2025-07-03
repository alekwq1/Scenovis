import React, { useState } from "react";

// Pełne zasoby video + opcjonalny krótki opis PL/EN w t
const resources = [
  {
    name: "TWINZO 3D Digital Twin",
    video: "https://www.youtube.com/embed/XPsCax4ADKY",
    yt: "XPsCax4ADKY",
    key: "twinzo",
  },
  {
    name: "NVIDIA Omniverse Factory",
    video: "https://www.youtube.com/embed/6-DaWgg4zF8",
    yt: "6-DaWgg4zF8",
    key: "omniverse",
  },
  {
    name: "Treedis Digital Twins",
    video: "https://www.youtube.com/embed/zWki7R8pqk4",
    yt: "zWki7R8pqk4",
    key: "treedis",
  },
  {
    name: "Autodesk Tandem",
    video: "https://www.youtube.com/embed/6Tillp1k5UM",
    yt: "6Tillp1k5UM",
    key: "tandem",
  },
];

const getYoutubeThumb = (ytId) =>
  `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;

const VideoResourcesSection = ({ isMobile, lang, t }) => {
  const [opened, setOpened] = useState(null);

  // Modal video box
  const Modal = ({ video, name, onClose }) => (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(6,12,22,0.85)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        animation: "fadein .23s",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "rgba(18,38,48,1)",
          borderRadius: "18px",
          padding: isMobile ? 0 : 16,
          boxShadow: "0 0 60px #00e6ff55",
          maxWidth: isMobile ? "94vw" : "740px",
          width: "100%",
          maxHeight: isMobile ? "62vh" : "67vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          animation: "modalin .33s",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          aria-label={lang === "pl" ? "Zamknij" : "Close"}
          style={{
            position: "absolute",
            right: 10,
            top: 10,
            background: "rgba(0,230,255,0.09)",
            border: "none",
            borderRadius: 10,
            color: "#00e6ff",
            fontWeight: 800,
            fontSize: 23,
            width: 36,
            height: 36,
            cursor: "pointer",
            zIndex: 1,
            transition: "background 0.15s",
          }}
          onClick={onClose}
        >
          ×
        </button>
        <iframe
          width={isMobile ? "90vw" : "670"}
          height={isMobile ? "200" : "378"}
          src={video}
          title={name}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            borderRadius: 14,
            marginTop: isMobile ? 36 : 16,
            background: "#000",
            boxShadow: "0 0 30px #00e6ff22",
            width: "100%",
            height: isMobile ? "38vh" : "340px",
            maxWidth: isMobile ? "100%" : "700px",
          }}
        ></iframe>
        <div
          style={{
            color: "#00e6ff",
            fontWeight: 700,
            fontSize: isMobile ? "1.13rem" : "1.33rem",
            margin: "14px 0 2px",
            textAlign: "center",
          }}
        >
          {name}
        </div>
      </div>
      <style>{`
        @keyframes fadein { from {opacity:0} to {opacity:1} }
        @keyframes modalin { from {transform:scale(.87);opacity:0} to {transform:scale(1);opacity:1} }
      `}</style>
    </div>
  );

  return (
    <section id="resources" style={{ marginBottom: "3rem" }}>
      <h1
        style={{
          fontSize: isMobile ? "2.2rem" : "2.7rem",
          marginBottom: "1.2rem",
          color: "#00e6ff",
        }}
      >
        {t?.resourcesTitle || "Digital Twins in Action"}
      </h1>
      <p
        style={{
          fontSize: "1.08rem",
          marginBottom: "2rem",
          opacity: 0.88,
          maxWidth: "800px",
        }}
      >
        {t?.resourcesDesc ||
          "Explore these curated examples to see how digital twins are transforming industries:"}
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: "1.5rem",
        }}
      >
        {resources.map((item, i) => (
          <div
            key={`resource-${i}`}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "1.2rem",
              border:
                opened === i
                  ? "2px solid #00e6ff"
                  : "1px solid rgba(255,255,255,0.13)",
              borderRadius: "14px",
              transition: "all 0.3s cubic-bezier(.55,1.3,.44,.9)",
              textDecoration: "none",
              color: "#e0f7ff",
              background:
                opened === i
                  ? "linear-gradient(110deg, #03111c 60%, #043c51 120%)"
                  : "rgba(255,255,255,0.03)",
              gap: "1.25rem",
              position: "relative",
              cursor: "pointer",
              boxShadow:
                opened === i ? "0 0 28px #00e6ff88" : "0 1px 6px #00e6ff17",
              minHeight: 110,
              outline: "none",
            }}
            tabIndex={0}
            onClick={() => setOpened(i)}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && setOpened(i)
            }
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.035)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                width: isMobile ? 90 : 120,
                height: isMobile ? 64 : 76,
                background: "#011b29",
                borderRadius: "10px",
                overflow: "hidden",
                flexShrink: 0,
                boxShadow: "0 2px 16px #00e6ff33",
                border: opened === i ? "2px solid #00e6ff" : "none",
                transition: "border 0.2s",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <img
                src={getYoutubeThumb(item.yt)}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "10px",
                  opacity: 0.98,
                }}
              />
              <svg
                style={{
                  position: "absolute",
                  bottom: 8,
                  right: 9,
                  width: 29,
                  height: 29,
                  filter: "drop-shadow(0 2px 7px #00e6ff55)",
                  opacity: 0.88,
                }}
                viewBox="0 0 26 26"
              >
                <circle
                  cx="13"
                  cy="13"
                  r="12.3"
                  fill="#002831"
                  stroke="#00e6ff"
                  strokeWidth="1.4"
                />
                <polygon points="10.5,8.2 18,13 10.5,17.8" fill="#00e6ff" />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "1.14rem",
                  fontWeight: 600,
                  color: "#b3fdff",
                  marginBottom: 5,
                }}
              >
                {item.name}
              </div>
              <div
                style={{
                  color: "#8defff",
                  fontSize: ".98rem",
                  fontWeight: 500,
                  opacity: 0.92,
                  minHeight: 19,
                }}
              >
                {/* Krótki opis z tłumaczeń */}
                {t?.resourcesShort?.[item.key] || ""}
              </div>
            </div>
          </div>
        ))}
      </div>
      {typeof opened === "number" && (
        <Modal
          video={resources[opened].video}
          name={resources[opened].name}
          onClose={() => setOpened(null)}
        />
      )}
    </section>
  );
};

export default VideoResourcesSection;
