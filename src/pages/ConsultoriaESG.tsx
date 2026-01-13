import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Leaf, 
  Users, 
  Building2, 
  Shield, 
  Target, 
  TrendingUp, 
  Award, 
  FileCheck, 
  Handshake, 
  Globe, 
  TreePine, 
  Droplets,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  BarChart3,
  Scale,
  Heart
} from "lucide-react";
import { Link } from "react-router-dom";

const ConsultoriaESG = () => {
  const pilares = [
    {
      icon: Leaf,
      title: "Environmental",
      subtitle: "Ambiental",
      items: [
        "Gestão hídrica inteligente",
        "Redução de emissões",
        "Economia circular",
        "Biodiversidade"
      ]
    },
    {
      icon: Heart,
      title: "Social",
      subtitle: "Social",
      items: [
        "Impacto comunitário",
        "Diversidade e inclusão",
        "Saúde e bem-estar",
        "Educação ambiental"
      ]
    },
    {
      icon: Scale,
      title: "Governance",
      subtitle: "Governança",
      items: [
        "Transparência",
        "Ética corporativa",
        "Compliance",
        "Gestão de riscos"
      ]
    }
  ];

  const servicos = [
    {
      icon: Droplets,
      title: "Gestão Hídrica Avançada",
      description: "Implementação do SEA (Sistema de Eficiência de Água) com monitoramento remoto e em tempo real dos parâmetros hídricos.",
      highlight: "Economia de até 70%"
    },
    {
      icon: FileCheck,
      title: "Diagnóstico e Consultoria",
      description: "Avaliação completa do consumo de água para identificar ineficiências e implementar estratégias práticas de economia.",
      highlight: "Análise 360°"
    },
    {
      icon: Building2,
      title: "Gestão Multipontos",
      description: "Soluções para locais com múltiplos hidrômetros, como condomínios ou grandes complexos empresariais.",
      highlight: "Controle total"
    },
    {
      icon: Award,
      title: "Certificações ESG",
      description: "Auxílio na melhoria de indicadores ESG por meio de gestão hídrica eficiente, garantindo conformidade legal.",
      highlight: "Compliance garantido"
    }
  ];

  const beneficios = [
    { icon: TrendingUp, title: "Valorização de Mercado", value: "+35%" },
    { icon: Shield, title: "Redução de Riscos", value: "-60%" },
    { icon: Target, title: "Eficiência Operacional", value: "+45%" },
    { icon: Globe, title: "Reputação Global", value: "AAA" }
  ];

  const etapas = [
    {
      number: "01",
      title: "Diagnóstico Inicial",
      description: "Análise completa da situação atual e identificação de oportunidades"
    },
    {
      number: "02",
      title: "Planejamento Estratégico",
      description: "Desenvolvimento de roadmap personalizado com metas e indicadores"
    },
    {
      number: "03",
      title: "Implementação",
      description: "Execução das soluções com tecnologia de ponta e acompanhamento"
    },
    {
      number: "04",
      title: "Monitoramento Contínuo",
      description: "Acompanhamento de resultados e otimização constante"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/10" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl" />
          
          {/* Premium Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.02]" 
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                               linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-8">
              <div className="flex gap-1">
                <Leaf className="w-4 h-4 text-primary" />
                <Heart className="w-4 h-4 text-secondary" />
                <Scale className="w-4 h-4 text-accent" />
              </div>
              <span className="text-sm font-medium text-primary">
                Environmental • Social • Governance
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              <span className="text-foreground">Consultoria</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                ESG Especializada
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Transformamos a gestão hídrica em diferencial estratégico, econômico e ambiental. 
              Soluções que geram até <span className="text-primary font-semibold">70% de economia</span> e 
              fortalecem seus indicadores ESG.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-6 text-lg group">
                Solicitar Consultoria
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 px-8 py-6 text-lg">
                Conhecer Metodologia
              </Button>
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 L0,120 Z" 
                  fill="url(#esg-wave-gradient)" fillOpacity="0.1"/>
            <defs>
              <linearGradient id="esg-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="50%" stopColor="hsl(var(--secondary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Pilares ESG Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Os Três Pilares</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-foreground">Estratégia </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ESG Integrada</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossa abordagem holística integra os três pilares fundamentais para uma transformação sustentável completa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pilares.map((pilar, index) => (
              <div key={index} className="group relative">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-primary/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 backdrop-blur-xl overflow-hidden">
                  {/* Top Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg">
                    <pilar.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <div className="mb-2">
                    <span className="text-sm font-medium text-primary">
                      {pilar.title}
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                    {pilar.subtitle}
                  </h3>

                  <ul className="space-y-3">
                    {pilar.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom Corner Decoration */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Droplets className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Especialidade Acquaflux</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-foreground">Serviços de </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Gestão Hídrica</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções completas focadas na sustentabilidade hídrica e economia de água para médias e grandes empresas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicos.map((servico, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <servico.icon className="w-7 h-7 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-heading font-bold text-foreground">
                          {servico.title}
                        </h3>
                        <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                          {servico.highlight}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {servico.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <BarChart3 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Resultados Comprovados</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="text-foreground">Impacto </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mensurável</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Empresas que adotam práticas ESG com foco em gestão hídrica experimentam benefícios 
                tangíveis em suas operações, reputação e resultados financeiros.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                    <beneficio.icon className="w-8 h-8 text-primary mb-3" />
                    <div className="text-3xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                      {beneficio.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{beneficio.title}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Dashboard */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 backdrop-blur-xl">
                {/* ESG Score Display */}
                <div className="text-center mb-8">
                  <div className="text-6xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    A+
                  </div>
                  <div className="text-muted-foreground">Rating ESG Projetado</div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-foreground font-medium">Environmental</span>
                      <span className="text-primary">92%</span>
                    </div>
                    <div className="h-3 rounded-full bg-muted/50 overflow-hidden">
                      <div className="h-full w-[92%] bg-gradient-to-r from-primary to-secondary rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-foreground font-medium">Social</span>
                      <span className="text-secondary">87%</span>
                    </div>
                    <div className="h-3 rounded-full bg-muted/50 overflow-hidden">
                      <div className="h-full w-[87%] bg-gradient-to-r from-secondary to-accent rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-foreground font-medium">Governance</span>
                      <span className="text-accent">95%</span>
                    </div>
                    <div className="h-3 rounded-full bg-muted/50 overflow-hidden">
                      <div className="h-full w-[95%] bg-gradient-to-r from-accent to-primary rounded-full" />
                    </div>
                  </div>
                </div>

                {/* ODS Badges */}
                <div className="mt-8 pt-6 border-t border-border/50">
                  <div className="text-xs text-muted-foreground text-center mb-4">Alinhamento ODS</div>
                  <div className="flex justify-center gap-2 flex-wrap">
                    {["ODS 6", "ODS 12", "ODS 13", "ODS 14", "ODS 17"].map((ods, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                        {ods}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processo Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-muted/20 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Target className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Nossa Metodologia</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-foreground">Processo de </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Transformação</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um processo estruturado para garantir resultados consistentes e mensuráveis.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {etapas.map((etapa, index) => (
                <div key={index} className="relative group">
                  <div className="relative p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm text-center hover:border-primary/30 transition-all duration-300">
                    {/* Step Number */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform">
                      <span className="text-xl font-heading font-bold text-primary-foreground">{etapa.number}</span>
                    </div>
                    
                    <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                      {etapa.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {etapa.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl" />
            <div className="relative p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-card to-accent/10 border border-primary/20 backdrop-blur-xl text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <Handshake className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Parceria Estratégica</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="text-foreground">Inicie sua Jornada </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ESG</span>
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Solicite uma consultoria gratuita e descubra como a Acquaflux pode transformar 
                sua gestão hídrica em vantagem competitiva sustentável.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contato">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-6 text-lg group">
                    Agendar Consultoria
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 px-8 py-6 text-lg">
                  Falar com Especialista
                </Button>
              </div>

              {/* Social Proof */}
              <div className="mt-10 pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">Acompanhe nas redes sociais</p>
                <div className="flex justify-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center hover:bg-primary/20 transition-colors">
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ConsultoriaESG;
