import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, Sparkles } from "lucide-react";
import reusoCapa from "@/assets/reuso-agua-empresas-capa.jpg";
import revisaoCapa from "@/assets/revisao-tarifaria-agua-capa.jpg";

export type BlogPost = {
  href: string;
  title: string;
  excerpt: string;
  cover: string;
  alt: string;
  category: string;
  date: string;
  readMinutes: number;
};

export const featuredPosts: BlogPost[] = [
  {
    href: "/reuso-de-agua-nas-empresas",
    title: "Reuso de Água nas Empresas: Guia Completo com Sistemas, Custos e ROI",
    excerpt:
      "Normas ABNT, tipos de reuso, tecnologias, custos e payback. Descubra como reduzir até 70% da captação e fortalecer o ESG da sua empresa.",
    cover: reusoCapa,
    alt: "Sistema de reuso de água industrial com tanques e tubulações em planta brasileira",
    category: "Sustentabilidade",
    date: "15 Jun 2026",
    readMinutes: 14,
  },
  {
    href: "/revisao-tarifaria-de-agua",
    title: "Revisão Tarifária de Água: Como Recuperar Valores Pagos Indevidamente",
    excerpt:
      "30% das faturas comerciais têm cobranças indevidas. Aprenda o passo a passo do RCI-A para restituir até 10 anos de valores pagos a mais.",
    cover: revisaoCapa,
    alt: "Especialista analisando faturas de água com lupa e calculadora em auditoria tarifária",
    category: "Auditoria & RCI-A",
    date: "15 Jun 2026",
    readMinutes: 15,
  },
];

interface BlogHighlightsProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  compact?: boolean;
}

const BlogHighlights = ({
  title = "Últimos artigos do Blog",
  subtitle = "Conteúdo aprofundado sobre gestão hídrica, reuso, auditoria tarifária e sustentabilidade empresarial.",
  eyebrow = "Blog AcquaFlux",
  compact = false,
}: BlogHighlightsProps) => {
  return (
    <section className={compact ? "py-16" : "py-20"}>
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">{eyebrow}</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            {title}
          </h2>
          <p className="text-muted-foreground">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {featuredPosts.map((post) => (
            <Link
              key={post.href}
              to={post.href}
              className="group relative rounded-2xl overflow-hidden border border-border/50 bg-card hover:border-primary/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={post.cover}
                  alt={post.alt}
                  loading="lazy"
                  width={1536}
                  height={864}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 dark:bg-card/95 backdrop-blur-sm text-xs font-semibold text-foreground border border-border/50">
                  {post.category}
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.date}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readMinutes} min</span>
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                  <span>Ler artigo completo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;
