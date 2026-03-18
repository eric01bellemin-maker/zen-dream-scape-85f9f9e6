import { motion } from "framer-motion";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#121212] text-white w-full overflow-hidden">
      
      {/* Image de fond - Chemin direct pour éviter les erreurs */}
      <img 
        src="woman-sleeping.jpg" 
        alt="Sommeil"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          if (!target.src.includes('zen-dream-scape')) {
            target.src = "/zen-dream-scape/woman-sleeping.jpg";
          }
        }}
      />

      {/* Dégradé léger pour le bas de page */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent to-[#121212]/80" />
      
      <div className="container relative z-20 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center mt-[60vh]"
        >
          <Button 
            onClick={() => document.getElementById('sounds')?.scrollIntoView({ behavior: 'smooth' })}
            className="rounded-full bg-white text-black px-10 py-6 text-lg hover:bg-zinc-200 transition-all font-bold tracking-widest shadow-2xl"
          >
            COMMENCER L'EXPÉRIENCE
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
