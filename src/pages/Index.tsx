import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImpactSection from "@/components/ImpactSection";
import SolutionsSection from "@/components/SolutionsSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogHighlights from "@/components/BlogHighlights";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "AcquaFlux - Gestão Hídrica Inteligente",
    "description": "Soluções completas de gestão hídrica para empresas. Reduza até 70% no consumo de água com tecnologia IoT e consultoria ESG.",
    "url": "https://acquaflux.com/",
    "mainEntity": {
      "@type": "Service",
      "name": "Gestão Hídrica Empresarial",
      "provider": {
        "@type": "Organization",
        "name": "AcquaFlux"
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="AcquaFlux | Gestão Hídrica e Economia de Água"
        description="Soluções completas de gestão hídrica para empresas. Reduza até 70% no consumo de água com tecnologia IoT e consultoria ESG."
        canonical="/"
        keywords="gestão hídrica empresarial, economia de água empresas, sistema SEA, monitoramento IoT água, consultoria ESG hídrica, eficiência hídrica industrial, redução consumo água, sustentabilidade empresarial água"
        structuredData={structuredData}
      />
      <Header />
      <Hero />
      <ImpactSection />
      <SolutionsSection />
      <AboutSection />
      <CTASection />
      <TestimonialsSection />
      <BlogHighlights />
      <Footer />
    </div>
  );
};

export default Index;
