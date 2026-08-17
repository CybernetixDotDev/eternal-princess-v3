const sparkles = Array.from({ length: 28 }, (_, index) => ({
  id: index,
  left: `${(index * 37) % 100}%`,
  top: `${8 + ((index * 29) % 84)}%`,
  size: index % 5 === 0 ? "sparkle-large" : "sparkle-small",
  delay: `${(index % 9) * -2.4}s`,
  duration: `${18 + (index % 7) * 2}s`,
}));

export function SparkleField({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`sparkle-field pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className={`sparkle ${sparkle.size}`}
          style={{
            left: sparkle.left,
            top: sparkle.top,
            animationDelay: sparkle.delay,
            animationDuration: sparkle.duration,
          }}
        />
      ))}
    </div>
  );
}
