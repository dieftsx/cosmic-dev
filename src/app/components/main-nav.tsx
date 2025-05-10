"use client";

import { useTheme } from "next-themes";
import type React from "react";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Rocket } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

export default function MainNav() {
  const [isOpen, setIsOPen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-16 md:h-20"></div>
        <Link href="/" className="flex items-center space-x-2">
          <Rocket className="h-5 w-5 text-blue-400" />
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            CosmicDev
          </span>
        </Link>
      </div>
    </header>
  );
}
