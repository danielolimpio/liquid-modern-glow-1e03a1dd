import { Settings, BarChart3, FileCheck, Gauge, Leaf, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const solutions = [
  {
    icon: Settings,
    title: "Operacional",
    description: "Otimização completa do uso de água em processos industriais e comerciais.",
    features: ["Monitoramento 24/7", "Análise de perdas", "Manutenção preventiva"],
  },
  {
    icon: BarChart3,
    title: "Analíticos",
    description: "Dashboards inteligentes com insights em tempo real sobre consumo hídrico.",
    features: ["BI Integrado", "Relatórios automáticos", "Previsão de demanda"],
  },
  {
    icon: FileCheck,
    title: "Financeiros",
    description: "Recuperação de valores e otimização de contas de água e esgoto.",
    features: ["Auditoria de faturas", "Recuperação de créditos", "Gestão de tarifas"],
  },
];

const benefits = [
  { icon: Gauge, label: "Redução de até 40% no consumo" },
  { icon: Leaf, label: "Certificação ESG facilitada" },
  { icon: Shield, label: "Conformidade ambiental garantida" },
];

const SolutionsSection = () => {
  return (
    <section id="solucoes" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Soluções AcquaFlux
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mt-4 mb-6">
              A <span className="gradient-text">tecnologia</span> que sua empresa precisa
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Oferecemos soluções integradas de gestão hídrica que combinam tecnologia 
              de ponta com expertise operacional para maximizar a eficiência e reduzir 
              custos da sua empresa.
            </p>
            <Link to="/solucoes/" className="btn-aqua mt-8 inline-block">
              Conheça Nossas Soluções
            </Link>
          </div>

          <div className="relative">
            <div className="glass-card p-8 float">
              <div className="grid grid-cols-3 gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit.label} className="text-center p-4">
                    <div className="icon-aqua mx-auto mb-3 w-12 h-12">
                      <benefit.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <p className="text-xs text-muted-foreground">{benefit.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Solutions Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div
              key={solution.title}
              className="glass-card p-8 group hover:scale-[1.02] transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-aqua group-hover:animate-pulse-glow">
                  <solution.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold gradient-text">
                  {solution.title}
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>
              <ul className="space-y-3">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-primary to-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 text-sm font-semibold text-primary hover:text-accent transition-colors flex items-center gap-2 group/btn">
                Saiba mais
                <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
