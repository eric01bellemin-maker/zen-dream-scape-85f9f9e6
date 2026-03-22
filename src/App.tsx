import Navbar from "./components/Navbar";
import ProduitDetailsPage from "./pages/ProduitDetails";
import SoundAmbiances from "./components/SoundSection"; 
import FAQSection from "./components/FAQSection";
import "./App.css"; 

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* L'ID accueil pour le haut de page */}
      <div id="accueil">
        <ProduitDetailsPage />
      </div>

      {/* L'ID sons pour le défilement */}
      <div id="sons">
        <SoundAmbiances /> 
      </div>

      {/* Section Témoignages en dur pour éviter les liens morts */}
      <section id="temoignages" className="py-24 bg-white border-t border-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-slate-800 mb-12 uppercase tracking-tighter">
            Ils dorment mieux avec <span className="text-[#26A69A]">Sonora Zen</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-[40px] border border-slate-100 shadow-sm">
              <p className="text-slate-600 italic mb-4">"Une révolution pour mes nuits."</p>
              <p className="font-bold text-[#26A69A]">Sophie R.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[40px] border border-slate-100 shadow-sm">
              <p className="text-slate-600 italic mb-4">"Le mode conduction osseuse est bluffant."</p>
              <p className="font-bold text-[#26A69A]">Marc A.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[40px] border border-slate-100 shadow-sm">
              <p className="text-slate-600 italic mb-4">"Qualité exceptionnelle."</p>
              <p className="font-bold text-[#26A69A]">Léa M.</p>
            </div>
          </div>
        </div>
      </section>

      {/* L'ID faq */}
      <div id="faq">
        <FAQSection />
      </div>

      <footer className="py-12 bg-slate-900 text-center">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.2em]">
          © 2026 Sonora Zen — Pure Immersion Sonore
        </p>
      </footer>
    </div>
  );
}

export default App;
