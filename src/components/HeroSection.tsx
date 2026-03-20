import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between bg-[#0f172a] overflow-hidden">
      
      {/* 1. IMAGE DE FOND - ESSAYONS SANS LE SLASH SI LE SLASH A ÉCHOUÉ */}
      <div className="absolute inset-0 z-0">
        <img 
          src="4.jpg" 
          alt="Ambiance Sonora Zen" 
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            // Petit script de secours si l'image 4.jpg est introuvable
            e.currentTarget.src = "Présentation du produit.jpg";
          }}
        />
        {/* Voile sombre pour garantir la lisibilité du texte blanc */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>
      </div>

      {/* 2. TEXTE CENTRAL */}
      <div className="container mx-auto px-6 relative z-20 flex-grow flex items-center justify-center pt-24 pb-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 drop-shadow-2xl">
            Sonora Zen
          </h1>
          <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
            L'innovation sonore pour des nuits profondes. Retrouvez la sérénité grâce à la conduction osseuse.
          </p>
        </div>
      </div>

      {/* 3. BOUTON DISCRET EN BAS */}
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
