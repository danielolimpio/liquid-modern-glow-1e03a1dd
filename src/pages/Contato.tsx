import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Building2,
  ArrowRight,
  CheckCircle2,
  Linkedin,
  Instagram,
  Youtube,
  Facebook
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    { 
      icon: Phone, 
      title: "Telefone", 
      value: "+55 (12) 98140-8992",
      description: "Segunda a Sexta, 8h às 18h"
    },
    { 
      icon: Mail, 
      title: "E-mail", 
      value: "contato@acquaflux.com.br",
      description: "Resposta em até 24 horas"
    },
    { 
      icon: MapPin, 
      title: "Endereço", 
      value: "São Paulo, SP",
      description: "Av. Paulista, 1000 - Bela Vista"
    },
    { 
      icon: Clock, 
      title: "Horário", 
      value: "Seg - Sex: 8h às 18h",
      description: "Atendimento comercial"
    }
  ];

  const reasons = [
    "Diagnóstico gratuito do seu consumo hídrico",
    "Proposta personalizada sem compromisso",
    "Atendimento especializado em 24 horas",
    "Suporte técnico dedicado"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6">
              <MessageSquare className="w-4 h-4" />
              Fale Conosco
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
              Entre em{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Contato
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Estamos prontos para ajudar sua empresa a economizar água e reduzir custos. 
              Fale com nossos especialistas e descubra como podemos transformar sua gestão hídrica.
            </p>
          </div>
        </div>

        {/* Decorative wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" className="w-full h-20">
            <path 
              d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z" 
              className="fill-background"
            />
          </svg>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Contact Form */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl" />
              <div className="relative bg-gradient-to-br from-background to-muted/30 rounded-3xl p-8 border border-primary/10">
                <div className="mb-8">
                  <h2 className="font-heading text-2xl font-bold mb-2">Envie sua mensagem</h2>
                  <p className="text-muted-foreground">Preencha o formulário e entraremos em contato em breve.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-focus-within:opacity-30 blur transition duration-300" />
                      <input
                        type="text"
                        name="nome"
                        placeholder="Seu nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className="relative w-full px-4 py-3 rounded-xl bg-muted/50 border border-primary/10 focus:border-primary/50 focus:outline-none transition-all duration-300 placeholder:text-muted-foreground/50"
                        required
                      />
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-focus-within:opacity-30 blur transition duration-300" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Seu e-mail"
                        value={formData.email}
                        onChange={handleChange}
                        className="relative w-full px-4 py-3 rounded-xl bg-muted/50 border border-primary/10 focus:border-primary/50 focus:outline-none transition-all duration-300 placeholder:text-muted-foreground/50"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-focus-within:opacity-30 blur transition duration-300" />
                      <input
                        type="tel"
                        name="telefone"
                        placeholder="Telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        className="relative w-full px-4 py-3 rounded-xl bg-muted/50 border border-primary/10 focus:border-primary/50 focus:outline-none transition-all duration-300 placeholder:text-muted-foreground/50"
                      />
                    </div>
                    <div className="relative group">
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-focus-within:opacity-30 blur transition duration-300" />
                      <input
                        type="text"
                        name="empresa"
                        placeholder="Nome da empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className="relative w-full px-4 py-3 rounded-xl bg-muted/50 border border-primary/10 focus:border-primary/50 focus:outline-none transition-all duration-300 placeholder:text-muted-foreground/50"
                      />
                    </div>
                  </div>

                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-focus-within:opacity-30 blur transition duration-300" />
                    <textarea
                      name="mensagem"
                      placeholder="Como podemos ajudar?"
                      rows={5}
                      value={formData.mensagem}
                      onChange={handleChange}
                      className="relative w-full px-4 py-3 rounded-xl bg-muted/50 border border-primary/10 focus:border-primary/50 focus:outline-none transition-all duration-300 placeholder:text-muted-foreground/50 resize-none"
                      required
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2 group"
                  >
                    Enviar Mensagem
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                {/* Why contact us */}
                <div className="mt-8 pt-8 border-t border-primary/10">
                  <p className="text-sm font-semibold text-primary mb-4">Por que entrar em contato?</p>
                  <ul className="space-y-2">
                    {reasons.map((reason, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {reason}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 block">
                  Informações de Contato
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                  Estamos aqui para{" "}
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    ajudar
                  </span>
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nossa equipe de especialistas está pronta para atender você. 
                  Escolha o canal de sua preferência e entre em contato conosco.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid gap-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300" />
                    <div className="relative flex items-start gap-4 p-5 rounded-xl bg-muted/30 border border-primary/10 hover:border-primary/30 transition-all duration-300">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        <p className="text-primary font-medium">{info.value}</p>
                        <p className="text-sm text-muted-foreground">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur opacity-30" />
                <div className="relative p-6 bg-background rounded-2xl border border-primary/20">
                  <h4 className="font-heading font-bold text-lg mb-4">Siga-nos nas redes sociais</h4>
                  <div className="flex gap-4">
                    {[
                      { icon: Linkedin, href: "#", label: "LinkedIn" },
                      { icon: Instagram, href: "#", label: "Instagram" },
                      { icon: Youtube, href: "#", label: "YouTube" },
                      { icon: Facebook, href: "#", label: "Facebook" }
                    ].map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="group/social w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 flex items-center justify-center hover:border-primary/50 transition-all duration-300"
                      >
                        <social.icon className="w-5 h-5 text-primary group-hover/social:scale-110 transition-transform" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Card */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-2xl blur opacity-30" />
                <div className="relative p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Building2 className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-lg">Diagnóstico Gratuito</h4>
                      <p className="text-sm text-muted-foreground">Sem compromisso</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Solicite uma análise completa do consumo hídrico da sua empresa e 
                    descubra o potencial de economia.
                  </p>
                  <button className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2 group">
                    Solicitar Diagnóstico
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 relative overflow-hidden bg-muted/20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold text-primary uppercase tracking-widest mb-4 block">
              Perguntas Frequentes
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Dúvidas{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Comuns
              </span>
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Qual é o prazo para implementação das soluções?",
                answer: "O prazo varia de acordo com a complexidade do projeto, mas geralmente a implementação completa leva de 30 a 90 dias."
              },
              {
                question: "Há necessidade de investimento inicial?",
                answer: "Não! Trabalhamos com o modelo de performance, onde a AcquaFlux só é remunerada com base na economia gerada. Você não precisa fazer investimento inicial."
              },
              {
                question: "Como funciona o monitoramento remoto?",
                answer: "Instalamos sensores inteligentes no seu sistema hidráulico que transmitem dados em tempo real para nossa central de monitoramento 24/7."
              },
              {
                question: "Atendem empresas de qual porte?",
                answer: "Atendemos desde condomínios residenciais até grandes indústrias e redes de varejo. Cada solução é personalizada para o perfil de consumo do cliente."
              }
            ].map((faq, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-xl opacity-0 group-hover:opacity-20 blur transition duration-300" />
                <div className="relative p-6 rounded-xl bg-background border border-primary/10 hover:border-primary/30 transition-all duration-300">
                  <h3 className="font-semibold text-lg mb-2 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center flex-shrink-0 text-xs text-primary-foreground font-bold">
                      {index + 1}
                    </span>
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground pl-9">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contato;
