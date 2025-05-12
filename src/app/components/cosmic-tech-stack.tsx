
"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Rocket, Server, Globe, Database, Wrench } from "lucide-react"

type TechCategory = "frontend" | "backend" | "mobile" | "database" | "tools"

interface Tech {
  name: string
  icon: string
  category: TechCategory
  level: number // 1-5
}

export default function CosmicTechStack() {
  const [_activeCategory, setActiveCategory] = useState<TechCategory>("frontend")

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

  const getCategoryIcon = (category: TechCategory) => {
    switch (category) {
      case "frontend":
        return <Globe className="h-4 w-4 mr-2" />
      case "backend":
        return <Server className="h-4 w-4 mr-2" />
      case "mobile":
        return <Rocket className="h-4 w-4 mr-2" />
      case "database":
        return <Database className="h-4 w-4 mr-2" />
      case "tools":
        return <Wrench className="h-4 w-4 mr-2" />
    }
  }

  return (
    <div className="space-y-8">
      <Tabs
        defaultValue="frontend"
        className="w-full"
        onValueChange={(value) => setActiveCategory(value as TechCategory)}
      >
        <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
          {["frontend", "backend", "mobile", "database", "tools"].map((category) => (
            <TabsTrigger key={category} value={category} className="flex items-center justify-center">
              {getCategoryIcon(category as TechCategory)}
              <span>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
            </TabsTrigger>
          ))}
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
                    className="bg-slate-900/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-blue-900/50 flex flex-col items-center text-center relative overflow-hidden"
                  >
                    {/* Star background */}
                    <div className="absolute inset-0 opacity-20">
                      {Array.from({ length: 5 }).map((_, i) => (
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

                    <div className="text-2xl mb-2 relative z-10">{tech.icon}</div>
                    <h3 className="font-medium text-white relative z-10">{tech.name}</h3>
                    <div className="mt-2 flex gap-1 relative z-10">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${i < tech.level ? "bg-blue-500" : "bg-slate-700"}`}
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

