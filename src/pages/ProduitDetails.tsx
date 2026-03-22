import React from 'react';
import { Ear, Brain, Feather, Star } from "lucide-react";

// On commente la ligne qui fait planter le build le temps de vérifier le nom de l'image
// import mainGrisImage from '../assets/main-gris.jpg';

function ProduitDetailsPage() {
  const caracteristiques = [
    { icon: Ear, title: "Audio Sans Intrus", desc: "N'obstrue pas les oreilles." },
    { icon: Brain, title: "Concentration", desc: "Idéal pour le travail." },
    { icon: Feather, title: "Confort Léger", desc: "Conçu pour être porté des heures." },
    { icon: Star, title: "Conduction Osseuse", desc: "Sons par vibrations crâniennes." }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Remplacement temporaire de l'image par un carré de couleur pour éviter l'erreur */}
        <div className="rounded-3xl overflow-hidden shadow-2xl bg-[#26A69A]/10 aspect-video flex items-center justify-center border-2 border-dashed border-[#26A69A]">
          <p className="text-[#26A69A] font-bold">Image Sonora Zen en cours de chargement...</p>
        </div>

        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tighter">
              Une Nouvelle Façon D'écouter
            </h1>
            <p className="text-xl text-slate-500 italic">
              Des sons naturels qui calment votre esprit et vous aident à dormir profondément.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {caracteristiques.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <item.icon className="text-[#26A69A] w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest">{item.title}</h3>
                  <p className="text-slate-500 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProduitDetailsPage;
