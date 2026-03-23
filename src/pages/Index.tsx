import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProduitDetailsPage from "./ProduitDetails"; // Import de la nouvelle page
import ProductInAction from "@/components/ProductInAction";
import SoundsSection from "@/components/SoundsSection";
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
      <SoundsSection />
      <section id="sons">
        
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
