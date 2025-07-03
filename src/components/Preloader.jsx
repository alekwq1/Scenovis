import React from "react";

export function LoadingOverlay({ progress }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(10,15,30,0.97)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 2001,
        fontSize: "1.5rem",
        fontWeight: "bold",
        color: "#08ffe6",
        transition: "opacity 0.4s",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            width: 64,
            height: 64,
            margin: "0 auto 16px auto",
            border: "6px solid #1a3e53",
            borderTop: "6px solid #08ffe6",
            borderRadius: "50%",
            animation: "spin 1s linear infinite",
          }}
        />
        <div
          style={{
            fontSize: "2rem",
            color: "#08ffe6",
            fontWeight: 700,
            marginBottom: 10,
            marginTop: 10,
            letterSpacing: "1px",
          }}
        >
          Ładowanie zasobów...
        </div>
        <div
          style={{
            width: 260,
            height: 12,
            background: "#2c3d4a",
            borderRadius: 8,
            margin: "0 auto",
            overflow: "hidden",
            marginBottom: 12,
            boxShadow: "0 2px 8px rgba(33,255,230,0.08)",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "linear-gradient(90deg, #08ffe6 40%, #2c9cfa 100%)",
              borderRadius: 8,
              transition: "width 0.25s cubic-bezier(.39,1.77,.71,.86)",
            }}
          />
        </div>
        <div style={{ color: "#08ffe6", fontWeight: 600, fontSize: 18 }}>
          {progress}% załadowano
        </div>
      </div>
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </div>
  );
}

export default LoadingOverlay;
