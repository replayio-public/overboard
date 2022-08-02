import React from "react";

export function AnimatedGrid() {
  return (
    <div className="AnimatedGrid">
      <div className="AnimatedGrid-glow" />
      <div className="AnimatedGrid-grid">
        <div className="AnimatedGrid-grid-fade" />
        <div className="AnimatedGrid-grid-lines" />
      </div>
    </div>
  );
}
