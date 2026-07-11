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
import capa from "@/assets/outorga-uso-agua-capa.jpg?picture";
import campo from "@/assets/outorga-uso-agua-campo.jpg?picture";

const WHATS_URL =
  "https://wa.me/5512981408992?text=Ol%C3%A1!%20Quero%20orienta%C3%A7%C3%A3o%20sobre%20outorga%20de%20uso%20da%20%C3%A1gua%20para%20minha%20empresa.";

const OutorgaUsoAgua = () => {
  const faqs = [
    {
      q: "O que é outorga de uso da água e por que minha empresa precisa dela?",
      a: "Outorga é o ato administrativo pelo qual o poder público — ANA em rios federais e órgãos estaduais em rios de domínio estadual — autoriza uma empresa a captar água de um manancial (rio, poço ou reservatório) ou a lançar efluentes na rede hidrográfica. Sem outorga, a captação é considerada irregular e sujeita a multas, embargo da atividade e responsabilização criminal por crime ambiental.",
    },
    {
      q: "Toda empresa que usa água precisa de outorga?",
      a: "Não. Empresas conectadas à rede da concessionária de saneamento e sem fonte alternativa (poço, captação superficial ou reuso classificado) estão dispensadas. A outorga se aplica quando existe captação própria acima do volume dispensado por resolução do órgão gestor — que varia por estado, tipicamente entre 3.000 e 10.000 litros por dia.",
    },
    {
      q: "Qual a diferença entre outorga e licenciamento ambiental?",
      a: "São autorizações complementares. O licenciamento ambiental (LP, LI, LO), emitido pelo órgão ambiental estadual ou pelo IBAMA, autoriza a atividade em si. A outorga, emitida pela ANA ou pelo órgão estadual gestor de recursos hídricos, autoriza especificamente o uso da água. Uma empresa pode ter licença ambiental válida e mesmo assim operar irregularmente por falta de outorga.",
    },
    {
      q: "Quanto tempo demora para conseguir uma outorga?",
      a: "Na ANA, o prazo médio publicado é de 60 a 180 dias após a protocolização completa do processo. Nos estados, varia bastante: entre 90 e 270 dias, com maior agilidade quando a solicitação é acompanhada de estudo hidrogeológico consistente, sem pendências documentais e sem sobreposição com outras outorgas na mesma bacia.",
    },
    {
      q: "O que é dispensa de outorga e como funciona?",
      a: "Usos considerados insignificantes por resolução do órgão gestor são dispensados de outorga formal, mas exigem cadastro obrigatório. O limite varia: no âmbito federal (ANA), a Resolução 1.699/2022 define parâmetros; nos estados, resoluções específicas fixam volumes próprios. Mesmo sob dispensa, o cadastro no CNARH (Cadastro Nacional de Usuários de Recursos Hídricos) é obrigatório.",
    },
    {
      q: "Qual a validade da outorga e como funciona a renovação?",
      a: "A outorga tem prazo definido, tipicamente de 5 a 35 anos, dependendo do órgão emissor, tipo de uso e volume solicitado. A renovação deve ser protocolada com antecedência mínima de 90 a 120 dias antes do vencimento, com apresentação de relatórios de acompanhamento e comprovação de que os volumes efetivamente utilizados correspondem aos outorgados.",
    },
    {
      q: "É preciso pagar pela outorga? Como funciona a cobrança pelo uso da água?",
      a: "A emissão da outorga em si costuma ser gratuita ou envolver taxa simbólica. O que existe é a cobrança pelo uso da água em bacias com cobrança instituída (Paraíba do Sul, PCJ, Doce, São Francisco, entre outras). Os valores são definidos pelos Comitês de Bacia e homologados pela ANA ou pelo órgão estadual, e financiam projetos de recuperação da própria bacia.",
    },
    {
      q: "Quais são as penalidades por operar sem outorga?",
      a: "As sanções incluem: multa de R$ 100 a R$ 10.000 (Lei 9.433/1997, art. 50), suspensão ou embargo da atividade, obrigação de reparar dano ambiental, e — em caso de dano relevante — enquadramento como crime ambiental (Lei 9.605/1998) com pena de 1 a 4 anos. As multas podem ser diárias enquanto persistir a irregularidade.",
    },
    {
      q: "Poços artesianos precisam obrigatoriamente de outorga?",
      a: "Sim, na quase totalidade dos casos. Águas subterrâneas são bens de domínio estadual (exceto em áreas específicas), e sua captação exige outorga pelo órgão gestor estadual, além de licenciamento junto ao órgão ambiental. Cadastro no CNARH e monitoramento do nível do poço costumam ser condicionantes obrigatórias.",
    },
    {
      q: "Como a outorga se relaciona com a certificação ESG da empresa?",
      a: "Regularidade de outorga é pré-requisito para praticamente todos os frameworks ESG relevantes: GRI 303, CDP Water Security, SASB e ISO 14001. Ausência de outorga válida ou histórico de multas contamina auditorias, impede acesso a crédito verde (green loans), inviabiliza selos como B Corp e é frequentemente motivo de rebaixamento em ratings ESG independentes.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "Outorga de Uso da Água: guia completo de conformidade regulatória para empresas",
        description:
          "Como conseguir outorga de uso da água na ANA e nos órgãos estaduais: quem precisa, documentos, prazos, custos, penalidades e integração com licenciamento ambiental e ESG.",
        image: {
          "@type": "ImageObject",
          url: "https://acquaflux.com/og/outorga-uso-agua-capa.jpg",
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
          "@id": "https://acquaflux.com/outorga-uso-da-agua-empresas/",
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
            name: "Outorga de Uso da Água",
            item: "https://acquaflux.com/outorga-uso-da-agua-empresas/",
          },
        ],
      },
    ],
  };

  const relatedPosts = [
    { href: "/consultoria-esg", title: "Consultoria ESG: compliance ambiental e reporte hídrico", tag: "ESG" },
    { href: "/pegada-hidrica-empresarial", title: "Pegada hídrica empresarial: ISO 14046 e GRI 303", tag: "Sustentabilidade" },
    { href: "/monitoramento-iot", title: "Monitoramento IoT hídrico: sensores em tempo real", tag: "Tecnologia" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Outorga de Uso da Água: Guia Completo para Empresas 2026"
        description="Como conseguir outorga de uso da água na ANA e nos órgãos estaduais: quem precisa, documentos, prazos, custos, penalidades e integração com licenciamento ambiental."
        canonical="/outorga-uso-da-agua-empresas/"
        keywords="outorga de uso da água, outorga ANA, outorga água poço artesiano, outorga captação superficial, outorga uso recursos hídricos, licenciamento ambiental água, CNARH, cobrança pelo uso da água, Lei 9433, Política Nacional de Recursos Hídricos, dispensa de outorga, renovação outorga, outorga preventiva, conformidade regulatória água"
        image="/og/outorga-uso-agua-capa.jpg"
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
              <li className="text-foreground">Outorga de Uso da Água</li>
            </ol>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Tag className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">Conformidade · ANA · Órgãos Estaduais</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Outorga de uso da água: o guia completo de conformidade regulatória para empresas brasileiras
          </h1>

          <p className="text-lg text-muted-foreground mb-6">
            Captar água de um rio, de um poço ou lançar efluente na rede hidrográfica sem outorga
            é operar em regime de irregularidade — mesmo quando a atividade principal tem licença
            ambiental em dia. Este guia mostra como obter, manter e renovar sua outorga, com base
            na Lei 9.433/1997 e nas resoluções da ANA e dos órgãos estaduais.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2"><User className="w-4 h-4" /> Equipe Técnica AcquaFlux</div>
            <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 10 de julho de 2026</div>
            <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> 14 min de leitura</div>
          </div>
        </div>
      </section>

      {/* COVER */}
      <figure className="container mx-auto px-6 max-w-5xl mb-12">
        <Picture
          image={capa}
          alt="Cabeça de poço artesiano em aço inox com manômetro e painel de controle da bomba submersível em unidade industrial brasileira"
          width={1536}
          height={864}
          className="w-full rounded-2xl shadow-2xl"
          fetchPriority="high"
          decoding="async"
        />
        <figcaption className="text-sm text-muted-foreground mt-3 text-center">
          Cabeça de poço artesiano industrial: uma das captações mais reguladas — e mais
          fiscalizadas — pelos órgãos gestores de recursos hídricos.
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
                <li><a href="#o-que-e" className="hover:text-primary">1. O que é outorga de uso da água</a></li>
                <li><a href="#quem-precisa" className="hover:text-primary">2. Quem precisa (e quem não precisa)</a></li>
                <li><a href="#tipos" className="hover:text-primary">3. Tipos de outorga</a></li>
                <li><a href="#orgaos" className="hover:text-primary">4. ANA vs. órgãos estaduais</a></li>
                <li><a href="#documentos" className="hover:text-primary">5. Documentação necessária</a></li>
                <li><a href="#passo-a-passo" className="hover:text-primary">6. Passo a passo do processo</a></li>
                <li><a href="#cobranca" className="hover:text-primary">7. Cobrança pelo uso da água</a></li>
                <li><a href="#penalidades" className="hover:text-primary">8. Penalidades por irregularidade</a></li>
                <li><a href="#esg" className="hover:text-primary">9. Outorga e ESG</a></li>
                <li><a href="#faq" className="hover:text-primary">10. Perguntas frequentes</a></li>
              </ol>
            </div>

            <section id="introducao">
              <p>
                A água doce, no Brasil, não é bem de quem a capta — é bem de uso comum do povo,
                conforme a Constituição Federal e a Lei 9.433/1997 (Política Nacional de Recursos
                Hídricos). Isso significa que nenhuma empresa, propriedade rural ou indústria pode
                simplesmente perfurar um poço, jogar bomba num rio ou lançar efluente em corpo
                hídrico sem uma autorização formal do poder público. Essa autorização se chama
                <strong> outorga de direito de uso de recursos hídricos</strong>.
              </p>
              <p>
                Na prática, contudo, a outorga continua sendo um dos temas mais subestimados da
                gestão empresarial brasileira. Não é raro encontrar indústrias operando há
                décadas com um poço não outorgado, hotéis captando água de nascentes sem
                cadastro, ou condomínios logísticos usando poço para irrigação sem qualquer
                registro. Enquanto a fiscalização não chega, o custo parece zero — quando chega,
                pode custar embargo, multa pesada e até responsabilização criminal.
              </p>
              <p>
                Este guia foi escrito para gestores, engenheiros ambientais e responsáveis pela
                sustentabilidade corporativa que precisam entender rapidamente como funciona o
                regime de outorga no Brasil, quem emite, como se pede, quais os prazos e como
                integrar essa autorização à estratégia ESG da empresa. Para aprofundar o
                acompanhamento de consumo, combine este material com nosso guia de{" "}
                <Link to="/monitoramento-iot/" className="text-primary underline">monitoramento IoT hídrico</Link>{" "}
                e nossa análise sobre{" "}
                <Link to="/pegada-hidrica-empresarial/" className="text-primary underline">pegada hídrica empresarial</Link>.
              </p>
            </section>

            <section id="o-que-e">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">1. O que é outorga de uso da água</h2>
              <p>
                A outorga é o instrumento previsto no art. 5º, III, da Lei 9.433/1997 pelo qual o
                órgão gestor de recursos hídricos autoriza um usuário — pessoa física ou
                jurídica, pública ou privada — a fazer uso de determinada quantidade de água por
                prazo definido, em condição específica de captação, lançamento ou intervenção em
                corpo hídrico.
              </p>
              <p>
                O documento é uma <strong>autorização, não uma concessão</strong>. Isso quer dizer
                que ela não transfere titularidade da água (que permanece pública), pode ser
                revista, suspensa ou revogada em situações de escassez, e não gera direito
                adquirido em caso de reestruturação da bacia hidrográfica.
              </p>
              <p>
                O objetivo do instrumento é triplo: garantir controle quantitativo (quanto é
                retirado), qualitativo (o que é devolvido) e planejar o uso múltiplo dos
                recursos hídricos entre agricultura, indústria, abastecimento humano, geração
                de energia e conservação ambiental.
              </p>
            </section>

            <section id="quem-precisa">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">2. Quem precisa (e quem não precisa) de outorga</h2>
              <p>
                Precisam de outorga formal os usos que se enquadrem em pelo menos uma das
                seguintes categorias:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Derivação ou captação em corpo hídrico superficial (rio, lago, nascente) para consumo final ou insumo de processo produtivo.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Extração de água subterrânea por meio de poços tubulares (artesianos) ou cacimbas.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Lançamento de efluentes tratados em corpos hídricos, ainda que dentro dos parâmetros da Resolução CONAMA 430/2011.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Aproveitamento hidrelétrico, mesmo de pequenas centrais (PCHs e CGHs).</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Obras hidráulicas que interfiram no regime, quantidade ou qualidade das águas (barragens, canais, retificação de curso).</span></li>
              </ul>

              <p className="mt-4">
                Estão <strong>dispensados de outorga</strong> — mas não do cadastro no CNARH —
                usos considerados insignificantes conforme resolução do órgão gestor competente
                (tipicamente até 3.000 a 10.000 litros por dia, variando por estado), o uso
                para satisfação de necessidades de pequenos núcleos populacionais em meio rural
                e as acumulações de volume dispensado.
              </p>
              <div className="glass-card p-6 rounded-xl border-l-4 border-primary my-6">
                <div className="flex gap-3">
                  <Info className="w-6 h-6 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Cuidado com o mito</p>
                    <p className="text-sm text-muted-foreground">
                      "Meu poço é pequeno, então não preciso de outorga" é a frase mais perigosa
                      da gestão hídrica corporativa. Mesmo abaixo do volume dispensado, o cadastro
                      é obrigatório — e a fiscalização começa exatamente pela ausência de
                      registro.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="tipos">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">3. Tipos de outorga</h2>

              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="p-3 text-left border border-border">Tipo</th>
                      <th className="p-3 text-left border border-border">Finalidade</th>
                      <th className="p-3 text-left border border-border">Quando aplicar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-border">Outorga preventiva</td>
                      <td className="p-3 border border-border">Reservar disponibilidade hídrica</td>
                      <td className="p-3 border border-border">Antes do investimento, durante estudo de viabilidade</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Outorga de direito de uso</td>
                      <td className="p-3 border border-border">Autorizar a captação, lançamento ou intervenção</td>
                      <td className="p-3 border border-border">Antes de iniciar a operação</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Certidão de dispensa</td>
                      <td className="p-3 border border-border">Formalizar que o uso está abaixo do limite</td>
                      <td className="p-3 border border-border">Usos considerados insignificantes</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Autorização temporária</td>
                      <td className="p-3 border border-border">Obras, testes, campanhas emergenciais</td>
                      <td className="p-3 border border-border">Uso pontual com prazo máximo definido</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                A escolha do tipo tem impacto direto no cronograma do investimento: a outorga
                preventiva pode ser solicitada muito antes da instalação e é decisiva em
                projetos greenfield, quando o empreendedor precisa saber se a disponibilidade
                hídrica sustenta o negócio antes de comprar o terreno.
              </p>
            </section>

            <section id="orgaos">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">4. Quem emite: ANA ou órgão estadual?</h2>

              <figure className="my-8">
                <Picture
                  image={campo}
                  alt="Engenheiro ambiental brasileiro com capacete amarelo medindo vazão em ponto de captação industrial na margem de rio com vegetação tropical"
                  width={1536}
                  height={864}
                  loading="lazy"
                  decoding="async"
                  className="w-full rounded-2xl shadow-xl"
                />
                <figcaption className="text-sm text-muted-foreground mt-3 text-center">
                  Aferição de vazão em ponto de captação superficial: prova de disponibilidade
                  hídrica é elemento central do processo de outorga.
                </figcaption>
              </figure>

              <p>
                A competência para outorgar depende do <strong>domínio da água</strong>. A regra
                geral é:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Águas de domínio da União</strong> (rios que atravessam mais de um estado ou fazem fronteira internacional): outorga emitida pela{" "}
                  <a href="https://www.gov.br/ana/pt-br" target="_blank" rel="noopener noreferrer" className="text-primary underline">Agência Nacional de Águas e Saneamento Básico (ANA)</a>.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Águas de domínio dos estados</strong> (rios inteiramente estaduais e águas subterrâneas): outorga emitida pelo órgão gestor estadual — INEA/RJ, IGAM/MG, DAEE/SP, SEMARH/GO, AESA/PB, IGARN/RN e correlatos.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Situações de rios fronteiriços</strong>: costumam envolver ambos os órgãos, com anuência cruzada.</span></li>
              </ul>

              <p>
                Existe cadastro nacional unificado (CNARH — Cadastro Nacional de Usuários de
                Recursos Hídricos), operado pela ANA, no qual todos os usuários — outorgados ou
                dispensados — devem se registrar. Esse cadastro alimenta o Sistema Nacional de
                Informações sobre Recursos Hídricos (SNIRH) e é a base para as decisões dos
                Comitês de Bacia Hidrográfica.
              </p>
            </section>

            <section id="documentos">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">5. Documentação típica de um pedido</h2>
              <p>
                Cada órgão tem seu formulário próprio, mas o núcleo documental é convergente.
                Prepare, no mínimo:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Requerimento padrão preenchido, com identificação do requerente e coordenadas geográficas do ponto de captação/lançamento (SIRGAS 2000).</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Comprovação de propriedade ou posse do imóvel (matrícula, contrato de arrendamento, escritura).</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Estudo hidrogeológico (poços) ou hidrológico (captação superficial) assinado por profissional habilitado com ART.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Projeto técnico da captação: descrição de bombas, tubulações, reservatórios e sistema de medição de vazão.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Plano de monitoramento e relatórios periódicos de vazão utilizada.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Licença ambiental prévia (LP) ou de operação (LO), quando aplicável.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span>Comprovante de pagamento das taxas do processo, se previstas na resolução local.</span></li>
              </ul>
            </section>

            <section id="passo-a-passo">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">6. Passo a passo do processo</h2>
              <div className="space-y-4">
                <div className="glass-card p-5 rounded-xl">
                  <p className="font-semibold text-primary mb-1">Etapa 1 — Diagnóstico prévio</p>
                  <p className="text-sm">Verificar o domínio da água, checar o CNARH e identificar o órgão emissor competente.</p>
                </div>
                <div className="glass-card p-5 rounded-xl">
                  <p className="font-semibold text-primary mb-1">Etapa 2 — Estudos técnicos</p>
                  <p className="text-sm">Contratar profissional habilitado para estudo hidrogeológico ou hidrológico, com ART registrada no CREA.</p>
                </div>
                <div className="glass-card p-5 rounded-xl">
                  <p className="font-semibold text-primary mb-1">Etapa 3 — Protocolo do requerimento</p>
                  <p className="text-sm">Submissão online (na maioria dos estados) com upload dos documentos e pagamento de taxas.</p>
                </div>
                <div className="glass-card p-5 rounded-xl">
                  <p className="font-semibold text-primary mb-1">Etapa 4 — Análise técnica</p>
                  <p className="text-sm">O órgão avalia disponibilidade hídrica, sobreposição com outros usuários e impacto ambiental.</p>
                </div>
                <div className="glass-card p-5 rounded-xl">
                  <p className="font-semibold text-primary mb-1">Etapa 5 — Publicação e emissão</p>
                  <p className="text-sm">Publicação em Diário Oficial e emissão da portaria de outorga com condicionantes.</p>
                </div>
                <div className="glass-card p-5 rounded-xl">
                  <p className="font-semibold text-primary mb-1">Etapa 6 — Cumprimento das condicionantes</p>
                  <p className="text-sm">Instalação de medidores de vazão, envio de relatórios periódicos e monitoramento dos parâmetros exigidos.</p>
                </div>
                <div className="glass-card p-5 rounded-xl">
                  <p className="font-semibold text-primary mb-1">Etapa 7 — Renovação</p>
                  <p className="text-sm">Protocolo de renovação com 90 a 120 dias de antecedência ao vencimento, apresentando histórico de uso.</p>
                </div>
              </div>
            </section>

            <section id="cobranca">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">7. Cobrança pelo uso da água</h2>
              <p>
                A cobrança pelo uso da água é instrumento previsto no art. 5º, IV, da Lei
                9.433/1997 e está implementada em bacias específicas do país. Os valores são
                deliberados pelos <strong>Comitês de Bacia Hidrográfica</strong> e homologados
                pela ANA (bacias federais) ou pelos órgãos estaduais.
              </p>
              <div className="overflow-x-auto my-6">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-primary/10">
                      <th className="p-3 text-left border border-border">Bacia</th>
                      <th className="p-3 text-left border border-border">Status da cobrança</th>
                      <th className="p-3 text-left border border-border">Ordem de grandeza (captação industrial)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="p-3 border border-border">Paraíba do Sul</td>
                      <td className="p-3 border border-border">Vigente desde 2003</td>
                      <td className="p-3 border border-border">R$ 0,03 a R$ 0,04/m³</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">PCJ (Piracicaba, Capivari e Jundiaí)</td>
                      <td className="p-3 border border-border">Vigente desde 2006</td>
                      <td className="p-3 border border-border">R$ 0,03/m³</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">São Francisco</td>
                      <td className="p-3 border border-border">Vigente desde 2010</td>
                      <td className="p-3 border border-border">R$ 0,02/m³</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Doce</td>
                      <td className="p-3 border border-border">Vigente desde 2011</td>
                      <td className="p-3 border border-border">R$ 0,03/m³</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-border">Demais bacias federais</td>
                      <td className="p-3 border border-border">Em fase de implementação</td>
                      <td className="p-3 border border-border">A definir</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Os recursos arrecadados retornam à própria bacia, financiando projetos de
                despoluição, saneamento, monitoramento e recuperação de matas ciliares — sob
                gestão da agência de bacia respectiva.
              </p>
            </section>

            <section id="penalidades">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">8. Penalidades por operar sem outorga</h2>
              <p>
                A operação sem outorga configura infração administrativa e, dependendo do dano,
                crime ambiental. As sanções previstas:
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Advertência</strong> por escrito, com prazo para regularização.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Multa</strong> de R$ 100 a R$ 10.000, podendo ser diária enquanto persistir a irregularidade (Lei 9.433/1997, art. 50).</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Embargo</strong> da obra ou atividade e obrigação de reparação de dano ambiental.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Enquadramento penal</strong> (Lei 9.605/1998, art. 60 e 61), com pena de 1 a 4 anos de detenção quando comprovado dano ambiental relevante.</span></li>
                <li className="flex gap-3"><CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" /><span><strong>Rescisão de contratos públicos</strong>, perda de incentivos fiscais e impedimento de participação em licitações que exijam regularidade ambiental.</span></li>
              </ul>
              <div className="glass-card p-6 rounded-xl border-l-4 border-yellow-500 my-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Regularização retroativa</p>
                    <p className="text-sm text-muted-foreground">
                      A maioria dos órgãos permite regularização de captações preexistentes sem
                      penalização integral, desde que o usuário procure espontaneamente e
                      apresente plano de adequação. A janela política costuma ser curta —
                      quando a fiscalização inicia procedimento próprio, essa possibilidade se
                      encerra.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="esg">
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">9. Outorga como pilar da estratégia ESG</h2>
              <p>
                Nos últimos cinco anos, a regularidade de outorga migrou do campo puramente
                jurídico para o núcleo da agenda ESG corporativa. Três razões explicam esse
                movimento:
              </p>
              <ol className="space-y-3 list-decimal pl-6">
                <li>
                  <strong>Reporte GRI 303 e CDP Water Security</strong> — ambos os frameworks
                  exigem declaração de volumes captados por fonte e por tipo de licença, com
                  auditoria independente.
                </li>
                <li>
                  <strong>Green loans e sustainability-linked loans</strong> — bancos e fundos
                  passaram a incluir cláusulas de regularidade hídrica em contratos de crédito,
                  com multas em caso de descumprimento.
                </li>
                <li>
                  <strong>Rating ESG</strong> — MSCI, Sustainalytics e ISS incluem histórico de
                  multas ambientais e outorgas irregulares como fator negativo automático.
                </li>
              </ol>
              <p>
                Empresas que estruturam uma matriz de outorgas ativa — com painel de vencimentos,
                relatórios periódicos e integração com{" "}
                <Link to="/monitoramento-iot/" className="text-primary underline">monitoramento IoT</Link>{" "}
                dos volumes captados — transformam obrigação em vantagem competitiva. É
                exatamente essa integração que a{" "}
                <Link to="/consultoria-esg/" className="text-primary underline">consultoria ESG da AcquaFlux</Link>{" "}
                estrutura para clientes industriais e comerciais.
              </p>
            </section>

            {/* CONCLUSÃO */}
            <section>
              <h2 className="text-3xl font-bold text-foreground mt-4 mb-4">Conclusão: outorga é ativo, não papel</h2>
              <p>
                Enquanto muitas empresas veem a outorga como um documento burocrático a ser
                obtido e esquecido, as organizações mais maduras a tratam como ativo estratégico
                — parte da matriz de risco, do plano de investimento e do relatório de
                sustentabilidade. Essa mudança de mentalidade é o que separa o compliance
                reativo do <em>water stewardship</em> proativo.
              </p>
              <p>
                O caminho é claro: mapear todos os pontos de captação e lançamento, verificar a
                regularidade documental de cada um, protocolar as pendências, instituir
                monitoramento contínuo de vazão e criar um painel de vencimentos com alertas
                automáticos. Feito uma vez, o processo se retroalimenta e blinda a empresa
                contra fiscalização, riscos jurídicos e perdas reputacionais.
              </p>
              <div className="glass-card p-8 rounded-2xl text-center mt-6">
                <h3 className="text-2xl font-bold mb-3">Precisa regularizar a outorga da sua empresa?</h3>
                <p className="text-muted-foreground mb-6">
                  Fazemos o diagnóstico do seu portfólio de captações e lançamentos, indicamos as
                  pendências e conduzimos o processo junto à ANA e aos órgãos estaduais.
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
              <h2 className="text-3xl font-bold text-foreground mt-8 mb-6">10. Perguntas frequentes sobre outorga de uso da água</h2>
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
                Fontes normativas: Lei 9.433/1997 (Política Nacional de Recursos Hídricos), Lei
                9.605/1998 (Crimes Ambientais),{" "}
                <a href="https://www.gov.br/ana/pt-br" target="_blank" rel="noopener noreferrer" className="text-primary underline">ANA — Agência Nacional de Águas e Saneamento Básico</a>,
                Resoluções CONAMA 357/2005 e 430/2011 e regulamentos estaduais dos respectivos
                órgãos gestores.
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
                  Engenheiros ambientais, hidrogeólogos e advogados regulatórios com atuação
                  consolidada em pedidos de outorga, renovação, regularização e defesa
                  administrativa perante a ANA e todos os principais órgãos estaduais de
                  recursos hídricos do Brasil.
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
              <h3 className="text-lg font-bold mb-2">Diagnóstico de outorga</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Descubra em 48h se suas captações estão regulares e o que fazer para blindar a operação.
              </p>
              <Link to="/contato/" className="btn-aqua w-full text-center block">Solicitar agora</Link>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold mb-3">Categorias</h3>
              <div className="flex flex-wrap gap-2">
                {["Outorga", "ANA", "Compliance", "ESG", "Poço Artesiano", "Licenciamento"].map((c) => (
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

export default OutorgaUsoAgua;
