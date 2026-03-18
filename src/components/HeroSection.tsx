import { motion } from "framer-motion";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#121212] text-white w-full overflow-hidden">
      
      {/* 1. L'image de la femme (récupérée dans le dossier public) */}
     <img 
       src="woman-sleeping.jpg" 
       alt="Sommeil profond Sonora Zen"
       className="absolute inset-0 w-full h-full object-cover z-0 opacity-40 mix-blend-luminosity grayscale"
   />

      {/* 2. Overlay de dégradé pour fondre l'image dans le noir du site */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#121212]/30 via-[#121212]/70 to-[#121212]" />
      
      <div className="container relative z-20 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
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
            className="rounded-full mt-4 bg-white text-black px-12 py-8 text-lg hover:bg-zinc-200 transition-all font-bold tracking-widest shadow-[0_0_30px_rgba(255,255,255,0.2)]"
          >
            COMMENCER L'EXPÉRIENCE
          </Button>
        </motion.div>
      </div>

      {/* Indicateur de défilement discret */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 opacity-30 text-white text-xs tracking-widest uppercase"
      >
        Défiler
      </motion.div>
    </section>
  );
};

export default HeroSection;
