import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductInAction from "@/components/ProductInAction";
import SoundAmbiances from "@/components/SoundsSection"; 
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      
      {/* L'ID "produit" permet au lien de la Navbar de descendre ici sans erreur 404 */}
      <section id="produit">
        <BenefitsSection />
        <ProductInAction />
      </section>
      
      {/* L'ID "sons" active le lien correspondant */}
      <section id="sons">
        <SoundAmbiances />
      </section>

      {/* L'ID "temoignages" active le lien correspondant */}
      <section id="temoignages">
        <TestimonialsSection />
      </section>

      {/* L'ID "faq" active le lien correspondant */}
      <section id="faq">
        <FAQSection />
      </section>

      <Footer />
    </main>
  );
};

export default Index;
