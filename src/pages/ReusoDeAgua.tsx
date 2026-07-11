import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  Droplets,
  CheckCircle2,
  Info,
  MessageCircle,
  Tag,
  BookOpen,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Picture from "@/components/Picture";
import capa from "@/assets/reuso-agua-empresas-capa.jpg?picture";
import sistemaFiltracao from "@/assets/reuso-agua-sistema-filtracao.jpg?picture";

const WHATS_URL =
  "https://wa.me/5512981408992?text=Ol%C3%A1!%20Quero%20economizar%20%C3%A1gua%20agora%20com%20a%20AcquaFlux.";

const ReusoDeAgua = () => {
  const faqs = [
    {
      q: "O que é reuso de água nas empresas?",
      a: "Reuso de água nas empresas é o processo de captar, tratar e reutilizar efluentes ou águas cinzas para finalidades não potáveis, como refrigeração, descarga sanitária, irrigação de jardins, lavagem de pisos e processos industriais. A prática está regulamentada pela Resolução CONAMA nº 54/2005, pela ABNT NBR 13.969/1997 e pela ABNT NBR 16.783/2019, e permite reduzir a captação de água potável entre 30% e 70%.",
    },
    {
      q: "Quais os tipos de reuso de água mais utilizados no Brasil?",
      a: "Os principais tipos são: reuso urbano não potável (irrigação e limpeza pública), reuso industrial (torres de resfriamento, caldeiras, processos), reuso agrícola (irrigação de culturas não alimentícias), reuso em aquicultura e reuso predial (águas cinzas de chuveiros e pias reutilizadas em descargas). Em empresas, o reuso predial e industrial são os mais comuns por apresentarem ROI mais rápido.",
    },
    {
      q: "Qual o custo médio para implantar um sistema de reuso de água?",
      a: "O CAPEX varia conforme o volume tratado. Sistemas prediais para edifícios comerciais custam entre R$ 40 mil e R$ 250 mil. Estações industriais compactas partem de R$ 150 mil e podem ultrapassar R$ 2 milhões em plantas de grande porte. O payback típico fica entre 18 e 48 meses, considerando a tarifa média de água/esgoto de R$ 25/m³ nas capitais brasileiras.",
    },
    {
      q: "É seguro usar água de reuso em uma empresa?",
      a: "Sim, desde que o sistema respeite as classes de reuso definidas pela ABNT NBR 16.783/2019 e pelas resoluções locais. Cada classe tem parâmetros específicos de turbidez, coliformes, cloro residual e DBO. Sistemas bem projetados, com desinfecção por cloração ou UV, entregam água totalmente segura para o uso previsto, sem risco à saúde ou à operação.",
    },
    {
      q: "Reuso de água é obrigatório para empresas no Brasil?",
      a: "Não existe uma lei federal única que obrigue o reuso em todas as empresas, mas diversas cidades e estados (São Paulo, Curitiba, Salvador, entre outras) exigem reuso ou captação de chuva para edificações a partir de determinada área construída. Além disso, empreendimentos que buscam certificações LEED, AQUA-HQE ou EDGE têm no reuso um critério essencial.",
    },
    {
      q: "Qual a diferença entre reuso de água e reaproveitamento de água de chuva?",
      a: "O reaproveitamento de água pluvial capta a chuva antes de ela tocar o solo. O reuso trata efluentes gerados pela própria operação (águas cinzas, negras ou industriais) e devolve à cadeia produtiva. Ambos são complementares: juntos, podem reduzir em até 80% a demanda por água da concessionária.",
    },
    {
      q: "Como calcular o potencial de reuso da minha empresa?",
      a: "É preciso levantar o consumo mensal (m³) por ponto, mapear os usos finais (potáveis x não potáveis), avaliar a geração de efluentes internos e simular o volume que pode ser desviado para reuso. A AcquaFlux realiza esse diagnóstico gratuitamente por meio de auditoria hídrica com telemetria IoT e análise das faturas dos últimos 60 meses.",
    },
    {
      q: "Reuso de água conta para o ESG e para o CDP Water?",
      a: "Sim. Indicadores de reuso (GRI 303-3 e GRI 303-4) estão entre os mais valorizados por investidores. O CDP Water Security dá pontuação adicional para empresas que reportam volume reutilizado e metas de redução. Reuso também contribui diretamente para o ODS 6 (Água Potável e Saneamento) e o ODS 12 (Consumo e Produção Responsáveis) da Agenda 2030 da ONU.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Reuso de Água nas Empresas: Guia Completo com Sistemas, Custos e ROI",
        description:
          "Guia definitivo sobre reuso de água nas empresas: tipos, normas ABNT, custos de implantação, ROI, integração com ESG e cases reais brasileiros.",
        image: [
          "https://acquaflux.com/assets/reuso-agua-empresas-capa.jpg",
        ],
        author: {
          "@type": "Person",
          name: "Equipe Técnica AcquaFlux",
          url: "https://acquaflux.com/sobre/",
        },
        publisher: {
          "@type": "Organization",
          name: "AcquaFlux",
          logo: {
            "@type": "ImageObject",
            url: "https://acquaflux.com/favicon.png",
          },
        },
        datePublished: "2026-06-15",
        dateModified: "2026-06-15",
        mainEntityOfPage: "https://acquaflux.com/reuso-de-agua-nas-empresas/",
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
          {
            "@type": "ListItem",
            position: 1,
            name: "Início",
            item: "https://acquaflux.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://acquaflux.com/blog/",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: "Reuso de Água nas Empresas",
            item: "https://acquaflux.com/reuso-de-agua-nas-empresas/",
          },
        ],
      },
    ],
  };

  const relatedPosts = [
    {
      href: "/economia-de-agua",
      title: "Economia de Água para Empresas: guia completo",
      tag: "Pilar",
    },
    {
      href: "/pegada-hidrica-empresarial",
      title: "Pegada hídrica empresarial: como calcular e reportar",
      tag: "ESG",
    },
    {
      href: "/desperdicio-de-agua-empresas",
      title: "Desperdício de água nas empresas: causas e como evitar",
      tag: "Gestão",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Reuso de Água nas Empresas: Guia Completo 2026 | AcquaFlux"
        description="Reuso de água nas empresas: normas ABNT, tipos, custos, ROI, cases brasileiros e integração com ESG. Reduza até 70% da captação com o guia técnico da AcquaFlux."
        canonical="/reuso-de-agua-nas-empresas/"
        keywords="reuso de água, reuso de água nas empresas, sistema de reuso de água, reuso de água industrial, reuso de água predial, ABNT NBR 16783, CONAMA 54, água de reuso, tratamento de águas cinzas, reaproveitamento de água, economia de água industrial, ROI reuso de água, ESG reuso, GRI 303, CDP Water, sustentabilidade hídrica, gestão hídrica empresarial"
        image="/assets/reuso-agua-empresas-capa.jpg"
        structuredData={structuredData}
      />
      <Header />

      {/* HERO */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container relative mx-auto px-6 max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-primary">Início</Link></li>
              <li aria-hidden>/</li>
              <li><Link to="/blog/" className="hover:text-primary">Blog</Link></li>
              <li aria-hidden>/</li>
              <li className="text-foreground">Reuso de Água nas Empresas</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Tag className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">Sustentabilidade · Gestão Hídrica</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Reuso de água nas empresas: guia completo com sistemas, custos e ROI
          </h1>

          <p className="text-lg text-muted-foreground mb-6">
            Descubra como o reuso de água pode reduzir em até 70% a captação da sua
            empresa, fortalecer a estratégia ESG e transformar efluentes em ativo
            operacional — com normas, tecnologias, custos reais e passo a passo de
            implantação.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><User className="w-4 h-4" /> Equipe Técnica AcquaFlux</div>
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 15 de junho de 2026</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 14 min de leitura</div>
          </div>
        </div>
      </section>

      {/* COVER IMAGE */}
      <figure className="container mx-auto px-6 max-w-5xl mb-12">
        <Picture
          src={capa}
          alt="Sistema de reuso de água em planta industrial brasileira com tanques transparentes, tubulações de aço inox e engenheiro operando painel de controle"
          width={1536}
          height={864}
          className="w-full rounded-2xl shadow-2xl"
          fetchPriority="high"
        />
        <figcaption className="text-sm text-muted-foreground mt-3 text-center">
          Estação de reuso de água industrial: tratamento de efluentes para uso em
          torres de resfriamento e processos produtivos.
        </figcaption>
      </figure>

      {/* CONTENT + SIDEBAR */}
      <article className="pb-16">
        <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-[1fr_320px] gap-12">
          {/* MAIN CONTENT */}
          <div className="space-y-10 text-foreground/85 text-[1.05rem] leading-relaxed">
            {/* Sumário */}
            <div className="glass-card p-6 rounded-xl not-prose">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" /> Neste artigo você vai ler
              </h2>
              <ol className="grid sm:grid-cols-2 gap-2 text-sm">
                <li><a href="#o-que-e" className="hover:text-primary">1. O que é reuso de água</a></li>
                <li><a href="#panorama" className="hover:text-primary">2. Panorama do reuso no Brasil</a></li>
                <li><a href="#tipos" className="hover:text-primary">3. Tipos e classes de reuso</a></li>
                <li><a href="#normas" className="hover:text-primary">4. Normas e regulamentações</a></li>
                <li><a href="#etapas" className="hover:text-primary">5. Etapas de implantação</a></li>
                <li><a href="#tecnologias" className="hover:text-primary">6. Tecnologias de tratamento</a></li>
                <li><a href="#custos" className="hover:text-primary">7. Custos, ROI e payback</a></li>
                <li><a href="#esg" className="hover:text-primary">8. Reuso, ESG e reporte</a></li>
                <li><a href="#erros" className="hover:text-primary">9. Erros comuns a evitar</a></li>
                <li><a href="#faq" className="hover:text-primary">10. Perguntas frequentes</a></li>
              </ol>
            </div>

            {/* Introdução */}
            <section id="introducao">
              <p>
                Se a sua empresa vem pagando faturas de água cada vez mais altas,
                convivendo com racionamentos regionais e sofrendo pressão de
                investidores por metas ESG mais ambiciosas, existe uma resposta que
                combina os três problemas em uma única solução: <strong>reuso de água</strong>.
                Mais do que uma tendência, o reuso deixou de ser opcional para se tornar
                um pilar estratégico de eficiência hídrica e competitividade no Brasil.
              </p>
              <p>
                Só a Sabesp reajustou tarifas em 9,45% em 2024, e projeções da ANA
                (Agência Nacional de Águas e Saneamento Básico) indicam que 55% dos
                municípios brasileiros terão risco alto ou muito alto de escassez
                hídrica até 2035. Nesse cenário, empresas que dependem de água da
                concessionária para operar estão expostas a três riscos simultâneos:
                custo, disponibilidade e reputação.
              </p>
              <p>
                Neste guia, escrito com base em mais de uma década de projetos de
                gestão hídrica realizados pela equipe da AcquaFlux, você vai entender
                exatamente o que é o reuso de água nas empresas, quais tecnologias
                existem, quanto custa, quando o investimento se paga, o que as normas
                exigem e como transformar essa iniciativa em vantagem competitiva
                mensurável — inclusive dentro do relato ESG e do CDP Water Security.
              </p>
            </section>

            <section id="o-que-e">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">1. O que é reuso de água nas empresas</h2>
              <p>
                <strong>Reuso de água</strong> é a prática de captar, tratar e utilizar
                novamente uma água que já cumpriu uma função dentro da empresa —
                seja um efluente sanitário, uma água cinza de chuveiros e pias, ou um
                efluente industrial de processo. Depois de tratada dentro dos padrões
                exigidos, essa água retorna à operação para usos que não demandam
                potabilidade: descargas sanitárias, torres de resfriamento, irrigação
                de jardins, lavagem de veículos e pisos, processos industriais
                intermediários, entre outros.
              </p>
              <p>
                Diferente do <em>reaproveitamento de água pluvial</em>, que capta a
                chuva antes de tocar o solo, o reuso opera dentro do ciclo interno da
                empresa. Ambos são complementares e, combinados, chegam a substituir
                até 80% da demanda por água potável fornecida pela concessionária.
              </p>

              <div className="glass-card p-6 rounded-xl border-l-4 border-primary my-6">
                <div className="flex gap-3">
                  <Info className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Definição oficial</p>
                    <p className="text-sm text-muted-foreground">
                      A Resolução CONAMA nº 54/2005 define reuso como “o uso planejado
                      de água tratada, oriunda de esgoto sanitário, efluentes
                      industriais, agrícolas ou de drenagem urbana”. É, portanto, uma
                      atividade formalmente reconhecida no arcabouço ambiental
                      brasileiro.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="panorama">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">2. Panorama do reuso de água no Brasil</h2>
              <p>
                O Brasil ainda reutiliza pouco: menos de 3% do total de efluentes
                tratados, segundo dados do <a href="https://www.gov.br/ana/pt-br" target="_blank" rel="noopener noreferrer" className="text-primary underline">Sistema Nacional de Informações sobre Recursos Hídricos (SNIRH)</a> mantido pela ANA.
                Para comparação, Israel reutiliza mais de 85% dos seus efluentes,
                Cingapura opera acima de 40% e a Califórnia caminha para superar 50%
                até 2030.
              </p>
              <p>
                Esse gap representa, ao mesmo tempo, um alerta e uma oportunidade. Empresas que
                se anteciparem à regulamentação — que já é realidade em estados como
                São Paulo, Paraná, Rio de Janeiro e Bahia — vão ter tarifas menores,
                menor exposição a crises hídricas e melhores notas em ratings de
                sustentabilidade.
              </p>
              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Setores que mais se beneficiam</h3>
              <ul className="space-y-3">
                {[
                  "Indústria têxtil, química, farmacêutica e alimentícia — consumo intensivo em processos",
                  "Data centers e telecom — refrigeração 24/7 com alto volume de água",
                  "Shoppings, hospitais, hotéis e edifícios corporativos — descargas, ar-condicionado e limpeza",
                  "Agroindústria — irrigação de culturas não alimentícias e criação animal",
                  "Mineração, siderurgia e papel & celulose — circuitos fechados de reuso industrial",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="tipos">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">3. Tipos e classes de reuso de água</h2>
              <p>
                A norma <strong>ABNT NBR 16.783/2019</strong> — “Uso de fontes
                alternativas de água não potável em edificações” — classifica o
                reuso em quatro classes, cada uma com parâmetros mínimos de qualidade
                e aplicações permitidas:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="p-3 text-left">Classe</th>
                      <th className="p-3 text-left">Aplicação típica</th>
                      <th className="p-3 text-left">Parâmetros principais</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/80">
                    <tr className="border-t border-border">
                      <td className="p-3 font-semibold">Classe 1</td>
                      <td className="p-3">Descargas sanitárias, lavagem de pisos e veículos, ornamentação, uso restrito</td>
                      <td className="p-3">Turbidez &lt; 5 NTU; coliformes &lt; 200 NMP/100 mL</td>
                    </tr>
                    <tr className="border-t border-border bg-muted/30">
                      <td className="p-3 font-semibold">Classe 2</td>
                      <td className="p-3">Irrigação de gramados e jardins</td>
                      <td className="p-3">Turbidez &lt; 10 NTU; coliformes &lt; 1.000 NMP/100 mL</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3 font-semibold">Classe 3</td>
                      <td className="p-3">Torres de resfriamento, ar-condicionado, processos industriais</td>
                      <td className="p-3">Conforme requisito do equipamento; controle de dureza e sólidos</td>
                    </tr>
                    <tr className="border-t border-border bg-muted/30">
                      <td className="p-3 font-semibold">Classe 4</td>
                      <td className="p-3">Usos ornamentais (fontes, espelhos d’água)</td>
                      <td className="p-3">Sem coliformes fecais; padrão estético</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Além da NBR 16.783, o reuso predial deve dialogar com a
                <strong> ABNT NBR 13.969/1997</strong> (tratamento e disposição de
                efluentes) e com resoluções específicas do órgão ambiental estadual
                — como a Deliberação CONSEMA/SP nº 156/2010 ou a Resolução
                INEA/RJ nº 168/2018, entre outras.
              </p>
            </section>

            <section id="normas">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">4. Normas e regulamentações que você precisa conhecer</h2>
              <p>
                A base legal para reuso no Brasil é robusta, embora fragmentada.
                Antes de investir em qualquer sistema, o gestor precisa conhecer, no
                mínimo, esta tríade:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Resolução CONAMA 54/2005</strong> — estabelece critérios gerais para reuso direto não potável.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>ABNT NBR 16.783/2019</strong> — normatiza fontes alternativas em edificações.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Lei nº 9.433/1997</strong> — Política Nacional de Recursos Hídricos (Lei das Águas).</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Resolução ANA 77/2021</strong> — orienta cobrança pelo uso de recursos hídricos e créditos para quem reutiliza.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Legislações municipais</strong> (SP, RJ, Curitiba, Salvador, Fortaleza etc.) — muitas cidades tornaram obrigatório o reuso em novas edificações comerciais acima de 500 m².</span></li>
              </ul>
              <p className="mt-4">
                Para acompanhar atualizações regulatórias, vale monitorar o portal
                da <a href="https://www.gov.br/mma/pt-br" target="_blank" rel="noopener noreferrer" className="text-primary underline">MMA (Ministério do Meio Ambiente)</a> e o
                da <a href="https://www.abnt.org.br/" target="_blank" rel="noopener noreferrer" className="text-primary underline">ABNT</a>.
              </p>
            </section>

            {/* WhatsApp CTA - Economize Água Agora */}
            <div className="relative rounded-2xl overflow-hidden my-10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/15 to-primary/20" />
              <div className="relative p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border border-primary/30 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-1">Economize Água Agora</h3>
                    <p className="text-muted-foreground text-sm md:text-base">
                      Fale com um especialista da AcquaFlux pelo WhatsApp e receba
                      um diagnóstico gratuito de reuso para sua empresa.
                    </p>
                  </div>
                </div>
                <a
                  href={WHATS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-aqua flex items-center gap-2 whitespace-nowrap"
                >
                  <MessageCircle className="w-5 h-5" />
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            {/* Imagem complementar */}
            <figure className="my-10">
              <Picture
                src={sistemaFiltracao}
                alt="Módulos de filtração por osmose reversa e ultrafiltração em sistema de reuso de água industrial da AcquaFlux"
                width={1400}
                height={800}
                loading="lazy"
                className="w-full rounded-2xl shadow-xl"
              />
              <figcaption className="text-sm text-muted-foreground mt-3 text-center">
                Módulos de filtração por membrana em uma estação compacta de reuso —
                coração do sistema que garante qualidade constante da água tratada.
              </figcaption>
            </figure>

            <section id="etapas">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">5. Etapas para implantar um sistema de reuso</h2>
              <p>
                Um projeto sério de reuso não começa com a compra de equipamentos —
                começa com <strong>dados</strong>. Este é o passo a passo que a
                AcquaFlux aplica em todos os cases de eficiência hídrica:
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">5.1. Diagnóstico hídrico e balanço de massas</h3>
              <p>
                Auditoria das faturas dos últimos 60 meses, instalação de sensores
                IoT em pontos estratégicos e mapeamento dos usos finais (potáveis
                versus não potáveis). Sem esse balanço, o dimensionamento vira chute
                e o payback derrete.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">5.2. Definição das classes de reuso desejadas</h3>
              <p>
                Cada aplicação exige uma qualidade específica. Reuso para descarga
                sanitária é mais simples do que para uma torre de resfriamento. A
                definição correta evita superdimensionamento e reduz CAPEX.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">5.3. Projeto executivo e licenciamento</h3>
              <p>
                Envolve memorial de cálculo, layout hidráulico, especificação de
                bombas, tanques, sistemas de desinfecção e submissão às autoridades
                competentes (Vigilância Sanitária, órgão ambiental estadual e
                concessionária local, quando aplicável).
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">5.4. Obras, comissionamento e capacitação</h3>
              <p>
                Instalação civil e hidromecânica, testes de estanqueidade,
                calibração dos sensores, treinamento da equipe de manutenção e
                elaboração dos POPs (Procedimentos Operacionais Padrão).
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">5.5. Operação, monitoramento e melhoria contínua</h3>
              <p>
                Aqui entra a plataforma <Link to="/monitoramento-iot/" className="text-primary underline">Monitoramento IoT da AcquaFlux</Link>,
                com dashboards em tempo real, alertas de qualidade da água tratada e
                geração automática dos indicadores para o relato ESG.
              </p>
            </section>

            <section id="tecnologias">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">6. Tecnologias de tratamento mais utilizadas</h2>
              <p>
                Não existe tecnologia universal. A escolha depende do tipo de
                efluente, da qualidade desejada e do volume tratado. As mais comuns
                em projetos brasileiros são:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>MBR (Membrane Bioreactor):</strong> biorreator combinado com ultrafiltração. Compacto, alta qualidade, ideal para condomínios e indústrias médias.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>MBBR (Moving Bed Biofilm Reactor):</strong> biofilme aderido em meio suporte móvel. Ótimo custo-benefício para efluentes sanitários e agroindustriais.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Osmose reversa:</strong> membrana que remove sais e microcontaminantes. Indispensável para reuso em caldeiras e circuitos fechados.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Desinfecção UV + cloração:</strong> barreira final de segurança microbiológica.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Zeólitas e carvão ativado:</strong> polimento para remoção de cor, odor e compostos orgânicos residuais.</span></li>
              </ul>
            </section>

            <section id="custos">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">7. Custos, ROI e payback do reuso de água</h2>
              <p>
                A pergunta mais frequente dos CFOs é: <em>“quanto tempo demora para
                pagar?”</em>. A resposta depende de três variáveis principais:
                volume tratado, tarifa local de água/esgoto e complexidade do
                efluente.
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border border-border rounded-xl overflow-hidden">
                  <thead className="bg-primary/10">
                    <tr>
                      <th className="p-3 text-left">Porte</th>
                      <th className="p-3 text-left">Volume tratado</th>
                      <th className="p-3 text-left">CAPEX estimado</th>
                      <th className="p-3 text-left">Payback típico</th>
                    </tr>
                  </thead>
                  <tbody className="text-foreground/80">
                    <tr className="border-t border-border">
                      <td className="p-3">Predial pequeno</td>
                      <td className="p-3">até 10 m³/dia</td>
                      <td className="p-3">R$ 40k – R$ 120k</td>
                      <td className="p-3">24 – 36 meses</td>
                    </tr>
                    <tr className="border-t border-border bg-muted/30">
                      <td className="p-3">Predial médio</td>
                      <td className="p-3">10 – 50 m³/dia</td>
                      <td className="p-3">R$ 120k – R$ 400k</td>
                      <td className="p-3">18 – 30 meses</td>
                    </tr>
                    <tr className="border-t border-border">
                      <td className="p-3">Industrial</td>
                      <td className="p-3">50 – 500 m³/dia</td>
                      <td className="p-3">R$ 400k – R$ 2 mi</td>
                      <td className="p-3">18 – 48 meses</td>
                    </tr>
                    <tr className="border-t border-border bg-muted/30">
                      <td className="p-3">Grande porte</td>
                      <td className="p-3">acima de 500 m³/dia</td>
                      <td className="p-3">R$ 2 mi+</td>
                      <td className="p-3">30 – 60 meses</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Nas simulações reais que a AcquaFlux faz com o serviço de
                <Link to="/analytics-bi/" className="text-primary underline"> Analytics e BI hídrico</Link>,
                os cenários otimistas de reuso em indústrias com alta tarifa (acima
                de R$ 30/m³) apresentam TIR superior a 25% ao ano — patamar
                dificilmente encontrado em outros investimentos operacionais.
              </p>
            </section>

            <section id="esg">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">8. Reuso, ESG e reporte de sustentabilidade</h2>
              <p>
                Reuso é uma das raras iniciativas que entrega, simultaneamente,
                ganho financeiro e ganho reputacional. Os três frameworks
                internacionais que mais valorizam esse indicador são:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>GRI 303-3 e 303-4:</strong> divulgação de captação e descarte por fonte, e volume reutilizado.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>CDP Water Security:</strong> reuso pesa fortemente nas categorias A e A-.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>SASB, TCFD, IFRS S2:</strong> exigem métricas hídricas em relatórios obrigatórios a partir de 2026.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>ODS 6 e ODS 12:</strong> reuso é indicador direto dos Objetivos de Desenvolvimento Sustentável da ONU.</span></li>
              </ul>
              <p className="mt-4">
                Para explorar a integração completa entre reuso, ESG e pegada hídrica,
                leia o guia <Link to="/pegada-hidrica-empresarial/" className="text-primary underline">Pegada Hídrica Empresarial</Link>.
              </p>
            </section>

            <section id="erros">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">9. Erros comuns que destroem o ROI do reuso</h2>
              <p>
                A experiência de campo mostra que 70% dos sistemas de reuso que
                falham comercialmente falham pelas mesmas causas. Fique atento:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Superdimensionar o sistema por medo de escassez — infla CAPEX e OPEX.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Ignorar o balanço de massas real (kg de DBO, DQO, sólidos suspensos).</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Não capacitar a equipe operacional — 30% das paradas são por erro humano.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Comprar equipamento sem contrato de manutenção e reposição de consumíveis.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Não integrar telemetria IoT — voar às cegas transforma reuso em passivo.</span></li>
              </ul>
            </section>

            {/* CONCLUSÃO */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">Conclusão: reuso é o novo padrão da eficiência hídrica</h2>
              <p>
                O reuso de água nas empresas deixou de ser um item de marketing
                sustentável para se tornar uma decisão de gestão financeira,
                operacional e reputacional. Empresas que enxergam essa
                transformação primeiro capturam o triplo benefício: economia direta
                na fatura, blindagem contra crises hídricas e ganho de valor
                percebido junto a investidores e consumidores.
              </p>
              <p>
                A boa notícia é que você não precisa começar sozinho. A AcquaFlux
                oferece diagnóstico hídrico gratuito, projeta o sistema sob medida,
                acompanha o licenciamento e monitora a operação com IoT — tudo com
                modelo comercial que pode ser vinculado à economia comprovada.
              </p>
              <div className="glass-card p-8 rounded-2xl text-center mt-6">
                <h3 className="text-2xl font-bold mb-3">Pronto para reutilizar e economizar?</h3>
                <p className="text-muted-foreground mb-6">
                  Solicite um diagnóstico gratuito e receba um plano de reuso com
                  economia estimada, CAPEX aproximado e payback projetado.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link to="/contato/" className="btn-aqua">Solicitar diagnóstico</Link>
                  <a href={WHATS_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-3xl font-bold text-foreground mt-8 mb-6">10. Perguntas frequentes sobre reuso de água</h2>
              <div className="space-y-4">
                {faqs.map((f, i) => (
                  <details key={i} className="glass-card p-6 rounded-xl group">
                    <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                      <span>{f.q}</span>
                      <ArrowRight className="w-5 h-5 text-primary group-open:rotate-90 transition-transform" />
                    </summary>
                    <p className="mt-4 text-foreground/80">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            {/* AUTHOR BOX */}
            <section className="glass-card p-6 rounded-2xl flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Escrito por</p>
                <h3 className="text-lg font-bold">Equipe Técnica AcquaFlux</h3>
                <p className="text-sm text-foreground/80 mt-2">
                  Time multidisciplinar de engenheiros hídricos, ambientais e
                  especialistas ESG com mais de uma década de experiência em projetos
                  de eficiência hídrica, reuso de água, telemetria IoT e auditoria de
                  faturas de concessionárias em todo o Brasil.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Link to="/sobre/" className="text-primary text-sm underline">Conheça a AcquaFlux</Link>
                  <span className="text-muted-foreground">·</span>
                  <Link to="/solucoes/" className="text-primary text-sm underline">Ver soluções</Link>
                </div>
              </div>
            </section>
          </div>

          {/* SIDEBAR */}
          <aside className="space-y-6 lg:sticky lg:top-24 h-fit">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" /> Artigos recomendados
              </h3>
              <ul className="space-y-4">
                {relatedPosts.map((p, i) => (
                  <li key={i}>
                    <Link to={p.href} className="group flex flex-col gap-1">
                      <span className="text-xs uppercase tracking-wider text-primary font-semibold">{p.tag}</span>
                      <span className="font-semibold text-sm group-hover:text-primary transition-colors">{p.title}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10">
              <Droplets className="w-8 h-8 text-primary mb-3" />
              <h3 className="text-lg font-bold mb-2">Diagnóstico gratuito</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Descubra em 48h quanto sua empresa pode economizar com reuso de água.
              </p>
              <Link to="/contato/" className="btn-aqua w-full text-center block">Solicitar agora</Link>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-3">Categorias</h3>
              <div className="flex flex-wrap gap-2">
                {["Reuso", "ESG", "IoT", "Auditoria", "RCI-A", "Sustentabilidade"].map((c) => (
                  <span key={c} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default ReusoDeAgua;
