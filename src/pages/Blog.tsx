import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, Clock, User, Sparkles, TrendingUp, Droplets, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import BlogHighlights, { featuredPosts } from "@/components/BlogHighlights";

const Blog = () => {
  const featuredCategories = [
    { name: "Sustentabilidade", icon: Leaf, color: "from-emerald-400 to-teal-500" },
    { name: "Tecnologia", icon: Sparkles, color: "from-primary to-accent" },
    { name: "Gestão Hídrica", icon: Droplets, color: "from-blue-400 to-cyan-500" },
    { name: "Tendências", icon: TrendingUp, color: "from-violet-400 to-purple-500" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog | Insights sobre Gestão Hídrica e Sustentabilidade"
        description="Explore artigos sobre gestão hídrica, sustentabilidade empresarial, tecnologia IoT e tendências ESG. Conteúdo exclusivo da AcquaFlux."
        canonical="/blog"
        keywords="blog gestão hídrica, artigos sustentabilidade água, notícias IoT hídrico, tendências ESG água, conteúdo economia água, insights AcquaFlux"
      />
      <Header />
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,80%,8%)] via-[hsl(200,70%,15%)] to-[hsl(190,75%,20%)]" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(to right, hsla(190, 80%, 50%, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, hsla(190, 80%, 50%, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-br from-primary/30 to-accent/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-br from-accent/25 to-secondary/15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-primary/10 to-transparent blur-2xl" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 border border-primary/30 bg-primary/10 backdrop-blur-sm">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent animate-pulse" />
              <span className="text-sm font-medium text-primary-foreground/90">Blog AcquaFlux</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight">
              Insights & 
              <span className="block mt-2">
                <span className="relative inline-block">
                  <span className="gradient-text">Inovação</span>
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8" fill="none">
                    <path d="M2 6C50 2 150 2 198 6" stroke="url(#paint0_linear)" strokeWidth="3" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="paint0_linear" x1="2" y1="4" x2="198" y2="4" gradientUnits="userSpaceOnUse">
                        <stop stopColor="hsl(200 85% 50%)" />
                        <stop offset="1" stopColor="hsl(175 80% 55%)" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </span>
            </h1>
            
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Explore as últimas tendências em gestão hídrica, sustentabilidade e tecnologia. 
              Conteúdo exclusivo para transformar sua visão sobre recursos hídricos.
            </p>
            
            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-4">
              {featuredCategories.map((category, index) => (
                <button 
                  key={index}
                  className="group relative flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-500 hover:bg-white/10"
                >
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                    <category.icon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/90 font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path 
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
              fill="hsl(var(--background))"
            />
          </svg>
        </div>
      </section>

      {/* Featured Article — real cover thumbnails */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-primary to-accent" />
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Artigo em Destaque</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Conteúdo que <span className="gradient-text">Transforma</span>
              </h2>
            </div>
          </div>

          <Link
            to={featuredPosts[0].href}
            className="relative group block rounded-3xl overflow-hidden border border-border/50 bg-card hover:border-primary/40 transition-all duration-500 hover:shadow-2xl"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-[450px] overflow-hidden">
                <img
                  src={featuredPosts[0].cover}
                  alt={featuredPosts[0].alt}
                  width={1536}
                  height={864}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/95 dark:bg-card/95 backdrop-blur-sm text-xs font-semibold text-foreground border border-border/50">
                  {featuredPosts[0].category}
                </div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{featuredPosts[0].date}</div>
                  <div className="flex items-center gap-2"><Clock className="w-4 h-4" />{featuredPosts[0].readMinutes} min</div>
                  <div className="flex items-center gap-2"><User className="w-4 h-4" />AcquaFlux</div>
                </div>
                <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                  {featuredPosts[0].title}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {featuredPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <span>Ler artigo completo</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Últimas Publicações — reuses BlogHighlights com miniaturas */}
      <div className="bg-gradient-to-b from-background via-muted/30 to-background">
        <BlogHighlights
          eyebrow="Últimas Publicações"
          title="Explore Nosso Conteúdo"
          subtitle="Guias práticos, cases e análises técnicas sobre gestão hídrica empresarial."
        />
      </div>

      {/* Newsletter Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/10 to-primary/20 rounded-3xl blur-3xl" />
            
            <div className="relative overflow-hidden rounded-3xl border border-primary/20">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(210,80%,12%)] via-[hsl(200,70%,18%)] to-[hsl(190,75%,15%)]" />
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              
              {/* Grid Pattern */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `
                  linear-gradient(to right, hsla(190, 80%, 50%, 0.2) 1px, transparent 1px),
                  linear-gradient(to bottom, hsla(190, 80%, 50%, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px'
              }} />
              
              <div className="relative z-10 py-16 px-8 md:px-16 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 mb-6">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-white/80">Newsletter Exclusiva</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                  Receba Insights Exclusivos
                </h2>
                
                <p className="text-white/60 max-w-xl mx-auto mb-8">
                  Cadastre-se para receber as últimas novidades sobre gestão hídrica, 
                  sustentabilidade e inovação diretamente no seu email.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <div className="relative flex-1">
                    <input 
                      type="email" 
                      placeholder="Seu melhor email" 
                      className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-white/70 focus:outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  <button className="btn-aqua whitespace-nowrap">
                    Inscrever-se
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 p-8 md:p-12 rounded-2xl bg-muted/50 border border-border/50">
            <div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-2">
                Quer saber mais sobre nossas soluções?
              </h3>
              <p className="text-muted-foreground">
                Entre em contato e descubra como podemos transformar sua gestão hídrica.
              </p>
            </div>
            <Link to="/contato/" className="btn-aqua whitespace-nowrap flex items-center gap-2">
              Fale Conosco
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
