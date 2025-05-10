
"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Moon, Sun, Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  href: string
}

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()

  const navItems: NavItem[] = [
    { label: "Início", href: "#" },
    { label: "Serviços", href: "#servicos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Tecnologias", href: "#tecnologias" },
    { label: "Contato", href: "#contato" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (isOpen) setIsOpen(false)
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isOpen])

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-slate-900/90 backdrop-blur-md shadow-sm" : "bg-transparent",
      )}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#" className="flex items-center space-x-2">
            <Rocket className="h-5 w-5 text-blue-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              CosmicDev
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn("text-sm font-medium transition-colors hover:text-blue-400", "text-slate-300")}
              >
                {item.label}
              </Link>
            ))}
            <Button variant="outline" size="sm" className="ml-4 border-blue-600 text-blue-400 hover:bg-blue-900/50">
              Contratar
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-2"
              aria-label="Alternar tema"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Alternar tema"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Menu">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 transition-all duration-300 ease-in-out bg-slate-900/95 backdrop-blur-md shadow-lg",
          isOpen ? "top-16 opacity-100" : "-top-full opacity-0",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white font-medium py-2 hover:text-blue-400"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button className="mt-2 w-full bg-blue-600 hover:bg-blue-700">Contratar</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
