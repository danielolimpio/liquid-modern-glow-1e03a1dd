import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  TrendingUp, 
  Database, 
  Brain, 
  Target, 
  Zap,
  LineChart,
  PieChart,
  Activity,
  Gauge,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Eye,
  Layers,
  GitBranch,
  Monitor,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const AnalyticsBI = () => {
  const features = [
    {
      icon: Database,
      title: "Coleta Inteligente",
      description: "Sensores IoT capturam dados em tempo real de todo o sistema hídrico",
      gradient: "from-primary via-accent to-secondary"
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Algoritmos avançados identificam padrões e anomalias automaticamente",
      gradient: "from-accent via-primary to-secondary"
    },
    {
      icon: LineChart,
      title: "Análise Preditiva",
      description: "Antecipe problemas e otimize recursos antes que ocorram falhas",
      gradient: "from-secondary via-accent to-primary"
    },
    {
      icon: Target,
      title: "Decisões Precisas",
      description: "Dashboards executivos para tomada de decisão baseada em dados",
      gradient: "from-primary via-secondary to-accent"
    }
  ];

  const applications = [
    {
      icon: Gauge,
      title: "Otimização de Recursos",
      description: "Identifique lacunas operacionais e direcione recursos para onde são mais necessários, eliminando redundâncias e ineficiências.",
      stat: "40% mais eficiência"
    },
    {
      icon: Activity,
      title: "Gestão Ambiental",
      description: "Monitore e gerencie o consumo de recursos hídricos em tempo real, utilizando tecnologia de ponta para economia de água.",
      stat: "Monitoramento 24/7"
    },
    {
      icon: Eye,
      title: "Tomada de Decisão Sustentável",
      description: "Informações precisas sobre impacto social e ambiental, permitindo decisões estratégicas baseadas em evidências.",
      stat: "Dados em tempo real"
    },
    {
      icon: Shield,
      title: "Métricas ESG",
      description: "Coleta e monitoramento de dados relacionados aos critérios Ambientais, Sociais e de Governança para fortalecer sua estratégia.",
      stat: "Compliance total"
    },
    {
      icon: GitBranch,
      title: "Learning Analytics",
      description: "Análise de dados para entender e melhorar processos, identificando padrões de comportamento e prevendo dificuldades.",
      stat: "Insights contínuos"
    },
    {
      icon: Monitor,
      title: "Dashboards Inteligentes",
      description: "Visualize métricas-chave em painéis personalizados com atualizações em tempo real e alertas automatizados.",
      stat: "Visualização instantânea"
    }
  ];

  const metrics = [
    { value: "2.5B+", label: "Pontos de Dados Analisados", icon: Database },
    { value: "99.9%", label: "Precisão Analítica", icon: Target },
    { value: "< 1s", label: "Tempo de Resposta", icon: Zap },
    { value: "360°", label: "Visão Completa", icon: PieChart }
  ];

  const benefits = [
    "Redução de até 40% no consumo de água",
    "Identificação proativa de vazamentos",
    "Relatórios automatizados ESG",
    "Integração com sistemas existentes",
    "Alertas inteligentes em tempo real",
    "Previsão de demanda hídrica"
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Analytics & BI para Gestão Hídrica",
    "serviceType": "Business Intelligence Hídrico",
    "description": "Plataforma de Business Intelligence com Machine Learning para gestão hídrica. Dashboards em tempo real, análise preditiva e decisões baseadas em dados, com redução de até 40% no consumo de água.",
    "provider": { "@type": "Organization", "name": "AcquaFlux", "url": "https://acquaflux.com" },
    "areaServed": { "@type": "Country", "name": "Brazil" }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Analytics & BI | Inteligência de Dados para Gestão Hídrica"
        description="Plataforma de Business Intelligence com Machine Learning para gestão hídrica. Dashboards em tempo real, análise preditiva e decisões baseadas em dados."
        canonical="/analytics-bi"
        keywords="analytics água, business intelligence hídrico, machine learning água, dashboards consumo água, análise dados água, relatórios gestão hídrica"
        structuredData={structuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
          
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
          
          {/* Floating data visualization elements */}
          <div className="absolute top-20 right-20 opacity-20">
            <BarChart3 className="w-32 h-32 text-primary animate-pulse" />
          </div>
          <div className="absolute bottom-32 left-20 opacity-20">
            <LineChart className="w-24 h-24 text-accent animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 backdrop-blur-sm mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Inteligência de Dados Avançada</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              <span className="gradient-text">Analytics & BI</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Transforme dados em decisões estratégicas. Nossa plataforma de{" "}
              <span className="text-primary font-semibold">Business Intelligence</span> oferece 
              insights precisos para otimizar sua gestão hídrica.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato/">
                <Button className="btn-aqua text-lg px-8 py-6 group">
                  Solicitar Demo
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/solucoes/">
                <Button variant="outline" className="text-lg px-8 py-6 border-primary/30 hover:bg-primary/10">
                  Ver Soluções
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Bar */}
      <section className="relative py-12 border-y border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 mb-4 group-hover:scale-110 transition-transform">
                  <metric.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{metric.value}</div>
                <div className="text-sm text-muted-foreground">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="gradient-text">Pipeline de Dados</span> Inteligente
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Do sensor ao insight em tempo real. Nossa arquitetura de dados processa bilhões de 
              pontos para entregar análises precisas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                {/* Connection line */}
                {index < features.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[2px] bg-gradient-to-r from-primary/50 to-transparent z-10" />
                )}
                
                {/* Card glow */}
                <div className={`absolute -inset-2 bg-gradient-to-br ${feature.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`} />
                
                {/* Card */}
                <div className="relative h-full">
                  <div className={`absolute -inset-[1px] bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-30 group-hover:opacity-60 transition-all duration-500`} />
                  
                  <div className="relative bg-card/80 backdrop-blur-xl rounded-2xl p-6 h-full">
                    {/* Step number */}
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold text-primary-foreground shadow-lg">
                      {index + 1}
                    </div>
                    
                    {/* Icon */}
                    <div className="relative w-16 h-16 mx-auto mb-4">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-xl blur-lg opacity-30`} />
                      <div className="relative w-full h-full rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 flex items-center justify-center">
                        <feature.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-center text-foreground mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground text-center">{feature.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Aplicações <span className="gradient-text">Estratégicas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Analytics & BI combinados com gestão hídrica permitem medir, monitorar e aprimorar 
              continuamente suas iniciativas de sustentabilidade.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="group relative">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                <div className="relative h-full">
                  {/* Animated border */}
                  <div className="absolute -inset-[1px] rounded-2xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] group-hover:animate-[shimmer_2s_linear_infinite] opacity-50" />
                  </div>
                  
                  <div className="relative bg-card/90 backdrop-blur-xl rounded-2xl p-8 h-full flex flex-col">
                    {/* Icon with ring */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
                      <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/40 flex items-center justify-center">
                        <app.icon className="w-8 h-8 text-primary" />
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-3">{app.title}</h3>
                    <p className="text-muted-foreground leading-relaxed flex-1">{app.description}</p>
                    
                    {/* Stat badge */}
                    <div className="mt-6 pt-6 border-t border-primary/20">
                      <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full text-sm font-medium text-primary">
                        <TrendingUp className="w-4 h-4" />
                        {app.stat}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Benefícios <span className="gradient-text">Tangíveis</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Nossa plataforma de Analytics & BI transforma a gestão da água em um diferencial 
                estratégico, econômico e ambiental para seu negócio.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground group-hover:text-primary transition-colors">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl blur-3xl" />
              
              <div className="relative">
                <div className="absolute -inset-[1px] bg-gradient-to-br from-primary via-accent to-secondary rounded-3xl opacity-50" />
                
                <div className="relative bg-card/80 backdrop-blur-xl rounded-3xl p-8">
                  {/* Mock dashboard */}
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Layers className="w-6 h-6 text-primary" />
                        <span className="font-semibold text-foreground">Dashboard Analytics</span>
                      </div>
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-primary/50" />
                        <div className="w-3 h-3 rounded-full bg-accent/50" />
                        <div className="w-3 h-3 rounded-full bg-secondary/50" />
                      </div>
                    </div>
                    
                    {/* Chart bars */}
                    <div className="flex items-end gap-2 h-32">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((height, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-primary to-accent rounded-t-sm opacity-60 hover:opacity-100 transition-opacity" style={{ height: `${height}%` }} />
                      ))}
                    </div>
                    
                    {/* Stats row */}
                    <div className="grid grid-cols-3 gap-4">
                      {[
                        { label: "Economia", value: "37%" },
                        { label: "Eficiência", value: "98%" },
                        { label: "Uptime", value: "99.9%" }
                      ].map((stat, i) => (
                        <div key={i} className="text-center p-3 rounded-xl bg-primary/10 border border-primary/20">
                          <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="relative max-w-4xl mx-auto">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-3xl blur-3xl" />
            
            {/* Card */}
            <div className="relative">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-primary via-accent to-primary rounded-3xl" />
              
              <div className="relative bg-card/95 backdrop-blur-xl rounded-3xl p-12 text-center">
                <BarChart3 className="w-16 h-16 text-primary mx-auto mb-6" />
                
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Transforme Dados em <span className="gradient-text">Resultados</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Solicite uma demonstração e descubra como nossa plataforma de Analytics & BI 
                  pode revolucionar sua gestão hídrica.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contato/">
                    <Button className="btn-aqua text-lg px-8 py-6 group">
                      Agendar Demonstração
                      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
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

export default AnalyticsBI;
