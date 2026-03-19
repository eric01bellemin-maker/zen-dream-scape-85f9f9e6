import React, { useState } from "react";
// Import des images directement depuis ton dossier assets
import blueProduct from "../assets/Product-blue.png";
import greyProduct from "../assets/Product-grey.png";

const Index = () => {
  const [currentImage, setCurrentImage] = useState(blueProduct);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* SECTION BANNIÈRE (Hero) */}
      <section className="relative h-[60vh] flex items-center justify-center bg-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        <div className="text-center z-20 text-white">
          <h1 className="text-5xl font-light tracking-[0.2em] uppercase mb-4">Atmosphère</h1>
          <p className="text-lg tracking-widest uppercase opacity-80">Le sommeil par le design</p>
        </div>
      </section>

      {/* SECTION PRODUIT AVEC LES PALETS */}
      <section className="py-20 max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
        {/* Affichage de l'image qui change */}
        <div className="bg-slate-50 rounded-3xl p-8 flex justify-center items-center shadow-sm">
          <img 
            src={currentImage} 
            alt="ZenDream" 
            className="max-h-[500px] object-contain transition-all duration-500" 
          />
        </div>

        {/* Détails du produit */}
        <div className="space-y-8">
          <div>
            <span className="text-emerald-600 font-medium tracking-widest uppercase text-sm">Édition Premium</span>
            <h2 className="text-5xl font-serif mt-2">ZenDream</h2>
            <p className="text-3xl text-emerald-800 font-bold mt-4">79.00 €</p>
          </div>
          
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Choisir votre brume :</p>
            <div className="flex gap-6">
              {/* Palet Bleu */}
              <button 
                onClick={() => setCurrentImage(blueProduct)}
                className={`w-12 h-12 rounded-full bg-[#93c5fd] border-4 transition-all ${currentImage === blueProduct ? 'border-emerald-500 scale-110' : 'border-white'}`}
                title="Bleu Brume"
              ></button>
              {/* Palet Gris */}
              <button 
                onClick={() => setCurrentImage(greyProduct)}
                className={`w-12 h-12 rounded-full bg-[#94a3b8] border-4 transition-all ${currentImage === greyProduct ? 'border-emerald-500 scale-110' : 'border-white'}`}
                title="Gris Nuage"
              ></button>
            </div>
          </div>

          <p className="text-slate-600 leading-relaxed">
            Une expérience sensorielle unique pour transformer vos nuits. 
            Design épuré et technologie apaisante.
          </p>
          
          <button className="bg-slate-900 text-white px-10 py-5 rounded-full w-full font-bold hover:bg-slate-800 transition-all uppercase tracking-widest shadow-lg">
            Ajouter au panier
          </button>
        </div>
      </section>

      <footer className="py-10 text-center text-slate-400 border-t">
        <p>© 2026 ZenDream - Maker Edition</p>
      </footer>
    </div>
  );
};

export default Index;
