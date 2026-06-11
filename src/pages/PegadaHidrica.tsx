import { Link } from "react-router-dom";
import { ArrowRight, Droplets, Leaf, CheckCircle2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const PegadaHidrica = () => {
  const faqs = [
    {
      q: "O que é pegada hídrica (water footprint)?",
      a: "A pegada hídrica é o volume total de água doce usada — direta e indiretamente — para produzir um bem ou serviço. Inclui água azul (captação), verde (chuva incorporada) e cinza (necessária para diluir poluentes). Foi padronizada pela ISO 14046 e pela Water Footprint Network.",
    },
    {
      q: "Como calcular a pegada hídrica de uma empresa?",
      a: "O cálculo segue 4 fases: definição de objetivo e escopo, inventário hídrico (entradas e saídas por processo), avaliação de impacto (escassez, qualidade) e interpretação. A AcquaFlux entrega cálculo ISO 14046, com classificação por azul, verde e cinza.",
    },
    {
      q: "Pegada hídrica é o mesmo que consumo de água?",
      a: "Não. Consumo é o volume medido no hidrômetro. Pegada hídrica inclui também a água embutida em insumos, energia, transporte e o volume necessário para diluir efluentes. É uma métrica de impacto, não de fatura.",
    },
    {
      q: "Como reportar pegada hídrica em relatórios ESG?",
      a: "Os principais frameworks são GRI 303 (Água e Efluentes), CDP Water Security, SASB, TNFD e ODS 6. A AcquaFlux entrega relatórios já compatíveis com esses padrões, prontos para auditoria de terceira parte.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: "Pegada Hídrica Empresarial: o que é, como calcular e reportar (ESG)",
        description:
          "Pegada hídrica (water footprint) explicada: conceito, cálculo ISO 14046, relatórios GRI 303, CDP Water e ODS 6. Aplicação prática em empresas brasileiras.",
        author: { "@type": "Organization", name: "AcquaFlux" },
        publisher: {
          "@type": "Organization",
          name: "AcquaFlux",
          logo: { "@type": "ImageObject", url: "https://acquaflux.com/favicon.png" },
        },
        mainEntityOfPage: "https://acquaflux.com/pegada-hidrica-empresarial/",
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
          { "@type": "ListItem", position: 3, name: "Pegada Hídrica Empresarial", item: "https://acquaflux.com/pegada-hidrica-empresarial/" },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Pegada Hídrica Empresarial: cálculo, ESG e relatórios | AcquaFlux"
        description="O que é pegada hídrica? Como calcular o water footprint da sua empresa (ISO 14046) e reportar em ESG, GRI 303, CDP Water e ODS 6. Guia completo AcquaFlux."
        canonical="/pegada-hidrica-empresarial/"
        keywords="pegada hídrica, water footprint, pegada hídrica empresarial, pegada hídrica empresa, ISO 14046, GRI 303, CDP Water, ODS 6, sustentabilidade hídrica, ESG água, segurança hídrica, escassez hídrica, água virtual"
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
              <li className="text-foreground">Pegada Hídrica Empresarial</li>
            </ol>
          </nav>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Leaf className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">ESG & Compliance Hídrico</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Pegada hídrica empresarial: o que é, como calcular e reportar
          </h1>
          <p className="text-lg text-muted-foreground">
            Da definição (ISO 14046) ao relatório ESG (GRI 303, CDP Water, ODS 6): o guia
            completo para medir, gerenciar e comunicar a pegada hídrica (water footprint) da
            sua empresa.
          </p>
        </div>
      </section>

      <article className="py-16">
        <div className="container mx-auto px-6 max-w-4xl space-y-12">
          <section>
            <h2 className="text-3xl font-bold mb-4">O que é pegada hídrica</h2>
            <p className="text-foreground/80 text-lg mb-4">
              Pegada hídrica (<em>water footprint</em>) é o volume total de água doce usada
              direta e indiretamente para produzir um bem ou serviço. Diferente do consumo
              medido pelo hidrômetro, ela considera também a <strong>água virtual</strong>{" "}
              embutida em insumos, energia e logística. Foi padronizada pela{" "}
              <strong>ISO 14046</strong> e pela <em>Water Footprint Network</em>.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" /><span><strong>Água azul</strong> — captação superficial e subterrânea.</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" /><span><strong>Água verde</strong> — chuva incorporada à produção (relevante em agro).</span></li>
              <li className="flex gap-3"><CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" /><span><strong>Água cinza</strong> — volume necessário para diluir efluentes a níveis seguros.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Como calcular a pegada hídrica de uma empresa</h2>
            <ol className="space-y-3 list-decimal list-inside text-foreground/80 text-lg">
              <li>Definir objetivo, escopo e fronteiras (produto, unidade, organização).</li>
              <li>Inventário hídrico: entradas, saídas e perdas por processo.</li>
              <li>Avaliação de impacto: escassez local, qualidade e estresse hídrico.</li>
              <li>Interpretação, comunicação e plano de redução.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Pegada hídrica e ESG: frameworks e relatórios</h2>
            <p className="text-foreground/80 text-lg mb-4">
              A pegada hídrica é métrica obrigatória nos principais frameworks ESG:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { t: "GRI 303 — Água e Efluentes", d: "Padrão global para reporte de captação, descarte e consumo." },
                { t: "CDP Water Security", d: "Disclosure voluntário usado por investidores institucionais." },
                { t: "ISO 14046", d: "Norma técnica para avaliação de impacto hídrico via ciclo de vida." },
                { t: "ODS 6 — ONU", d: "Água potável e saneamento; metas mensuráveis até 2030." },
              ].map((x, i) => (
                <div key={i} className="glass-card p-5 rounded-xl">
                  <h3 className="font-bold mb-1">{x.t}</h3>
                  <p className="text-sm text-muted-foreground">{x.d}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4">Segurança hídrica e escassez</h2>
            <p className="text-foreground/80 text-lg">
              No Brasil, eventos de escassez hídrica afetam diretamente produção, custos de
              insumos e licença social para operar. Reportar pegada hídrica não é só
              compliance — é gestão de risco operacional, acesso a crédito verde e diferencial
              competitivo em licitações corporativas.
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
          <h2 className="text-3xl font-bold mb-4">Calcule e reporte a pegada hídrica da sua empresa</h2>
          <p className="text-lg text-muted-foreground mb-8">
            A AcquaFlux entrega relatórios prontos para auditoria — GRI 303, CDP Water, ISO 14046.
          </p>
          <Link to="/consultoria-esg" className="btn-aqua px-8 py-4">Falar com a Consultoria ESG</Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PegadaHidrica;
