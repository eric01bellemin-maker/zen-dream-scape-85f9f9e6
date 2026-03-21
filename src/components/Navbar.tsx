import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* 1. BLOC GAUCHE : ACCUEIL, PRODUIT, FAQ */}
        <nav className="flex items-center gap-4 text-slate-500 flex-1">
          <Link to="/" className="text-[11px] font-bold hover:text-[#26A69A] tracking-wider uppercase whitespace-nowrap">
            Accueil
          </Link>
          <a href="#produit" className="text-[11px] font-bold hover:text-[#26A69A] tracking-wider uppercase whitespace-nowrap">
            Produit
          </a>
          <a href="#faq" className="text-[11px] font-bold hover:text-[#26A69A] tracking-wider uppercase whitespace-nowrap">
            FAQ
          </a>
        </nav>

        {/* 2. BLOC CENTRE : SONORA ZEN + SÉRÉNITÉ ABSOLUE */}
        <div className="flex-none px-4 text-center">
          <Link to="/" className="flex flex-col items-center">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-[#26A69A] uppercase leading-none">
              Sonora Zen
            </span>
            <span className="text-[8px] md:text-[9px] font-medium text-slate-400 tracking-[0.25em] uppercase mt-1">
              Sérénité Absolue
            </span>
          </Link>
        </div>

        {/* 3. BLOC DROITE : SONS, TÉMOIGNAGES, COMMANDER */}
        <nav className="flex items-center justify-end gap-4 text-slate-500 flex-1">
          <Link to="/VideoSession" className="text-[11px] font-bold hover:text-[#26A69A] tracking-wider uppercase whitespace-nowrap">
            Sons
          </Link>
          <a href="#temoignages" className="text-[11px] font-bold hover:text-[#26A69A] tracking-wider uppercase whitespace-nowrap">
            Témoignages
          </a>
          
          <Link 
            to="/commander" 
            className="flex items-center gap-2 bg-[#26A69A] text-white px-4 py-2 rounded-full text-[11px] font-bold hover:bg-[#26A69A]/90 transition-colors whitespace-nowrap shadow-sm transform hover:scale-105"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            Commander
          </Link>
        </nav>

      </div>
    </nav>
  );
};

export default Navbar;
