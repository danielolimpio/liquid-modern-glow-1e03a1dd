import { Target, Eye, Users, Award, Globe, Leaf, Building2, TrendingUp, Shield, Sparkles, Droplets, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Sobre = () => {
  const stats = [
    { number: "10+", label: "Anos de Experiência", icon: Award },
    { number: "500+", label: "Clientes Atendidos", icon: Users },
    { number: "15", label: "Estados Presentes", icon: Globe },
    { number: "98%", label: "Satisfação", icon: TrendingUp },
  ];

  const values = [
    {
      icon: Shield,
      title: "Compromisso",
      description: "Dedicação total à excelência em cada projeto, garantindo resultados que superam expectativas."
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Soluções que equilibram eficiência operacional com responsabilidade ambiental."
    },
    {
      icon: Sparkles,
      title: "Inovação",
      description: "Tecnologia de ponta para transformar a gestão hídrica das empresas."
    },
    {
      icon: Users,
      title: "Parceria",
      description: "Relacionamentos duradouros baseados em confiança e resultados mútuos."
    },
  ];

  const timeline = [
    {
      year: "2014",
      title: "Início Visionário",
      description: "Fundação com a missão de revolucionar a gestão de recursos hídricos no Brasil."
    },
    {
      year: "2017",
      title: "Expansão Nacional",
      description: "Crescimento para 10 estados, consolidando presença no mercado brasileiro."
    },
    {
      year: "2020",
      title: "Certificação ISO",
      description: "Conquista da certificação ISO 14001, reforçando compromisso ambiental."
    },
    {
      year: "2023",
      title: "Reconhecimento Global",
      description: "Premiação internacional em sustentabilidade e inovação tecnológica."
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8">
              <Droplets className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Nossa História</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Quem Somos</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Somos uma empresa pioneira em soluções sustentáveis para gestão de recursos hídricos,
              comprometida em transformar a relação das empresas com a água através de tecnologia
              e expertise de mercado.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-transparent hover:border-primary/30 transition-all duration-500"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--card)) 0%, hsl(var(--card)/0.5) 100%)",
                }}
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-primary/50 via-transparent to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full rounded-2xl bg-card" />
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent mb-4">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="font-heading text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-30 blur group-hover:opacity-50 transition duration-500" />
              <div className="relative p-8 md:p-10 rounded-3xl bg-card border border-primary/10 backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-lg opacity-50" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Target className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Nossa Missão</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Promover a gestão sustentável dos recursos hídricos, oferecendo soluções inovadoras
                  que otimizem o uso da água, reduzam desperdícios e contribuam para um futuro mais
                  consciente e responsável com o meio ambiente.
                </p>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border border-primary/10 rounded-full" />
                <div className="absolute bottom-4 right-8 w-10 h-10 border border-accent/10 rounded-full" />
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent via-primary to-accent rounded-3xl opacity-30 blur group-hover:opacity-50 transition duration-500" />
              <div className="relative p-8 md:p-10 rounded-3xl bg-card border border-accent/10 backdrop-blur-xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-2xl blur-lg opacity-50" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                      <Eye className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Nossa Visão</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Ser referência nacional e internacional em gestão hídrica sustentável, reconhecida
                  pela excelência em inovação tecnológica, compromisso ambiental e impacto positivo
                  nas comunidades onde atuamos.
                </p>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border border-accent/10 rounded-full" />
                <div className="absolute bottom-4 right-8 w-10 h-10 border border-primary/10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Nossos Valores</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Princípios que nos <span className="gradient-text">Guiam</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Os valores fundamentais que orientam cada decisão e ação em nossa jornada.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Animated gradient border */}
                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-primary/40 via-accent/20 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative h-full p-6 rounded-2xl bg-card border border-border/50 hover:border-transparent transition-colors duration-500">
                  <div className="mb-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 group-hover:from-primary group-hover:to-accent transition-all duration-500">
                      <value.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                    </div>
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Nossa Trajetória</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Uma Jornada de <span className="gradient-text">Conquistas</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-primary via-accent to-primary/30" />

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="group relative inline-block">
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors duration-500">
                      <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-bold mb-3">
                        {item.year}
                      </span>
                      <h3 className="font-heading text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background shadow-lg shadow-primary/30" />

                {/* Empty space */}
                <div className="w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Diferenciais</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Por que escolher a <span className="gradient-text">AcquaFlux?</span>
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Nossa expertise combinada com tecnologia de ponta nos posiciona como líderes
                em soluções hídricas sustentáveis no mercado brasileiro.
              </p>

              <div className="space-y-4">
                {[
                  "Tecnologia proprietária de monitoramento em tempo real",
                  "Equipe certificada e especializada em gestão hídrica",
                  "Suporte 24/7 com atendimento personalizado",
                  "Resultados comprovados com economia média de 35%",
                  "Compliance com todas as regulamentações ambientais",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground/80 group-hover:text-foreground transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Premium decorative card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-3xl blur-2xl opacity-50 animate-pulse" />
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-card via-card to-card/80 border border-primary/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 text-center">
                    <Droplets className="w-10 h-10 mx-auto mb-3 text-primary" />
                    <div className="font-heading text-3xl font-bold gradient-text">35%</div>
                    <div className="text-sm text-muted-foreground">Economia Média</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/10 text-center">
                    <Globe className="w-10 h-10 mx-auto mb-3 text-accent" />
                    <div className="font-heading text-3xl font-bold gradient-text">15</div>
                    <div className="text-sm text-muted-foreground">Estados</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/10 text-center">
                    <Users className="w-10 h-10 mx-auto mb-3 text-accent" />
                    <div className="font-heading text-3xl font-bold gradient-text">500+</div>
                    <div className="text-sm text-muted-foreground">Clientes</div>
                  </div>
                  <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 text-center">
                    <Award className="w-10 h-10 mx-auto mb-3 text-primary" />
                    <div className="font-heading text-3xl font-bold gradient-text">10+</div>
                    <div className="text-sm text-muted-foreground">Prêmios</div>
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

export default Sobre;
