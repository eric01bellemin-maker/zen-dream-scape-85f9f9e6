import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductSection from "@/components/ProductSection";
import ThirdPageSection from "@/components/ThirdPageSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProductSection />
      <ThirdPageSection /> 
      <Footer />
    </div>
  );
};

export default Index;
