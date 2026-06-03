import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar, Clock, User, Sparkles, TrendingUp, Droplets, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

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

      {/* Featured Article Placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-primary to-accent" />
                <span className="text-primary font-semibold text-sm uppercase tracking-wider">Artigos em Destaque</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                Conteúdo que <span className="gradient-text">Transforma</span>
              </h2>
            </div>
          </div>

          {/* Featured Card Placeholder */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl opacity-50 blur group-hover:opacity-75 transition duration-500" />
            <div className="relative bg-card rounded-3xl overflow-hidden border border-border/50">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Placeholder */}
                <div className="relative h-64 lg:h-[450px] bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMGE5ZTAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
                  <div className="text-center z-10">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-2xl">
                      <Sparkles className="w-12 h-12 text-white" />
                    </div>
                    <p className="text-muted-foreground font-medium">Artigo em Destaque</p>
                    <p className="text-sm text-muted-foreground mt-1">Em breve</p>
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute top-6 left-6 w-20 h-20 border border-primary/20 rounded-full" />
                  <div className="absolute bottom-10 right-10 w-32 h-32 border border-accent/20 rounded-full" />
                </div>
                
                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider border border-primary/20">
                      Em Breve
                    </span>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>2026</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-heading font-bold text-foreground mb-4 leading-tight">
                    Artigos Exclusivos Sobre Gestão Hídrica Chegando em Breve
                  </h3>
                  
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Estamos preparando conteúdo exclusivo sobre inovação em gestão hídrica, 
                    sustentabilidade empresarial e as últimas tendências do setor. 
                    Fique atento para atualizações!
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4" />
                      <span>5 min de leitura</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <User className="w-4 h-4" />
                      <span>Equipe AcquaFlux</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid Placeholder */}
      <section className="py-20 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Últimas Publicações</span>
              <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Explore Nosso <span className="gradient-text">Conteúdo</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative">
                {/* Glow Effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-accent/50 rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />
                
                <div className="relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-primary/30 transition-all duration-500 h-full">
                  {/* Image Placeholder */}
                  <div className="relative h-52 bg-gradient-to-br from-muted via-muted/50 to-muted flex items-center justify-center overflow-hidden">
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
                      <div className="absolute top-4 right-4 w-16 h-16 border border-primary/10 rounded-full" />
                      <div className="absolute bottom-4 left-4 w-12 h-12 border border-accent/10 rounded-lg rotate-12" />
                    </div>
                    
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mb-3 border border-primary/20">
                        <Droplets className="w-8 h-8 text-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground">Em breve</span>
                    </div>
                    
                    {/* Category Tag */}
                    <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/90 dark:bg-card/90 backdrop-blur-sm text-xs font-semibold text-foreground border border-border/50">
                      Categoria
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>2026</span>
                      </div>
                      <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        <span>5 min</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-heading font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      Título do Artigo em Breve
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-5 line-clamp-2">
                      Descrição breve do artigo que será publicado em breve. 
                      Fique atento para mais novidades!
                    </p>
                    
                    {/* Read More Link */}
                    <div className="flex items-center gap-2 text-primary font-semibold text-sm group/link">
                      <span>Ler Artigo</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            <Link to="/contato" className="btn-aqua whitespace-nowrap flex items-center gap-2">
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
