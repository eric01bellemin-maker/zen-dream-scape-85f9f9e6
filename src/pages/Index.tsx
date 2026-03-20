return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      
      {/* BOUTON VERS LA VIDÉO */}
      <div className="text-center py-10 bg-white">
        <a 
          href="/VideoSession" 
          className="inline-block bg-[#26A69A] text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-transform"
        >
          Découvrir la Séance Vidéo Zen
        </a>
      </div>

      <ProductSection />
      <ProductSheetSection />
      <SoundsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
