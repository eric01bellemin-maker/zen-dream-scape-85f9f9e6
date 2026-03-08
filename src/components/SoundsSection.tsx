import { motion } from "framer-motion";
import heroSounds from "@/assets/hero-sounds.png";

const SoundsSection = () => {
  return (
    <section id="sons" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Univers sonore</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            4 ambiances pour <span className="text-gradient-zen">s'évader</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10"
        >
          <img
            src={heroSounds}
            alt="Les 4 ambiances sonores Sonora Zen : chant d'oiseaux, rivière, vagues, vent"
            className="w-full h-auto"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground mt-8 max-w-2xl mx-auto leading-relaxed"
        >
          Chant d'oiseaux apaisant • Rivière apaisante • Douceur des vagues • Souffle du vent
          <br />
          <span className="text-sm">Chaque son a été capturé en haute fidélité dans des environnements naturels préservés.</span>
        </motion.p>
      </div>
    </section>
  );
};

export default SoundsSection;
