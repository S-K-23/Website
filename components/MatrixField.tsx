"use client";

import { useEffect, useRef } from "react";

type Node = {
  homeX: number;
  homeY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
};

const SPACING = 60; // px between grid points
const SPRING = 0.06; // pull back to home strength
const DAMPING = 0.82; // velocity decay each frame
const CURSOR_RADIUS = 200;
const CURSOR_STRENGTH = 0.32;
const CONNECT_BIAS = 1.6; // connect neighbors up to ~1.6 * SPACING away
const POINT_RADIUS = 1.1;

export function MatrixField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999, has: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;
    let cols = 0;
    let rows = 0;
    let nodes: Node[] = [];
    const connectDist2 = (SPACING * CONNECT_BIAS) ** 2;

    function buildGrid() {
      W = window.innerWidth;
      H = window.innerHeight;
      if (!canvas) return;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.ceil(W / SPACING) + 2;
      rows = Math.ceil(H / SPACING) + 2;

      // Offset so the grid stays centered
      const offsetX = (W - (cols - 1) * SPACING) / 2;
      const offsetY = (H - (rows - 1) * SPACING) / 2;

      nodes = new Array(cols * rows);
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = offsetX + c * SPACING;
          const y = offsetY + r * SPACING;
          nodes[r * cols + c] = {
            homeX: x,
            homeY: y,
            x,
            y,
            vx: 0,
            vy: 0,
          };
        }
      }
    }

    function onMove(e: MouseEvent) {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
      mouseRef.current.has = true;
    }
    function onLeave() {
      mouseRef.current.has = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    }

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", buildGrid);

    buildGrid();

    let rafId = 0;

    function frame() {
      ctx!.clearRect(0, 0, W, H);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const hasMouse = mouseRef.current.has;
      const cursorR2 = CURSOR_RADIUS * CURSOR_RADIUS;

      // Update physics
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Spring back to home
        n.vx += (n.homeX - n.x) * SPRING;
        n.vy += (n.homeY - n.y) * SPRING;

        // Cursor attraction
        if (hasMouse) {
          const dx = mx - n.x;
          const dy = my - n.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < cursorR2 && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const falloff = 1 - d / CURSOR_RADIUS;
            const f = falloff * falloff * CURSOR_STRENGTH;
            n.vx += (dx / d) * f * 10;
            n.vy += (dy / d) * f * 10;
          }
        }

        n.vx *= DAMPING;
        n.vy *= DAMPING;
        n.x += n.vx;
        n.y += n.vy;
      }

      // Draw connections to right + down + diag neighbors so we don't double-draw
      ctx!.lineWidth = 0.6;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const a = nodes[r * cols + c];

          // right
          if (c + 1 < cols) {
            drawEdge(ctx!, a, nodes[r * cols + c + 1], mx, my, hasMouse);
          }
          // down
          if (r + 1 < rows) {
            drawEdge(ctx!, a, nodes[(r + 1) * cols + c], mx, my, hasMouse);
          }
          // diag right-down
          if (c + 1 < cols && r + 1 < rows) {
            drawEdge(ctx!, a, nodes[(r + 1) * cols + c + 1], mx, my, hasMouse);
          }
          // diag right-up
          if (c + 1 < cols && r - 1 >= 0) {
            drawEdge(ctx!, a, nodes[(r - 1) * cols + c + 1], mx, my, hasMouse);
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        let alpha = 0.22;
        if (hasMouse) {
          const dx = mx - n.x;
          const dy = my - n.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < cursorR2) {
            const t = 1 - Math.sqrt(d2) / CURSOR_RADIUS;
            alpha = 0.22 + t * 0.55;
          }
        }
        ctx!.fillStyle = `rgba(200, 205, 215, ${alpha})`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, POINT_RADIUS, 0, Math.PI * 2);
        ctx!.fill();
      }

      rafId = requestAnimationFrame(frame);
    }

    function drawEdge(
      ctx: CanvasRenderingContext2D,
      a: Node,
      b: Node,
      mx: number,
      my: number,
      hasMouse: boolean,
    ) {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      const d2 = dx * dx + dy * dy;
      if (d2 > connectDist2) return; // links snap when stretched too far

      // Base grey alpha, brighter near cursor
      let alpha = 0.07;
      if (hasMouse) {
        const midX = (a.x + b.x) * 0.5;
        const midY = (a.y + b.y) * 0.5;
        const ddx = mx - midX;
        const ddy = my - midY;
        const dd2 = ddx * ddx + ddy * ddy;
        if (dd2 < CURSOR_RADIUS * CURSOR_RADIUS) {
          const t = 1 - Math.sqrt(dd2) / CURSOR_RADIUS;
          alpha = 0.07 + t * 0.22;
        }
      }

      ctx.strokeStyle = `rgba(200, 205, 215, ${alpha})`;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }

    if (!reduce) {
      rafId = requestAnimationFrame(frame);
    } else {
      // Draw one static frame for accessibility
      frame();
      cancelAnimationFrame(rafId);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", buildGrid);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="fixed inset-0 w-screen h-screen pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
