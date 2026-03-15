"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

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

export function HeroSection({ primaryHref, secondaryHref }: { primaryHref: string; secondaryHref: string }) {
  return (
    <section id="top" className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(116,180,255,0.16),transparent_26%),radial-gradient(circle_at_78%_40%,rgba(115,212,197,0.12),transparent_24%),linear-gradient(180deg,rgba(9,13,18,0.35),rgba(9,13,18,0))]" />

      <div className="section-container relative">
        <div className="grid items-center gap-12 pb-12 pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(420px,540px)] lg:gap-10 lg:pb-20 lg:pt-10">
          <div className="reveal-up max-w-2xl">
            <p className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-slate-300">
              Founder-Led AI Operations Advisory
            </p>

            <h1 className="mt-6 max-w-[11ch] font-display text-4xl leading-[0.98] text-white sm:text-5xl lg:text-[4.15rem]">
              Understand where AI fits before you commit to the wrong systems.
            </h1>

            <p className="mt-6 max-w-xl text-pretty text-base leading-8 text-slate-300 sm:text-lg">
              Temporary Utopia runs practical AI Operations Audits for business owners who want clarity before implementation.
              We map how work actually moves, where friction exists, and where AI should — and should not — be introduced.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
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

            <p className="mt-5 text-sm leading-7 text-slate-400">
              {trustItems.map((item, index) => (
                <span key={item}>
                  {index > 0 ? <span className="mx-2 text-slate-600">·</span> : null}
                  {item}
                </span>
              ))}
            </p>
          </div>

          <div className="reveal-up lg:justify-self-end" style={{ animationDelay: "80ms" }}>
            <InteractiveGlobe />
          </div>
        </div>
      </div>
    </section>
  );
}

function InteractiveGlobe() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const frameRef = useRef<number | null>(null);
  const stateRef = useRef<RotationState>({
    x: -0.22,
    y: -0.5,
    vx: 0,
    vy: 0.005,
    dragging: false,
    lastX: 0,
    lastY: 0,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(24, 1, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    renderer.domElement.style.display = "block";
    container.appendChild(renderer.domElement);

    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    const globeRadius = 1.38;
    const texture = createGlobeTexture();
    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(globeRadius, 72, 72),
      new THREE.MeshStandardMaterial({
        color: new THREE.Color("#07111a"),
        map: texture,
        emissive: new THREE.Color("#42bff8"),
        emissiveMap: texture,
        emissiveIntensity: 0.34,
        roughness: 0.88,
        metalness: 0.04,
      }),
    );
    globeGroup.add(globe);

    const atmosphere = new THREE.Mesh(
      new THREE.SphereGeometry(globeRadius * 1.035, 72, 72),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color("#5bc5ff"),
        transparent: true,
        opacity: 0.08,
        side: THREE.BackSide,
      }),
    );
    globeGroup.add(atmosphere);

    const ambient = new THREE.AmbientLight(0xc9edff, 0.72);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0x9ed8ff, 1.45);
    keyLight.position.set(4.2, 2.4, 5.2);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x2fb8ff, 0.65);
    rimLight.position.set(-4.4, -1.4, 1.6);
    scene.add(rimLight);

    const orbitGroup = new THREE.Group();
    scene.add(orbitGroup);
    orbitGroup.add(createOrbitLine(globeRadius * 1.24, globeRadius * 1.05, "#d7e7f8", 0.22, 0.38, 0.18, 0.22));
    orbitGroup.add(createOrbitLine(globeRadius * 1.1, globeRadius * 0.96, "#69d7ff", 0.14, -0.5, -0.08, -0.34));

    const markerCoordinates: LatLon[] = [
      { lat: 40.7, lon: -74.0 },
      { lat: 51.5, lon: -0.12 },
      { lat: 1.35, lon: 103.8 },
      { lat: -33.86, lon: 151.2 },
      { lat: 35.68, lon: 139.7 },
    ];

    markerCoordinates.forEach((coordinate, index) => {
      const marker = new THREE.Mesh(
        new THREE.SphereGeometry(index === 0 ? 0.05 : 0.038, 18, 18),
        new THREE.MeshBasicMaterial({
          color: index === 0 ? 0xd8f6ff : 0x93e6ff,
          transparent: true,
          opacity: index === 0 ? 0.95 : 0.82,
        }),
      );
      marker.position.copy(latLonToVector3(coordinate.lat, coordinate.lon, globeRadius * 1.01));
      globeGroup.add(marker);

      const glow = new THREE.Mesh(
        new THREE.SphereGeometry(index === 0 ? 0.1 : 0.075, 16, 16),
        new THREE.MeshBasicMaterial({
          color: 0x63d1ff,
          transparent: true,
          opacity: index === 0 ? 0.18 : 0.12,
        }),
      );
      glow.position.copy(marker.position);
      globeGroup.add(glow);
    });

    globeGroup.add(createConnection(markerCoordinates[0], markerCoordinates[1], globeRadius, "#8ad8ff", 0.48));
    globeGroup.add(createConnection(markerCoordinates[1], markerCoordinates[2], globeRadius, "#6fd7ff", 0.36));
    globeGroup.add(createConnection(markerCoordinates[0], markerCoordinates[3], globeRadius, "#8ad8ff", 0.28));

    const resize = () => {
      const { clientWidth, clientHeight } = container;
      renderer.setSize(clientWidth, clientHeight, false);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    resize();

    const animate = () => {
      const state = stateRef.current;

      if (!state.dragging) {
        state.y += state.vy;
        state.x = clamp(state.x + state.vx, -0.48, 0.48);
        state.vx *= 0.94;
        state.vy *= 0.992;
        state.vy += 0.00003;
      }

      globeGroup.rotation.x = state.x;
      globeGroup.rotation.y = state.y;
      orbitGroup.rotation.y = state.y * 0.35;
      orbitGroup.rotation.x = state.x * 0.2;

      renderer.render(scene, camera);
      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      resizeObserver.disconnect();
      texture.dispose();
      renderer.dispose();
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
        if (object instanceof THREE.Line) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      container.innerHTML = "";
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
    <div className="relative mx-auto flex w-full max-w-[34rem] items-center justify-center lg:min-h-[32rem]">
      <div className="pointer-events-none absolute inset-4 rounded-full bg-[radial-gradient(circle,rgba(96,165,250,0.26),rgba(14,22,33,0)_58%)] blur-3xl" />
      <div className="pointer-events-none absolute h-[94%] w-[94%] rounded-full border border-white/5 [transform:rotate(18deg)_scaleY(0.76)]" />
      <div className="pointer-events-none absolute h-[80%] w-[80%] rounded-full border border-sky-300/10 [transform:rotate(-12deg)_scaleX(0.84)]" />

      <div
        className="group relative h-[21rem] w-[21rem] touch-none select-none sm:h-[25rem] sm:w-[25rem] lg:h-[31rem] lg:w-[31rem]"
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
        aria-label="Interactive globe representing strategic AI operations advisory"
        tabIndex={0}
      >
        <div className="absolute inset-[6%] rounded-full bg-[radial-gradient(circle_at_46%_44%,rgba(125,211,252,0.18),rgba(15,23,34,0)_62%)] blur-2xl" />
        <div
          ref={containerRef}
          className="absolute inset-0 rounded-full"
        />
      </div>
    </div>
  );
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

type LatLon = {
  lat: number;
  lon: number;
};

function latLonToVector3(lat: number, lon: number, radius: number) {
  const phi = ((90 - lat) * Math.PI) / 180;
  const theta = ((lon + 180) * Math.PI) / 180;

  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function createOrbitLine(
  radiusX: number,
  radiusY: number,
  color: string,
  opacity: number,
  rotationZ: number,
  rotationX: number,
  rotationY: number,
) {
  const curve = new THREE.EllipseCurve(0, 0, radiusX, radiusY, 0, Math.PI * 2, false, 0);
  const points = curve.getPoints(220).map((point) => new THREE.Vector3(point.x, point.y, 0));
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineBasicMaterial({
    color: new THREE.Color(color),
    transparent: true,
    opacity,
  });
  const line = new THREE.LineLoop(geometry, material);
  line.rotation.z = rotationZ;
  line.rotation.x = rotationX;
  line.rotation.y = rotationY;
  return line;
}

function createConnection(from: LatLon, to: LatLon, radius: number, color: string, opacity: number) {
  const start = latLonToVector3(from.lat, from.lon, radius * 1.015);
  const end = latLonToVector3(to.lat, to.lon, radius * 1.015);
  const midpoint = start.clone().add(end).multiplyScalar(0.5).normalize().multiplyScalar(radius * 1.38);
  const curve = new THREE.CatmullRomCurve3([start, midpoint, end]);
  const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(80));
  const material = new THREE.LineBasicMaterial({
    color: new THREE.Color(color),
    transparent: true,
    opacity,
  });
  return new THREE.Line(geometry, material);
}

function createGlobeTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 2048;
  canvas.height = 1024;
  const context = canvas.getContext("2d");

  if (!context) {
    return new THREE.CanvasTexture(canvas);
  }

  context.fillStyle = "#061018";
  context.fillRect(0, 0, canvas.width, canvas.height);

  const baseGradient = context.createRadialGradient(canvas.width * 0.32, canvas.height * 0.28, 20, canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.6);
  baseGradient.addColorStop(0, "rgba(123, 211, 252, 0.16)");
  baseGradient.addColorStop(0.35, "rgba(14, 28, 40, 0.08)");
  baseGradient.addColorStop(1, "rgba(6, 16, 24, 0)");
  context.fillStyle = baseGradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.strokeStyle = "rgba(125, 211, 252, 0.16)";
  context.lineWidth = 1;
  for (let x = 0; x <= canvas.width; x += 90) {
    context.beginPath();
    context.moveTo(x, 0);
    context.lineTo(x, canvas.height);
    context.stroke();
  }

  context.strokeStyle = "rgba(226, 232, 240, 0.08)";
  for (let y = 0; y <= canvas.height; y += 78) {
    context.beginPath();
    context.moveTo(0, y);
    context.lineTo(canvas.width, y);
    context.stroke();
  }

  drawContinent(context, [
    [0.15, 0.22],
    [0.21, 0.18],
    [0.28, 0.2],
    [0.3, 0.27],
    [0.27, 0.33],
    [0.24, 0.4],
    [0.19, 0.44],
    [0.15, 0.38],
    [0.13, 0.3],
  ]);
  drawContinent(context, [
    [0.23, 0.48],
    [0.29, 0.45],
    [0.33, 0.5],
    [0.31, 0.6],
    [0.27, 0.72],
    [0.2, 0.7],
    [0.18, 0.56],
  ]);
  drawContinent(context, [
    [0.48, 0.2],
    [0.55, 0.17],
    [0.63, 0.18],
    [0.7, 0.24],
    [0.74, 0.31],
    [0.69, 0.37],
    [0.61, 0.36],
    [0.55, 0.31],
    [0.49, 0.28],
  ]);
  drawContinent(context, [
    [0.49, 0.38],
    [0.54, 0.35],
    [0.59, 0.37],
    [0.61, 0.45],
    [0.58, 0.57],
    [0.54, 0.67],
    [0.48, 0.63],
    [0.45, 0.52],
    [0.46, 0.43],
  ]);
  drawContinent(context, [
    [0.69, 0.62],
    [0.74, 0.6],
    [0.78, 0.64],
    [0.76, 0.7],
    [0.7, 0.71],
    [0.66, 0.66],
  ]);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  return texture;
}

function drawContinent(context: CanvasRenderingContext2D, points: number[][]) {
  context.beginPath();
  points.forEach(([x, y], index) => {
    const px = x * context.canvas.width;
    const py = y * context.canvas.height;
    if (index === 0) {
      context.moveTo(px, py);
      return;
    }
    context.lineTo(px, py);
  });
  context.closePath();
  context.fillStyle = "rgba(110, 214, 255, 0.12)";
  context.strokeStyle = "rgba(188, 233, 255, 0.16)";
  context.lineWidth = 1.4;
  context.fill();
  context.stroke();
}
