"use client";

import { useEffect, useRef } from "react";

const trustItems = ["Founder-led", "Practical scope", "Decision-ready recommendations"];

type RotationState = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  dragging: boolean;
  lastX: number;
  lastY: number;
};

type LatLon = {
  lat: number;
  lon: number;
};

type ProjectedPoint = {
  x: number;
  y: number;
  visible: boolean;
};

const LATITUDE_LINES = [-58, -28, 0, 24, 52];
const LONGITUDE_LINES = [-110, -55, 0, 55, 110];
const SIGNAL_PATHS: Array<{ from: LatLon; to: LatLon; color: string; opacity: number; width: number }> = [
  { from: { lat: 40, lon: -132 }, to: { lat: -28, lon: 34 }, color: "#8ad8ff", opacity: 0.38, width: 2.5 },
  { from: { lat: 18, lon: -24 }, to: { lat: -42, lon: 140 }, color: "#7de8d7", opacity: 0.34, width: 2.2 },
  { from: { lat: -12, lon: -150 }, to: { lat: 52, lon: 86 }, color: "#d8efff", opacity: 0.22, width: 1.6 },
];

export function HeroSection({ primaryHref, secondaryHref }: { primaryHref: string; secondaryHref: string }) {
  return (
    <section id="top" className="hero-section">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(116,180,255,0.16),transparent_26%),radial-gradient(circle_at_78%_40%,rgba(115,212,197,0.12),transparent_24%),linear-gradient(180deg,rgba(9,13,18,0.35),rgba(9,13,18,0))]" />

      <div className="section-container relative">
        <div className="hero-grid">
          <div className="reveal-up hero-copy-column">
            <p className="hero-kicker">Founder-Led AI Operations Advisory</p>

            <h1 className="hero-main-title">Know where AI belongs before you commit to the wrong systems.</h1>

            <p className="hero-subtitle">
              Temporary Utopia runs practical AI Operations Audits for owners who want operational clarity before
              implementation. We map how work moves, where friction sits, and where AI should and should not be introduced.
            </p>

            <div className="hero-cta-row">
              <a
                href={primaryHref}
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-sky-200/40 bg-[linear-gradient(180deg,#7fc0ff,#4b9bf7)] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_14px_32px_rgba(75,155,247,0.28)] transition duration-200 hover:-translate-y-0.5 hover:bg-[linear-gradient(180deg,#93caff,#60a8fb)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Book a strategy call
              </a>
              <a
                href={secondaryHref}
                className="inline-flex min-h-12 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                See how the audit works
              </a>
            </div>

            <p className="hero-trust">
              {trustItems.map((item, index) => (
                <span key={item}>
                  {index > 0 ? <span className="mx-2 text-slate-600">·</span> : null}
                  {item}
                </span>
              ))}
            </p>
          </div>

          <div className="reveal-up hero-globe-column" style={{ animationDelay: "80ms" }}>
            <InteractiveGlobe />
          </div>
        </div>
      </div>
    </section>
  );
}

function InteractiveGlobe() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const isVisibleRef = useRef(true);
  const hoveredRef = useRef(false);
  const lastRenderRef = useRef(0);
  const stateRef = useRef<RotationState>({
    x: -0.12,
    y: 0.58,
    vx: 0,
    vy: 0.0021,
    dragging: false,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!container || !canvas || !context) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const draw = () => {
      drawScene(context, canvas.clientWidth, canvas.clientHeight, stateRef.current);
    };

    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = Boolean(entry?.isIntersecting);
      },
      { threshold: 0.12 },
    );
    intersectionObserver.observe(container);

    const handleVisibility = () => {
      isVisibleRef.current = document.visibilityState === "visible";
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const animate = (now = 0) => {
      const state = stateRef.current;

      if (isVisibleRef.current && !state.dragging && !reducedMotion) {
        const targetVy = hoveredRef.current ? 0.0005 : 0.0019;
        state.y += state.vy;
        state.x = clamp(state.x + state.vx, -0.42, 0.42);
        state.vx *= hoveredRef.current ? 0.86 : 0.93;
        state.vy += (targetVy - state.vy) * 0.022;
      }

      if (isVisibleRef.current && now - lastRenderRef.current > 20) {
        draw();
        lastRenderRef.current = now;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  function beginDrag(clientX: number, clientY: number) {
    const state = stateRef.current;
    state.dragging = true;
    state.lastX = clientX;
    state.lastY = clientY;
    state.vx = 0;
    state.vy = 0;
  }

  function moveDrag(clientX: number, clientY: number) {
    const state = stateRef.current;
    if (!state.dragging) {
      return;
    }

    const deltaX = clientX - state.lastX;
    const deltaY = clientY - state.lastY;

    state.y += deltaX * 0.007;
    state.x = clamp(state.x - deltaY * 0.0043, -0.42, 0.42);
    state.vy = deltaX * 0.00075;
    state.vx = -deltaY * 0.00052;
    state.lastX = clientX;
    state.lastY = clientY;
  }

  function endDrag() {
    stateRef.current.dragging = false;
  }

  return (
    <div className="hero-globe-shell">
      <div className="hero-globe-backdrop" />
      <div className="hero-globe-ring hero-globe-ring-one" />
      <div className="hero-globe-ring hero-globe-ring-two" />
      <div className="hero-globe-ring hero-globe-ring-three" />

      <div
        ref={containerRef}
        className="group hero-globe-canvas touch-none select-none"
        onPointerDown={(event) => {
          event.currentTarget.setPointerCapture(event.pointerId);
          beginDrag(event.clientX, event.clientY);
        }}
        onPointerMove={(event) => moveDrag(event.clientX, event.clientY)}
        onPointerUp={(event) => {
          event.currentTarget.releasePointerCapture(event.pointerId);
          endDrag();
        }}
        onPointerCancel={endDrag}
        onPointerEnter={() => {
          hoveredRef.current = true;
        }}
        onPointerLeave={() => {
          hoveredRef.current = false;
          endDrag();
        }}
        onFocus={() => {
          hoveredRef.current = true;
        }}
        onBlur={() => {
          hoveredRef.current = false;
          endDrag();
        }}
        onKeyDown={(event) => {
          const state = stateRef.current;
          if (event.key === "ArrowLeft") {
            state.vy -= 0.014;
          } else if (event.key === "ArrowRight") {
            state.vy += 0.014;
          } else if (event.key === "ArrowUp") {
            state.vx -= 0.012;
          } else if (event.key === "ArrowDown") {
            state.vx += 0.012;
          }
        }}
        role="img"
        aria-label="Interactive abstract spherical globe"
        tabIndex={0}
      >
        <div className="hero-globe-core-glow" />
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full rounded-full" />
      </div>
    </div>
  );
}

function drawScene(context: CanvasRenderingContext2D, width: number, height: number, state: RotationState) {
  context.clearRect(0, 0, width, height);

  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) * 0.39;

  drawOrbShadow(context, centerX, centerY, radius);
  drawOrbitalFrame(context, centerX, centerY, radius);
  drawAtmosphere(context, centerX, centerY, radius);
  drawSphereBase(context, centerX, centerY, radius);

  context.save();
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  context.clip();

  drawAbstractGlobe(context, centerX, centerY, radius, state.x, state.y);

  context.restore();
  drawRim(context, centerX, centerY, radius);
}

function drawAbstractGlobe(
  context: CanvasRenderingContext2D,
  centerX: number,
  centerY: number,
  radius: number,
  centerLat: number,
  centerLon: number,
) {
  const backGlow = context.createRadialGradient(centerX - radius * 0.2, centerY - radius * 0.3, 0, centerX, centerY, radius * 1.1);
  backGlow.addColorStop(0, "rgba(118, 202, 255, 0.14)");
  backGlow.addColorStop(1, "rgba(118, 202, 255, 0)");
  context.fillStyle = backGlow;
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  context.fill();

  LATITUDE_LINES.forEach((lat) => {
    const isEquator = lat === 0;
    context.strokeStyle = isEquator ? "rgba(177, 232, 255, 0.32)" : "rgba(112, 174, 222, 0.16)";
    context.lineWidth = isEquator ? 2.4 : 1.5;
    drawProjectedLine(
      context,
      buildLinePoints(-180, 180, 5, (lon) => ({ lat, lon })),
      centerX,
      centerY,
      radius,
      centerLat,
      centerLon,
    );
  });

  LONGITUDE_LINES.forEach((lon, index) => {
    const isPrimary = lon === 0;
    context.strokeStyle = isPrimary ? "rgba(162, 229, 255, 0.28)" : "rgba(112, 174, 222, 0.13)";
    context.lineWidth = isPrimary ? 2.1 : 1.3;
    drawProjectedLine(
      context,
      buildLinePoints(-90, 90, 5, (lat) => ({ lat, lon: lon + radiansToDegrees(centerLon) * 0.12 + index * 2 })),
      centerX,
      centerY,
      radius,
      centerLat,
      centerLon,
    );
  });

  SIGNAL_PATHS.forEach((path) => {
    const points = interpolateGreatCircle(path.from, path.to, 46);
    context.strokeStyle = hexToRgba(path.color, path.opacity);
    context.lineWidth = path.width;
    context.beginPath();

    let started = false;
    points.forEach((point) => {
      const projected = projectPoint(point, centerLat, centerLon, radius, centerX, centerY);
      if (!projected.visible) {
        started = false;
        return;
      }
      if (!started) {
        context.moveTo(projected.x, projected.y);
        started = true;
        return;
      }
      context.lineTo(projected.x, projected.y);
    });

    context.stroke();
  });

  const accentPoints = [
    { lat: 24, lon: -38 },
    { lat: -14, lon: 28 },
    { lat: 42, lon: 86 },
  ];

  accentPoints.forEach((point, index) => {
    const projected = projectPoint(point, centerLat, centerLon, radius, centerX, centerY);
    if (!projected.visible) {
      return;
    }

    const glow = context.createRadialGradient(projected.x, projected.y, 0, projected.x, projected.y, index === 0 ? 10 : 8);
    glow.addColorStop(0, "rgba(233, 248, 255, 0.85)");
    glow.addColorStop(1, "rgba(122, 214, 255, 0)");
    context.fillStyle = glow;
    context.beginPath();
    context.arc(projected.x, projected.y, index === 0 ? 10 : 8, 0, Math.PI * 2);
    context.fill();

    context.fillStyle = index === 0 ? "#e8f8ff" : "#9fe8ff";
    context.beginPath();
    context.arc(projected.x, projected.y, index === 0 ? 3.4 : 2.8, 0, Math.PI * 2);
    context.fill();
  });
}

function drawOrbShadow(context: CanvasRenderingContext2D, centerX: number, centerY: number, radius: number) {
  const shadow = context.createRadialGradient(centerX, centerY + radius * 0.34, radius * 0.15, centerX, centerY + radius * 0.34, radius * 1.28);
  shadow.addColorStop(0, "rgba(9, 14, 19, 0.52)");
  shadow.addColorStop(1, "rgba(9, 14, 19, 0)");
  context.fillStyle = shadow;
  context.beginPath();
  context.ellipse(centerX, centerY + radius * 0.36, radius * 1.16, radius * 0.62, 0, 0, Math.PI * 2);
  context.fill();
}

function drawAtmosphere(context: CanvasRenderingContext2D, centerX: number, centerY: number, radius: number) {
  const halo = context.createRadialGradient(centerX, centerY, radius * 0.26, centerX, centerY, radius * 1.68);
  halo.addColorStop(0, "rgba(110, 210, 255, 0.24)");
  halo.addColorStop(0.42, "rgba(59, 153, 228, 0.12)");
  halo.addColorStop(1, "rgba(9, 14, 19, 0)");
  context.fillStyle = halo;
  context.beginPath();
  context.arc(centerX, centerY, radius * 1.72, 0, Math.PI * 2);
  context.fill();
}

function drawSphereBase(context: CanvasRenderingContext2D, centerX: number, centerY: number, radius: number) {
  const base = context.createRadialGradient(centerX - radius * 0.22, centerY - radius * 0.34, radius * 0.08, centerX, centerY, radius * 1.02);
  base.addColorStop(0, "#1d4863");
  base.addColorStop(0.26, "#112a3c");
  base.addColorStop(0.68, "#071522");
  base.addColorStop(1, "#040a11");
  context.fillStyle = base;
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  context.fill();

  const highlight = context.createRadialGradient(centerX - radius * 0.44, centerY - radius * 0.48, 0, centerX - radius * 0.08, centerY - radius * 0.12, radius * 1.06);
  highlight.addColorStop(0, "rgba(202, 242, 255, 0.22)");
  highlight.addColorStop(0.24, "rgba(104, 205, 255, 0.12)");
  highlight.addColorStop(1, "rgba(96, 196, 255, 0)");
  context.fillStyle = highlight;
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  context.fill();

  const lowerShade = context.createLinearGradient(centerX, centerY - radius, centerX, centerY + radius);
  lowerShade.addColorStop(0, "rgba(8, 13, 19, 0)");
  lowerShade.addColorStop(1, "rgba(2, 5, 9, 0.34)");
  context.fillStyle = lowerShade;
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  context.fill();
}

function drawRim(context: CanvasRenderingContext2D, centerX: number, centerY: number, radius: number) {
  context.strokeStyle = "rgba(151, 222, 255, 0.56)";
  context.lineWidth = 1.8;
  context.beginPath();
  context.arc(centerX, centerY, radius + 0.5, 0, Math.PI * 2);
  context.stroke();

  context.strokeStyle = "rgba(221, 242, 255, 0.12)";
  context.lineWidth = 8.5;
  context.beginPath();
  context.arc(centerX, centerY, radius - 3, Math.PI * 1.04, Math.PI * 1.58);
  context.stroke();
}

function drawOrbitalFrame(context: CanvasRenderingContext2D, centerX: number, centerY: number, radius: number) {
  drawEllipse(context, centerX, centerY, radius * 1.24, radius * 1.02, 0.34, "rgba(216, 231, 248, 0.08)", 1);
  drawEllipse(context, centerX, centerY, radius * 1.08, radius * 0.94, -0.48, "rgba(119, 216, 255, 0.06)", 1);
  drawEllipseSegment(context, centerX, centerY, radius * 1.24, radius * 1.02, 0.34, 0.92, 1.68, "rgba(162, 229, 255, 0.26)", 1.3);
  drawEllipseSegment(context, centerX, centerY, radius * 1.08, radius * 0.94, -0.48, 4.12, 4.94, "rgba(125, 228, 255, 0.18)", 1.1);
}

function drawEllipse(
  context: CanvasRenderingContext2D,
  centerX: number,
  centerY: number,
  radiusX: number,
  radiusY: number,
  rotation: number,
  strokeStyle: string,
  lineWidth: number,
) {
  context.strokeStyle = strokeStyle;
  context.lineWidth = lineWidth;
  context.beginPath();
  context.ellipse(centerX, centerY, radiusX, radiusY, rotation, 0, Math.PI * 2);
  context.stroke();
}

function drawEllipseSegment(
  context: CanvasRenderingContext2D,
  centerX: number,
  centerY: number,
  radiusX: number,
  radiusY: number,
  rotation: number,
  startAngle: number,
  endAngle: number,
  strokeStyle: string,
  lineWidth: number,
) {
  context.strokeStyle = strokeStyle;
  context.lineWidth = lineWidth;
  context.beginPath();
  context.ellipse(centerX, centerY, radiusX, radiusY, rotation, startAngle, endAngle);
  context.stroke();
}

function drawProjectedLine(
  context: CanvasRenderingContext2D,
  points: LatLon[],
  centerX: number,
  centerY: number,
  radius: number,
  centerLat: number,
  centerLon: number,
) {
  context.beginPath();
  let started = false;

  points.forEach((point) => {
    const projected = projectPoint(point, centerLat, centerLon, radius, centerX, centerY);
    if (!projected.visible) {
      started = false;
      return;
    }
    if (!started) {
      context.moveTo(projected.x, projected.y);
      started = true;
      return;
    }
    context.lineTo(projected.x, projected.y);
  });

  context.stroke();
}

function projectPoint(
  point: LatLon,
  centerLat: number,
  centerLon: number,
  radius: number,
  centerX: number,
  centerY: number,
): ProjectedPoint {
  const lat = degreesToRadians(point.lat);
  const lon = degreesToRadians(point.lon);
  const deltaLon = lon - centerLon;

  const sinLat = Math.sin(lat);
  const cosLat = Math.cos(lat);
  const sinCenterLat = Math.sin(centerLat);
  const cosCenterLat = Math.cos(centerLat);

  const visibility = sinCenterLat * sinLat + cosCenterLat * cosLat * Math.cos(deltaLon);

  return {
    x: centerX + radius * cosLat * Math.sin(deltaLon),
    y: centerY - radius * (cosCenterLat * sinLat - sinCenterLat * cosLat * Math.cos(deltaLon)),
    visible: visibility > 0,
  };
}

function interpolateGreatCircle(from: LatLon, to: LatLon, steps: number) {
  const start = latLonToVector(from);
  const end = latLonToVector(to);
  const dot = clamp(start.x * end.x + start.y * end.y + start.z * end.z, -1, 1);
  const angle = Math.acos(dot);

  if (angle === 0) {
    return [from];
  }

  const sinAngle = Math.sin(angle);
  const points: LatLon[] = [];

  for (let index = 0; index <= steps; index += 1) {
    const t = index / steps;
    const scaleA = Math.sin((1 - t) * angle) / sinAngle;
    const scaleB = Math.sin(t * angle) / sinAngle;

    const x = start.x * scaleA + end.x * scaleB;
    const y = start.y * scaleA + end.y * scaleB;
    const z = start.z * scaleA + end.z * scaleB;
    points.push(vectorToLatLon(normalizeVector({ x, y, z })));
  }

  return points;
}

function latLonToVector(point: LatLon) {
  const lat = degreesToRadians(point.lat);
  const lon = degreesToRadians(point.lon);
  return {
    x: Math.cos(lat) * Math.cos(lon),
    y: Math.sin(lat),
    z: Math.cos(lat) * Math.sin(lon),
  };
}

function vectorToLatLon(vector: { x: number; y: number; z: number }): LatLon {
  return {
    lat: radiansToDegrees(Math.asin(vector.y)),
    lon: radiansToDegrees(Math.atan2(vector.z, vector.x)),
  };
}

function normalizeVector(vector: { x: number; y: number; z: number }) {
  const length = Math.hypot(vector.x, vector.y, vector.z) || 1;
  return {
    x: vector.x / length,
    y: vector.y / length,
    z: vector.z / length,
  };
}

function buildLinePoints(start: number, end: number, step: number, buildPoint: (value: number) => LatLon) {
  const points: LatLon[] = [];
  for (let value = start; value <= end; value += step) {
    points.push(buildPoint(value));
  }
  return points;
}

function hexToRgba(hex: string, alpha: number) {
  const value = hex.replace("#", "");
  const normalized = value.length === 3 ? value.split("").map((character) => character + character).join("") : value;
  const red = Number.parseInt(normalized.slice(0, 2), 16);
  const green = Number.parseInt(normalized.slice(2, 4), 16);
  const blue = Number.parseInt(normalized.slice(4, 6), 16);
  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

function degreesToRadians(value: number) {
  return (value * Math.PI) / 180;
}

function radiansToDegrees(value: number) {
  return (value * 180) / Math.PI;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}
