import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const stats = [
  { label: "Temperature", color: "#00e6ff", value: 74.5, unit: "°C" },
  { label: "RPM", color: "#00e6ff", value: 1600, unit: "" },
  { label: "Efficiency", color: "#00e6ff", value: 92, unit: "%" },
  { label: "ALARM", color: "#fc0", value: 1, unit: "", isAlarm: true },
];

const LiveTwinStats = () => {
  const numberRefs = useRef([]);

  useEffect(() => {
    stats.forEach((stat, i) => {
      if (!stat.isAlarm) {
        gsap.fromTo(
          numberRefs.current[i],
          { innerText: 0 },
          {
            innerText: stat.value,
            duration: 2.1,
            snap: { innerText: 1 },
            ease: "power2.out",
            onUpdate: function () {
              const v = numberRefs.current[i].innerText;
              numberRefs.current[i].innerText = stat.unit
                ? `${parseInt(v)}${stat.unit}`
                : parseInt(v);
            },
          }
        );
      }
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        gap: "2.5rem",
        margin: "1.7rem auto 0",
        justifyContent: "center",
      }}
    >
      {stats.map((stat, i) => (
        <div key={stat.label}>
          <div
            ref={(el) => (numberRefs.current[i] = el)}
            style={{
              fontSize: "2.2rem",
              fontWeight: 700,
              color: stat.color,
              minHeight: 38,
              lineHeight: 1.1,
              ...(stat.isAlarm && { fontSize: "2.5rem" }),
            }}
          >
            {stat.isAlarm ? <span style={{ fontSize: "2rem" }}>●</span> : "0"}
          </div>
          <div style={{ opacity: 0.7 }}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default LiveTwinStats;
