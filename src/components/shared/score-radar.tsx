"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export interface RadarDatum {
  dimension: string;
  score: number;
}

/** Radar chart across the 8 premium report dimensions. */
export function ScoreRadar({ data, height = 320 }: { data: RadarDatum[]; height?: number }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const dark = mounted && resolvedTheme === "dark";

  const stroke = dark ? "#3987e5" : "#2a78d6";
  const grid = dark ? "#2c2c2a" : "#e1e0d9";
  const axis = dark ? "#a3a29c" : "#6b6a64";

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RadarChart data={data} outerRadius="72%">
        <PolarGrid stroke={grid} />
        <PolarAngleAxis
          dataKey="dimension"
          tick={{ fill: axis, fontSize: 11 }}
        />
        <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
        <Tooltip
          contentStyle={{
            backgroundColor: dark ? "#191c26" : "#ffffff",
            color: dark ? "#ffffff" : "#0b0b0b",
            border: "1px solid rgba(137,135,129,0.25)",
            borderRadius: 12,
            fontSize: 12,
          }}
          formatter={(value) => [`${value}/100`, "Score"]}
        />
        <Radar
          dataKey="score"
          stroke={stroke}
          fill={stroke}
          fillOpacity={0.25}
          strokeWidth={2}
          isAnimationActive
        />
      </RadarChart>
    </ResponsiveContainer>
  );
}
