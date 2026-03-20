import { useState } from "react";
import { Check, Music, Bluetooth, Battery, Timer, Usb } from "lucide-react";

const ProductSection = () => {
  return (
    <section id="produit" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          
          {/* Titre de la section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Votre Compagnon de Nuit</h2>
            <div className="h-1 w-20 bg-[#26A69A] mx-auto rounded-full"></div>
          </div>

          {/* L'image principale (Bleu et Gris) */}
          <div className="w-full max-w-5xl mb-16 shadow-2xl rounded-3xl overflow-hidden border border-slate-100">
            <img 
              src="Présentation du produit.jpg" 
              alt="Présentation Sonora Zen Bleu et Gris" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Nouvelle section : Caractéristiques & Contenu du coffret */}
          <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
            
            {/* Colonne de Gauche : Caractéristiques */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                Caractéristiques
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700">
                  <Music className="h-5 w-5 text-[#26A69A]" />
                  1 haut-parleur à conduction osseuse
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <Bluetooth className="h-5 w-5 text-[#26A69A]" />
                  Bluetooth 5.3 + carte TF
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <Battery className="h-5 w-5 text-[#26A69A]" />
                  400 mAh — jusqu'à 16h d'autonomie
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <Timer className="h-5 w-5 text-[#26A69A]" />
                  Minuterie & arrêt progressif
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <Usb className="h-5 w-5 text-[#26A69A]" />
                  Recharge USB-C rapide
                </li>
              </ul>
            </div>

            {/* Colonne de Droite : Contenu du coffret */}
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Contenu du coffret</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-slate-700">
                  <Check className="h-5 w-5 text-[#26A69A]" />
                  1x Palet sonore Sonora Zen
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <Check className="h-5 w-5 text-[#26A69A]" />
                  1x Câble USB-C
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <Check className="h-5 w-5 text-[#26A69A]" />
                  1x Guide d'utilisation
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <Check className="h-5 w-5 text-[#26A69A]" />
                  1x Pochette de rangement
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
