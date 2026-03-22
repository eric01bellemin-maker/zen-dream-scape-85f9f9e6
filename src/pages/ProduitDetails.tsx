import React from 'react';
import { Ear, Brain, Feather, Star } from "lucide-react";
import mainGrisImage from '../assets/main-gris.jpg';

const baseUrl = import.meta.env.BASE_URL;

function ProduitDetailsPage() {
  const caracteristiques = [
    {
      icon: Ear,
      title: "Audio Sans Intrus",
      desc: "N'obstrue pas les oreilles, reste conscient de l'environnement."
    },
    {
      icon: Brain,
      title: "Concentration et Focus",
      desc: "Idéal pour le travail ou l'étude, améliore la productivité."
    },
    {
      icon: Feather,
      title: "Confort Léger",
      desc: "Conçu pour être porté pendant des heures sans fatigue."
    },
    {
      icon: Star,
      title: "Technologie Conduction Osseuse",
      desc: "Transmet le son directement à travers les os du crâne."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Colonne de gauche - Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-white p-2 bg-white/50 backdrop-blur-sm">
          <img 
            src={mainGrisImage}
            alt="Détails Sonora Zen Gris" 
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>

        {/* Colonne de droite - Texte */}
        <div className="space-y-12">
          
          {/* Titre et Intro */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-sans font-black text-slate-800 leading-tight tracking-tighter">
              Une Nouvelle Façon<br /> D'écouter
            </h1>
            
            {/* --- LA MODIFICATION EST ICI --- */}
            <p className="text-xl md:text-2xl text-slate-500 font-sans italic max-w-xl">
              Des sons naturels qui calment votre esprit et vous aident à dormir profondément.
            </p>
            {/* ------------------------------- */}
            
            <button className="bg-[#26A69A] text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:bg-[#208a80] transition duration-300">
              Réserver le mien — 149€
            </button>
          </div>

          {/* Caractéristiques */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {caracteristiques.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-[#f0f9ff] p-4 rounded-xl border border-white shadow-sm">
                  <item.icon className="text-[#26A69A] w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-sans font-black text-slate-800 uppercase tracking-widest">{item.title}</h3>
                  <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
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
