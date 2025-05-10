
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface CosmicProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  link?: string
}

export default function CosmicProjectCard({ title, description, tags, imageUrl, link }: CosmicProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 bg-slate-900/80 backdrop-blur-sm border-blue-900/30 h-full flex flex-col relative">
      {/* Star background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
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

      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/30 z-10"></div>
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="pt-6 flex-grow relative z-10">
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-slate-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-blue-900/40 text-blue-200 border border-blue-700/30">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0 relative z-10">
        <a href={link || "#"} className="text-blue-400 font-medium flex items-center hover:text-blue-300">
          Explorar Projeto <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  )
}
