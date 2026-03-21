import { Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between bg-[#0f172a] overflow-hidden">
      
      {/* 1. L'IMAGE DE FOND (AVEC RÉGLAGE MOBILE OPTIMISÉ ET VOILE ADOUCI) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="fond-zen.jpg" 
          alt="Ambiance sereine Sonora Zen" 
          className="w-full h-full object-cover object-[25%_center] md:object-center" // <-- Ton réglage mobile
        />
        {/* Voile sombre adouci à 20% car il n'y a plus de texte à rendre lisible */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>
      </div>

      {/* 2. LE PETIT BOUTON EN BAS (POSITIONNÉ POUR NE PAS GÊNER LE VISAGE) */}
      <div className="relative z-20 w-full text-center mt-auto pb-12">
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
