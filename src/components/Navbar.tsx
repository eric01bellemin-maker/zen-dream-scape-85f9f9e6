import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* 1. BLOC GAUCHE : Écart réduit (gap-4) */}
        <nav className="flex items-center gap-4 text-slate-500 flex-1">
          <Link to="/" className="text-xs font-bold hover:text-[#26A69A] tracking-wider uppercase">
            Accueil
          </Link>
          <a href="#produit" className="text-xs font-bold hover:text-[#26A69A] tracking-wider uppercase">
            Produit
          </a>
          <a href="#faq" className="text-xs font-bold hover:text-[#26A69A] tracking-wider uppercase">
            FAQ
          </a>
        </nav>

        {/* 2. BLOC CENTRE : SONORA ZEN + SÉRÉNITÉ ABSOLUE (Toujours au top !) */}
        <div className="flex-none px-2 text-center">
          <Link to="/" className="flex flex-col items-center">
            <span className="text-2xl font-extrabold tracking-tighter text-[#26A69A] uppercase leading-none">
              Sonora Zen
            </span>
            <span className="text-[9px] font-medium text-slate-400 tracking-[0.25em] uppercase mt-0.5">
              Sérénité Absolue
            </span>
          </Link>
        </div>

        {/* 3. BLOC DROITE : Écart réduit (gap-4) et Témoignages forcé */}
        <nav className="flex items-center justify-end gap-4 text-slate-500 flex-1">
          <Link to="/VideoSession" className="text-xs font-bold hover:text-[#26A69A] tracking-wider uppercase">
            Sons
          </Link>
          {/* On force l'affichage de Témoignages, sans 'hidden' */}
          <a href="#temoignages" className="text-xs font-bold hover:text-[#26A69A] tracking-wider uppercase whitespace-nowrap">
            Témoignages
          </a>
          
          <Link 
            to="/commander" 
            className="flex items-center gap-2 bg-[#26A69A] text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#26A69A]/90 transition-colors whitespace-nowrap transform hover:scale-105"
          >
            <ShoppingCart className="h-4 w-4" />
            Commander
          </Link>
        </nav>

      </div>
    </nav>
  );
};

export default Navbar;
