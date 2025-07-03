import React from "react";

const HotspotInfoPanel = ({ open, hotspot, onClose, isMobile }) => {
  if (!open || !hotspot) return null;

  return (
    <div
      style={{
        position: "relative",
        maxWidth: isMobile ? 330 : 380,
        minWidth: isMobile ? 215 : 320,
        boxShadow: "0 0 38px #00e6ff66",
        borderRadius: 20,
        zIndex: 1000,
        marginLeft: isMobile ? 0 : 24,
        marginTop: isMobile ? 14 : 0,
        background: "rgba(10, 25, 40, 0.95)",
        border: "1px solid #00e6ff55",
        padding: "20px",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          background: "transparent",
          border: "none",
          color: "#00e6ff",
          fontSize: "1.2rem",
          cursor: "pointer",
          zIndex: 10,
        }}
      >
        ×
      </button>

      <h3
        style={{
          color: "#00e6ff",
          marginTop: 0,
          marginBottom: "15px",
          fontSize: isMobile ? "1.3rem" : "1.5rem",
          textAlign: "center",
        }}
      >
        {hotspot.label}
      </h3>

      {hotspot.image && (
        <div
          style={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "15px",
          }}
        >
          <img
            src={hotspot.image}
            alt={hotspot.label}
            style={{
              width: "100%",
              height: "auto",
              objectFit: "contain",
              background: "transparent",
              borderRadius: "12px",
            }}
          />
        </div>
      )}

      <div
        dangerouslySetInnerHTML={{ __html: hotspot.desc }}
        style={{
          color: "#c0e0ff",
          lineHeight: 1.6,
          fontSize: isMobile ? "0.9rem" : "1rem",
        }}
      />

      {hotspot.extra && (
        <div
          style={{
            marginTop: "15px",
            padding: "10px",
            background: "rgba(0, 50, 80, 0.3)",
            borderRadius: "8px",
            fontSize: "0.9rem",
          }}
        >
          <div>
            <strong>Status:</strong> {hotspot.extra.status}
          </div>
          <div>
            <strong>Ostatnia inspekcja:</strong> {hotspot.extra.lastInspection}
          </div>
          <div>
            <strong>Parametry:</strong> {hotspot.extra.kpi}
          </div>
        </div>
      )}
    </div>
  );
};

export default HotspotInfoPanel;
