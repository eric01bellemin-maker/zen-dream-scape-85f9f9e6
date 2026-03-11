import { motion } from "framer-motion";
import featuresImage from "@/assets/product-features.avif";

const FeaturesImageSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-10">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">
              Caractéristiques
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Conçu pour votre <span className="text-gradient-zen">bien-être</span>
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-xl shadow-primary/5"
          >
            <img
              src={featuresImage}
              alt="Caractéristiques détaillées du Sonora Zen — haut-parleur, Bluetooth 5.3, batterie 400 mAh, USB-C"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesImageSection;
