import { motion } from "framer-motion";
import soundBirds from "@/assets/sound-birds.jpg";
import soundRiver from "@/assets/sound-river.jpg";
import soundWaves from "@/assets/sound-waves.jpg";
import soundWind from "@/assets/sound-wind.jpg";

const sounds = [
  { image: soundBirds, title: "Chant d'oiseaux", desc: "Mélodies douces au lever du jour" },
  { image: soundRiver, title: "Rivière apaisante", desc: "Le murmure continu de l'eau vive" },
  { image: soundWaves, title: "Douceur des vagues", desc: "Le ressac hypnotique de l'océan" },
  { image: soundWind, title: "Souffle du vent", desc: "La brise légère à travers les arbres" },
];

const SoundsSection = () => {
  return (
    <section id="sons" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Univers sonore</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            4 ambiances pour <span className="text-gradient-zen">s'évader</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Chaque son a été capturé en haute fidélité dans des environnements naturels préservés.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {sounds.map((sound, i) => (
            <motion.div
              key={sound.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-square mb-4 border border-border/50 group-hover:border-primary/30 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-primary/10">
                <img
                  src={sound.image}
                  alt={sound.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-semibold text-primary-foreground">{sound.title}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center">{sound.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoundsSection;
