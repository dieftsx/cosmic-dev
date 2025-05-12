
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type TechCategory = "frontend" | "backend" | "mobile" | "database" | "tools"

interface Tech {
  name: string
  icon: string
  category: TechCategory
  level: number // 1-5
}

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState<TechCategory>("frontend")

  const technologies: Tech[] = [
    // Frontend
    { name: "React", icon: "⚛️", category: "frontend", level: 5 },
    { name: "Next.js", icon: "▲", category: "frontend", level: 5 },
    { name: "TypeScript", icon: "TS", category: "frontend", level: 4 },
    { name: "JavaScript", icon: "JS", category: "frontend", level: 5 },
    { name: "HTML/CSS", icon: "🌐", category: "frontend", level: 5 },
    { name: "Tailwind CSS", icon: "🌊", category: "frontend", level: 4 },

    // Backend
    { name: "Node.js", icon: "🟢", category: "backend", level: 5 },
    { name: "PHP", icon: "🐘", category: "backend", level: 4 },
    { name: "Laravel", icon: "🔺", category: "backend", level: 4 },
    { name: "Django", icon: "🐍", category: "backend", level: 4 },
    { name: "Flask", icon: "🧪", category: "backend", level: 4 },
    { name: "Java", icon: "☕", category: "backend", level: 3 },
    { name: "Go", icon: "🐹", category: "backend", level: 2 },

    // Mobile
    { name: "React Native", icon: "📱", category: "mobile", level: 4 },
    { name: "Expo", icon: "🔮", category: "mobile", level: 4 },

    // Database
    { name: "MongoDB", icon: "🍃", category: "database", level: 4 },
    { name: "MySQL", icon: "🐬", category: "database", level: 4 },
    { name: "PostgreSQL", icon: "🐘", category: "database", level: 4 },
    { name: "Firebase", icon: "🔥", category: "database", level: 3 },

    // Tools
    { name: "Git", icon: "🔄", category: "tools", level: 5 },
    { name: "Docker", icon: "🐳", category: "tools", level: 4 },
    { name: "AWS", icon: "☁️", category: "tools", level: 3 },
    { name: "CI/CD", icon: "🔄", category: "tools", level: 3 },
  ]

  return (
    <div className="space-y-8">
      <Tabs
        defaultValue="frontend"
        className="w-full"
        onValueChange={(value) => setActiveCategory(value as TechCategory)}
      >
        <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
          <TabsTrigger value="frontend">Frontend</TabsTrigger>
          <TabsTrigger value="backend">Backend</TabsTrigger>
          <TabsTrigger value="mobile">Mobile</TabsTrigger>
          <TabsTrigger value="database">Banco de Dados</TabsTrigger>
          <TabsTrigger value="tools">Ferramentas</TabsTrigger>
        </TabsList>

        {["frontend", "backend", "mobile", "database", "tools"].map((category) => (
          <TabsContent key={category} value={category} className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {technologies
                .filter((tech) => tech.category === category)
                .map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm border border-slate-200 dark:border-slate-700 flex flex-col items-center text-center"
                  >
                    <div className="text-2xl mb-2">{tech.icon}</div>
                    <h3 className="font-medium text-slate-900 dark:text-white">{tech.name}</h3>
                    <div className="mt-2 flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < tech.level ? "bg-blue-500" : "bg-slate-200 dark:bg-slate-700"
                          }`}
                        />
                      ))}
                    </div>
                  </motion.div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
