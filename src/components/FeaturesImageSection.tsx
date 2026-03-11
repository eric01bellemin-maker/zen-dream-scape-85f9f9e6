import { motion } from "framer-motion";
import featuresImage from "@/assets/product-features.avif";

const labels = [
  { text: "Façade principale", top: "18%", right: "4%", origin: "right" },
  { text: "Carte circuit PCBA", top: "27%", right: "2%", origin: "right" },
  { text: "Batterie", top: "30%", left: "6%", origin: "left" },
  { text: "Boutons", top: "50%", left: "14%", origin: "left" },
  { text: "2 haut-parleurs\nà conduction osseuse", top: "44%", right: "4%", origin: "right" },
  { text: "Coque inférieure", top: "60%", left: "30%", origin: "left" },
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
            className="relative rounded-3xl overflow-hidden shadow-xl shadow-primary/5 bg-card"
          >
            <img
              src={featuresImage}
              alt="Vue éclatée du Sonora Zen montrant ses composants internes"
              className="w-full h-auto"
              loading="lazy"
            />
            {/* French labels with opaque background to cover English text */}
            {labels.map((label, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="absolute px-2 py-1 bg-card/95 rounded text-[10px] md:text-sm font-bold text-foreground whitespace-pre-line leading-tight"
                style={{
                  top: label.top,
                  left: label.left,
                  right: label.right,
                  textAlign: label.origin === "right" ? "right" : "left",
                }}
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
