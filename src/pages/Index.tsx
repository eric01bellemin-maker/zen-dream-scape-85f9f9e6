import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProduitDetailsPage from "./ProduitDetails";
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
      
     {/* L'ID "produit" affiche maintenant ta galerie interactive avec les boutons de couleur */}
      <section id="produit">
        <ProduitDetailsPage />
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
