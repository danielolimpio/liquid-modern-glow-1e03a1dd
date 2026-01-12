import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  TrendingDown, 
  DollarSign, 
  Leaf, 
  Droplets, 
  BarChart3, 
  Award,
  Target,
  Zap,
  Shield,
  Globe,
  Factory,
  TreePine,
  Waves,
  CircleDollarSign,
  LineChart,
  BadgeCheck,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building2,
  Gauge,
  Wrench,
  CloudRain
} from "lucide-react";

const Impacto = () => {
  const mainStats = [
    { icon: Droplets, value: "2.5B+", label: "Litros Economizados", suffix: "" },
    { icon: DollarSign, value: "150M+", label: "Economia Gerada", suffix: "R$" },
    { icon: TreePine, value: "45K+", label: "Toneladas CO₂ Evitadas", suffix: "" },
    { icon: Building2, value: "500+", label: "Empresas Impactadas", suffix: "" },
  ];

  const economicImpacts = [
    {
      icon: TrendingDown,
      title: "Redução de Custos",
      description: "Menor gasto nas contas de água para as empresas clientes, gerando economia significativa no orçamento operacional.",
      highlight: "Até 40% de redução"
    },
    {
      icon: CircleDollarSign,
      title: "Receita por Performance",
      description: "A AcquaFlux ganha uma porcentagem do valor economizado, criando um incentivo financeiro para resultados efetivos.",
      highlight: "Modelo ganha-ganha"
    },
    {
      icon: Gauge,
      title: "Melhora da Eficiência",
      description: "Ações de economia levam a uma gestão mais eficiente dos recursos hídricos, otimizando processos operacionais.",
      highlight: "Eficiência operacional"
    },
    {
      icon: Award,
      title: "Geração de Valor ESG",
      description: "Empresas que adotam essas práticas fortalecem sua imagem e atraem investimentos sustentáveis.",
      highlight: "Valorização de marca"
    },
  ];

  const environmentalImpacts = [
    {
      icon: Waves,
      title: "Preservação Hídrica",
      description: "Reduz a demanda sobre os recursos hídricos, protegendo um recurso finito essencial para a vida no planeta.",
      stat: "2.5B+ litros preservados"
    },
    {
      icon: Droplets,
      title: "Diminuição do Desperdício",
      description: "Combate o desvio de grandes volumes de água de ecossistemas naturais, mantendo o equilíbrio ambiental.",
      stat: "Zero desperdício"
    },
    {
      icon: CloudRain,
      title: "Redução de Carbono",
      description: "Menos água tratada e distribuída significa menor emissão de CO₂, contribuindo para um planeta mais saudável.",
      stat: "45K+ ton CO₂ evitadas"
    },
  ];

  const modelFeatures = [
    {
      icon: Globe,
      title: "Solução 360º",
      description: "Monitoramento remoto, tecnologia inteligente com torneiras com sensor e controle de fluxo para grandes consumidores."
    },
    {
      icon: Target,
      title: "Modelo de Performance",
      description: "A empresa só é remunerada se houver economia comprovada, garantindo resultados reais e mensuráveis."
    },
    {
      icon: CheckCircle2,
      title: "Exemplos Práticos",
      description: "Contas de água mais baixas, consumo controlado e previsível, manutenção reduzida e gestão inteligente."
    },
  ];

  const practicalResults = [
    { icon: LineChart, text: "Contas de água significativamente mais baixas" },
    { icon: BarChart3, text: "Consumo controlado e previsível" },
    { icon: Wrench, text: "Manutenção preventiva e custos reduzidos" },
    { icon: Shield, text: "Segurança hídrica garantida" },
    { icon: Zap, text: "Eficiência energética otimizada" },
    { icon: BadgeCheck, text: "Certificações ambientais facilitadas" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-aqua-900/20 via-background to-aqua-800/10" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-aqua-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-aqua-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-aqua-400 to-aqua-500 rounded-full opacity-40"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-aqua-500/20 to-aqua-400/20 border border-aqua-500/30 mb-8">
              <Sparkles className="w-4 h-4 text-aqua-400" />
              <span className="text-sm font-medium text-aqua-300">Sustentabilidade & Resultados</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-aqua-100 to-aqua-200 bg-clip-text text-transparent">
                Nosso Impacto
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A AcquaFlux demonstra que é possível gerar um <span className="text-aqua-400 font-semibold">ganho financeiro significativo</span> enquanto se promove um uso <span className="text-aqua-400 font-semibold">consciente e sustentável</span> da água.
            </p>
          </div>
        </div>
      </section>

      {/* Main Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {mainStats.map((stat, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Gradient border effect */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-aqua-500 via-aqua-400 to-aqua-600 rounded-2xl opacity-50 group-hover:opacity-100 blur-sm transition-all duration-500" />
                <div className="absolute -inset-[1px] bg-gradient-to-r from-aqua-500 via-aqua-400 to-aqua-600 rounded-2xl opacity-70 group-hover:opacity-100 transition-all duration-500" />
                
                <div className="relative bg-background/95 backdrop-blur-xl rounded-2xl p-8 text-center h-full">
                  <div className="mx-auto mb-4 w-16 h-16 rounded-xl bg-gradient-to-br from-aqua-500/20 to-aqua-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-aqua-400" />
                  </div>
                  <div className="text-sm text-aqua-400 font-medium mb-1">{stat.suffix}</div>
                  <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-aqua-100 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-aqua-900/30 via-aqua-800/20 to-aqua-900/30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Decorative line */}
            <div className="flex items-center justify-center mb-12">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-aqua-500/50 to-transparent" />
              <div className="mx-4 w-3 h-3 rotate-45 bg-gradient-to-br from-aqua-400 to-aqua-600" />
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-aqua-500/50 to-transparent" />
            </div>

            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-aqua-500/10 via-aqua-400/5 to-aqua-500/10 rounded-3xl blur-2xl" />
              
              <div className="relative bg-gradient-to-br from-aqua-900/40 to-aqua-800/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-aqua-500/20">
                <Leaf className="w-12 h-12 text-aqua-400 mx-auto mb-6" />
                <p className="text-lg md:text-xl text-center text-muted-foreground leading-relaxed">
                  A AcquaFlux tem um <span className="text-white font-semibold">impacto direto e positivo</span> na economia de água ao oferecer tecnologia para empresas reduzirem desperdícios, gerando grandes volumes de água economizados e redução de custos para os clientes, com um <span className="text-aqua-400 font-semibold">modelo de negócio que só gera lucro se houver economia real</span>, alinhando sustentabilidade e finanças.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Economic Impacts */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-emerald-400/20 border border-green-500/30 mb-6">
              <DollarSign className="w-4 h-4 text-green-400" />
              <span className="text-sm font-medium text-green-300">Resultados Financeiros</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-green-100 to-emerald-200 bg-clip-text text-transparent">
                Impactos Econômicos
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transformamos sustentabilidade em vantagem competitiva e resultados financeiros tangíveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {economicImpacts.map((impact, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Animated gradient border */}
                <div className="absolute -inset-[1px] bg-gradient-to-r from-green-500 via-emerald-400 to-green-600 rounded-2xl opacity-0 group-hover:opacity-70 blur-sm transition-all duration-500" />
                <div className="absolute -inset-[1px] bg-gradient-to-r from-green-500/50 via-emerald-400/50 to-green-600/50 rounded-2xl opacity-50 group-hover:opacity-100 transition-all duration-500" />
                
                <div className="relative bg-background/95 backdrop-blur-xl rounded-2xl p-8 h-full">
                  <div className="flex items-start gap-6">
                    {/* Icon container with gradient */}
                    <div className="relative flex-shrink-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl blur-md opacity-40" />
                      <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-500/30 flex items-center justify-center">
                        <impact.icon className="w-7 h-7 text-green-400" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{impact.title}</h3>
                        <span className="px-2 py-1 text-xs font-medium bg-green-500/20 text-green-400 rounded-full">
                          {impact.highlight}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {impact.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Environmental Impacts */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-aqua-900/10 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-aqua-500/20 to-cyan-400/20 border border-aqua-500/30 mb-6">
              <Leaf className="w-4 h-4 text-aqua-400" />
              <span className="text-sm font-medium text-aqua-300">Preservação Ambiental</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-aqua-100 to-cyan-200 bg-clip-text text-transparent">
                Impactos Ambientais
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada gota economizada representa um passo importante para um futuro mais sustentável
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {environmentalImpacts.map((impact, index) => (
              <div
                key={index}
                className="group relative"
              >
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-br from-aqua-500/20 via-transparent to-cyan-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                
                {/* Card */}
                <div className="relative h-full">
                  {/* Gradient border */}
                  <div className="absolute -inset-[1px] bg-gradient-to-br from-aqua-500 via-cyan-400 to-aqua-600 rounded-2xl opacity-50 group-hover:opacity-100 transition-all duration-500" />
                  
                  <div className="relative bg-background/95 backdrop-blur-xl rounded-2xl p-8 h-full flex flex-col">
                    {/* Icon with animated ring */}
                    <div className="relative mx-auto mb-6">
                      <div className="absolute inset-0 bg-gradient-to-br from-aqua-400 to-cyan-500 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500" />
                      <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-aqua-500/20 to-cyan-600/20 border border-aqua-500/40 flex items-center justify-center">
                        <impact.icon className="w-10 h-10 text-aqua-400" />
                      </div>
                      {/* Animated ring */}
                      <div className="absolute inset-0 rounded-full border border-aqua-400/30 animate-ping opacity-30" style={{ animationDuration: '2s' }} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-center text-white mb-3">{impact.title}</h3>
                    <p className="text-muted-foreground text-center leading-relaxed flex-1">
                      {impact.description}
                    </p>
                    
                    {/* Stat badge */}
                    <div className="mt-6 pt-6 border-t border-aqua-500/20">
                      <div className="text-center">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-aqua-500/20 to-cyan-500/20 rounded-full text-sm font-medium text-aqua-300">
                          <CheckCircle2 className="w-4 h-4" />
                          {impact.stat}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works - Model Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-violet-400/20 border border-purple-500/30 mb-6">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-sm font-medium text-purple-300">Nosso Modelo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-white via-purple-100 to-violet-200 bg-clip-text text-transparent">
                Como Funciona
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Um modelo de negócio inovador que garante resultados reais e mensuráveis
            </p>
          </div>

          {/* Model Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {modelFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500 via-violet-400 to-purple-600 rounded-2xl opacity-50 group-hover:opacity-100 transition-all duration-500" />
                
                <div className="relative bg-background/95 backdrop-blur-xl rounded-2xl p-8 h-full text-center">
                  <div className="relative mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-violet-500 rounded-xl blur-md opacity-30" />
                    <div className="relative w-16 h-16 mx-auto rounded-xl bg-gradient-to-br from-purple-500/20 to-violet-600/20 border border-purple-500/30 flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-purple-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Practical Results */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 via-violet-400/5 to-purple-500/10 rounded-3xl blur-2xl" />
            
            <div className="relative bg-gradient-to-br from-purple-900/30 to-violet-800/20 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-center text-white mb-8">Resultados Práticos</h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {practicalResults.map((result, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-xl bg-background/40 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <result.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-white transition-colors duration-300">
                      {result.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Value Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-aqua-900/20 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/20 to-orange-400/20 border border-amber-500/30 mb-6">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span className="text-sm font-medium text-amber-300">ESG & Sustentabilidade</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-white via-amber-100 to-orange-200 bg-clip-text text-transparent">
                    Fortalecendo sua Imagem ESG
                  </span>
                </h2>
                
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Empresas que adotam as práticas da AcquaFlux fortalecem sua imagem corporativa, atraem investimentos sustentáveis e se posicionam como líderes em responsabilidade ambiental.
                </p>
                
                <div className="space-y-4">
                  {[
                    "Relatórios de sustentabilidade detalhados",
                    "Certificações ambientais facilitadas",
                    "Métricas ESG comprovadas",
                    "Visibilidade para investidores"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                        <ArrowRight className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Right content - Stats Card */}
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-amber-500/20 via-orange-400/10 to-amber-500/20 rounded-3xl blur-2xl" />
                
                <div className="relative bg-gradient-to-br from-amber-900/30 to-orange-800/20 backdrop-blur-xl rounded-3xl p-8 border border-amber-500/20">
                  <div className="text-center mb-8">
                    <Factory className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white">Impacto Consolidado</h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="p-4 rounded-xl bg-background/40 border border-amber-500/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground">Redução média de custos</span>
                        <span className="text-amber-400 font-bold">40%</span>
                      </div>
                      <div className="h-2 bg-background/60 rounded-full overflow-hidden">
                        <div className="h-full w-[40%] bg-gradient-to-r from-amber-500 to-orange-400 rounded-full" />
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-background/40 border border-amber-500/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground">Satisfação dos clientes</span>
                        <span className="text-amber-400 font-bold">98%</span>
                      </div>
                      <div className="h-2 bg-background/60 rounded-full overflow-hidden">
                        <div className="h-full w-[98%] bg-gradient-to-r from-amber-500 to-orange-400 rounded-full" />
                      </div>
                    </div>
                    
                    <div className="p-4 rounded-xl bg-background/40 border border-amber-500/20">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-muted-foreground">Taxa de renovação</span>
                        <span className="text-amber-400 font-bold">95%</span>
                      </div>
                      <div className="h-2 bg-background/60 rounded-full overflow-hidden">
                        <div className="h-full w-[95%] bg-gradient-to-r from-amber-500 to-orange-400 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-aqua-900/40 via-background to-aqua-800/30" />
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-aqua-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-aqua-400/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-aqua-100 to-aqua-200 bg-clip-text text-transparent">
                Faça Parte desta Transformação
              </span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Junte-se às centenas de empresas que já descobriram como economia de água pode ser sinônimo de economia financeira e responsabilidade ambiental.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group relative px-8 py-4 rounded-xl font-semibold text-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-aqua-500 to-aqua-600" />
                <div className="absolute inset-0 bg-gradient-to-r from-aqua-400 to-aqua-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2 text-white">
                  Solicitar Diagnóstico
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
              
              <button className="px-8 py-4 rounded-xl font-semibold text-lg border border-aqua-500/50 text-aqua-400 hover:bg-aqua-500/10 transition-all duration-300">
                Ver Casos de Sucesso
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Impacto;
