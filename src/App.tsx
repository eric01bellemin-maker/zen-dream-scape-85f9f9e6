import Navbar from "./components/Navbar";
import ProduitDetailsPage from "./pages/ProduitDetails";
// IMPORTATION EXACTE : Basée sur ta capture d'écran "SoundsSection.tsx"
import SoundSection from "./components/SoundsSection"; 
import FAQSection from "./components/FAQSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div id="accueil">
        <ProduitDetailsPage />
      </div>

      <div id="details">
         {/* Espace pour les détails si nécessaire */}
      </div>

      <div id="sons">
        <SoundSection /> 
      </div>

      <div id="temoignages" className="py-20 bg-slate-50 text-center">
        <h2 className="text-3xl font-black text-slate-800 uppercase tracking-tighter">Témoignages</h2>
        <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
          <p className="text-slate-600 italic">"Une immersion sonore bluffante. Je m'endors beaucoup plus vite depuis que j'utilise Sonora Zen."</p>
          <p className="text-[#26A69A] font-bold mt-4">— Marc D.</p>
        </div>
      </div>

      <div id="faq">
        <FAQSection />
      </div>

      <footer className="py-12 bg-slate-900 text-center">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
          © 2026 Sonora Zen — Pure Immersion Sonore
        </p>
      </footer>
    </div>
  );
}

export default App;
