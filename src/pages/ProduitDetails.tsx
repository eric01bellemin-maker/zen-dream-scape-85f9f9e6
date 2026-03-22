import React, { useState } from 'react';
import { Play, ShoppingCart, Star } from "lucide-react";

const ProduitDetailsPage = () => {
  const [selectedColor, setSelectedColor] = useState<'gris' | 'bleu'>('gris');
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  // ON REPREND TES NOMS DE FICHIERS EXACTS DANS /PUBLIC
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
    <div className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* BLOC IMAGE GAUCHE */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square rounded-[50px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-slate-50">
              <img 
                src={productInfo[selectedColor].image} 
                className="w-full h-full object-cover transition-all duration-700" 
                alt="Produit Sonora" 
              />
            </div>
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="absolute inset-0 m-auto w-24 h-24 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-10"
            >
              <Play className="text-[#26A69A] fill-[#26A69A] ml-1" size={40} />
            </button>
          </div>

          {/* BLOC TEXTE DROITE */}
          <div className="w-full lg:w-1/2 space-y-10">
            <div className="inline-block px-4 py-1.5 bg-[#26A69A]/10 rounded-full text-[#26A69A] text-[11px] font-black uppercase tracking-[0.2em]">
              <Star className="inline-block mr-2 mt-[-2px]" size={14} fill="#26A69A" /> 
              Édition Limitée 2026
            </div>
            
            <h1 className="text-6xl font-black text-slate-800 uppercase tracking-tighter leading-[0.9]">
              {productInfo[selectedColor].name}
            </h1>

            <div className="flex items-baseline gap-6">
              <span className="text-5xl font-black text-[#26A69A] italic">{productInfo[selectedColor].price}</span>
              <span className="text-slate-300 line-through text-2xl font-bold">199,00 €</span>
            </div>

            <p className="text-slate-500 text-xl leading-relaxed font-medium">
              L'immersion sonore par conduction osseuse. Une clarté inégalée pour vos moments de détente et vos nuits.
            </p>

            {/* TES PALETS - RETOUR AU DESIGN D'ORIGINE */}
            <div className="pt-4 space-y-6">
              <p className="text-xs font-black uppercase tracking-widest text-slate-400">Variante de couleur</p>
              <div className="flex gap-6">
                <button 
                  onClick={() => setSelectedColor('gris')} 
                  className={`group relative w-20 h-20 rounded-full p-1 transition-all ${selectedColor === 'gris' ? 'ring-2 ring-[#26A69A] ring-offset-4' : 'opacity-40 hover:opacity-100'}`}
                >
                  <img src="/palet-gris.jpg" className="w-full h-full rounded-full object-cover shadow-lg" alt="Gris" />
                </button>
                
                <button 
                  onClick={() => setSelectedColor('bleu')} 
                  className={`group relative w-20 h-20 rounded-full p-1 transition-all ${selectedColor === 'bleu' ? 'ring-2 ring-[#26A69A] ring-offset-4' : 'opacity-40 hover:opacity-100'}`}
                >
                  <img src="/palet-bleu.jpg" className="w-full h-full rounded-full object-cover shadow-lg" alt="Bleu" />
                </button>
              </div>
            </div>

            <div className="pt-8">
              <button className="group w-full bg-slate-900 text-white py-7 rounded-3xl text-sm font-black uppercase tracking-[0.3em] hover:bg-[#26A69A] transition-all shadow-2xl flex items-center justify-center gap-4">
                <ShoppingCart size={20} className="group-hover:animate-bounce" /> 
                Ajouter à mon expérience
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL VIDÉO */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-[100] bg-slate-900/95 backdrop-blur-xl flex items-center justify-center p-6" onClick={() => setIsVideoOpen(false)}>
           <div className="w-full max-w-5xl aspect-video bg-black rounded-[40px] overflow-hidden shadow-[0_0_100px_rgba(38,166,154,0.3)]">
              <video src="/votre-video.mp4" controls autoPlay className="w-full h-full" />
           </div>
        </div>
      )}
    </div>
  );
};

export default ProduitDetailsPage;
