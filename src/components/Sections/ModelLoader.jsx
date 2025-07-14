import { useProgress, Html } from "@react-three/drei";

function ModelLoader({ lang }) {
  const { progress } = useProgress();
  return (
    <Html fullscreen>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 18,
          padding: "27px 32px",
          borderRadius: 16,
          background: "rgba(15,27,37,0.92)",
          boxShadow: "0 2px 18px #07e7ff11",
          minWidth: 190,
        }}
      >
        <svg
          width="42"
          height="42"
          viewBox="0 0 50 50"
          style={{
            marginBottom: 5,
            animation: "spin 1.2s linear infinite",
            filter: "drop-shadow(0 0 8px #08ffe699)",
          }}
        >
          <circle
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke="#08ffe6"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="31.4 97"
          />
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg);}
              100% { transform: rotate(360deg);}
            }
          `}</style>
        </svg>
        <span
          style={{
            color: "#08ffe6",
            fontWeight: 700,
            fontSize: 19,
            letterSpacing: 1.1,
            fontFamily: "Roboto, Arial, sans-serif",
            textShadow: "0 1px 10px #07e7ff22",
          }}
        >
          {lang === "pl" ? "Ładowanie modelu 3D..." : "Loading 3D model..."}
        </span>
        <span
          style={{
            color: "#c6fff7",
            fontWeight: 500,
            fontSize: 17,
            marginTop: 0,
            fontFamily: "Roboto, Arial, sans-serif",
            opacity: 0.89,
            letterSpacing: ".5px",
          }}
        >
          {progress.toFixed(0)}%
        </span>
      </div>
    </Html>
  );
}

export default ModelLoader;
