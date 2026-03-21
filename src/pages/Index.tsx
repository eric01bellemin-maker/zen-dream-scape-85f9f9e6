import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductPresentation from "@/components/ProductPresentation";
import SoundsSection from "@/components/SoundsSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      
      {/* Présentation du produit avec le bon prix (35€) */}
      <ProductPresentation />
      
      <SoundsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      
      <Footer />
    </div>
  );
};

export default Index;
