import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Cookie, 
  Shield, 
  Settings, 
  BarChart3, 
  Target, 
  Sliders, 
  Globe, 
  Zap, 
  RefreshCw, 
  HelpCircle,
  ChevronRight,
  ArrowUp,
  CheckCircle,
  XCircle,
  AlertCircle,
  Eye,
  Lock,
  Database,
  Mail,
  Building2,
  Table
} from "lucide-react";
import SEO from "@/components/SEO";

const sections = [
  { id: "o-que-sao-cookies", title: "O que são Cookies?", icon: Cookie },
  { id: "por-que-usamos", title: "Por que usamos Cookies?", icon: HelpCircle },
  { id: "cookies-essenciais", title: "Cookies Essenciais", icon: Shield },
  { id: "cookies-desempenho", title: "Cookies de Desempenho", icon: Zap },
  { id: "cookies-analise", title: "Cookies de Análise", icon: BarChart3 },
  { id: "cookies-publicidade", title: "Cookies de Publicidade", icon: Target },
  { id: "controle-cookies", title: "Como Controlar Cookies", icon: Sliders },
  { id: "cookies-utilizados", title: "Cookies Utilizados", icon: Table },
  { id: "outras-tecnologias", title: "Outras Tecnologias", icon: Eye },
  { id: "cookies-flash", title: "Cookies Flash", icon: Database },
  { id: "publicidade-direcionada", title: "Publicidade Direcionada", icon: Target },
  { id: "atualizacoes", title: "Atualizações", icon: RefreshCw },
  { id: "mais-informacoes", title: "Mais Informações", icon: Building2 },
];

const PoliticaCookies = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }));

      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Política de Cookies | AcquaFlux"
        description="Política de cookies da AcquaFlux. Saiba como utilizamos cookies e tecnologias de rastreamento em nosso site."
        canonical="/politica-cookies"
        keywords="política cookies AcquaFlux, cookies site, rastreamento web, LGPD cookies"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Cookie className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Política de Cookies</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Política de Cookies
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-4">
              Última atualização: 13 de Janeiro de 2026
            </p>
            
            <div className="glass-card p-6 text-left max-w-3xl mx-auto">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Esta Política de Cookies explica como a <strong className="text-foreground">AcquaFlux</strong> ("Empresa", "nós", "nos" e "nosso") 
                utiliza cookies e tecnologias semelhantes quando você visita nosso site em https://acquaflux.com.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Ela detalha o que são essas tecnologias, por que as usamos e quais são seus direitos sobre o uso delas. 
                Em alguns casos, podemos usar cookies para coletar informações que, se combinadas com outros dados, 
                podem se tornar informações pessoais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar */}
            <aside className="lg:w-80 shrink-0">
              <div className="lg:sticky lg:top-24">
                <div className="glass-card p-6 border border-primary/10">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <Cookie className="w-5 h-5 text-primary" />
                    Índice
                  </h3>
                  <nav className="space-y-1">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-center gap-2 group ${
                          activeSection === section.id
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <section.icon className={`w-4 h-4 shrink-0 ${
                          activeSection === section.id ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                        }`} />
                        <span className="truncate">{section.title}</span>
                        <ChevronRight className={`w-3 h-3 ml-auto shrink-0 transition-transform ${
                          activeSection === section.id ? "text-primary rotate-90" : "opacity-0 group-hover:opacity-100"
                        }`} />
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Content */}
            <div className="flex-1 min-w-0">
              <article className="space-y-8">
                
                {/* O que são Cookies */}
                <section id="o-que-sao-cookies" className="scroll-mt-28">
                  <div className="glass-card p-8 border border-primary/10 hover:border-primary/20 transition-colors">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Cookie className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">O que são Cookies?</h2>
                    </div>
                    
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Cookies são pequenos arquivos de dados armazenados no seu computador ou dispositivo móvel 
                        quando você visita um site. Eles são amplamente utilizados para garantir o funcionamento 
                        correto dos sites, melhorar a experiência do usuário e fornecer dados analíticos.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4 mt-6">
                        <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                          <div className="flex items-center gap-2 mb-2">
                            <Lock className="w-5 h-5 text-primary" />
                            <h4 className="font-semibold text-foreground">Cookies Próprios</h4>
                          </div>
                          <p className="text-sm">
                            Criados pelo próprio site que você está visitando (acquaflux.com).
                          </p>
                        </div>
                        
                        <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                          <div className="flex items-center gap-2 mb-2">
                            <Globe className="w-5 h-5 text-accent" />
                            <h4 className="font-semibold text-foreground">Cookies de Terceiros</h4>
                          </div>
                          <p className="text-sm">
                            Criados por empresas externas (ex: Google, Meta) para análise e publicidade.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Por que usamos */}
                <section id="por-que-usamos" className="scroll-mt-28">
                  <div className="glass-card p-8 border border-primary/10 hover:border-primary/20 transition-colors">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <HelpCircle className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Por que usamos Cookies?</h2>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Utilizamos cookies por diversos motivos, organizados nas categorias abaixo:
                    </p>
                    
                    <div className="grid gap-4">
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                          <Shield className="w-5 h-5 text-emerald-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Cookies Essenciais</h4>
                          <p className="text-sm text-muted-foreground">Funcionamento básico do site</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-blue-500/5 border border-blue-500/10">
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                          <Zap className="w-5 h-5 text-blue-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Cookies de Desempenho</h4>
                          <p className="text-sm text-muted-foreground">Otimização e preferências</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-500/5 border border-purple-500/10">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                          <BarChart3 className="w-5 h-5 text-purple-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Cookies de Análise</h4>
                          <p className="text-sm text-muted-foreground">Estatísticas e métricas</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-orange-500/5 border border-orange-500/10">
                        <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center shrink-0">
                          <Target className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">Cookies de Publicidade</h4>
                          <p className="text-sm text-muted-foreground">Anúncios personalizados</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Cookies Essenciais */}
                <section id="cookies-essenciais" className="scroll-mt-28">
                  <div className="glass-card p-8 border border-emerald-500/20 hover:border-emerald-500/30 transition-colors bg-gradient-to-br from-emerald-500/5 to-transparent">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 flex items-center justify-center">
                        <Shield className="w-6 h-6 text-emerald-500" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">1. Cookies Essenciais</h2>
                        <span className="text-sm text-emerald-600 font-medium">Estritamente necessários</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        São indispensáveis para o funcionamento básico do site — por exemplo, para manter sua sessão 
                        ativa ao preencher formulários ou navegar entre páginas.
                      </p>
                      
                      <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                        <div className="flex items-center gap-2 text-emerald-600">
                          <CheckCircle className="w-5 h-5" />
                          <span className="font-medium">Não requerem consentimento prévio</span>
                        </div>
                        <p className="text-sm mt-2 text-muted-foreground">
                          Conforme exigido pela LGPD e GDPR, esses cookies são necessários para o funcionamento do site.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Cookies de Desempenho */}
                <section id="cookies-desempenho" className="scroll-mt-28">
                  <div className="glass-card p-8 border border-blue-500/20 hover:border-blue-500/30 transition-colors bg-gradient-to-br from-blue-500/5 to-transparent">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center">
                        <Zap className="w-6 h-6 text-blue-500" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">2. Cookies de Desempenho</h2>
                        <span className="text-sm text-blue-600 font-medium">Funcionalidade aprimorada</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      Melhoram sua experiência, lembrando preferências (como idioma ou região) e otimizando 
                      o carregamento de páginas.
                    </p>
                  </div>
                </section>

                {/* Cookies de Análise */}
                <section id="cookies-analise" className="scroll-mt-28">
                  <div className="glass-card p-8 border border-purple-500/20 hover:border-purple-500/30 transition-colors bg-gradient-to-br from-purple-500/5 to-transparent">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center">
                        <BarChart3 className="w-6 h-6 text-purple-500" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">3. Cookies de Análise e Personalização</h2>
                        <span className="text-sm text-purple-600 font-medium">Dados agregados e anônimos</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Coletam dados agregados e anônimos sobre como os visitantes interagem com o site 
                        (páginas visitadas, tempo de permanência, origem do tráfego).
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-4 mt-6">
                        <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center">
                          <BarChart3 className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                          <p className="text-sm font-medium text-foreground">Melhorar usabilidade</p>
                        </div>
                        <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center">
                          <Target className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                          <p className="text-sm font-medium text-foreground">Medir campanhas</p>
                        </div>
                        <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-center">
                          <Eye className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                          <p className="text-sm font-medium text-foreground">Entender visitantes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Cookies de Publicidade */}
                <section id="cookies-publicidade" className="scroll-mt-28">
                  <div className="glass-card p-8 border border-orange-500/20 hover:border-orange-500/30 transition-colors bg-gradient-to-br from-orange-500/5 to-transparent">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center">
                        <Target className="w-6 h-6 text-orange-500" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold">4. Cookies de Publicidade</h2>
                        <span className="text-sm text-orange-600 font-medium">Anúncios relevantes</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Usados por parceiros como Google AdSense e Ezoic para exibir anúncios relevantes 
                        com base em seus interesses, evitar repetição excessiva e medir eficácia das campanhas.
                      </p>
                      
                      <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20">
                        <div className="flex items-center gap-2 text-orange-600">
                          <Lock className="w-5 h-5" />
                          <span className="font-medium">Privacidade Protegida</span>
                        </div>
                        <p className="text-sm mt-2 text-muted-foreground">
                          Esses cookies não identificam você pessoalmente, a menos que você tenha fornecido 
                          dados diretamente (ex: ao solicitar uma proposta).
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Como Controlar Cookies */}
                <section id="controle-cookies" className="scroll-mt-28">
                  <div className="glass-card p-8 border border-primary/10 hover:border-primary/20 transition-colors">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Sliders className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Como posso controlar os Cookies?</h2>
                    </div>
                    
                    <div className="space-y-6 text-muted-foreground leading-relaxed">
                      <p>
                        Você tem o direito de decidir se aceita ou rejeita cookies não essenciais. 
                        Pode exercer esse direito de duas formas:
                      </p>
                      
                      <div className="space-y-4">
                        <div className="p-6 rounded-xl bg-primary/5 border border-primary/10">
                          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Settings className="w-5 h-5 text-primary" />
                            1. Gerenciador de Consentimento de Cookies
                          </h4>
                          <p className="text-sm mb-4">
                            Ao acessar nosso site, você verá um banner de notificação onde poderá:
                          </p>
                          <div className="grid gap-2">
                            <div className="flex items-center gap-2 text-sm">
                              <CheckCircle className="w-4 h-4 text-emerald-500" />
                              <span>Aceitar todos os cookies</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <XCircle className="w-4 h-4 text-red-500" />
                              <span>Rejeitar todos (exceto os essenciais)</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Settings className="w-4 h-4 text-primary" />
                              <span>Personalizar suas preferências por categoria</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-6 rounded-xl bg-accent/5 border border-accent/10">
                          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                            <Globe className="w-5 h-5 text-accent" />
                            2. Configurações do Navegador
                          </h4>
                          <p className="text-sm mb-4">
                            Você também pode gerenciar cookies nas configurações do seu navegador:
                          </p>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {["Google Chrome", "Mozilla Firefox", "Safari", "Microsoft Edge"].map((browser) => (
                              <div key={browser} className="p-2 rounded-lg bg-background/50 text-center text-sm font-medium">
                                {browser}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                        <div className="flex items-start gap-2 text-amber-600">
                          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-medium">Importante:</span>
                            <p className="text-sm mt-1 text-muted-foreground">
                              Recusar cookies pode afetar a funcionalidade do site — por exemplo, formulários 
                              de contato podem não funcionar corretamente, ou você poderá ver anúncios menos relevantes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Cookies Utilizados */}
                <section id="cookies-utilizados" className="scroll-mt-28">
                  <div className="glass-card p-8 border border-primary/10 hover:border-primary/20 transition-colors">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Table className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Cookies Específicos Utilizados</h2>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      Abaixo estão os principais cookies utilizados em nosso site, com suas finalidades, 
                      provedores e prazos de validade:
                    </p>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-primary/20">
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Categoria</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Nome</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Fornecedor</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Finalidade</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground">Expiração</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-primary/10">
                          <tr className="hover:bg-primary/5 transition-colors">
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-600 text-xs font-medium">Desempenho</span>
                            </td>
                            <td className="py-3 px-4 font-mono text-xs">rc::h</td>
                            <td className="py-3 px-4 text-muted-foreground">Google</td>
                            <td className="py-3 px-4 text-muted-foreground">Proteção contra bots</td>
                            <td className="py-3 px-4 text-muted-foreground">Persistente</td>
                          </tr>
                          <tr className="hover:bg-primary/5 transition-colors">
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 rounded-full bg-purple-500/10 text-purple-600 text-xs font-medium">Análise</span>
                            </td>
                            <td className="py-3 px-4 font-mono text-xs">_ga, _ga_#</td>
                            <td className="py-3 px-4 text-muted-foreground">Google Analytics</td>
                            <td className="py-3 px-4 text-muted-foreground">Distinguir usuários</td>
                            <td className="py-3 px-4 text-muted-foreground">1 ano, 1 mês, 4 dias</td>
                          </tr>
                          <tr className="hover:bg-primary/5 transition-colors">
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 rounded-full bg-orange-500/10 text-orange-600 text-xs font-medium">Publicidade</span>
                            </td>
                            <td className="py-3 px-4 font-mono text-xs">test_cookie</td>
                            <td className="py-3 px-4 text-muted-foreground">DoubleClick</td>
                            <td className="py-3 px-4 text-muted-foreground">Verificar suporte</td>
                            <td className="py-3 px-4 text-muted-foreground">15 minutos</td>
                          </tr>
                          <tr className="hover:bg-primary/5 transition-colors">
                            <td className="py-3 px-4">
                              <span className="px-2 py-1 rounded-full bg-orange-500/10 text-orange-600 text-xs font-medium">Publicidade</span>
                            </td>
                            <td className="py-3 px-4 font-mono text-xs">Ezoic cookies</td>
                            <td className="py-3 px-4 text-muted-foreground">Ezoic Inc.</td>
                            <td className="py-3 px-4 text-muted-foreground">Personalização de anúncios</td>
                            <td className="py-3 px-4 text-muted-foreground">Até 13 meses</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mt-4 italic">
                      Observação: Os nomes e comportamentos dos cookies podem variar conforme atualizações dos provedores.
                    </p>
                  </div>
                </section>

                {/* Outras Tecnologias */}
                <section id="outras-tecnologias" className="scroll-mt-28">
                  <div className="glass-card p-8 border border-primary/10 hover:border-primary/20 transition-colors">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Eye className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Outras Tecnologias de Rastreamento</h2>
                    </div>
                    
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>Além dos cookies, podemos usar:</p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                          <h4 className="font-semibold text-foreground mb-2">Web Beacons</h4>
                          <p className="text-sm">
                            Pequenos gráficos invisíveis usados para monitorar cliques em e-mails, 
                            visualizações de anúncios ou conversões.
                          </p>
                        </div>
                        
                        <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                          <h4 className="font-semibold text-foreground mb-2">Tags e Scripts</h4>
                          <p className="text-sm">
                            Inseridos por plataformas como Google Tag Manager para análise avançada.
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground">
                        Essas tecnologias geralmente dependem de cookies para funcionar. 
                        Se você bloquear cookies, seu desempenho pode ser comprometido.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Cookies Flash */}
                <section id="cookies-flash" className="scroll-mt-28">
                  <div className="glass-card p-8 border border-primary/10 hover:border-primary/20 transition-colors">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Database className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Cookies Flash (LSOs)</h2>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      Atualmente, <strong className="text-foreground">não utilizamos</strong> cookies Flash 
                      ou Local Shared Objects (LSOs) em nosso site. Caso passemos a usá-los no futuro, 
                      atualizaremos esta política com transparência.
                    </p>
                  </div>
                </section>

                {/* Publicidade Direcionada */}
                <section id="publicidade-direcionada" className="scroll-mt-28">
                  <div className="glass-card p-8 border border-primary/10 hover:border-primary/20 transition-colors">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Target className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Publicidade Direcionada</h2>
                    </div>
                    
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        <strong className="text-foreground">Sim.</strong> Trabalhamos com redes de publicidade 
                        como Google AdSense e Ezoic, que podem instalar cookies de terceiros para exibir 
                        anúncios relevantes com base em suas visitas anteriores e comportamento em outros sites.
                      </p>
                      
                      <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                        <h4 className="font-semibold text-foreground mb-3">Optar por não receber anúncios personalizados:</h4>
                        <div className="space-y-2">
                          <a 
                            href="https://adssettings.google.com" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <ChevronRight className="w-4 h-4" />
                            adssettings.google.com
                          </a>
                          <a 
                            href="http://optout.networkadvertising.org" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-sm text-primary hover:underline"
                          >
                            <ChevronRight className="w-4 h-4" />
                            optout.networkadvertising.org
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Atualizações */}
                <section id="atualizacoes" className="scroll-mt-28">
                  <div className="glass-card p-8 border border-primary/10 hover:border-primary/20 transition-colors">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <RefreshCw className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Atualizações desta Política</h2>
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      Podemos atualizar esta política periodicamente para refletir mudanças em nossos serviços, 
                      tecnologias ou requisitos legais. A data da última atualização está sempre indicada no 
                      topo deste documento. Recomendamos que você a revise ocasionalmente.
                    </p>
                  </div>
                </section>

                {/* Mais Informações */}
                <section id="mais-informacoes" className="scroll-mt-28">
                  <div className="glass-card p-8 border border-primary/10 hover:border-primary/20 transition-colors">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <h2 className="text-2xl font-bold">Onde posso obter mais informações?</h2>
                    </div>
                    
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Se tiver dúvidas sobre o uso de cookies ou desejar exercer seus direitos de privacidade, 
                        entre em contato conosco:
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                          <div className="flex items-center gap-2 mb-2">
                            <Mail className="w-5 h-5 text-primary" />
                            <span className="font-semibold text-foreground">E-mail Geral</span>
                          </div>
                          <a href="mailto:contato@acquaflux.com" className="text-primary hover:underline">
                            contato@acquaflux.com
                          </a>
                        </div>
                        
                        <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                          <div className="flex items-center gap-2 mb-2">
                            <Lock className="w-5 h-5 text-accent" />
                            <span className="font-semibold text-foreground">Privacidade</span>
                          </div>
                          <a href="mailto:privacidade@acquaflux.com" className="text-accent hover:underline">
                            privacidade@acquaflux.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Footer Card */}
                <div className="glass-card p-8 border border-primary/10 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      AcquaFlux – Gestão Hídrica para Empresas
                    </h3>
                    <p className="text-muted-foreground">
                      Reduza custos e aumente sua eficiência no consumo de água.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-all duration-300 flex items-center justify-center z-50"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default PoliticaCookies;
