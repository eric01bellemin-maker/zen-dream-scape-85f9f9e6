import { useState } from "react";
import { Check, Bluetooth, MapPin, Search } from "lucide-react";

const productVariants = [
  {
    id: "grey",
    colorName: "Gris",
    mainImageUrl: "/palet-gris.jpg",
    handImageUrl: "/main-grise.jpg",
    textDescription: "Le Sonora Zen Gris diffuse des ondes sonores apaisantes à travers votre oreiller pour une nuit de sérénité.",
    buttonClass: "bg-slate-500 hover:bg-slate-600 ring-slate-200"
  },
  {
    id: "blue",
    colorName: "Bleu",
    mainImageUrl: "/palet-bleu.jpg",
    handImageUrl: "/main-bleue.jpg",
    textDescription: "Le Sonora Zen Bleu diffuse des ondes sonores apaisantes à travers votre oreiller pour une nuit de sérénité.",
    buttonClass: "bg-[#26A69A] hover:bg-[#1f8a7f] ring-teal-100"
  },
];

const ProductPresentation = () => {
  const [selectedVariant, setSelectedVariant] = useState(productVariants[0]);

  return (
    <section id="produit" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* TITRE ET INTRODUCTION */}
        <div className="text-center mb-16 max-w-2xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl font-extrabold text-slate-900 leading-tight mb-2 uppercase tracking-tight">
            Votre Compagnon de Nuit
          </h2>
          <div className="w-16 h-1 bg-[#26A69A] mb-8"></div>
          <p className="text-xl font-medium text-slate-800 mb-6 italic">
            Technologie par Conduction Osseuse
          </p>
          <p className="text-base text-slate-600">
            {selectedVariant.textDescription}
          </p>
        </div>

        {/* SECTION DOUBLE VISUEL : PRODUIT + TECHNIQUE */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch mb-20 max-w-6xl mx-auto">
          
          {/* BLOC A : LE PRODUIT ET BOUTONS SEULS */}
          <div className="flex flex-col bg-slate-50/50 rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
            <div className="flex-1 flex items-center justify-center p-10">
              <img 
                src={selectedVariant.mainImageUrl} 
                alt="Palet Sonora Zen" 
                className="max-h-72 object-contain transition-all duration-500 ease-in-out transform hover:scale-105"
              />
            </div>
            
            {/* BOUTONS CENTRÉS SANS TEXTE DE COULEUR */}
            <div className="bg-white p-6 border-t border-slate-100 flex items-center justify-center">
              <div className="flex gap-4">
                {productVariants.map(variant => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${variant.buttonClass} text-white
                      ${selectedVariant.id === variant.id ? 'ring-4 ring-offset-2 scale-105 shadow-lg' : 'opacity-60 hover:opacity-100'}`}
                  >
                    {variant.colorName}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* BLOC B : TECHNIQUE ET CONNECTIVITÉ */}
          <div className="flex flex-col bg-[#0f172a] rounded-3xl overflow-hidden shadow-xl text-white">
            <div className="p-8 text-center">
               <h3 className="text-xl font-bold tracking-widest uppercase">Bluetooth Connectivity</h3>
            </div>
            <div className="flex-1 flex items-center justify-center px-6">
              <img 
                src={selectedVariant.handImageUrl} 
                alt="Usage Sonora Zen" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="p-8 flex items-center gap-4 bg-slate-900/50">
                <div className="p-3 bg-[#26A69A]/20 rounded-full">
                  <Bluetooth className="w-8 h-8 text-[#26A69A] animate-pulse"/>
                </div>
                <p className="text-xs leading-relaxed text-slate-300 font-medium">
                    Puce Bluetooth 5.4 intégrée pour une connexion stable, 
                    une latence ultra-faible et une consommation d'énergie réduite.
                </p>
            </div>
          </div>
        </div>

        {/* CARACTÉRISTIQUES ET COFFRET */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Fiche Technique */}
          <div className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="text-lg font-black text-slate-900 mb-8 uppercase tracking-widest border-b pb-4">Caractéristiques</h4>
            <div className="space-y-6">
              {[
                { Icon: Search, text: "1 haut-parleur à conduction osseuse" },
                { Icon: Bluetooth, text: "Bluetooth 5.3 + support carte TF" },
                { Icon: MapPin, text: "Batterie 400 mAh — 16h d'autonomie" },
                { Icon: Search, text: "Minuterie & arrêt progressif intelligent" },
                { Icon: Bluetooth, text: "Recharge USB-C ultra-rapide" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <item.Icon className="w-5 h-5 text-[#26A69A] group-hover:scale-110 transition-transform" />
                  <p className="text-sm font-medium text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contenu du Coffret */}
          <div className="p-10 bg-slate-50 rounded-3xl border border-slate-100 shadow-sm">
            <h4 className="text-lg font-black text-slate-900 mb-8 uppercase tracking-widest border-b pb-4">Dans le coffret</h4>
            <div className="grid gap-3">
              {[
                "1x Palet sonore Sonora Zen",
                "1x Câble de recharge USB-C",
                "1x Guide d'utilisation",
                "1x Pochette de protection"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100">
                  <div className="bg-[#26A69A] p-1 rounded-full">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-bold text-slate-700">{item}</span>
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
