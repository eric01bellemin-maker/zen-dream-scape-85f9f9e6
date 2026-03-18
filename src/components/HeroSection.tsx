import { motion } from "framer-motion";
import { Button } from "./ui/button"; // Assure-toi que le chemin vers UI Button est bon

const HeroSection = () => {
  return (
    /* CHANGEMENT 1 : Fond de section identique au site (Gris Anthracite #121212) */
    <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#121212] text-white w-full">
      
      {/* CHANGEMENT 2 : Overlay Radial doux. Il crée une lumière diffuse au centre. */}
      <div className="absolute inset-0 z-0 bg-gradient-radial from-transparent via-[#121212]/80 to-[#121212]" />
      
      {/* CHANGEMENT 3 : Intégration de l'Image.
          J'ai mis l'opacité à 40% et un blend-mode pour qu'elle s'assombrisse et se fonde. */}
      <img 
        src="/zen-dream-scape/woman-sleeping.jpg" // Vérifie que c'est bien ce chemin vers ton image
        alt="Femme dormant paisiblement sur son oreiller avec Sonora Zen"
        className="absolute inset-0 w-full h-full object-cover z-[-1] mix-blend-multiply opacity-40 filter grayscale"
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
