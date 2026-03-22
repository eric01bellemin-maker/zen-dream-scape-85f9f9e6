import Navbar from "./components/Navbar";
import ProduitDetailsPage from "./pages/ProduitDetails";
import SoundSection from "./components/SoundsSection"; 
import FAQSection from "./components/FAQSection";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div id="accueil"><ProduitDetailsPage /></div>
      <div id="sons"><SoundSection /></div>
      <div id="faq"><FAQSection /></div>
      <footer className="py-12 bg-slate-900 text-center text-white text-[10px] font-bold uppercase tracking-widest">
        © 2026 SONORA ZEN — PURE IMMERSION
      </footer>
    </div>
  );
}
export default App;
