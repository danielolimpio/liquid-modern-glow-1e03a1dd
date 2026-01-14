import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  FileText, 
  BookOpen, 
  Shield, 
  AlertTriangle, 
  Users, 
  FileCheck, 
  Settings, 
  Clock, 
  RefreshCw, 
  Scale, 
  Gavel, 
  CheckCircle, 
  AlertCircle, 
  Lock, 
  UserX, 
  Database, 
  Mail, 
  MessageSquare,
  ChevronRight,
  ArrowUp,
  Building2,
  Eye
} from "lucide-react";
import SEO from "@/components/SEO";

const sections = [
  { id: "nossos-servicos", title: "1. Nossos Serviços", icon: BookOpen },
  { id: "propriedade-intelectual", title: "2. Propriedade Intelectual", icon: Shield },
  { id: "representacoes-usuario", title: "3. Representações do Usuário", icon: Users },
  { id: "atividades-proibidas", title: "4. Atividades Proibidas", icon: AlertTriangle },
  { id: "contribuicoes-usuario", title: "5. Contribuições do Usuário", icon: FileCheck },
  { id: "licenca-contribuicao", title: "6. Licença de Contribuição", icon: FileText },
  { id: "gestao-servicos", title: "7. Gestão de Serviços", icon: Settings },
  { id: "vigencia-rescisao", title: "8. Vigência e Rescisão", icon: Clock },
  { id: "modificacoes", title: "9. Modificações", icon: RefreshCw },
  { id: "lei-aplicavel", title: "10. Lei Aplicável", icon: Scale },
  { id: "resolucao-controversias", title: "11. Resolução de Controvérsias", icon: Gavel },
  { id: "correcoes", title: "12. Correções", icon: CheckCircle },
  { id: "isencao-responsabilidade", title: "13. Isenção de Responsabilidade", icon: AlertCircle },
  { id: "limitacoes", title: "14. Limitações de Responsabilidade", icon: Lock },
  { id: "indenizacao", title: "15. Indenização", icon: UserX },
  { id: "dados-usuario", title: "16. Dados do Usuário", icon: Database },
  { id: "comunicacoes", title: "17. Comunicações Eletrônicas", icon: Mail },
  { id: "diversos", title: "18. Diversos", icon: MessageSquare },
  { id: "contato", title: "19. Contate-nos", icon: Building2 },
];

const TermosUso = () => {
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
        title="Termos de Uso | AcquaFlux"
        description="Termos de uso da AcquaFlux. Conheça as condições legais para utilização dos nossos serviços de gestão hídrica."
        canonical="/termos-uso"
        keywords="termos uso AcquaFlux, condições serviço, termos legais, contrato uso site"
        noindex={true}
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
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Termos Legais</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Termos de Uso
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-4">
              Última atualização: 13 de Janeiro de 2026
            </p>
            
            <div className="glass-card p-6 text-left max-w-3xl mx-auto">
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nós somos <strong className="text-foreground">AcquaFlux</strong> ("Empresa", "nós", "nosso"). 
                Operamos o site https://acquaflux.com, bem como quaisquer outros produtos e serviços relacionados 
                que façam referência ou estejam vinculados a estes termos legais.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos Legais constituem um acordo juridicamente vinculativo celebrado entre você, 
                seja pessoalmente ou em nome de uma entidade, e a AcquaFlux. Ao acessar os Serviços, 
                você concorda que leu, entendeu e aceitou estar vinculado a todos estes Termos Legais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <section className="py-4">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
              <p className="text-sm font-medium text-amber-600 dark:text-amber-400 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 flex-shrink-0" />
                <span>
                  Caso não concorde com todos estes Termos Legais, você está expressamente proibido de usar os 
                  Serviços e deve interromper o uso imediatamente.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar - Index */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <div className="glass-card p-6 border border-primary/10">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-primary/10">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <BookOpen className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-bold text-lg">Índice</h3>
                  </div>
                  
                  <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition-all duration-300 group ${
                          activeSection === section.id
                            ? "bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-l-2 border-primary"
                            : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <section.icon className={`w-4 h-4 flex-shrink-0 transition-colors ${
                          activeSection === section.id ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                        }`} />
                        <span className="line-clamp-1">{section.title}</span>
                        <ChevronRight className={`w-3 h-3 ml-auto transition-transform ${
                          activeSection === section.id ? "translate-x-1 text-primary" : "opacity-0 group-hover:opacity-100"
                        }`} />
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Content */}
            <main className="flex-1 min-w-0">
              {/* Section 1 - Nossos Serviços */}
              <article id="nossos-servicos" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">1. Nossos Serviços</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    As informações fornecidas ao usar os Serviços não se destinam à distribuição ou uso por qualquer 
                    pessoa ou entidade em qualquer jurisdição ou país onde tal distribuição ou uso seja contrário à 
                    lei ou regulamentação, ou que nos sujeite a qualquer exigência de registro nessa jurisdição ou país.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                    <h4 className="font-semibold mb-3">Os Serviços consistem em:</h4>
                    <div className="grid sm:grid-cols-2 gap-2">
                      {[
                        "Conteúdo informativo",
                        "Ferramentas de diagnóstico hídrico",
                        "Demonstrações de soluções tecnológicas",
                        "Materiais educacionais",
                        "Gestão eficiente de água",
                        "Conformidade ambiental e ESG"
                      ].map((item, i) => (
                        <span key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/50 text-sm">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              {/* Section 2 - Propriedade Intelectual */}
              <article id="propriedade-intelectual" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">2. Direitos de Propriedade Intelectual</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Nossa propriedade intelectual</h3>
                    <p className="text-muted-foreground mb-4">
                      Somos proprietários ou licenciados de todos os direitos de propriedade intelectual dos nossos 
                      Serviços, incluindo todo o código-fonte, bancos de dados, funcionalidades, software, design do site, 
                      áudio, vídeo, texto, fotografias e elementos gráficos (coletivamente, o "Conteúdo"), bem como as 
                      marcas comerciais, marcas de serviço e logotipos nele contidos (as "Marcas").
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-muted/30 border border-muted">
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <FileCheck className="w-4 h-4 text-primary" />
                      Seu uso de nossos Serviços
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">
                      Sujeito ao seu cumprimento destes Termos, concedemos a você uma licença não exclusiva, 
                      intransferível e revogável para:
                    </p>
                    <ul className="space-y-2 ml-4">
                      {[
                        "Acessar os Serviços",
                        "Baixar ou imprimir uma cópia de qualquer parte do Conteúdo ao qual você tenha obtido acesso de forma adequada"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                          <span className="text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                    <p className="text-sm text-amber-600 dark:text-amber-400">
                      <strong>Importante:</strong> Exceto conforme estabelecido nesta seção, nenhuma parte dos Serviços, 
                      Conteúdo ou Marcas pode ser copiada, reproduzida, republicada, carregada, exibida, transmitida, 
                      distribuída, vendida, licenciada ou explorada para qualquer finalidade comercial, sem nossa prévia 
                      autorização expressa por escrito.
                    </p>
                  </div>
                </div>
              </article>

              {/* Section 3 - Representações do Usuário */}
              <article id="representacoes-usuario" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">3. Representações do Usuário</h2>
                </div>
                
                <p className="text-muted-foreground mb-6">Ao utilizar os Serviços, você declara e garante que:</p>
                
                <div className="grid gap-3">
                  {[
                    "Tem capacidade legal e concorda em cumprir estes Termos",
                    "Não é menor de idade na sua jurisdição",
                    "Não acessará os Serviços por meios automatizados (bots, scripts, etc.)",
                    "Não usará os Serviços para fins ilegais ou não autorizados",
                    "Seu uso não violará nenhuma lei ou regulamento aplicável"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-primary/5">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary-foreground">{i + 1}</span>
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 rounded-xl bg-muted/20 border border-muted">
                  <p className="text-sm text-muted-foreground">
                    Caso forneça informações falsas ou incompletas, poderemos suspender ou encerrar sua conta imediatamente.
                  </p>
                </div>
              </article>

              {/* Section 4 - Atividades Proibidas */}
              <article id="atividades-proibidas" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center border border-red-500/20">
                    <AlertTriangle className="w-6 h-6 text-red-500" />
                  </div>
                  <h2 className="text-2xl font-bold">4. Atividades Proibidas</h2>
                </div>
                
                <p className="text-muted-foreground mb-6">Você não poderá usar os Serviços para:</p>
                
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Extrair dados sistematicamente (scraping, mineração) sem autorização",
                    "Enganar usuários ou obter credenciais de forma fraudulenta",
                    "Contornar medidas de segurança ou restrições técnicas",
                    "Difamar, assediar ou prejudicar a AcquaFlux ou terceiros",
                    "Enviar vírus, spam ou conteúdo malicioso",
                    "Usar bots, scripts ou ferramentas automatizadas",
                    "Remover avisos de direitos autorais",
                    "Impersonar outros usuários",
                    "Interferir no funcionamento dos Serviços",
                    "Utilizar para fins competitivos sem autorização",
                    "Realizar engenharia reversa do software"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-red-500/5 border border-red-500/10">
                      <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs text-red-500">✕</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </article>

              {/* Section 5 - Contribuições do Usuário */}
              <article id="contribuicoes-usuario" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <FileCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">5. Contribuições Geradas pelo Usuário</h2>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Os Serviços podem permitir que você envie sugestões, comentários ou informações (coletivamente, 
                  "Contribuições"). Ao fazê-lo, você declara que:
                </p>
                
                <div className="grid gap-4">
                  {[
                    { title: "Direito de contribuir", desc: "Tem direito de fornecer tais Contribuições" },
                    { title: "Direitos de terceiros", desc: "Elas não violam direitos de terceiros" },
                    { title: "Conteúdo apropriado", desc: "Não contêm conteúdo ilegal, difamatório ou ofensivo" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-primary/5">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* Section 6 - Licença de Contribuição */}
              <article id="licenca-contribuicao" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">6. Contribuição/Licença</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Você mantém a propriedade de suas Contribuições, mas nos concede uma licença mundial, irrevogável, 
                    não exclusiva, isenta de royalties para usar, reproduzir, modificar, publicar e distribuir tais 
                    Contribuições para fins de melhoria dos Serviços.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                    <p className="text-sm text-muted-foreground">
                      <strong className="text-foreground">Nota:</strong> Não reivindicamos propriedade sobre suas 
                      Contribuições, mas você é totalmente responsável por elas e isenta a AcquaFlux de qualquer 
                      responsabilidade decorrente delas.
                    </p>
                  </div>
                </div>
              </article>

              {/* Section 7 - Gestão de Serviços */}
              <article id="gestao-servicos" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">7. Gestão de Serviços</h2>
                </div>
                
                <p className="text-muted-foreground mb-6">Reservamo-nos o direito, mas não a obrigação, de:</p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { icon: Eye, title: "Monitorar", desc: "Monitorar os Serviços por violações" },
                    { icon: AlertTriangle, title: "Remover", desc: "Remover conteúdo inadequado" },
                    { icon: UserX, title: "Suspender", desc: "Suspender contas abusivas" },
                    { icon: Shield, title: "Proteger", desc: "Proteger nossos direitos e sistemas" }
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-muted/30 border border-primary/5 hover:border-primary/20 transition-colors">
                      <div className="flex items-center gap-3 mb-2">
                        <item.icon className="w-5 h-5 text-primary" />
                        <h4 className="font-semibold">{item.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* Section 8 - Vigência e Rescisão */}
              <article id="vigencia-rescisao" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">8. Vigência e Rescisão</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Estes Termos permanecem válidos enquanto você usar os Serviços. Podemos encerrar seu acesso a 
                    qualquer momento, sem aviso prévio, por violação destes Termos ou por qualquer outro motivo.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
                    <p className="text-sm text-amber-600 dark:text-amber-400">
                      <strong>Atenção:</strong> Após o encerramento, você não poderá criar nova conta sob qualquer nome.
                    </p>
                  </div>
                </div>
              </article>

              {/* Section 9 - Modificações */}
              <article id="modificacoes" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <RefreshCw className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">9. Modificações e Interrupções</h2>
                </div>
                
                <p className="text-muted-foreground">
                  Podemos alterar, suspender ou descontinuar os Serviços a qualquer momento, sem aviso. 
                  Não garantimos disponibilidade contínua. Você concorda que não somos responsáveis por 
                  perdas decorrentes de indisponibilidade temporária.
                </p>
              </article>

              {/* Section 10 - Lei Aplicável */}
              <article id="lei-aplicavel" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">10. Lei Aplicável</h2>
                </div>
                
                <div className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                  <p className="text-muted-foreground">
                    Estes Termos serão regidos pelas <strong className="text-foreground">leis do Brasil</strong>. 
                    Você concorda que os tribunais de <strong className="text-foreground">João Pessoa, Paraíba</strong>, 
                    terão jurisdição exclusiva para resolver disputas.
                  </p>
                </div>
              </article>

              {/* Section 11 - Resolução de Controvérsias */}
              <article id="resolucao-controversias" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Gavel className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">11. Resolução de Controvérsias</h2>
                </div>
                
                <div className="space-y-4">
                  {[
                    { 
                      title: "Negociações informais", 
                      desc: "As partes tentarão resolver disputas amigavelmente por 30 dias antes de qualquer ação legal." 
                    },
                    { 
                      title: "Arbitragem", 
                      desc: "Disputas não resolvidas serão submetidas à arbitragem administrada pela Câmara Europeia de Arbitragem (Bruxelas, Bélgica), com um árbitro, em inglês, sob a lei belga." 
                    },
                    { 
                      title: "Exceções", 
                      desc: "Ações relativas a propriedade intelectual, invasão de privacidade ou pedidos de liminar não estão sujeitas à arbitragem e serão julgadas pelos tribunais brasileiros." 
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-primary/5">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <ChevronRight className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>

              {/* Section 12 - Correções */}
              <article id="correcoes" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">12. Correções</h2>
                </div>
                
                <p className="text-muted-foreground">
                  Podemos corrigir erros, imprecisões ou omissões nos Serviços a qualquer momento, sem aviso prévio.
                </p>
              </article>

              {/* Section 13 - Isenção de Responsabilidade */}
              <article id="isencao-responsabilidade" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center border border-amber-500/20">
                    <AlertCircle className="w-6 h-6 text-amber-500" />
                  </div>
                  <h2 className="text-2xl font-bold">13. Isenção de Responsabilidade</h2>
                </div>
                
                <div className="p-4 rounded-xl bg-muted/30 border border-muted">
                  <p className="text-muted-foreground text-sm uppercase leading-relaxed">
                    Os Serviços são fornecidos "como estão" e "como disponíveis". Isentamos todas as garantias, 
                    expressas ou implícitas, incluindo comerciabilidade, adequação a finalidade específica e 
                    não violação. Não garantimos a precisão do conteúdo, nem assumimos responsabilidade por 
                    danos decorrentes de seu uso.
                  </p>
                </div>
              </article>

              {/* Section 14 - Limitações */}
              <article id="limitacoes" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">14. Limitações de Responsabilidade</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-muted/30 border border-muted">
                    <p className="text-muted-foreground text-sm uppercase leading-relaxed">
                      Em nenhuma hipótese seremos responsáveis por danos indiretos, incidentais, consequenciais 
                      ou lucros cessantes. Nossa responsabilidade total estará limitada ao valor pago por você 
                      a nós (se houver).
                    </p>
                  </div>
                  
                  <p className="text-sm text-muted-foreground italic">
                    Algumas jurisdições não permitem essas limitações — nesses casos, elas podem não se aplicar a você.
                  </p>
                </div>
              </article>

              {/* Section 15 - Indenização */}
              <article id="indenizacao" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <UserX className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">15. Indenização</h2>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Você concorda em nos indenizar por quaisquer reclamações decorrentes de:
                </p>
                
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Seu uso dos Serviços",
                    "Violação destes Termos",
                    "Violação de direitos de terceiros",
                    "Atos ilícitos ou abusivos"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/30 border border-primary/5">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-primary">{i + 1}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                
                <p className="mt-4 text-sm text-muted-foreground">
                  Reservamo-nos o direito de assumir a defesa de tais reclamações.
                </p>
              </article>

              {/* Section 16 - Dados do Usuário */}
              <article id="dados-usuario" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">16. Dados do Usuário</h2>
                </div>
                
                <p className="text-muted-foreground">
                  Você é responsável por todos os dados que enviar aos Serviços. Embora façamos backups, 
                  não garantimos recuperação total e isentamos responsabilidade por perda ou corrupção de dados.
                </p>
              </article>

              {/* Section 17 - Comunicações */}
              <article id="comunicacoes" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">17. Comunicações Eletrônicas</h2>
                </div>
                
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Você concorda em receber comunicações eletrônicas (e-mails, notificações). Todas as comunicações 
                    por meios eletrônicos satisfazem os requisitos legais de forma escrita.
                  </p>
                  
                  <div className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                    <p className="text-sm text-muted-foreground">
                      Você aceita o uso de <strong className="text-foreground">assinaturas eletrônicas</strong> para 
                      transações e comunicações relacionadas aos nossos Serviços.
                    </p>
                  </div>
                </div>
              </article>

              {/* Section 18 - Diversos */}
              <article id="diversos" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <MessageSquare className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">18. Diversos</h2>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { title: "Acordo integral", desc: "Estes Termos constituem o acordo integral entre as partes." },
                    { title: "Não renúncia", desc: "Nossa falha em exercer um direito não constitui renúncia." },
                    { title: "Severabilidade", desc: "Se alguma cláusula for considerada inválida, as demais permanecem em vigor." },
                    { title: "Independência", desc: "Não há relação de emprego, parceria ou joint venture entre você e nós." }
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-muted/30 border border-primary/5 hover:border-primary/20 transition-colors">
                      <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* Section 19 - Contato */}
              <article id="contato" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                    <Building2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold">19. Contate-nos</h2>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Se tiver dúvidas sobre estes Termos, entre em contato:
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <a 
                    href="mailto:contato@acquaflux.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">E-mail geral</p>
                      <p className="font-medium text-primary">contato@acquaflux.com</p>
                    </div>
                  </a>
                  
                  <a 
                    href="mailto:privacidade@acquaflux.com"
                    className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10 hover:border-primary/30 transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Privacidade</p>
                      <p className="font-medium text-primary">privacidade@acquaflux.com</p>
                    </div>
                  </a>
                </div>
              </article>

              {/* Footer Card */}
              <div className="glass-card p-8 border border-primary/10 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
                <div className="text-center">
                  <h3 className="text-xl font-bold mb-2">AcquaFlux – Gestão Hídrica para Empresas</h3>
                  <p className="text-muted-foreground">
                    Reduza custos e aumente sua eficiência no consumo de água.
                  </p>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default TermosUso;
