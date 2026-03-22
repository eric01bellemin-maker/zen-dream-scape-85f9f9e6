import Navbar from "./components/Navbar";
import ProduitDetailsPage from "./pages/ProduitDetails";
import SoundSection from "./components/SoundSection"; // Importation alignée sur le nom du fichier
import FAQSection from "./components/FAQSection";
import "./App.css"; 

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div id="accueil">
        <ProduitDetailsPage />
      </div>

      <div id="sons">
        <SoundSection /> 
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
