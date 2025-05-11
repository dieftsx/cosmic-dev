
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Code,
  Server,
  Smartphone,
  Globe,
  Zap,
  Rocket,
  Telescope,
  Atom,
  Orbit,
  Satellite,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ContactForm from "./components/contact-form"
import MainNav from "./components/main-nav"
import StarField from "./components/star-field"
import PlanetOrbit from "./components/planet-orbit"
import Constellation from "./components/constellation"
import CosmicTechStack from "./components/cosmic-tech-stack"
import CosmicServiceCard from "./components/cosmic-service-card"
import CosmicProjectCard from "./components/cosmic-project-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white relative">
      <MainNav />

      {/* Hero Section with Star Field */}
      <section className="relative pt-28 md:pt-36 py-20 md:py-28 px-4 overflow-hidden">
        <StarField />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 font-medium text-sm mb-2 backdrop-blur-sm">
                Explorando o Universo Digital
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Desenvolvedor <span className="text-blue-400">Full Stack</span> navegando pelo cosmos do código
              </h1>
              <p className="text-lg text-slate-300">
                Como um astrônomo do desenvolvimento, exploro React, React Native, Node.js, PHP, Laravel, Django, Flask,
                Java e Go. Criando constelações digitais para seu negócio brilhar no universo online.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Iniciar Missão <Rocket className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-blue-800 text-blue-300 hover:bg-blue-900/50">
                  Ver Projetos <Telescope className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="flex gap-4 pt-4">
                <Link
                  href="https://github.com"
                  target="_blank"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="mailto:contato@exemplo.com" className="text-slate-400 hover:text-white transition-colors">
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div className="hidden md:block h-[400px] relative">
              <PlanetOrbit />
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 px-4 relative" id="tecnologias">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-50"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <Atom className="h-8 w-8 text-blue-400 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold">Minha Constelação Tecnológica</h2>
            </div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Como estrelas no céu noturno, domino diversas tecnologias para criar sistemas que iluminam o caminho
              digital.
            </p>
          </div>
          <CosmicTechStack />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 relative" id="servicos">
        <div className="absolute inset-0 opacity-30">
          <Constellation className="h-full" />
        </div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <Orbit className="h-8 w-8 text-blue-400 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold">Órbitas de Serviços</h2>
            </div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Cada serviço é como um planeta em órbita, parte de um sistema solar de soluções completas para seu
              negócio.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CosmicServiceCard
              icon={<Code className="h-8 w-8" />}
              title="Desenvolvimento Frontend"
              description="Interfaces estelares com React e Next.js, criando experiências de usuário que brilham como estrelas no céu digital."
            />
            <CosmicServiceCard
              icon={<Server className="h-8 w-8" />}
              title="Desenvolvimento Backend"
              description="APIs robustas como o núcleo de uma estrela, alimentando suas aplicações com Node.js, PHP, Laravel, Django e Flask."
            />
            <CosmicServiceCard
              icon={<Smartphone className="h-8 w-8" />}
              title="Aplicativos Mobile"
              description="Aplicativos que cabem na palma da mão como pequenos universos, construídos com React Native para iOS e Android."
            />
            <CosmicServiceCard
              icon={<Globe className="h-8 w-8" />}
              title="Desenvolvimento Web Completo"
              description="Galáxias digitais completas, desde o design até a implementação e manutenção de todo o ecossistema web."
            />
            <CosmicServiceCard
              icon={<Zap className="h-8 w-8" />}
              title="Otimização de Performance"
              description="Como ajustar a trajetória de um foguete, otimizo aplicações existentes para atingirem velocidade e eficiência máximas."
            />
            <CosmicServiceCard
              icon={<Satellite className="h-8 w-8" />}
              title="Consultoria Técnica"
              description="Navegue pelo espaço digital com confiança através de orientação especializada para escolha de tecnologias e arquitetura."
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 relative" id="projetos">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 opacity-50"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center mb-4">
              <Telescope className="h-8 w-8 text-blue-400 mr-2" />
              <h2 className="text-3xl md:text-4xl font-bold">Galáxias de Projetos</h2>
            </div>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Explore o universo dos meus trabalhos mais recentes e descubra como posso ajudar a lançar seu próximo
              projeto.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CosmicProjectCard
              title="Nebulosa E-commerce"
              description="Plataforma de e-commerce com painel administrativo, integração de pagamentos e sistema de gestão de estoque."
              tags={["React", "Node.js", "MongoDB"]}
              imageUrl="/placeholder.svg?height=200&width=400"
            />
            <CosmicProjectCard
              title="Constelação Delivery"
              description="Aplicativo mobile para serviço de delivery com rastreamento em tempo real e sistema de avaliações."
              tags={["React Native", "Firebase", "Google Maps API"]}
              imageUrl="/placeholder.svg?height=200&width=400"
            />
            <CosmicProjectCard
              title="Observatório Analítico"
              description="Dashboard para visualização de dados em tempo real com gráficos interativos e relatórios personalizados."
              tags={["Next.js", "D3.js", "Laravel"]}
              imageUrl="/placeholder.svg?height=200&width=400"
            />
          </div>
          <div className="text-center mt-12">
            <Link href="/projects">
              <Button size="lg" variant="outline" className="border-blue-800 text-blue-300 hover:bg-blue-900/50">
                Explorar Todos os Projetos <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 relative" id="contato">
        <StarField />
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="inline-flex items-center mb-6">
                <Satellite className="h-7 w-7 text-blue-400 mr-2" />
                <h2 className="text-3xl md:text-4xl font-bold">Estabeleça Contato</h2>
              </div>
              <p className="text-slate-400 mb-8">
                Como uma sonda espacial, estou disponível para receber sinais sobre projetos freelance e oportunidades
                de trabalho. Entre em contato para iniciarmos nossa jornada juntos pelo universo digital.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">contato@exemplo.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">linkedin.com/in/seuusuario</span>
                </div>
                <div className="flex items-center gap-3">
                  <Github className="h-5 w-5 text-blue-400" />
                  <span className="text-slate-300">github.com/seuusuario</span>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-lg border border-blue-900/30 shadow-xl relative overflow-hidden">
                {/* Star background */}
                <div className="absolute inset-0 opacity-10 pointer-events-none">
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
                <h3 className="text-xl font-bold mb-4 text-white relative z-10">Transmita sua Mensagem</h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900/80 text-slate-400 text-center relative">
        <div className="container mx-auto max-w-6xl relative z-10">
          <p>
            © {new Date().getFullYear()} - Desenvolvedor Full Stack & Explorador Cósmico. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}

