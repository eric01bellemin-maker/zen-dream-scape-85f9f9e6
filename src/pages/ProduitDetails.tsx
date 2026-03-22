import React, { useState } from 'react';
import { Play, ShoppingCart, Star } from "lucide-react";

const ProduitDetailsPage = () => {
  const [selectedColor, setSelectedColor] = useState<'gris' | 'bleu'>('gris');
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // Chemins exacts vers ton dossier public
  const productInfo = {
    gris: {
      name: "SONORA ZEN - GRIS SIDÉRAL",
      image: "/main-grise.jpg", 
      price: "149,00 €"
    },
    bleu: {
      name: "SONORA ZEN - BLEU OCÉAN",
      image: "/main-bleue.jpg",
      price: "149,00 €"
    }
  };

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* IMAGE PRINCIPALE (Tes fichiers .jpg) */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square rounded-[40px] overflow-hidden bg-slate-100 shadow-2xl">
              <img 
                src={productInfo[selectedColor].image} 
                alt="Produit Sonora" 
                className="w-full h-full object-cover" 
              />
            </div>
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="absolute inset-0 m-auto w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
            >
              <Play className="text-[#26A69A] fill-[#26A69A] ml-1" size={32} />
            </button>
          </div>

          {/* CONTENU TEXTE */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#26A69A]/10 rounded-full text-[#26A69A] text-[10px] font-black uppercase tracking-widest">
              <Star size={14} fill="#26A69A" /> MEILLEUR CHOIX 2026
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

            {/* TES PALETS CLICQUABLES (palet-gris.jpg / palet-bleu.jpg) */}
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Choisir la couleur</p>
              <div className="flex gap-4">
                <button 
                  onClick={() => setSelectedColor('gris')} 
                  className={`w-16 h-16 rounded-full border-4 overflow-hidden transition-all ${selectedColor === 'gris' ? 'border-[#26A69A] scale-110' : 'border-transparent opacity-60'}`}
                >
                  <img src="/palet-gris.jpg" className="w-full h-full object-cover" alt="Gris" />
                </button>
                
                <button 
                  onClick={() => setSelectedColor('bleu')} 
                  className={`w-16 h-16 rounded-full border-4 overflow-hidden transition-all ${selectedColor === 'bleu' ? 'border-[#26A69A] scale-110' : 'border-transparent opacity-60'}`}
                >
                  <img src="/palet-bleu.jpg" className="w-full h-full object-cover" alt="Bleu" />
                </button>
              </div>
            </div>

            <button className="w-full bg-[#26A69A] text-white py-6 rounded-2xl text-sm font-black uppercase tracking-widest hover:opacity-90 transition-all shadow-xl flex items-center justify-center gap-3">
              <ShoppingCart size={20} /> COMMANDER MAINTENANT
            </button>
          </div>
        </div>
      </div>

      {/* MODAL VIDÉO */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4" onClick={() => setIsVideoOpen(false)}>
          <div className="w-full max-w-4xl aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
            <video src="/votre-video.mp4" controls autoPlay className="w-full h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProduitDetailsPage;
