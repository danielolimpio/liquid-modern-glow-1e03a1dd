import { Link } from "react-router-dom";
import {
  Droplets,
  TrendingDown,
  Gauge,
  BarChart3,
  Leaf,
  FileCheck,
  Building2,
  PiggyBank,
  Activity,
  CheckCircle2,
  ArrowRight,
  AlertTriangle,
  Target,
  Sparkles,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const EconomiaDeAgua = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Economia de Água para Empresas: Guia Completo de Gestão Hídrica, Auditoria de Fatura e ROI",
        description:
          "Guia pilar sobre economia de água em empresas: como reduzir a conta, auditar fatura, aplicar IoT, BI e ESG. Estratégias, indicadores e cases AcquaFlux.",
        author: { "@type": "Organization", name: "AcquaFlux" },
        publisher: {
          "@type": "Organization",
          name: "AcquaFlux",
          logo: {
            "@type": "ImageObject",
            url: "https://acquaflux.com/favicon.png",
          },
        },
        mainEntityOfPage: "https://acquaflux.com/economia-de-agua/",
        inLanguage: "pt-BR",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Como reduzir a conta de água da empresa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Para reduzir a conta de água empresarial é preciso combinar três frentes: auditoria de fatura (revisão tarifária, créditos retroativos e categoria de consumo), correção de falhas hidráulicas (vazamentos, válvulas, descargas) e gestão contínua via monitoramento IoT com BI. Esta combinação reduz a fatura entre 30% e 70%.",
            },
          },
          {
            "@type": "Question",
            name: "O que é gestão hídrica empresarial?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Gestão hídrica empresarial é o conjunto de processos, tecnologias e indicadores que controlam captação, consumo, perdas, tarifação e descarte de água em uma organização. Inclui telemetria IoT, dashboards de BI, auditoria de fatura, compliance ESG e metas de eficiência hídrica.",
            },
          },
          {
            "@type": "Question",
            name: "Vale a pena auditar a fatura de água da empresa?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim. A auditoria de fatura de água identifica cobranças indevidas, enquadramentos tarifários incorretos e créditos retroativos. Em média, empresas auditadas pela AcquaFlux recuperam valores significativos e passam a pagar a tarifa correta sem investimento inicial.",
            },
          },
          {
            "@type": "Question",
            name: "Como o IoT ajuda a economizar água?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sensores IoT medem o consumo em tempo real, identificam vazamentos em minutos, geram alertas automáticos e alimentam dashboards de BI. Isso elimina perdas invisíveis que representam até 30% do consumo total de empresas sem monitoramento.",
            },
          },
          {
            "@type": "Question",
            name: "Qual o ROI de um projeto de economia de água?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Projetos de economia de água com AcquaFlux têm payback típico entre 6 e 18 meses, com ROI superior a 200% no primeiro ano. O retorno vem da redução de fatura, recuperação de créditos e ganhos de eficiência operacional.",
            },
          },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: "https://acquaflux.com/" },
          {
            "@type": "ListItem",
            position: 2,
            name: "Economia de Água",
            item: "https://acquaflux.com/economia-de-agua/",
          },
        ],
      },
    ],
  };

  const toc = [
    { id: "o-que-e", label: "O que é economia de água empresarial" },
    { id: "como-reduzir", label: "Como reduzir a conta de água" },
    { id: "desperdicio", label: "Desperdício de água nas empresas" },
    { id: "auditoria", label: "Auditoria de fatura de água" },
    { id: "iot", label: "Monitoramento IoT e gestão em tempo real" },
    { id: "bi", label: "Analytics e BI para gestão hídrica" },
    { id: "esg", label: "ESG, compliance e pegada hídrica" },
    { id: "roi", label: "ROI e indicadores de eficiência" },
    { id: "faq", label: "Perguntas frequentes" },
  ];

  const clusters = [
    {
      icon: TrendingDown,
      title: "Como reduzir a conta de água da empresa",
      description:
        "Estratégias práticas e técnico-financeiras para diminuir a fatura em até 70%, combinando ajuste tarifário, correção hidráulica e gestão contínua.",
      to: "/solucoes",
      cta: "Ver solução SEA",
    },
    {
      icon: AlertTriangle,
      title: "Desperdício de água nas empresas: onde está o ralo invisível",
      description:
        "Vazamentos não visíveis, válvulas mal calibradas, descargas superdimensionadas e enquadramento tarifário incorreto somam até 40% da fatura.",
      to: "/monitoramento-iot",
      cta: "Detectar com IoT",
    },
    {
      icon: FileCheck,
      title: "Auditoria de fatura de água: créditos retroativos e tarifa correta",
      description:
        "Revisão técnica das contas dos últimos 60 meses para identificar cobranças indevidas, recuperar créditos e reenquadrar categoria tarifária.",
      to: "/gestao-financeira",
      cta: "Auditar minha fatura",
    },
    {
      icon: Gauge,
      title: "Monitoramento IoT: TDRR e telemetria hídrica",
      description:
        "Sensores inteligentes medem consumo 24/7, detectam vazamentos em minutos e alimentam dashboards. Redução média de 30% em perdas operacionais.",
      to: "/monitoramento-iot",
      cta: "Conhecer o TDRR",
    },
    {
      icon: BarChart3,
      title: "Analytics e BI para gestão hídrica",
      description:
        "Dashboards executivos com KPIs hídricos, análise preditiva e benchmarking. Decisões baseadas em dados, não em estimativas.",
      to: "/analytics-bi",
      cta: "Ver Analytics & BI",
    },
    {
      icon: Leaf,
      title: "ESG, pegada hídrica e compliance ambiental",
      description:
        "Relatórios GRI, métricas de pegada hídrica (water footprint) e adequação à ANA, agências reguladoras e ODS 6.",
      to: "/consultoria-esg",
      cta: "Consultoria ESG",
    },
    {
      icon: Building2,
      title: "Individualização de hidrômetros (GCI)",
      description:
        "Para condomínios e empresas multiusuário: cada unidade paga pelo que consome. Redução média de 40% no consumo total.",
      to: "/solucoes",
      cta: "Saber mais sobre GCI",
    },
    {
      icon: PiggyBank,
      title: "ROI de projetos de economia de água",
      description:
        "Payback entre 6 e 18 meses, ROI acima de 200% no primeiro ano. Como calcular e comprovar o retorno do investimento.",
      to: "/gestao-financeira",
      cta: "Calcular ROI",
    },
  ];

  const faqs = [
    {
      q: "Como reduzir a conta de água da empresa?",
      a: "Combine auditoria de fatura (revisão tarifária e créditos retroativos), correção de falhas hidráulicas (vazamentos, válvulas e descargas) e gestão contínua via monitoramento IoT com BI. Essa combinação reduz a fatura entre 30% e 70%.",
    },
    {
      q: "O que é gestão hídrica empresarial?",
      a: "É o conjunto de processos, tecnologias e indicadores que controlam captação, consumo, perdas, tarifação e descarte de água em uma organização — telemetria IoT, BI, auditoria de fatura, compliance ESG e metas de eficiência hídrica.",
    },
    {
      q: "Vale a pena auditar a fatura de água?",
      a: "Sim. A auditoria identifica cobranças indevidas, enquadramentos tarifários incorretos e créditos retroativos. Empresas auditadas pela AcquaFlux recuperam valores significativos sem investimento inicial.",
    },
    {
      q: "Como o IoT ajuda a economizar água?",
      a: "Sensores IoT medem consumo em tempo real, identificam vazamentos em minutos e alimentam dashboards. Isso elimina perdas invisíveis que representam até 30% do consumo de empresas sem monitoramento.",
    },
    {
      q: "Qual o ROI de um projeto de economia de água?",
      a: "Payback típico entre 6 e 18 meses, com ROI acima de 200% no primeiro ano — vindo da redução de fatura, créditos retroativos e ganhos operacionais.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Economia de Água para Empresas: Reduza até 70% | AcquaFlux"
        description="Como reduzir a conta de água da empresa? Guia completo com auditoria, IoT, BI e ESG. Estratégias validadas para economia de até 70%. Diagnóstico gratuito."
        canonical="/economia-de-agua/"
        keywords="economia de água, economia de água para empresas, como reduzir a conta de água, reduzir conta de água empresa, conta de água alta empresa, gestão hídrica empresarial, auditoria de fatura de água, desperdício de água nas empresas, vazamento água empresa, monitoramento IoT água, pegada hídrica, ROI economia de água, sustentabilidade hídrica, sistema SEA, TDRR"
        structuredData={structuredData}
      />
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container relative mx-auto px-6">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="hover:text-primary">Início</Link></li>
              <li aria-hidden>/</li>
              <li className="text-foreground">Economia de Água</li>
            </ol>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold">Guia Pilar AcquaFlux</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Economia de Água para Empresas:{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                guia completo de gestão hídrica
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl">
              Como reduzir a conta de água, eliminar desperdício, auditar a fatura e aplicar
              IoT, BI e ESG para uma economia hídrica de 30% a 70% — comprovada por dados.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contato" className="btn-aqua px-8 py-4">
                Diagnóstico gratuito
              </Link>
              <Link
                to="/solucoes"
                className="px-8 py-4 rounded-full border border-primary/30 hover:bg-primary/10 transition"
              >
                Ver soluções
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sumário */}
      <section className="py-12 border-y border-border/40 bg-muted/20">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-6">Sumário</h2>
          <ul className="grid md:grid-cols-2 gap-3">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="flex items-center gap-2 text-foreground/80 hover:text-primary transition"
                >
                  <ArrowRight className="w-4 h-4 text-primary" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* O que é */}
      <section id="o-que-e" className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            O que é economia de água empresarial
          </h2>
          <p className="text-lg text-foreground/80 mb-4">
            Economia de água empresarial é a disciplina que reduz o volume e o custo da água
            consumida por uma organização sem comprometer a operação. Vai muito além de
            "fechar a torneira": envolve <strong>auditoria tarifária</strong>,{" "}
            <strong>correção hidráulica</strong>, <strong>monitoramento IoT</strong>,{" "}
            <strong>BI</strong> e <strong>compliance ESG</strong>.
          </p>
          <p className="text-lg text-foreground/80">
            Empresas brasileiras desperdiçam, em média, entre 25% e 40% da água que pagam — em
            vazamentos não visíveis, equipamentos mal regulados e enquadramentos tarifários
            incorretos. A AcquaFlux opera nas cinco frentes que destravam essa economia.
          </p>
        </div>
      </section>

      {/* Cluster de artigos */}
      <section id="como-reduzir" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cluster de conteúdos: tudo sobre economia de água
            </h2>
            <p className="text-lg text-muted-foreground">
              Cada bloco abaixo aprofunda um pilar da gestão hídrica empresarial e conecta com
              a solução correspondente da AcquaFlux.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {clusters.map((c, i) => (
              <article
                key={i}
                className="glass-card p-8 rounded-2xl hover:scale-[1.02] transition-transform"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <c.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-foreground/70 mb-6">{c.description}</p>
                <Link
                  to={c.to}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  {c.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Desperdício */}
      <section id="desperdicio" className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Desperdício de água nas empresas: onde está o ralo invisível
          </h2>
          <p className="text-lg text-foreground/80 mb-6">
            A maior parte do desperdício hídrico empresarial é <em>invisível</em>: não está
            numa torneira aberta, está no subsolo, nas válvulas, nas descargas e na fatura.
          </p>
          <ul className="space-y-4">
            {[
              "Vazamentos subterrâneos e em ramais (até 18% do consumo)",
              "Válvulas de descarga e mictórios mal dimensionados (até 12%)",
              "Reservatórios com extravasores defeituosos (até 6%)",
              "Enquadramento tarifário incorreto (cobrança 30%+ acima do devido)",
              "Falta de leitura individualizada em condomínios e plantas industriais",
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground/80">{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <Link to="/monitoramento-iot" className="btn-aqua px-6 py-3 inline-flex items-center gap-2">
              Detectar perdas com IoT <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Auditoria */}
      <section id="auditoria" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Auditoria de fatura de água: créditos retroativos e tarifa correta
          </h2>
          <p className="text-lg text-foreground/80 mb-6">
            A auditoria técnica das faturas dos últimos 60 meses identifica cobranças
            indevidas, enquadramentos incorretos e devolve <strong>créditos retroativos</strong>{" "}
            previstos na regulação da ANA e das agências estaduais. É um trabalho sem
            investimento inicial e com remuneração baseada em resultado.
          </p>
          <Link to="/gestao-financeira" className="btn-aqua px-6 py-3 inline-flex items-center gap-2">
            Auditar minha fatura <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* IoT */}
      <section id="iot" className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Monitoramento IoT e gestão em tempo real
          </h2>
          <p className="text-lg text-foreground/80 mb-6">
            O <strong>TDRR</strong> (Telemetria com Detecção Remota de Rompimentos) instala
            sensores estratégicos que monitoram vazão e pressão 24/7. Vazamentos são
            identificados em minutos, não em meses. Empresas com TDRR economizam, em média,
            30% além do que economizariam só com auditoria.
          </p>
          <Link to="/monitoramento-iot" className="btn-aqua px-6 py-3 inline-flex items-center gap-2">
            Conhecer o TDRR <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* BI */}
      <section id="bi" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Analytics e BI para gestão hídrica
          </h2>
          <p className="text-lg text-foreground/80 mb-6">
            Dashboards executivos com indicadores como <strong>L/colaborador/dia</strong>,{" "}
            <strong>m³/m² construído</strong>, <strong>pegada hídrica por produto</strong> e{" "}
            <strong>desvio vs. meta</strong>. Análise preditiva antecipa picos de consumo e
            falhas operacionais.
          </p>
          <Link to="/analytics-bi" className="btn-aqua px-6 py-3 inline-flex items-center gap-2">
            Ver Analytics & BI <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ESG */}
      <section id="esg" className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ESG, compliance e pegada hídrica
          </h2>
          <p className="text-lg text-foreground/80 mb-6">
            Investidores, clientes corporativos e órgãos reguladores cobram cada vez mais
            <strong> métricas hídricas auditáveis</strong>. A AcquaFlux entrega relatórios
            compatíveis com GRI 303, CDP Water, ODS 6 e regulações ANA, com{" "}
            <strong>water footprint</strong> calculada por escopo.
          </p>
          <Link to="/consultoria-esg" className="btn-aqua px-6 py-3 inline-flex items-center gap-2">
            Consultoria ESG <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ROI */}
      <section id="roi" className="py-20 bg-muted/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ROI e indicadores de eficiência hídrica
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Target, label: "Payback típico", value: "6–18 meses" },
              { icon: TrendingDown, label: "Redução de fatura", value: "30% a 70%" },
              { icon: Activity, label: "ROI ano 1", value: "> 200%" },
            ].map((s, i) => (
              <div key={i} className="glass-card p-6 rounded-2xl text-center">
                <s.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
          <Link to="/impacto" className="text-primary font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
            Ver cases e impacto comprovado <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Perguntas frequentes</h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details key={i} className="glass-card p-6 rounded-xl group">
                <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                  {f.q}
                  <ArrowRight className="w-5 h-5 text-primary group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-foreground/80">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <Droplets className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para economizar até 70% na sua conta de água?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Diagnóstico gratuito, sem investimento inicial. Você só paga sobre a economia
            comprovada.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contato" className="btn-aqua px-8 py-4">
              Solicitar diagnóstico gratuito
            </Link>
            <a
              href="https://wa.me/5512981408992?text=Olá! Quero economizar água na minha empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border border-primary/30 hover:bg-primary/10 transition"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EconomiaDeAgua;
