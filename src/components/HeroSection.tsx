import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between bg-[#0f172a] overflow-hidden">
      
      {/* 1. L'IMAGE DE FOND (CORRIGÉE EN .PNG) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="Présentation du produit.png" 
          alt="Ambiance sereine Sonora Zen" 
          className="w-full h-full object-cover object-center"
        />
        {/* Voile sombre pour la lisibilité */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* 2. ZONE DE TEXTE CENTRÉE */}
      <div className="container mx-auto px-6 relative z-20 flex-grow flex items-center justify-center pt-24 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 drop-shadow-lg">
            Sonora Zen
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-0 max-w-2xl mx-auto drop-shadow-md">
            L'innovation sonore pour des nuits profondes. Retrouvez la sérénité grâce à la conduction osseuse.
          </p>
        </div>
      </div>

      {/* 3. LE PETIT BOUTON EN BAS */}
      <div className="relative z-20 w-full text-center pb-12">
        <a 
          href="#video" 
          className="inline-flex items-center gap-2.5 bg-[#26A69A] hover:bg-[#26A69A]/90 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          <Play className="h-4 w-4 fill-current" />
          Découvrir la Séance Vidéo
        </a>
      </div>

    </section>
  );
};

export default HeroSection;
