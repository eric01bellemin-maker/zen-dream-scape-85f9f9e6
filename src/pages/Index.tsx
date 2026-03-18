import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SoundsSection from "../components/SoundsSection";
import ProductSection from "../components/ProductSection";
import ThirdPageSection from "../components/ThirdPageSection";

const Index = () => {
  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', color: 'white' }}>
      <Navbar />
      <HeroSection />
      <SoundsSection />
      <ProductSection />
      <ThirdPageSection />
    </div>
  );
};

export default Index;
