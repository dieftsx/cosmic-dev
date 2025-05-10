
import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface CosmicServiceCardProps {
  icon: ReactNode
  title: string
  description: string
}

export default function CosmicServiceCard({ icon, title, description }: CosmicServiceCardProps) {
  return (
    <Card className="border-blue-900/30 bg-slate-900/80 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:shadow-blue-500/20 hover:border-blue-700/50 h-full relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.8 + 0.2,
            }}
          />
        ))}
      </div>

      <CardContent className="pt-6 relative z-10">
        <div className="mb-4 text-blue-400 bg-blue-900/30 p-3 rounded-lg inline-block">{icon}</div>
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-slate-300">{description}</p>
      </CardContent>
    </Card>
  )
}
