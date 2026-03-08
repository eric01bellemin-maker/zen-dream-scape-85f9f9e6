import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-sleeping.png";

const HeroSection = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Femme dormant paisiblement avec Sonora Zen" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            Technologie du bien-être
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-gradient-zen">Sonora Zen</span>
            <br />
            <span className="text-foreground/80 text-3xl md:text-4xl font-light">
              Le sommeil réinventé
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
          >
            Glissez le palet sonore sous votre oreiller et laissez-vous bercer par des sons naturels apaisants. 
            Votre bien-être commence par des nuits sereines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button size="lg" className="rounded-full px-8 text-base shadow-lg shadow-primary/25">
              <ShoppingCart className="w-5 h-5 mr-2" />
              Commander — 20,00 €
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 text-base" asChild>
              <a href="#produit">Découvrir</a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#produit"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground"
      >
        <ChevronDown size={32} />
      </motion.a>
    </section>
  );
};

export default HeroSection;
