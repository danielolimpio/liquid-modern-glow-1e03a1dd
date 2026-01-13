import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Shield, 
  Database, 
  Settings, 
  Scale, 
  Users, 
  Globe, 
  Cookie, 
  Share2, 
  Clock, 
  Lock, 
  Baby, 
  UserCheck, 
  Eye, 
  Flag, 
  MapPin, 
  RefreshCw, 
  Mail, 
  FileEdit,
  ChevronRight,
  ArrowUp
} from "lucide-react";

const sections = [
  { id: "informacoes-coletamos", title: "1. Que Informações Coletamos?", icon: Database },
  { id: "como-processamos", title: "2. Como Processamos?", icon: Settings },
  { id: "bases-legais", title: "3. Bases Legais", icon: Scale },
  { id: "compartilhamento", title: "4. Compartilhamento", icon: Users },
  { id: "sites-terceiros", title: "5. Sites de Terceiros", icon: Globe },
  { id: "cookies", title: "6. Cookies e Rastreamento", icon: Cookie },
  { id: "redes-sociais", title: "7. Logins em Redes Sociais", icon: Share2 },
  { id: "retencao", title: "8. Retenção de Dados", icon: Clock },
  { id: "seguranca", title: "9. Segurança", icon: Lock },
  { id: "menores", title: "10. Menores de Idade", icon: Baby },
  { id: "direitos", title: "11. Seus Direitos", icon: UserCheck },
  { id: "nao-rastrear", title: "12. Não Rastrear", icon: Eye },
  { id: "eua", title: "13. Residentes dos EUA", icon: Flag },
  { id: "outras-regioes", title: "14. Outras Regiões", icon: MapPin },
  { id: "atualizacoes", title: "15. Atualizações", icon: RefreshCw },
  { id: "contato", title: "16. Contato", icon: Mail },
  { id: "revisar-dados", title: "17. Revisar Seus Dados", icon: FileEdit },
];

const PoliticaPrivacidade = () => {
  const [activeSection, setActiveSection] = useState("");
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      }));

      for (const section of sectionElements) {
        if (section.element) {
          const rect = section.element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: "smooth"
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-background" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Transparência & Segurança</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Política de Privacidade
              </span>
            </h1>
            
            <p className="text-lg text-muted-foreground mb-4">
              Última atualização: 13 de Janeiro de 2026
            </p>
            
            <div className="glass-card p-6 text-left max-w-3xl mx-auto">
              <p className="text-muted-foreground leading-relaxed">
                Este Aviso de Privacidade para <strong className="text-foreground">AcquaFlux</strong> ("nós", "nos" ou "nosso") 
                descreve como e por que podemos acessar, coletar, armazenar, usar e/ou compartilhar ("processar") suas 
                informações pessoais quando você usa nossos serviços ("Serviços").
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar - Index */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <div className="glass-card p-6 border border-primary/10">
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-primary/10">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Database className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-bold text-lg">Índice</h3>
                  </div>
                  
                  <nav className="space-y-1 max-h-[60vh] overflow-y-auto pr-2 scrollbar-thin">
                    {sections.map((section) => (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left text-sm transition-all duration-300 group ${
                          activeSection === section.id
                            ? "bg-gradient-to-r from-primary/20 to-accent/20 text-primary border-l-2 border-primary"
                            : "hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <section.icon className={`w-4 h-4 flex-shrink-0 transition-colors ${
                          activeSection === section.id ? "text-primary" : "text-muted-foreground group-hover:text-primary"
                        }`} />
                        <span className="line-clamp-1">{section.title}</span>
                        <ChevronRight className={`w-3 h-3 ml-auto transition-transform ${
                          activeSection === section.id ? "translate-x-1 text-primary" : "opacity-0 group-hover:opacity-100"
                        }`} />
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Content */}
            <main className="flex-1 min-w-0">
              {/* Resumo dos Pontos Principais */}
              <div className="glass-card p-8 mb-8 border border-primary/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h2 className="text-2xl font-bold">Resumo dos Pontos Principais</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { q: "Que informações pessoais processamos?", a: "Coletamos apenas dados fornecidos diretamente por você (ex: nome, e-mail corporativo, empresa)." },
                    { q: "Processamos informações sensíveis?", a: "Não. Não coletamos nem processamos dados sensíveis." },
                    { q: "Coletamos informações de terceiros?", a: "Podemos obter dados de fontes públicas ou parceiros comerciais B2B." },
                    { q: "Como processamos suas informações?", a: "Para fornecer serviços, comunicar soluções, garantir segurança e cumprir obrigações legais." },
                    { q: "Com quem compartilhamos?", a: "Com prestadores de serviço essenciais. Nunca vendemos seus dados." },
                    { q: "Como protegemos suas informações?", a: "Implementamos medidas técnicas e organizacionais razoáveis." },
                    { q: "Quais são seus direitos?", a: "Acessar, corrigir, excluir, portabilizar ou limitar o uso dos seus dados." },
                    { q: "Usamos cookies?", a: "Sim, para análise de tráfego, funcionalidade e publicidade personalizada." },
                  ].map((item, index) => (
                    <div key={index} className="p-4 rounded-xl bg-muted/30 border border-primary/5 hover:border-primary/20 transition-colors">
                      <p className="font-semibold text-sm text-primary mb-2">{item.q}</p>
                      <p className="text-sm text-muted-foreground">{item.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Section 1 */}
              <article id="informacoes-coletamos" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Database className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">1. Que Informações Coletamos?</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3 text-primary">Informações que você nos divulga</h3>
                    <p className="text-muted-foreground mb-4">
                      Coletamos informações que você fornece voluntariamente ao interagir conosco, como ao:
                    </p>
                    <ul className="space-y-2 ml-4">
                      {["Solicitar uma proposta ou demonstração", "Inscrever-se em webinars ou conteúdos técnicos", "Entrar em contato via formulário ou e-mail"].map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/10">
                    <h4 className="font-semibold mb-3">Essas informações podem incluir:</h4>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {["Nome completo", "Cargo/função", "Nome da empresa", "E-mail corporativo", "Telefone (opcional)"].map((item, i) => (
                        <span key={i} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/50 text-sm">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-muted/30 border border-muted">
                    <h4 className="font-semibold mb-2 flex items-center gap-2">
                      <Lock className="w-4 h-4 text-primary" />
                      Informações sensíveis
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Não coletamos nem processamos categorias de dados consideradas sensíveis sob a LGPD, GDPR ou outras leis de privacidade.
                    </p>
                  </div>
                </div>
              </article>

              {/* Section 2 */}
              <article id="como-processamos" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">2. Como Processamos Suas Informações?</h2>
                </div>
                
                <p className="text-muted-foreground mb-6">Processamos suas informações para:</p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Prestar e personalizar nossos serviços de gestão hídrica",
                    "Responder a solicitações de propostas e suporte técnico",
                    "Enviar conteúdos relevantes (com opção de descadastro)",
                    "Garantir a segurança dos Serviços e prevenir fraudes",
                    "Cumprir obrigações legais e regulatórias"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-primary/5">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-primary-foreground">{i + 1}</span>
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </article>

              {/* Section 3 */}
              <article id="bases-legais" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Scale className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">3. Em Que Bases Legais Nos Apoiamos?</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: "Consentimento", desc: "Quando você opta por receber materiais, newsletters ou demonstrações." },
                    { title: "Execução de contrato", desc: "Ao solicitar uma proposta ou serviço." },
                    { title: "Interesses legítimos", desc: "Para melhorar nossos produtos, segurança e eficiência operacional." },
                    { title: "Obrigações legais", desc: "Para cumprir exigências fiscais, tributárias ou regulatórias." },
                  ].map((item, i) => (
                    <div key={i} className="p-5 rounded-xl bg-gradient-to-br from-muted/50 to-muted/30 border border-primary/10 hover:border-primary/30 transition-colors">
                      <h4 className="font-semibold text-primary mb-2">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
                
                <p className="mt-6 text-sm text-muted-foreground p-4 rounded-xl bg-muted/20 border border-muted">
                  Se você estiver na UE/EEE/Reino Unido, aplicam-se as bases do GDPR. Se estiver no Brasil, aplicam-se os fundamentos da LGPD (Lei nº 13.709/2018).
                </p>
              </article>

              {/* Section 4 */}
              <article id="compartilhamento" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">4. Quando e Com Quem Compartilhamos?</h2>
                </div>
                
                <div className="space-y-4 mb-6">
                  {[
                    { title: "Prestadores de serviço", desc: "Plataformas de CRM (ex: HubSpot, RD Station), e-mail marketing, hospedagem e analytics." },
                    { title: "Parceiros comerciais", desc: "Apenas com seu consentimento prévio e para fins específicos." },
                    { title: "Operações societárias", desc: "Como fusões, aquisições ou venda de ativos, sempre protegendo a confidencialidade." },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-muted/30 border border-primary/5">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <ChevronRight className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 rounded-xl bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20">
                  <p className="text-sm font-medium text-green-600 dark:text-green-400 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Nunca vendemos, alugamos ou comercializamos suas informações pessoais.
                  </p>
                </div>
              </article>

              {/* Section 5 */}
              <article id="sites-terceiros" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">5. Sites de Terceiros</h2>
                </div>
                
                <p className="text-muted-foreground">
                  Nosso site pode conter links para sites de terceiros (ex: parceiros, clientes, redes sociais). 
                  Não somos responsáveis pelas práticas de privacidade ou conteúdo desses sites. 
                  Recomendamos que você revise as políticas de privacidade de cada um.
                </p>
              </article>

              {/* Section 6 */}
              <article id="cookies" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Cookie className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">6. Cookies e Tecnologias de Rastreamento</h2>
                </div>
                
                <p className="text-muted-foreground mb-6">Usamos cookies, pixels e web beacons para:</p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {[
                    { title: "Análise", desc: "Google Analytics para análise de tráfego" },
                    { title: "Usabilidade", desc: "Melhorar a experiência do site" },
                    { title: "Publicidade", desc: "Personalizar anúncios via redes de display" },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-muted/30 border border-primary/5 text-center">
                      <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
                
                <p className="text-sm text-muted-foreground p-4 rounded-xl bg-muted/20 border border-muted">
                  Você pode gerenciar ou bloquear cookies nas configurações do seu navegador. 
                  Respeitamos o sinal Global Privacy Control (GPC) conforme exigido pela CCPA.
                </p>
              </article>

              {/* Section 7 */}
              <article id="redes-sociais" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Share2 className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">7. Logins em Redes Sociais</h2>
                </div>
                
                <p className="text-muted-foreground">
                  Atualmente, não oferecemos autenticação via redes sociais. 
                  Caso isso mude, atualizaremos esta política com transparência.
                </p>
              </article>

              {/* Section 8 */}
              <article id="retencao" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">8. Por Quanto Tempo Guardamos Suas Informações?</h2>
                </div>
                
                <p className="text-muted-foreground mb-4">Mantemos seus dados pelo tempo necessário para:</p>
                
                <ul className="space-y-2 mb-4">
                  {[
                    "Prestar os serviços solicitados",
                    "Cumprir obrigações legais (ex: 5 anos para fins fiscais)",
                    "Atender a eventuais reclamações ou auditorias"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <p className="text-sm text-muted-foreground p-4 rounded-xl bg-muted/20 border border-muted">
                  Após esse período, excluímos ou anonimizamos seus dados.
                </p>
              </article>

              {/* Section 9 */}
              <article id="seguranca" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Lock className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">9. Como Mantemos Suas Informações Seguras?</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-muted/30 border border-primary/5">
                    <h4 className="font-semibold mb-2">Medidas Técnicas</h4>
                    <p className="text-sm text-muted-foreground">Criptografia, firewalls e proteção de infraestrutura</p>
                  </div>
                  <div className="p-4 rounded-xl bg-muted/30 border border-primary/5">
                    <h4 className="font-semibold mb-2">Medidas Organizacionais</h4>
                    <p className="text-sm text-muted-foreground">Políticas internas e treinamento de equipe</p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  ⚠️ Não podemos garantir segurança absoluta em transmissões pela internet. 
                  Recomendamos que você acesse nossos Serviços apenas em redes seguras.
                </p>
              </article>

              {/* Section 10 */}
              <article id="menores" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Baby className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">10. Coletamos Informações de Menores?</h2>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  <strong className="text-foreground">Não.</strong> Nossos Serviços são voltados exclusivamente a profissionais e empresas. 
                  Não coletamos intencionalmente dados de menores de 18 anos.
                </p>
                
                <p className="text-sm text-muted-foreground p-4 rounded-xl bg-muted/20 border border-muted">
                  Se identificarmos tal coleta acidental, excluiremos os dados imediatamente. 
                  Relate qualquer suspeita para: <a href="mailto:contato@acquaflux.com" className="text-primary hover:underline">contato@acquaflux.com</a>
                </p>
              </article>

              {/* Section 11 */}
              <article id="direitos" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <UserCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">11. Quais São Seus Direitos de Privacidade?</h2>
                </div>
                
                <p className="text-muted-foreground mb-6">Dependendo da sua localização, você pode ter o direito de:</p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                  {[
                    "Acessar seus dados",
                    "Corrigir informações",
                    "Excluir dados",
                    "Portabilidade",
                    "Revogar consentimento",
                    "Opor-se ao processamento"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 rounded-xl bg-muted/30 border border-primary/5">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20">
                  <p className="text-sm">
                    Para exercer esses direitos, envie uma solicitação para: {" "}
                    <a href="mailto:privacidade@acquaflux.com" className="text-primary font-semibold hover:underline">
                      privacidade@acquaflux.com
                    </a>
                    . Responderemos em até 15 dias úteis, conforme exigido pela LGPD.
                  </p>
                </div>
              </article>

              {/* Section 12 */}
              <article id="nao-rastrear" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Eye className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">12. Controles para Não Rastrear</h2>
                </div>
                
                <p className="text-muted-foreground">
                  Atualmente, não respondemos automaticamente a sinais "Do Not Track" (DNT) de navegadores, 
                  pois não há padrão legal unificado. No entanto, respeitamos o <strong className="text-foreground">Global Privacy Control (GPC)</strong> como 
                  mecanismo válido de recusa à venda/compartilhamento de dados nos EUA.
                </p>
              </article>

              {/* Section 13 */}
              <article id="eua" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Flag className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">13. Residentes dos Estados Unidos</h2>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  Se você reside na Califórnia, Colorado, Virginia, Utah, Connecticut ou outros estados com leis de privacidade, tem direito a:
                </p>
                
                <ul className="space-y-2 mb-4">
                  {[
                    "Saber quais categorias de dados coletamos",
                    "Solicitar exclusão",
                    "Optar por não vender/compartilhar dados"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <p className="text-sm text-muted-foreground p-4 rounded-xl bg-muted/20 border border-muted">
                  Conforme tabela de categorias da CCPA, não coletamos dados das categorias A a L nos últimos 12 meses, 
                  exceto Identificadores (Categoria A) — como nome e e-mail — fornecidos diretamente por você.
                </p>
              </article>

              {/* Section 14 */}
              <article id="outras-regioes" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">14. Outras Regiões</h2>
                </div>
                
                <div className="space-y-4">
                  {[
                    { region: "Austrália / Nova Zelândia", desc: "Você pode solicitar acesso ou correção conforme a Privacy Act 1988 (AU) e Privacy Act 2020 (NZ)." },
                    { region: "África do Sul", desc: "Aplicável a POPIA. Contate-nos para exercer seus direitos." },
                    { region: "Canadá", desc: "Sujeito à PIPEDA e leis provinciais. Consentimento é base principal." },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl bg-muted/30 border border-primary/5">
                      <h4 className="font-semibold text-primary mb-1">{item.region}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* Section 15 */}
              <article id="atualizacoes" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <RefreshCw className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">15. Atualizamos Este Aviso?</h2>
                </div>
                
                <p className="text-muted-foreground">
                  Sim. Atualizamos esta política conforme mudanças legais ou operacionais. 
                  A data da última revisão está no topo deste documento. 
                  Alterações substanciais serão notificadas por e-mail ou aviso no site.
                </p>
              </article>

              {/* Section 16 */}
              <article id="contato" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">16. Como Entrar em Contato?</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <a href="mailto:privacidade@acquaflux.com" className="p-4 rounded-xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 transition-colors group">
                    <p className="text-sm text-muted-foreground mb-1">Questões de privacidade</p>
                    <p className="font-semibold text-primary group-hover:underline">privacidade@acquaflux.com</p>
                  </a>
                  <a href="mailto:contato@acquaflux.com" className="p-4 rounded-xl bg-muted/30 border border-primary/5 hover:border-primary/20 transition-colors group">
                    <p className="text-sm text-muted-foreground mb-1">E-mail geral</p>
                    <p className="font-semibold group-hover:text-primary transition-colors">contato@acquaflux.com</p>
                  </a>
                </div>
              </article>

              {/* Section 17 */}
              <article id="revisar-dados" className="glass-card p-8 mb-6 border border-primary/10 scroll-mt-28">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/20">
                    <FileEdit className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">17. Como Revisar, Atualizar ou Excluir Seus Dados?</h2>
                </div>
                
                <p className="text-muted-foreground mb-4">Você pode:</p>
                
                <ul className="space-y-2 mb-6">
                  {[
                    "Clicar no link \"Cancelar inscrição\" em nossos e-mails",
                    "Enviar solicitação formal para privacidade@acquaflux.com",
                    "Preencher nosso formulário de titular (disponível mediante requisição)"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
                
                <p className="text-sm text-muted-foreground">
                  Analisaremos sua solicitação conforme a legislação aplicável e responderemos prontamente.
                </p>
              </article>

              {/* Final Card */}
              <div className="glass-card p-8 border border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-2">AcquaFlux – Gestão Hídrica para Empresas</h3>
                  <p className="text-muted-foreground mb-6">Reduza custos e aumente sua eficiência no consumo de água.</p>
                  <Link 
                    to="/contato" 
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
                  >
                    <Mail className="w-4 h-4" />
                    Fale Conosco
                  </Link>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-110 transition-transform z-50"
          aria-label="Voltar ao topo"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <Footer />
    </div>
  );
};

export default PoliticaPrivacidade;
