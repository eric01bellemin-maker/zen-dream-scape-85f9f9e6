import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductDetails from "@/components/ProductDetails";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="pt-16"> {/* Ajoute un petit espace sous le menu */}
        <Hero />
        <ProductDetails />
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
