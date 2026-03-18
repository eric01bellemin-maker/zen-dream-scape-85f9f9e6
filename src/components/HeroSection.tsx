import { motion } from "framer-motion";
import { Button } from "./ui/button"; // Assure-toi que le chemin vers UI Button est bon

const HeroSection = () => {
  return (
    /* 1. Fond de section en Gris Anthracite #121212 pour l'unité totale */
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#121212] text-white w-full">
      
      {/* 2. Overlay Radial doux pour garder une zone de lumière au centre */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-transparent via-[#121212]/90 to-[#121212]" />
      
      {/* 3. L'Image de Fond (La correction est ici) */
          /* J'ai simplifié le chemin src="/woman-sleeping.jpg". 
             Elle doit être dans ton dossier 'public' sur GitHub. */
      }
      <img 
        src="/woman-sleeping.jpg" // CORRECTION : Plus simple et direct.
        alt="Femme dormant paisiblement sur son oreiller avec Sonora Zen"
        className="absolute inset-0 w-full h-full object-cover z-[-1] mix-blend-multiply opacity-50 filter grayscale"
      />

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center gap-6"
        >
          {/* Typographie Épurée et Harmonisée */}
          <h1 className="text-5xl md:text-7xl font-bold font-['Cormorant_Garamond'] tracking-tight leading-tight text-white">
            <span className="text-zinc-300">Sonora Zen</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-light text-zinc-400 max-w-2xl leading-relaxed tracking-wide">
            Le palet sonore révolutionnaire qui transforme votre oreiller en un <span className="text-gradient-zen">cocon de sérénité</span>.
          </p>

          <Button size="lg" className="rounded-full mt-8 bg-white text-black text-lg font-bold py-7 hover:bg-zinc-200 transition-all shadow-lg">
            DÉCOUVRIR LES SONS
          </Button>
        </motion.div>
      </div>

      {/* Petit effet de 'Glow' discret en bas pour le lien avec la section Sons */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#121212] to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
