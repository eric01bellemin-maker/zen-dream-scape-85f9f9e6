import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SoundSection from "@/components/SoundSection";
import ProductSection from "@/components/ProductSection";
import ThirdPageSection from "@/components/ThirdPageSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SoundSection />
      <ProductSection />
      <ThirdPageSection />
    </div>
  );
};

export default Index;
