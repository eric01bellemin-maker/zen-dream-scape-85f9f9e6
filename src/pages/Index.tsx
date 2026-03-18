import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import SoundsSection from "../components/SoundsSection";
import ProductSection from "../components/ProductSection/ProductSection";
import ThirdPageSection from "../components/ThirdPageSection/ThirdPageSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <div className="pt-20">
        <HeroSection />
        <SoundsSection />
        <ProductSection />
        <ThirdPageSection />
      </div>
    </main>
  );
};

export default Index;
