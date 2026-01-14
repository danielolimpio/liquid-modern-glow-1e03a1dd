import { Target, Eye, Users, Award, Globe, Leaf, Building2, TrendingUp, Shield, Sparkles, Droplets, CheckCircle2, MapPin, Zap, Heart, Lightbulb, Rocket, BarChart3, Handshake, GraduationCap, Trophy } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const Sobre = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Sobre a AcquaFlux",
    "description": "Conheça a AcquaFlux, empresa brasileira pioneira em soluções sustentáveis para gestão de recursos hídricos desde 2014.",
    "url": "https://acquaflux.com/sobre",
    "mainEntity": {
      "@type": "Organization",
      "name": "AcquaFlux",
      "foundingDate": "2014",
      "numberOfEmployees": "50+",
      "areaServed": "Brasil"
    }
  };

  const stats = [
    { number: "10+", label: "Anos de Experiência", icon: Award },
    { number: "500+", label: "Clientes Atendidos", icon: Users },
    { number: "15", label: "Estados Presentes", icon: Globe },
    { number: "98%", label: "Satisfação", icon: TrendingUp },
    { number: "2M+", label: "Litros Economizados", icon: Droplets },
    { number: "50+", label: "Especialistas", icon: GraduationCap },
  ];

  const values = [
    {
      icon: Shield,
      title: "Integridade",
      description: "Atuamos com transparência e ética em todas as relações, mantendo o compromisso com a verdade e a honestidade em cada ação."
    },
    {
      icon: Leaf,
      title: "Sustentabilidade",
      description: "Equilibramos crescimento econômico com responsabilidade ambiental, promovendo práticas que preservam os recursos hídricos para as futuras gerações."
    },
    {
      icon: Lightbulb,
      title: "Inovação",
      description: "Investimos constantemente em pesquisa e desenvolvimento para oferecer soluções tecnológicas de ponta que revolucionam a gestão hídrica."
    },
    {
      icon: Heart,
      title: "Compromisso Social",
      description: "Acreditamos que o acesso à água é um direito fundamental e trabalhamos para democratizar soluções hídricas sustentáveis."
    },
    {
      icon: Handshake,
      title: "Parceria",
      description: "Construímos relacionamentos duradouros baseados em confiança mútua, trabalhando lado a lado com nossos clientes para alcançar resultados extraordinários."
    },
    {
      icon: Trophy,
      title: "Excelência",
      description: "Buscamos a perfeição em cada projeto, garantindo que cada solução entregue supere as expectativas e gere impacto positivo mensurável."
    },
  ];

  const timeline = [
    {
      year: "2014",
      title: "Início Visionário",
      description: "A AcquaFlux nasceu da visão de um grupo de engenheiros ambientais e especialistas em recursos hídricos que identificaram a necessidade urgente de soluções inteligentes para a gestão da água no Brasil. Em um cenário de crescente escassez hídrica e desperdício generalizado, nossa fundação representou o primeiro passo de uma jornada transformadora no setor."
    },
    {
      year: "2016",
      title: "Primeiros Grandes Contratos",
      description: "Conquistamos nossos primeiros grandes clientes industriais, demonstrando a eficácia de nossa metodologia proprietária. Nesse período, desenvolvemos nosso primeiro sistema de monitoramento em tempo real, que se tornaria a base tecnológica de todas as nossas soluções futuras."
    },
    {
      year: "2018",
      title: "Expansão Nacional",
      description: "Com resultados comprovados e uma reputação crescente, expandimos nossas operações para 10 estados brasileiros. Estabelecemos parcerias estratégicas com universidades e centros de pesquisa, fortalecendo nossa capacidade de inovação."
    },
    {
      year: "2020",
      title: "Certificação e Reconhecimento",
      description: "Conquistamos a certificação ISO 14001 e ISO 9001, consolidando nosso compromisso com qualidade e gestão ambiental. Fomos reconhecidos pelo CEBDS como uma das empresas mais inovadoras em sustentabilidade hídrica."
    },
    {
      year: "2022",
      title: "Projeção Internacional",
      description: "Iniciamos nossa expansão internacional com projetos na América Latina. Participamos de fóruns globais de sustentabilidade, compartilhando nossa expertise e metodologias com líderes mundiais do setor hídrico."
    },
    {
      year: "2024",
      title: "Liderança Consolidada",
      description: "Hoje, a AcquaFlux é referência nacional em gestão hídrica sustentável, com mais de 500 clientes ativos, presença em 15 estados e um portfólio de soluções que já economizou milhões de litros de água."
    },
  ];

  const locations = [
    { city: "São Paulo", state: "SP", type: "Sede" },
    { city: "Rio de Janeiro", state: "RJ", type: "Escritório" },
    { city: "Belo Horizonte", state: "MG", type: "Escritório" },
    { city: "Salvador", state: "BA", type: "Escritório" },
    { city: "Curitiba", state: "PR", type: "Escritório" },
    { city: "Porto Alegre", state: "RS", type: "Escritório" },
    { city: "Brasília", state: "DF", type: "Escritório" },
    { city: "Fortaleza", state: "CE", type: "Escritório" },
    { city: "Recife", state: "PE", type: "Escritório" },
    { city: "Manaus", state: "AM", type: "Escritório" },
    { city: "Goiânia", state: "GO", type: "Representante" },
    { city: "Campinas", state: "SP", type: "Representante" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Sobre a AcquaFlux | Pioneira em Gestão Hídrica Sustentável"
        description="Conheça a AcquaFlux, empresa brasileira com mais de 10 anos de experiência em soluções sustentáveis para gestão de recursos hídricos. Presença em 15 estados."
        canonical="/sobre"
        structuredData={structuredData}
      />
      <Header />
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Premium gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Premium badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-8">
              <Droplets className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-primary tracking-wide">Sobre a AcquaFlux</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="gradient-text">Quem Somos</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto mb-6">
              A AcquaFlux é uma empresa brasileira pioneira em soluções sustentáveis para gestão de recursos hídricos, 
              fundada em 2014 com a missão de transformar a relação das organizações com a água. Combinamos tecnologia 
              de ponta, expertise técnica e compromisso ambiental para entregar resultados que impactam positivamente 
              nossos clientes, a sociedade e o planeta.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground/80 leading-relaxed max-w-3xl mx-auto">
              Nossa trajetória é marcada pela inovação constante, parcerias estratégicas e um profundo respeito 
              pelos recursos naturais. Acreditamos que a gestão inteligente da água é fundamental para o desenvolvimento 
              sustentável e trabalhamos incansavelmente para democratizar o acesso a soluções hídricas de excelência.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group relative p-5 md:p-6 rounded-2xl bg-gradient-to-br from-card to-card/50 border border-transparent hover:border-primary/30 transition-all duration-500"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-primary/50 via-transparent to-accent/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full h-full rounded-2xl bg-card" />
                </div>
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-primary to-accent mb-3">
                    <stat.icon className="w-5 h-5 md:w-6 md:h-6 text-primary-foreground" />
                  </div>
                  <div className="font-heading text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Início Visionário - Story Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6">
                <Rocket className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Nossa Origem</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Início Visionário: <span className="gradient-text">A Jornada da AcquaFlux</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A AcquaFlux surgiu da visão de um grupo de profissionais apaixonados por sustentabilidade 
                  e gestão hídrica. Diante de um cenário de crescente escassez de recursos e desperdício 
                  generalizado de água, nossos fundadores identificaram a oportunidade de transformar 
                  a forma como empresas e organizações gerenciam este recurso vital.
                </p>
                <p>
                  Desde o início, nossa abordagem combinou conhecimento técnico profundo com inovação 
                  tecnológica. Desenvolvemos metodologias proprietárias que integram análise de dados, 
                  monitoramento em tempo real e consultoria especializada para entregar resultados 
                  mensuráveis e sustentáveis.
                </p>
                <p>
                  Hoje, a AcquaFlux é reconhecida como uma das principais empresas de gestão hídrica 
                  do Brasil, com uma trajetória marcada por conquistas, inovações e um impacto positivo 
                  comprovado no meio ambiente e nos resultados de nossos clientes.
                </p>
              </div>
              <Button className="mt-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                Conheça Nossa História Completa
              </Button>
            </div>
            
            {/* Visual Element */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-50" />
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-card via-card to-card/80 border border-primary/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/10">
                    <Zap className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-heading font-bold mb-1">Pioneirismo</h4>
                    <p className="text-sm text-muted-foreground">Primeira empresa a implementar IoT em gestão hídrica no Brasil</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/10">
                    <BarChart3 className="w-8 h-8 text-accent mb-3" />
                    <h4 className="font-heading font-bold mb-1">Resultados</h4>
                    <p className="text-sm text-muted-foreground">Economia média de 35% no consumo de água dos clientes</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-accent/10 to-transparent border border-accent/10">
                    <Globe className="w-8 h-8 text-accent mb-3" />
                    <h4 className="font-heading font-bold mb-1">Alcance</h4>
                    <p className="text-sm text-muted-foreground">Presença em 15 estados e expansão para América Latina</p>
                  </div>
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/10">
                    <Award className="w-8 h-8 text-primary mb-3" />
                    <h4 className="font-heading font-bold mb-1">Reconhecimento</h4>
                    <p className="text-sm text-muted-foreground">Múltiplos prêmios em inovação e sustentabilidade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consciência Ambiental Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual Side */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-3xl blur-2xl opacity-50" />
                <div className="relative p-8 rounded-3xl bg-card border border-accent/20">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mb-4">
                      <Leaf className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold">Impacto Ambiental</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">2M+</span>
                      </div>
                      <div>
                        <p className="font-semibold">Litros de Água Economizados</p>
                        <p className="text-sm text-muted-foreground">Através de nossas soluções</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-accent/5 to-transparent border border-accent/10">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">50%</span>
                      </div>
                      <div>
                        <p className="font-semibold">Redução de Desperdício</p>
                        <p className="text-sm text-muted-foreground">Em clientes industriais</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <span className="text-primary-foreground font-bold">100%</span>
                      </div>
                      <div>
                        <p className="font-semibold">Compliance Ambiental</p>
                        <p className="text-sm text-muted-foreground">Conformidade com regulamentações</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Side */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm mb-6">
                <Leaf className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Responsabilidade Ambiental</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Consciência Ambiental: <span className="gradient-text">O Combate ao Desperdício de Água</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  A água é o recurso mais precioso do planeta, e sua gestão responsável é uma obrigação 
                  de todos. Na AcquaFlux, cada projeto que desenvolvemos é guiado pelo compromisso 
                  inabalável com a preservação dos recursos hídricos e a promoção de práticas sustentáveis.
                </p>
                <p>
                  Nosso trabalho vai além da eficiência operacional. Atuamos como agentes de transformação, 
                  conscientizando empresas e comunidades sobre a importância da gestão hídrica responsável. 
                  Desenvolvemos programas educacionais, relatórios de impacto ambiental e soluções que 
                  promovem a economia circular da água.
                </p>
                <p>
                  Acreditamos que tecnologia e sustentabilidade caminham juntas. Por isso, investimos 
                  continuamente em pesquisa e desenvolvimento para criar soluções que reduzam o impacto 
                  ambiental enquanto otimizam os processos de nossos clientes.
                </p>
                <p className="font-medium text-foreground">
                  Cada gota conta. E na AcquaFlux, trabalhamos para que cada gota seja utilizada 
                  com inteligência, responsabilidade e respeito ao meio ambiente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6">
              <Target className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Propósito</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Missão, Visão e <span className="gradient-text">Propósito</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Mission Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl opacity-30 blur group-hover:opacity-50 transition duration-500" />
              <div className="relative p-8 md:p-10 rounded-3xl bg-card border border-primary/10 backdrop-blur-xl h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-2xl blur-lg opacity-50" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Target className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Nossa Missão</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                  Promover a gestão sustentável e inteligente dos recursos hídricos, oferecendo soluções 
                  inovadoras que otimizem o uso da água, eliminem desperdícios e contribuam para um 
                  futuro mais consciente e responsável com o meio ambiente.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Trabalhamos para transformar a relação das organizações com a água, demonstrando 
                  que eficiência operacional e responsabilidade ambiental podem — e devem — caminhar juntas.
                </p>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 border border-primary/10 rounded-full" />
                <div className="absolute bottom-4 right-8 w-10 h-10 border border-accent/10 rounded-full" />
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-accent via-primary to-accent rounded-3xl opacity-30 blur group-hover:opacity-50 transition duration-500" />
              <div className="relative p-8 md:p-10 rounded-3xl bg-card border border-accent/10 backdrop-blur-xl h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-2xl blur-lg opacity-50" />
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                      <Eye className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  <h2 className="font-heading text-2xl md:text-3xl font-bold">Nossa Visão</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg mb-4">
                  Ser a empresa referência em gestão hídrica sustentável na América Latina, reconhecida 
                  pela excelência em inovação tecnológica, compromisso ambiental inabalável e impacto 
                  positivo transformador nas comunidades e organizações onde atuamos.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Aspiramos a um mundo onde a gestão inteligente da água seja a norma, não a exceção, 
                  e onde cada organização reconheça seu papel na preservação deste recurso vital.
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
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
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
              Os valores fundamentais que orientam cada decisão, projeto e relacionamento em nossa jornada 
              de transformação do setor hídrico.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              Crescimento e Reconhecimento: <span className="gradient-text">Marcando Presença no Mercado</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Uma década de conquistas, inovações e impacto positivo no setor hídrico brasileiro.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-primary via-accent to-primary/30" />

            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Content */}
                <div className={`w-full md:w-5/12 pl-12 md:pl-0 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <div className="group relative inline-block w-full">
                    <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors duration-500">
                      <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-bold mb-3">
                        {item.year}
                      </span>
                      <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-accent border-4 border-background shadow-lg shadow-primary/30 mt-8 md:mt-0" />

                {/* Empty space */}
                <div className="hidden md:block md:w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visão Futuro Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-accent/5 via-background to-primary/5">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-accent/30 bg-accent/5 backdrop-blur-sm mb-6">
                <Rocket className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-accent">Futuro</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Visão Futuro: <span className="gradient-text">Sustentabilidade e Oportunidades</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  O futuro da gestão hídrica é inteligente, conectado e sustentável. Na AcquaFlux, 
                  estamos na vanguarda desta transformação, desenvolvendo soluções que antecipam 
                  as necessidades do mercado e respondem aos desafios ambientais globais.
                </p>
                <p>
                  Nosso roadmap estratégico inclui a expansão para novos mercados na América Latina, 
                  o desenvolvimento de soluções baseadas em inteligência artificial e machine learning, 
                  e a criação de parcerias com organizações internacionais de referência em sustentabilidade.
                </p>
                <p>
                  Acreditamos que a próxima década será decisiva para a gestão dos recursos hídricos 
                  globais. Estamos comprometidos em liderar esta transformação, oferecendo soluções 
                  cada vez mais eficientes, acessíveis e impactantes.
                </p>
              </div>
              
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-primary/10">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Expansão para América Latina</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-accent/10">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">IA e Machine Learning</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-accent/10">
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-sm">Parcerias Globais</span>
                </div>
                <div className="flex items-center gap-3 p-4 rounded-xl bg-card border border-primary/10">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Novos Setores de Atuação</span>
                </div>
              </div>
            </div>
            
            {/* Visual */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/30 via-primary/30 to-accent/30 rounded-3xl blur-2xl opacity-40 animate-pulse" />
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-card via-card to-card/80 border border-accent/20">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary mb-4">
                    <Globe className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold">Metas 2030</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Países de Atuação</span>
                      <span className="font-heading text-xl font-bold gradient-text">10+</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-primary to-accent" />
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-r from-accent/5 to-transparent border border-accent/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Clientes Ativos</span>
                      <span className="font-heading text-xl font-bold gradient-text">2.000+</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-accent to-primary" />
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-transparent border border-primary/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">Litros Economizados</span>
                      <span className="font-heading text-xl font-bold gradient-text">50M+</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden">
                      <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-primary to-accent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Onde Estamos Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Presença Nacional</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Onde <span className="gradient-text">Estamos</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Com sede em São Paulo e escritórios estrategicamente localizados em todo o Brasil, 
              estamos prontos para atender sua empresa onde quer que ela esteja.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {locations.map((location, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-br from-primary/40 via-accent/20 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className={`relative p-4 rounded-xl bg-card border transition-colors duration-500 text-center ${
                  location.type === "Sede" 
                    ? "border-primary/30 bg-gradient-to-br from-primary/5 to-transparent" 
                    : "border-border/50 hover:border-transparent"
                }`}>
                  <MapPin className={`w-5 h-5 mx-auto mb-2 ${location.type === "Sede" ? "text-primary" : "text-muted-foreground group-hover:text-primary transition-colors"}`} />
                  <p className="font-heading font-bold text-sm">{location.city}</p>
                  <p className="text-xs text-muted-foreground">{location.state}</p>
                  {location.type === "Sede" && (
                    <span className="inline-block mt-2 px-2 py-0.5 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-medium">
                      Sede
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        
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
                Nossa expertise combinada com tecnologia de ponta e um compromisso inabalável 
                com resultados nos posiciona como a escolha certa para organizações que buscam 
                excelência em gestão hídrica sustentável.
              </p>

              <div className="space-y-4">
                {[
                  "Tecnologia proprietária de monitoramento em tempo real com IoT",
                  "Equipe multidisciplinar certificada e especializada",
                  "Suporte técnico 24/7 com atendimento personalizado",
                  "Resultados comprovados com economia média de 35% no consumo",
                  "Compliance total com regulamentações ambientais",
                  "Metodologia exclusiva desenvolvida em parceria com universidades",
                  "Relatórios detalhados de impacto ambiental e financeiro",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="text-foreground/80 group-hover:text-foreground transition-colors">{item}</span>
                  </div>
                ))}
              </div>
              
              <Button className="mt-8 bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
                Fale com um Especialista
              </Button>
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
