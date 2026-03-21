import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BenefitsSection from "@/components/BenefitsSection";
import ProductPresentation from "@/components/ProductPresentation";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection"; // Vérifie qu'il n'y a rien avant cette ligne
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f9ff]">
      <Navbar />
      <Hero />
      <BenefitsSection />
      <ProductPresentation />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
export default Index;
