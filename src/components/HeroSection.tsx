import { motion } from "framer-motion";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#121212] text-white w-full overflow-hidden">
      
      {/* L'image de fond avec un chemin direct */}
      <img 
        src="woman-sleeping.jpg" 
        alt="Sommeil profond"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 grayscale"
        onError={(e) => {
          // Si l'image ne charge pas, on cache la balise pour éviter l'icône d'erreur
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />

      {/* Overlay de dégradé pour assurer la transition avec le reste du site */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#121212]/30 via-[#121212]/70 to-[#121212]" />
      
      <div className="container relative z-20 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col items-center gap-8"
        >
          <h1 className="text-6xl md:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl">
            SONORA ZEN
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-zinc-400 max-w-2xl tracking-[0.3em] uppercase">
            L'immersion sonore <span className="text-white font-medium italic">absolue</span>
          </p>

          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-zinc-500 to-transparent" />

          <Button 
            onClick={() => document.getElementById('sounds')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full mt-4 bg-white text-black px-12 py-8 text-lg hover:bg-zinc-200 transition-all font-bold tracking-widest"
          >
            COMMENCER L'EXPÉRIENCE
          </Button>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-30 text-white text-xs uppercase tracking-[0.2em]">
        Défiler
      </div>
    </section>
  );
};

export default HeroSection;
