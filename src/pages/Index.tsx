import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import ProductPresentation from "@/components/ProductPresentation";
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
      
      {/* La vidéo */}
      <VideoSection />

      {/* TA NOUVELLE PRÉSENTATION INTERACTIVE */}
      <ProductPresentation />
      
      <SoundsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}; // On ferme la fonction Index

export default Index; // On exporte pour que le site puisse l'afficher
