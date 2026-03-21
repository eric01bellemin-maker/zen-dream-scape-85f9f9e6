import { ShoppingCart, Tag, Truck, ShieldCheck, RefreshCw } from "lucide-react";

const CTASection = () => {
  return (
    <section id="commander" className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
          Prêt à mieux dormir ?
        </h2>
        <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
          Rejoignez des milliers d'utilisateurs qui ont retrouvé un sommeil profond grâce au Sonora Zen.
        </p>

        {/* LE BLOC PRIX ET CONFIANCE FINAL */}
        <div className="bg-white p-10 md:p-16 rounded-[50px] shadow-2xl inline-flex flex-col items-center border border-slate-100 max-w-2xl w-full">
          <div className="flex items-center gap-2 text-[#26A69A] font-bold text-sm uppercase tracking-[0.2em] mb-4">
            <Tag size={16} />
            Offre de lancement
          </div>

          <div className="flex items-baseline gap-4 mb-10">
            <span className="text-6xl md:text-7xl font-black text-slate-900 tracking-tighter">
              35,00€
            </span>
            <span className="text-2xl text-slate-400 line-through font-bold decoration-red-500/40">
              40,00€
            </span>
          </div>

          <button className="w-full md:w-auto bg-[#26A69A] hover:bg-[#1f8a7f] text-white px-12 py-6 rounded-full font-black text-lg uppercase tracking-widest shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-4 mb-10">
            <ShoppingCart size={24} />
            Commander mon Sonora Zen
          </button>

          {/* RÉASSURANCE (LES ICÔNES DE CONFIANCE) */}
          <div className="grid grid-cols-3 gap-4 w-full pt-8 border-t border-slate-100">
            <div className="flex flex-col items-center text-center">
              <Truck size={24} className="text-[#26A69A] mb-2" />
              <span className="text-[10px] font-bold uppercase text-slate-500 leading-tight">
                Livraison<br/>Gratuite
              </span>
            </div>
            <div className="flex flex-col items-center text-center border-x border-slate-100">
              <ShieldCheck size={24} className="text-[#26A69A] mb-2" />
              <span className="text-[10px] font-bold uppercase text-slate-500 leading-tight">
                Paiement<br/>Sécurisé
              </span>
            </div>
            <div className="flex flex-col items-center text-center">
              <RefreshCw size={24} className="text-[#26A69A] mb-2" />
              <span className="text-[10px] font-bold uppercase text-slate-500 leading-tight">
                Garantie<br/>30 Jours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
