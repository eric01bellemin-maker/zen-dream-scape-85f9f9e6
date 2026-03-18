import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SoundsSection from "../components/SoundsSection";
import ProductSection from "../components/ProductSection";
import ThirdPageSection from "../components/ThirdPageSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-black text-white w-full">
      <Navbar />
      <div id="hero"><HeroSection /></div>
      <div id="sounds"><SoundsSection /></div>
      <div id="product"><ProductSection /></div>
      <div id="testimonials"><ThirdPageSection /></div>
    </main>
  );
};

export default Index;
