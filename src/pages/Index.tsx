import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SoundsSection from "../components/SoundsSection";
import ProductSection from "../components/ProductSection";
import ThirdPageSection from "../components/ThirdPageSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900 w-full relative overflow-hidden">
      
      {/* 🌫️ EFFET BROUILLARD : Un voile blanc doux */}
      <div className="fixed inset-0 bg-white/40 backdrop-blur-[2px] pointer-events-none z-10" />

      {/* 🖼️ TON IMAGE DE FOND (PROPRE ET SANS INSCRIPTIONS) */}
      <img
        src="https://chatgpt.com/backend-api/estuary/content?id=file_00000000e08c7243b3167fb9b351ec0c&ts=492743&p=fs&cid=1&sig=5e98415828579f4c54ed2918a249dbe693ad562da1553a8bf7747783f48f3a8d&v=0"
        alt="Chambre épurée et apaisante"
        className="fixed inset-0 w-full h-full object-cover z-0 opacity-90"
      />
      
      {/* Ton contenu (tes sections) */}
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
