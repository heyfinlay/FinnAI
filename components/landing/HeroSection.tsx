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

const MARKER_COORDINATES: LatLon[] = [
  { lat: 40.7, lon: -74.0 },
  { lat: 51.5, lon: -0.12 },
  { lat: 1.35, lon: 103.8 },
  { lat: -33.86, lon: 151.2 },
  { lat: 35.68, lon: 139.7 },
];

const CONNECTIONS: Array<[LatLon, LatLon, string, number]> = [
  [MARKER_COORDINATES[0], MARKER_COORDINATES[1], "#8ad8ff", 0.44],
  [MARKER_COORDINATES[1], MARKER_COORDINATES[2], "#6fd7ff", 0.32],
  [MARKER_COORDINATES[0], MARKER_COORDINATES[3], "#8ad8ff", 0.24],
];

const CONTINENT_PATHS: LatLon[][] = [
  [
    { lat: 73, lon: -168 },
    { lat: 70, lon: -156 },
    { lat: 66, lon: -146 },
    { lat: 61, lon: -136 },
    { lat: 56, lon: -128 },
    { lat: 51, lon: -124 },
    { lat: 48, lon: -124 },
    { lat: 46, lon: -126 },
    { lat: 43, lon: -124 },
    { lat: 39, lon: -121 },
    { lat: 35, lon: -118 },
    { lat: 31, lon: -114 },
    { lat: 28, lon: -109 },
    { lat: 25, lon: -104 },
    { lat: 22, lon: -98 },
    { lat: 19, lon: -92 },
    { lat: 21, lon: -86 },
    { lat: 26, lon: -82 },
    { lat: 31, lon: -81 },
    { lat: 37, lon: -76 },
    { lat: 44, lon: -67 },
    { lat: 49, lon: -61 },
    { lat: 54, lon: -60 },
    { lat: 58, lon: -67 },
    { lat: 62, lon: -79 },
    { lat: 66, lon: -96 },
    { lat: 69, lon: -116 },
    { lat: 72, lon: -144 },
  ],
  [
    { lat: 82, lon: -72 },
    { lat: 79, lon: -60 },
    { lat: 74, lon: -46 },
    { lat: 69, lon: -34 },
    { lat: 62, lon: -38 },
    { lat: 60, lon: -50 },
    { lat: 66, lon: -62 },
    { lat: 74, lon: -70 },
  ],
  [
    { lat: 24, lon: -97 },
    { lat: 18, lon: -91 },
    { lat: 14, lon: -88 },
    { lat: 11, lon: -85 },
    { lat: 9, lon: -81 },
    { lat: 11, lon: -78 },
    { lat: 15, lon: -80 },
    { lat: 19, lon: -84 },
    { lat: 22, lon: -89 },
  ],
  [
    { lat: 12, lon: -81 },
    { lat: 6, lon: -77 },
    { lat: -2, lon: -75 },
    { lat: -12, lon: -72 },
    { lat: -22, lon: -66 },
    { lat: -32, lon: -62 },
    { lat: -42, lon: -60 },
    { lat: -52, lon: -63 },
    { lat: -56, lon: -71 },
    { lat: -50, lon: -77 },
    { lat: -38, lon: -76 },
    { lat: -26, lon: -74 },
    { lat: -14, lon: -75 },
    { lat: -4, lon: -78 },
  ],
  [
    { lat: 71, lon: -12 },
    { lat: 68, lon: -2 },
    { lat: 64, lon: 12 },
    { lat: 60, lon: 24 },
    { lat: 57, lon: 34 },
    { lat: 56, lon: 48 },
    { lat: 58, lon: 64 },
    { lat: 60, lon: 82 },
    { lat: 60, lon: 100 },
    { lat: 58, lon: 118 },
    { lat: 56, lon: 136 },
    { lat: 52, lon: 150 },
    { lat: 46, lon: 146 },
    { lat: 40, lon: 136 },
    { lat: 34, lon: 126 },
    { lat: 28, lon: 116 },
    { lat: 22, lon: 108 },
    { lat: 16, lon: 98 },
    { lat: 12, lon: 88 },
    { lat: 14, lon: 74 },
    { lat: 18, lon: 62 },
    { lat: 24, lon: 52 },
    { lat: 30, lon: 44 },
    { lat: 36, lon: 38 },
    { lat: 42, lon: 32 },
    { lat: 50, lon: 24 },
    { lat: 58, lon: 12 },
    { lat: 64, lon: 2 },
  ],
  [
    { lat: 36, lon: -17 },
    { lat: 32, lon: -6 },
    { lat: 29, lon: 6 },
    { lat: 24, lon: 16 },
    { lat: 18, lon: 24 },
    { lat: 10, lon: 32 },
    { lat: 0, lon: 36 },
    { lat: -10, lon: 34 },
    { lat: -20, lon: 30 },
    { lat: -30, lon: 22 },
    { lat: -35, lon: 14 },
    { lat: -33, lon: 6 },
    { lat: -26, lon: -2 },
    { lat: -14, lon: -8 },
    { lat: 0, lon: -10 },
    { lat: 14, lon: -12 },
    { lat: 26, lon: -14 },
  ],
  [
    { lat: 59, lon: -8 },
    { lat: 57, lon: -5 },
    { lat: 54, lon: -2 },
    { lat: 52, lon: -4 },
    { lat: 54, lon: -7 },
  ],
  [
    { lat: 31, lon: 34 },
    { lat: 28, lon: 40 },
    { lat: 24, lon: 46 },
    { lat: 20, lon: 51 },
    { lat: 16, lon: 50 },
    { lat: 14, lon: 44 },
    { lat: 18, lon: 38 },
    { lat: 24, lon: 34 },
  ],
  [
    { lat: 24, lon: 68 },
    { lat: 20, lon: 76 },
    { lat: 18, lon: 84 },
    { lat: 14, lon: 92 },
    { lat: 8, lon: 100 },
    { lat: 4, lon: 104 },
    { lat: 0, lon: 107 },
    { lat: -4, lon: 112 },
    { lat: -6, lon: 120 },
    { lat: -5, lon: 128 },
    { lat: -2, lon: 134 },
    { lat: 0, lon: 130 },
    { lat: 1, lon: 120 },
    { lat: 0, lon: 110 },
    { lat: 2, lon: 98 },
    { lat: 10, lon: 84 },
    { lat: 18, lon: 72 },
  ],
  [
    { lat: 46, lon: 143 },
    { lat: 42, lon: 146 },
    { lat: 38, lon: 142 },
    { lat: 35, lon: 138 },
    { lat: 38, lon: 136 },
    { lat: 42, lon: 139 },
  ],
  [
    { lat: -10, lon: 112 },
    { lat: -18, lon: 124 },
    { lat: -26, lon: 138 },
    { lat: -34, lon: 148 },
    { lat: -40, lon: 146 },
    { lat: -42, lon: 132 },
    { lat: -36, lon: 118 },
    { lat: -26, lon: 112 },
  ],
  [
    { lat: -13, lon: 49 },
    { lat: -18, lon: 50 },
    { lat: -22, lon: 48 },
    { lat: -24, lon: 45 },
    { lat: -19, lon: 44 },
    { lat: -14, lon: 46 },
  ],
];

const DENSIFIED_PATHS = CONTINENT_PATHS.map((path) => densifyPath(path, 3));
const LAND_DOTS = buildLandDots(CONTINENT_PATHS, 4);

export function HeroSection({ primaryHref, secondaryHref }: { primaryHref: string; secondaryHref: string }) {
  return (
    <section id="top" className="hero-section">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(116,180,255,0.16),transparent_26%),radial-gradient(circle_at_78%_40%,rgba(115,212,197,0.12),transparent_24%),linear-gradient(180deg,rgba(9,13,18,0.35),rgba(9,13,18,0))]" />

      <div className="section-container relative">
        <div className="hero-grid">
          <div className="reveal-up hero-copy-column">
            <p className="hero-kicker">
              Founder-Led AI Operations Advisory
            </p>

            <h1 className="hero-main-title">
              Understand where AI fits before you commit to the wrong systems.
            </h1>

            <p className="hero-subtitle">
              Temporary Utopia runs practical AI Operations Audits for business owners who want clarity before implementation.
              We map how work actually moves, where friction exists, and where AI should — and should not — be introduced.
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
    x: -0.16,
    y: 0.72,
    vx: 0,
    vy: 0.0026,
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
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      drawScene(context, width, height, stateRef.current);
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
      const shouldAnimate = isVisibleRef.current;

      if (shouldAnimate && !state.dragging && !reducedMotion) {
        const targetVy = hoveredRef.current ? 0.00055 : 0.0022;
        state.y += state.vy;
        state.x = clamp(state.x + state.vx, -0.48, 0.48);
        state.vx *= hoveredRef.current ? 0.88 : 0.94;
        state.vy += (targetVy - state.vy) * 0.018;
      }

      if (shouldAnimate && now - lastRenderRef.current > 20) {
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

    state.y += deltaX * 0.0072;
    state.x = clamp(state.x - deltaY * 0.0045, -0.48, 0.48);
    state.vy = deltaX * 0.00085;
    state.vx = -deltaY * 0.0006;
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
        aria-label="Interactive globe representing a premium operational systems view"
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
  const centerLat = state.x;
  const centerLon = state.y;

  drawOrbShadow(context, centerX, centerY, radius);
  drawOrbitalFrame(context, centerX, centerY, radius);
  drawAtmosphere(context, centerX, centerY, radius);
  drawSphereBase(context, centerX, centerY, radius);

  context.save();
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  context.clip();

  drawGraticule(context, centerX, centerY, radius, centerLat, centerLon);
  drawLandDots(context, centerX, centerY, radius, centerLat, centerLon);
  drawCoastlines(context, centerX, centerY, radius, centerLat, centerLon);
  drawConnections(context, centerX, centerY, radius, centerLat, centerLon);
  drawMarkers(context, centerX, centerY, radius, centerLat, centerLon);

  context.restore();
  drawRim(context, centerX, centerY, radius);
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
  const base = context.createRadialGradient(centerX - radius * 0.24, centerY - radius * 0.34, radius * 0.08, centerX, centerY, radius * 1.02);
  base.addColorStop(0, "#1a4662");
  base.addColorStop(0.28, "#10283a");
  base.addColorStop(0.68, "#071522");
  base.addColorStop(1, "#040a11");
  context.fillStyle = base;
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  context.fill();

  const highlight = context.createRadialGradient(centerX - radius * 0.46, centerY - radius * 0.48, 0, centerX - radius * 0.12, centerY - radius * 0.16, radius * 1.08);
  highlight.addColorStop(0, "rgba(188, 241, 255, 0.22)");
  highlight.addColorStop(0.25, "rgba(104, 205, 255, 0.12)");
  highlight.addColorStop(1, "rgba(96, 196, 255, 0)");
  context.fillStyle = highlight;
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  context.fill();

  const edgeShade = context.createLinearGradient(centerX, centerY - radius, centerX, centerY + radius);
  edgeShade.addColorStop(0, "rgba(8, 13, 19, 0)");
  edgeShade.addColorStop(1, "rgba(2, 5, 9, 0.34)");
  context.fillStyle = edgeShade;
  context.beginPath();
  context.arc(centerX, centerY, radius, 0, Math.PI * 2);
  context.fill();
}

function drawRim(context: CanvasRenderingContext2D, centerX: number, centerY: number, radius: number) {
  context.strokeStyle = "rgba(151, 222, 255, 0.54)";
  context.lineWidth = 1.7;
  context.beginPath();
  context.arc(centerX, centerY, radius + 0.5, 0, Math.PI * 2);
  context.stroke();

  context.strokeStyle = "rgba(221, 242, 255, 0.1)";
  context.lineWidth = 9;
  context.beginPath();
  context.arc(centerX, centerY, radius - 3, Math.PI * 1.02, Math.PI * 1.6);
  context.stroke();
}

function drawOrbitalFrame(context: CanvasRenderingContext2D, centerX: number, centerY: number, radius: number) {
  drawEllipse(context, centerX, centerY, radius * 1.24, radius * 1.02, 0.34, "rgba(216, 231, 248, 0.1)", 1);
  drawEllipse(context, centerX, centerY, radius * 1.08, radius * 0.94, -0.48, "rgba(119, 216, 255, 0.07)", 1);
  drawEllipseSegment(context, centerX, centerY, radius * 1.24, radius * 1.02, 0.34, 0.9, 1.7, "rgba(162, 229, 255, 0.34)", 1.4);
  drawEllipseSegment(context, centerX, centerY, radius * 1.08, radius * 0.94, -0.48, 4.14, 4.94, "rgba(125, 228, 255, 0.24)", 1.2);
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

function drawGraticule(
  context: CanvasRenderingContext2D,
  centerX: number,
  centerY: number,
  radius: number,
  centerLat: number,
  centerLon: number,
) {
  context.strokeStyle = "rgba(127, 209, 246, 0.14)";
  context.lineWidth = 0.8;

  for (let lat = -60; lat <= 60; lat += 30) {
    drawProjectedLine(
      context,
      buildLinePoints(-180, 180, 7, (lon) => ({ lat, lon })),
      centerX,
      centerY,
      radius,
      centerLat,
      centerLon,
    );
  }

  context.strokeStyle = "rgba(219, 233, 241, 0.07)";
  for (let lon = -150; lon <= 180; lon += 30) {
    drawProjectedLine(
      context,
      buildLinePoints(-85, 85, 7, (lat) => ({ lat, lon })),
      centerX,
      centerY,
      radius,
      centerLat,
      centerLon,
    );
  }
}

function drawLandDots(
  context: CanvasRenderingContext2D,
  centerX: number,
  centerY: number,
  radius: number,
  centerLat: number,
  centerLon: number,
) {
  context.fillStyle = "rgba(113, 220, 255, 0.14)";
  LAND_DOTS.forEach((point) => {
    const projected = projectPoint(point, centerLat, centerLon, radius, centerX, centerY);
    if (!projected.visible) {
      return;
    }
    context.fillRect(projected.x - 0.9, projected.y - 0.9, 1.8, 1.8);
  });
}

function drawCoastlines(
  context: CanvasRenderingContext2D,
  centerX: number,
  centerY: number,
  radius: number,
  centerLat: number,
  centerLon: number,
) {
  DENSIFIED_PATHS.forEach((path) => {
    context.strokeStyle = "rgba(98, 211, 255, 0.12)";
    context.lineWidth = 3.4;
    drawProjectedLine(context, path, centerX, centerY, radius, centerLat, centerLon);

    context.strokeStyle = "rgba(212, 241, 255, 0.42)";
    context.lineWidth = 1.2;
    drawProjectedLine(context, path, centerX, centerY, radius, centerLat, centerLon);
  });
}

function drawConnections(
  context: CanvasRenderingContext2D,
  centerX: number,
  centerY: number,
  radius: number,
  centerLat: number,
  centerLon: number,
) {
  CONNECTIONS.forEach(([from, to, color, opacity]) => {
    const points = interpolateGreatCircle(from, to, 42);
    const elevated = points.map((point, index) => {
      const t = index / Math.max(points.length - 1, 1);
      return { point, radiusScale: 1 + Math.sin(Math.PI * t) * 0.17 };
    });

    context.strokeStyle = hexToRgba(color, opacity);
    context.lineWidth = 1.3;
    context.beginPath();

    let started = false;
    elevated.forEach(({ point, radiusScale }) => {
      const projected = projectPoint(point, centerLat, centerLon, radius * radiusScale, centerX, centerY);
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
}

function drawMarkers(
  context: CanvasRenderingContext2D,
  centerX: number,
  centerY: number,
  radius: number,
  centerLat: number,
  centerLon: number,
) {
  MARKER_COORDINATES.forEach((point, index) => {
    const projected = projectPoint(point, centerLat, centerLon, radius, centerX, centerY);
    if (!projected.visible) {
      return;
    }

    const glowRadius = index === 0 ? 9 : 7;
    const glow = context.createRadialGradient(projected.x, projected.y, 0, projected.x, projected.y, glowRadius);
    glow.addColorStop(0, index === 0 ? "rgba(227, 249, 255, 0.9)" : "rgba(158, 232, 255, 0.7)");
    glow.addColorStop(1, "rgba(99, 209, 255, 0)");
    context.fillStyle = glow;
    context.beginPath();
    context.arc(projected.x, projected.y, glowRadius, 0, Math.PI * 2);
    context.fill();

    context.fillStyle = index === 0 ? "#def8ff" : "#96e4ff";
    context.beginPath();
    context.arc(projected.x, projected.y, index === 0 ? 3.6 : 2.8, 0, Math.PI * 2);
    context.fill();
  });
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

function densifyPath(path: LatLon[], segmentsPerEdge: number) {
  const densified: LatLon[] = [];
  path.forEach((point, index) => {
    const next = path[(index + 1) % path.length];
    densified.push(point);
    for (let step = 1; step < segmentsPerEdge; step += 1) {
      const t = step / segmentsPerEdge;
      densified.push({
        lat: point.lat + (next.lat - point.lat) * t,
        lon: point.lon + (next.lon - point.lon) * t,
      });
    }
  });
  return densified;
}

function buildLandDots(paths: LatLon[][], step: number) {
  const dots: LatLon[] = [];

  for (let lat = -58; lat <= 82; lat += step) {
    for (let lon = -178; lon <= 178; lon += step) {
      if (paths.some((path) => pointInPolygon({ lat, lon }, path))) {
        dots.push({ lat, lon });
      }
    }
  }

  return dots;
}

function pointInPolygon(point: LatLon, polygon: LatLon[]) {
  let inside = false;

  for (let index = 0, previous = polygon.length - 1; index < polygon.length; previous = index, index += 1) {
    const xi = polygon[index].lon;
    const yi = polygon[index].lat;
    const xj = polygon[previous].lon;
    const yj = polygon[previous].lat;

    const intersects =
      yi > point.lat !== yj > point.lat &&
      point.lon < ((xj - xi) * (point.lat - yi)) / ((yj - yi) || 1e-9) + xi;

    if (intersects) {
      inside = !inside;
    }
  }

  return inside;
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
