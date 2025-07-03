import React from "react";

// Nowoczesny, neonowy panel boczny
const HotspotInfoPanel = ({ open, hotspot, onClose }) => {
  if (!open || !hotspot) return null;
  return (
    <div
      style={{
        width: 370,
        minHeight: 330,
        background: "rgba(10,22,30,0.98)",
        color: "#f4fcff",
        borderRadius: 26,
        boxShadow: "0 0 38px #00e6ff44, 0 2px 18px #001e2133",
        padding: "2.1rem 2rem 1.3rem 2rem",
        marginLeft: 56,
        marginTop: 26,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        zIndex: 200,
        border: "2.4px solid #00e6ff",
        opacity: open ? 1 : 0,
        transform: open
          ? "translateY(0) scale(1)"
          : "translateY(20px) scale(.98)",
        transition: "opacity .38s cubic-bezier(.55,1.2,.47,1), transform .32s",
        animation: open
          ? "fadeInPanel 0.7s cubic-bezier(.75,-0.02,.47,1.07)"
          : undefined,
        boxSizing: "border-box",
        overflow: "visible",
      }}
    >
      <button
        style={{
          position: "absolute",
          top: 18,
          right: 18,
          border: "none",
          background: "#00e6ff",
          color: "#101925",
          fontSize: 27,
          borderRadius: "50%",
          width: 36,
          height: 36,
          cursor: "pointer",
          boxShadow: "0 1px 12px #00e6ff66",
        }}
        onClick={onClose}
        aria-label="Zamknij"
      >
        ×
      </button>
      <div
        style={{
          fontWeight: 700,
          fontSize: 22,
          marginBottom: 10,
          color: "#00ffba",
          letterSpacing: 1,
          textShadow: "0 1px 10px #00e6ff33",
        }}
        dangerouslySetInnerHTML={{ __html: hotspot.label }}
      />
      {hotspot.image && (
        <img
          src={hotspot.image}
          alt={hotspot.label}
          style={{
            width: "98%",
            maxHeight: 110,
            objectFit: "cover",
            borderRadius: 12,
            margin: "12px 0 16px 0",
            background: "#162238",
            boxShadow: "0 1px 18px #00e6ff23",
          }}
        />
      )}
      <div
        style={{ fontSize: 16.2, color: "#71ffd6", marginBottom: 14 }}
        dangerouslySetInnerHTML={{ __html: hotspot.desc }}
      />
      <div
        style={{
          color: "#00e6ff",
          fontSize: 15,
          marginBottom: 7,
          display: "flex",
          gap: 16,
          alignItems: "center",
        }}
      >
        <span>
          Status: <b>{hotspot.extra?.status || "N/A"}</b>
        </span>
        <span style={{ color: "#fff" }}>
          Ostatnia inspekcja: {hotspot.extra?.lastInspection || "N/A"}
        </span>
      </div>
      <div
        style={{
          fontSize: 15,
          color: "#c8eaff",
          background: "#1b3446",
          borderRadius: 10,
          padding: "7px 12px",
          marginBottom: 7,
          boxShadow: "0 1px 8px #00e6ff18",
          width: "fit-content",
        }}
      >
        {hotspot.extra?.kpi}
      </div>
      {/* Animacja wejścia panelu */}
      <style>
        {`
          @keyframes fadeInPanel {
            0% { opacity: 0; transform: translateY(50px) scale(.95);}
            70% { opacity: 1; transform: translateY(-7px) scale(1.03);}
            100% { opacity: 1; transform: translateY(0) scale(1);}
          }
        `}
      </style>
    </div>
  );
};

export default HotspotInfoPanel;
