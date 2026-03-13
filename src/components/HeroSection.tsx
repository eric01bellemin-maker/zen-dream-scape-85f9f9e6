import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-sleeping.png";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background image - displayed prominently */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Femme dormant paisiblement avec Sonora Zen — Votre bien-être commence par des nuits apaisées"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
      </div>

      {/* Spacer to push content to bottom */}
      <div className="flex-1" />

      {/* Content at bottom over the gradient */}
      <div className="relative z-10 pb-12 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-6xl font-bold leading-tight mb-3"
            >
              <span className="text-white">Sonora Zen</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-sm md:text-lg text-muted-foreground mb-6 max-w-md mx-auto"
            >
              Le palet sonore qui vous guide vers un sommeil doux et serein.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base bg-background/60 backdrop-blur-sm" asChild>
                <a href="#produit">Découvrir</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.a
        href="#produit"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground z-10"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
