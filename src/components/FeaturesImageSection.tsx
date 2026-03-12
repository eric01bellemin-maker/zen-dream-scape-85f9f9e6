import { motion } from "framer-motion";
import productImage from "@/assets/product-features.png";
import { Bluetooth, Brain, Timer, Monitor, Waves, Lightbulb } from "lucide-react";

const specs = [
  { icon: Bluetooth, label: "Bluetooth/TF" },
  { icon: Waves, label: "Conduction osseuse" },
  { icon: Lightbulb, label: "Affichage LED" },
  { icon: Monitor, label: "Double mode audio" },
  { icon: Brain, label: "Aide au sommeil" },
  { icon: Timer, label: "Arrêt programmeé" },
];

const FeaturesImageSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
            Caractéristiques
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Conçu pour votre <span className="text-gradient-zen">bien-être</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {/* Left specs */}
          <div className="flex flex-col gap-5">
            {specs.slice(0, 3).map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex justify-end"
              >
                <div className="bg-muted/60 rounded-full px-4 py-2 flex items-center gap-2 flex-row-reverse">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <spec.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="font-medium text-sm text-foreground">{spec.label}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center product image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <img
              src={productImage}
              alt="Sonora Zen — caractéristiques du produit"
              className="w-full max-w-[320px] drop-shadow-2xl"
            />
          </motion.div>

          {/* Right specs */}
          <div className="flex flex-col gap-5">
            {specs.slice(3).map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="bg-muted/60 rounded-full px-4 py-2 inline-flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <spec.icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="font-medium text-sm text-foreground">{spec.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesImageSection;
