import { ArrowRight } from "lucide-react";
import heroWaterBg from "@/assets/hero-water-bg.jpg";

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroWaterBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(210,80%,15%)]/80 via-[hsl(200,75%,25%)]/60 to-[hsl(190,80%,35%)]/40" />
      </div>

      {/* Animated Oxygen Bubbles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => {
          const size = 12 + Math.random() * 45;
          const wobble = (Math.random() - 0.5) * 30;
          return (
            <div
              key={i}
              className="bubble"
              style={{
                width: `${size}px`,
                left: `${5 + Math.random() * 90}%`,
                bottom: `${-size}px`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${12 + Math.random() * 12}s`,
                '--wobble': `${wobble}px`,
              } as React.CSSProperties}
            />
          );
        })}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 pt-32">
        <div className="max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in">
            Gestão Hídrica para Empresas:{" "}
            <span className="relative">
              <span className="text-aqua-cyan">REDUZA CUSTOS</span>
            </span>{" "}
            E AUMENTE SUA EFICIÊNCIA
          </h1>
          
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Somos especialistas em gestão hídrica para empresas, ajudando a reduzir custos, 
            aumentar a eficiência e garantir conformidade ambiental.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <a 
              href="https://wa.me/5512981408992?text=Olá! Gostaria de solicitar uma análise gratuita da gestão hídrica da minha empresa."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-aqua flex items-center justify-center gap-2 text-lg"
            >
              Solicitar Análise Gratuita
              <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/5512981408992?text=Olá! Gostaria de saber mais sobre as soluções da AcquaFlux."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-all duration-300"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="wave-divider">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            fill="hsl(var(--background))"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
