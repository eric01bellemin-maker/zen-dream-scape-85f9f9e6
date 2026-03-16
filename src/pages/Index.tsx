import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SecondPageSection from "../components/SecondPageSection";
import ThirdPageSection from "../components/ThirdPageSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SecondPageSection />
      <ThirdPageSection /> 
      <Footer />
    </div>
  );
};
