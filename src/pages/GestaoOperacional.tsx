import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Droplets, 
  Settings, 
  LineChart, 
  Leaf, 
  Shield, 
  TrendingUp, 
  Gauge, 
  Wifi, 
  CheckCircle2,
  ArrowRight,
  Target,
  Globe,
  BarChart3,
  Zap,
  Award,
  Building2,
  Sparkles,
  CircleDollarSign,
  Clock,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const GestaoOperacional = () => {
  const mainFeatures = [
    {
      icon: Droplets,
      title: "Sistema SEA",
      description: "Sistema de Economia de Água completo com diagnóstico gratuito e monitoramento inteligente",
      highlight: "Economia Garantida"
    },
    {
      icon: Wifi,
      title: "Monitoramento Remoto",
      description: "Sensores IoT em tempo real para identificação imediata de desperdícios e vazamentos",
      highlight: "24/7 Online"
    },
    {
      icon: CircleDollarSign,
      title: "Modelo Performance",
      description: "Pagamento baseado apenas na economia gerada, sem custo inicial para o cliente",
      highlight: "Sem Investimento"
    },
    {
      icon: BarChart3,
      title: "Analytics Avançado",
      description: "Dashboard completo com relatórios e insights para tomada de decisão estratégica",
      highlight: "Data-Driven"
    }
  ];

  const operationalAspects = [
    {
      icon: Target,
      title: "Foco na Água",
      description: "Diagnóstico gratuito, monitoramento remoto com sensores inteligentes e pagamento baseado na economia gerada, criando incentivo para resultados efetivos.",
      stats: [
        { label: "Economia Média", value: "35%" },
        { label: "ROI", value: "300%" }
      ]
    },
    {
      icon: Settings,
      title: "Eficiência Operacional",
      description: "Gestão sustentável que otimiza recursos hídricos, gerando maior resiliência operacional e redução significativa de custos a médio e longo prazo.",
      stats: [
        { label: "Redução de Custos", value: "40%" },
        { label: "Eficiência", value: "+60%" }
      ]
    },
    {
      icon: Leaf,
      title: "Sustentabilidade ESG",
      description: "Alinhamento com pilares ambientais, sociais e de governança, contribuindo para ODS globais e fortalecendo a imagem corporativa.",
      stats: [
        { label: "Redução CO2", value: "25%" },
        { label: "Score ESG", value: "+40pts" }
      ]
    },
    {
      icon: Gauge,
      title: "Tecnologia Avançada",
      description: "Sensores inteligentes e monitoramento remoto para identificar e combater desperdício com máxima eficiência e precisão.",
      stats: [
        { label: "Precisão", value: "99.9%" },
        { label: "Uptime", value: "99.5%" }
      ]
    }
  ];

  const benefits = [
    { icon: TrendingUp, label: "Contas de água reduzidas" },
    { icon: LineChart, label: "Consumo previsível" },
    { icon: Shield, label: "Manutenção preventiva" },
    { icon: Clock, label: "Implementação rápida" },
    { icon: Users, label: "Suporte dedicado" },
    { icon: Award, label: "Resultados garantidos" }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Diagnóstico Gratuito",
      description: "Análise completa do consumo hídrico da sua empresa para identificar oportunidades de economia."
    },
    {
      step: "02",
      title: "Instalação IoT",
      description: "Implementação de sensores inteligentes e sistema de monitoramento remoto em tempo real."
    },
    {
      step: "03",
      title: "Monitoramento 24/7",
      description: "Acompanhamento contínuo com alertas automáticos e identificação de anomalias."
    },
    {
      step: "04",
      title: "Economia Comprovada",
      description: "Resultados mensuráveis com relatórios detalhados. Pagamento baseado apenas na economia gerada."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Gestão Operacional | Sistema SEA de Economia de Água"
        description="Gestão operacional inteligente com o Sistema SEA. Monitoramento remoto 24/7, IoT avançado e economia de até 70% no consumo de água."
        canonical="/gestao-operacional"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/10" />
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
        
        {/* Decorative lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute bottom-40 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold text-primary">Gestão Hídrica Inteligente</span>
              <Settings className="w-4 h-4 text-primary animate-spin" style={{ animationDuration: '3s' }} />
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Gestão{" "}
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Operacional
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full" />
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-12">
              Transforme a gestão da água em um <span className="text-primary font-semibold">diferencial estratégico</span>, 
              econômico e ambiental para o seu negócio com tecnologia de ponta e resultados garantidos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-2xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 group"
              >
                Solicitar Diagnóstico
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/solucoes"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary/30 text-primary font-semibold rounded-2xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
              >
                Conhecer Soluções
              </Link>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-24">
            <path 
              d="M0,40 C240,100 480,20 720,60 C960,100 1200,40 1440,80 L1440,120 L0,120 Z" 
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* Main Features Grid */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <Sparkles className="w-4 h-4" />
              Diferenciais Competitivos
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Solução{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                360º
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Uma abordagem completa para transformar a gestão hídrica da sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="group relative h-full">
                {/* Glow effect */}
                <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                
                {/* Card */}
                <div className="relative h-full">
                  {/* Gradient border */}
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-primary via-secondary to-accent rounded-2xl opacity-40 group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="relative bg-card/90 backdrop-blur-xl rounded-2xl p-6 h-full flex flex-col">
                    {/* Icon */}
                    <div className="relative w-16 h-16 mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                      <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>

                    {/* Highlight badge */}
                    <span className="inline-flex self-start px-3 py-1 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 text-xs font-semibold text-primary mb-3">
                      {feature.highlight}
                    </span>

                    <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Aspects */}
      <section className="py-24 relative overflow-hidden bg-muted/20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <Globe className="w-4 h-4" />
              Principais Aspectos
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Pilares da{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Gestão
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra como nossa abordagem integrada gera resultados excepcionais
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {operationalAspects.map((aspect, index) => (
              <div key={index} className="group relative">
                {/* Outer glow */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                {/* Card */}
                <div className="relative">
                  {/* Gradient border */}
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-primary via-secondary to-accent rounded-3xl opacity-30 group-hover:opacity-60 transition-all duration-500" />
                  
                  <div className="relative bg-card/95 backdrop-blur-xl rounded-3xl p-8">
                    <div className="flex items-start gap-6">
                      {/* Icon column */}
                      <div className="relative flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
                        <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                          <aspect.icon className="w-10 h-10 text-primary" />
                        </div>
                        {/* Animated ring */}
                        <div className="absolute inset-0 rounded-2xl border border-primary/30 animate-ping opacity-30" style={{ animationDuration: '2s' }} />
                      </div>

                      {/* Content column */}
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-3">{aspect.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {aspect.description}
                        </p>

                        {/* Stats */}
                        <div className="flex gap-6">
                          {aspect.stats.map((stat, statIndex) => (
                            <div key={statIndex} className="relative">
                              <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                              <div className="relative text-center px-4 py-3 rounded-xl bg-muted/50 border border-primary/20">
                                <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                  {stat.value}
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-40 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <Zap className="w-4 h-4" />
              Como Funciona
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Modelo de{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Performance
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A Acquaflux só é remunerada se houver economia comprovada, garantindo resultados reais
            </p>
          </div>

          {/* Process timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Connection line */}
            <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary hidden lg:block" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="group relative">
                  {/* Step number circle */}
                  <div className="relative mx-auto w-20 h-20 mb-8">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-lg opacity-50 group-hover:opacity-80 transition-opacity" />
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                    </div>
                    {/* Outer ring */}
                    <div className="absolute -inset-2 rounded-full border-2 border-dashed border-primary/30 animate-spin" style={{ animationDuration: '20s' }} />
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 relative overflow-hidden bg-muted/20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <Award className="w-4 h-4" />
              Resultados Práticos
            </span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Benefícios{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Tangíveis
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-br from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-50 blur transition-all duration-300" />
                <div className="relative flex flex-col items-center p-6 rounded-2xl bg-card border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-center text-muted-foreground group-hover:text-foreground transition-colors">
                    {benefit.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="relative max-w-5xl mx-auto">
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-[3rem] blur-2xl" />
            
            {/* Gradient border */}
            <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-accent to-primary rounded-[2.5rem]" />
            
            <div className="relative bg-card rounded-[2.5rem] p-12 md:p-16">
              <div className="flex flex-col md:flex-row items-center gap-10">
                {/* Icon */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-3xl blur-2xl opacity-50" />
                  <div className="relative w-32 h-32 rounded-3xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-primary-foreground" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                    Ganho Financeiro +{" "}
                    <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      Sustentabilidade
                    </span>
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    A Acquaflux demonstra que é possível gerar um ganho financeiro significativo para as empresas 
                    enquanto se promove um uso consciente e sustentável da água, beneficiando o meio ambiente e a sociedade.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Link
                      to="/contato"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold rounded-2xl hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 group"
                    >
                      Fale com Especialista
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                      to="/impacto"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary/30 text-primary font-semibold rounded-2xl hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                    >
                      Ver Impacto
                    </Link>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-20 h-20 rounded-full border border-primary/20" />
              <div className="absolute bottom-8 left-8 w-12 h-12 rounded-full border border-accent/20" />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 relative overflow-hidden bg-muted/20 border-t border-primary/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">+500</div>
                <div className="text-sm text-muted-foreground">Empresas Atendidas</div>
              </div>
            </div>
            <div className="w-px h-12 bg-primary/20 hidden md:block" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <Droplets className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">15B+</div>
                <div className="text-sm text-muted-foreground">Litros Economizados</div>
              </div>
            </div>
            <div className="w-px h-12 bg-primary/20 hidden md:block" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">35%</div>
                <div className="text-sm text-muted-foreground">Economia Média</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GestaoOperacional;