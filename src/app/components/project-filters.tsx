
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ProjectFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])

  const categories = [
    { value: "web", label: "Web" },
    { value: "mobile", label: "Mobile" },
    { value: "backend", label: "Backend" },
    { value: "iot", label: "IoT" },
  ]

  const technologies = [
    { value: "react", label: "React" },
    { value: "react-native", label: "React Native" },
    { value: "node", label: "Node.js" },
    { value: "next", label: "Next.js" },
    { value: "vue", label: "Vue.js" },
    { value: "django", label: "Django" },
    { value: "laravel", label: "Laravel" },
    { value: "mongodb", label: "MongoDB" },
    { value: "postgresql", label: "PostgreSQL" },
    { value: "firebase", label: "Firebase" },
  ]

  const toggleCategory = (value: string) => {
    setSelectedCategories((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]))
  }

  const toggleTechnology = (value: string) => {
    setSelectedTechnologies((prev) => (prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]))
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedTechnologies([])
  }

  return (
    <div className="flex gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-blue-800 text-blue-400 hover:bg-blue-900/50">
            Categoria
            {selectedCategories.length > 0 && (
              <span className="ml-1 w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
                {selectedCategories.length}
              </span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-slate-900 border-blue-900/50">
          <DropdownMenuLabel className="text-slate-300">Categorias de Projetos</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-slate-800" />
          {categories.map((category) => (
            <DropdownMenuCheckboxItem
              key={category.value}
              checked={selectedCategories.includes(category.value)}
              onCheckedChange={() => toggleCategory(category.value)}
              className="text-slate-300 focus:bg-blue-900/50 focus:text-white"
            >
              {category.label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="border-blue-800 text-blue-400 hover:bg-blue-900/50">
            Tecnologia
            {selectedTechnologies.length > 0 && (
              <span className="ml-1 w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center">
                {selectedTechnologies.length}
              </span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-slate-900 border-blue-900/50">
          <DropdownMenuLabel className="text-slate-300">Tecnologias</DropdownMenuLabel>
          <DropdownMenuSeparator className="bg-slate-800" />
          {technologies.map((tech) => (
            <DropdownMenuCheckboxItem
              key={tech.value}
              checked={selectedTechnologies.includes(tech.value)}
              onCheckedChange={() => toggleTechnology(tech.value)}
              className="text-slate-300 focus:bg-blue-900/50 focus:text-white"
            >
              {tech.label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      {(selectedCategories.length > 0 || selectedTechnologies.length > 0) && (
        <Button variant="ghost" size="sm" onClick={clearFilters} className="text-slate-400 hover:text-slate-300">
          Limpar filtros
        </Button>
      )}
    </div>
  )
}
