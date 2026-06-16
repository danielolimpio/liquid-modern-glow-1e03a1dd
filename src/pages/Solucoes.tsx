import { 
  Droplets, 
  Gauge, 
  Smartphone, 
  BarChart3, 
  Shield, 
  Zap,
  CheckCircle2,
  TrendingDown,
  Activity,
  Settings,
  FileCheck,
  Users,
  Building2,
  Factory,
  Hotel,
  ShoppingBag,
  ArrowRight,
  Leaf,
  Award,
  Clock,
  PiggyBank,
  Target,
  Coins,
  Receipt,
  Scale,
  History,
  FileSearch
} from "lucide-react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Solucoes = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "name": "Soluções de Gestão Hídrica AcquaFlux",
        "provider": { "@type": "Organization", "name": "AcquaFlux" },
        "serviceType": ["Gestão Operacional", "Monitoramento IoT", "Analytics BI", "Consultoria ESG", "Gestão Financeira", "Restituição de Créditos de Água RCI-A"],
        "areaServed": { "@type": "Country", "name": "Brazil" }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Como o SEA pode reduzir minha fatura em até 70%?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O Sistema de Economia de Água (SEA) é uma solução completa e sustentável que combina tecnologia avançada com uma abordagem técnico-financeira para otimizar a gestão hídrica da sua empresa. Através de análise detalhada de consumo, identificação de vazamentos, correção de falhas hidráulicas e adequação tarifária, o SEA promove uma economia significativa e duradoura."
            }
          },
          {
            "@type": "Question",
            "name": "Como o TDRR pode reduzir meus custos em até 30%?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "O TDRR oferece monitoramento remoto em tempo real de todo o sistema hidráulico da sua empresa. Com sensores inteligentes instalados estrategicamente, você tem visibilidade total do consumo, detecta vazamentos instantaneamente e recebe alertas automáticos de anomalias."
            }
          },
          {
            "@type": "Question",
            "name": "Como os Hidrômetros Individuais Podem Transformar a Gestão Hídrica?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A individualização de hidrômetros é uma solução que permite a medição precisa do consumo de água de cada unidade em condomínios, edifícios comerciais e residenciais. Com a GCI, cada morador ou empresa paga apenas pelo que consome, promovendo justiça tarifária e incentivando a economia consciente. Estudos comprovam que a individualização pode reduzir o consumo de água em até 40%."
            }
          },
          {
            "@type": "Question",
            "name": "O que é a Restituição de Créditos de Água RCI-A?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A RCI-A é a revisão de contas indévitas de água e esgoto. Auditamos até 10 anos de faturas, identificamos cobranças indevidas — como categoria tarifária errada, esgoto cobrado sobre volume não retornado à rede e faixas progressivas mal aplicadas — e recuperamos os créditos junto à concessionária, sem custo inicial para o cliente."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Soluções de Gestão Hídrica | Sistema SEA e IoT"
        description="Conheça as soluções AcquaFlux: Sistema SEA, monitoramento IoT, Analytics BI e consultoria ESG. Economia de até 70% no consumo de água."
        canonical="/solucoes"
        keywords="sistema SEA, soluções gestão água, monitoramento IoT hídrico, economia água empresas, TDRR monitoramento, GCI individualização, tecnologia hídrica"
        structuredData={structuredData}
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <Droplets className="w-4 h-4" />
              Soluções Integradas
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Nossas{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Soluções
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Conheça as soluções inovadoras da AcquaFlux que revolucionam a gestão hídrica 
              empresarial, reduzindo custos e promovendo sustentabilidade ambiental.
            </p>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-20">
            <path 
              d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z" 
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* SEA - Sistema de Economia de Água */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 block">
                Conheça a Solução Referência do Brasil na Economia de Água
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
                Sistema de Economia de Água – <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">SEA</span>
              </h2>
              
              <div className="relative p-6 rounded-2xl bg-gradient-to-br from-muted/50 to-muted/20 border border-primary/10 mb-8">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/5 to-accent/5" />
                <h3 className="font-heading text-xl font-bold text-primary mb-4 relative">
                  Como o SEA pode reduzir minha fatura em até 70%?
                </h3>
                <p className="text-muted-foreground leading-relaxed relative">
                  O Sistema de Economia de Água (SEA) é uma solução completa e sustentável que combina 
                  tecnologia avançada com uma abordagem técnico-financeira para otimizar a gestão hídrica 
                  da sua empresa. Através de análise detalhada de consumo, identificação de vazamentos, 
                  correção de falhas hidráulicas e adequação tarifária, o SEA promove uma economia 
                  significativa e duradoura.
                </p>
              </div>

              {/* Premium Feature Card */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-500" />
                <div className="relative p-6 bg-background rounded-2xl border border-primary/20">
                  <h4 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Diferenciais do SEA
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Sem investimento inicial – A economia paga o serviço",
                      "Redução garantida de até 70% no consumo",
                      "Monitoramento 24/7 em tempo real",
                      "Adequação tarifária junto às concessionárias",
                      "Manutenção preventiva e corretiva incluída",
                      "Relatórios detalhados e dashboards inteligentes"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Stats Card */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-background to-muted/30 rounded-3xl p-8 border border-primary/10">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent mb-4">
                    <Droplets className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold">Resultados Comprovados</h3>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: TrendingDown, value: "70%", label: "Redução nas faturas" },
                    { icon: PiggyBank, value: "R$ 50M+", label: "Economia gerada" },
                    { icon: Building2, value: "500+", label: "Clientes atendidos" },
                    { icon: Clock, value: "24/7", label: "Monitoramento" }
                  ].map((stat, index) => (
                    <div 
                      key={index}
                      className="relative group"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-300" />
                      <div className="relative p-4 rounded-xl bg-muted/30 border border-primary/10 text-center hover:border-primary/30 transition-all duration-300">
                        <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                        <div className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <a 
                  href="https://wa.me/5512981408992?text=Olá! Gostaria de solicitar um diagnóstico gratuito da gestão hídrica da minha empresa."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full mt-6 py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Solicitar Diagnóstico Gratuito
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      {/* TDRR - Sistema de Monitoramento Remoto */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-muted/20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-4 block">
              Conheça a Inovação Tecnológica do Brasil em Gerenciamento Hídrico
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Sistema de Monitoramento Remoto – <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">TDRR</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Feature Box */}
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-3xl blur opacity-20" />
              <div className="relative bg-background rounded-3xl p-8 border border-accent/20">
                <h3 className="font-heading text-xl font-bold mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                    <Activity className="w-5 h-5 text-primary-foreground" />
                  </div>
                  Como o TDRR pode reduzir meus custos em até 30%?
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  O TDRR oferece monitoramento remoto em tempo real de todo o sistema hidráulico 
                  da sua empresa. Com sensores inteligentes instalados estrategicamente, você tem 
                  visibilidade total do consumo, detecta vazamentos instantaneamente e recebe 
                  alertas automáticos de anomalias.
                </p>
                
                <div className="p-4 rounded-xl bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20">
                  <p className="text-sm font-semibold text-accent mb-3 flex items-center gap-2">
                    <Smartphone className="w-4 h-4" />
                    Nós Monitoramos Para Você!
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Monitoramento em tempo real 24h por dia, 7 dias",
                      "Alertas instantâneos por SMS, e-mail e aplicativo",
                      "Relatórios automatizados de consumo",
                      "Previsão de demanda com IA"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Advantages */}
            <div className="space-y-6">
              <h4 className="font-heading text-xl font-bold flex items-center gap-2">
                <Zap className="w-5 h-5 text-accent" />
                Vantagens do TDRR
              </h4>
              <div className="grid gap-4">
                {[
                  { icon: Gauge, title: "Detecção Imediata", desc: "Identifica vazamentos em segundos, evitando desperdícios e danos" },
                  { icon: BarChart3, title: "Dashboard Inteligente", desc: "Visualize dados em tempo real com gráficos interativos" },
                  { icon: Shield, title: "Segurança Total", desc: "Proteção contra fraudes e consumo irregular" },
                  { icon: Settings, title: "Manutenção Preditiva", desc: "Antecipe problemas antes que se tornem graves" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="group relative"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-accent to-primary rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300" />
                    <div className="relative flex items-start gap-4 p-4 rounded-xl bg-background border border-accent/10 hover:border-accent/30 transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h5 className="font-semibold mb-1">{item.title}</h5>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="py-3 px-6 rounded-xl bg-gradient-to-r from-accent to-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 flex items-center gap-2 group">
                Conhecer o TDRR
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* GCI - Gestão de Consumo Individual */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 block">
              Conheça a Solução Referência do Brasil na Individualização de Consumo
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">GCI</span> – Gestão de Consumo Individual
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Individualização de Hidrômetros
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Main Info Card */}
            <div className="lg:col-span-2 relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur opacity-30" />
              <div className="relative bg-background rounded-2xl p-8 border border-primary/20 h-full">
                <h3 className="font-heading text-xl font-bold mb-6 flex items-center gap-3">
                  <Target className="w-6 h-6 text-primary" />
                  Como os Hidrômetros Individuais Podem Transformar a Gestão Hídrica?
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  A individualização de hidrômetros é uma solução que permite a medição precisa 
                  do consumo de água de cada unidade em condomínios, edifícios comerciais e 
                  residenciais. Com a GCI, cada morador ou empresa paga apenas pelo que consome, 
                  promovendo justiça tarifária e incentivando a economia consciente.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Estudos comprovam que a individualização pode reduzir o consumo de água em até 
                  40%, pois elimina a injustiça do rateio comum e conscientiza cada usuário sobre 
                  seus hábitos de consumo.
                </p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="space-y-4">
              {[
                { value: "40%", label: "Redução média de consumo", icon: TrendingDown },
                { value: "100%", label: "Justiça tarifária", icon: FileCheck },
                { value: "Lei", label: "Conformidade legal", icon: Shield }
              ].map((stat, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-300" />
                  <div className="relative p-4 rounded-xl bg-muted/30 border border-primary/10 hover:border-primary/30 transition-all duration-300 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-heading text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vantagens Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: PiggyBank, title: "Economia Real", desc: "Cada usuário paga pelo que consome" },
              { icon: Leaf, title: "Sustentabilidade", desc: "Incentiva o uso consciente da água" },
              { icon: Users, title: "Transparência", desc: "Elimina conflitos por rateio" },
              { icon: Award, title: "Valorização", desc: "Aumenta o valor do imóvel" }
            ].map((item, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-30 blur transition duration-300" />
                <div className="relative p-6 rounded-xl bg-muted/20 border border-primary/10 hover:border-primary/30 transition-all duration-300 text-center h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      {/* SEA+ - Sistema Avançado */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-accent uppercase tracking-widest mb-4 block">
              Conheça a Solução Avançada do Brasil na Redução de Desperdício de Água
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Sistema de Economia de Água – <span className="bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">SEA+</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative group mb-12">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-accent rounded-3xl blur opacity-30" />
              <div className="relative bg-background rounded-3xl p-8 md:p-10 border border-accent/20">
                <h3 className="font-heading text-xl font-bold mb-6 text-center">
                  Como o SEA+ está Revolucionando o Mercado
                </h3>
                <p className="text-muted-foreground leading-relaxed text-center mb-8">
                  O SEA+ é a evolução do nosso sistema tradicional, com economia de até 75% nas faturas 
                  de água. Combinando inteligência artificial, sensores de última geração e uma 
                  equipe especializada, o SEA+ oferece o máximo em eficiência hídrica para grandes 
                  consumidores industriais e comerciais.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { icon: Zap, title: "IA Avançada", desc: "Algoritmos que aprendem e otimizam continuamente" },
                    { icon: Activity, title: "Sensores IoT", desc: "Monitoramento inteligente em cada ponto" },
                    { icon: BarChart3, title: "Analytics Premium", desc: "Dashboards executivos com insights profundos" },
                    { icon: Shield, title: "Garantia de Resultado", desc: "Economia garantida por contrato" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 hover:bg-muted/50 transition-colors">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <a 
                href="https://wa.me/5512981408992?text=Olá! Gostaria de solicitar uma proposta do SEA+ para minha empresa."
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-8 rounded-xl bg-gradient-to-r from-accent via-primary to-accent text-primary-foreground font-semibold text-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 flex items-center gap-3 mx-auto group"
              >
                Solicitar Proposta SEA+
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Segmentos Atendidos */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 block">
              Para Todos os Segmentos
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Segmentos</span> Atendidos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nossas soluções atendem diversos setores com excelência
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Factory, title: "Indústrias", desc: "Processos industriais otimizados" },
              { icon: Building2, title: "Corporativo", desc: "Edifícios comerciais e escritórios" },
              { icon: Hotel, title: "Hotelaria", desc: "Hotéis, resorts e hospitais" },
              { icon: ShoppingBag, title: "Varejo", desc: "Shopping centers e lojas" },
              { icon: Users, title: "Condomínios", desc: "Residenciais e comerciais" },
              { icon: Building2, title: "Construtoras", desc: "Obras e incorporadoras" },
              { icon: Leaf, title: "Agronegócio", desc: "Irrigação e pecuária" },
              { icon: Factory, title: "Saneamento", desc: "Utilities e concessionárias" }
            ].map((segment, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-40 blur transition duration-500" />
                <div className="relative p-6 rounded-xl bg-muted/20 border border-primary/10 hover:border-primary/40 transition-all duration-500 text-center h-full group-hover:bg-muted/40">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent transition-all duration-500">
                    <segment.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-500" />
                  </div>
                  <h4 className="font-semibold mb-2">{segment.title}</h4>
                  <p className="text-sm text-muted-foreground">{segment.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-br from-primary to-accent">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-40 h-40 border border-primary-foreground rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 border border-primary-foreground rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary-foreground rounded-full" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Pronto para Transformar sua Gestão Hídrica?
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Entre em contato com nossos especialistas e descubra qual solução 
            é ideal para sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5512981408992?text=Olá! Gostaria de falar com um especialista da AcquaFlux sobre soluções hídricas."
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 rounded-xl bg-primary-foreground text-primary font-semibold text-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Fale com um Especialista
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="https://wa.me/5512981408992?text=Olá! Gostaria de solicitar um diagnóstico gratuito da gestão hídrica da minha empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="py-4 px-8 rounded-xl bg-transparent border-2 border-primary-foreground text-primary-foreground font-semibold text-lg hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Solicitar Diagnóstico Gratuito
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solucoes;
