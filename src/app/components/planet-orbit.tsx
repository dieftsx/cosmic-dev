
"use client"

import { useEffect, useRef } from "react"

interface PlanetOrbitProps {
  className?: string
}

export default function PlanetOrbit({ className = "" }: PlanetOrbitProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      const devicePixelRatio = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * devicePixelRatio
      canvas.height = rect.height * devicePixelRatio

      ctx.scale(devicePixelRatio, devicePixelRatio)
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Define planets
    const planets = [
      { radius: 4, orbitRadius: 50, color: "#60a5fa", speed: 0.01, angle: 0 },
      { radius: 6, orbitRadius: 90, color: "#34d399", speed: 0.007, angle: Math.PI / 2 },
      { radius: 3, orbitRadius: 130, color: "#f97316", speed: 0.005, angle: Math.PI },
      { radius: 5, orbitRadius: 170, color: "#a855f7", speed: 0.003, angle: Math.PI * 1.5 },
    ]

    // Animation
    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / (2 * window.devicePixelRatio)
      const centerY = canvas.height / (2 * window.devicePixelRatio)

      // Draw orbits
      planets.forEach((planet) => {
        ctx.beginPath()
        ctx.arc(centerX, centerY, planet.orbitRadius, 0, Math.PI * 2)
        ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
        ctx.stroke()
      })

      // Draw central "sun"
      ctx.beginPath()
      ctx.arc(centerX, centerY, 10, 0, Math.PI * 2)
      ctx.fillStyle = "#3b82f6"
      ctx.fill()

      // Draw planets
      planets.forEach((planet) => {
        // Update planet position
        planet.angle += planet.speed

        const x = centerX + Math.cos(planet.angle) * planet.orbitRadius
        const y = centerY + Math.sin(planet.angle) * planet.orbitRadius

        // Draw planet
        ctx.beginPath()
        ctx.arc(x, y, planet.radius, 0, Math.PI * 2)
        ctx.fillStyle = planet.color
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={`w-full h-full ${className}`} />
}
