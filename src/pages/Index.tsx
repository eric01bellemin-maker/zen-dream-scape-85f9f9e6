import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProduitDetailsPage from "./ProduitDetails"; // Import de la nouvelle page
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
        <ProduitDetailsPage /> {/* On utilise le nouveau composant ici */}
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
