import { Link } from "react-router-dom";
import { ArrowRight, Droplets, CheckCircle2, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const ComoEconomizarAgua = () => {
  const dicas = [
    { t: "Audite a fatura dos últimos 60 meses", d: "Cobranças indevidas e enquadramento tarifário errado representam até 30% a mais na conta." },
    { t: "Instale sensores IoT (telemetria 24/7)", d: "Detecta vazamentos invisíveis em minutos — não em meses." },
    { t: "Individualize hidrômetros (GCI)", d: "Em condomínios e plantas, reduz o consumo médio em até 40%." },
    { t: "Regule válvulas de descarga e mictórios", d: "Equipamentos mal dimensionados respondem por até 12% do consumo." },
    { t: "Implemente reuso em processos não potáveis", d: "Resfriamento, lavagem de pisos, irrigação e descargas podem usar água reutilizada." },
    { t: "Monitore com BI e metas por área", d: "L/colaborador/dia, m³/m² construído e desvio vs. meta tornam a economia gerenciável." },
    { t: "Treine equipes operacionais", d: "Conscientização sobre o uso da água amplifica resultados técnicos em 15% a 20%." },
    { t: "Reporte ESG (GRI 303 / CDP Water)", d: "Métricas auditáveis abrem acesso a crédito verde e contratos corporativos." },
  ];

  const faqs = [
    {
      q: "Como economizar água na empresa de forma sustentável?",
      a: "Combine auditoria de fatura, telemetria IoT, correção hidráulica, individualização de hidrômetros, reuso em processos não potáveis e cultura de uso racional. Empresas com gestão integrada reduzem entre 30% e 70% da conta.",
    },
    {
      q: "Quais as melhores dicas para economizar água em indústrias?",
      a: "Mapear o balanço hídrico por processo, instalar medidores setoriais, reusar água de torres de resfriamento, recircular água de lavagem, ajustar set-points de pressão e implementar manutenção preditiva nas tubulações.",
    },
    {
      q: "Como diminuir a conta de água sem investimento inicial?",
      a: "A AcquaFlux opera no modelo performance-based: a auditoria de fatura, o reenquadramento tarifário e a recuperação de créditos não exigem CAPEX. O cliente paga apenas sobre a economia comprovada.",
    },
    {
      q: "Como conscientizar os colaboradores sobre o uso da água?",
      a: "Programas de educação ambiental com dashboards visíveis (consumo por área), metas trimestrais, gamificação e relatórios mensais geram engajamento e amplificam a economia técnica em 15% a 20%.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Como Economizar Água na Empresa: 8 Estratégias Comprovadas",
        description:
          "Guia prático com 8 estratégias para economizar água em empresas, indústrias e condomínios. Reduza a conta entre 30% e 70% com auditoria, IoT, BI e ESG.",
        author: { "@type": "Organization", name: "AcquaFlux" },
        publisher: {
          "@type": "Organization",
          name: "AcquaFlux",
          logo: { "@type": "ImageObject", url: "https://acquaflux.com/favicon.png" },
        },
        mainEntityOfPage: "https://acquaflux.com/como-economizar-agua-empresa/",
        inLanguage: "pt-BR",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: "https://acquaflux.com/" },
          { "@type": "ListItem", position: 2, name: "Economia de Água", item: "https://acquaflux.com/economia-de-agua/" },
          { "@type": "ListItem", position: 3, name: "Como Economizar Água na Empresa", item: "https://acquaflux.com/como-economizar-agua-empresa/" },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Como Economizar Água na Empresa: 8 Estratégias | AcquaFlux"
        description="Como economizar água na empresa? 8 estratégias comprovadas para reduzir a conta entre 30% e 70%: auditoria, IoT, individualização, reuso e ESG. Diagnóstico gratuito."
        canonical="/como-economizar-agua-empresa/"
        keywords="como economizar água, como economizar água na empresa, dicas para economizar água, economizar água, como diminuir a conta de água, conta de água alta, economia de água, uso racional da água, reuso de água, conscientização sobre o uso da água, dicas para economizar água em empresas"
        structuredData={structuredData}
      />
      <Header />

      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container relative mx-auto px-6 max-w-4xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-primary">Início</Link></li>
              <li aria-hidden>/</li>
              <li><Link to="/economia-de-agua" className="hover:text-primary">Economia de Água</Link></li>
              <li aria-hidden>/</li>
              <li className="text-foreground">Como Economizar Água na Empresa</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Lightbulb className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">Guia Prático</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Como economizar água na empresa: 8 estratégias para diminuir a conta de água
          </h1>
          <p className="text-lg text-muted-foreground">
            Dicas práticas, técnicas e financeiras para reduzir a fatura entre 30% e 70%,
            eliminar desperdício e transformar a gestão hídrica em vantagem competitiva e ESG.
          </p>
        </div>
      </section>

      <article className="py-16">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-6">8 dicas para economizar água em empresas</h2>
            <ol className="space-y-6">
              {dicas.map((d, i) => (
                <li key={i} className="glass-card p-6 rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{d.t}</h3>
                      <p className="text-foreground/80">{d.d}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Como diminuir a conta de água sem CAPEX</h2>
            <p className="text-foreground/80 text-lg mb-4">
              A AcquaFlux opera no modelo <strong>performance-based</strong>: você não paga
              nada para começar. A auditoria de fatura, o reenquadramento tarifário e a
              recuperação de créditos retroativos não exigem investimento inicial. O cliente
              só paga sobre a economia comprovada.
            </p>
            <ul className="space-y-3">
              {[
                "Auditoria das últimas 60 faturas — sem custo",
                "Reenquadramento de categoria tarifária",
                "Recuperação de créditos retroativos previstos pela ANA",
                "Modelo de remuneração baseado em resultado",
              ].map((i, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{i}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Conscientização e uso racional da água</h2>
            <p className="text-foreground/80 text-lg">
              Tecnologia sozinha não basta. A conscientização sobre o uso da água nas equipes
              operacionais amplifica os ganhos técnicos. Dashboards visíveis por área,
              metas trimestrais e relatórios mensais transformam a economia hídrica em
              cultura organizacional — e melhoram diretamente o desempenho ESG.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-8">Perguntas frequentes</h2>
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
          </section>
        </div>
      </article>

      <section className="py-16 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <Droplets className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Quanto sua empresa pode economizar?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Diagnóstico gratuito com auditoria preliminar das suas faturas em até 7 dias.
          </p>
          <Link to="/contato" className="btn-aqua px-8 py-4">Solicitar diagnóstico gratuito</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComoEconomizarAgua;
