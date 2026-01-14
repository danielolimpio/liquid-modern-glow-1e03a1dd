import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Wifi, 
  Radio, 
  Cpu, 
  Activity, 
  Signal, 
  Gauge,
  Zap,
  Eye,
  BarChart3,
  Bell,
  Shield,
  Clock,
  Droplets,
  TrendingUp,
  ChevronRight,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Target,
  Award,
  Globe,
  Server,
  Database,
  Waves,
  CircleDot,
  Router,
  Smartphone
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const MonitoramentoIoT = () => {
  const recursos = [
    {
      icon: Radio,
      title: "Sensores Inteligentes",
      description: "Dispositivos de última geração para coleta contínua de dados em tempo real"
    },
    {
      icon: Activity,
      title: "Monitoramento 24/7",
      description: "Acompanhamento ininterrupto com alertas instantâneos de anomalias"
    },
    {
      icon: Cpu,
      title: "Processamento IA",
      description: "Algoritmos avançados para análise preditiva e detecção de padrões"
    },
    {
      icon: Bell,
      title: "Alertas em Tempo Real",
      description: "Notificações imediatas via app, SMS e email para ação rápida"
    }
  ];

  const processoSEA = [
    {
      step: "01",
      title: "Instalação IoT",
      description: "Equipamentos conectados são instalados em pontos estratégicos do sistema hidráulico",
      icon: Router,
      detail: "Plug & Play"
    },
    {
      step: "02",
      title: "Coleta de Dados",
      description: "Sensores coletam informações de vazão, pressão e consumo continuamente",
      icon: Database,
      detail: "Real-time"
    },
    {
      step: "03",
      title: "Análise Inteligente",
      description: "IA processa dados identificando desperdícios, vazamentos e anomalias",
      icon: Cpu,
      detail: "Machine Learning"
    },
    {
      step: "04",
      title: "Ação Corretiva",
      description: "Alertas automáticos e relatórios para tomada de decisão imediata",
      icon: Zap,
      detail: "Instantâneo"
    }
  ];

  const metricas = [
    { value: "99.9%", label: "Uptime Sistema", icon: Signal },
    { value: "<1s", label: "Latência", icon: Clock },
    { value: "50M+", label: "Dados/dia", icon: Database },
    { value: "24/7", label: "Monitoramento", icon: Eye }
  ];

  const beneficios = [
    {
      icon: Droplets,
      title: "Detecção de Vazamentos",
      description: "Identificação imediata de vazamentos antes que causem danos significativos",
      stat: "-95% tempo detecção"
    },
    {
      icon: BarChart3,
      title: "Análise de Padrões",
      description: "Compreensão profunda dos hábitos de consumo para otimização contínua",
      stat: "+40% eficiência"
    },
    {
      icon: Shield,
      title: "Prevenção Proativa",
      description: "Antecipação de problemas com manutenção preditiva baseada em dados",
      stat: "-70% falhas"
    },
    {
      icon: TrendingUp,
      title: "Otimização Contínua",
      description: "Melhoria constante através de insights gerados por inteligência artificial",
      stat: "+60% economia"
    }
  ];

  const conquistas = [
    { number: "4x", title: "Campeã Water & Sanitation", subtitle: "100 Open Startups" },
    { number: "15M+", title: "Litros Economizados", subtitle: "Por mês" },
    { number: "R$50M+", title: "Economia Gerada", subtitle: "Para clientes" },
    { number: "500+", title: "Dispositivos Ativos", subtitle: "Em operação" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Monitoramento IoT | Sensores Inteligentes para Gestão Hídrica"
        description="Monitoramento IoT 24/7 com sensores inteligentes e IA. Detecção de vazamentos em tempo real, análise preditiva e economia de até 60%."
        canonical="/monitoramento-iot"
        keywords="monitoramento IoT água, sensores inteligentes água, detecção vazamentos, análise preditiva hídrica, telemetria água, IoT industrial água"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/10" />
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-3xl" />
          
          {/* IoT Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Animated Signal Lines */}
          <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse" />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-secondary/20 to-transparent animate-pulse delay-500" />
          <div className="absolute top-3/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 mb-8">
              <div className="flex gap-1 items-center">
                <Wifi className="w-4 h-4 text-primary" />
                <div className="w-1 h-1 rounded-full bg-secondary animate-ping" />
                <Signal className="w-4 h-4 text-secondary" />
                <div className="w-1 h-1 rounded-full bg-accent animate-ping delay-300" />
                <Radio className="w-4 h-4 text-accent" />
              </div>
              <span className="text-sm font-medium text-primary">
                Internet das Coisas • Tempo Real • Inteligência
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              <span className="text-foreground">Monitoramento</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                IoT Avançado
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Tecnologia de ponta para <span className="text-primary font-semibold">gestão hídrica inteligente</span>. 
              Sensores conectados, análise em tempo real e <span className="text-accent font-semibold">economia comprovada</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-6 text-lg group">
                Conhecer o Sistema SEA
                <Wifi className="ml-2 h-5 w-5 group-hover:animate-pulse" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 px-8 py-6 text-lg">
                Demo ao Vivo
              </Button>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="container mx-auto px-4 mt-16 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metricas.map((metrica, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-accent/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm text-center">
                    <metrica.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      {metrica.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{metrica.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full">
            <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,90 1440,60 L1440,120 L0,120 Z" 
                  fill="url(#iot-wave-gradient)" fillOpacity="0.1"/>
            <defs>
              <linearGradient id="iot-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="50%" stopColor="hsl(var(--secondary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Recursos IoT Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Tecnologia de Ponta</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-foreground">Infraestrutura </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">IoT Completa</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sensores inteligentes e plataforma de análise para controle total do seu consumo hídrico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recursos.map((recurso, index) => (
              <div key={index} className="group relative">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 backdrop-blur-xl overflow-hidden">
                  {/* Top Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
                  
                  {/* Animated Signal */}
                  <div className="absolute top-4 right-4 flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                  </div>
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg">
                    <recurso.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {recurso.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {recurso.description}
                  </p>

                  {/* Bottom Corner Decoration */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sistema SEA Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Waves className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Sistema SEA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-foreground">Como Funciona o </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SEA</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sistema de Economia de Água: da instalação à economia, todo o processo é automatizado.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2">
              <div className="h-0.5 bg-gradient-to-r from-primary via-secondary to-accent" />
              {/* Signal Dots */}
              <div className="absolute top-1/2 left-1/4 w-3 h-3 -translate-y-1/2 rounded-full bg-primary animate-ping" />
              <div className="absolute top-1/2 left-1/2 w-3 h-3 -translate-y-1/2 rounded-full bg-secondary animate-ping delay-300" />
              <div className="absolute top-1/2 left-3/4 w-3 h-3 -translate-y-1/2 rounded-full bg-accent animate-ping delay-700" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processoSEA.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="relative p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
                    {/* Step Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="w-20 h-8 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/25">
                        <span className="text-sm font-heading font-bold text-primary-foreground">{item.step}</span>
                      </div>
                    </div>
                    
                    <div className="pt-6">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 flex items-center justify-center mx-auto mb-6">
                        <item.icon className="w-8 h-8 text-primary" />
                      </div>
                      
                      {/* Detail Tag */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <CircleDot className="w-3 h-3 text-primary mr-1" />
                        <span className="text-xs font-medium text-primary">{item.detail}</span>
                      </div>
                      
                      <h3 className="text-lg font-heading font-bold text-foreground mb-3 text-center">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed text-center">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual Dashboard */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 backdrop-blur-xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Gauge className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground">Dashboard SEA</h3>
                      <p className="text-xs text-muted-foreground">Monitoramento em tempo real</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs text-primary">Online</span>
                  </div>
                </div>

                {/* Signal Visualization */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                    <Signal className="w-5 h-5 text-primary mb-2" />
                    <div className="text-xl font-bold text-foreground">12</div>
                    <div className="text-xs text-muted-foreground">Sensores Ativos</div>
                  </div>
                  <div className="p-4 rounded-xl bg-secondary/5 border border-secondary/10">
                    <Activity className="w-5 h-5 text-secondary mb-2" />
                    <div className="text-xl font-bold text-foreground">98.7%</div>
                    <div className="text-xs text-muted-foreground">Eficiência</div>
                  </div>
                  <div className="p-4 rounded-xl bg-accent/5 border border-accent/10">
                    <TrendingUp className="w-5 h-5 text-accent mb-2" />
                    <div className="text-xl font-bold text-foreground">-67%</div>
                    <div className="text-xs text-muted-foreground">Desperdício</div>
                  </div>
                </div>

                {/* Live Data Visualization */}
                <div className="p-4 rounded-xl bg-muted/30 border border-border/50 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">Vazão em Tempo Real</span>
                    <span className="text-xs text-primary">Agora</span>
                  </div>
                  <div className="h-20 flex items-end gap-1">
                    {Array.from({ length: 24 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t opacity-80"
                        style={{ height: `${20 + Math.random() * 80}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Alert */}
                <div className="flex items-center gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <div className="text-sm">
                    <span className="font-medium text-foreground">Sistema Otimizado</span>
                    <span className="text-muted-foreground"> - Nenhuma anomalia detectada</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <BarChart3 className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Benefícios Comprovados</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="text-foreground">Resultados </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Mensuráveis</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Nossa tecnologia IoT transforma dados em economia real, com resultados comprovados e mensuráveis.
              </p>

              <div className="space-y-4">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card/30 border border-border/50 hover:border-primary/20 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <beneficio.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <h4 className="font-heading font-bold text-foreground">{beneficio.title}</h4>
                        <span className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
                          {beneficio.stat}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{beneficio.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conquistas Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-muted/20 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Reconhecimento</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-foreground">Resultados e </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Conquistas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tetracampeã na categoria Water & Sanitation do prestigiado Ranking 100 Open Startups.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {conquistas.map((conquista, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 backdrop-blur-xl text-center">
                  <div className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    {conquista.number}
                  </div>
                  <div className="text-lg font-semibold text-foreground mb-1">{conquista.title}</div>
                  <div className="text-sm text-muted-foreground">{conquista.subtitle}</div>
                </div>
              </div>
            ))}
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
                <Wifi className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Conecte-se ao Futuro</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="text-foreground">Implemente IoT na </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Sua Empresa</span>
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Solicite uma demonstração gratuita do Sistema SEA e descubra como a tecnologia 
                IoT pode revolucionar sua gestão hídrica.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contato">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-6 text-lg group">
                    Agendar Demonstração
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 px-8 py-6 text-lg">
                  Falar com Especialista
                </Button>
              </div>

              {/* Trust Badges */}
              <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Instalação sem riscos</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Suporte 24/7</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Garantia de economia</span>
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

export default MonitoramentoIoT;
