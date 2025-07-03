import React, { useState } from "react";

// Poprawione na format EMBED (dla iframe):
const resources = [
  {
    name: "TWINZO 3D Digital Twin",
    video: "https://www.youtube.com/embed/XPsCax4ADKY",
  },
  {
    name: "NVIDIA Omniverse Factory",
    video: "https://www.youtube.com/embed/6-DaWgg4zF8",
  },
  {
    name: "Treedis Digital Twins",
    video: "https://www.youtube.com/embed/zWki7R8pqk4",
  },
  {
    name: "Autodesk Tandem",
    video: "https://www.youtube.com/embed/6Tillp1k5UM",
  },
];

const VideoResourcesSection = ({ isMobile }) => {
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
          aria-label="Zamknij"
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
        Digital Twins in Action
      </h1>
      <p
        style={{
          fontSize: "1.08rem",
          marginBottom: "2rem",
          opacity: 0.88,
          maxWidth: "800px",
        }}
      >
        Explore these curated examples to see how digital twins are transforming
        industries:
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
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "12px",
              transition: "all 0.3s ease",
              textDecoration: "none",
              color: "#e0f7ff",
              background: "rgba(255,255,255,0.03)",
              gap: "1.25rem",
              position: "relative",
              cursor: "pointer",
              boxShadow: opened === i ? "0 0 18px #00e6ff77" : undefined,
            }}
            onClick={() => setOpened(i)}
          >
            <div
              style={{
                width: "46px",
                height: "46px",
                background: "rgba(0, 230, 255, 0.14)",
                borderRadius: "14px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "background 0.25s",
                boxShadow: opened === i ? "0 0 14px #00e6ff77" : undefined,
                fontSize: "1.62rem",
              }}
            >
              <svg width="26" height="26" viewBox="0 0 26 26">
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
            <span
              style={{ fontSize: "1.14rem", fontWeight: 600, color: "#b3fdff" }}
            >
              {item.name}
            </span>
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
