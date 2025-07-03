import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Kolory statusów (do ikonek/tekstów)
const STATUS_COLORS = {
  OK: "#00ffc3",
  Alert: "#ffd000",
  Error: "#ff5454",
};

const InfoPanel = ({
  title,
  desc,
  chartData = [],
  chartLabels = [],
  chartTitle = "",
  alerts = [],
  status = "",
  onClose,
}) => {
  // Format danych pod Recharts
  const data =
    chartLabels.length === chartData.length
      ? chartLabels.map((lbl, i) => ({ name: lbl, value: chartData[i] }))
      : chartData.map((v, i) => ({ name: `Punkt ${i + 1}`, value: v }));

  return (
    <div
      style={{
        position: "absolute",
        top: 20,
        left: 16,
        background: "#151f2b",
        borderRadius: "16px",
        boxShadow: "0 4px 18px #00e6ff44",
        padding: "1.1rem 1.3rem",
        zIndex: 300,
        minWidth: 210,
        minHeight: 160,
        color: "#aaf6ff",
        border: "1px solid #00e6ff44",
      }}
    >
      <button
        style={{
          position: "absolute",
          top: 12,
          right: 14,
          background: "#00e6ff",
          border: "none",
          borderRadius: "50%",
          width: 28,
          height: 28,
          color: "#111",
          fontSize: "1.15rem",
          cursor: "pointer",
          fontWeight: 700,
        }}
        onClick={onClose}
        title="Zamknij"
      >
        ✕
      </button>
      <div
        style={{
          marginBottom: 5,
          fontSize: 18,
          fontWeight: 600,
          color: "#41fdff",
        }}
      >
        {title}
        {status && (
          <span
            style={{
              marginLeft: 10,
              color: STATUS_COLORS[status] || "#c8ffff",
              fontSize: 16,
              fontWeight: 600,
            }}
          >
            ●
          </span>
        )}
      </div>
      <div style={{ marginBottom: 8, color: "#c9eaff", fontSize: 14 }}>
        {desc}
      </div>
      <div style={{ width: "100%", height: 120 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#00e6ff33" strokeDasharray="2 3" />
            <XAxis dataKey="name" tick={{ fill: "#8eeeff", fontSize: 12 }} />
            <YAxis tick={{ fill: "#8eeeff", fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                background: "#122030",
                border: "1px solid #00e6ff",
              }}
              labelStyle={{ color: "#41fdff" }}
              itemStyle={{ color: "#00e6ff" }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#00e6ff"
              strokeWidth={2.1}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div
          style={{
            color: "#8eeeff",
            fontSize: 13,
            marginTop: 3,
            textAlign: "center",
          }}
        >
          {chartTitle}
        </div>
      </div>
      <ul
        style={{
          color: "#ffe69a",
          fontSize: 13,
          marginTop: 10,
          marginBottom: 0,
          paddingLeft: 16,
        }}
      >
        {alerts && alerts.map((a, i) => <li key={i}>{a}</li>)}
      </ul>
    </div>
  );
};

export default InfoPanel;
