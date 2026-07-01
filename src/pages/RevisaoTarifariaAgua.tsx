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
  AlertTriangle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import capa from "@/assets/revisao-tarifaria-agua-capa.jpg";
import hidrometro from "@/assets/revisao-tarifaria-hidrometro.jpg";

const WHATS_URL =
  "https://wa.me/5512981408992?text=Ol%C3%A1!%20Quero%20economizar%20%C3%A1gua%20agora%20com%20a%20AcquaFlux.";

const RevisaoTarifariaAgua = () => {
  const faqs = [
    {
      q: "O que é revisão tarifária de água?",
      a: "Revisão tarifária de água é o processo técnico e jurídico de auditar as faturas emitidas pela concessionária nos últimos 5 a 10 anos para identificar cobranças indevidas, enquadramento tarifário incorreto, erros de medição, categorias mal aplicadas e estimativas equivocadas. Quando comprovadas, essas cobranças podem ser restituídas ao cliente por meio do serviço RCI-A (Restituição de Créditos Indevidos de Água).",
    },
    {
      q: "Toda empresa pode solicitar revisão tarifária de água?",
      a: "Sim. Qualquer pessoa jurídica com histórico de contas de água — comércios, indústrias, condomínios, escolas, hospitais, hotéis, órgãos públicos e prestadores de serviço — pode solicitar revisão. Não há restrição de porte nem de segmento. O que muda é o potencial de recuperação: quanto maior o consumo, maior tende a ser o valor a restituir.",
    },
    {
      q: "Quanto tempo demora a restituição dos créditos de água (RCI-A)?",
      a: "O prazo típico é de 60 a 150 dias, contados desde a auditoria até o crédito efetivo em fatura ou em conta bancária. Casos que exigem via judicial podem ultrapassar 12 meses. A AcquaFlux prioriza a via administrativa por ser mais rápida e sem custos para o cliente.",
    },
    {
      q: "Qual o percentual médio de recuperação em uma auditoria de conta de água?",
      a: "Estudos internos apontam que cerca de 30% das faturas comerciais e industriais no Brasil contêm algum tipo de cobrança indevida. Em cases reais da AcquaFlux, o valor médio restituído representa entre 8% e 22% do total pago nos últimos 60 meses — um retorno expressivo, sem investimento inicial.",
    },
    {
      q: "Preciso pagar algo para fazer a revisão tarifária?",
      a: "Não. O modelo comercial da AcquaFlux é 100% baseado em performance: o cliente paga um percentual apenas sobre o valor efetivamente recuperado. Se nada for restituído, nada é cobrado. Assim, a empresa contratante não corre risco financeiro.",
    },
    {
      q: "A revisão tarifária pode alterar minha categoria (residencial, comercial ou industrial)?",
      a: "Sim. Muitas empresas pagam categorias mais caras do que a devida — por exemplo, um consultório enquadrado como indústria. A auditoria valida a categoria correta segundo a estrutura tarifária da concessionária, o CNAE da empresa e o uso predominante da água, evitando gastos futuros indevidos.",
    },
    {
      q: "Quais documentos são necessários para iniciar o processo?",
      a: "Basta enviar as faturas dos últimos 60 meses (em PDF), o contrato social da empresa e a última leitura do hidrômetro. A partir desses dados, a AcquaFlux realiza a auditoria técnica e apresenta um relatório com os valores passíveis de restituição.",
    },
    {
      q: "A concessionária pode retaliar após uma revisão tarifária?",
      a: "Não. O direito à revisão tarifária é assegurado pela Lei nº 8.987/1995 (Lei das Concessões), pelo Código de Defesa do Consumidor (art. 42) e pelo art. 876 do Código Civil (repetição de indébito). Concessionárias reguladas pela ANA, ARSESP, AGERGS e demais agências estaduais são obrigadas a analisar o pedido.",
    },
    {
      q: "Revisão tarifária vale para condomínios?",
      a: "Sim, e é um dos setores com maior potencial de restituição. Condomínios com hidrômetro único ou com categorias mal aplicadas costumam apresentar créditos expressivos, principalmente quando existem áreas comerciais (lojas, salões de festas) dentro do empreendimento.",
    },
    {
      q: "Como a AcquaFlux garante segurança jurídica no processo?",
      a: "Todos os laudos são elaborados por engenheiros e técnicos certificados, com base em normas ABNT, resoluções ANA e regulamentos das concessionárias locais. Cada pleito é acompanhado por assessoria jurídica especializada, com contratos claros e relatórios auditáveis.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Revisão Tarifária de Água: Como Recuperar Valores Pagos Indevidamente",
        description:
          "Guia completo sobre revisão tarifária de água e RCI-A: base legal, cases, prazos, documentos e como recuperar até 22% do que sua empresa pagou a mais.",
        image: [
          "https://acquaflux.com/assets/revisao-tarifaria-agua-capa.jpg",
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
        mainEntityOfPage: "https://acquaflux.com/revisao-tarifaria-de-agua/",
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
            name: "Revisão Tarifária de Água",
            item: "https://acquaflux.com/revisao-tarifaria-de-agua/",
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
      href: "/desperdicio-de-agua-empresas",
      title: "Desperdício de água nas empresas: causas e como evitar",
      tag: "Gestão",
    },
    {
      href: "/como-economizar-agua-empresa",
      title: "Como economizar água na empresa: 8 estratégias",
      tag: "Prático",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Revisão Tarifária de Água: Como Recuperar Créditos | AcquaFlux"
        description="Revisão tarifária de água e RCI-A: como auditar faturas de até 10 anos, recuperar cobranças indevidas e reduzir sua conta. Sem CAPEX. Base legal, prazos e cases."
        canonical="/revisao-tarifaria-de-agua/"
        keywords="revisão tarifária de água, RCI-A, restituição de créditos de água, auditoria de conta de água, cobrança indevida água, enquadramento tarifário água, recuperar valores pagos água, restituição fatura água, revisão de fatura água, categoria tarifária concessionária, repetição de indébito água, sabesp cobrança indevida, cagece cobrança indevida, embasa cobrança indevida, cesan cobrança indevida, saae, corsan"
        image="/assets/revisao-tarifaria-agua-capa.jpg"
        structuredData={structuredData}
      />
      <Header />

      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="container relative mx-auto px-6 max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="hover:text-primary">Início</Link></li>
              <li aria-hidden>/</li>
              <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
              <li aria-hidden>/</li>
              <li className="text-foreground">Revisão Tarifária de Água</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Tag className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">Auditoria · RCI-A · Gestão Financeira</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Revisão tarifária de água: como recuperar valores pagos indevidamente
          </h1>

          <p className="text-lg text-muted-foreground mb-6">
            Cerca de 30% das faturas comerciais e industriais no Brasil contêm
            cobranças indevidas. Descubra como a revisão tarifária de água e o
            serviço RCI-A permitem restituir até 10 anos de valores pagos a mais,
            sem risco, sem CAPEX e com respaldo legal.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><User className="w-4 h-4" /> Equipe Técnica AcquaFlux</div>
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 15 de junho de 2026</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 15 min de leitura</div>
          </div>
        </div>
      </section>

      <figure className="container mx-auto px-6 max-w-5xl mb-12">
        <img
          src={capa}
          alt="Especialista analisando faturas de água com lupa, calculadora e planilhas no computador durante auditoria de revisão tarifária"
          width={1536}
          height={864}
          className="w-full rounded-2xl shadow-2xl"
          fetchPriority="high"
        />
        <figcaption className="text-sm text-muted-foreground mt-3 text-center">
          Auditoria detalhada de faturas de água: cada centavo pago a mais é passível
          de restituição pelo serviço RCI-A da AcquaFlux.
        </figcaption>
      </figure>

      <article className="pb-16">
        <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-[1fr_320px] gap-12">
          <div className="space-y-10 text-foreground/85 text-[1.05rem] leading-relaxed">
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" /> Neste artigo você vai ler
              </h2>
              <ol className="grid sm:grid-cols-2 gap-2 text-sm">
                <li><a href="#o-que-e" className="hover:text-primary">1. O que é revisão tarifária</a></li>
                <li><a href="#por-que" className="hover:text-primary">2. Por que existem cobranças indevidas</a></li>
                <li><a href="#base-legal" className="hover:text-primary">3. Base legal e jurídica</a></li>
                <li><a href="#rci-a" className="hover:text-primary">4. O que é RCI-A</a></li>
                <li><a href="#passo-a-passo" className="hover:text-primary">5. Passo a passo da revisão</a></li>
                <li><a href="#erros" className="hover:text-primary">6. Erros tarifários mais comuns</a></li>
                <li><a href="#cases" className="hover:text-primary">7. Cases reais</a></li>
                <li><a href="#quando-vale" className="hover:text-primary">8. Quando vale a pena</a></li>
                <li><a href="#faq" className="hover:text-primary">9. Perguntas frequentes</a></li>
              </ol>
            </div>

            <section id="introducao">
              <p>
                Poucos custos operacionais são tão ignorados — e ao mesmo tempo tão
                distorcidos — quanto a conta de água. Enquanto CFOs auditam contratos
                de energia, telecom e frota com regularidade, a fatura hídrica costuma
                passar batida, ano após ano, com a suposição de que “se veio da
                concessionária, está certo”. É justamente aí que mora o problema.
              </p>
              <p>
                Levantamentos setoriais e nossa própria base de casos indicam que
                cerca de <strong>3 em cada 10 faturas de água</strong> emitidas para
                pessoas jurídicas contêm algum tipo de erro: enquadramento incorreto,
                categoria trocada, estimativa mal calculada, hidrômetro descalibrado
                ou cobrança de esgoto sobre volumes que não foram lançados na rede.
                Somados 5 a 10 anos de erros, os valores facilmente ultrapassam a
                casa das centenas de milhares de reais.
              </p>
              <p>
                Este guia completo mostra, com base na experiência prática da
                AcquaFlux com o serviço <strong>RCI-A (Restituição de Créditos
                Indevidos de Água)</strong>, como funciona a revisão tarifária, quais
                erros são mais recorrentes, qual a base legal que sustenta o pedido,
                quanto tempo leva o processo e como transformar essa auditoria em um
                dos maiores geradores de caixa não recorrente da sua empresa.
              </p>
            </section>

            <section id="o-que-e">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">1. O que é revisão tarifária de água</h2>
              <p>
                A <strong>revisão tarifária de água</strong> é uma análise técnica e
                jurídica das faturas emitidas pela concessionária de saneamento —
                normalmente cobrindo os últimos 60 meses, prazo prescricional
                previsto no Código Civil (art. 206, § 5º). O objetivo é identificar
                pagamentos indevidos e requerer a devolução em dobro ou simples,
                conforme o caso, com correção monetária pela SELIC.
              </p>
              <p>
                Ela não deve ser confundida com a “revisão tarifária periódica” feita
                pelas agências reguladoras (ANA, ARSESP, ARSAE, AGEPAN etc.), que
                reajusta as tarifas de forma coletiva. Aqui estamos falando de
                <strong> auditoria individual da sua empresa</strong>, com objetivo
                exclusivo de restituição.
              </p>
            </section>

            <section id="por-que">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">2. Por que existem tantas cobranças indevidas</h2>
              <p>
                As estruturas tarifárias das concessionárias brasileiras são
                complexas: envolvem categoria (residencial, comercial, industrial,
                pública), faixas de consumo (mínima, intermediária, excedente),
                fator de cálculo do esgoto, adicionais de contribuição, tributos e
                subsídios cruzados. Basta um único parâmetro trocado no cadastro
                para gerar cobrança errada por anos.
              </p>
              <div className="glass-card p-6 rounded-xl border-l-4 border-primary my-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Fato pouco conhecido</p>
                    <p className="text-sm text-muted-foreground">
                      Muitas concessionárias cobram esgoto como percentual do volume
                      captado, mesmo quando parte do consumo evapora, é reutilizada
                      ou vai para irrigação — não retornando à rede coletora. A
                      correção desse cálculo é uma das principais fontes de
                      restituição de créditos.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="base-legal">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">3. Base legal e jurídica da revisão</h2>
              <p>
                A restituição de valores pagos indevidamente à concessionária de
                água encontra respaldo em um tripé jurídico sólido:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Código Civil, art. 876:</strong> quem paga o que não é devido tem direito à repetição do indébito.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Código de Defesa do Consumidor, art. 42, § único:</strong> cobrança indevida gera direito à devolução em dobro, salvo engano justificável.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Lei nº 8.987/1995 (Lei das Concessões):</strong> disciplina a prestação de serviços públicos e o dever de modicidade tarifária.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Lei nº 11.445/2007:</strong> marco do saneamento básico, atualizado pela Lei nº 14.026/2020.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Súmulas STJ nº 412 e 407:</strong> reconhecem prazo prescricional e ilegitimidade de cobranças abusivas em serviços de água e esgoto.</span></li>
              </ul>
              <p className="mt-4">
                Para consulta oficial da legislação, acesse o portal do
                <a href="https://www.planalto.gov.br/" target="_blank" rel="noopener noreferrer" className="text-primary underline"> Planalto</a>
                e da <a href="https://www.gov.br/ana/pt-br" target="_blank" rel="noopener noreferrer" className="text-primary underline">Agência Nacional de Águas e Saneamento (ANA)</a>.
              </p>
            </section>

            <section id="rci-a">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">4. O que é o serviço RCI-A da AcquaFlux</h2>
              <p>
                O <strong>RCI-A (Restituição de Créditos Indevidos de Água)</strong> é
                a solução da AcquaFlux dedicada à revisão tarifária. Combina três
                camadas em um único fluxo: engenharia hidráulica (validação de
                categoria, hidrômetro e enquadramento), jurídico especializado
                (fundamentação legal e negociação) e dados (auditoria estatística das
                faturas com uso de <Link to="/analytics-bi" className="text-primary underline">Analytics e BI hídrico</Link>).
              </p>
              <p>
                O diferencial: modelo <strong>100% success fee</strong>. A empresa
                cliente não paga nada antecipadamente. O honorário é sempre um
                percentual do valor efetivamente restituído. Se não houver
                restituição, não há cobrança — o que elimina o risco financeiro do
                projeto.
              </p>
            </section>

            {/* WhatsApp CTA */}
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
                      Envie sua última fatura no WhatsApp e receba, em até 48 horas,
                      uma estimativa do valor recuperável pelo RCI-A.
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

            <figure className="my-10">
              <img
                src={hidrometro}
                alt="Hidrômetro comercial sendo inspecionado durante auditoria de revisão tarifária de água em empresa brasileira"
                width={1400}
                height={800}
                loading="lazy"
                className="w-full rounded-2xl shadow-xl"
              />
              <figcaption className="text-sm text-muted-foreground mt-3 text-center">
                Leitura in loco do hidrômetro e conferência da categoria cadastrada:
                a maioria dos erros começa aqui.
              </figcaption>
            </figure>

            <section id="passo-a-passo">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">5. Passo a passo da revisão tarifária</h2>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">5.1. Coleta de faturas e documentos</h3>
              <p>
                Envio das faturas dos últimos 60 meses (ou até 120, dependendo da
                jurisprudência local), contrato social, cartão CNPJ e leitura atual
                do hidrômetro. Todo o processo pode ser feito de forma digital.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">5.2. Auditoria técnica</h3>
              <p>
                Engenheiros conferem categoria, faixa de consumo, fator de esgoto,
                calibração e situação do hidrômetro, presença de vazamentos, uso
                de reservatórios e histórico de consumo. Ferramentas de BI comparam
                padrões e destacam variações incompatíveis com a operação.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">5.3. Elaboração do laudo</h3>
              <p>
                Documento técnico com relação detalhada de créditos, memorial de
                cálculo, correção monetária e fundamentação normativa. É a base do
                pleito administrativo ou judicial.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">5.4. Protocolo junto à concessionária</h3>
              <p>
                Abertura do processo administrativo e acompanhamento até a resposta.
                Se a via administrativa for insuficiente, aciona-se o Judiciário com
                o suporte jurídico integrado.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">5.5. Restituição e ajuste do cadastro</h3>
              <p>
                Os créditos são compensados em faturas futuras ou depositados. Além
                disso, o cadastro da unidade é corrigido, evitando novos pagamentos
                indevidos e reduzindo, mês a mês, a fatura corrente.
              </p>
            </section>

            <section id="erros">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">6. Os 8 erros tarifários mais comuns nas faturas</h2>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Enquadramento em categoria mais cara (ex.: comércio classificado como indústria).</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Cobrança de esgoto sobre água não devolvida à rede (irrigação, torres, reuso).</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Faixa de consumo aplicada incorretamente (super-tarifação por “excedente” fictício).</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Hidrômetro descalibrado ou fora do prazo de troca (Portaria INMETRO 246/2000).</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Faturas por estimativa mesmo com leitura possível.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Adicionais de contribuição indevidos após o fim do prazo legal.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Tarifa mínima cobrada por unidade em condomínios sem individualização.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Cobrança de área comum sob categoria não residencial.</span></li>
              </ul>
            </section>

            <section id="cases">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">7. Cases reais de restituição</h2>
              <div className="grid md:grid-cols-3 gap-6 my-4">
                <div className="glass-card p-6 rounded-xl">
                  <p className="text-3xl font-bold text-primary mb-2">R$ 412 mil</p>
                  <p className="text-sm text-muted-foreground">Indústria de alimentos no interior de SP — restituição referente a 78 meses de esgoto cobrado sobre água evaporada em torres.</p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <p className="text-3xl font-bold text-primary mb-2">R$ 187 mil</p>
                  <p className="text-sm text-muted-foreground">Rede de clínicas médicas — reclassificação de categoria e correção de faixa de consumo.</p>
                </div>
                <div className="glass-card p-6 rounded-xl">
                  <p className="text-3xl font-bold text-primary mb-2">R$ 96 mil</p>
                  <p className="text-sm text-muted-foreground">Condomínio empresarial — ajuste em unidade comercial cobrada como indústria, com devolução em dobro.</p>
                </div>
              </div>
              <p>
                Além do valor pontual restituído, todos os cases reduziram a fatura
                mensal recorrente entre 12% e 28%, gerando economia contínua nos
                anos seguintes.
              </p>
            </section>

            <section id="quando-vale">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">8. Quando vale a pena solicitar a revisão</h2>
              <p>
                Praticamente sempre. Como não há custo inicial e a auditoria é
                gratuita, o pior cenário possível é receber um laudo indicando que
                sua fatura está correta — o que também é informação valiosa. Nossa
                recomendação prática: se a fatura mensal ultrapassa
                <strong> R$ 3.000</strong>, a revisão tarifária tem alta probabilidade
                de retorno positivo. Acima de <strong>R$ 10.000/mês</strong>, ela é
                praticamente obrigatória do ponto de vista de governança financeira.
              </p>

              <div className="glass-card p-6 rounded-xl border-l-4 border-primary my-6">
                <div className="flex gap-3">
                  <Info className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Dica de gestão</p>
                    <p className="text-sm text-muted-foreground">
                      Integre a revisão tarifária ao ciclo anual de auditoria
                      financeira. A cada 24 meses, revisar a fatura de água evita
                      acúmulo de erros e mantém o cadastro sempre atualizado junto
                      à concessionária.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">Conclusão: transforme sua fatura de água em fonte de caixa</h2>
              <p>
                A revisão tarifária de água é uma das poucas iniciativas empresariais
                capaz de gerar caixa imediato, reduzir custos recorrentes e melhorar
                a governança — tudo isso sem investimento inicial e com respaldo
                jurídico consolidado. Ignorá-la é, literalmente, pagar mais do que
                se deve, ano após ano.
              </p>
              <p>
                A AcquaFlux disponibiliza engenheiros e especialistas jurídicos para
                conduzir todo o processo com transparência e performance. O primeiro
                passo é simples: envie sua última fatura para análise gratuita.
              </p>
              <div className="glass-card p-8 rounded-2xl text-center mt-6">
                <h3 className="text-2xl font-bold mb-3">Descubra quanto sua empresa tem a restituir</h3>
                <p className="text-muted-foreground mb-6">
                  Análise gratuita das últimas 12 faturas. Sem compromisso.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link to="/contato" className="btn-aqua">Solicitar análise gratuita</Link>
                  <a href={WHATS_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    Enviar fatura por WhatsApp
                  </a>
                </div>
              </div>
            </section>

            <section id="faq">
              <h2 className="text-3xl font-bold text-foreground mt-8 mb-6">9. Perguntas frequentes sobre revisão tarifária de água</h2>
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

            <section className="glass-card p-6 rounded-2xl flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Escrito por</p>
                <h3 className="text-lg font-bold">Equipe Técnica AcquaFlux</h3>
                <p className="text-sm text-foreground/80 mt-2">
                  Especialistas em auditoria tarifária, engenharia hidráulica e
                  compliance regulatório. Mais de uma década de experiência na
                  recuperação de créditos indevidos junto a concessionárias de
                  saneamento em todo o Brasil, com atuação nas principais capitais e
                  centenas de cases de sucesso.
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  <Link to="/solucoes" className="text-primary text-sm underline">Ver serviço RCI-A</Link>
                  <span className="text-muted-foreground">·</span>
                  <Link to="/gestao-financeira" className="text-primary text-sm underline">Gestão Financeira Hídrica</Link>
                </div>
              </div>
            </section>
          </div>

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
              <h3 className="text-lg font-bold mb-2">Análise gratuita RCI-A</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Envie sua fatura e descubra quanto sua empresa pode restituir em até 48h.
              </p>
              <Link to="/contato" className="btn-aqua w-full text-center block">Solicitar análise</Link>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-3">Categorias</h3>
              <div className="flex flex-wrap gap-2">
                {["RCI-A", "Auditoria", "Jurídico", "Gestão Financeira", "Compliance", "Saneamento"].map((c) => (
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

export default RevisaoTarifariaAgua;
