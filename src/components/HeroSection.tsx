import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-sleeping.png";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-[100svh] flex flex-col overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Femme dormant paisiblement avec Sonora Zen — Votre bien-être commence par des nuits apaisées"
          className="w-full h-full object-cover object-center md:object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Content at bottom */}
      <div className="relative z-10 pb-16 md:pb-20 px-6 md:px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl sm:text-3xl md:text-6xl font-bold leading-tight mb-2 md:mb-4"
          >
            <span className="text-white">Sonora Zen</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xs sm:text-sm md:text-lg text-muted-foreground mb-5 md:mb-8 max-w-xs sm:max-w-md mx-auto"
          >
            Le palet sonore qui vous guide vers un sommeil doux et serein.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="default" variant="outline" className="rounded-full px-6 md:px-8 text-sm md:text-base bg-background/60 backdrop-blur-sm" asChild>
              <a href="#produit">Découvrir</a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#produit"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground z-10"
      >
        <ChevronDown size={24} className="md:w-8 md:h-8" />
      </motion.a>
    </section>
  );
};

export default HeroSection;
