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
import Picture from "@/components/Picture";
import capa from "@/assets/auditoria-contas-agua-capa.jpg?picture";
import analise from "@/assets/auditoria-contas-agua-analise.jpg?picture";

const WHATS_URL =
  "https://wa.me/5512981408992?text=Ol%C3%A1!%20Quero%20uma%20auditoria%20nas%20contas%20de%20%C3%A1gua%20da%20minha%20empresa%20com%20a%20AcquaFlux.";

const AuditoriaContasAgua = () => {
  const faqs = [
    {
      q: "O que é uma auditoria de contas de água empresarial?",
      a: "É um processo técnico de conferência sistemática das faturas emitidas pela concessionária de saneamento. Envolve verificação de leitura, categoria tarifária, dimensionamento do hidrômetro, aplicação de esgoto, tributos, subsídios cruzados e histórico de consumo. O objetivo é identificar cobranças indevidas, erros de enquadramento e oportunidades de renegociação — antes de partir para o pedido formal de restituição.",
    },
    {
      q: "Qual a diferença entre auditoria de conta de água e revisão tarifária?",
      a: "A auditoria é o diagnóstico: mapeia inconsistências, quantifica valores em disputa e produz o dossiê técnico. A revisão tarifária (RCI-A) é a etapa jurídica e administrativa seguinte, quando esse dossiê é protocolado junto à concessionária ou ao Judiciário para reaver os valores. Uma boa auditoria é a fundação técnica de qualquer processo de restituição bem-sucedido.",
    },
    {
      q: "Quanto tempo de fatura posso auditar retroativamente?",
      a: "O Código Civil brasileiro (art. 206, §3º, IV) e o Código de Defesa do Consumidor sustentam o direito de repetição de indébito em até 10 anos, quando comprovada a cobrança indevida. Na prática, a AcquaFlux costuma auditar entre 36 e 120 meses de faturas, dependendo do porte, da qualidade documental disponível e do prazo prescricional aplicável à concessionária local.",
    },
    {
      q: "Quais são os erros tarifários mais comuns identificados em auditoria?",
      a: "Os campeões são: enquadramento em categoria comercial quando a atividade é industrial (ou vice-versa), cobrança de esgoto sobre volumes que nunca chegaram à rede (irrigação, torres de resfriamento, reuso), aplicação de tarifa mínima superior à contratada, faturamento por estimativa em vez de leitura real por longos períodos, e não aplicação do desconto de vazamento previsto em regulamento.",
    },
    {
      q: "É possível auditar uma conta de água sem parar as operações da empresa?",
      a: "Sim. A auditoria documental é feita 100% remotamente com base nas faturas dos últimos anos (PDFs ou originais). Só entra em campo se o diagnóstico apontar necessidade de inspeção do hidrômetro, leitura paralela ou aferição pelo IPEM. Nesses casos, os testes são agendados fora do horário comercial e não interrompem a produção.",
    },
    {
      q: "Quanto custa auditar as contas de água da minha empresa?",
      a: "A maior parte dos escritórios especializados — incluindo a AcquaFlux — trabalha em modelo de êxito, sem CAPEX inicial. A remuneração é um percentual dos valores efetivamente recuperados ou economizados. Se a auditoria não gera resultado, não há cobrança. Isso alinha o interesse do cliente e do prestador e viabiliza o projeto mesmo para PMEs.",
    },
    {
      q: "Uma auditoria pode reduzir a fatura futura, não apenas recuperar valores passados?",
      a: "Sim, e esse costuma ser o ganho mais duradouro. Ao ajustar categoria tarifária, faixas de consumo, contrato de demanda e forma de cobrança do esgoto, a auditoria reduz o valor das faturas seguintes de forma permanente. Em muitos casos, essa economia recorrente supera o valor da restituição retroativa em apenas dois ou três anos.",
    },
    {
      q: "A concessionária pode se recusar a ajustar a cobrança após a auditoria?",
      a: "Pode, mas raramente sustenta a recusa quando o dossiê técnico é robusto. Quando há resistência, o caminho é o pedido de revisão formal junto ao órgão regulador (ARSAE, ARSESP, AGERGS, AESA e demais) e, em última instância, a ação judicial de repetição de indébito. A jurisprudência do STJ é amplamente favorável ao consumidor quando há prova de cobrança indevida.",
    },
    {
      q: "Auditoria de contas de água serve para empresas com contrato de demanda contratada?",
      a: "Sim, e é ainda mais crítica nesse cenário. Contratos de demanda contratada em água (comuns em indústrias e grandes consumidores) frequentemente ficam desalinhados com o consumo real após alterações de processo. Uma auditoria detecta subutilização ou excesso de contratação e recomenda repactuação, gerando economia imediata de 10% a 30%.",
    },
    {
      q: "Que documentos preciso separar para começar uma auditoria de conta de água?",
      a: "O básico: faturas dos últimos 24 a 60 meses, contrato de fornecimento com a concessionária, plantas hidráulicas atualizadas, nota fiscal do último hidrômetro instalado, licença ambiental (se houver captação própria) e histórico de manutenções na rede interna. Com esses documentos, uma auditoria preliminar já entrega o primeiro diagnóstico em 5 a 10 dias úteis.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Auditoria de Contas de Água: como identificar cobranças indevidas na fatura empresarial",
        description:
          "Guia técnico completo sobre auditoria de contas de água em empresas: método, principais erros tarifários, base legal e como transformar diagnóstico em restituição.",
        image: {
          "@type": "ImageObject",
          url: "https://acquaflux.com/og/auditoria-contas-agua-capa.jpg",
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
        datePublished: "2026-07-10",
        dateModified: "2026-07-10",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://acquaflux.com/auditoria-contas-de-agua-empresas/",
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
            name: "Auditoria de Contas de Água",
            item: "https://acquaflux.com/auditoria-contas-de-agua-empresas/",
          },
        ],
      },
    ],
  };

  const relatedPosts = [
    { href: "/revisao-tarifaria-de-agua", title: "Revisão tarifária de água: como recuperar créditos (RCI-A)", tag: "RCI-A" },
    { href: "/medicao-setorizada-de-agua", title: "Medição setorizada: reduza até 40% do consumo", tag: "Engenharia" },
    { href: "/deteccao-vazamentos-ocultos-empresas", title: "Detecção de vazamentos ocultos: IoT e setorização", tag: "IoT" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Auditoria de Contas de Água: Como Achar Cobranças Indevidas"
        description="Aprenda o método técnico de auditoria de contas de água empresariais: erros tarifários mais comuns, base legal, prazos e como transformar diagnóstico em restituição."
        canonical="/auditoria-contas-de-agua-empresas/"
        keywords="auditoria de contas de água, auditoria fatura de água, auditoria conta de água empresa, cobrança indevida água, revisão fatura água, erro tarifário água, enquadramento tarifário concessionária, esgoto cobrado a mais, categoria tarifária água empresa, análise fatura saneamento, repetição indébito água, restituição valores pagos água"
        image="/og/auditoria-contas-agua-capa.jpg"
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
              <li className="text-foreground">Auditoria de Contas de Água</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Tag className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">Auditoria · Fatura · Cobranças Indevidas</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Auditoria de contas de água: como identificar cobranças indevidas na fatura da sua empresa
          </h1>

          <p className="text-lg text-muted-foreground mb-6">
            Aproximadamente três em cada dez faturas comerciais e industriais no Brasil carregam
            algum tipo de erro tarifário — enquadramento equivocado, esgoto sobre volume que nunca
            escoou, leitura por estimativa. Este guia mostra o método técnico para achar essas
            distorções, corrigir a fatura futura e preparar o dossiê para restituição.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><User className="w-4 h-4" /> Equipe Técnica AcquaFlux</div>
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 10 de julho de 2026</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 13 min de leitura</div>
          </div>
        </div>
      </section>

      {/* COVER */}
      <figure className="container mx-auto px-6 max-w-5xl mb-12">
        <Picture
          image={capa}
          alt="Fatura de água impressa sobre mesa de escritório com lupa, calculadora e laptop exibindo planilha analítica em auditoria financeira"
          width={1536}
          height={864}
          className="w-full rounded-2xl shadow-2xl"
          fetchPriority="high"
          decoding="async"
        />
        <figcaption className="text-sm text-muted-foreground mt-3 text-center">
          Auditoria documental de faturas: o primeiro passo para transformar reclamação em
          restituição comprovada.
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
                <li><a href="#o-que-e" className="hover:text-primary">1. O que é auditoria de conta de água</a></li>
                <li><a href="#por-que" className="hover:text-primary">2. Por que sua fatura pode estar errada</a></li>
                <li><a href="#anatomia" className="hover:text-primary">3. Anatomia da fatura</a></li>
                <li><a href="#erros" className="hover:text-primary">4. Erros tarifários mais comuns</a></li>
                <li><a href="#metodo" className="hover:text-primary">5. Método de auditoria em 7 etapas</a></li>
                <li><a href="#base-legal" className="hover:text-primary">6. Base legal e prazos</a></li>
                <li><a href="#cases" className="hover:text-primary">7. Cases reais e ordens de grandeza</a></li>
                <li><a href="#quando-vale" className="hover:text-primary">8. Quando vale contratar auditoria</a></li>
                <li><a href="#faq" className="hover:text-primary">9. Perguntas frequentes</a></li>
              </ol>
            </div>

            <section id="introducao">
              <p>
                Poucas contas empresariais recebem tão pouca atenção quanto a de água. Enquanto os
                setores financeiros conferem centavo a centavo as faturas de energia,
                telecomunicações e combustível, a conta de saneamento costuma ser aprovada no
                automático, ano após ano — muitas vezes por décadas — sem que ninguém confira se o
                que está sendo cobrado corresponde ao que a empresa efetivamente consome.
              </p>
              <p>
                O problema é que a tarifa de água é uma das mais complexas do país. Cada
                concessionária tem seu próprio regulamento, sua própria estrutura de categorias
                (comercial, industrial, pública, mista), suas próprias regras de esgoto e seus
                próprios critérios de faturamento por estimativa. Um enquadramento equivocado
                feito há dez anos, quando a empresa começou a operar, pode ainda hoje estar
                inflando a fatura em 30% ou 40% — silenciosamente.
              </p>
              <p>
                A auditoria de contas de água é o processo técnico que remove esse ruído. Neste
                guia, apresentamos o método usado pela AcquaFlux em auditorias de faturas
                empresariais em todo o Brasil: como ler a estrutura da fatura, quais erros
                tarifários procurar primeiro, quais são os prazos legais para restituição e como
                converter o diagnóstico em economia recorrente. Se você quer ir direto ao
                mecanismo jurídico de recuperação de valores pagos, complemente este material com
                nosso guia sobre{" "}
                <Link to="/revisao-tarifaria-de-agua/" className="text-primary underline">revisão tarifária de água e RCI-A</Link>.
              </p>
            </section>

            <section id="o-que-e">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">1. O que é auditoria de contas de água</h2>
              <p>
                Auditoria de contas de água é a análise sistemática, retrospectiva e prospectiva
                das faturas emitidas pela concessionária de saneamento contra uma unidade
                consumidora. Diferente da simples conferência mensal (que checa se o valor bateu
                com a leitura), a auditoria olha para o modelo tarifário como um todo:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Retrospectiva</strong> — reconstitui o histórico das faturas anteriores, identifica erros passados e quantifica valores pagos indevidamente.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Corrente</strong> — verifica se a fatura atual está tecnicamente correta segundo o regulamento vigente.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Prospectiva</strong> — projeta o efeito de ajustes (reenquadramento, exclusão de esgoto, revisão de demanda) sobre as faturas futuras.</span></li>
              </ul>
              <p>
                Na prática, é um trabalho híbrido de engenharia hídrica, direito regulatório e
                controladoria. O produto final é um dossiê técnico com valores em disputa,
                fundamentação normativa e recomendação de ação — que pode ser desde uma simples
                carta administrativa até uma ação judicial de repetição de indébito.
              </p>
            </section>

            <section id="por-que">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">2. Por que sua fatura provavelmente tem erros</h2>
              <p>
                O regulamento tarifário de uma concessionária de saneamento típica ocupa dezenas
                de páginas. Ele cruza variáveis de categoria de uso, faixa de consumo,
                sazonalidade, demanda contratada, tributos, subsídios cruzados e regras
                específicas de esgoto (proporcional, ausente, com desconto, com percentual).
                Manter todo esse arcabouço sincronizado com a realidade operacional de uma
                empresa é humanamente inviável — e é por isso que os erros se acumulam.
              </p>
              <p>
                Segundo dados do{" "}
                <a
                  href="https://www.gov.br/mdr/pt-br/assuntos/saneamento/snis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Sistema Nacional de Informações sobre Saneamento (SNIS)
                </a>
                , mais de 37% da água distribuída no Brasil se perde antes de chegar ao consumidor
                — o que dá margem a leituras inconsistentes, aferições mal calibradas e cobranças
                por estimativa. No lado do usuário empresarial, as auditorias realizadas pela
                AcquaFlux nos últimos anos revelam padrão semelhante: cerca de 30% das faturas
                comerciais e industriais analisadas contêm ao menos um erro tarifário material.
              </p>
              <div className="glass-card p-6 rounded-xl border-l-4 border-primary my-6">
                <div className="flex gap-3">
                  <Info className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Ponto-chave</p>
                    <p className="text-sm text-muted-foreground">
                      Nenhuma concessionária audita, por conta própria, a favor do consumidor. A
                      revisão só acontece se a empresa provocar — com dado técnico, não com
                      reclamação genérica.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="anatomia">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">3. Anatomia de uma fatura de água comercial</h2>
              <p>
                Antes de auditar, é preciso saber o que se está olhando. Uma fatura empresarial
                típica traz oito blocos que precisam ser conferidos individualmente:
              </p>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="p-3 text-left border border-border">Bloco</th>
                      <th className="p-3 text-left border border-border">O que verificar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-border">Cadastro</td>
                      <td className="p-3 border border-border">Razão social, endereço, matrícula, CNAE e categoria tarifária</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Hidrômetro</td>
                      <td className="p-3 border border-border">Número, dimensional, ano de instalação e vazão nominal</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Leitura</td>
                      <td className="p-3 border border-border">Data, valor anterior e atual, tipo (real, estimada, faturada)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Consumo faturado</td>
                      <td className="p-3 border border-border">Volume em m³, faixas aplicadas e progressividade</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Tarifa de água</td>
                      <td className="p-3 border border-border">Valor unitário, subsídios, tarifa mínima, sazonalidade</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Cobrança de esgoto</td>
                      <td className="p-3 border border-border">Percentual sobre água, isenções, coleta declarada</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Encargos e tributos</td>
                      <td className="p-3 border border-border">COFINS, PIS, ICMS quando aplicável, taxas regulatórias</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Histórico</td>
                      <td className="p-3 border border-border">Média de consumo dos últimos 12 meses e variações</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                Cada linha desta tabela é uma porta de entrada para erro. Reenquadramentos
                incorretos costumam surgir no bloco Cadastro; falhas de hidrômetro no bloco
                Leitura; cobranças de esgoto abusivas no bloco Esgoto — e assim por diante.
              </p>
            </section>

            <section id="erros">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">4. Os sete erros tarifários mais comuns</h2>

              <figure className="my-8">
                <Picture
                  image={analise}
                  alt="Analista financeira de terno azul-marinho conferindo várias faturas de água impressas com marca-texto amarelo em mesa de reunião ao lado de laptop com dashboard financeiro"
                  width={1536}
                  height={864}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-2xl shadow-xl"
                />
                <figcaption className="text-sm text-muted-foreground mt-3 text-center">
                  Cruzamento entre faturas históricas e dashboard analítico: onde nascem os
                  achados de auditoria.
                </figcaption>
              </figure>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">4.1 Enquadramento em categoria errada</h3>
              <p>
                Uma indústria enquadrada como comercial (ou vice-versa) pode pagar tarifa
                significativamente maior. O mesmo vale para atividades mistas — restaurantes
                dentro de fábricas, laboratórios em hospitais, escritórios em condomínios
                industriais — que exigem enquadramento múltiplo raramente aplicado.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">4.2 Cobrança de esgoto sobre água que não vai ao esgoto</h3>
              <p>
                Torres de resfriamento, jardins irrigados, sistemas de reuso, lava-jatos com
                reaproveitamento e processos industriais que incorporam a água ao produto final
                não geram esgoto. Ainda assim, a fatura típica cobra 100% desse volume como se
                fosse coleta e tratamento — um dos maiores geradores de restituição.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">4.3 Faturamento por estimativa prolongado</h3>
              <p>
                Quando o leiturista não consegue acessar o hidrômetro, a concessionária fatura
                por média. Se essa estimativa se repete por vários meses e a média está
                superavaliada, o cliente paga adiantado — e frequentemente esse adiantamento não
                é compensado adequadamente na regularização.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">4.4 Hidrômetro descalibrado ou superdimensionado</h3>
              <p>
                Hidrômetros com mais de 5 anos de uso costumam registrar consumo acima do real.
                Já hidrômetros superdimensionados para a vazão típica da empresa distorcem
                leituras em faixas baixas. Ambos os casos rendem restituição quando comprovados
                por aferição no IPEM ou por medição paralela.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">4.5 Progressividade aplicada incorretamente</h3>
              <p>
                Muitas concessionárias cobram por faixas progressivas de consumo. Quando a
                empresa opera múltiplas unidades ou possui hidrômetros individualizados, a soma
                dessas faixas costuma ser feita de forma equivocada, empurrando a fatura para a
                última faixa injustificadamente.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">4.6 Desconto por vazamento não aplicado</h3>
              <p>
                A maioria dos regulamentos prevê desconto tarifário quando o cliente comprova
                vazamento oculto, seguido de conserto. Esse desconto raramente é solicitado —
                seja por desconhecimento, seja pela burocracia envolvida. Uma auditoria
                bem-feita recupera essas oportunidades dos últimos 5 anos.
              </p>

              <h3 className="text-2xl font-semibold text-foreground mt-6 mb-3">4.7 Cobrança de serviços não prestados</h3>
              <p>
                Taxa de esgoto onde não existe rede coletora, taxa de manutenção de hidrômetro
                inexistente, adicional de coleta em áreas fora do perímetro atendido. Todas
                situações comuns em municípios com expansão desorganizada da rede de saneamento.
              </p>
            </section>

            <section id="metodo">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">5. O método de auditoria em 7 etapas</h2>

              <div className="space-y-4">
                <div className="glass-card p-5 rounded-xl">
                  <p className="font-semibold text-primary mb-1">Etapa 1 — Coleta documental</p>
                  <p className="text-sm">
                    Reunião das faturas dos últimos 24 a 60 meses, contrato de fornecimento,
                    licenças, plantas hidráulicas e histórico de manutenções.
                  </p>
                </div>
                <div className="glass-card p-5 rounded-xl">
                  <p className="font-semibold text-primary mb-1">Etapa 2 — Digitalização e parametrização</p>
                  <p className="text-sm">
                    Extração automatizada dos dados de cada fatura para uma base analítica única.
                    Sem isso, comparar 60 faturas manualmente é inviável.
                  </p>
                </div>
                <div className="glass-card p-5 rounded-xl">
                  <p className="font-semibold text-primary mb-1">Etapa 3 — Aderência regulatória</p>
                  <p className="text-sm">
                    Confronto de cada fatura contra o regulamento tarifário vigente à época,
                    obtido junto ao órgão regulador estadual (ARSAE-MG, ARSESP-SP, AGERGS-RS,
                    AESA-PB e demais).
                  </p>
                </div>
                <div className="glass-card p-5 rounded-xl">
                  <p className="font-semibold text-primary mb-1">Etapa 4 — Diagnóstico técnico</p>
                  <p className="text-sm">
                    Aplicação da matriz de erros tarifários e produção da lista de achados,
                    valorados individualmente por competência.
                  </p>
                </div>
                <div className="glass-card p-5 rounded-xl">
                  <p className="font-semibold text-primary mb-1">Etapa 5 — Confirmação em campo</p>
                  <p className="text-sm">
                    Quando necessário: inspeção do hidrômetro, teste de estanqueidade, medição
                    paralela com clamp-on ultrassônico ou aferição no IPEM.
                  </p>
                </div>
                <div className="glass-card p-5 rounded-xl">
                  <p className="font-semibold text-primary mb-1">Etapa 6 — Dossiê e recomendação</p>
                  <p className="text-sm">
                    Consolidação dos achados em relatório técnico, com fundamentação normativa,
                    quantificação de valores e recomendação de ação (administrativa ou judicial).
                  </p>
                </div>
                <div className="glass-card p-5 rounded-xl">
                  <p className="font-semibold text-primary mb-1">Etapa 7 — Ação e acompanhamento</p>
                  <p className="text-sm">
                    Protocolo junto à concessionária, negociação, ajuste da fatura futura e, se
                    for o caso, condução da restituição por meio do serviço{" "}
                    <Link to="/revisao-tarifaria-de-agua/" className="text-primary underline">RCI-A</Link>.
                  </p>
                </div>
              </div>
            </section>

            <section id="base-legal">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">6. Base legal, prazos e prescrição</h2>
              <p>
                A auditoria não é um pedido de favor à concessionária — é o exercício de um
                direito. O consumidor empresarial se apoia em três pilares normativos:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Código de Defesa do Consumidor</strong> (Lei 8.078/1990, art. 42, parágrafo único), que garante restituição em dobro do valor cobrado a maior, salvo engano justificável.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Código Civil</strong> (art. 206, §3º, IV), que fixa prescrição de 3 anos para pretensão de repetição de indébito relativa a prestações periódicas — teto ampliado para 10 anos em algumas interpretações jurisprudenciais quando reconhecida obrigação continuativa.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Lei do Saneamento</strong> (Lei 11.445/2007 e alterações da Lei 14.026/2020), que determina transparência tarifária, direito à informação e revisão periódica dos contratos.</span></li>
              </ul>
              <p className="mt-4">
                A regulação técnica é exercida pela{" "}
                <a
                  href="https://www.gov.br/ana/pt-br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  Agência Nacional de Águas e Saneamento Básico (ANA)
                </a>{" "}
                em nível federal e pelas agências reguladoras estaduais em nível local. Para
                aprofundar o rito jurídico, consulte também as normas da{" "}
                <a
                  href="https://www.abnt.org.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline"
                >
                  ABNT (NBR 5626 e complementares)
                </a>{" "}
                que orientam o dimensionamento e a instalação de hidrômetros — base técnica
                frequente das disputas.
              </p>
            </section>

            <section id="cases">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">7. Cases reais e ordens de grandeza</h2>
              <p>
                Sem entregar identidades, alguns padrões observados em auditorias recentes:
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="p-3 text-left border border-border">Perfil</th>
                      <th className="p-3 text-left border border-border">Achado principal</th>
                      <th className="p-3 text-left border border-border">Impacto anual</th>
                      <th className="p-3 text-left border border-border">Restituição</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-border">Indústria alimentícia — PB</td>
                      <td className="p-3 border border-border">Esgoto cobrado sobre água incorporada ao produto</td>
                      <td className="p-3 border border-border">R$ 84 mil/ano</td>
                      <td className="p-3 border border-border">R$ 310 mil (5 anos)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Hospital privado — SP</td>
                      <td className="p-3 border border-border">Enquadramento comercial em vez de hospitalar</td>
                      <td className="p-3 border border-border">R$ 120 mil/ano</td>
                      <td className="p-3 border border-border">R$ 380 mil (3 anos)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Shopping — MG</td>
                      <td className="p-3 border border-border">Hidrômetro superdimensionado + estimativas</td>
                      <td className="p-3 border border-border">R$ 46 mil/ano</td>
                      <td className="p-3 border border-border">R$ 170 mil (4 anos)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Condomínio logístico — RS</td>
                      <td className="p-3 border border-border">Progressividade aplicada por unidade e não por consumidor</td>
                      <td className="p-3 border border-border">R$ 65 mil/ano</td>
                      <td className="p-3 border border-border">R$ 240 mil (4 anos)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Em todos os casos, a economia recorrente na fatura futura ampliou o retorno do
                projeto muito além do valor restituído — e sustentou a repactuação de metas ESG
                (indicador GRI 303-3).
              </p>
            </section>

            <section id="quando-vale">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">8. Quando vale contratar uma auditoria</h2>
              <p>
                O critério prático adotado pela AcquaFlux é o valor da fatura mensal média:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Acima de R$ 5 mil/mês</strong> — auditoria completa quase sempre se paga, com forte probabilidade de restituição significativa.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Entre R$ 1,5 mil e R$ 5 mil/mês</strong> — vale ao menos uma auditoria preliminar (5 a 10 dias, sem custo em modelo de êxito).</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Abaixo de R$ 1,5 mil/mês</strong> — o melhor caminho é combinar a auditoria com um projeto de{" "}
                  <Link to="/medicao-setorizada-de-agua/" className="text-primary underline">medição setorizada</Link>{" "}
                  ou{" "}
                  <Link to="/deteccao-vazamentos-ocultos-empresas/" className="text-primary underline">detecção de vazamentos ocultos</Link>{" "}
                  para justificar o esforço técnico.</span></li>
              </ul>
              <div className="glass-card p-6 rounded-xl border-l-4 border-yellow-500 my-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Sinal de alerta</p>
                    <p className="text-sm text-muted-foreground">
                      Aumento súbito de 30% ou mais na fatura sem alteração operacional, três
                      leituras seguidas por estimativa, ou fatura acima da média de empresas
                      similares no mesmo bairro são sinais claros de que a auditoria precisa
                      acontecer agora, não no próximo trimestre.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* CONCLUSÃO */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">Conclusão: pagar menos começa por conferir</h2>
              <p>
                A conta de água é o único insumo essencial da operação em que a maioria das
                empresas nunca conferiu se está sendo cobrada corretamente. Enquanto isso,
                cobranças indevidas se acumulam mês após mês, distorcem indicadores de
                sustentabilidade e comprometem margens que poderiam ser reinvestidas no negócio.
              </p>
              <p>
                A boa notícia é que auditar tornou-se cada vez mais acessível: com modelos
                comerciais baseados em êxito, digitalização automática de faturas e uma
                jurisprudência favorável, o consumidor empresarial tem hoje todas as ferramentas
                para transformar erros passados em restituição e ajustar a fatura para o
                patamar tecnicamente correto — sem CAPEX, sem risco.
              </p>
              <div className="glass-card p-8 rounded-2xl text-center mt-6">
                <h3 className="text-2xl font-bold mb-3">Quer auditar as contas de água da sua empresa?</h3>
                <p className="text-muted-foreground mb-6">
                  Envie 12 meses de faturas e receba, em até 10 dias úteis, uma auditoria
                  preliminar gratuita com estimativa de restituição e economia recorrente.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link to="/contato/" className="btn-aqua">Solicitar auditoria</Link>
                  <a href={WHATS_URL} target="_blank" rel="noopener noreferrer" className="btn-outline">
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-3xl font-bold text-foreground mt-8 mb-6">9. Perguntas frequentes sobre auditoria de contas de água</h2>
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
                Fontes: <a href="https://www.gov.br/ana/pt-br" target="_blank" rel="noopener noreferrer" className="text-primary underline">ANA — Agência Nacional de Águas e Saneamento Básico</a>,{" "}
                <a href="https://www.gov.br/mdr/pt-br/assuntos/saneamento/snis" target="_blank" rel="noopener noreferrer" className="text-primary underline">SNIS</a>,{" "}
                <a href="https://www.abnt.org.br/" target="_blank" rel="noopener noreferrer" className="text-primary underline">ABNT</a>, Lei 11.445/2007, Lei 14.026/2020 e Código de Defesa do Consumidor.
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
                  Time multidisciplinar de engenheiros hídricos, contadores especializados em
                  saneamento e advogados regulatórios com mais de uma década conduzindo
                  auditorias tarifárias e processos de recuperação de créditos junto às
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
              <h3 className="text-lg font-bold mb-2">Auditoria preliminar gratuita</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Receba em até 10 dias úteis o diagnóstico das suas faturas — sem CAPEX, sem risco.
              </p>
              <Link to="/contato/" className="btn-aqua w-full text-center block">Solicitar agora</Link>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-3">Categorias</h3>
              <div className="flex flex-wrap gap-2">
                {["Auditoria", "Fatura", "RCI-A", "Concessionária", "Compliance", "Restituição"].map((c) => (
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

export default AuditoriaContasAgua;
