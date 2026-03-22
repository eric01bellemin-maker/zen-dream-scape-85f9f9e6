import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import { Bluetooth, Zap, Ear, Radio, Layers3, MoonStar, Target, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const baseUrl = import.meta.env.BASE_URL;

const images = {
  blue: [
    { src: `${baseUrl}/palet-bleu.jpg`, alt: "Sonora Zen Bleu sur lit" },
    { src: `${baseUrl}/main-bleue.jpg`, alt: "Sonora Zen Bleu et téléphone" },
  ],
  grey: [
    { src: `${baseUrl}/palet-gris.jpg`, alt: "Sonora Zen Gris sur lit" },
    { src: `${baseUrl}/main-grise.jpg`, alt: "Sonora Zen Gris et téléphone" },
  ],
};

const features = [
  { icon: Bluetooth, title: "Bluetooth 5.4", text: "Connexion ultra-stable pour votre musique.", key: "blue" },
  { icon: Ear, title: "Conduction Osseuse", text: "Son par vibrations, sans bloquer l'oreille.", key: "cond" },
  { icon: Zap, title: "HIFI Sound", text: "Qualité audio haute fidélité pour vos ambiances.", key: "hifi" },
  { icon: Radio, title: "Radio FM", text: "Écoutez vos stations préférées.", key: "radio" },
  { icon: Layers3, title: "Double Mode Audio", text: "Choisissez entre conduction et écouteur.", key: "dual" },
  { icon: MoonStar, title: "Aide au Sommeil", text: "Sons de nature pré-enregistrés.", key: "aid" },
  { icon: Target, title: "Affichage LED", text: "Cadran digital pour le volume et la radio.", key: "led" },
];

const ProduitDetailsPage = () => {
  const [selectedColor, setSelectedColor] = useState<"blue" | "grey">("blue");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = images[selectedColor];

  const changeImage = (direction: number) => {
    let newIndex = currentImageIndex + direction;
    if (newIndex < 0) newIndex = productImages.length - 1;
    if (newIndex >= productImages.length) newIndex = 0;
    setCurrentImageIndex(newIndex);
  };

  return (
    <main className="min-h-screen bg-white text-slate-700 font-sans">
      <Navbar />

      {/* HEADER */}
      <header className="pt-28 pb-16 bg-[#e0f2fe]">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Radio className="text-[#26A69A]" size={18} />
            <span className="text-[#26A69A] text-xs font-black uppercase tracking-[0.3em]">Présentation</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-800 tracking-tighter mb-4">
            Sonora <span className="text-[#26A69A]">Zen</span>
          </h1>
          <p className="text-lg text-slate-500 italic max-w-2xl mx-auto">
            La technologie de conduction osseuse avancée, conçue pour un endormissement paisible et naturel.
          </p>
        </div>
      </header>

      {/* SECTION DETAILS (SANS LES BANDES) */}
      <section id="details" className="py-24 bg-[#f0f9ff]">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          
          {/* GALERIE PHOTO */}
          <div className="relative bg-white/60 p-8 rounded-[50px] shadow-xl shadow-blue-900/5 border border-white">
            <div className="aspect-square rounded-[40px] overflow-hidden border-4 border-white shadow-md mb-6">
              <img 
                src={productImages[currentImageIndex].src} 
                alt={productImages[currentImageIndex].alt} 
                className="w-full h-full object-cover"
              />
            </div>
            {productImages.length > 1 && (
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                <button onClick={() => changeImage(-1)} className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow pointer-events-auto hover:bg-white transition-colors"><ChevronLeft size={20} /></button>
                <button onClick={() => changeImage(1)} className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow pointer-events-auto hover:bg-white transition-colors"><ChevronRight size={20} /></button>
              </div>
            )}
          </div>

          {/* FICHE TECHNIQUE + CHOIX COULEUR INTEGRE */}
          <div className="bg-white p-10 rounded-[50px] shadow-xl shadow-blue-900/5 border border-slate-50">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10 pb-8 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <Sparkles className="text-[#26A69A]" size={24} />
                <h2 className="text-2xl md:text-3xl font-black text-slate-800 tracking-tighter">Fiche <span className="text-[#26A69A]">Technique</span></h2>
              </div>
              
              {/* Le sélecteur est maintenant ici, intégré et discret */}
              <div className="flex items-center gap-3 bg-slate-50 p-2 rounded-full border border-slate-100">
                <button 
                  onClick={() => { setSelectedColor("blue"); setCurrentImageIndex(0); }}
                  className={`w-8 h-8 rounded-full transition-all border-2 ${selectedColor === "blue" ? "border-[#26A69A] scale-110 shadow-md" : "border-transparent"}`}
                  style={{ backgroundColor: "#85a3c2" }}
                />
                <button 
                  onClick={() => { setSelectedColor("grey"); setCurrentImageIndex(0); }}
                  className={`w-8 h-8 rounded-full transition-all border-2 ${selectedColor === "grey" ? "border-[#26A69A] scale-110 shadow-md" : "border-transparent"}`}
                  style={{ backgroundColor: "#a6acb2" }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((feature) => (
                <div key={feature.key} className="flex gap-4 items-start group">
                  <div className="w-10 h-10 bg-[#e0f2fe] rounded-lg flex items-center justify-center group-hover:bg-[#26A69A]/10 mt-1 transition-colors">
                    <feature.icon className="text-[#26A69A] w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-700 uppercase text-xs tracking-widest">{feature.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LE FOOTER A ÉTÉ SUPPRIMÉ ICI */}
    </main>
  );
};

export default ProduitDetailsPage;
