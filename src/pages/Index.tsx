import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SoundsSection from "../components/SoundsSection";
import ProductSection from "../components/ProductSection";
import ThirdPageSection from "../components/ThirdPageSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-white text-gray-900 w-full relative overflow-hidden">
      
      {/* 🌫️ EFFET BROUILLARD : J'ai mis 70% pour que ce soit BIEN brumeux */}
      <div className="fixed inset-0 bg-white/70 backdrop-blur-[4px] pointer-events-none z-10" />

      {/* 🖼️ TON IMAGE PROPRE */}
      <img
        src="/fond-zen.jpg" 
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
