import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection"; // On l'importe ici
import ProductPresentation from "@/components/ProductPresentation";
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
      
      {/* La vidéo */}
      <VideoSection />

      {/* C'EST ICI QUE ÇA SE PASSE : ON AJOUTE LE NOUVEAU BLOC */}
      <ProductPresentation />

      {/* On peut enlever ProductSection et ProductSheetSection car tout est dans Presentation désormais */}
      
      <SoundsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  ); //
