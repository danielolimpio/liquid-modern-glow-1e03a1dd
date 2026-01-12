import { useEffect, useState, useRef } from "react";
import { TrendingUp, Users, Droplets } from "lucide-react";

const stats = [
  {
    icon: TrendingUp,
    value: 1.32,
    suffix: "B",
    prefix: "+",
    label: "Em economia gerada para clientes",
  },
  {
    icon: Users,
    value: 53,
    suffix: "M",
    prefix: "+",
    label: "Usuários beneficiados anualmente",
  },
  {
    icon: Droplets,
    value: 25,
    suffix: "K",
    prefix: "+",
    label: "Pontos de monitoramento ativos",
  },
];

const ImpactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="impacto" ref={sectionRef} className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Nosso <span className="gradient-text">Impacto</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Resultados comprovados que transformam a gestão hídrica de empresas em todo o Brasil.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`glass-card p-8 text-center group hover:scale-105 transition-all duration-500 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="icon-aqua mx-auto mb-6 group-hover:animate-pulse-glow">
                <stat.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <div className="stat-number mb-2">
                {stat.prefix}
                <CountUp end={stat.value} isVisible={isVisible} />
                {stat.suffix}
              </div>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-gradient rounded-full bg-background">
            <span className="block px-8 py-4 font-semibold text-foreground hover:text-primary transition-colors">
              Ver Relatório Completo →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

const CountUp = ({ end, isVisible }: { end: number; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Number(start.toFixed(2)));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, isVisible]);

  return <span>{count}</span>;
};

export default ImpactSection;
