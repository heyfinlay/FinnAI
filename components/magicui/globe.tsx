"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe, { type COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";

type GlobeProps = {
  className?: string;
  autoRotateSpeed?: number;
  config?: Partial<COBEOptions>;
};

const DEFAULT_CONFIG: Omit<COBEOptions, "width" | "height" | "onRender"> = {
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.22,
  dark: 1,
  diffuse: 1.15,
  mapSamples: 12000,
  mapBrightness: 3.2,
  opacity: 0.92,
  baseColor: [0.11, 0.19, 0.27],
  markerColor: [0.55, 0.82, 1],
  glowColor: [0.39, 0.67, 0.92],
  markers: [],
};

export function Globe({ className = "", autoRotateSpeed = 0.0017, config = {} }: GlobeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerPosition = useRef(0);
  const [size, setSize] = useState({ width: 0, height: 0 });

  const rotation = useMotionValue(0);
  const smoothRotation = useSpring(rotation, {
    damping: 28,
    stiffness: 120,
    mass: 1,
  });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) {
      return;
    }

    const resize = () => {
      const nextWidth = Math.round(container.clientWidth);
      const nextHeight = Math.round(container.clientHeight);
      setSize((current) =>
        current.width === nextWidth && current.height === nextHeight
          ? current
          : { width: nextWidth, height: nextHeight },
      );
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !size.width || !size.height) {
      return;
    }

    let phi = 0;

    const globe = createGlobe(canvas, {
      ...DEFAULT_CONFIG,
      ...config,
      width: size.width * 2,
      height: size.height * 2,
      onRender: (state) => {
        if (pointerInteracting.current === null) {
          phi += autoRotateSpeed;
        }

        state.phi = phi + smoothRotation.get();
        state.width = size.width * 2;
        state.height = size.height * 2;
      },
    });

    return () => globe.destroy();
  }, [autoRotateSpeed, config, size.height, size.width, smoothRotation]);

  return (
    <div
      ref={containerRef}
      className={["relative touch-none select-none", className].filter(Boolean).join(" ")}
      onPointerDown={(event) => {
        pointerInteracting.current = event.pointerId;
        pointerPosition.current = event.clientX;
        event.currentTarget.setPointerCapture(event.pointerId);
      }}
      onPointerMove={(event) => {
        if (pointerInteracting.current !== event.pointerId) {
          return;
        }

        const delta = event.clientX - pointerPosition.current;
        pointerPosition.current = event.clientX;
        rotation.set(rotation.get() + delta * 0.0044);
      }}
      onPointerUp={(event) => {
        if (pointerInteracting.current === event.pointerId) {
          pointerInteracting.current = null;
          event.currentTarget.releasePointerCapture(event.pointerId);
        }
      }}
      onPointerCancel={() => {
        pointerInteracting.current = null;
      }}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}
