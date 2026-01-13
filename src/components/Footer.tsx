import Logo from "./Logo";
import { Mail, Phone, MapPin, Linkedin, Instagram, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contato" className="bg-[hsl(210,50%,8%)] text-primary-foreground/80 pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-sm leading-relaxed mb-6 text-primary-foreground/60">
              Transformando a gestão hídrica de empresas com tecnologia, 
              expertise e compromisso com a sustentabilidade.
            </p>
            <div className="flex gap-4">
              {[Linkedin, Instagram, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full border border-primary-foreground/20 flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-bold mb-6 text-primary-foreground">Soluções</h4>
            <ul className="space-y-3">
              <li>
                <a href="/gestao-operacional" className="text-sm hover:text-primary transition-colors">
                  Gestão Operacional
                </a>
              </li>
              <li>
                <a href="/analytics-bi" className="text-sm hover:text-primary transition-colors">
                  Analytics & BI
                </a>
              </li>
              <li>
                <a href="/consultoria-esg" className="text-sm hover:text-primary transition-colors">
                  Consultoria ESG
                </a>
              </li>
              <li>
                <a href="/gestao-financeira" className="text-sm hover:text-primary transition-colors">
                  Gestão Financeira
                </a>
              </li>
              <li>
                <a href="/monitoramento-iot" className="text-sm hover:text-primary transition-colors">
                  Monitoramento IoT
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold mb-6 text-primary-foreground">Empresa</h4>
            <ul className="space-y-3">
              <li>
                <a href="/sobre" className="text-sm hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary transition-colors">
                  Carreiras
                </a>
              </li>
              <li>
                <a href="/blog" className="text-sm hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary transition-colors">
                  Cases de Sucesso
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-primary transition-colors">
                  Parceiros
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-6 text-primary-foreground">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">contato@acquaflux.com.br</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">+55 (12) 98140-8992</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm">
                  Av. Julia Freire, 1200 - João Pessoa, PB
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/40">
              © Copyright 2026 | AcquaFlux | Todos os direitos reservados | Desenvolvido por{" "}
              <a 
                href="https://danielolimpio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                DanielOlimpio
              </a>
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-primary-foreground/40 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-sm text-primary-foreground/40 hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
