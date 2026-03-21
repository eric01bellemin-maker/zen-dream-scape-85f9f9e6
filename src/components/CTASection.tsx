import { ShoppingCart, Truck, ShieldCheck, RefreshCcw } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-[#f0f9ff]">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          
          {/* CARTE PRINCIPALE "NUAGE" */}
          <div className="bg-white/80 backdrop-blur-md rounded-[50px] p-8 md:p-16 shadow-xl shadow-blue-900/5 border border-white text-center relative overflow-hidden">
            
            {/* TITRE DE L'OFFRE */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#26A69A]/10 rounded-full mb-8">
              <span className="w-2 h-2 bg-[#26A69A] rounded-full animate-pulse"></span>
              <span className="text-[#26A69A] text-xs font-black uppercase tracking-widest">
                Offre de lancement
              </span>
            </div>

            <h2 className="text-4xl md:text-6xl font-sans font-bold text-slate-700 mb-8 uppercase tracking-tighter">
              Prêt à mieux dormir ?
            </h2>

            {/* PRIX ET BOUTON */}
            <div className="flex flex-col items-center gap-8 mb-16">
              <div className="flex items-baseline gap-4">
                <span className="text-6xl md:text-8xl font-black text-slate-800 tracking-tighter">
                  35,00€
                </span>
                <span className="text-2xl md:text-3xl text-slate-300 line-through font-medium">
                  40,00€
                </span>
              </div>

              <button className="group relative flex items-center gap-4 bg-[#26A69A] hover:bg-[#1f8a7f] text-white px-10 py-6 rounded-full text-lg font-black uppercase tracking-widest transition-all duration-300 shadow-xl shadow-teal-900/20 hover:scale-105 active:scale-95">
                <ShoppingCart className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
                Commander mon Sonora Zen
              </button>
            </div>

            {/* BARRE DE SÉPARATION DOUCE */}
            <div className="w-full h-px bg-slate-100 mb-12"></div>

            {/* RÉASSURANCE EN BULLES INDIVIDUELLES */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-[#e0f2fe]/50 p-6 rounded-[30px] border border-[#d0eafc] flex flex-col items-center gap-3 transition-transform hover:scale-105">
                <Truck className="text-[#26A69A] w-8 h-8" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 leading-tight">
                  Livraison<br/>Gratuite
                </span>
              </div>

              <div className="bg-[#e0f2fe]/50 p-6 rounded-[30px] border border-[#d0eafc] flex flex-col items-center gap-3 transition-transform hover:scale-105">
                <ShieldCheck className="text-[#26A69A] w-8 h-8" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 leading-tight">
                  Paiement<br/>Sécurisé
                </span>
              </div>

              <div className="bg-[#e0f2fe]/50 p-6 rounded-[30px] border border-[#d0eafc] flex flex-col items-center gap-3 transition-transform hover:scale-105">
                <RefreshCcw className="text-[#26A69A] w-8 h-8" />
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 leading-tight">
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
