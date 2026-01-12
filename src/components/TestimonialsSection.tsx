import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Mendes",
    role: "Diretor de Operações",
    company: "Indústria Metalúrgica ABC",
    content: "A AcquaFlux transformou nossa gestão hídrica. Reduzimos 35% do consumo e economizamos mais de R$200 mil no primeiro ano.",
    rating: 5,
  },
  {
    name: "Marina Santos",
    role: "Gerente de Sustentabilidade",
    company: "Grupo Varejo Premium",
    content: "O monitoramento em tempo real nos deu visibilidade total. Identificamos vazamentos que passavam despercebidos há anos.",
    rating: 5,
  },
  {
    name: "Roberto Almeida",
    role: "CEO",
    company: "LogTech Transportes",
    content: "Além da economia, a certificação ESG facilitada pela AcquaFlux nos abriu portas para novos contratos internacionais.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Nossos <span className="gradient-text">Clientes</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Histórias reais de empresas que transformaram sua gestão hídrica com a AcquaFlux.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="glass-card p-8 group hover:scale-[1.02] transition-all duration-500 relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground font-bold">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
