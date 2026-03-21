import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* 1. BLOC GAUCHE : Écart réduit (gap-3 pour PC, gap-1 pour mobile) */}
        <div className="flex items-center gap-1 md:gap-3 flex-1">
          <Link to="/" className="text-[10px] md:text-xs font-bold text-slate-500 hover:text-[#26A69A] transition-colors tracking-tight">
            ACCUEIL
          </Link>
          <a href="#produit" className="text-[10px] md:text-xs font-bold text-slate-500 hover:text-[#26A69A] transition-colors tracking-tight">
            PRODUIT
          </a>
          <a href="#faq" className="text-[10px] md:text-xs font-bold text-slate-500 hover:text-[#26A69A] transition-colors tracking-tight">
            FAQ
          </a>
        </div>

        {/* 2. BLOC CENTRE : SONORA ZEN RÉDUIT ET COULEUR APAISANTE */}
        <div className="flex-none px-1 md:px-4 text-center">
          <Link 
            to="/" 
            className="text-lg md:text-xl font-extrabold tracking-tighter text-slate-600 uppercase hover:text-[#26A69A] transition-colors"
          >
            Sonora Zen
          </Link>
        </div>

        {/* 3. BLOC DROITE : Écart réduit (gap-3 pour PC, gap-1 pour mobile) */}
        <div className="flex items-center justify-end gap-1 md:gap-3 flex-1">
          <Link to="/VideoSession" className="text-[10px] md:text-xs font-bold text-slate-500 hover:text-[#26A69A] tracking-tight">
            SONS
          </Link>
          <a href="#temoignages" className="text-[10px] md:text-xs font-bold text-slate-500 hover:text-[#26A69A] tracking-tight">
            TÉMOIGNAGES
          </a>
          
          <Link 
            to="/commander" 
            className="bg-[#26A69A] text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[10px] md:text-xs font-extrabold flex items-center gap-1 md:gap-1.5 hover:bg-[#26A69A]/90 transition-all transform hover:scale-105"
          >
            <ShoppingCart className="h-3 w-3 md:h-3.5 md:h-3.5" />
            COMMANDER
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
