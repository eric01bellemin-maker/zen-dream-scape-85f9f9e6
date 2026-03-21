import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductInAction from "@/components/ProductInAction";
// ON UTILISE LE NOM EXACT DU FICHIER : SoundsSection
import SoundAmbiances from "@/components/SoundsSection"; 
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      
      {/* C'est ici que l'on crée les ancres pour que les boutons fonctionnent */}
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
