import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SoundsSection from "../components/SoundsSection";
import ProductSection from "../components/ProductSection";
import ThirdPageSection from "../components/ThirdPageSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900 w-full relative overflow-hidden">
      
      {/* 🌫️ EFFET BROUILLARD RENFORCÉ : Plus intense pour un effet "pâle" */}
      <div className="fixed inset-0 bg-white/60 backdrop-blur-[3px] pointer-events-none z-10" />

      {/* 🖼️ NOUVELLE IMAGE DE FOND (PROPRE ET SANS INSCRIPTIONS) */}
      <img
        src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop"
        alt="Chambre épurée et apaisante"
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-80"
      />
      
      {/* Ton contenu (tes sections) reste inchangé mais est placé "sous" le brouillard */}
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
