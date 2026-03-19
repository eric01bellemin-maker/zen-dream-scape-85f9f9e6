import Hero from "@/components/Hero";
import ProductDetails from "@/components/ProductDetails";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Hero />
        <ProductDetails />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
