const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#f0f9ff] pt-20 pb-10 border-t border-slate-200/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* COLONNE 1 : LOGO & DESCRIPTION */}
          <div className="space-y-4">
            <h3 className="text-2xl font-sans font-bold text-[#26A69A] tracking-tight">
              Sonora Zen
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              Le palet sonore qui vous guide vers un sommeil doux et serein grâce à la conduction osseuse.
            </p>
          </div>

          {/* COLONNE 2 : LIENS UTILES (CORRIGÉS) */}
          <div>
            <h4 className="text-slate-800 font-bold uppercase tracking-widest text-xs mb-6">
              Liens utiles
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#produit" className="text-slate-500 hover:text-[#26A69A] text-sm transition-colors">
                  Le produit
                </a>
              </li>
              <li>
                <a href="#bienfaits" className="text-slate-500 hover:text-[#26A69A] text-sm transition-colors">
                  Les bienfaits
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-500 hover:text-[#26A69A] text-sm transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* COLONNE 3 : CONTACT */}
          <div>
            <h4 className="text-slate-800 font-bold uppercase tracking-widest text-xs mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="text-slate-500 text-sm">
                <a href="mailto:contact@sonorazen.fr" className="hover:text-[#26A69A] transition-colors">
                  contact@sonorazen.fr
                </a>
              </li>
              <li className="text-slate-500 text-sm italic">
                Support 7j/7
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-[11px] uppercase tracking-widest">
            © {currentYear} Sonora Zen. Tous droits réservés.
          </p>
          <div className="flex gap-6">
             <a href="#" className="text-slate-400 text-[10px] uppercase hover:text-slate-600 transition-colors">Mentions Légales</a>
             <a href="#" className="text-slate-400 text-[10px] uppercase hover:text-slate-600 transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
