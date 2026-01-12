import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImpactSection from "@/components/ImpactSection";
import SolutionsSection from "@/components/SolutionsSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ImpactSection />
      <SolutionsSection />
      <AboutSection />
      <CTASection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
