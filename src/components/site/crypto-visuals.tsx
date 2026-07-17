import { motion } from "motion/react";

export function FloatingCoin({
  symbol,
  className = "",
  delay = 0,
  size = 56,
}: {
  symbol: string;
  className?: string;
  delay?: number;
  size?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8 }}
      className={`absolute ${className}`}
      style={{ width: size, height: size }}
    >
      <div
        className="w-full h-full rounded-full glass-card shadow-soft flex items-center justify-center animate-float-slow"
        style={{ animationDelay: `${delay}s` }}
      >
        <span className="text-brand-gradient font-bold" style={{ fontSize: size * 0.4 }}>
          {symbol}
        </span>
      </div>
      <span className="absolute inset-0 rounded-full animate-pulse-ring" />
    </motion.div>
  );
}

export function BlockchainMesh() {
  const nodes = [
    [10, 20], [30, 10], [55, 25], [80, 15], [92, 40],
    [15, 55], [40, 60], [65, 55], [85, 70],
    [25, 85], [50, 90], [75, 88],
  ];
  const edges: [number, number][] = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [0, 5], [1, 6], [2, 6], [3, 7], [4, 8],
    [5, 6], [6, 7], [7, 8],
    [5, 9], [6, 10], [7, 10], [8, 11], [9, 10], [10, 11],
  ];
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
    >
      <defs>
        <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.53 0.22 265)" stopOpacity="0" />
          <stop offset="50%" stopColor="oklch(0.53 0.22 265)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="oklch(0.53 0.22 265)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          stroke="url(#line-grad)"
          strokeWidth="0.15"
          className="animate-dash"
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="0.5" fill="oklch(0.53 0.22 265)">
          <animate
            attributeName="r"
            values="0.4;0.9;0.4"
            dur={`${3 + (i % 4)}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  );
}

export function CandlestickChart({ className = "" }: { className?: string }) {
  const bars = Array.from({ length: 40 }, (_, i) => {
    const base = 40 + Math.sin(i * 0.5) * 15 + Math.cos(i * 0.31) * 8;
    const open = base + (i % 3 === 0 ? -4 : 3);
    const close = base + (i % 2 === 0 ? 5 : -3);
    const high = Math.max(open, close) + 4 + (i % 5);
    const low = Math.min(open, close) - 3 - (i % 4);
    return { open, close, high, low, up: close > open };
  });
  return (
    <svg viewBox="0 0 200 100" preserveAspectRatio="none" className={className}>
      {bars.map((b, i) => {
        const x = i * 5 + 2;
        const y = 100 - b.high;
        const h = b.high - b.low;
        const bodyY = 100 - Math.max(b.open, b.close);
        const bodyH = Math.abs(b.close - b.open) || 1;
        const color = b.up ? "oklch(0.53 0.22 265)" : "oklch(0.72 0.16 260)";
        return (
          <g key={i} opacity="0.7">
            <line x1={x + 1.5} y1={y} x2={x + 1.5} y2={y + h} stroke={color} strokeWidth="0.4" />
            <rect x={x} y={bodyY} width="3" height={bodyH} fill={color} rx="0.4">
              <animate
                attributeName="opacity"
                values="0.5;1;0.5"
                dur={`${4 + (i % 3)}s`}
                repeatCount="indefinite"
                begin={`${i * 0.05}s`}
              />
            </rect>
          </g>
        );
      })}
    </svg>
  );
}

export function GrowthLine({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 160" className={className} preserveAspectRatio="none">
      <defs>
        <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.53 0.22 265)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="oklch(0.53 0.22 265)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,130 C50,120 90,100 130,90 C170,80 200,95 240,70 C280,45 320,55 360,30 L400,20 L400,160 L0,160 Z"
        fill="url(#area-grad)"
      />
      <path
        d="M0,130 C50,120 90,100 130,90 C170,80 200,95 240,70 C280,45 320,55 360,30 L400,20"
        fill="none"
        stroke="oklch(0.53 0.22 265)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle r="5" fill="oklch(0.53 0.22 265)" cx="400" cy="20">
        <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export function Particles({ count = 18 }: { count?: number }) {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {Array.from({ length: count }).map((_, i) => {
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const size = 3 + (i % 4);
        const delay = (i % 7) * 0.4;
        return (
          <span
            key={i}
            className="absolute rounded-full bg-brand-gradient opacity-40 animate-drift"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              animationDelay: `${delay}s`,
              animationDuration: `${10 + (i % 6)}s`,
            }}
          />
        );
      })}
    </div>
  );
}