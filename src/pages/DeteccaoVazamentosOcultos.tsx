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
  AlertTriangle,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import capa from "@/assets/vazamentos-ocultos-capa.jpg";
import iot from "@/assets/vazamentos-ocultos-iot.jpg";

const WHATS_URL =
  "https://wa.me/5512981408992?text=Ol%C3%A1!%20Quero%20detectar%20vazamentos%20ocultos%20na%20minha%20empresa%20com%20a%20AcquaFlux.";

const DeteccaoVazamentosOcultos = () => {
  const faqs = [
    {
      q: "O que é um vazamento oculto de água em uma empresa?",
      a: "Vazamento oculto é qualquer perda de água que ocorre em tubulações, conexões, reservatórios ou equipamentos sem que exista sinal visível — nem poça, nem mancha, nem ruído perceptível. Em empresas, esses vazamentos ficam escondidos em paredes, contrapisos, subsolos, coberturas técnicas, torres de resfriamento e ramais enterrados, e só aparecem na fatura mensal, quando o consumo já disparou.",
    },
    {
      q: "Como saber se minha empresa tem um vazamento oculto?",
      a: "Os três indícios mais confiáveis são: (1) a fatura de água apresenta variação superior a 20% sem mudança operacional, (2) o hidrômetro continua girando lentamente com todos os pontos fechados durante a madrugada, e (3) existe pressão hidráulica caindo em pontos específicos. O diagnóstico definitivo é feito com telemetria noturna, teste de estanqueidade setorizada e, quando necessário, geofonamento ou correlacionador acústico.",
    },
    {
      q: "Qual é o prejuízo médio de um vazamento não identificado?",
      a: "Um furo de apenas 2 mm em uma tubulação pressurizada desperdiça cerca de 3.200 litros por dia — algo em torno de 96 m³ por mês. Em capitais brasileiras, com tarifa comercial próxima de R$ 25 a R$ 40 por m³ (considerando água + esgoto), isso representa entre R$ 2.400 e R$ 3.840 mensais escoando pelo ralo, sem contar penalidades por consumo excedente.",
    },
    {
      q: "Vazamento oculto tem cobertura da concessionária?",
      a: "As principais concessionárias (Sabesp, Copasa, Cagepa, Sanepar, Embasa, Iguá e Aegea) preveem revisão de fatura por vazamento oculto após diagnóstico técnico e reparo comprovado. O crédito, quando concedido, costuma corresponder à média histórica de consumo dos últimos 12 meses e exige laudo emitido por profissional habilitado. É exatamente esse pleito que integra o serviço de auditoria e RCI-A da AcquaFlux.",
    },
    {
      q: "Qual a diferença entre medição setorizada e submedição?",
      a: "Submedição é a instalação de hidrômetros adicionais para cobrança individualizada (comum em condomínios). Medição setorizada é a divisão da rede hidráulica em zonas de consumo (DMAs — District Metered Areas) para diagnosticar perdas por área. As duas se complementam, mas a setorização é o que permite localizar exatamente onde a água está sendo desperdiçada.",
    },
    {
      q: "IoT hídrico realmente detecta vazamentos em tempo real?",
      a: "Sim. Sensores IoT com pulso magnético ou saída digital acoplados ao hidrômetro enviam leituras minuto a minuto para uma plataforma em nuvem. Algoritmos comparam o fluxo com padrões históricos, identificam vazão contínua fora do horário operacional e disparam alertas por e-mail, SMS ou aplicativo em minutos, permitindo intervenção antes que o prejuízo se acumule.",
    },
    {
      q: "Quanto custa implantar um monitoramento de vazamentos com IoT?",
      a: "O investimento depende do número de pontos monitorados. Para empresas pequenas e médias, kits básicos com 1 a 3 sensores partem de R$ 350 a R$ 800 por ponto, com mensalidade de plataforma entre R$ 90 e R$ 250. Em plantas industriais ou redes complexas, o CAPEX cresce com a quantidade de sensores, válvulas motorizadas e loggers de pressão, mas o payback típico está entre 3 e 12 meses.",
    },
    {
      q: "Bombas hidráulicas podem causar vazamentos ocultos?",
      a: "Sim. Bombas de recalque com selo mecânico gasto, rolamentos danificados ou pressão excessiva geram microvazamentos internos, extravasamento em caixas d'água e ruptura de conexões por golpe de aríete. Monitoramento de vibração, corrente elétrica e pressão diferencial permite identificar falhas antes da parada e evita perdas silenciosas.",
    },
    {
      q: "Vazamento oculto compromete a estrutura do imóvel?",
      a: "Sim, e esse é o custo indireto mais subestimado. Umidade permanente em contrapisos e paredes corrói armaduras, empena pisos de madeira, deteriora forros, gera manchas e mofo, e pode reduzir a vida útil de laminados e equipamentos elétricos próximos. Em edifícios comerciais, um único vazamento não corrigido chega a comprometer garantias construtivas e apólices de seguro patrimonial.",
    },
    {
      q: "Existe norma técnica brasileira sobre perdas de água?",
      a: "Sim. As principais referências são a ABNT NBR 15527 (aproveitamento de água de chuva), a ABNT NBR 5626 (instalações prediais de água fria) e o Programa Nacional de Combate ao Desperdício de Água (PNCDA), do Ministério do Desenvolvimento Regional. A ANA (Agência Nacional de Águas e Saneamento Básico) publica anualmente o SNIS com indicadores oficiais de perdas por concessionária.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Detecção de Vazamentos Ocultos em Empresas: guia com IoT, medição setorizada e prejuízos evitados",
        description:
          "Guia definitivo sobre detecção de vazamentos ocultos em empresas: IoT hídrico, setorização, teste noturno, geofonamento e como transformar cada litro em economia.",
        image: {
          "@type": "ImageObject",
          url: "https://acquaflux.com/og/vazamentos-ocultos-capa.jpg",
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
          "@id": "https://acquaflux.com/deteccao-vazamentos-ocultos-empresas/",
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
            name: "Detecção de Vazamentos Ocultos em Empresas",
            item: "https://acquaflux.com/deteccao-vazamentos-ocultos-empresas/",
          },
        ],
      },
    ],
  };

  const relatedPosts = [
    { href: "/desperdicio-de-agua-empresas", title: "Desperdício de água nas empresas: causas e como evitar", tag: "Gestão" },
    { href: "/economia-de-agua", title: "Economia de água para empresas: guia completo", tag: "Pilar" },
    { href: "/revisao-tarifaria-de-agua", title: "Revisão tarifária de água: recupere valores pagos indevidamente", tag: "RCI-A" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Detecção de Vazamentos Ocultos em Empresas: IoT e Setorização"
        description="Vazamentos ocultos consomem até 40% da água da empresa sem aparecer. Aprenda a detectar com IoT, teste noturno e setorização — e a recuperar prejuízos evitáveis."
        canonical="/deteccao-vazamentos-ocultos-empresas/"
        keywords="detecção de vazamentos, vazamento oculto, vazamento de água empresa, monitoramento IoT água, medição setorizada, teste noturno hidrômetro, geofonamento, perdas hídricas, DMA, gestão de perdas de água, telemetria hídrica, sensor de vazão, vazamento invisível, conta de água alta, vazamento na rede hidráulica"
        image="/og/vazamentos-ocultos-capa.jpg"
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
              <li className="text-foreground">Detecção de Vazamentos Ocultos</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Tag className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">Gestão Hídrica · IoT · Perdas</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Detecção de vazamentos ocultos em empresas: como IoT e medição setorizada evitam prejuízos silenciosos
          </h1>

          <p className="text-lg text-muted-foreground mb-6">
            Um único vazamento invisível pode consumir dezenas de milhares de litros por mês sem
            aparecer nas paredes — só na fatura. Veja como o monitoramento contínuo da rede
            hidráulica identifica falhas em tempo real, corrige antes do prejuízo e devolve
            previsibilidade financeira à sua operação.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><User className="w-4 h-4" /> Equipe Técnica AcquaFlux</div>
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 5 de julho de 2026</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 13 min de leitura</div>
          </div>
        </div>
      </section>

      {/* COVER */}
      <figure className="container mx-auto px-6 max-w-5xl mb-12">
        <img
          src={capa}
          alt="Técnico apontando lanterna para vazamento em tubulação industrial de aço inox com manômetros e chão molhado"
          width={1536}
          height={864}
          className="w-full rounded-2xl shadow-2xl"
          fetchPriority="high"
          decoding="async"
        />
        <figcaption className="text-sm text-muted-foreground mt-3 text-center">
          Inspeção técnica de vazamento oculto em barrilete industrial — a água só é vista quando o
          gotejamento chega ao piso, mas o consumo desperdiçado já ocorre há semanas.
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
                <li><a href="#o-que-e" className="hover:text-primary">1. O que é um vazamento oculto</a></li>
                <li><a href="#panorama" className="hover:text-primary">2. Panorama de perdas no Brasil</a></li>
                <li><a href="#sinais" className="hover:text-primary">3. Sinais silenciosos de alerta</a></li>
                <li><a href="#tipos" className="hover:text-primary">4. Tipos de vazamento invisível</a></li>
                <li><a href="#iot" className="hover:text-primary">5. Monitoramento contínuo com IoT</a></li>
                <li><a href="#setorizacao" className="hover:text-primary">6. Medição setorizada e DMAs</a></li>
                <li><a href="#metodos" className="hover:text-primary">7. Métodos práticos de detecção</a></li>
                <li><a href="#custos" className="hover:text-primary">8. Custos, ROI e recuperação de créditos</a></li>
                <li><a href="#erros" className="hover:text-primary">9. Erros comuns a evitar</a></li>
                <li><a href="#faq" className="hover:text-primary">10. Perguntas frequentes</a></li>
              </ol>
            </div>

            <section id="introducao">
              <p>
                A parte mais cara da conta de água não é a água que você usa — é a que você não sabe
                que está usando. Em empresas brasileiras, boa parte do consumo cobrado pela
                concessionária nunca passou por nenhum ponto útil: escapou por uma conexão frouxa
                atrás de uma parede, por um selo mecânico gasto na bomba de recalque ou pelo
                extravasor de uma caixa d'água mal dimensionada. E, como não deixa poça, não faz
                ruído e não interrompe a operação, o problema segue crescendo mês após mês.
              </p>
              <p>
                A boa notícia é que essa realidade mudou nos últimos cinco anos. Sensores IoT de
                baixo custo, plataformas de telemetria acessíveis e a possibilidade de dividir a
                rede hidráulica em zonas de consumo permitem hoje identificar, com precisão de
                metros, onde cada litro está sendo desperdiçado. Este guia foi escrito com base em
                projetos reais executados pela equipe da AcquaFlux em indústrias, condomínios
                logísticos, hospitais, hotéis e edifícios corporativos — e mostra o passo a passo
                que qualquer gestor pode aplicar para transformar vazamentos ocultos em economia
                imediata.
              </p>
            </section>

            <section id="o-que-e">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">1. O que é um vazamento oculto de água</h2>
              <p>
                Um vazamento oculto é toda perda de água que ocorre sem sinal visível na superfície.
                Diferente de uma torneira pingando ou de uma válvula quebrada, ele acontece dentro
                de paredes, contrapisos, forros, subsolos, coberturas técnicas ou tubulações
                enterradas, e sua única evidência costuma ser o hidrômetro girando durante a
                madrugada e a fatura chegando com valor incompatível com a operação.
              </p>
              <p>
                Do ponto de vista da engenharia hidráulica, é qualquer vazão contínua fora do
                consumo produtivo — inclusive extravasões em reservatório, refluxo em boia, purgas
                mal reguladas em torres de resfriamento e recirculação indevida em circuitos
                fechados. A soma dessas perdas silenciosas costuma superar, em porcentagem, todas
                as perdas visíveis somadas.
              </p>

              <div className="glass-card p-6 rounded-xl border-l-4 border-primary my-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Dado que assusta</p>
                    <p className="text-sm text-muted-foreground">
                      Segundo o Diagnóstico Anual do SNIS, publicado pela ANA, o índice médio de
                      perdas na distribuição no Brasil ultrapassa 37% da água tratada — e boa parte
                      dessa perda também se reproduz depois do hidrômetro, dentro das instalações
                      dos consumidores comerciais e industriais.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="panorama">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">2. Panorama das perdas hídricas no Brasil</h2>
              <p>
                O relatório mais recente do <a href="https://www.gov.br/ana/pt-br" target="_blank" rel="noopener noreferrer" className="text-primary underline">Sistema Nacional de Informações sobre Saneamento (SNIS)</a>,
                mantido pela ANA, mostra que apenas 40% dos prestadores de serviço apresentam índice
                de perdas inferior a 25%. Em capitais como São Paulo, Salvador e Recife, as perdas
                superam 40% no lado da concessionária. Depois que a água entra no ramal do
                consumidor, um segundo ciclo de perdas começa — e aí a responsabilidade é da
                empresa.
              </p>
              <p>
                Auditorias de campo realizadas em plantas atendidas pela AcquaFlux mostram que
                entre 15% e 35% do consumo mensal, em média, corresponde a vazamentos ocultos e
                usos irracionais. Em galpões logísticos, esse número tende ao piso; em indústrias
                de alimentos, hospitais e hotéis, tende ao teto.
              </p>
              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Setores mais expostos</h3>
              <ul className="space-y-3">
                {[
                  "Hospitais e clínicas — funcionamento 24/7, muitos pontos autônomos, forros técnicos densos.",
                  "Indústria de alimentos e bebidas — CIP, lavagens frequentes, muitas conexões roscadas em inox.",
                  "Shoppings, hotéis e edifícios corporativos — barriletes verticais complexos, muitos pavimentos.",
                  "Data centers — refrigeração contínua e make-up water em torres, com margem de perda dissimulada.",
                  "Condomínios logísticos e galpões — tubulações longas enterradas, hidrantes e sprinklers.",
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="sinais">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">3. Sinais silenciosos de que existe um vazamento</h2>
              <p>
                Antes de pensar em tecnologia, é possível identificar boa parte dos vazamentos
                ocultos a partir de sinais simples que qualquer gestor consegue observar. Esses
                indícios são o ponto de partida para um diagnóstico mais profundo:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Consumo mínimo noturno acima de zero.</strong> Se, entre 1h e 4h da manhã, o hidrômetro registra fluxo contínuo mesmo com a operação parada, existe vazamento.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Variação superior a 20% na fatura</strong> sem mudança de mix produtivo, número de colaboradores ou horários.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Queda de pressão localizada.</strong> Torneiras e chuveiros com fluxo fraco em um único setor indicam ruptura ou obstrução ramais adiante.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Manchas, mofo ou eflorescência</strong> em paredes, tetos e rodapés — mesmo pequenas, indicam infiltração ativa.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Bomba de recalque ligando com frequência atípica</strong> ou reservatório superior descendo mais rápido do que o normal.</span></li>
              </ul>
            </section>

            <section id="tipos">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">4. Tipos mais comuns de vazamento invisível</h2>
              <p>
                Vazamentos ocultos assumem formas muito diferentes conforme o tipo de instalação.
                Entender qual categoria é mais provável na sua empresa acelera o diagnóstico:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="p-3 text-left border border-border">Categoria</th>
                      <th className="p-3 text-left border border-border">Onde ocorre</th>
                      <th className="p-3 text-left border border-border">Vazão típica</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-border">Trinca em tubulação enterrada</td>
                      <td className="p-3 border border-border">Ramais entre cavalete e edificação</td>
                      <td className="p-3 border border-border">1 a 6 m³/dia</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Extravasão em caixa d'água</td>
                      <td className="p-3 border border-border">Boia mecânica com folga ou desgaste</td>
                      <td className="p-3 border border-border">0,5 a 3 m³/dia</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Selo mecânico de bomba gasto</td>
                      <td className="p-3 border border-border">Casa de bombas de recalque</td>
                      <td className="p-3 border border-border">0,3 a 1,5 m³/dia</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Válvula de descarga travada</td>
                      <td className="p-3 border border-border">Bacias sanitárias comerciais</td>
                      <td className="p-3 border border-border">0,2 a 2 m³/dia por peça</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Purga excessiva em torre de resfriamento</td>
                      <td className="p-3 border border-border">Sistemas HVAC industriais</td>
                      <td className="p-3 border border-border">2 a 15 m³/dia</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Vazamento em junta soldada de PVC/PPR</td>
                      <td className="p-3 border border-border">Shafts verticais e forros técnicos</td>
                      <td className="p-3 border border-border">0,5 a 4 m³/dia</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="iot">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">5. Monitoramento contínuo com IoT: o novo padrão</h2>
              <p>
                A grande virada dos últimos anos foi o custo dos sensores hídricos IoT. Hoje é
                possível instalar leitores de pulso magnético diretamente no hidrômetro do
                cavalete, sensores ultrassônicos em pontos estratégicos, loggers de pressão em
                barriletes e transmissores LoRaWAN ou NB-IoT que enviam leituras minuto a minuto
                para uma plataforma em nuvem — tudo sem interromper a operação.
              </p>

              <figure className="my-8">
                <img
                  src={iot}
                  alt="Engenheiro com capacete branco e colete refletivo analisando dashboard IoT de vazão hídrica em tablet, ao lado de sensor ultrassônico instalado em tubulação industrial"
                  width={1536}
                  height={864}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-2xl shadow-xl"
                />
                <figcaption className="text-sm text-muted-foreground mt-3 text-center">
                  Sensor ultrassônico não invasivo e plataforma de telemetria em tempo real: leitura
                  contínua de vazão, pressão e temperatura permite identificar vazamentos em minutos.
                </figcaption>
              </figure>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">O que a telemetria hídrica entrega</h3>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Consumo mínimo noturno.</strong> Base para identificar vazamento estrutural quando comparado à referência histórica.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Curva de demanda horária.</strong> Permite bater a operação real contra o esperado para cada turno.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Alertas automáticos.</strong> Vazão contínua acima de um limite dispara aviso em minutos por e-mail, SMS ou app.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Relatórios auditáveis.</strong> Base para pleitear revisão de fatura junto à concessionária e reportar em ESG.</span></li>
              </ul>
              <p className="mt-4">
                É exatamente essa arquitetura que integra o serviço de{" "}
                <Link to="/monitoramento-iot/" className="text-primary underline">Monitoramento IoT da AcquaFlux</Link>,
                combinando hardware certificado, plataforma web e time técnico que interpreta os
                alertas para a sua operação.
              </p>
            </section>

            <section id="setorizacao">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">6. Medição setorizada: dividir para conquistar</h2>
              <p>
                Monitorar apenas o hidrômetro geral é como olhar o velocímetro de um carro sem
                saber quantas rodas estão funcionando. Medição setorizada — inspirada no conceito
                de <em>District Metered Areas (DMAs)</em> usado por concessionárias — divide a rede
                interna da empresa em zonas independentes, cada uma com seu hidrômetro e telemetria.
              </p>
              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">Como setorizar sem obra grande</h3>
              <ol className="space-y-3 list-decimal list-inside">
                <li>Levantamento do <em>as built</em> hidráulico (ou mapeamento em campo quando não existir).</li>
                <li>Identificação dos usos finais dominantes por área: produção, banheiros, refeitório, resfriamento, jardim.</li>
                <li>Instalação de hidrômetros de derivação (com totalizador e emissor de pulso) em cada barrilete crítico.</li>
                <li>Vinculação dos sensores a uma plataforma única que consolida consumo, alertas e comparativos.</li>
                <li>Estabelecimento de <em>baseline</em> de consumo por setor e limites de alerta customizados.</li>
              </ol>
              <p className="mt-4">
                O ganho não é apenas técnico. Setorização gera responsabilidade: quando cada
                gerente vê o consumo da sua área em tempo real, o combate ao desperdício deixa de
                ser abstrato. Empresas com bons programas de setorização reduzem entre 20% e 40%
                do consumo já no primeiro ciclo de doze meses.
              </p>
            </section>

            <section id="metodos">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">7. Métodos práticos de detecção que funcionam</h2>
              <p>
                Nem tudo precisa de tecnologia avançada. Uma boa investigação combina técnicas
                simples com equipamentos especializados, na ordem certa:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Teste de estanqueidade noturno.</strong> Fechar todos os pontos de consumo por 2 horas e observar o giro do hidrômetro. Qualquer movimento indica vazamento.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Setorização por fechamento progressivo.</strong> Isolar zonas para descobrir em qual ramal a perda ocorre.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Geofonamento acústico.</strong> Escuta especializada em tubulações enterradas com equipamentos eletroacústicos.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Correlacionador de vazamentos.</strong> Cruza sinais acústicos entre dois pontos para calcular a distância exata da ruptura.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Câmera termográfica.</strong> Detecta diferença de temperatura em contrapisos, forros e paredes com infiltração.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Gás traçador.</strong> Nitrogênio-hidrogênio injetado no ramal escapa pelo ponto do vazamento e é detectado por sensor de superfície.</span></li>
              </ul>
            </section>

            <section id="custos">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">8. Custos, ROI e recuperação de créditos</h2>
              <p>
                Um dos temores mais comuns dos gestores é o CAPEX. Na prática, o investimento em
                telemetria hídrica é modesto perto do que ele evita:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="p-3 text-left border border-border">Porte</th>
                      <th className="p-3 text-left border border-border">Sensores típicos</th>
                      <th className="p-3 text-left border border-border">CAPEX estimado</th>
                      <th className="p-3 text-left border border-border">Payback</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-border">PME comercial</td>
                      <td className="p-3 border border-border">1 a 3 pontos</td>
                      <td className="p-3 border border-border">R$ 1,5 mil a R$ 5 mil</td>
                      <td className="p-3 border border-border">3 a 8 meses</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Edifício corporativo</td>
                      <td className="p-3 border border-border">5 a 12 pontos</td>
                      <td className="p-3 border border-border">R$ 8 mil a R$ 30 mil</td>
                      <td className="p-3 border border-border">6 a 12 meses</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Indústria média</td>
                      <td className="p-3 border border-border">15 a 40 pontos</td>
                      <td className="p-3 border border-border">R$ 40 mil a R$ 180 mil</td>
                      <td className="p-3 border border-border">6 a 14 meses</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Além da economia direta na conta de água, um ponto pouco explorado é a
                <strong> recuperação de valores pagos indevidamente</strong>. Quando o vazamento é
                comprovado tecnicamente e reparado, é possível pleitear revisão retroativa da
                fatura com base no consumo médio histórico — mecanismo integrado ao serviço de{" "}
                <Link to="/revisao-tarifaria-de-agua/" className="text-primary underline">Revisão Tarifária e RCI-A</Link>.
                Em auditorias combinadas, é comum ver empresas recuperarem entre R$ 8 mil e R$ 150 mil
                em créditos que, do contrário, teriam ficado com a concessionária.
              </p>
            </section>

            <section id="erros">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">9. Erros comuns na detecção de vazamentos</h2>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Confiar apenas na leitura mensal da concessionária, sem histórico próprio de consumo horário.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Substituir hidrômetros sem antes calibrar o existente — muitas vezes o problema é o instrumento, não o consumo.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Fazer geofonamento antes da setorização — sem isolar zonas, o ruído de fundo mascara o sinal.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Ignorar o reservatório superior: extravasão silenciosa é a origem invisível mais frequente em prédios comerciais.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Não documentar tecnicamente o reparo, impedindo o pleito de revisão de fatura junto à concessionária.</span></li>
              </ul>
              <div className="glass-card p-6 rounded-xl border-l-4 border-primary my-6">
                <div className="flex gap-3">
                  <Info className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Boa prática</p>
                    <p className="text-sm text-muted-foreground">
                      Adote a política de <em>“leitura antes, leitura depois”</em>: registre com
                      fotos, vídeos e planilhas o consumo horário nos 15 dias anteriores e nos 15
                      dias posteriores ao reparo. Esse dossiê acelera a análise da concessionária e
                      aumenta significativamente a taxa de aceite do pedido de restituição.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CONCLUSÃO */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">Conclusão: enxergar o invisível é o primeiro passo para economizar</h2>
              <p>
                Vazamento oculto não desaparece sozinho — ele apenas cresce até virar prejuízo
                grande demais para ignorar. Com sensores IoT bem posicionados, uma rede setorizada
                em DMAs e uma rotina disciplinada de análise de consumo mínimo noturno, qualquer
                empresa consegue transformar perdas silenciosas em economia mensurável, previsível
                e recorrente.
              </p>
              <p>
                E, mais importante, essa mesma disciplina alimenta indicadores ESG (GRI 303),
                fortalece o compliance junto à concessionária e cria um <em>track record</em>
                técnico que agiliza a recuperação de valores pagos indevidamente. Investir em
                detecção é investir em ativo, não em custo.
              </p>
              <div className="glass-card p-8 rounded-2xl text-center mt-6">
                <h3 className="text-2xl font-bold mb-3">Sua empresa perde água sem saber?</h3>
                <p className="text-muted-foreground mb-6">
                  Solicite um diagnóstico gratuito e receba um relatório com consumo mínimo noturno,
                  potenciais vazamentos ocultos e projeção de economia.
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
              <h2 className="text-3xl font-bold text-foreground mt-8 mb-6">10. Perguntas frequentes sobre vazamentos ocultos</h2>
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
                  telemetria com mais de uma década de experiência em detecção de perdas,
                  monitoramento IoT e auditoria de faturas de concessionárias em todo o Brasil.
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
                Descubra em 48h onde a sua empresa está perdendo água.
              </p>
              <Link to="/contato/" className="btn-aqua w-full text-center block">Solicitar agora</Link>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-3">Categorias</h3>
              <div className="flex flex-wrap gap-2">
                {["IoT", "Perdas", "Setorização", "RCI-A", "Auditoria", "Sustentabilidade"].map((c) => (
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

export default DeteccaoVazamentosOcultos;
