import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductInAction from "@/components/ProductInAction";
import SoundAmbiances from "@/components/SoundsSection"; // CORRIGÉ ICI : SoundsSection au lieu de SoundAmbiances
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      
      {/* Les IDs ici permettent aux liens de fonctionner */}
      <div id="produit">
        <BenefitsSection />
        <ProductInAction />
      </div>
      
      <div id="sons">
        <SoundAmbiances />
      </div>

      <div id="temoignages">
        <TestimonialsSection />
      </div>

      <div id="faq">
        <FAQSection />
      </div>

      <Footer />
    </main>
  );
};

export default Index;
