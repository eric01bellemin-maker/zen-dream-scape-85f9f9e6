import React, { useState } from 'react';
import { Play, ShoppingCart, Star } from "lucide-react";

const ProduitDetailsPage = () => {
  const [selectedColor, setSelectedColor] = useState<'gris' | 'bleu'>('gris');
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Chemins directs vers ton dossier /public
  const productInfo = {
    gris: {
      name: "Sonora Zen - Gris Sidéral",
      image: "/main-grise.jpg", 
      palet: "/palet-gris.jpg",
      price: "149,00 €"
    },
    bleu: {
      name: "Sonora Zen - Bleu Océan",
      image: "/main-bleue.jpg",
      palet: "/palet-bleu.jpg",
      price: "149,00 €"
    }
  };

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* IMAGE PRINCIPALE (main-grise ou main-bleue) */}
          <div className="relative group">
            <div className="aspect-square rounded-[40px] overflow-hidden bg-slate-100 shadow-2xl">
              <img 
                src={productInfo[selectedColor].image} 
                alt="Produit Sonora" 
                className="w-full h-full object-cover transition-all duration-500" 
              />
            </div>
            <button onClick={() => setIsVideoOpen(true)} className="absolute inset-0 m-auto w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
              <Play className="text-[#26A69A] fill-[#26A69A] ml-1" size={32} />
            </button>
          </div>

          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#26A69A]/10 rounded-full text-[#26A69A] text-xs font-black uppercase tracking-widest">
              <Star size={14} fill="#26A69A" /> Meilleur Choix 2026
            </div>
            
            <h1 className="text-5xl font-black text-slate-800 uppercase tracking-tighter leading-none">
              {productInfo[selectedColor].name}
            </h1>

            <div className="flex items-center gap-4">
              <span className="text-3xl font-black text-[#26A69A]">{productInfo[selectedColor].price}</span>
              <span className="text-slate-400 line-through font-bold">199,00 €</span>
            </div>

            <p className="text-slate-500 text-lg leading-relaxed">
              Vivez une immersion sonore totale. La technologie Sonora Zen vous accompagne vers un sommeil profond.
            </p>

            {/* SÉLECTEUR AVEC TES IMAGES DE PALETS */}
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Choisir la couleur</p>
              <div className="flex gap-4">
                {/* Palet Gris */}
                <button 
                  onClick={() => setSelectedColor('gris')} 
                  className={`w-14 h-14 rounded-full border-4 overflow-hidden transition-all ${selectedColor === 'gris' ? 'border-[#26A69A] scale-110 shadow-lg' : 'border-transparent opacity-70'}`}
                >
                  <img src="/palet-gris.jpg" className="w-full h-full object-cover" alt="Gris" />
                </button>
                
                {/* Palet Bleu */}
                <button 
                  onClick={() => setSelectedColor('bleu')} 
                  className={`w-14 h-14 rounded-full border-4 overflow-hidden transition-all ${selectedColor === 'bleu' ? 'border-[#26A69A] scale-110 shadow-lg' : 'border-transparent opacity-70'}`}
                >
                  <img src="/palet-bleu.jpg" className="w-full h-full object-cover" alt="Bleu" />
                </button>
              </div>
            </div>

            <button className="w-full bg-[#26A69A] text-white py-6 rounded-2xl text-sm font-black uppercase tracking-widest hover:bg-[#1f8a80] transition-all shadow-xl shadow-[#26A69A]/20 flex items-center justify-center gap-3">
              <ShoppingCart size={20} /> Commander Maintenant
            </button>
          </div>
        </div>
      </div>

      {/* MODAL VIDÉO */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={() => setIsVideoOpen(false)}>
          <div className="w-full max-w-4xl aspect-video bg-slate-900 rounded-3xl flex items-center justify-center border border-white/10">
             <video src="/votre-video.mp4" controls autoPlay className="w-full h-full rounded-3xl" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProduitDetailsPage;
