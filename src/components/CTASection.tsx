import { ArrowRight, Droplets, Phone } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,80%,25%)] via-[hsl(200,75%,35%)] to-[hsl(190,80%,40%)]" />
      
      {/* Animated Oxygen Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const size = 15 + Math.random() * 40;
          const wobble = (Math.random() - 0.5) * 25;
          return (
            <div
              key={i}
              className="bubble"
              style={{
                width: `${size}px`,
                left: `${5 + Math.random() * 90}%`,
                bottom: `${-size}px`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${10 + Math.random() * 10}s`,
                '--wobble': `${wobble}px`,
              } as React.CSSProperties}
            />
          );
        })}
      </div>

      {/* Wave overlay */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20 rotate-180">
          <path
            fill="hsl(var(--background))"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-primary-foreground/20">
            <Droplets className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm text-primary-foreground font-medium">
              Análise gratuita disponível
            </span>
          </div>

          <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
            Busca uma melhor gestão hídrica para sua empresa?
          </h2>

          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Descubra quanto sua empresa pode economizar com nossas soluções de gestão hídrica inteligente.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5512981408992?text=Olá! Gostaria de falar com um especialista da AcquaFlux."
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary-foreground text-foreground px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Fale com um Especialista
            </a>
            <a 
              href="https://wa.me/5512981408992?text=Olá! Gostaria de simular a economia que posso ter com a AcquaFlux."
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-primary-foreground/40 text-primary-foreground px-8 py-4 rounded-full font-semibold hover:bg-primary-foreground/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Simular Economia
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-10 border-t border-primary-foreground/20">
            <p className="text-primary-foreground/60 text-sm mb-6">
              Empresas que confiam na AcquaFlux
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {["Grupo Alfa", "TechCorp", "EcoIndustry", "BioEnergy", "AquaTech"].map((partner) => (
                <span
                  key={partner}
                  className="text-primary-foreground/50 font-heading font-bold text-lg hover:text-primary-foreground transition-colors cursor-default"
                >
                  {partner}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-20">
          <path
            fill="hsl(var(--background))"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default CTASection;
