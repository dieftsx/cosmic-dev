import { Telescope, Rocket } from "lucide-react";

import { Button } from "@/components/ui/button";

import MainNav from "./components/main-nav";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative">
      <MainNav />
      <section className="relative pt-28 md:pt-36 py-20 md:py-28 px-4 overflow-hidden">
        <div className="container mx-auto max-x-6l relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 font-medium text-sm mb-2 backdrop-blur-sm">
                Explorando o Universo Digital
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Desenvolvedor <span className="text-blue-400">Full Stack</span>{" "}
                navegando pelo cosmos do código
              </h1>
              <p className="text-lg text-slate-300">
                Como um astrônomo do desenvolvimento, exploro React, React
                Native, Node.js, PHP, Laravel, Django, Flask, Java e Go. Criando
                constelações digitais para seu negócio brilhar no universo
                online.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Iniciar Missão <Rocket className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-800 text-blue-300 hover:bg-blue-900/50"
                >
                  Ver Projetos <Telescope className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
