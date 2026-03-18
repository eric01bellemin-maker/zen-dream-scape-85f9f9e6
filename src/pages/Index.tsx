import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection/HeroSection";
import SoundsSection from "../components/Soundssection/SoundsSection";
import ProductSection from "../components/ProductSection/ProductSection";
import ThirdPageSection from "../components/ThirdPageSection/ThirdPageSection";

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
