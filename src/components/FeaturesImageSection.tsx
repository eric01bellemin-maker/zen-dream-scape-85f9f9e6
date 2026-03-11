import { motion } from "framer-motion";
import featuresImage from "@/assets/product-features.avif";

const labels = [
  { text: "Façade principale", top: "14%", left: "72%", align: "left" as const },
  { text: "Carte circuit PCBA", top: "24%", left: "72%", align: "left" as const },
  { text: "Batterie", top: "28%", left: "8%", align: "right" as const },
  { text: "Boutons", top: "46%", left: "18%", align: "right" as const },
  { text: "2 haut-parleurs\nà conduction osseuse", top: "40%", left: "58%", align: "left" as const },
  { text: "Coque inférieure", top: "55%", left: "38%", align: "center" as const },
];

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
            className="relative rounded-3xl overflow-hidden shadow-xl shadow-primary/5"
          >
            <img
              src={featuresImage}
              alt="Vue éclatée du Sonora Zen montrant ses composants internes"
              className="w-full h-auto"
              loading="lazy"
            />
            {/* Overlay to hide English text */}
            <div className="absolute inset-0 bg-background/60" />
            {/* French labels */}
            {labels.map((label, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="absolute text-xs md:text-sm font-semibold text-foreground whitespace-pre-line leading-tight"
                style={{ top: label.top, left: label.left, textAlign: label.align }}
              >
                {label.text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesImageSection;
