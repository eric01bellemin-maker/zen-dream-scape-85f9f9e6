import React, { useState } from 'react';
import { Play, ShoppingCart, Star } from "lucide-react";

const ProduitDetailsPage = () => {
  const [selectedColor, setSelectedColor] = useState<'gris' | 'bleu'>('gris');
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const productInfo = {
    gris: {
      name: "Sonora Zen - Gris Sidéral",
      image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop", 
      price: "149,00 €"
    },
    bleu: {
      name: "Sonora Zen - Bleu Océan",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop",
      price: "149,00 €"
    }
  };

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="aspect-square rounded-[40px] overflow-hidden bg-slate-100 shadow-2xl">
              <img src={productInfo[selectedColor].image} alt="Produit" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <button onClick={() => setIsVideoOpen(true)} className="absolute inset-0 m-auto w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
              <Play className="text-[#26A69A] fill-[#26A69A] ml-1" size={32} />
            </button>
          </div>

          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#26A69A]/10 rounded-full text-[#26A69A] text-xs font-black uppercase tracking-widest">
              <Star size={14} fill="#26A69A" /> Meilleur Choix 2026
            </div>
            <h1 className="text-5xl font-black text-slate-800 uppercase tracking-tighter leading-none">{productInfo[selectedColor].name}</h1>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-black text-[#26A69A]">{productInfo[selectedColor].price}</span>
              <span className="text-slate-400 line-through font-bold">199,00 €</span>
            </div>

            {/* LES PALETS DE COULEUR */}
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Choisir la couleur</p>
              <div className="flex gap-4">
                <button onClick={() => setSelectedColor('gris')} className={`w-12 h-12 rounded-full border-4 transition-all ${selectedColor === 'gris' ? 'border-[#26A69A] scale-110 shadow-lg' : 'border-transparent'}`} style={{ backgroundColor: '#475569' }} />
                <button onClick={() => setSelectedColor('bleu')} className={`w-12 h-12 rounded-full border-4 transition-all ${selectedColor === 'bleu' ? 'border-[#26A69A] scale-110 shadow-lg' : 'border-transparent'}`} style={{ backgroundColor: '#26A69A' }} />
              </div>
            </div>

            <button className="w-full bg-[#26A69A] text-white py-6 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-[#1f8a80] transition-all shadow-xl shadow-[#26A69A]/20 flex items-center justify-center gap-3">
              <ShoppingCart size={20} /> Commander Maintenant
            </button>
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={() => setIsVideoOpen(false)}>
          <div className="w-full max-w-4xl aspect-video bg-slate-900 rounded-3xl flex items-center justify-center">
            <p className="text-white font-bold uppercase tracking-widest animate-pulse text-center px-4">Vidéo de présentation Sonora Zen en chargement...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProduitDetailsPage;
