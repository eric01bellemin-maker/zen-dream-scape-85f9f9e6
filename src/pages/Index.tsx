import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import SoundsSection from "../components/Soundssection";
import ProductSection from "../components/ProductSection";
import ThirdPageSection from "../components/ThirdPageSection";

const Index = () => {
  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
      <Navbar />
      <HeroSection />
      <SoundsSection />
      <ProductSection />
      <ThirdPageSection />
    </div>
  );
};

export default Index;
