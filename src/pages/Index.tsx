import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import ProductSheetSection from "@/components/ProductSheetSection";
import SoundsSection from "@/components/SoundsSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />

      {/* BOUTON VERS LA VIDÉO */}
      <div className="text-center py-10 bg-white">
        <Link 
          to="/VideoSession"
          className="inline-block bg-[#26A69A] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform"
        >
          Découvrir la Séance Vidéo Zen
        </Link>
      </div>

      <ProductSection />
      <ProductSheetSection />
      <SoundsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
