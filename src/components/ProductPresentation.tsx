import { useState } from "react";
import { Bluetooth, Check, Search, MapPin, Zap } from "lucide-react";

const productVariants = [
  {
    id: "grey",
    colorName: "Gris Nuage",
    mainImageUrl: "palet-gris.jpg",
    handImageUrl: "main-grise.jpg",
    textDescription: "Le Sonora Zen Gris diffuse des ondes sonores apaisantes à travers votre oreiller pour une nuit de sérénité absolue.",
  },
  {
    id: "blue",
    colorName: "Bleu Givré",
    mainImageUrl: "palet-bleu.jpg",
    handImageUrl: "main-bleue.jpg",
    textDescription: "Le Sonora Zen Bleu vous enveloppe dans une bulle de confort acoustique pour un endormissement profond.",
  }
];

const ProductPresentation = () => {
  const [selectedVariant, setSelectedVariant] = useState(productVariants[0]);

  return (
    <section id="produit" className="py-20 bg-[#f0f9ff]">
      <div className="container mx-auto px-6">
        
        {/* EN-TÊTE AFFINÉ */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold text-slate-500 uppercase tracking-[0.2em] mb-4">
            Votre Compagnon de Nuit
          </h2>
          <div className="w-12 h-1 bg-[#26A69A]/20 mx-auto mb-6 rounded-full"></div>
          <p className="text-md text-slate-400 font-medium italic max-w-xl mx-auto leading-relaxed">
            Technologie par Conduction Osseuse : Le silence, enfin partagé.
          </p>
        </div>

        {/* GRILLE PRINCIPALE VISUELLE */}
        <div className="grid lg:grid-cols-2 gap-10 mb-16 max-w-6xl mx-auto">
          
          {/* CARTE PRODUIT (NUAGE BLANC) */}
          <div className="bg-white/80 backdrop-blur-md rounded-[45px] p-8 md:p-12 border border-white shadow-xl shadow-blue-900/5 flex flex-col items-center justify-between">
            <div className="relative group w-full">
              <img 
                src={selectedVariant.mainImageUrl} 
                alt="Sonora Zen" 
                className="w-full h-auto rounded-[30px] object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="mt-8 flex flex-col items-center gap-6">
              <p className="text-slate-400 text-center text-sm font-medium leading-relaxed italic max-w-sm">
                "{selectedVariant.textDescription}"
              </p>
              
              <div className="flex gap-3">
                {productVariants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                      selectedVariant.id === v.id 
                      ? 'bg-[#26A69A] text-white shadow-md scale-105' 
                      : 'bg-white text-slate-400 border border-slate-100 hover:border-[#26A69A]/30'
                    }`}
                  >
                    {v.colorName}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CARTE TECHNIQUE (BLEU DOUX) */}
          <div className="bg-[#e0f2fe]/60 backdrop-blur-sm rounded-[45px] p-8 md:p-12 border border-[#d0eafc] flex flex-col justify-between shadow-xl shadow-blue-900/5">
            <div>
              <h3 className="text-slate-400 font-sans font-bold uppercase tracking-[0.2em] text-[11px] mb-6">
                Bluetooth Connectivity
              </h3>
              <div className="rounded-[30px] overflow-hidden border-[6px] border-white shadow-inner mb-8">
                 <img 
                    src={selectedVariant.handImageUrl} 
                    alt="Usage" 
                    className="w-full h-60 object-cover" 
                 />
              </div>
            </div>
            
            <div className="bg-white/60 p-5 rounded-[25px] flex items-center gap-4 border border-white">
              <div className="p-3 bg-[#26A69A] rounded-2xl text-white shadow-lg">
                <Bluetooth size={20} />
              </div>
              <p className="text-[13px] text-slate-500 font-medium leading-relaxed">
                Puce 5.4 dernière génération pour une connexion instantanée et sans coupure sous votre oreiller.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCS CARACTÉRISTIQUES ET COFFRET (RECENTRÉS) */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 bg-white/40 rounded-[35px] border border-white/60">
            <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <Zap size={14} className="text-[#26A69A]" /> Spécifications
            </h4>
            <div className="space-y-4">
              {[
                { icon: Search, text: "Haut-parleur conduction osseuse" },
                { icon: Bluetooth, text: "Bluetooth 5.3 + Carte TF" },
                { icon: MapPin, text: "16h d'autonomie (400 mAh)" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="p-2 bg-white rounded-xl text-[#26A69A] shadow-sm">
                    <item.icon size={14} />
                  </div>
                  <span className="text-sm text-slate-500 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 bg-[#e0f2fe]/30 rounded-[35px] border border-[#d0eafc]/50">
            <h4 className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">
              Dans le coffret
            </h4>
            <div className="space-y-3">
              {["Palet Sonora Zen", "Câble de charge USB-C", "Guide de démarrage rapide"].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white/60 p-3 rounded-2xl border border-white shadow-sm">
                  <div className="bg-[#26A69A] p-1 rounded-full">
                    <Check size={10} className="text-white" />
                  </div>
                  <span className="text-[13px] font-bold text-slate-600">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductPresentation;
