import {useMemo} from "react"
import {Sparkles} from "lucide-react"

interface Sparkle {
  id: number
  x: number       // % from left
  y: number       // % from top
  size: number    // px
  opacity: number
  duration: number // seconds for drift animation
  delay: number   // seconds before animation starts
  dx: number      // px horizontal drift
  dy: number      // px vertical drift
}

function generateSparkles(count: number): Sparkle[] {
  return Array.from({length: count}, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 12 + Math.random() * 16,
    opacity: 0.06 + Math.random() * 0.1,
    duration: 8 + Math.random() * 12,
    delay: Math.random() * -20,
    dx: -30 + Math.random() * 60,
    dy: -30 + Math.random() * 60,
  }))
}

export default function SparklesBackground({count = 25}: {count?: number}) {
  const sparkles = useMemo(() => generateSparkles(count), [count])

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {sparkles.map((s) => (
        <span
          key={s.id}
           className="absolute text-black"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            opacity: s.opacity,
            animation: `sparkle-drift ${s.duration}s ease-in-out ${s.delay}s infinite alternate`,
            ["--drift-x" as string]: `${s.dx}px`,
            ["--drift-y" as string]: `${s.dy}px`,
          }}
        >
          <Sparkles size={s.size} />
        </span>
      ))}
    </div>
  )
}
