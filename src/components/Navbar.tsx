import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* GROUPE DE GAUCHE : ACCUEIL, PRODUIT, FAQ */}
        <nav className="flex items-center gap-8 text-slate-500">
          <Link to="/" className="text-sm font-medium hover:text-[#26A69A]">ACCUEIL</Link>
          <Link to="/#produit" className="text-sm font-medium hover:text-[#26A69A]">PRODUIT</Link>
          <Link to="/#faq" className="text-sm font-medium hover:text-[#26A69A]">FAQ</Link>
        </nav>

        {/* LE TITRE CENTRE : SONORA ZEN (Même couleur turquoise que la capture) */}
        <Link to="/" className="text-3xl font-serif font-semibold tracking-tight flex-shrink-0 mx-8 text-[#26A69A]">
          Sonora Zen
          {/* <span className="text-[#26A69A]">Zen</span> */}
        </Link>

        {/* GROUPE DE DROITE : SONS, TÉMOIGNAGES et COMMANDER */}
        <nav className="flex items-center gap-8 text-slate-500">
          <Link to="/VideoSession" className="text-sm font-medium hover:text-[#26A69A]">SONS</Link>
          <Link to="/#temoignages" className="text-sm font-medium hover:text-[#26A69A]">TÉMOIGNAGES</Link>
          
          <Link 
            to="/commander" 
            className="flex items-center gap-2 bg-[#26A69A] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#26A69A]/90 transition-colors"
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
