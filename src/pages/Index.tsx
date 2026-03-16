import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SecondPageSection from "@/components/SecondPageSection";
import ThirdPageSection from "@/components/ThirdPageSection"; // On importe ta nouvelle section
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <SecondPageSection />
      {/* On ajoute la section avec la vidéo ici */}
      <ThirdPageSection /> 
      <Footer />
    </div>
  );
};

export default Index;
