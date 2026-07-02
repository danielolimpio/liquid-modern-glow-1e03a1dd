import { Link } from "react-router-dom";
import { ArrowRight, AlertTriangle, CheckCircle2, Droplets } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const DesperdicioDeAgua = () => {
  const faqs = [
    {
      q: "Quais os principais tipos de desperdício de água nas empresas?",
      a: "Vazamentos invisíveis em ramais e subsolos, válvulas de descarga superdimensionadas, reservatórios com extravasores defeituosos, torneiras sem temporizador, processos industriais sem reuso e enquadramento tarifário incorreto na fatura.",
    },
    {
      q: "Como evitar o desperdício de água em empresas e indústrias?",
      a: "Combine auditoria técnica, sensores IoT (telemetria 24/7), correção hidráulica preventiva, individualização de hidrômetros, reuso de água em processos não potáveis e capacitação contínua das equipes operacionais.",
    },
    {
      q: "Qual o impacto financeiro do desperdício de água?",
      a: "Empresas sem gestão hídrica perdem entre 25% e 40% da fatura. Em uma conta mensal de R$ 50.000, isso representa de R$ 150.000 a R$ 240.000 por ano jogados literalmente no ralo.",
    },
    {
      q: "Como identificar vazamentos invisíveis?",
      a: "A telemetria com detecção remota de rompimentos (TDRR) compara vazão noturna e padrões de consumo. Qualquer fluxo fora do esperado dispara alerta em minutos — antes que o desperdício apareça na fatura.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Desperdício de Água nas Empresas: causas, impactos e como evitar",
        description:
          "Guia completo sobre desperdício de água empresarial: causas invisíveis, impacto na fatura, como identificar vazamentos e estratégias para evitar perdas hídricas.",
        author: { "@type": "Organization", name: "AcquaFlux" },
        publisher: {
          "@type": "Organization",
          name: "AcquaFlux",
          logo: { "@type": "ImageObject", url: "https://acquaflux.com/favicon.png" },
        },
        mainEntityOfPage: "https://acquaflux.com/desperdicio-de-agua-empresas/",
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
          { "@type": "ListItem", position: 3, name: "Desperdício de Água nas Empresas", item: "https://acquaflux.com/desperdicio-de-agua-empresas/" },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Desperdício de Água nas Empresas: causas e como evitar | AcquaFlux"
        description="Como evitar o desperdício de água em empresas? Veja onde estão os vazamentos invisíveis, o impacto na fatura e estratégias práticas para eliminar até 40% das perdas hídricas."
        canonical="/desperdicio-de-agua-empresas/"
        keywords="desperdício de água, desperdício de água nas empresas, como evitar o desperdício de água, vazamento de água empresa, perdas hídricas, vazamento invisível, redução de desperdício hídrico, conscientização sobre o uso da água, uso racional da água, gestão hídrica empresarial"
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
              <li><Link to="/economia-de-agua/" className="hover:text-primary">Economia de Água</Link></li>
              <li aria-hidden>/</li>
              <li className="text-foreground">Desperdício de Água</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <AlertTriangle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">Artigo do Cluster Economia de Água</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Desperdício de água nas empresas: causas, impactos e como evitar
          </h1>
          <p className="text-lg text-muted-foreground">
            Entre 25% e 40% da água que sua empresa paga vai embora sem ser usada. Conheça onde
            estão as perdas invisíveis, o impacto financeiro e como eliminar o desperdício com
            tecnologia, auditoria e gestão hídrica profissional.
          </p>
        </div>
      </section>

      <article className="py-16">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-4">O que é desperdício de água empresarial</h2>
            <p className="text-foreground/80 text-lg mb-4">
              Desperdício de água empresarial é todo volume captado, tarifado ou tratado que
              não gera valor para a operação. Inclui perdas físicas (vazamentos, fugas, falhas
              hidráulicas) e perdas aparentes (erros de medição, enquadramento tarifário
              incorreto, falta de individualização). Diferente do desperdício doméstico, o
              empresarial é majoritariamente <strong>invisível</strong> — não está numa
              torneira aberta, está no subsolo, na fatura e no processo.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Onde está o ralo invisível</h2>
            <ul className="space-y-4">
              {[
                "Vazamentos subterrâneos em ramais e cavaletes — até 18% do consumo",
                "Válvulas de descarga e mictórios sem regulagem — até 12%",
                "Reservatórios com extravasores defeituosos — até 6%",
                "Torres de resfriamento e processos industriais sem reuso — até 15%",
                "Enquadramento tarifário incorreto na fatura — cobrança 30%+ acima do devido",
                "Falta de individualização (hidrômetros únicos em condomínios e plantas)",
              ].map((item, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Como evitar o desperdício de água</h2>
            <p className="text-foreground/80 text-lg mb-4">
              Eliminar o desperdício é um trabalho de <strong>cinco frentes integradas</strong>:
              auditoria técnica das faturas (60 meses), telemetria IoT 24/7, correção hidráulica
              preventiva, individualização de hidrômetros (GCI) e cultura de uso racional. Cada
              frente sozinha entrega ganho marginal; juntas, reduzem a fatura entre 30% e 70%.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <Link to="/monitoramento-iot/" className="glass-card p-5 rounded-xl hover:scale-[1.02] transition">
                <h3 className="font-bold mb-2">Detectar vazamentos com IoT</h3>
                <p className="text-sm text-muted-foreground">TDRR identifica perdas em minutos.</p>
              </Link>
              <Link to="/gestao-financeira/" className="glass-card p-5 rounded-xl hover:scale-[1.02] transition">
                <h3 className="font-bold mb-2">Auditar a fatura</h3>
                <p className="text-sm text-muted-foreground">Recuperar créditos retroativos e reenquadrar tarifa.</p>
              </Link>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Impacto financeiro do desperdício</h2>
            <p className="text-foreground/80 text-lg">
              Uma empresa com fatura mensal de R$ 50.000 e perda de 30% desperdiça
              R$ 180.000 por ano. Em cinco anos, são R$ 900 mil literalmente no ralo —
              sem contar multas ambientais, riscos reputacionais ESG e ineficiência
              operacional. Reverter esse cenário tem payback típico de 6 a 18 meses.
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
          <h2 className="text-3xl font-bold mb-4">Pare o desperdício antes que ele apareça na fatura</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Diagnóstico gratuito. Sem investimento inicial. Pagamento sobre a economia comprovada.
          </p>
          <Link to="/contato/" className="btn-aqua px-8 py-4">Solicitar diagnóstico gratuito</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DesperdicioDeAgua;
