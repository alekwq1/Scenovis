import React from "react";

const GlowTextCenter = () => (
  <div
    style={{
      width: "100%",
      height: "100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "32px 0",
    }}
  >
    <span
      style={{
        color: "#08ffe6",
        fontSize: "2.2rem",
        fontWeight: 700,
        textShadow: "0 0 32px #08ffe6, 0 0 2px #fff",
      }}
    >
      Odkryj cyfrowy świat 3D!
    </span>
  </div>
);

export default GlowTextCenter;
