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

const MonitoramentoIoT = () => {
  const recursos = [
    {
      icon: Radio,
      title: "Sensores Inteligentes",
      description: "Dispositivos de última geração para coleta contínua de dados em tempo real",
      color: "from-cyan-500 to-blue-600"
    },
    {
      icon: Activity,
      title: "Monitoramento 24/7",
      description: "Acompanhamento ininterrupto com alertas instantâneos de anomalias",
      color: "from-emerald-500 to-green-600"
    },
    {
      icon: Cpu,
      title: "Processamento IA",
      description: "Algoritmos avançados para análise preditiva e detecção de padrões",
      color: "from-violet-500 to-purple-600"
    },
    {
      icon: Bell,
      title: "Alertas em Tempo Real",
      description: "Notificações imediatas via app, SMS e email para ação rápida",
      color: "from-amber-500 to-orange-600"
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
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-background to-violet-950" />
          <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-3xl" />
          
          {/* IoT Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" 
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}
          />

          {/* Animated Signal Lines */}
          <div className="absolute top-1/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-pulse" />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent animate-pulse delay-500" />
          <div className="absolute top-3/4 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-violet-500/30 to-transparent animate-pulse delay-1000" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-violet-500/10 border border-cyan-500/20 mb-8">
              <div className="flex gap-1 items-center">
                <Wifi className="w-4 h-4 text-cyan-400" />
                <div className="w-1 h-1 rounded-full bg-emerald-400 animate-ping" />
                <Signal className="w-4 h-4 text-emerald-400" />
                <div className="w-1 h-1 rounded-full bg-violet-400 animate-ping delay-300" />
                <Radio className="w-4 h-4 text-violet-400" />
              </div>
              <span className="text-sm font-medium bg-gradient-to-r from-cyan-400 via-emerald-400 to-violet-400 bg-clip-text text-transparent">
                Internet das Coisas • Tempo Real • Inteligência
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              <span className="text-foreground">Monitoramento</span>
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-violet-500 bg-clip-text text-transparent">
                IoT Avançado
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Tecnologia de ponta para <span className="text-cyan-400 font-semibold">gestão hídrica inteligente</span>. 
              Sensores conectados, análise em tempo real e <span className="text-emerald-400 font-semibold">economia comprovada</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white px-8 py-6 text-lg group">
                Conhecer o Sistema SEA
                <Wifi className="ml-2 h-5 w-5 group-hover:animate-pulse" />
              </Button>
              <Button size="lg" variant="outline" className="border-cyan-500/30 hover:bg-cyan-500/10 px-8 py-6 text-lg">
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
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/30 to-emerald-500/30 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-4 rounded-xl bg-card/50 border border-white/5 backdrop-blur-sm text-center">
                    <metrica.icon className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                    <div className="text-2xl font-heading font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
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
                <stop offset="0%" stopColor="#06B6D4" />
                <stop offset="50%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Recursos IoT Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
              <Cpu className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-medium text-cyan-400">Tecnologia de Ponta</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-foreground">Infraestrutura </span>
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">IoT Completa</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sensores inteligentes e plataforma de análise para controle total do seu consumo hídrico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recursos.map((recurso, index) => (
              <div key={index} className="group relative">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-white/5 backdrop-blur-xl overflow-hidden">
                  {/* Top Gradient Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${recurso.color}`} />
                  
                  {/* Animated Signal */}
                  <div className="absolute top-4 right-4 flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400/50" />
                  </div>
                  
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${recurso.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <recurso.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {recurso.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {recurso.description}
                  </p>

                  {/* Bottom Corner Decoration */}
                  <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${recurso.color} rounded-full blur-3xl opacity-20`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sistema SEA Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Waves className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">Sistema SEA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-foreground">Como Funciona o </span>
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">SEA</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sistema de Economia de Água: da instalação à economia, todo o processo é automatizado.
            </p>
          </div>

          <div className="relative max-w-6xl mx-auto">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 -translate-y-1/2">
              <div className="h-0.5 bg-gradient-to-r from-cyan-500/50 via-emerald-500/50 to-violet-500/50" />
              {/* Signal Dots */}
              <div className="absolute top-1/2 left-1/4 w-3 h-3 -translate-y-1/2 rounded-full bg-cyan-400 animate-ping" />
              <div className="absolute top-1/2 left-1/2 w-3 h-3 -translate-y-1/2 rounded-full bg-emerald-400 animate-ping delay-300" />
              <div className="absolute top-1/2 left-3/4 w-3 h-3 -translate-y-1/2 rounded-full bg-violet-400 animate-ping delay-700" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processoSEA.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="relative p-6 rounded-2xl bg-card/50 border border-white/5 backdrop-blur-sm hover:border-cyan-500/30 transition-all duration-300">
                    {/* Step Badge */}
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <div className="w-20 h-8 rounded-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-violet-500 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                        <span className="text-sm font-heading font-bold text-white">{item.step}</span>
                      </div>
                    </div>
                    
                    <div className="pt-6">
                      {/* Icon */}
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 flex items-center justify-center mx-auto mb-6">
                        <item.icon className="w-8 h-8 text-cyan-400" />
                      </div>
                      
                      {/* Detail Tag */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                        <CircleDot className="w-3 h-3 text-cyan-400 mr-1" />
                        <span className="text-xs font-medium text-cyan-400">{item.detail}</span>
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
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-emerald-500/20 to-violet-500/20 rounded-3xl blur-2xl" />
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-white/10 backdrop-blur-xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center">
                      <Gauge className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-foreground">Dashboard SEA</h3>
                      <p className="text-xs text-muted-foreground">Monitoramento em tempo real</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-emerald-400">Online</span>
                  </div>
                </div>

                {/* Signal Visualization */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/10">
                    <Signal className="w-5 h-5 text-cyan-400 mb-2" />
                    <div className="text-xl font-bold text-foreground">12</div>
                    <div className="text-xs text-muted-foreground">Sensores Ativos</div>
                  </div>
                  <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                    <Activity className="w-5 h-5 text-emerald-400 mb-2" />
                    <div className="text-xl font-bold text-foreground">98.7%</div>
                    <div className="text-xs text-muted-foreground">Eficiência</div>
                  </div>
                  <div className="p-4 rounded-xl bg-violet-500/5 border border-violet-500/10">
                    <Droplets className="w-5 h-5 text-violet-400 mb-2" />
                    <div className="text-xl font-bold text-foreground">-67%</div>
                    <div className="text-xs text-muted-foreground">Desperdício</div>
                  </div>
                </div>

                {/* Real-time Graph */}
                <div className="p-4 rounded-xl bg-white/5 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-muted-foreground">Vazão em Tempo Real</span>
                    <span className="text-xs text-cyan-400">Agora</span>
                  </div>
                  <div className="h-20 flex items-end gap-1">
                    {[30, 45, 35, 60, 40, 55, 45, 70, 50, 65, 55, 40, 50, 60, 45, 55, 50, 65, 55, 60].map((height, i) => (
                      <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-cyan-500 to-emerald-400" 
                           style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>

                {/* Alert */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <div>
                      <div className="text-sm font-medium text-foreground">Sistema Otimizado</div>
                      <div className="text-xs text-muted-foreground">Nenhuma anomalia detectada</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits List */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <Target className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-medium text-violet-400">Benefícios Comprovados</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="text-foreground">Resultados </span>
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Mensuráveis</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Nossa tecnologia IoT transforma dados em economia real, com resultados comprovados e mensuráveis.
              </p>

              <div className="space-y-4">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="group flex items-start gap-4 p-4 rounded-xl bg-card/30 border border-white/5 hover:border-cyan-500/20 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <beneficio.icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-heading font-bold text-foreground">{beneficio.title}</h4>
                        <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded-full">
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
      <section className="py-24 relative bg-gradient-to-b from-transparent via-violet-950/20 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <Award className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-medium text-amber-400">Reconhecimento</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-foreground">Resultados e </span>
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">Conquistas</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tetracampeã na categoria Water & Sanitation do prestigiado Ranking 100 Open Startups.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {conquistas.map((conquista, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative p-8 rounded-2xl bg-card/50 border border-white/5 backdrop-blur-sm text-center">
                  <div className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent mb-2">
                    {conquista.number}
                  </div>
                  <div className="font-medium text-foreground mb-1">{conquista.title}</div>
                  <div className="text-sm text-muted-foreground">{conquista.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-950 via-emerald-950/50 to-violet-950" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
          
          {/* Animated Signal Lines */}
          <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent animate-pulse" />
          <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent animate-pulse delay-500" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-cyan-500/50 via-emerald-500/50 to-violet-500/50 -z-10" />
              
              <div className="text-center">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 mb-6">
                  <Wifi className="w-4 h-4 text-cyan-400 animate-pulse" />
                  <span className="text-sm font-medium text-white/80">Conecte-se ao Futuro</span>
                  <Smartphone className="w-4 h-4 text-emerald-400" />
                </div>

                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                  Implemente IoT na Sua Empresa
                </h2>
                <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                  Solicite uma demonstração gratuita do Sistema SEA e descubra como a tecnologia 
                  IoT pode revolucionar sua gestão hídrica.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-cyan-500 via-emerald-500 to-violet-500 hover:from-cyan-600 hover:via-emerald-600 hover:to-violet-600 text-white px-8 py-6 text-lg group">
                    Agendar Demonstração
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg">
                    Falar com Especialista
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <div className="flex flex-wrap justify-center gap-6">
                    <div className="flex items-center gap-2 text-white/60">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm">Instalação sem custos</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm">Suporte 24/7</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60">
                      <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm">Garantia de economia</span>
                    </div>
                  </div>
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
