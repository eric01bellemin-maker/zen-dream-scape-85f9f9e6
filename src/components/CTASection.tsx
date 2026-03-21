import { ShoppingCart, Truck, ShieldCheck, RefreshCcw } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-16 bg-[#f0f9ff]">
      <div className="container mx-auto px-6">
        {/* On réduit la largeur max ici de 4xl à 3xl */}
        <div className="max-w-3xl mx-auto">
          
          <div className="bg-white/80 backdrop-blur-md rounded-[40px] p-8 md:p-12 shadow-xl shadow-blue-900/5 border border-white text-center relative">
            
            {/* BADGE PLUS DISCRET */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#26A69A]/10 rounded-full mb-6">
              <span className="text-[#26A69A] text-[10px] font-bold uppercase tracking-widest">
                Offre de lancement
              </span>
            </div>

            {/* TITRE PLUS PETIT */}
            <h2 className="text-2xl md:text-4xl font-sans font-bold text-slate-700 mb-6 uppercase tracking-tight">
              Prêt à mieux dormir ?
            </h2>

            {/* PRIX AFFINÉ */}
            <div className="flex flex-col items-center gap-6 mb-10">
              <div className="flex items-baseline gap-3">
                <span className="text-5xl md:text-6xl font-black text-slate-800 tracking-tighter">
                  35,00€
                </span>
                <span className="text-xl text-slate-300 line-through font-medium">
                  40,00€
                </span>
              </div>

              {/* BOUTON PLUS FIN */}
              <button className="group flex items-center gap-3 bg-[#26A69A] hover:bg-[#1f8a7f] text-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-teal-900/10 hover:scale-105 active:scale-95">
                <ShoppingCart className="w-5 h-5" />
                Commander mon Sonora Zen
              </button>
            </div>

            <div className="w-16 h-px bg-slate-100 mx-auto mb-10"></div>

            {/* RÉASSURANCE PLUS COMPACTE */}
            <div className="grid grid-cols-3 gap-4">
              
              <div className="flex flex-col items-center gap-2">
                <div className="bg-[#e0f2fe]/50 p-3 rounded-2xl border border-[#d0eafc]">
                   <Truck className="text-[#26A69A] w-5 h-5" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Livraison<br/>Gratuite
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="bg-[#e0f2fe]/50 p-3 rounded-2xl border border-[#d0eafc]">
                   <ShieldCheck className="text-[#26A69A] w-5 h-5" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Paiement<br/>Sécurisé
                </span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="bg-[#e0f2fe]/50 p-3 rounded-2xl border border-[#d0eafc]">
                   <RefreshCcw className="text-[#26A69A] w-5 h-5" />
                </div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                  Garantie<br/>30 Jours
                </span>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
