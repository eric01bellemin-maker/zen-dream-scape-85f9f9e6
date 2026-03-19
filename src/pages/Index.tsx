import React, { useState } from "react";

const Index = () => {
  // On utilise les noms exacts de tes fichiers dans le dossier public
  const [currentImage, setCurrentImage] = useState("Product-blue.png");

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* HEADER */}
      <nav className="p-6 border-b flex justify-between items-center bg-white sticky top-0 z-50">
        <span className="font-serif text-2xl font-bold tracking-tighter italic">ZenDream</span>
        <div className="flex space-x-6 text-[10px] uppercase tracking-[0.2em] font-bold opacity-40">
          <span>Produit</span>
          <span>Concept</span>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* IMAGE DU PRODUIT */}
          <div className="relative group flex justify-center items-center bg-slate-50 rounded-[40px] aspect-square p-12 shadow-inner">
            <img 
              src={currentImage} 
              alt="ZenDream" 
              className="max-h-full w-auto object-contain drop-shadow-2xl transition-all duration-500"
              key={currentImage}
            />
          </div>

          {/* CONFIGURATION */}
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-emerald-600 text-xs font-black uppercase tracking-[0.4em]">Édition Limitée</span>
              <h1 className="text-7xl font-serif leading-tight">Le calme, <br/>enfin.</h1>
              <p className="text-3xl text-slate-400 font-light italic">79.00 €</p>
            </div>

            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Choisir votre brume</p>
              <div className="flex gap-8">
                {/* Bouton Bleu */}
                <button 
                  onClick={() => setCurrentImage("Product-blue.png")}
                  className={`w-14 h-14 rounded-full bg-[#93c5fd] transition-all duration-300 ${currentImage === "Product-blue.png" ? 'ring-4 ring-emerald-500 ring-offset-4 scale-110' : 'hover:scale-110'}`}
                ></button>

                {/* Bouton Gris */}
                <button 
                  onClick={() => setCurrentImage("Product-grey.png")}
                  className={`w-14 h-14 rounded-full bg-[#94a3b8] transition-all duration-300 ${currentImage === "Product-grey.png" ? 'ring-4 ring-emerald-500 ring-offset-4 scale-110' : 'hover:scale-110'}`}
                ></button>
              </div>
            </div>

            <button className="w-full bg-slate-900 text-white py-6 rounded-2xl font-bold uppercase tracking-[0.2em] hover:bg-black transition-all shadow-xl active:scale-95">
              Ajouter au panier
            </button>
          </div>
        </div>
      </main>

      <footer className="py-20 text-center opacity-20 mt-20 border-t">
        <p className="text-[10px] uppercase tracking-[0.6em]">ZenDream — Designer Edition</p>
      </footer>
    </div>
  );
};

export default Index;
