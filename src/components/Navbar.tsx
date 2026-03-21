import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* 1. BLOC GAUCHE : Accueil, Produit et FAQ */}
        <div className="flex items-center gap-6 flex-1">
          <Link to="/" className="text-xs font-bold text-slate-600 hover:text-[#26A69A] transition-colors tracking-wide">
            ACCUEIL
          </Link>
          <a href="#produit" className="text-xs font-bold text-slate-600 hover:text-[#26A69A] transition-colors tracking-wide">
            PRODUIT
          </a>
          <a href="#faq" className="text-xs font-bold text-slate-600 hover:text-[#26A69A] transition-colors tracking-wide">
            FAQ
          </a>
        </div>

        {/* 2. BLOC CENTRE : Sonora Zen (Immuable) */}
        <div className="flex-none px-4 text-center">
          <Link to="/" className="text-2xl md:text-3xl font-extrabold tracking-tighter text-[#0f172a] uppercase">
            Sonora Zen
          </Link>
        </div>

        {/* 3. BLOC DROITE : Sons, Témoignages et Bouton */}
        <div className="flex items-center justify-end gap-6 flex-1">
          <Link to="/VideoSession" className="hidden md:block text-xs font-bold text-slate-600 hover:text-[#26A69A] tracking-wide">
            SONS
          </Link>
          <a href="#temoignages" className="hidden lg:block text-xs font-bold text-slate-600 hover:text-[#26A69A] tracking-wide">
            TÉMOIGNAGES
          </a>
          
          <Link 
            to="/commander" 
            className="bg-[#0f172a] text-white px-5 py-2.5 rounded-full text-xs font-black flex items-center gap-2 hover:bg-[#26A69A] transition-all transform hover:scale-105"
          >
            <ShoppingCart className="h-4 w-4" />
            COMMANDER
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
