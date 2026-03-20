import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative h-[85vh] w-full overflow-hidden bg-slate-900">
      {/* Image de fond avec fondu */}
      <img
        src="fond-zen.jpg"
        alt="Ambiance Zen Sonora"
        className="absolute inset-0 h-full w-full object-cover opacity-80"
      />
      
      {/* Overlay pour assombrir un peu plus et aider la lecture */}
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      <div className="container relative z-10 flex h-full flex-col justify-center px-6 pt-20 text-white">
        <div className="max-w-2xl animate-fade-in space-y-6 drop-shadow-2xl">
          <h1 className="text-6xl font-bold tracking-tight md:text-8xl">
            Sonora Zen
          </h1>
          <p className="max-w-lg text-xl text-slate-100 md:text-2xl font-light leading-relaxed">
            Plongez dans un univers de sérénité absolue. 
            Découvrez la technologie sonore au service de votre bien-être.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/VideoSession">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-200 px-8 text-md font-semibold h-14">
                Découvrir la Séance Vidéo
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8 text-md h-14">
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
