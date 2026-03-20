import { useState } from "react";
import { Check } from "lucide-react";

const ProductSection = () => {
  return (
    <section id="produit" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center">
          
          {/* Titre de la section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Votre Compagnon de Nuit</h2>
            <div className="h-1 w-20 bg-[#26A69A] mx-auto rounded-full"></div>
          </div>

          {/* L'image principale (Bleu et Gris) */}
          <div className="w-full max-w-5xl mb-16 shadow-2xl rounded-3xl overflow-hidden border border-slate-100">
            <img 
              src="Présentation du produit.jpg" 
              alt="Présentation Sonora Zen Bleu et Gris" 
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Détails techniques avec les icônes Lucide */}
          <div className="w-full max-w-5xl grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-bold text-slate-800 mb-6">Technologie par Conduction Osseuse</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                Le Sonora Zen diffuse des ondes sonores apaisantes à travers votre oreiller pour une nuit de sérénité.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 p-1 rounded-full">
                    <Check className="h-5 w-5 text-[#26A69A]" />
                  </div>
                  <p className="text-slate-700"><strong>Son Immersif :</strong> Haut-parleur ultra-fin haute fidélité.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 p-1 rounded-full">
                    <Check className="h-5 w-5 text-[#26A69A]" />
                  </div>
                  <p className="text-slate-700"><strong>Autonomie :</strong> 16h d'écoute, 150 jours en veille.</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-teal-100 p-1 rounded-full">
                    <Check className="h-5 w-5 text-[#26A69A]" />
                  </div>
                  <p className="text-slate-700"><strong>Confort :</strong> Revêtement tissu acoustique premium.</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
              <img 
                src="4.jpg" 
                alt="Détails techniques intérieurs" 
                className="w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductSection;
