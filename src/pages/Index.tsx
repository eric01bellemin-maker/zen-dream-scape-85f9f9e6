import React, { useState } from "react";

const Index = () => {
  // On utilise des chemins simples. 
  // Si tes images sont dans src/assets, on va laisser le navigateur les trouver.
  const [currentImage, setCurrentImage] = useState("src/assets/Product-blue.png");

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* BANNIÈRE SIMPLE */}
      <section className="h-[40vh] flex items-center justify-center bg-slate-100">
        <div className="text-center">
          <h1 className="text-4xl font-light tracking-[0.2em] uppercase mb-2">Atmosphère</h1>
          <p className="text-sm tracking-widest uppercase opacity-60">Le sommeil par le design</p>
        </div>
      </section>

      {/* PRODUIT */}
      <section className="py-12 max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-slate-50 rounded-2xl p-6 flex justify-center shadow-sm">
          <img 
            src={currentImage} 
            alt="ZenDream" 
            className="max-h-[400px] object-contain"
            onError={(e) => {
              // Si l'image ne charge pas, on affiche un message dans la console
              console.error("Image non trouvée");
            }}
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl font-serif">ZenDream</h2>
          <p className="text-2xl text-emerald-800 font-bold">79.00 €</p>
          
          <div className="flex gap-4">
            {/* Palet Bleu */}
            <button 
              onClick={() => setCurrentImage("src/assets/Product-blue.png")}
              className="w-10 h-10 rounded-full bg-[#93c5fd] border-2 border-slate-200"
            ></button>
            {/* Palet Gris */}
            <button 
              onClick={() => setCurrentImage("src/assets/Product-grey.png")}
              className="w-10 h-10 rounded-full bg-[#94a3b8] border-2 border-slate-200"
            ></button>
          </div>
          
          <button className="bg-slate-900 text-white px-8 py-4 rounded-full w-full uppercase tracking-widest font-bold">
            Ajouter au panier
          </button>
        </div>
      </section>
    </div>
  );
};

export default Index;
