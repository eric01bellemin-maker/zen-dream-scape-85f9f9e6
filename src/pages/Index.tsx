import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProduitDetailsPage from "./ProduitDetails"; // Ton nouveau composant
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
      
      {/* On remplace BenefitsSection par ProduitDetailsPage ici */}
      <section id="produit">
        <ProduitDetailsPage /> 
        <ProductInAction />
      </section>
      
      <section id="sons">
        <SoundAmbiances />
      </section>

      <section id="temoignages">
        <TestimonialsSection />
      </section>

      <section id="faq">
        <FAQSection />
      </section>

      <Footer />
    </main>
  );
};

export default Index;
