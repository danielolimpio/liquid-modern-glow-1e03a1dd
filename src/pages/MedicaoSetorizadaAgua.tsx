import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  Clock,
  User,
  Droplets,
  CheckCircle2,
  Info,
  Tag,
  BookOpen,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Picture from "@/components/Picture";
import capa from "@/assets/medicao-setorizada-capa.jpg?picture";
import engenheira from "@/assets/medicao-setorizada-engenheira.jpg?picture";

const WHATS_URL =
  "https://wa.me/5512981408992?text=Ol%C3%A1!%20Quero%20setorizar%20a%20rede%20hidr%C3%A1ulica%20da%20minha%20empresa%20com%20a%20AcquaFlux.";

const MedicaoSetorizadaAgua = () => {
  const faqs = [
    {
      q: "O que é medição setorizada de água em uma empresa?",
      a: "Medição setorizada é a divisão da rede hidráulica interna em zonas independentes (setores ou DMAs — District Metered Areas), cada uma com hidrômetro próprio e, quando possível, telemetria. O objetivo é medir separadamente o consumo de produção, banheiros, refeitório, jardim, resfriamento e outros pontos, permitindo identificar exatamente onde a água é usada e onde é desperdiçada.",
    },
    {
      q: "Qual a diferença entre medição setorizada e submedição individualizada?",
      a: "Submedição (também chamada de individualização de hidrômetros ou GCI) é a instalação de hidrômetros por unidade autônoma para cobrança individual — típica em condomínios residenciais. Medição setorizada é a divisão da rede em áreas de consumo homogêneas para gestão operacional e detecção de perdas. As duas se complementam, mas têm propósitos diferentes.",
    },
    {
      q: "Quanto se economiza com medição setorizada?",
      a: "Empresas que implantam setorização bem projetada reduzem, em média, entre 20% e 40% do consumo total nos primeiros doze meses. A economia vem de três frentes: identificação de vazamentos ocultos, correção de usos irracionais e engajamento das áreas quando cada gerente passa a enxergar o próprio consumo.",
    },
    {
      q: "É preciso quebrar tudo para setorizar uma rede existente?",
      a: "Não. Na maioria dos casos, o levantamento hidráulico permite identificar barriletes já existentes que naturalmente dividem áreas. A instalação dos hidrômetros de setor é feita nesses pontos, com paradas curtas e programadas. Só em plantas antigas, sem projeto de as built, é necessário refazer trechos de tubulação — e ainda assim de forma pontual.",
    },
    {
      q: "Quais tipos de hidrômetro são usados na setorização?",
      a: "Os mais comuns são: hidrômetros multijato para vazões baixas e médias, hidrômetros Woltmann para vazões altas em industrias, medidores eletromagnéticos para efluentes e líquidos com sólidos em suspensão e medidores ultrassônicos (invasivos ou clamp-on) para instalação sem parada. Todos podem ser especificados com emissor de pulso para telemetria IoT.",
    },
    {
      q: "A medição setorizada substitui o hidrômetro da concessionária?",
      a: "Não. Ela é uma camada complementar de gestão interna. O hidrômetro principal continua sendo o do cavalete, usado para cobrança oficial. Os hidrômetros setoriais medem apenas para a empresa, gerando dados que permitem auditar a fatura, planejar reduções e comprovar tecnicamente pedidos de revisão tarifária.",
    },
    {
      q: "Setorização ajuda a recuperar créditos de água (RCI-A)?",
      a: "Sim. Os dados setoriais são a base técnica mais sólida para pleitear revisão junto à concessionária. Eles permitem demonstrar o consumo típico por setor, isolar picos anormais e comprovar a origem de eventos como vazamentos ocultos, extravasões ou erros de leitura. É esse dossiê que o serviço RCI-A da AcquaFlux monta em nome da empresa.",
    },
    {
      q: "Quanto tempo leva para implantar um projeto de setorização?",
      a: "Depende do porte. Em edifícios comerciais e PMEs, é possível concluir levantamento, instalação e ativação da telemetria em 15 a 45 dias. Em indústrias maiores, com dezenas de pontos e projeto executivo detalhado, o cronograma típico é de 60 a 120 dias, incluindo comissionamento e definição das baselines de consumo por setor.",
    },
    {
      q: "Qual norma técnica orienta a medição setorizada no Brasil?",
      a: "As principais referências são a ABNT NBR 5626 (instalações prediais de água fria), a ABNT NBR 15527 (aproveitamento de chuva), o Manual do PROSAB e as diretrizes do Programa Nacional de Combate ao Desperdício de Água (PNCDA). No lado da concessionária, o IWA Water Loss Task Force estabelece o padrão técnico internacional para gestão de perdas por DMA, adotado por Sabesp, Sanepar, Copasa e outras.",
    },
    {
      q: "Vale a pena setorizar mesmo em empresa pequena?",
      a: "Sim, na medida certa. Para empresas com fatura mensal a partir de aproximadamente R$ 2 mil em água/esgoto, mesmo uma setorização simples (2 a 4 pontos) costuma pagar-se em menos de 12 meses. Abaixo disso, o mais indicado é começar por um monitoramento único de consumo mínimo noturno e evoluir para setorização à medida que o consumo cresce.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Medição Setorizada de Água: como mapear a rede hidráulica e reduzir até 40% do consumo",
        description:
          "Guia técnico completo sobre medição setorizada de água em empresas: projeto de DMAs, tipos de hidrômetro, integração IoT, ROI e recuperação de créditos.",
        image: {
          "@type": "ImageObject",
          url: "https://acquaflux.com/og/medicao-setorizada-capa.jpg",
          width: 1536,
          height: 864,
        },
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
            width: 512,
            height: 512,
          },
        },
        datePublished: "2026-07-05",
        dateModified: "2026-07-05",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://acquaflux.com/medicao-setorizada-de-agua/",
        },
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
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://acquaflux.com/blog/" },
          {
            "@type": "ListItem",
            position: 3,
            name: "Medição Setorizada de Água",
            item: "https://acquaflux.com/medicao-setorizada-de-agua/",
          },
        ],
      },
    ],
  };

  const relatedPosts = [
    { href: "/deteccao-vazamentos-ocultos-empresas", title: "Detecção de vazamentos ocultos: guia com IoT e setorização", tag: "IoT" },
    { href: "/monitoramento-iot", title: "Monitoramento IoT hídrico: sensores e telemetria em tempo real", tag: "Tecnologia" },
    { href: "/revisao-tarifaria-de-agua", title: "Revisão tarifária de água: como recuperar créditos", tag: "RCI-A" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Medição Setorizada de Água: Reduza até 40% do Consumo Empresarial"
        description="Medição setorizada divide a rede hidráulica em zonas de consumo e revela onde a água escapa. Aprenda a projetar DMAs, escolher hidrômetros e reduzir sua fatura."
        canonical="/medicao-setorizada-de-agua/"
        keywords="medição setorizada, medição setorizada de água, DMA água, District Metered Area, hidrômetro setorial, submedição industrial, individualização de hidrômetros, rede hidráulica setorizada, gestão de perdas de água, telemetria hídrica, hidrômetro Woltmann, hidrômetro multijato, hidrômetro ultrassônico, IoT água, mapeamento hidráulico"
        image="/og/medicao-setorizada-capa.jpg"
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
              <li className="text-foreground">Medição Setorizada de Água</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Tag className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">Engenharia Hídrica · DMAs · Eficiência</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Medição setorizada de água: como mapear a rede hidráulica e reduzir até 40% do consumo empresarial
          </h1>

          <p className="text-lg text-muted-foreground mb-6">
            Monitorar só o hidrômetro geral é olhar para a floresta e ignorar as árvores.
            Setorizar a rede hidráulica em zonas de consumo transforma dados abstratos em decisões
            operacionais e é hoje o passo mais eficaz para reduzir a conta de água — e para
            comprovar cobranças indevidas junto à concessionária.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><User className="w-4 h-4" /> Equipe Técnica AcquaFlux</div>
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 5 de julho de 2026</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 12 min de leitura</div>
          </div>
        </div>
      </section>

      {/* COVER */}
      <figure className="container mx-auto px-6 max-w-5xl mb-12">
        <Picture
          image={capa}
          alt="Barrilete industrial com múltiplos hidrômetros setoriais em cluster metálico, planta hidráulica em blueprint ao lado, tons azuis e detalhes em bronze"
          width={1536}
          height={864}
          className="w-full rounded-2xl shadow-2xl"
          fetchPriority="high"
          decoding="async"
        />
        <figcaption className="text-sm text-muted-foreground mt-3 text-center">
          Barrilete setorizado com hidrômetros independentes por área — a base física da gestão
          por DMAs em ambientes industriais e prediais.
        </figcaption>
      </figure>

      {/* CONTENT */}
      <article className="pb-16">
        <div className="container mx-auto px-6 max-w-6xl grid lg:grid-cols-[1fr_320px] gap-12">
          <div className="space-y-10 text-foreground/85 text-[1.05rem] leading-relaxed">
            {/* Sumário */}
            <div className="glass-card p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-primary" /> Neste artigo você vai ler
              </h2>
              <ol className="grid sm:grid-cols-2 gap-2 text-sm">
                <li><a href="#o-que-e" className="hover:text-primary">1. O que é medição setorizada</a></li>
                <li><a href="#dma" className="hover:text-primary">2. O conceito de DMA aplicado à empresa</a></li>
                <li><a href="#beneficios" className="hover:text-primary">3. Benefícios comprovados</a></li>
                <li><a href="#projeto" className="hover:text-primary">4. Como projetar a setorização</a></li>
                <li><a href="#hidrometros" className="hover:text-primary">5. Tipos de hidrômetro</a></li>
                <li><a href="#iot" className="hover:text-primary">6. Integração com telemetria IoT</a></li>
                <li><a href="#custos" className="hover:text-primary">7. Custos, payback e ROI</a></li>
                <li><a href="#rci" className="hover:text-primary">8. Setorização e recuperação de créditos</a></li>
                <li><a href="#erros" className="hover:text-primary">9. Erros comuns na implantação</a></li>
                <li><a href="#faq" className="hover:text-primary">10. Perguntas frequentes</a></li>
              </ol>
            </div>

            <section id="introducao">
              <p>
                Toda empresa que paga uma fatura de água mensal enfrenta o mesmo dilema: o
                hidrômetro do cavalete mostra apenas o total consumido, sem qualquer informação
                sobre <em>onde</em> a água foi parar. É como receber o extrato bancário do mês
                sem saber quais foram as despesas — impossível gerir o que não se enxerga.
              </p>
              <p>
                A medição setorizada resolve esse problema. Dividindo a rede hidráulica em zonas
                homogêneas — cada uma com seu hidrômetro e, idealmente, sua telemetria — a empresa
                passa a saber exatamente quanto consome cada área: produção, banheiros, refeitório,
                jardim, torre de resfriamento, lavagem de veículos. E, com essa clareza, começam
                as decisões que realmente reduzem a fatura.
              </p>
              <p>
                Este guia reúne, em linguagem prática, o método que a AcquaFlux aplica em projetos
                de setorização hídrica para indústrias, hospitais, hotéis, condomínios logísticos e
                edifícios corporativos em todo o Brasil. Você vai encontrar o passo a passo do
                projeto, a escolha de equipamentos, a integração com IoT, o cálculo de ROI e como
                usar os dados para pleitear revisão de fatura junto à concessionária. Se o objetivo
                imediato é encontrar perdas invisíveis, combine este material com nosso guia sobre{" "}
                <Link to="/deteccao-vazamentos-ocultos-empresas/" className="text-primary underline">detecção de vazamentos ocultos em empresas</Link>{" "}
                — a setorização é a base física que torna aquela metodologia possível.
              </p>
            </section>

            <section id="o-que-e">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">1. O que é medição setorizada de água</h2>
              <p>
                Medição setorizada é a prática de instalar hidrômetros adicionais em pontos
                estratégicos da rede hidráulica interna da empresa, criando <strong>zonas de
                consumo mensuráveis de forma independente</strong>. Cada zona é chamada de setor
                (ou <em>DMA — District Metered Area</em>, na literatura técnica internacional
                consagrada pela International Water Association).
              </p>
              <p>
                O conceito nasceu na década de 1980, no Reino Unido, como resposta ao problema de
                perdas em redes municipais. Nos últimos anos, migrou para o ambiente predial e
                industrial, onde os desafios são análogos: entender o que se passa em uma rede
                complexa a partir de um único ponto de medição é inviável. Setorizar é dar visão
                cirúrgica ao gestor.
              </p>
            </section>

            <section id="dma">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">2. O conceito de DMA aplicado à empresa</h2>
              <p>
                Uma DMA bem projetada tem quatro características principais:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Fronteira hidráulica clara.</strong> Entradas e saídas conhecidas, sem interconexões escondidas com outros setores.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Uso final homogêneo.</strong> Cada setor concentra usos com padrão de consumo semelhante (produção, sanitário, refrigeração, jardim).</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Instrumentação adequada.</strong> Hidrômetro dimensionado para a vazão real, com emissor de pulso para telemetria.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Baseline conhecida.</strong> Histórico mínimo de 30 dias de consumo típico, base para alertas automáticos.</span></li>
              </ul>

              <div className="glass-card p-6 rounded-xl border-l-4 border-primary my-6">
                <div className="flex gap-3">
                  <Info className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Princípio da IWA</p>
                    <p className="text-sm text-muted-foreground">
                      A International Water Association recomenda DMAs com no máximo 5.000 ligações
                      equivalentes ou 500 m³/dia de vazão total. Em ambientes prediais e
                      industriais, o critério prático adotado pela AcquaFlux é dividir setores de
                      forma que cada um represente entre 5% e 25% do consumo total da empresa.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="beneficios">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">3. Benefícios comprovados da setorização</h2>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Redução de 20% a 40% no consumo</strong> nos primeiros 12 meses, apenas com correção de vazamentos ocultos e usos irracionais identificados.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Detecção precoce de vazamentos.</strong> A comparação entre setores acelera drasticamente a localização de perdas.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Responsabilização de áreas.</strong> Cada gerente enxerga o próprio consumo e passa a atuar sobre ele.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Auditoria de fatura confiável.</strong> Dados internos batem contra a leitura da concessionária, evidenciando divergências.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Base para relatórios ESG.</strong> Alinhamento direto com GRI 303-3 (captação por fonte) e CDP Water Security.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Planejamento de reuso e captação de chuva.</strong> Sem saber onde a água é usada, é impossível priorizar corretamente projetos de eficiência.</span></li>
              </ul>
            </section>

            <section id="projeto">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">4. Como projetar a setorização passo a passo</h2>

              <figure className="my-8">
                <Picture
                  image={engenheira}
                  alt="Engenheira hídrica em uniforme escuro inspecionando bateria de hidrômetros setoriais alinhados em parede de utility room de edifício comercial"
                  width={1536}
                  height={864}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-2xl shadow-xl"
                />
                <figcaption className="text-sm text-muted-foreground mt-3 text-center">
                  Inspeção de barrilete setorizado: cada hidrômetro representa uma DMA
                  independente, com baseline própria e alertas customizados.
                </figcaption>
              </figure>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Etapa 1 — Levantamento hidráulico</h3>
              <p>
                Tudo começa com o mapeamento da rede real. Quando o <em>as built</em> hidráulico
                existe, é validado em campo. Quando não existe (situação frequente em plantas com
                mais de 15 anos), é reconstruído com apoio de plantas arquitetônicas, inspeção
                visual, testes de pressão e, se necessário, geofonamento das linhas enterradas.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Etapa 2 — Definição dos setores</h3>
              <p>
                Com o mapa em mãos, agrupam-se os pontos de consumo por afinidade (produção,
                sanitário, jardim, resfriamento etc.). O ideal é que cada setor tenha entrada
                única e saída conhecida, evitando ambiguidades. Interconexões existentes são
                fechadas ou instrumentadas.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Etapa 3 — Dimensionamento dos hidrômetros</h3>
              <p>
                Cada setor recebe um hidrômetro cuja faixa de vazão (Q<sub>min</sub>, Q<sub>t</sub>,
                Q<sub>n</sub> e Q<sub>máx</sub>) seja compatível com o consumo real. Instrumento
                superdimensionado subestima vazões baixas; subdimensionado sofre desgaste
                prematuro. Essa escolha é o coração técnico do projeto.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Etapa 4 — Instalação e comissionamento</h3>
              <p>
                A instalação segue a ABNT NBR 5626, respeitando trechos retos a montante e
                jusante, filtros, válvulas de bloqueio e pontos de dreno. O comissionamento inclui
                teste de estanqueidade, calibração e integração ao sistema de telemetria.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Etapa 5 — Baseline e operação</h3>
              <p>
                Nas primeiras semanas, o sistema registra o consumo típico de cada setor para
                estabelecer limites de alerta. A partir daí, qualquer desvio significativo dispara
                notificação automática e entra na rotina do time de manutenção.
              </p>
            </section>

            <section id="hidrometros">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">5. Tipos de hidrômetro para setorização</h2>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="p-3 text-left border border-border">Tipo</th>
                      <th className="p-3 text-left border border-border">Aplicação típica</th>
                      <th className="p-3 text-left border border-border">Vantagens</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-border">Multijato</td>
                      <td className="p-3 border border-border">Setores prediais, banheiros, refeitório</td>
                      <td className="p-3 border border-border">Preço baixo, boa precisão em vazões médias</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Woltmann</td>
                      <td className="p-3 border border-border">Alimentação de indústrias, torres de resfriamento</td>
                      <td className="p-3 border border-border">Suporta altas vazões com baixa perda de carga</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Eletromagnético</td>
                      <td className="p-3 border border-border">Efluentes, água bruta, líquidos com sólidos</td>
                      <td className="p-3 border border-border">Sem partes móveis, precisão altíssima</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Ultrassônico clamp-on</td>
                      <td className="p-3 border border-border">Instalação sem parada em plantas existentes</td>
                      <td className="p-3 border border-border">Não invasivo, permite auditoria rápida</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Volumétrico</td>
                      <td className="p-3 border border-border">Pontos com vazões muito baixas e intermitentes</td>
                      <td className="p-3 border border-border">Alta precisão em regime de baixa vazão</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="iot">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">6. Integração com telemetria IoT</h2>
              <p>
                Setorizar sem telemetria é meia solução: alguém precisaria ler cada hidrômetro
                manualmente, todo dia, para transformar dado em decisão. A camada IoT elimina esse
                esforço. Emissores de pulso magnético acoplados aos hidrômetros enviam leituras
                minuto a minuto via LoRaWAN, NB-IoT ou 4G/5G para uma plataforma em nuvem, onde os
                dados são cruzados, gráficos são gerados e alertas são disparados automaticamente.
              </p>
              <p>
                Essa arquitetura é exatamente o que compõe o serviço de{" "}
                <Link to="/monitoramento-iot/" className="text-primary underline">Monitoramento IoT</Link>{" "}
                e o módulo de{" "}
                <Link to="/analytics-bi/" className="text-primary underline">Analytics e BI hídrico</Link>{" "}
                da AcquaFlux, permitindo consolidar dezenas de setores em um único painel gerencial
                acessível pelo celular do gestor.
              </p>
            </section>

            <section id="custos">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">7. Custos, payback e ROI</h2>
              <p>
                Um erro comum é comparar o investimento em setorização apenas com o hidrômetro em
                si. O cálculo justo inclui projeto, mão de obra de instalação, telemetria e
                plataforma. Ainda assim, o payback costuma ser rápido:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="p-3 text-left border border-border">Perfil</th>
                      <th className="p-3 text-left border border-border">Setores típicos</th>
                      <th className="p-3 text-left border border-border">CAPEX total</th>
                      <th className="p-3 text-left border border-border">Payback</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-border">Edifício comercial (10 mil m²)</td>
                      <td className="p-3 border border-border">4 a 6 DMAs</td>
                      <td className="p-3 border border-border">R$ 18 mil a R$ 45 mil</td>
                      <td className="p-3 border border-border">8 a 14 meses</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Hospital ou hotel médio</td>
                      <td className="p-3 border border-border">6 a 12 DMAs</td>
                      <td className="p-3 border border-border">R$ 40 mil a R$ 120 mil</td>
                      <td className="p-3 border border-border">6 a 12 meses</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Indústria de médio porte</td>
                      <td className="p-3 border border-border">10 a 30 DMAs</td>
                      <td className="p-3 border border-border">R$ 80 mil a R$ 400 mil</td>
                      <td className="p-3 border border-border">6 a 15 meses</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                O retorno vem de três fontes cumulativas: economia direta na conta de água,
                recuperação de valores pagos indevidamente e ganho reputacional para relatórios
                ESG. Em auditorias reais, o TIR médio de projetos de setorização acompanhados pela
                AcquaFlux supera 30% ao ano — patamar raro em investimentos operacionais.
              </p>
            </section>

            <section id="rci">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">8. Setorização como base para recuperar créditos (RCI-A)</h2>
              <p>
                Um efeito colateral extremamente valioso da setorização é o dossiê técnico que ela
                produz. Quando existe divergência entre a fatura da concessionária e o consumo
                real, é a leitura setorial que sustenta o pedido de revisão. As situações mais
                comuns:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Vazamentos ocultos comprovados</strong> em setor específico, com registro exato do início do evento.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Erros de enquadramento tarifário</strong> por categoria de uso, evidenciados quando o consumo real não corresponde ao classificado.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Cobrança de esgoto incompatível</strong> com o volume efetivamente lançado (irrigação, torres, reuso).</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Divergência entre hidrômetro do cavalete e consumo interno auditado</strong>, indicando falha do instrumento oficial.</span></li>
              </ul>
              <p className="mt-4">
                Todos esses casos são a matéria-prima do serviço de{" "}
                <Link to="/revisao-tarifaria-de-agua/" className="text-primary underline">Revisão Tarifária e RCI-A</Link>,
                que pode recuperar até 10 anos de valores pagos indevidamente conforme o Código
                Civil e o Código de Defesa do Consumidor.
              </p>
            </section>

            <section id="erros">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">9. Erros comuns na implantação</h2>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Instalar hidrômetro sem trecho reto adequado a montante e jusante — a norma NBR 5626 exige e a falha compromete a precisão em até 5%.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Escolher o hidrômetro pela conexão, não pela vazão real — erro clássico que leva a subestimar consumos noturnos.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Deixar interconexões abertas entre setores, contaminando a leitura de todas as zonas envolvidas.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Pular a fase de baseline — sem histórico, não há como definir alertas confiáveis.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Confiar apenas no dado, sem inspeção física trimestral — telemetria é meio, não fim.</span></li>
              </ul>
            </section>

            {/* CONCLUSÃO */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">Conclusão: setorizar é ver, ver é decidir</h2>
              <p>
                Enquanto o hidrômetro do cavalete for a única fonte de dado sobre a rede
                hidráulica da sua empresa, a decisão continuará sendo intuitiva. Setorizar é
                trocar suposição por evidência: cada setor conhecido, cada baseline definida e
                cada alerta configurado transforma centímetros cúbicos em decisão gerencial —
                economia real, previsibilidade financeira e argumento técnico para pleitear
                cobranças indevidas.
              </p>
              <p>
                O melhor momento para começar é agora, pelo setor de maior consumo, com uma DMA
                bem projetada e telemetria integrada. Em poucos meses, os dados começam a pagar o
                próprio investimento — e abrem caminho para reuso, captação de chuva e metas ESG
                consistentes.
              </p>
              <div className="glass-card p-8 rounded-2xl text-center mt-6">
                <h3 className="text-2xl font-bold mb-3">Quer setorizar sua rede hidráulica?</h3>
                <p className="text-muted-foreground mb-6">
                  Peça um diagnóstico gratuito e receba uma proposta com número ideal de setores,
                  hidrômetros recomendados, CAPEX aproximado e payback projetado.
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
              <h2 className="text-3xl font-bold text-foreground mt-8 mb-6">10. Perguntas frequentes sobre medição setorizada</h2>
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
              <p className="mt-6 text-sm text-muted-foreground">
                Fontes técnicas: <a href="https://www.gov.br/ana/pt-br" target="_blank" rel="noopener noreferrer" className="text-primary underline">ANA — Agência Nacional de Águas e Saneamento Básico</a>,{" "}
                <a href="https://www.abnt.org.br/" target="_blank" rel="noopener noreferrer" className="text-primary underline">ABNT</a>,
                Manual do PROSAB e Programa Nacional de Combate ao Desperdício de Água (PNCDA).
              </p>
            </section>

            {/* AUTHOR */}
            <section className="glass-card p-6 rounded-2xl flex flex-col sm:flex-row gap-6 items-center sm:items-start">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <User className="w-10 h-10 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Escrito por</p>
                <h3 className="text-lg font-bold">Equipe Técnica AcquaFlux</h3>
                <p className="text-sm text-foreground/80 mt-2">
                  Time multidisciplinar de engenheiros hídricos, ambientais e especialistas em
                  telemetria e auditoria tarifária, com mais de uma década de experiência em
                  projetos de setorização, monitoramento IoT e recuperação de créditos junto às
                  principais concessionárias do Brasil.
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
                Descubra em 48h o potencial de economia com setorização hídrica.
              </p>
              <Link to="/contato/" className="btn-aqua w-full text-center block">Solicitar agora</Link>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-3">Categorias</h3>
              <div className="flex flex-wrap gap-2">
                {["Setorização", "DMA", "IoT", "RCI-A", "Auditoria", "Eficiência"].map((c) => (
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

export default MedicaoSetorizadaAgua;
