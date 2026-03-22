import Navbar from "./components/Navbar";
import ProduitDetailsPage from "./pages/ProduitDetails";
import SoundAmbiances from "./components/SoundSection"; // Le build plante ici
import FAQSection from "./components/FAQSection";
import "./App.css"; 

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div id="accueil"><ProduitDetailsPage /></div>
      <div id="sons"><SoundAmbiances /></div>
      <div id="faq"><FAQSection /></div>
      <footer className="py-12 bg-slate-900 text-center">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">© 2026 Sonora Zen</p>
      </footer>
    </div>
  );
}
export default App;
