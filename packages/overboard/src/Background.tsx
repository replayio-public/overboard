import React from "react";

import { AnimatedGrid } from "./AnimatedGrid";
import { Stars } from "./Stars";

export function Background() {
  return (
    <div
      style={{
        position: "fixed",
        zIndex: -1,
        left: 0,
        width: "100%",
        bottom: 0,
        isolation: "isolate",
      }}
    >
      <div style={{ position: "fixed", top: 0, zIndex: 4, left: 0, width: "100%" }}>
        <Stars />
      </div>
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: `linear-gradient(180deg, #1E076C 0%, #A312B5 50%, transparent 100%)`,
          zIndex: 3,
        }}
      />
      <AnimatedGrid />
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: `#FB6C8F`,
          zIndex: 1,
        }}
      />
    </div>
  );
}
