import Navbar from "./components/Navbar";
import ProduitDetailsPage from "./pages/ProduitDetails";
import SoundSection from "./components/SoundSection";
import FAQSection from "./components/FAQSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* ID pour le lien "Accueil" */}
      <div id="accueil">
        <ProduitDetailsPage />
      </div>

      {/* ID pour le lien "Produit" */}
      <div id="details">
         {/* Ta section de présentation produit ici */}
      </div>

      {/* ID pour le lien "Sons" - IMPORTANT */}
      <div id="sons">
        <SoundSection /> 
      </div>

      {/* ID pour le lien "Témoignages" (Même si vide pour l'instant) */}
      <div id="temoignages">
        {/* Section témoignages si tu en as une */}
      </div>

      {/* ID pour le lien "FAQ" - IMPORTANT */}
      <div id="faq">
        <FAQSection />
      </div>

      <footer className="py-12 bg-slate-900 text-center">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
          © 2026 Sonora Zen
        </p>
      </footer>
    </div>
  );
}

export default App;
