import Navbar from "./components/Navbar";
import ProduitDetailsPage from "./pages/ProduitDetails";
import SoundSection from "./components/SoundSection";
import FAQSection from "./components/FAQSection";
import "./App.css"; 

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* SECTION ACCUEIL ET PRODUIT */}
      <div id="accueil">
        <ProduitDetailsPage /> 
      </div>

      {/* SECTION SONS */}
      <div id="sons">
        <SoundSection />
      </div>

      {/* SECTION TÉMOIGNAGES (Ajoutée pour éviter le vide) */}
      <section id="temoignages" className="py-24 bg-white border-t border-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-slate-800 mb-12 uppercase tracking-tighter">
            Ils dorment mieux avec <span className="text-[#26A69A]">Sonora Zen</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-slate-50 rounded-[30px] border border-slate-100 shadow-sm">
              <p className="text-slate-600 italic mb-4">"Une révolution pour mes nuits."</p>
              <p className="font-bold text-[#26A69A]">Sophie R.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[30px] border border-slate-100 shadow-sm">
              <p className="text-slate-600 italic mb-4">"On s'endort vraiment plus vite."</p>
              <p className="font-bold text-[#26A69A]">Marc A.</p>
            </div>
            <div className="p-8 bg-slate-50 rounded-[30px] border border-slate-100 shadow-sm">
              <p className="text-slate-600 italic mb-4">"Qualité sonore exceptionnelle."</p>
              <p className="font-bold text-[#26A69A]">Léa M.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION FAQ */}
      <div id="faq">
        <FAQSection />
      </div>

      <footer className="py-8 bg-slate-50 text-center border-t border-slate-100 font-bold text-slate-400 text-[10px] uppercase tracking-widest">
        © 2026 Sonora Zen. Tous droits réservés.
      </footer>
    </div>
  );
}

export default App;
