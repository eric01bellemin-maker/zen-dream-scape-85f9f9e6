import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection"; // Correction ici : HeroSection au lieu de Hero
import BenefitsSection from "@/components/BenefitsSection";
import ProductPresentation from "@/components/ProductPresentation";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection"; 
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-[#f0f9ff]">
      <Navbar />
      <HeroSection /> {/* On utilise le bon nom ici aussi */}
      <BenefitsSection />
      <ProductPresentation />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
