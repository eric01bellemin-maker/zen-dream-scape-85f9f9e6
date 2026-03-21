import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* BOUTON BURGER (Visible seulement sur mobile) */}
        <div className="flex-1 md:hidden">
          <button onClick={toggleMenu} className="text-slate-600 p-1">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* 1. BLOC GAUCHE (Caché sur mobile) */}
        <div className="hidden md:flex items-center gap-6 text-slate-500 flex-1">
          <Link to="/" className="text-[11px] font-bold hover:text-[#26A69A] tracking-wider uppercase whitespace-nowrap">
            Accueil
          </Link>
          <a href="#produit" className="text-[11px] font-bold hover:text-[#26A69A] tracking-wider uppercase whitespace-nowrap">
            Produit
          </a>
          <a href="#faq" className="text-[11px] font-bold hover:text-[#26A69A] tracking-wider uppercase whitespace-nowrap">
            FAQ
          </a>
        </div>

        {/* 2. BLOC CENTRE : LOGO (Toujours visible et centré) */}
        <div className="flex-none text-center">
          <Link to="/" className="flex flex-col items-center">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-[#26A69A] uppercase leading-none">
              Sonora Zen
            </span>
            <span className="text-[8px] md:text-[9px] font-medium text-slate-400 tracking-[0.25em] uppercase mt-1">
              Sérénité Absolue
            </span>
          </Link>
        </div>

        {/* 3. BLOC DROITE (Liens cachés sur mobile, Bouton Commander réduit) */}
        <div className="flex items-center justify-end gap-6 text-slate-500 flex-1">
          <div className="hidden md:flex items-center gap-6">
            <Link to="/VideoSession" className="text-[11px] font-bold hover:text-[#26A69A] tracking-wider uppercase whitespace-nowrap">
              Sons
            </Link>
            <a href="#temoignages" className="text-[11px] font-bold hover:text-[#26A69A] tracking-wider uppercase whitespace-nowrap">
              Témoignages
            </a>
          </div>
          
          <Link 
            to="/commander" 
            className="flex items-center gap-2 bg-[#26A69A] text-white px-3 py-2 md:px-4 md:py-2 rounded-full text-[10px] md:text-[11px] font-bold hover:bg-[#26A69A]/90 transition-colors whitespace-nowrap shadow-sm transform hover:scale-105"
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            <span className="hidden xs:inline">Commander</span>
          </Link>
        </div>
      </div>

      {/* MENU MOBILE DÉROULANT (S'active au clic sur le burger) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 flex flex-col p-4 space-y-4 shadow-lg animate-in slide-in-from-top duration-300">
          <Link to="/" onClick={toggleMenu} className="text-xs font-bold text-slate-600 uppercase tracking-widest border-b pb-2">Accueil</Link>
          <a href="#produit" onClick={toggleMenu} className="text-xs font-bold text-slate-600 uppercase tracking-widest border-b pb-2">Produit</a>
          <a href="#faq" onClick={toggleMenu} className="text-xs font-bold text-slate-600 uppercase tracking-widest border-b pb-2">FAQ</a>
          <Link to="/VideoSession" onClick={toggleMenu} className="text-xs font-bold text-slate-600 uppercase tracking-widest border-b pb-2">Sons</Link>
          <a href="#temoignages" onClick={toggleMenu} className="text-xs font-bold text-slate-600 uppercase tracking-widest border-b pb-2">Témoignages</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
