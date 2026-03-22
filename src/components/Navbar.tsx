import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // On garde Link juste pour le logo si besoin
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

 // Extrait de ce que doit être ta Navbar pour ne plus avoir de 404
const navLinks = [
  { name: "Accueil", href: "#" },
  { name: "Produit", href: "#details" },      // Doit correspondre à l'ID du produit
  { name: "Sons", href: "#sons" },            // Doit correspondre à l'ID des sons
  { name: "Témoignages", href: "#temoignages" },
  { name: "FAQ", href: "#faq" },
];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100 py-2" : "bg-white py-4"
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        
        {/* 1. BLOC GAUCHE (Desktop) */}
        <div className="hidden md:flex items-center gap-6 flex-1 text-slate-500">
          {navLinks.slice(0, 3).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold hover:text-[#26A69A] tracking-wider uppercase transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* 2. BLOC CENTRE : LOGO */}
        <div className="flex-none text-center">
          <a href="#" className="flex flex-col items-center">
            <span className="text-xl md:text-2xl font-black tracking-tighter text-[#26A69A] uppercase leading-none">
              Sonora Zen
            </span>
            <span className="text-[8px] uppercase tracking-[0.3em] text-slate-400 font-bold">
              Pure Immersion
            </span>
          </a>
        </div>

        {/* 3. BLOC DROITE (Desktop) */}
        <div className="hidden md:flex items-center justify-end gap-6 flex-1 text-slate-500">
          {navLinks.slice(3).map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[11px] font-bold hover:text-[#26A69A] tracking-wider uppercase transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* CORRECTION : Utiliser un chemin relatif pour éviter la 404 sur GitHub Pages */}
          <Link
            to="./commander" 
            className="flex items-center gap-2 bg-[#26A69A] text-white px-4 py-2 rounded-full text-[10px] font-bold hover:bg-[#1f8a80] transition-all shadow-md active:scale-95"
          >
            <ShoppingCart size={14} />
            <span className="hidden sm:inline">Commander</span>
          </Link>
        </div>

        {/* BOUTON BURGER (Mobile uniquement) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-slate-600 p-1">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE DÉROULANT */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-bold text-slate-600 hover:text-[#26A69A] uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
            {/* CORRECTION : Chemin relatif ici aussi */}
            <Link
              to="./commander"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 bg-[#26A69A] text-white py-3 rounded-xl font-bold"
            >
              <ShoppingCart size={18} />
              Commander
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
