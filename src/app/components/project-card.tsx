
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  link?: string
}

export default function ProjectCard({ title, description, tags, imageUrl, link }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg dark:bg-slate-800 border-slate-200 dark:border-slate-700 h-full flex flex-col">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="pt-6 flex-grow">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <a
          href={link || "#"}
          className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
        >
          Ver Detalhes <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>
      </CardFooter>
    </Card>
  )
}
