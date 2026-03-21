import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductPresentation from "@/components/ProductPresentation";
import SoundsSection from "@/components/SoundsSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection"; // 1. ON AJOUTE L'IMPORT ICI
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      
      {/* Présentation technique (sans le prix) */}
      <ProductPresentation />
      
      <SoundsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      
      {/* 2. ON RE-AJOUTE LE BLOC FINAL ICI (Celui avec le prix de 35€ et la confiance) */}
      <CTASection />
      
      <Footer />
    </div>
  );
};

export default Index;
