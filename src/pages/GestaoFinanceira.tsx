import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  DollarSign, 
  TrendingUp, 
  PiggyBank, 
  BarChart3, 
  Calculator, 
  Wallet,
  CircleDollarSign,
  ArrowUpRight,
  ArrowDownRight,
  LineChart,
  Banknote,
  Receipt,
  Target,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Zap,
  Shield,
  Clock,
  Award,
  Droplets,
  Building2
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const GestaoFinanceira = () => {
  const beneficiosFinanceiros = [
    {
      icon: PiggyBank,
      title: "Economia Imediata",
      value: "70%",
      subtitle: "Redução na fatura",
      description: "Economia comprovada desde o primeiro mês de implementação do SEA"
    },
    {
      icon: TrendingUp,
      title: "ROI Garantido",
      value: "300%",
      subtitle: "Retorno médio",
      description: "Investimento recuperado em poucos meses com ganhos contínuos"
    },
    {
      icon: Banknote,
      title: "Sem Custo Inicial",
      value: "R$0",
      subtitle: "Investimento",
      description: "Modelo de negócio sustentável com pagamento atrelado à economia"
    },
    {
      icon: CircleDollarSign,
      title: "Milhões Economizados",
      value: "R$15M+",
      subtitle: "Para clientes",
      description: "Total acumulado em economia para nossa base de clientes"
    }
  ];

  const modeloNegocio = [
    {
      step: "01",
      title: "Diagnóstico Gratuito",
      description: "Análise completa do seu consumo hídrico sem nenhum custo",
      icon: Calculator
    },
    {
      step: "02",
      title: "Implementação SEA",
      description: "Instalação do sistema sem investimento inicial da sua parte",
      icon: Zap
    },
    {
      step: "03",
      title: "Economia Compartilhada",
      description: "Pagamento baseado apenas na economia real gerada",
      icon: Wallet
    },
    {
      step: "04",
      title: "Ganho Contínuo",
      description: "Benefícios financeiros e ambientais por toda a vida útil",
      icon: TrendingUp
    }
  ];

  const metricas = [
    { label: "Economia Mensal Média", value: "R$ 45.000", trend: "+23%", positive: true },
    { label: "Custo por Litro", value: "R$ 0,0089", trend: "-67%", positive: true },
    { label: "Desperdício Evitado", value: "2.4M L", trend: "+15%", positive: true },
    { label: "Payback Médio", value: "4 meses", trend: "-30%", positive: true }
  ];

  const vantagens = [
    {
      icon: Shield,
      title: "Zero Risco Financeiro",
      description: "Modelo de pagamento por performance garante que você só paga se economizar"
    },
    {
      icon: Clock,
      title: "Resultados Rápidos",
      description: "Economia visível já na primeira fatura após a implementação"
    },
    {
      icon: BarChart3,
      title: "Transparência Total",
      description: "Dashboard em tempo real com todas as métricas de consumo e economia"
    },
    {
      icon: Award,
      title: "Compliance ESG",
      description: "Melhore seus indicadores ambientais enquanto economiza recursos"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Gestão Financeira Hídrica | ROI de até 300%"
        description="Transforme consumo de água em economia real. Modelo sem custo inicial com ROI de até 300%. Pagamento baseado na economia gerada."
        canonical="/gestao-financeira"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Premium Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-background to-accent/10" />
          <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
          <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-3xl" />
          
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
                <DollarSign className="w-4 h-4 text-primary" />
                <TrendingUp className="w-4 h-4 text-secondary" />
                <PiggyBank className="w-4 h-4 text-accent" />
              </div>
              <span className="text-sm font-medium text-primary">
                Economia • ROI • Sustentabilidade
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              <span className="text-foreground">Gestão</span>
              <br />
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Financeira Hídrica
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Transforme seu consumo de água em <span className="text-primary font-semibold">economia real</span>. 
              Nosso modelo inovador garante <span className="text-accent font-semibold">ROI de até 300%</span> sem 
              nenhum investimento inicial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-6 text-lg group">
                Calcular Minha Economia
                <Calculator className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 px-8 py-6 text-lg">
                Ver Cases de Sucesso
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Stats Cards */}
        <div className="container mx-auto px-4 mt-16 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metricas.map((metrica, index) => (
                <div key={index} className="group relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative p-4 rounded-xl bg-card/50 border border-border/50 backdrop-blur-sm">
                    <div className="text-sm text-muted-foreground mb-1">{metrica.label}</div>
                    <div className="text-2xl font-heading font-bold text-foreground mb-1">{metrica.value}</div>
                    <div className={`flex items-center gap-1 text-sm ${metrica.positive ? 'text-primary' : 'text-destructive'}`}>
                      {metrica.positive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                      {metrica.trend}
                    </div>
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
                  fill="url(#finance-wave-gradient)" fillOpacity="0.1"/>
            <defs>
              <linearGradient id="finance-wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="50%" stopColor="hsl(var(--secondary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Benefícios Financeiros Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Resultados Comprovados</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-foreground">Impacto </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Financeiro Real</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Números que transformam a gestão hídrica em vantagem competitiva mensurável.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {beneficiosFinanceiros.map((beneficio, index) => (
              <div key={index} className="group relative">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-border/50 backdrop-blur-xl overflow-hidden">
                  {/* Top Gradient Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent" />
                  
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 shadow-lg">
                    <beneficio.icon className="w-7 h-7 text-primary-foreground" />
                  </div>

                  <div className="text-sm text-muted-foreground mb-2">{beneficio.title}</div>
                  
                  <div className="text-4xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-1">
                    {beneficio.value}
                  </div>
                  
                  <div className="text-sm font-medium text-foreground mb-4">{beneficio.subtitle}</div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {beneficio.description}
                  </p>

                  {/* Bottom Corner Decoration */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary to-accent rounded-full blur-3xl opacity-20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelo de Negócio Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
              <Target className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-accent">Modelo Inovador</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-foreground">Economia </span>
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Compartilhada</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um modelo de negócio único onde você só paga se economizar. Zero risco, máximo retorno.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-secondary to-accent -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {modeloNegocio.map((item, index) => (
                <div key={index} className="relative group">
                  <div className="relative p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm text-center hover:border-primary/30 transition-all duration-300">
                    {/* Step Number */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/25 group-hover:scale-110 transition-transform">
                      <span className="text-xl font-heading font-bold text-primary-foreground">{item.step}</span>
                    </div>
                    
                    <item.icon className="w-8 h-8 text-primary mx-auto mb-4" />
                    
                    <h3 className="text-lg font-heading font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Visual Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
                <LineChart className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium text-secondary">Monitoramento Inteligente</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="text-foreground">Controle </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Total</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Dashboard em tempo real com todas as métricas financeiras e de consumo. 
                Tome decisões baseadas em dados precisos e atualizados.
              </p>

              <div className="space-y-4">
                {vantagens.map((vantagem, index) => (
                  <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-card/30 border border-border/50 hover:border-primary/20 transition-all">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center flex-shrink-0">
                      <vantagem.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-foreground mb-1">{vantagem.title}</h4>
                      <p className="text-sm text-muted-foreground">{vantagem.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Dashboard */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-3xl blur-2xl" />
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-border/50 backdrop-blur-xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-foreground">Painel Financeiro</h3>
                    <p className="text-sm text-muted-foreground">Atualizado em tempo real</p>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs text-primary">Online</span>
                  </div>
                </div>

                {/* Main Metric */}
                <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 mb-6">
                  <div className="text-sm text-muted-foreground mb-2">Economia Total do Mês</div>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      R$ 47.850
                    </span>
                    <span className="text-primary text-sm flex items-center gap-1 mb-1">
                      <ArrowUpRight className="w-4 h-4" />
                      +12.5%
                    </span>
                  </div>
                </div>

                {/* Chart Visualization */}
                <div className="h-32 flex items-end justify-between gap-2 mb-6">
                  {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                    <div key={i} className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t-lg opacity-80" style={{ height: `${height}%` }} />
                  ))}
                </div>

                {/* Bottom Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <Droplets className="w-5 h-5 text-primary mx-auto mb-1" />
                    <div className="text-lg font-bold text-foreground">1.2M L</div>
                    <div className="text-xs text-muted-foreground">Água Economizada</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <TrendingUp className="w-5 h-5 text-secondary mx-auto mb-1" />
                    <div className="text-lg font-bold text-foreground">-68%</div>
                    <div className="text-xs text-muted-foreground">Redução Fatura</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-muted/50">
                    <Building2 className="w-5 h-5 text-accent mx-auto mb-1" />
                    <div className="text-lg font-bold text-foreground">12</div>
                    <div className="text-xs text-muted-foreground">Unidades</div>
                  </div>
                </div>
              </div>
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
                <CircleDollarSign className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Simulador de Economia</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="text-foreground">Quanto Você Pode </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Economizar?</span>
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Descubra o potencial de economia da sua empresa com nosso diagnóstico gratuito. 
                Resultados reais, sem compromisso.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contato">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-8 py-6 text-lg group">
                    Simular Economia Agora
                    <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
                  <span>Sem custo inicial</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>ROI garantido</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                  <span>Resultados em 30 dias</span>
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

export default GestaoFinanceira;
