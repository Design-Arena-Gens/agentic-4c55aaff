"use client";
import { useEffect, useRef, useState } from "react";

// A tiny WebAudio cue player with a cheerful bell and a gentle beat.
export default function AudioSequencer() {
  const ctxRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    return () => {
      if (ctxRef.current && ctxRef.current.state !== "closed") {
        ctxRef.current.close().catch(() => {});
      }
    };
  }, []);

  function ensureCtx() {
    if (!ctxRef.current) {
      const ctx = new (window.AudioContext || window.webkitAudioContext)({ latencyHint: "interactive" });
      ctxRef.current = ctx;
    }
    return ctxRef.current;
  }

  function playBell() {
    const ctx = ensureCtx();
    const now = ctx.currentTime;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = "sine";
    o.frequency.setValueAtTime(880, now);
    g.gain.setValueAtTime(0.0001, now);
    g.gain.exponentialRampToValueAtTime(0.2, now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
    o.connect(g).connect(ctx.destination);
    o.start(now);
    o.stop(now + 0.4);
  }

  function playBeatBar() {
    const ctx = ensureCtx();
    const now = ctx.currentTime;
    for (let i = 0; i < 4; i++) {
      const t = now + i * 0.45; // ~133 BPM
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "triangle";
      o.frequency.setValueAtTime(i === 0 ? 220 : 160, t);
      g.gain.setValueAtTime(0.0001, t);
      g.gain.exponentialRampToValueAtTime(0.15, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 0.15);
      o.connect(g).connect(ctx.destination);
      o.start(t);
      o.stop(t + 0.18);
    }
  }

  function handleEnable() {
    try {
      const ctx = ensureCtx();
      if (ctx.state === "suspended") ctx.resume();
      setEnabled(true);
      playBell();
      playBeatBar();
    } catch {}
  }

  return (
    <div className="controls">
      <button className="primary" onClick={handleEnable} disabled={enabled} aria-label="Enable sound">
        {enabled ? "Sound On" : "Enable Sound"}
      </button>
      <button className="secondary" onClick={playBell} disabled={!enabled} aria-label="Play cue bell">Cue Bell</button>
      <button className="secondary" onClick={playBeatBar} disabled={!enabled} aria-label="Play gentle beat">Beat</button>
    </div>
  );
}
