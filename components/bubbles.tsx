const BUBBLES = [
  { top: 120, left: "6%", size: 120, dur: "14s" },
  { top: 420, left: "78%", size: 180, dur: "18s" },
  { top: 900, left: "14%", size: 90, dur: "11s" },
  { top: 1500, left: "70%", size: 140, dur: "16s" },
  { top: 2100, left: "8%", size: 150, dur: "20s" },
  { top: 2800, left: "80%", size: 110, dur: "13s" },
];

export default function Bubbles() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="absolute rounded-full animate-drift"
          style={{
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            animationDuration: b.dur,
            background: "radial-gradient(circle at 32% 30%, rgba(255,255,255,.9), rgba(150,206,247,.42))",
          }}
        />
      ))}
    </div>
  );
}
