import { useState } from "react";
import { Check, Bluetooth, MapPin, Search, Tag } from "lucide-react"; // Ajout de Tag pour l'icône promo

// ... (Garder le début des variants inchangé)

const ProductPresentation = () => {
  const [selectedVariant, setSelectedVariant] = useState(productVariants[0]);

  return (
    <section id="produit" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        
        {/* TITRE ET INTRODUCTION */}
        <div className="text-center mb-16 max-w-3xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4 uppercase tracking-tighter">
            Votre Compagnon de Nuit
          </h2>
          
          <div className="w-20 h-1.5 bg-[#26A69A] rounded-full mb-8"></div>
          
          <p className="text-xl md:text-2xl font-semibold text-slate-800 mb-6 italic tracking-wide">
            Technologie par Conduction Osseuse
          </p>
          
          <div className="max-w-2xl mb-10">
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              {selectedVariant.textDescription}
            </p>
          </div>

          {/* ————— BLOC PRIX AJOUTÉ ICI ————— */}
          <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 flex flex-col items-center shadow-sm animate-in fade-in zoom-in duration-700">
            <div className="flex items-center gap-2 text-[#26A69A] font-bold text-xs uppercase tracking-[0.2em] mb-3">
              <Tag size={14} />
              Offre de lancement
            </div>
            
            <div className="flex items-baseline gap-4">
              <span className="text-5xl font-black text-slate-900 tracking-tighter">
                35,00€
              </span>
              <span className="text-xl text-slate-400 line-through decoration-red-500/40 font-bold">
                40,00€
              </span>
            </div>
            
            <p className="text-[10px] text-slate-500 mt-3 font-bold uppercase tracking-widest">
              Livraison offerte • Stock limité
            </p>
          </div>
          {/* —————————————————————————————— */}
        </div>

        {/* ... (Reste du code identique) */}
