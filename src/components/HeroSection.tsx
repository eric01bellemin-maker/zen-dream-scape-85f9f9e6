import { Play } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between bg-[#0f172a] overflow-hidden">
      
      {/* 1. L'IMAGE DE FOND AVEC LE SLASH / */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/zen-dream-scape-85f9f9e6/fond-zen.jpg"
          alt="Ambiance sereine Sonora Zen" 
          className="w-full h-full object-cover object-[25%_center] md:object-center"
        />
        <div className="absolute inset-0 bg-black/20 z-10"></div>
      </div>

      <div className="flex-grow"></div>

      {/* 3. LE BOUTON DE NAVIGATION */}
      <div className="relative z-20 w-full text-center pb-12">
        <Link 
          to="/VideoSession"
          className="inline-flex items-center gap-2.5 bg-[#26A69A] hover:bg-[#26A69A]/90 text-white px-6 py-2.5 rounded-full transition-all"
        >
          {/* On vérifie si Play existe, sinon on ne met rien pour éviter la page blanche */}
          {Play && <Play className="h-4 w-4 fill-current" />}
          <span className="text-sm font-bold uppercase tracking-wider">Découvrir la Séance Vidéo</span>
        </Link>
      </div>

    </section>
  );
};

export default HeroSection;
