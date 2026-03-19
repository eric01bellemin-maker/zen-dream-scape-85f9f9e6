import React, { useState } from "react";

const Index = () => {
  // On utilise des noms de fichiers sans le "/" au début
  const [currentImage, setCurrentImage] = useState("Product-blue.png");

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 p-8">
      <div className="max-w-4xl mx-auto border-2 border-slate-100 rounded-3xl p-10 shadow-2xl bg-white">
        
        <header className="mb-12 border-b pb-6">
          <h1 className="text-3xl font-serif font-bold italic">ZenDream</h1>
        </header>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* ZONE IMAGE AVEC LE NOM DU FICHIER SI ÇA NE CHARGE PAS */}
          <div className="bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[300px]">
            <img 
              src={currentImage} 
              alt="ZenDream" 
              className="max-h-[350px] object-contain"
              key={currentImage}
              onError={(e) => {
                console.log("L'image ne charge pas encore...");
              }}
            />
          </div>

          {/* ZONE COMMANDES */}
          <div className="space-y-8">
            <h2 className="text-4xl font-serif leading-tight">Le calme par le design</h2>
            
            <div className="space-y-4">
              <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Choisir votre modèle :</p>
              <div className="flex gap-6">
                <button 
                  onClick={() => setCurrentImage("Product-blue.png")}
                  className={`w-12 h-12 rounded-full bg-[#93c5fd] border-4 ${currentImage === "Product-blue.png" ? 'border-emerald-500' : 'border-white shadow'}`}
                >
                </button>
                <button 
                  onClick={() => setCurrentImage("Product-grey.png")}
                  className={`w-12 h-12 rounded-full bg-[#94a3b8] border-4 ${currentImage === "Product-grey.png" ? 'border-emerald-500' : 'border-white shadow'}`}
                >
                </button>
              </div>
            </div>

            <button className="w-full bg-slate-900 text-white py-5 rounded-xl font-bold uppercase tracking-widest">
              Ajouter au panier (79€)
            </button>
          </div>
        </div>
      </div>
      
      <p className="text-center mt-10 text-slate-300 text-xs tracking-widest uppercase">
        Si l'écran reste blanc, rafraîchissez avec Ctrl + F5
      </p>
    </div>
  );
};

export default Index;
