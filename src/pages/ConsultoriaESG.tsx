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

const ConsultoriaESG = () => {
  const pilares = [
    {
      icon: Leaf,
      title: "Environmental",
      subtitle: "Ambiental",
      color: "from-emerald-500 to-green-600",
      bgGlow: "bg-emerald-500/20",
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
      color: "from-blue-500 to-cyan-600",
      bgGlow: "bg-blue-500/20",
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
      color: "from-violet-500 to-purple-600",
      bgGlow: "bg-violet-500/20",
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
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-background to-violet-950" />
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-3xl" />
          
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
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-emerald-500/10 via-blue-500/10 to-violet-500/10 border border-emerald-500/20 mb-8">
              <div className="flex gap-1">
                <Leaf className="w-4 h-4 text-emerald-400" />
                <Heart className="w-4 h-4 text-blue-400" />
                <Scale className="w-4 h-4 text-violet-400" />
              </div>
              <span className="text-sm font-medium bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Environmental • Social • Governance
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              <span className="text-foreground">Consultoria</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">
                ESG Especializada
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
              Transformamos a gestão hídrica em diferencial estratégico, econômico e ambiental. 
              Soluções que geram até <span className="text-emerald-400 font-semibold">70% de economia</span> e 
              fortalecem seus indicadores ESG.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 text-white px-8 py-6 text-lg group">
                Solicitar Consultoria
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-emerald-500/30 hover:bg-emerald-500/10 px-8 py-6 text-lg">
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
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="50%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#8B5CF6" />
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
              <span className="bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">ESG Integrada</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nossa abordagem holística integra os três pilares fundamentais para uma transformação sustentável completa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pilares.map((pilar, index) => (
              <div key={index} className="group relative">
                {/* Glow Effect */}
                <div className={`absolute -inset-1 ${pilar.bgGlow} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-card/80 to-card/40 border border-white/5 backdrop-blur-xl overflow-hidden">
                  {/* Top Gradient Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pilar.color}`} />
                  
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${pilar.color} flex items-center justify-center mb-6 shadow-lg`}>
                    <pilar.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="mb-2">
                    <span className={`text-sm font-medium bg-gradient-to-r ${pilar.color} bg-clip-text text-transparent`}>
                      {pilar.title}
                    </span>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                    {pilar.subtitle}
                  </h3>

                  <ul className="space-y-3">
                    {pilar.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-muted-foreground">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${pilar.color} flex items-center justify-center flex-shrink-0`}>
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom Corner Decoration */}
                  <div className={`absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br ${pilar.color} rounded-full blur-3xl opacity-20`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <Droplets className="w-4 h-4 text-emerald-400" />
              <span className="text-sm font-medium text-emerald-400">Especialidade Acquaflux</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-foreground">Serviços de </span>
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Gestão Hídrica</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções completas focadas na sustentabilidade hídrica e economia de água para médias e grandes empresas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicos.map((servico, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-emerald-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative p-8 rounded-2xl bg-card/50 border border-white/5 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex items-start gap-6">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <servico.icon className="w-7 h-7 text-emerald-400" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-heading font-bold text-foreground">
                          {servico.title}
                        </h3>
                        <span className="px-3 py-1 text-xs font-medium bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
                <BarChart3 className="w-4 h-4 text-violet-400" />
                <span className="text-sm font-medium text-violet-400">Resultados Comprovados</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                <span className="text-foreground">Impacto </span>
                <span className="bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent">Mensurável</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                Empresas que adotam práticas ESG com foco em gestão hídrica experimentam benefícios 
                tangíveis em suas operações, reputação e resultados financeiros.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="p-6 rounded-xl bg-gradient-to-br from-violet-500/5 to-purple-500/5 border border-violet-500/10">
                    <beneficio.icon className="w-8 h-8 text-violet-400 mb-3" />
                    <div className="text-3xl font-heading font-bold bg-gradient-to-r from-violet-400 to-purple-500 bg-clip-text text-transparent mb-1">
                      {beneficio.value}
                    </div>
                    <div className="text-sm text-muted-foreground">{beneficio.title}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Dashboard */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-blue-500/20 to-violet-500/20 rounded-3xl blur-2xl" />
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-white/10 backdrop-blur-xl">
                {/* ESG Score Display */}
                <div className="text-center mb-8">
                  <div className="text-6xl font-heading font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-violet-500 bg-clip-text text-transparent mb-2">
                    A+
                  </div>
                  <div className="text-muted-foreground">Rating ESG Projetado</div>
                </div>

                {/* Progress Bars */}
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-foreground font-medium">Environmental</span>
                      <span className="text-emerald-400">92%</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full w-[92%] bg-gradient-to-r from-emerald-500 to-green-400 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-foreground font-medium">Social</span>
                      <span className="text-blue-400">87%</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full w-[87%] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2 text-sm">
                      <span className="text-foreground font-medium">Governance</span>
                      <span className="text-violet-400">95%</span>
                    </div>
                    <div className="h-3 rounded-full bg-white/5 overflow-hidden">
                      <div className="h-full w-[95%] bg-gradient-to-r from-violet-500 to-purple-400 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* ODS Badges */}
                <div className="mt-8 pt-6 border-t border-white/5">
                  <div className="text-sm text-muted-foreground mb-4">Alinhamento ODS</div>
                  <div className="flex flex-wrap gap-2">
                    {[6, 12, 13, 14, 17].map((ods) => (
                      <div key={ods} className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-emerald-500/10 to-blue-500/10 border border-emerald-500/20">
                        <span className="text-sm font-medium text-emerald-400">ODS {ods}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia Section */}
      <section className="py-24 relative bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Target className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-400">Nossa Metodologia</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              <span className="text-foreground">Processo de </span>
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Transformação</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um processo estruturado para garantir resultados consistentes e mensuráveis.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/50 via-blue-500/50 to-violet-500/50 -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {etapas.map((etapa, index) => (
                <div key={index} className="relative">
                  <div className="relative p-6 rounded-2xl bg-card/50 border border-white/5 backdrop-blur-sm text-center group hover:border-blue-500/30 transition-all duration-300">
                    {/* Number Circle */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 via-blue-500 to-violet-500 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-500/25">
                      <span className="text-xl font-heading font-bold text-white">{etapa.number}</span>
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
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-blue-950 to-violet-950" />
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="relative p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 backdrop-blur-xl overflow-hidden">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-emerald-500/50 via-blue-500/50 to-violet-500/50 -z-10" />
              
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 mb-6">
                  <Handshake className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium text-white/80">Parceria Estratégica</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
                  Inicie sua Jornada ESG
                </h2>
                <p className="text-lg text-white/70 mb-8 max-w-2xl mx-auto">
                  Solicite uma consultoria gratuita e descubra como a Acquaflux pode transformar 
                  sua gestão hídrica em vantagem competitiva sustentável.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-emerald-500 via-blue-500 to-violet-500 hover:from-emerald-600 hover:via-blue-600 hover:to-violet-600 text-white px-8 py-6 text-lg group">
                    Agendar Consultoria
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-lg">
                    Falar com Especialista
                  </Button>
                </div>

                {/* Social Links */}
                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-sm text-white/50 mb-4">Acompanhe nas redes sociais</p>
                  <div className="flex justify-center gap-4">
                    <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300">
                      <TreePine className="w-5 h-5 text-white/70" />
                    </a>
                    <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300">
                      <Users className="w-5 h-5 text-white/70" />
                    </a>
                    <a href="#" className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300">
                      <Globe className="w-5 h-5 text-white/70" />
                    </a>
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

export default ConsultoriaESG;
