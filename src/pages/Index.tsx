import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductInAction from "@/components/ProductInAction"; // Importé ici
import SoundsSection from "@/components/SoundsSection"; 
import ProductPresentation from "@/components/ProductPresentation";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-[#f0f9ff]">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      
      {/* ON AJOUTE LA SECTION ICI POUR QU'ELLE S'AFFICHE */}
      <ProductInAction /> 
      
      <SoundsSection />
      <ProductPresentation />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
