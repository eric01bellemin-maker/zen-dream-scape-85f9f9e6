import { Play } from "lucide-react";
import { Link } from "react-router-dom"; // On ajoute cet outil indispensable

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between bg-[#0f172a] overflow-hidden">
      
      {/* 1. L'IMAGE DE FOND (SANS TEXTE, AVEC RÉGLAGE VISAGE GAUCHE) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="fond-zen.jpg" 
          alt="Ambiance sereine Sonora Zen" 
          className="w-full h-full object-cover object-[25%_center] md:object-center"
        />
        {/* Voile très léger pour un look premium */}
        <div className="absolute inset-0 bg-black/20 z-10"></div>
      </div>

      {/* 2. ZONE VIDE (On a supprimé le texte pour épurer) */}
      <div className="flex-grow"></div>

      {/* 3. LE BOUTON DE NAVIGATION (FONCTIONNEL) */}
      <div className="relative z-20 w-full text-center pb-12">
        <Link 
          to="/VideoSession" 
          className="inline-flex items-center gap-2.5 bg-[#26A69A] hover:bg-[#26A69A]/90 text-white px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          <Play className="h-4 w-4 fill-current" />
          Découvrir la Séance Vidéo
        </Link>
      </div>

    </section>
  );
};

export default HeroSection;
