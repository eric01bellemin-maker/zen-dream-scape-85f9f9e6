import { useState } from "react";
import { Check, Music, Bluetooth, Battery, Timer, Usb } from "lucide-react";

const ProductSection = () => {
  return (
    <section id="produit" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          
          {/* 1. Titre de la section principal */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Votre Compagnon de Nuit</h2>
            <div className="h-1.5 w-24 bg-[#26A69A] mx-auto rounded-full"></div>
          </div>

          {/* 2. L'image principale (Bleu et Gris) */}
          <div className="w-full max-w-5xl mb-12 shadow-2xl rounded-3xl overflow-hidden border border-slate-100 bg-slate-50">
            <img 
              src="Présentation du produit.jpg" 
              alt="Présentation Sonora Zen Bleu et Gris" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* 3. --- TON TEXTE D'ORIGINE (Image 1) --- */}
          {/* On le garde et on le remet ici, avant les colonnes */}
          <div className="w-full max-w-5xl mb-16 text-center">
              <h3 className="text-3xl font-bold text-slate-800 mb-6 tracking-tight">
                Technologie par Conduction Osseuse
              </h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-10 max-w-3xl mx-auto">
                Le Sonora Zen diffuse des ondes sonores apaisantes à travers votre oreiller pour une nuit de sérénité.
              </p>
              
              <div className="max-w-3xl mx-auto space-y-6 text-left">
                <div className="flex items-center gap-4 bg-[#f0f9f8] p-5 rounded-xl border border-[#26A69A]/10">
                  <div className="bg-[#26A69A] p-1.5 rounded-full shadow-sm">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-slate-700 text-lg"><strong>Son Immersif :</strong> Haut-parleur ultra-fin haute fidélité.</p>
                </div>
                <div className="flex items-center gap-4 bg-[#f0f9f8] p-5 rounded-xl border border-[#26A69A]/10">
                  <div className="bg-[#26A69A] p-1.5 rounded-full shadow-sm">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-slate-700 text-lg"><strong>Autonomie :</strong> 16h d'écoute, 150 jours en veille.</p>
                </div>
                <div className="flex items-center gap-4 bg-[#f0f9f8] p-5 rounded-xl border border-[#26A69A]/10">
                  <div className="bg-[#26A69A] p-1.5 rounded-full shadow-sm">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-slate-700 text-lg"><strong>Confort :</strong> Revêtement tissu acoustique premium.</p>
                </div>
              </div>
          </div>

          {/* 4. Zone Caractéristiques & Coffret (Tes nouvelles sections) */}
          {/* S'affichent APRÈS le texte descriptif */}
          <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8 mt-12">
            
            {/* Colonne Caractéristiques */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-4 tracking-tight">
                Caractéristiques Techniques
              </h4>
              <ul className="space-y-5">
                <li className="flex items-center gap-4 text-slate-700">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Music className="h-5 w-5 text-[#26A69A]" />
                  </div>
                  <span className="font-medium">1 haut-parleur à conduction osseuse</span>
                </li>
                <li className="flex items-center gap-4 text-slate-700">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Bluetooth className="h-5 w-5 text-[#26A69A]" />
                  </div>
                  <span className="font-medium">Bluetooth 5.3 + carte TF</span>
                </li>
                <li className="flex items-center gap-4 text-slate-700">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Battery className="h-5 w-5 text-[#26A69A]" />
                  </div>
                  <span className="font-medium">400 mAh — jusqu'à 16h d'autonomie</span>
                </li>
                <li className="flex items-center gap-4 text-slate-700">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Timer className="h-5 w-5 text-[#26A69A]" />
                  </div>
                  <span className="font-medium">Minuterie & arrêt progressif</span>
                </li>
                <li className="flex items-center gap-4 text-slate-700">
                  <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Usb className="h-5 w-5 text-[#26A69A]" />
                  </div>
                  <span className="font-medium">Recharge USB-C rapide</span>
                </li>
              </ul>
            </div>

            {/* Colonne Contenu du coffret */}
            <div className="bg-[#f0f9f8] p-8 rounded-2xl border border-[#26A69A]/20 shadow-sm hover:shadow-md transition-shadow">
              <h4 className="text-2xl font-bold text-slate-800 mb-6 border-b border-[#26A69A]/20 pb-4 tracking-tight">
                Contenu du coffret
              </h4>
              <ul className="space-y-5">
                <li className="flex items-center gap-4 text-slate-700">
                  <div className="bg-[#26A69A] p-1.5 rounded-full shadow-sm">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium italic">1x Palet sonore Sonora Zen</span>
                </li>
                <li className="flex items-center gap-4 text-slate-700">
                  <div className="bg-[#26A69A] p-1.5 rounded-full shadow-sm">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium">1x Câble USB-C</span>
                </li>
                <li className="flex items-center gap-4 text-slate-700">
                  <div className="bg-[#26A69A] p-1.5 rounded-full shadow-sm">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium">1x Guide d'utilisation</span>
                </li>
                <li className="flex items-center gap-4 text-slate-700">
                  <div className="bg-[#26A69A] p-1.5 rounded-full shadow-sm">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="font-medium">1x Pochette de rangement</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
