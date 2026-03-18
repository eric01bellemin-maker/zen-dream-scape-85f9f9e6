import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SoundsSection from "../components/SoundsSection";
import ProductSection from "../components/ProductSection";
import ThirdPageSection from "../components/ThirdPageSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900 w-full relative overflow-hidden">
      
      {/* 🌫️ EFFET BROUILLARD : Voile blanc à 70% pour l'aspect très pâle et zen */}
      <div className="fixed inset-0 bg-white/70 backdrop-blur-[4px] pointer-events-none z-10" />

      {/* 🖼️ TON IMAGE DEPUIS LE DOSSIER PUBLIC (Correction du lien) */}
      <img
        src="./fond-zen.jpg" 
        alt="Ambiance ZenDream"
        className="fixed inset-0 w-full h-full object-cover z-0"
      />
      
      <div className="relative z-20">
        <Navbar />
        <div id="hero"><HeroSection /></div>
        <div id="sounds"><SoundsSection /></div>
        <div id="product"><ProductSection /></div>
        <div id="testimonials"><ThirdPageSection /></div>
      </div>
    </main>
  );
};

export default Index;
