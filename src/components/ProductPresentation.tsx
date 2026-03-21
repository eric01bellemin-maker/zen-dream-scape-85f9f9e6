import { useState } from "react";
import { Bluetooth, Check, Search, MapPin, Zap } from "lucide-react";

const productVariants = [
  {
    id: "grey",
    colorName: "Gris Nuage",
    mainImageUrl: "palet-gris.jpg",
    textDescription: "Le Sonora Zen Gris diffuse des ondes sonores apaisantes à travers votre oreiller pour une nuit de sérénité absolue.",
    bgClass: "bg-[#f8fafc]"
  },
  {
    id: "blue",
    colorName: "Bleu Givré",
    mainImageUrl: "palet-bleu.jpg",
    textDescription: "Le Sonora Zen Bleu vous enveloppe dans une bulle de confort acoustique pour un endormissement profond.",
    bgClass: "bg-[#f0f9ff]"
  }
];

const ProductPresentation = () => {
  const [selectedVariant, setSelectedVariant] = useState(productVariants[0]);

  return (
    <section id="produit" className="py-24 bg-[#f0f9ff]"> {/* Fond bleu très pâle comme les sons */}
      <div className="container mx-auto px-6">
        
        {/* EN-TÊTE APPAISANT */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-sans font-semibold text-slate-500 uppercase tracking-tight mb-4">
            Votre Compagnon de Nuit
          </h2>
          <div className="w-16 h-1 bg-[#26A69A]/30 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-400 font-medium italic max-w-2xl mx-auto">
            Technologie par Conduction Osseuse : Le silence, enfin partagé.
          </p>
        </div>

        {/* GRILLE PRINCIPALE VISUELLE */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20 max-w-6xl mx-auto">
          
          {/* CARTE PRODUIT (NUAGE BLANC) */}
          <div className="bg-white/70 backdrop-blur-md rounded-[50px] p-10 border border-white shadow-xl shadow-blue-900/5 flex flex-col items-center justify-between">
            <div className="relative group w-full">
              <img 
                src={selectedVariant.mainImageUrl} 
                alt="Sonora Zen" 
                className="w-full h-auto rounded-[30px] object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <div className="mt-10 flex flex-col items-center gap-6">
              <p className="text-slate-500 text-center font-medium leading-relaxed italic">
                "{selectedVariant.textDescription}"
              </p>
              
              <div className="flex gap-4">
                {productVariants.map((v) => (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                      selectedVariant.id === v.id 
                      ? 'bg-[#26A69A] text-white shadow-lg scale-105' 
                      : 'bg-white text-slate-400 border border-slate-200 hover:border-[#26A69A]/50'
                    }`}
                  >
                    {v.colorName}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CARTE TECHNIQUE (BLEU DOUX) */}
          <div className="bg-[#e0f2fe] rounded-[50px] p-10 border border-[#d0eafc] flex flex-col justify-between shadow-xl shadow-blue-900/5">
            <div>
              <h3 className="text-slate-500 font-sans font-bold uppercase tracking-[0.2em] text-sm mb-8">
                Bluetooth Connectivity
              </h3>
              <div className="rounded-[30px] overflow-hidden border-4 border-white shadow-inner mb-8">
                 <img src="main-grise.jpg" alt="Usage" className="w-full h-64 object-cover" />
              </div>
            </div>
            
            <div className="bg-white/50 p-6 rounded-[30px] flex items-center gap-5 border border-white">
              <div className="p-4 bg-[#26A69A] rounded-full text-white shadow-lg">
                <Bluetooth size={24} />
              </div>
              <p className="text-sm text-slate-600 font-medium leading-relaxed">
                Puce 5.4 dernière génération pour une connexion instantanée et sans coupure sous votre oreiller.
              </p>
            </div>
          </div>
        </div>

        {/* BLOCS CARACTÉRISTIQUES ET COFFRET */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="p-10 bg-white/50 rounded-[40px] border border-white shadow-sm hover:shadow-md transition-shadow">
            <h4 className="text-slate-500 font-bold uppercase tracking-widest mb-8 border-b border-slate-200 pb-4 flex items-center gap-2">
              <Zap size={18} className="text-[#26A69A]" /> Spécifications
            </h4>
            <div className="space-y-5">
              {[
                { icon: Search, text: "Haut-parleur conduction osseuse" },
                { icon: Bluetooth, text: "Bluetooth 5.3 + Carte TF" },
                { icon: MapPin, text: "16h d'autonomie (400 mAh)" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="p-2 bg-white rounded-full text-[#26A69A] shadow-sm group-hover:scale-110 transition-transform">
                    <item.icon size={16} />
                  </div>
                  <span className="text-slate-600 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-10 bg-[#e0f2fe]/50 rounded-[40px] border border-[#d0eafc] shadow-sm">
            <h4 className="text-slate-500 font-bold uppercase tracking-widest mb-8 border-b border-[#d0eafc] pb-4">
              Dans le coffret
            </h4>
            <div className="space-y-3">
              {["Palet Sonora Zen", "Câble de charge USB-C", "Guide de démarrage rapide"].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/80 p-4 rounded-2xl border border-white shadow-sm">
                  <div className="bg-[#26A69A] p-1 rounded-full">
                    <Check size={12} className="text-white" />
                  </div>
                  <span className="text-sm font-bold text-slate-600">{item}</span>
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
