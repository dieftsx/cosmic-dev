
import Link from "next/link"
import { ChevronLeft, Rocket, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import StarField from "../components/star-field"
import CosmicProjectCard from "../components/cosmic-project-card"
import ProjectFilters from "../components/project-filters"
import MainNav from "../components/main-nav"

export default function ProjectsPage() {
  // Dados de exemplo para projetos
  const projects = [
    {
      id: 1,
      title: "Nebulosa E-commerce",
      description:
        "Plataforma de e-commerce com painel administrativo, integração de pagamentos e sistema de gestão de estoque.",
      tags: ["React", "Node.js", "MongoDB"],
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "web",
    },
    {
      id: 2,
      title: "Constelação Delivery",
      description: "Aplicativo mobile para serviço de delivery com rastreamento em tempo real e sistema de avaliações.",
      tags: ["React Native", "Firebase", "Google Maps API"],
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "mobile",
    },
    {
      id: 3,
      title: "Observatório Analítico",
      description:
        "Dashboard para visualização de dados em tempo real com gráficos interativos e relatórios personalizados.",
      tags: ["Next.js", "D3.js", "Laravel"],
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "web",
    },
    {
      id: 4,
      title: "Galáxia Social",
      description:
        "Rede social com recursos de compartilhamento de conteúdo, chat em tempo real e sistema de notificações.",
      tags: ["React", "Socket.io", "Express", "PostgreSQL"],
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "web",
    },
    {
      id: 5,
      title: "Órbita Financeira",
      description:
        "Sistema de gestão financeira com controle de despesas, receitas, investimentos e relatórios detalhados.",
      tags: ["Vue.js", "Node.js", "MySQL"],
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "web",
    },
    {
      id: 6,
      title: "Cometa Messenger",
      description: "Aplicativo de mensagens instantâneas com criptografia end-to-end e recursos de chamadas de vídeo.",
      tags: ["React Native", "WebRTC", "Firebase"],
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "mobile",
    },
    {
      id: 7,
      title: "Estação API",
      description: "API RESTful para integração de sistemas com autenticação JWT, cache e documentação automática.",
      tags: ["Node.js", "Express", "MongoDB", "Swagger"],
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "backend",
    },
    {
      id: 8,
      title: "Telescópio CMS",
      description: "Sistema de gerenciamento de conteúdo headless com editor visual e API GraphQL.",
      tags: ["Next.js", "GraphQL", "PostgreSQL"],
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "web",
    },
    {
      id: 9,
      title: "Satélite IoT",
      description:
        "Plataforma para monitoramento de dispositivos IoT com dashboard em tempo real e alertas configuráveis.",
      tags: ["React", "Node.js", "MQTT", "InfluxDB"],
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "iot",
    },
    {
      id: 10,
      title: "Pulsar Educacional",
      description: "Plataforma de ensino online com cursos, avaliações, fórum de discussão e certificados.",
      tags: ["React", "Django", "PostgreSQL"],
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "web",
    },
    {
      id: 11,
      title: "Quasar Wallet",
      description: "Carteira digital para criptomoedas com recursos de compra, venda e acompanhamento de mercado.",
      tags: ["React Native", "Blockchain API", "Node.js"],
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "mobile",
    },
    {
      id: 12,
      title: "Buraco Negro Backup",
      description: "Sistema de backup automático em nuvem com criptografia, compressão e agendamento.",
      tags: ["Python", "AWS S3", "Docker"],
      imageUrl: "/placeholder.svg?height=200&width=400",
      category: "backend",
    },
  ]

  return (
    <main className="min-h-screen bg-slate-950 text-white relative">
      <MainNav />
      <StarField />

      {/* Header */}
      <section className="pt-28 md:pt-36 pb-12 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <Link href="/" className="inline-flex items-center text-blue-400 hover:text-blue-300 mb-4">
                <ChevronLeft className="h-4 w-4 mr-1" />
                Voltar para a página inicial
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold flex items-center">
                <Rocket className="h-8 w-8 text-blue-400 mr-3" />
                Galáxia de Projetos
              </h1>
              <p className="text-slate-400 mt-2 max-w-2xl">
                Explore o universo completo dos meus projetos. Cada um representa uma estrela única no cosmos do
                desenvolvimento digital.
              </p>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="bg-slate-900/80 backdrop-blur-sm p-4 rounded-lg border border-blue-900/30 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-500" />
                <Input
                  placeholder="Buscar projetos..."
                  className="pl-10 bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-slate-400" />
                <span className="text-sm text-slate-400 hidden md:inline">Filtrar por:</span>
                <ProjectFilters />
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <CosmicProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tags={project.tags}
                imageUrl={project.imageUrl}
              />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <nav className="flex items-center space-x-2">
              <Button variant="outline" size="icon" className="border-blue-800 text-blue-400 hover:bg-blue-900/50">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-blue-800 bg-blue-900/50 text-blue-300">
                1
              </Button>
              <Button variant="outline" className="border-blue-800 text-blue-400 hover:bg-blue-900/50">
                2
              </Button>
              <Button variant="outline" className="border-blue-800 text-blue-400 hover:bg-blue-900/50">
                3
              </Button>
              <Button variant="outline" size="icon" className="border-blue-800 text-blue-400 hover:bg-blue-900/50">
                <ChevronLeft className="h-4 w-4 rotate-180" />
              </Button>
            </nav>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-slate-900/80 text-slate-400 text-center relative z-10">
        <div className="container mx-auto max-w-6xl">
          <p>
            © {new Date().getFullYear()} - Desenvolvedor Full Stack & Explorador Cósmico. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </main>
  )
}
