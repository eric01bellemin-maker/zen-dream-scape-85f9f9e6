import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SoundsSection from "../components/SoundsSection";
import ProductSection from "../components/ProductSection";
import ThirdPageSection from "../components/ThirdPageSection";

const Index = () => {
  // Cette petite ligne permet de trouver le bon chemin automatiquement
  const backgroundImage = "./fond-zen.jpg";

  return (
    <main className="min-h-screen bg-white text-gray-900 w-full relative overflow-hidden">
      
      {/* 🌫️ EFFET BROUILLARD : Toujours à 70% pour la douceur */}
      <div className="fixed inset-0 bg-white/70 backdrop-blur-[4px] pointer-events-none z-10" />

      {/* 🖼️ TON IMAGE (fond-zen.jpg) */}
      <div 
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
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
