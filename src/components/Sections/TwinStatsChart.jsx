import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { name: "12:00", val: 45 },
  { name: "12:05", val: 54 },
  { name: "12:10", val: 63 },
  { name: "12:15", val: 49 },
  { name: "12:20", val: 60 },
  { name: "12:25", val: 73 },
  { name: "12:30", val: 67 },
];

const TwinStatsChart = () => (
  <div
    style={{
      width: "100%",
      maxWidth: 540,
      height: 220,
      background: "#0e1c2c",
      borderRadius: "14px",
      margin: "1.7rem auto",
      boxShadow: "0 4px 24px 0 #00e6ff08",
      padding: "1rem",
    }}
  >
    <div style={{ color: "#00e6ff", fontWeight: 600, marginBottom: 8 }}>
      Live Energy Usage (kWh)
    </div>
    <ResponsiveContainer width="100%" height={150}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 4" stroke="#223d5b" />
        <XAxis dataKey="name" tick={{ fill: "#b9e7f6", fontSize: 12 }} />
        <YAxis tick={{ fill: "#b9e7f6", fontSize: 12 }} />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="val"
          stroke="#00e6ff"
          strokeWidth={3}
          dot={{ r: 5 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default TwinStatsChart;
