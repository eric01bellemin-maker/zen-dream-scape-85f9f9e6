import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        
        {/* 1. BLOC GAUCHE (Liens) */}
        <div className="flex items-center gap-6 flex-1">
          <Link to="/" className="text-sm font-semibold text-slate-600 hover:text-[#26A69A] transition-colors">
            ACCUEIL
          </Link>
          <a href="#produit" className="text-sm font-semibold text-slate-600 hover:text-[#26A69A] transition-colors">
            PRODUIT
          </a>
        </div>

        {/* 2. BLOC CENTRE (Le Titre Sonora Zen) */}
        <div className="flex-none text-center">
          <Link to="/" className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">
            Sonora Zen
          </Link>
        </div>

        {/* 3. BLOC DROITE (Liens + Bouton) */}
        <div className="flex items-center justify-end gap-6 flex-1">
          <Link to="/VideoSession" className="hidden md:block text-sm font-semibold text-slate-600 hover:text-[#26A69A]">
            SONS
          </Link>
          <a href="#temoignages" className="hidden md:block text-sm font-semibold text-slate-600 hover:text-[#26A69A]">
            TÉMOIGNAGES
          </a>
          <Link 
            to="/commander" 
            className="bg-slate-900 text-white px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-[#26A69A] transition-all"
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
