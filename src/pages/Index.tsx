import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SoundsSection from "@/components/SoundsSection"; // <-- AJOUTÉ
import ProductSection from "@/components/ProductSection";
import ThirdPageSection from "@/components/ThirdPageSection";
import FAQSection from "@/components/FAQSection"; // <-- AJOUTÉ
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      
      {/* On affiche les 4 ambiances sonores ici */}
      <SoundsSection /> 
      
      <ProductSection />
      
      {/* On affiche les solutions Voyage/Insomnie ici */}
      <ThirdPageSection /> 
      
      {/* On affiche la FAQ juste avant le pied de page */}
      <FAQSection /> 
      
      <Footer />
    </div>
  );
};

export default Index;
