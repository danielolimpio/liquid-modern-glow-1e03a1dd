import { Target, Eye, Award, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Quem Somos
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-6">
              Transformando a{" "}
              <span className="gradient-text">gestão hídrica</span> do Brasil
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              A AcquaFlux nasceu com a missão de revolucionar a forma como empresas 
              gerenciam seus recursos hídricos. Com uma equipe de especialistas e 
              tecnologia proprietária, ajudamos organizações a reduzirem custos, 
              aumentarem a eficiência e contribuírem para um futuro mais sustentável.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="icon-aqua shrink-0">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-heading font-bold mb-1">Nossa Missão</h4>
                  <p className="text-sm text-muted-foreground">
                    Democratizar a gestão hídrica eficiente para empresas de todos os portes.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="icon-aqua shrink-0">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-heading font-bold mb-1">Nossa Visão</h4>
                  <p className="text-sm text-muted-foreground">
                    Ser referência global em soluções de gestão hídrica sustentável.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Central circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl animate-pulse-glow">
                  <div className="text-center text-primary-foreground">
                    <p className="text-5xl font-bold font-heading">15+</p>
                    <p className="text-sm opacity-80">Anos de Experiência</p>
                  </div>
                </div>
              </div>

              {/* Orbiting elements */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 glass-card p-4 rounded-2xl float" style={{ animationDelay: "0s" }}>
                <div className="flex items-center gap-3">
                  <Award className="w-6 h-6 text-primary" />
                  <span className="text-sm font-semibold">ISO 14001</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 glass-card p-4 rounded-2xl float" style={{ animationDelay: "1s" }}>
                <div className="flex items-center gap-3">
                  <Users className="w-6 h-6 text-primary" />
                  <span className="text-sm font-semibold">500+ Clientes</span>
                </div>
              </div>

              <div className="absolute left-0 top-1/2 -translate-y-1/2 glass-card p-4 rounded-2xl float" style={{ animationDelay: "0.5s" }}>
                <div className="text-center">
                  <p className="text-2xl font-bold gradient-text">24/7</p>
                  <p className="text-xs text-muted-foreground">Suporte</p>
                </div>
              </div>

              <div className="absolute right-0 top-1/2 -translate-y-1/2 glass-card p-4 rounded-2xl float" style={{ animationDelay: "1.5s" }}>
                <div className="text-center">
                  <p className="text-2xl font-bold gradient-text">99%</p>
                  <p className="text-xs text-muted-foreground">Satisfação</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
