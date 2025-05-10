
import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "./components/theme-provider"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "CosmicDev | Desenvolvedor Full Stack & Explorador Digital",
  description:
    "Desenvolvedor Full Stack especializado em React, React Native, Node.js, PHP, Laravel, Django, Flask, Java e Go. Navegando pelo cosmos do código para criar soluções digitais estelares.",
  keywords:
    "desenvolvedor full stack, react, react native, node.js, php, laravel, django, flask, java, go, freelancer, astronomia, cosmos, digital",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

