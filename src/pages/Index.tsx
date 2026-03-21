import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
// Supprime les imports des composants qui affichent des captures d'écran
// Importe tes vraies sections si elles existent :
// import BenefitsSection from "@/components/BenefitsSection";
// import SoundsSection from "@/components/SoundsSection";
// ...
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-[#f0f9ff]">
      <Navbar />
      <HeroSection />
      
      {/* Affiche ici tes vraies sections de contenu, pas des images */}
      {/* <BenefitsSection /> */}
      {/* <SoundsSection /> */}
      {/* ... */}
      
      <Footer />
    </main>
  );
};

export default Index;
