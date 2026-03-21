import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        
        {/* 1. BLOC GAUCHE */}
        <div className="flex items-center gap-4 md:gap-6 flex-1">
          <Link to="/" className="text-[10px] md:text-xs font-bold text-slate-500 hover:text-[#26A69A] transition-colors tracking-widest uppercase">
            Accueil
          </Link>
          <a href="#produit" className="text-[10px] md:text-xs font-bold text-slate-500 hover:text-[#26A69A] transition-colors tracking-widest uppercase">
            Produit
          </a>
          <a href="#faq" className="text-[10px] md:text-xs font-bold text-slate-500 hover:text-[#26A69A] transition-colors tracking-widest uppercase">
            FAQ
          </a>
        </div>

        {/* 2. BLOC CENTRE : SONORA ZEN + SÉRÉNITÉ ABSOLUE */}
        <div className="flex-none px-4 text-center group">
          <Link to="/" className="flex flex-col items-center">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-[#26A69A] uppercase leading-none">
              Sonora Zen
            </span>
            <span className="text-[8px] md:text-[10px] font-medium text-slate-400 tracking-[0.3em] uppercase mt-1 transition-colors group-hover:text-[#26A69A]">
              Sérénité Absolue
            </span>
          </Link>
        </div>

        {/* 3. BLOC DROITE */}
        <div className="flex items-center justify-end gap-4 md:gap-6 flex-1">
          <Link to="/VideoSession" className="text-[10px] md:text-xs font-bold text-slate-500 hover:text-[#26A69A] tracking-widest uppercase">
            Sons
          </Link>
          <a href="#temoignages" className="hidden lg:block text-[10px] md:text-xs font-bold text-slate-500 hover:text-[#26A69A] tracking-widest uppercase">
            Témoignages
          </a>
          
          <Link 
            to="/commander" 
            className="bg-[#26A69A] text-white px-4 py-2 md:px-6 md:py-2.5 rounded-full text-[10px] md:text-xs font-black flex items-center gap-2 hover:shadow-lg hover:shadow-[#26A69A]/30 transition-all transform hover:scale-105"
          >
            <ShoppingCart className="h-3 w-3 md:h-4 md:h-4" />
            COMMANDER
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
