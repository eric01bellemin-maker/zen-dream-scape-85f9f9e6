import { motion } from "framer-motion";
import { Button } from "./ui/button";

const HeroSection = () => {
  // Cette ligne permet de trouver l'image peu importe le support
  const imagePath = "woman-sleeping.jpg";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#121212] text-white w-full overflow-hidden">
      
      {/* L'image de fond (clarté maximale à 100%) */}
      <img 
        src={imagePath} 
        alt="Sommeil profond Sonora Zen"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          if (!target.src.includes('zen-dream-scape')) {
            target.src = "/zen-dream-scape/" + imagePath;
          }
        }}
      />

      {/* Overlay de dégradé très discret pour le bouton */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-[#121212]/30 to-[#121212]/80" />
      
      <div className="container relative z-20 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex flex-col items-center gap-8 mt-[70vh]" // On descend le bouton en bas
        >
          {/* LE TEXTE A ÉTÉ SUPPRIMÉ ICI */}

          <Button 
            onClick={() => document.getElementById('sounds')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full bg-white text-black px-12 py-8 text-lg hover:bg-zinc-200 transition-all font-bold tracking-widest shadow-2xl"
          >
            COMMENCER L'EXPÉRIENCE
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
