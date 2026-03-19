import Header from "@/components/Header";
import Hero from "@/components/Hero";
// J'AI SUPPRIMÉ CETTE LIGNE : import FeatureSection from "@/components/FeatureSection"; 
// J'AI SUPPRIMÉ CETTE LIGNE : import ProductSection from "@/components/ProductSection";
import ProductDetails from "@/components/ProductDetails"; // C'est celle-ci qui a les palets !
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      {/* J'AI SUPPRIMÉ CETTE SECTION : <FeatureSection /> */}
      {/* J'AI SUPPRIMÉ CETTE SECTION : <ProductSection /> */}
      <ProductDetails /> {/* C'est ici que se trouve ton produit avec les palets */}
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
