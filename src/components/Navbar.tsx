import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#accueil" },
    { name: "Produit", href: "#details" }, 
    { name: "Sons", href: "#sons" },
    { name: "Témoignages", href: "#temoignages" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white/95 backdrop-blur-md shadow-md py-2" : "bg-white py-4"
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="hidden md:flex items-center gap-8 flex-1">
          {navLinks.slice(0, 3).map((link) => (
            <a key={link.name} href={link.href} className="text-[11px] font-black text-slate-500 hover:text-[#26A69A] uppercase tracking-widest transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex-none">
          <a href="#accueil" className="flex flex-col items-center">
            <span className="text-2xl font-black text-[#26A69A] uppercase tracking-tighter">Sonora Zen</span>
          </a>
        </div>

        <div className="hidden md:flex items-center justify-end gap-8 flex-1">
          {navLinks.slice(3).map((link) => (
            <a key={link.name} href={link.href} className="text-[11px] font-black text-slate-500 hover:text-[#26A69A] uppercase tracking-widest transition-colors">
              {link.name}
            </a>
          ))}
          <a href="#details" className="bg-[#26A69A] text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-tighter hover:scale-105 transition-transform shadow-lg shadow-[#26A69A]/20 flex items-center gap-2">
            <ShoppingCart size={14} /> Commander
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-800">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t p-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-black text-slate-800 uppercase tracking-tighter border-b border-slate-50 pb-2">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
