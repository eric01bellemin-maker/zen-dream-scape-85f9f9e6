import Navbar from "./components/Navbar";
import ProduitDetailsPage from "./pages/ProduitDetails";
import SoundSection from "./components/SoundSection";
import FAQSection from "./components/FAQSection";

// On importe le smooth scroll pour tout le site
import "./App.css"; 

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Toutes les sections sont sur la même page */}
      <div id="accueil">
        <ProduitDetailsPage />
      </div>

      <div id="sons">
        <SoundSection />
      </div>

      <div id="faq">
        <FAQSection />
      </div>

      {/* Section Témoignages (Optionnelle, pour éviter le vide) */}
      <section id="temoignages" className="py-20 bg-white text-center">
        <h2 className="text-3xl font-black text-slate-800 mb-8 uppercase">Témoignages</h2>
        <p className="text-slate-500 italic">"Une expérience sonore incroyable pour s'endormir." - Client satisfait</p>
      </section>
    </div>
  );
}

export default App;
