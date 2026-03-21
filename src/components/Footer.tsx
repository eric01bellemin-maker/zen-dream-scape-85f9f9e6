const Footer = () => {
  return (
    <footer className="bg-[#f0f9ff] pt-20 pb-10 border-t border-slate-200/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          <div className="space-y-4">
            <h3 className="text-2xl font-sans font-bold text-[#26A69A]">Sonora Zen</h3>
            <p className="text-slate-500 text-sm">Le palet sonore qui vous guide vers un sommeil serein.</p>
          </div>

          {/* LIENS CORRIGÉS : UTILISATION DE <a> AU LIEU DE <Link> */}
          <div>
            <h4 className="text-slate-800 font-bold uppercase text-xs mb-6">Liens utiles</h4>
            <ul className="space-y-4">
              <li>
                <a href="#produit" className="text-slate-500 hover:text-[#26A69A] text-sm transition-colors">
                  Le produit
                </a>
              </li>
              <li>
                <a href="#sons" className="text-slate-500 hover:text-[#26A69A] text-sm transition-colors">
                  Les sons
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-500 hover:text-[#26A69A] text-sm transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-800 font-bold uppercase text-xs mb-6">Contact</h4>
            <p className="text-slate-500 text-sm">contact@sonorazen.fr</p>
            <p className="text-slate-500 text-sm italic">Support 7j/7</p>
          </div>
        </div>
        
        <div className="text-center pt-8 border-t border-slate-200">
          <p className="text-slate-400 text-[11px]">© 2026 Sonora Zen. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
