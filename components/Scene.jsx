"use client";
import { useMemo } from "react";

export default function Scene({ index, title, cue, children }) {
  const number = useMemo(() => String(index + 1).padStart(2, "0"), [index]);
  return (
    <section className="scene" aria-label={title}>
      <h2 className="sceneTitle">Scene {number} ? {title}</h2>
      {cue ? <div className="cue">{cue}</div> : null}
      <div className="sceneContent">{children}</div>
    </section>
  );
}
