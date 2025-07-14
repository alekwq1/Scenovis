import React, { useState } from "react";

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
        background: "rgba(12,20,30,0.87)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 99999,
        animation: "fadein .23s",
        fontFamily: "Roboto, Arial, sans-serif",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "var(--bg, #19212a)",
          borderRadius: "16px",
          padding: isMobile ? 0 : 14,
          maxWidth: isMobile ? "97vw" : "680px",
          width: "100%",
          maxHeight: isMobile ? "62vh" : "68vh",
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
            background: "rgba(92,198,236,0.13)",
            border: "none",
            borderRadius: 8,
            color: "var(--accent, #5cc6ec)",
            fontWeight: 700,
            fontSize: 22,
            width: 34,
            height: 34,
            cursor: "pointer",
            zIndex: 1,
            fontFamily: "Roboto, Arial, sans-serif",
            transition: "background 0.14s",
          }}
          onClick={onClose}
        >
          ×
        </button>
        <iframe
          width={isMobile ? "92vw" : "620"}
          height={isMobile ? "200" : "350"}
          src={video}
          title={name}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{
            borderRadius: 12,
            marginTop: isMobile ? 36 : 14,
            background: "#000",
            width: "100%",
            height: isMobile ? "38vh" : "340px",
            maxWidth: isMobile ? "100%" : "640px",
          }}
        ></iframe>
        <div
          style={{
            color: "var(--accent, #5cc6ec)",
            fontWeight: 600,
            fontSize: isMobile ? "1.08rem" : "1.2rem",
            margin: "14px 0 2px",
            textAlign: "center",
            fontFamily: "Roboto, Arial, sans-serif",
          }}
        >
          {name}
        </div>
      </div>
      <style>{`
        @keyframes fadein { from {opacity:0} to {opacity:1} }
        @keyframes modalin { from {transform:scale(.92);opacity:0} to {transform:scale(1);opacity:1} }
      `}</style>
    </div>
  );

  return (
    <section id="resources" style={{ marginBottom: "1.5rem" }}>
      <h1
        style={{
          fontSize: isMobile ? "1.7rem" : "2.18rem",
          marginBottom: "1.2rem",
          color: "var(--accent, #5cc6ec)",
          fontWeight: 600,
          fontFamily: "Roboto, Arial, sans-serif",
          letterSpacing: ".02em",
        }}
      >
        {t?.resourcesTitle || "Digital Twins in Action"}
      </h1>
      <p
        style={{
          fontSize: "1.05rem",
          marginBottom: "2.2rem",
          opacity: 0.92,
          maxWidth: "800px",
          color: "var(--text, #e2e8ef)",
          fontFamily: "Roboto, Arial, sans-serif",
        }}
      >
        {t?.resourcesDesc ||
          "Explore these curated examples to see how digital twins are transforming industries:"}
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: "1.3rem",
          fontFamily: "Roboto, Arial, sans-serif",
        }}
      >
        {resources.map((item, i) => (
          <div
            key={`resource-${i}`}
            style={{
              display: "flex",
              alignItems: "center",
              padding: "1.18rem",
              border:
                opened === i
                  ? "2px solid var(--accent, #5cc6ec)"
                  : "1px solid rgba(255,255,255,0.10)",
              borderRadius: "12px",
              transition: "border 0.2s, background 0.17s, box-shadow 0.22s",
              textDecoration: "none",
              color: "var(--text, #e2e8ef)",
              background:
                opened === i ? "var(--bg, #1b232e)" : "rgba(255,255,255,0.02)",
              gap: "1.18rem",
              position: "relative",
              cursor: "pointer",
              outline: "none",
              fontFamily: "Roboto, Arial, sans-serif",
            }}
            tabIndex={0}
            onClick={() => setOpened(i)}
            onKeyDown={(e) =>
              (e.key === "Enter" || e.key === " ") && setOpened(i)
            }
          >
            <div
              style={{
                width: isMobile ? 80 : 110,
                height: isMobile ? 60 : 70,
                background: "#101925",
                borderRadius: "9px",
                overflow: "hidden",
                flexShrink: 0,
                border:
                  opened === i ? "2px solid var(--accent, #5cc6ec)" : "none",
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
                  borderRadius: "9px",
                  opacity: 0.98,
                }}
              />
              {/* Play icon */}
              <svg
                style={{
                  position: "absolute",
                  bottom: 8,
                  right: 9,
                  width: 25,
                  height: 25,
                  opacity: 0.82,
                }}
                viewBox="0 0 26 26"
              >
                <circle
                  cx="13"
                  cy="13"
                  r="12"
                  fill="#132a35"
                  stroke="var(--accent, #5cc6ec)"
                  strokeWidth="1.2"
                />
                <polygon
                  points="10.5,8.2 18,13 10.5,17.8"
                  fill="var(--accent, #5cc6ec)"
                />
              </svg>
            </div>
            <div style={{ flex: 1 }}>
              <div
                style={{
                  fontSize: "1.12rem",
                  fontWeight: 600,
                  color: "var(--accent, #5cc6ec)",
                  marginBottom: 4,
                  fontFamily: "Roboto, Arial, sans-serif",
                }}
              >
                {item.name}
              </div>
              <div
                style={{
                  color: "#bfeeff",
                  fontSize: ".98rem",
                  fontWeight: 400,
                  opacity: 0.91,
                  minHeight: 17,
                  fontFamily: "Roboto, Arial, sans-serif",
                }}
              >
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
