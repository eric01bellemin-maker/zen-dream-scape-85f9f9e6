import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SoundsSection from "../components/Soundssection"; // <-- 's' minuscule ici
import ProductSection from "../components/ProductSection";
import ThirdPageSection from "../components/ThirdPageSection";

const Index = () => {
  return (
    <main style={{ backgroundColor: '#000', minHeight: '100vh', color: 'white' }}>
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
