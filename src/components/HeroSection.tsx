import { motion } from "framer-motion";
import { Button } from "./ui/button";

const HeroSection = () => {
  // Cette ligne permet de trouver l'image peu importe le support
  const imagePath = "woman-sleeping.jpg";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#121212] text-white w-full overflow-hidden">
      
      {/* L'image avec une sécurité si elle ne charge pas */}
      <img 
        src={imagePath} 
        alt="Sommeil profond Sonora Zen"
       
        onError={(e) => {
          // Si l'image échoue, on essaye le chemin alternatif avec le nom du dossier
          const target = e.target as HTMLImageElement;
          if (!target.src.includes('zen-dream-scape')) {
            target.src = "/zen-dream-scape/" + imagePath;
          }
        }}
      />

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
    </section>
  );
};

export default HeroSection;
