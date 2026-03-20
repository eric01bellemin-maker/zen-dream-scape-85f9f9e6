import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden bg-slate-900">
      {/* L'image de fond Zen */}
      <img
        src="fond-zen.jpg"
        alt="Ambiance Zen Sonora"
        className="absolute inset-0 h-full w-full object-cover opacity-70 transition-opacity duration-1000"
      />
      
      {/* Overlay dégradé pour que le texte soit lisible */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

      <div className="container relative z-10 flex h-full flex-col justify-center px-6 text-white">
        <h1 className="mb-4 max-w-2xl animate-fade-in text-5xl font-bold tracking-tight md:text-7xl">
          Sonora Zen
        </h1>
        <p className="mb-8 max-w-lg animate-fade-in text-lg text-slate-200 md:text-xl">
          Plongez dans un univers de sérénité absolue. 
          Découvrez la technologie sonore au service de votre bien-être.
        </p>
        <div className="flex animate-fade-in gap-4">
          <Link to="/VideoSession">
            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200">
              Découvrir la Séance Vidéo
            </Button>
          </Link>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            En savoir plus
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
