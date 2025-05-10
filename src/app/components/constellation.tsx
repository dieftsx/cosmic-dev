
"use client"

import { useEffect, useRef } from "react"

interface ConstellationProps {
  className?: string
}

export default function Constellation({ className = "" }: ConstellationProps) {
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

    // Create nodes
    const nodeCount = 15
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: (Math.random() * canvas.width) / window.devicePixelRatio,
      y: (Math.random() * canvas.height) / window.devicePixelRatio,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: Math.random() * 2 + 1,
    }))

    // Animation
    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Update position
        node.x += node.vx
        node.y += node.vy

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width / window.devicePixelRatio) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height / window.devicePixelRatio) node.vy *= -1

        // Draw node
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(59, 130, 246, 0.8)"
        ctx.fill()

        // Connect nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[j].x - node.x
          const dy = nodes[j].y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.2 * (1 - distance / 100)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
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
